"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[268],{902:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return f},metadata:function(){return c},assets:function(){return p},toc:function(){return l},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={title:"The TUN/TAP interface on Linux",date:new Date("2010-12-08T09:27:07.000Z"),draft:!1},f=void 0,c={permalink:"/blog/tun-tap",editUrl:"https://github.com/bastienpaulfr/bastienpaulfr.github.io/edit/master/website/blog/blog/tun-tap.md",source:"@site/blog/tun-tap.md",title:"The TUN/TAP interface on Linux",description:"Recently, I had to work with the tun interface on Linux. There is not a lot of documentation on this subject so here is a little presentation.",date:"2010-12-08T09:27:07.000Z",formattedDate:"December 8, 2010",tags:[],readingTime:2.055,truncated:!1,authors:[],prevItem:{title:"Singleton",permalink:"/blog/singleton"}},p={authorsImageUrls:[]},l=[],u={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Recently, I had to work with the tun interface on Linux. There is not a lot of documentation on this subject so here is a little presentation."),(0,i.kt)("p",null,"TUN/TAP is like a physical Ethernet port but for user space program. Instead of receiving data from a physical device, it receives it from a user space program and instead of sending data through a wire, sends it to a user space program."),(0,i.kt)("p",null,"This interface corresponds to a file situated in /dev/net/tun or /dev/tun. When a program opens this file, an interface is created. The name of this interface can be set by the program or automatically set by the tun driver as tunXX, tapXX or bnepXX where XX can be 0, 1, 2\u2026 This interface can be manipulated by ifconfig such as eth0."),(0,i.kt)("p",null,"More information can be found here"),(0,i.kt)("p",null,"Now, i describe in the following some steps to open and use a tun interface."),(0,i.kt)("p",null,"Opening the file :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'int tap = open(tunname[i], O_RDWR);\nif (tap < 0) {\n    fprintf(stderr, "TAP: failed to open TUN interfacen");\n    return -1;\n}\n')),(0,i.kt)("p",null,"Configuring the interface :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'struct ifreq ifr;\nmemset(&ifr, 0, sizeof(ifr));\n/* Flags: IFF_TUN   - TUN device (no Ethernet headers)\n *           IFF_TAP   - TAP device\n *\n *           IFF_NO_PI - Do not provide packet information\n */\n ifr.ifr_flags = IFF_TAP|IFF_NO_PI;\n strcpy(ifr.ifr_name, "bnep");\n\n if( ioctl(tap, TUNSETIFF, (void *) &ifr) < 0 ) {\n     fprintf(stderr, "TAP: failed to set BNEP namen");\n     close(tap);\n     tap = -1;\n     return -1;\n }\n')),(0,i.kt)("p",null,"Then we are setting the mac address :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'struct sockaddr sap;\nsap.sa_family = ARPHRD_ETHER;\n((char*)sap.sa_data)[0]=0x00;\n((char*)sap.sa_data)[1]=0x11;\n((char*)sap.sa_data)[2]=0x22;\n((char*)sap.sa_data)[3]=0x33;\n((char*)sap.sa_data)[4]=0x44;\n((char*)sap.sa_data)[5]=0x55;\n\nmemcpy((char *) &ifr.ifr_hwaddr, (char *) &sap,\n       sizeof(struct sockaddr));\n\nif (ioctl(tap, SIOCSIFHWADDR, &ifr) < 0) {\n      fprintf(stderr, "TAP: failed to set MAC addressn");\n}\n')),(0,i.kt)("p",null,"The interface is configured. We can now start to listen :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'uint8_t* buffer = (uint8_t *)malloc(1500);\n//size of an ethernet frame\nassert(buffer != NULL);\n\nwhile (tap >=0) {\n   struct timeval tv={ 1, 0};\n   fd_set rfd;\n    FD_ZERO(&rfd);\n    FD_SET(tap, &rfd);\n\n   // We are waiting for data coming to the file\n   if (select(tap+1, &rfd, NULL, NULL, &tv)<0) {\n       fprintf(stderr, "bnep_sender: select failedn");\n       break;\n   }\n\n   // If data to be read\n   if (FD_ISSET(tap, &rfd)) {\n        n = read(tap, buffer, BNEP_BUFFER_SIZE);\n        if (n  0 )  {\n            //do some stuff with the data\n        }\n    }\n}\n\nif (buffer != NULL) free(buffer);\nif (tap >= 0) close(tap);\n\nreturn 0;\n')),(0,i.kt)("p",null,"On the same way, we can write data to the file using \u2018write\u2019. Don\u2019t forget the Ethernet header !"))}d.isMDXComponent=!0}}]);