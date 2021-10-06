"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64],{646:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(7462),i=n(3366),u=(n(7294),n(3905)),o=["components"],a={title:"Mutex Locker",date:new Date("2014-08-04T13:02:32.000Z"),draft:!1},l=void 0,s={permalink:"/blog/mutex-locker",editUrl:"https://github.com/bastienpaulfr/bastienpaulfr.github.io/edit/master/website/blog/blog/mutex-locker.md",source:"@site/blog/mutex-locker.md",title:"Mutex Locker",description:"Pr\xe9ambule",date:"2014-08-04T13:02:32.000Z",formattedDate:"August 4, 2014",tags:[],readingTime:1.085,truncated:!1,authors:[],prevItem:{title:"Assert Statique",permalink:"/blog/static-assert"},nextItem:{title:"Singleton",permalink:"/blog/singleton"}},c={authorsImageUrls:[]},d=[{value:"Pr\xe9ambule",id:"pr\xe9ambule",children:[]},{value:"Principe",id:"principe",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],m={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,u.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"pr\xe9ambule"},"Pr\xe9ambule"),(0,u.kt)("p",null,"Le mutex locker fait partie du concept de ",(0,u.kt)("a",{parentName:"p",href:"http://fr.wikipedia.org/wiki/RAII"},"RAII"),". Cette acronyme vient de l\u2019anglais Resource Acquisition Is Initialization. C\u2019est une technique de programmation qui permet de s\u2019assurer que la ressource acquise sera bien lib\xe9r\xe9e \xe0 la fin de la vie d\u2019un objet."),(0,u.kt)("h2",{id:"principe"},"Principe"),(0,u.kt)("p",null,"Appliqu\xe9 au mutex, ce principe consiste \xe0 bloquer un mutex lors de la cr\xe9ation d\u2019un objet et de le lib\xe9rer lors de sa destruction. On peut imaginer la cr\xe9ation d\u2019un objet sp\xe9cifique : le ",(0,u.kt)("inlineCode",{parentName:"p"},"MutexLocker"),".  Il faudrait qu\u2019il puisse prendre un mutex lors de sa cr\xe9ation et le lib\xe9rer lors de sa destruction. Son constructeur va donc prendre le mutex et son destructeur le d\xe9truire."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c++"},"class MutexLocker {\n    public :\n        MutexLocker(Mutex& mutex): m_mutex(mutex) {\n            m_mutex.Lock();\n        }\n        virtual ~MutexLocker(){\n            m_mutex.Unlock();\n        }\n\n    private:\n        Mutex& m_mutex;\n};\n")),(0,u.kt)("p",null,"Son utilisation proc\xe8de comme suit :"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c++"},"{\n    Mutex mutex;\n    MutexLocker locker(mutex);\n    /* Maintenant le mutex est pris. Le code critique peut \xeatre ex\xe9cut\xe9. */\n}\n")),(0,u.kt)("h2",{id:"conclusion"},"Conclusion"),(0,u.kt)("p",null,"Son utilisation est justifi\xe9 quand des exceptions peuvent arriver \xe0 tout moment. A ce moment, le mutex est assur\xe9 d\u2019\xeatre lib\xe9r\xe9 \xe0 la fin de la port\xe9e du code lorsque le locker est d\xe9truit. D\u2019une mani\xe8re g\xe9n\xe9rale, il est bon de l\u2019utiliser tout le temps pour \xe9viter de tomber dans des cas d\u2019erreur difficiles \xe0 d\xe9tecter."))}p.isMDXComponent=!0}}]);