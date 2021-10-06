"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[520],{9360:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return d}});var i=t(7462),s=t(3366),a=(t(7294),t(3905)),l=["components"],r={title:"Singleton",date:new Date("2014-08-04T13:02:16.000Z"),draft:!1},o=void 0,u={permalink:"/blog/singleton",editUrl:"https://github.com/bastienpaulfr/bastienpaulfr.github.io/edit/master/website/blog/blog/singleton.md",source:"@site/blog/singleton.md",title:"Singleton",description:"Pr\xe9sentation",date:"2014-08-04T13:02:16.000Z",formattedDate:"August 4, 2014",tags:[],readingTime:2.53,truncated:!1,authors:[],prevItem:{title:"Mutex Locker",permalink:"/blog/mutex-locker"},nextItem:{title:"The TUN/TAP interface on Linux",permalink:"/blog/tun-tap"}},c={authorsImageUrls:[]},p=[{value:"Pr\xe9sentation",id:"pr\xe9sentation",children:[]},{value:"Impl\xe9mentation en C++",id:"impl\xe9mentation-en-c",children:[]},{value:"Multi-Threading",id:"multi-threading",children:[]}],m={toc:p};function d(e){var n=e.components,t=(0,s.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pr\xe9sentation"},"Pr\xe9sentation"),(0,a.kt)("p",null,"Le singleton est un patron de conception (design pattern) dont le but est de restreindre l\u2019instanciation  d\u2019une classe \xe0 un nombre d\xe9fini d\u2019objets. Il est utilis\xe9 lorsque l\u2019on a besoin que d\u2019un seul objet pour coordonner des actions dans un syst\xe8me. Par exemple, le singleton va \xeatre utilis\xe9 comme gestionnaire de fen\xeatre, gestionnaire de syst\xe8mes de fichiers ou d\u2019imprimantes. Le singleton va \xeatre disponible de mani\xe8re globale dans un package et sera utilis\xe9 comme \xe9tant un point d\u2019acc\xe8s."),(0,a.kt)("p",null,"Le singleton est une classe qui va s\u2019instancier elle-m\xeame. Ses constructeurs seront donc d\xe9finis comme \xe9tant priv\xe9s. Elle met \xe0 disposition une m\xe9thode statique pour r\xe9cup\xe9rer son instance. Cette m\xe9thode v\xe9rifie qu\u2019une seule instance existe ou en cr\xe9e une si elle n\u2019existe pas encore."),(0,a.kt)("p",null,"Une attention particuli\xe8re sera donn\xe9e dans les environnements multi-thread\xe9s. Si deux thread essaient d\u2019acc\xe9der \xe0 l\u2019objet, un seul devra l\u2019instancier tandis que le deuxi\xe8me obtiendra une r\xe9f\xe9rence sur l\u2019objet nouvellement cr\xe9\xe9."),(0,a.kt)("h2",{id:"impl\xe9mentation-en-c"},"Impl\xe9mentation en C++"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"template <typename T> class Singleton\n{\n    public:\n        static T* Get() {\n            if(null == m_intance) {\n                m_instance = new T;\n            }\n            return m_instance;\n        }\n\n    protected:\n        Singleton(){};\n        virtual ~Singleton(){};\n\n    private :\n        static T* m_instance;\n};\n")),(0,a.kt)("p",null,"Les classes peuvent ensuite h\xe9riter de ",(0,a.kt)("inlineCode",{parentName:"p"},"Singleton"),". Elles seront instanci\xe9es par la m\xe9thode h\xe9rit\xe9e ",(0,a.kt)("inlineCode",{parentName:"p"},"Get()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"lass Eur : public Singleton<Eur>\n{\n    friend class Singleton<Eur>;\n};\n\nfunc(){\n    Eur* obj = Eur::Get();\n};\n")),(0,a.kt)("h2",{id:"multi-threading"},"Multi-Threading"),(0,a.kt)("p",null,"Dans un environnement multi-t\xe2che,  il est important de prot\xe9ger le code d\u2019instanciation pour \xe9viter d\u2019avoir plusieurs r\xe9f\xe9rences vers le Singleton lorsque celui-ci est appel\xe9 depuis plusieurs threads diff\xe9rents."),(0,a.kt)("p",null,"La solution peut \xeatre comme suit :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"template <typename T> class Singleton\n{\n    public:\n        static T* Get() {\n            m_mutex.Lock();\n            if(null == m_intance) {\n                m_instance = new T;\n            }\n            m_mutex.unlock();\n            return m_instance;\n        }\n\n    protected:\n        Singleton(){};\n        virtual ~Singleton(){};\n\n    private :\n        static T* m_instance;\n        static Mutex m_mutex;\n};\n")),(0,a.kt)("p",null,"Ici ",(0,a.kt)("inlineCode",{parentName:"p"},"Mutex")," est une classe qui initialise le mutex dans son constructeur par d\xe9faut et pr\xe9sente les m\xe9thodes ",(0,a.kt)("inlineCode",{parentName:"p"},"Lock()")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"Unlock()")," pour locker et d\xe9locker le mutex."),(0,a.kt)("p",null,"Le probl\xe8me de cette solution est que le mutex est lock\xe9 \xe0 chaque appel de ",(0,a.kt)("inlineCode",{parentName:"p"},"Get()"),". Ceci peut \xeatre co\xfbteux en nombre d\u2019instruction en comparaison avec un simple test pour savoir si m_instance existe. D\u2019autant plus que le Singleton n\u2019est instanci\xe9 qu\u2019une seule fois pendant la dur\xe9e de vie du programme."),(0,a.kt)("p",null,"Une proposition d\u2019optimisation serait de tester une premi\xe8re fois si l\u2019instance existe sans locker le mutex puis de tester une seconde fois sous protection dans le cas ou l\u2019instance n\u2019existe pas. Ceci ajoute un test dans le cas ou l\u2019instance n\u2019existe pas, mais enl\xe8ve tout appel au mutex dans le cas ou elle existe."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"template <typename T> class Singleton\n{\n    public:\n        static T* Get() {\n            if(null == instance)\n            {\n                m_mutex.Lock();\n                if(null == m_intance) {\n                    m_instance = new T;\n                }\n                m_mutex.unlock();\n            }\n            return m_instance;\n        }\n\n    protected:\n        Singleton(){};\n        virtual ~Singleton(){};\n\n    private :\n        static T* m_instance;\n        static Mutex m_mutex;\n};\n")),(0,a.kt)("p",null,"Cette solution est valide car les acc\xe8s concurrents en lecture ne sont pas p\xe9nalisant. En effet, le ",(0,a.kt)("inlineCode",{parentName:"p"},"Singleton")," est le m\xeame pour tous les threads."))}d.isMDXComponent=!0}}]);