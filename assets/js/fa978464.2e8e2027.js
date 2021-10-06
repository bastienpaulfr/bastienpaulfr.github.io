"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[562],{5529:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],s={sidebar_position:1},l="AndroidCountries",c={unversionedId:"countries/index",id:"countries/index",isDocsHomePage:!1,title:"AndroidCountries",description:"Download",source:"@site/docs/countries/index.md",sourceDirName:"countries",slug:"/countries/index",permalink:"/docs/countries/index",editUrl:"https://github.com/bastienpaulfr/bastienpaulfr.github.io/edit/master/docs/docs/countries/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"countriesSidebar"},u=[{value:"Set Up",id:"set-up",children:[{value:"For country data",id:"for-country-data",children:[]},{value:"For flag resources",id:"for-flag-resources",children:[]}]},{value:"Presentation",id:"presentation",children:[{value:"Country data",id:"country-data",children:[]},{value:"Flags",id:"flags",children:[]},{value:"Logs",id:"logs",children:[]}]},{value:"License",id:"license",children:[{value:"Flag pictures",id:"flag-pictures",children:[]},{value:"Code",id:"code",children:[]}]}],d={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"androidcountries"},"AndroidCountries"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://jitpack.io/#bastienpaulfr/AndroidCountries"},(0,i.kt)("img",{parentName:"a",src:"https://jitpack.io/v/bastienpaulfr/AndroidCountries.svg",alt:"Download"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://travis-ci.org/bastienpaulfr/AndroidCountries"},(0,i.kt)("img",{parentName:"a",src:"https://travis-ci.org/bastienpaulfr/AndroidCountries.svg?branch=master",alt:"Build Status"}))),(0,i.kt)("p",null,"Countries resources for Android"),(0,i.kt)("h2",{id:"set-up"},"Set Up"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n    maven { url 'https://jitpack.io' }\n}\n")),(0,i.kt)("h3",{id:"for-country-data"},"For country data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.github.bastienpaulfr.AndroidCountries:countries:0.1.4'\n}\n")),(0,i.kt)("h3",{id:"for-flag-resources"},"For flag resources"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.github.bastienpaulfr.AndroidCountries:flags:0.1.4'\n}\n")),(0,i.kt)("h2",{id:"presentation"},"Presentation"),(0,i.kt)("h3",{id:"country-data"},"Country data"),(0,i.kt)("p",null,"Data is gotten from ",(0,i.kt)("a",{parentName:"p",href:"https://restcountries.eu/"},"https://restcountries.eu/")),(0,i.kt)("p",null,"Data is stored in a json file. This file is parsed during the first access to data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Create a countryManager\nval countryManager = CountryManager(context) // Context is used for accessing to raw resource where json file is stored.\n\n// getting the full list of countries\nval countries: Collection<Country> = countryManager.countries\n\n// Getting a country by name\nval france: Country = countryManager.countryByName["France"]\n\n//Getting a country vy alpha3 code\nval france: Country = countryManager.countryByAlpha3Code["FRA"]\n\n//Getting a country vy alpha2 code\nval france: Country = countryManager.countryByAlpha2Code["FR"]\n\n')),(0,i.kt)("h3",{id:"flags"},"Flags"),(0,i.kt)("p",null,'The flags are named by their 2-letter ISO-3166 country code, except for the\nconstituent countries of Great Britain which have 6-letter codes "GB-ENG" etc).'),(0,i.kt)("p",null,"Kosovo uses the user-assigned country code ",(0,i.kt)("inlineCode",{parentName:"p"},"XK"),", which is not part of the ISO standard, but in use by several multinational organizations."),(0,i.kt)("p",null,"Flags are standard resources. Name of resource is ",(0,i.kt)("inlineCode",{parentName:"p"},"ic_{2-letter ISO-3166 country code}")),(0,i.kt)("p",null,"For example :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"val resId = R.drawable.ic_fr\n")),(0,i.kt)("p",null,"SVG counterpart of drawable resource is in ",(0,i.kt)("inlineCode",{parentName:"p"},"data/svg")," folder"),(0,i.kt)("h3",{id:"logs"},"Logs"),(0,i.kt)("p",null,"This library uses ",(0,i.kt)("a",{parentName:"p",href:"http://www.slf4j.org/"},"SLF4J")," for logging. Please use android binding to\nlog into logcat. More info on ",(0,i.kt)("a",{parentName:"p",href:"http://www.slf4j.org/android/"},"Android binding")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    // https://mvnrepository.com/artifact/org.slf4j/slf4j-android\n    implementation 'org.slf4j:slf4j-android:1.7.30'\n}\n")),(0,i.kt)("p",null,"You can also bind SLF4J to timber. In this case please use this dependency"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.arcao:slf4j-timber:3.1'\n}\n")),(0,i.kt)("p",null,"To activate verbose logging, please add this into your code :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"LogDefines.setVerbose(true);\n")),(0,i.kt)("p",null,"Sometimes, it can have log for profiling, in this case, to activate them please add\nthis in code :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"LogDefines.setProfile(true);\n")),(0,i.kt)("p",null,"One ",(0,i.kt)("inlineCode",{parentName:"p"},"TAG")," is used for all logging from lib : ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidCountries"),". It would be easy to filter on this tag if you\nwant to disable all logging from lib. Filtering can be done with ",(0,i.kt)("inlineCode",{parentName:"p"},"Timber")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tree"),"\nfrom ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bastienpaulfr/Treessence"},"Treessence")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'com.github.bastienpaulfr:Treessence:1.0.5'\n}\n")),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("h3",{id:"flag-pictures"},"Flag pictures"),(0,i.kt)("p",null,"The source files were taken from Wikipedia and are not under copyright\nprotection since flags are effectively in public domain."),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Copyright (C) 2020 Bastien Paul\n\nLicensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\n   http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n')))}p.isMDXComponent=!0}}]);