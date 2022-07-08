"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[315],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5209:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return s},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Use Dagger Provider with Android Material Stepper",date:new Date("2019-01-24T13:03:38.000Z"),draft:!1},p=void 0,c={permalink:"/blog/dagger-material-stepper",editUrl:"https://github.com/bastienpaulfr/bastienpaulfr.github.io/edit/master/website/blog/blog/dagger-material-stepper.md",source:"@site/blog/dagger-material-stepper.md",title:"Use Dagger Provider with Android Material Stepper",description:"On an Android project, I am using android-material-stepper from StepStone. I am also using dependency injection with dagger.",date:"2019-01-24T13:03:38.000Z",formattedDate:"January 24, 2019",tags:[],readingTime:1.985,truncated:!1,authors:[],prevItem:{title:"Publish a Kotlin lib with gradle Kotlin DSL",permalink:"/blog/publish-kotlin-lib"},nextItem:{title:"Android : Cr\xe9er un fichier keystore (jks) \xe0 partir d\u2019une cl\xe9 (.pk8) et d\u2019un certificat (.pem)",permalink:"/blog/from-pk8-to-jks"}},s={authorsImageUrls:[]},d=[],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"On an Android project, I am using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stepstone-tech/android-material-stepper"},"android-material-stepper")," from StepStone. I am also using dependency injection with ",(0,i.kt)("a",{parentName:"p",href:"https://google.github.io/dagger/"},"dagger"),"."),(0,i.kt)("p",null,"I was facing the following problem : How to properly inject ",(0,i.kt)("inlineCode",{parentName:"p"},"Fragments")," without the need to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"DaggerComponent")," for each of them ?"),(0,i.kt)("p",null,"Providers are here to help. This is how I am doing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class StepFragmentBL @Inject constructor() :\n Fragment(), Step, BlView {\n\n    @Inject\n    lateinit var blPresenter: BlPresenter\n\n    ...\n}\n")),(0,i.kt)("p",null,"This is one of the Fragment I am creating. We can see the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Inject constructor")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"@Inject lateinit")," var that shows that this object is injectable by dagger. It is also implementing ",(0,i.kt)("inlineCode",{parentName:"p"},"Step")," to be used by ",(0,i.kt)("inlineCode",{parentName:"p"},"StepperLayout")," and implements another interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class BlPresenter @Inject constructor\n\nBlPresenter is a simple injectable class\n\n@Singleton\n@Component(modules = [(DeliveryModule::class)])\ninterface DeliveryComponents {\n\n    fun inject(deliveryActivity: DeliveryActivity)\n}\n")),(0,i.kt)("p",null,"This is the component injecting my Activity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Module\nclass DeliveryModule(private val activity: DeliveryActivity) {\n\n    @Named("Activity")\n    @Provides\n    internal fun providesContext(): Context {\n        return activity\n    }\n\n    @Provides\n    fun providesFragmentManager(): FragmentManager {\n        return activity.supportFragmentManager\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class DeliveryActivity : AppCompatActivity() {\n\n    @Inject\n    lateinit var deliveryPresenter: DeliveryPresenter\n\n    private lateinit var deliveryComponents: DeliveryComponents\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_home)\n\n        di()\n        ui()\n    }\n\n    private fun di() {\n        deliveryComponents = DaggerDeliveryComponents.builder()\n                .deliveryModule(DeliveryModule(this))\n                .build()\n        deliveryComponents.inject(this)\n    }\n\n    private fun ui() {\n        Timber.v(Info.getMethodName())\n        stepperLayout.adapter = deliveryPresenter.stepperAdapter\n    }\n}\n")),(0,i.kt)("p",null,"We are creating the component into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Activity")," here. Then, presenter for this activity is also injected"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class DeliveryPresenter @Inject constructor() {\n\n    @Inject\n    lateinit var stepperAdapter: PickingStepperAdapter\n\n}\n")),(0,i.kt)("p",null,"We are arriving to a ",(0,i.kt)("inlineCode",{parentName:"p"},"StepperAdapter")," instance, also injected"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'private const val NB_FRAG = 2\n\nclass PickingStepperAdapter @Inject constructor(\n        fm: FragmentManager,\n        @Named("Activity") context: Context) :\n            AbstractFragmentStepAdapter(fm, context) {\n\n    /**\n    * Provider for Fragment\n    */\n    @Inject\n    lateinit var blFragmentProvider: Provider<StepFragmentBL>\n\n    /**\n    * Provider for Fragment\n    */\n    @Inject\n    lateinit var pdtFragmentProvider: Provider<StepFragmentPdt>\n\n    override fun getCount(): Int {\n        return NB_FRAG\n    }\n\n    override fun createStep(position: Int): Step {\n        Timber.v("${Info.getMethodName()} $position")\n\n        return when (position) {\n            0 -> blFragmentProvider.get()\n            else -> pdtFragmentProvider.get()\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Here, we are just using"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Inject\n    lateinit var blFragmentProvider: Provider<StepFragmentBL>\n")),(0,i.kt)("p",null,"to tell dagger to create the code that will provide an instance of fragment each time ",(0,i.kt)("inlineCode",{parentName:"p"},"blFragmentProvider.get()")," will be called. Indeed, this is called here"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"return when (position) {\n            0 -> blFragmentProvider.get()\n            else -> pdtFragmentProvider.get()\n        }\n")),(0,i.kt)("p",null,"Like this, dagger is injecting fragment for us, and we don\u2019t have to care about objects creation"))}m.isMDXComponent=!0}}]);