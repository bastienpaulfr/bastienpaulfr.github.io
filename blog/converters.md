---
title: "How to make a good converter"
date: 2022-07-08T14:55:46+02:00
draft: false
---

# Converters
## Purpose
The purpose of the **Converter** pattern is to provide a generic, common way of bidirectional conversion between corresponding types, allowing a clean implementation in which the types do not need to be aware of each other.

In plain words, the **Converter** pattern makes it easy to map instances of one class into instances of another class.

We're making use of Converter to map models when they are **propagating between layers** (API, Data, Domain, Presentation) to make them **convenient to work with on a specific layer** and do **not spread extra dependencies to other layers**.

### DIP
Conversion is here to comply with dependency inversion principle. Domain layer only know about itself. **UI** **layer** needs to convert **UI** **model** into **Domain** **DTO** to deal with **Domain** **layer**. **Data layer** needs to convert **Data model** into **Domain dto** to deals with **Domain layer**.

### SRP
We want to extract conversion methods to comply with Single Responsibility Principle. Putting conversion logic in its own scope, makes it easier to test. Extracting conversion logic from other classes, ensure that they focus on their business and not in conversion logic.

## Implementation
Actually, there are different uses cases that we should handle that would trigger different implementations

### Simple extension method

For the simpler cases, it is advised to stick with [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) principle and have only an extension method in a file named `<source type>To<destination type>Converter.kt` because you aren’t gonna need a class.

```kotlin
fun MyModel.toMyOtherModel() = MyOtherModel(
   attr1 = id,
   attr2 = name,
   //...
)
```

- But I need to handle lists of items !

 Kotlin is here to help thanks to the `map{}` extension to collection classes

```kotlin
// Given this converter method
fun MyModel.toMyOtherModel(): MyOtherModel {}
// And the fact that we have a list of objects to convert
val myModels = listOf(myModel1, myModel2, myModel3)

// Convertion could be done with map extension method.
val myOtherModels = myModels.map { it.toMyOtherModel() }
```

❌ Do not call extension method from domain layer.

### Simple class

You can create a converter class if you want to use Injection features or if you need additional contributors. You should always avoid to use kotlin `objects` because using a Singleton is often a code smell. It is a ressource killer because never destoyed. They are hiding dependencies and states and they are making your application more coupled.

#### Example

👉 Create the **converter class** that can be injected thanks to `@Inject`

```kotlin
class ATypeToAnotherTypeConverter @Inject constructor()
    fun convert(from: AType): AnotherType = when (this) {
		    AType.A-> AnotherType.A
		    AType.B-> AnotherType.B
		}
}
```

### We need an additional contributor

Sometimes you’ll need an additional contributor like a `LocaleProvider` or a `DateProvider`

👉 Inject them in the converter class

```kotlin
class DomainDtoToUiModel @Inject constructor(
    // here timezone is dynamic, it is retrieved from a provider
    timeZoneProvider: TimeZoneProvider
) {

    // Here date format is static. To make is dynamic, format can be injected in constructor.
		private val simpleDateFormat = SimpleDateFormat(/*...*/)

	  fun convert(dto: DomainDto): UiModel {
        return UiModel(
            displayDate = simpleDateFormat.format(dto.currentDate, timeZoneProvider.getLocalTimeZone())
        )
		}
{
```

### We need a converter with additional parameters

Most of the time, it is an unexpected case. Converters have 1:1 relationship.

💡 If logic begins to be complex, or you’re creating several implementations of an interface, you should consider using a [Factory](https://refactoring.guru/design-patterns/factory-method) or a [Builder](https://refactoring.guru/design-patterns/builder) instead.

You might want to convert a domain DTO in a model of UI or data layer, then use the last model along a factory to create more complex instance.

### ✅ Do
- Place converter in UI or Data layer (along ViewModel or DataSource)
- Make converter as simple as possible

### ❌ Don’t
- 🧨 Conversion method can crash
- Call converter from Domain layer
- Implement complex logic
- Extend very common classes like `String`, `Long` or `Int`

## Naming

### Class

`<source type>To<destination type>Converter`, e.g.:

- `LocalCardToCardConverter` (LocalCard 👉 Card)
- `RequestToLocalRequestConverter` (Request 👉 LocalRequest)

💡 It should be clear what types converters are converting. This is the reason why the **source** type **and** the **destination** type are mentioned.

### Extension method

The extension method used for converting the extended object into the target one should be named : `fun Model.toNameOfTargetedClass(){}`

It should belong to a file named `<source type>To<destination type>Converter.kt`

💡 The **destination type** of the converter extension method should be crystal clear. A model can also be converted in **several** kind of classes. This is the reason why methods like `.toDomainModel()` or `.toDataModel()` are not encouraged.

Given this data classes:

```kotlin
// Data layer
data class RemoteTypeOfMyObject()

// Domain layer
data class MyAwesomeData()

// UI layer
data class AwesomeUiState()
```

Then we should have these extension methods

```kotlin
// Data layer
fun RemoteTypeOfMyObject.toMyAwsomeData(): MyAwesomeData
fun MyAwesomeData.toRemoteTypeOfMyObject(): RemoteTypeOfMyObject

// UI Layer
fun AwsomeUiState.toMyAwsomeData(): MyAwesomeData
fun MyAwesomeData.toAwesomeUiState(): AwesomeUiState
```

## File
Converter class or methods should be placed into their belonging layer, not in the domain one.

⚠️ Domain layer should not know about classes that are in UI or in Data layer.

```
root
  |- Data
  |    |-...- RemoteTypeOfMyObject.kt
  |    |-...- RemoteTypeOfMyObjectConverter.kt  <- Converter is here
  |
  |- Domain
  |     /!\ No converters here /!\
  |
  |- UI
      |-...- AwsomeUiState.kt
      |-...- AwsomeUiStateConverter.kt <- Converter is here
```

## Layers
### Data
Converters in data layer should be called from data sources. Repositories are dealing with business models.

> A source is part of the external world : everything that you don’t own and that you want to scope into the smallest possible part. No-one should know about your source implementation details except the source itself. So it should be responsible to expose a model that the consumer can undestand without having to know the implementation details of that source

### UI
Converters in UI layer should be called from ViewModels. They are the bridge between UI model and business rules (implemented in UseCases)
