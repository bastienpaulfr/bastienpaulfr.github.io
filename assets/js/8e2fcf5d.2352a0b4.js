"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var g=n.createContext({}),s=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(g.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),u=i,f=c["".concat(g,".").concat(u)]||c[u]||m[u]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8237:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return g},metadata:function(){return s},assets:function(){return p},toc:function(){return m},default:function(){return u}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={title:"How to create a circlular file logger with Timber",date:new Date("2019-03-01T13:04:06.000Z"),draft:!1},g=void 0,s={permalink:"/blog/circular-file-logger",editUrl:"https://github.com/bastienpaulfr/bastienpaulfr.github.io/edit/master/website/blog/blog/circular-file-logger.md",source:"@site/blog/circular-file-logger.md",title:"How to create a circlular file logger with Timber",description:"In some applications, I need to store my logs in a file aside of traditional logcat. For this, I am making use of Timber library. Because I don\u2019t want to make my device full of logs, I wanted to use circular log files so that I can control the maximum amount of bytes taken by log data. To achieve this, I will use java Logger API to implement a new Timber.Tree. I also want some feature like log formatting and filtering.",date:"2019-03-01T13:04:06.000Z",formattedDate:"March 1, 2019",tags:[],readingTime:6.845,truncated:!1,authors:[],prevItem:{title:"Add a new line at the end of each text files tracked by git",permalink:"/blog/nl-at-eof"},nextItem:{title:"Publish a Kotlin lib with gradle Kotlin DSL",permalink:"/blog/publish-kotlin-lib"}},p={authorsImageUrls:[]},m=[{value:"Log filtering",id:"log-filtering",children:[]},{value:"File logging",id:"file-logging",children:[]}],c={toc:m};function u(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In some applications, I need to store my logs in a file aside of traditional logcat. For this, I am making use of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JakeWharton/timber"},"Timber")," library. Because I don\u2019t want to make my device full of logs, I wanted to use circular log files so that I can control the maximum amount of bytes taken by log data. To achieve this, I will use java Logger API to implement a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Timber.Tree"),". I also want some feature like log formatting and filtering."),(0,a.kt)("p",null,"All of this is implemented by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bastienpaulfr/Treessence"},"Treessence")," library."),(0,a.kt)("h2",{id:"log-filtering"},"Log filtering"),(0,a.kt)("p",null,"To implement filtering an interface is defined :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface Filter {\n\n    /**\n     * @param priority Log priority.\n     * @param tag      Tag for log.\n     * @param message  Formatted log message.\n     * @param t        Accompanying exceptions.\n     * @return {@code true} if the log should be skipped, otherwise {@code false}.\n     * @see timber.log.Timber.Tree#log(int, String, String, Throwable)\n     */\n    boolean skipLog(int priority, String tag, String message, Throwable t);\n\n    boolean isLoggable(int priority, String tag);\n}\n")),(0,a.kt)("p",null,"Priority filtering is provided by an implementation of this interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class PriorityFilter implements Filter {\n\n    private final int minPriority;\n\n    public PriorityFilter(int minPriority) {\n        this.minPriority = minPriority;\n    }\n\n    @Override\n    public boolean skipLog(int priority, String tag, String message, Throwable t) {\n        return priority < minPriority;\n    }\n\n    @Override\n    public boolean isLoggable(int priority, String tag) {\n        return priority >= minPriority;\n    }\n\n    public int getMinPriority() {\n        return minPriority;\n    }\n}\n")),(0,a.kt)("p",null,"We can now create our base class extending ",(0,a.kt)("inlineCode",{parentName:"p"},"Timber.DebugTree")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class PriorityTree extends Timber.DebugTree {\n\n    private final PriorityFilter priorityFilter;\n    private Filter filter = NoFilter.INSTANCE;\n\n    /**\n     * @param priority priority from witch log will be logged\n     */\n    public PriorityTree(int priority) {\n        this.priorityFilter = new PriorityFilter(priority);\n    }\n\n    /**\n     * Add additional {@link Filter}\n     *\n     * @param f Filter\n     * @return itself\n     */\n    public PriorityTree withFilter(@NotNull Filter f) {\n        this.filter = f;\n        return this;\n    }\n\n    @Override\n    protected boolean isLoggable(int priority) {\n        return isLoggable("", priority);\n    }\n\n    @Override\n    public boolean isLoggable(String tag, int priority) {\n        return priorityFilter.isLoggable(priority, tag) && filter.isLoggable(priority, tag);\n    }\n\n    public PriorityFilter getPriorityFilter() {\n        return priorityFilter;\n    }\n\n    public Filter getFilter() {\n        return filter;\n    }\n\n    /**\n     * Use the additional filter to determine if this log needs to be skipped\n     *\n     * @param priority Log priority\n     * @param tag      Log tag\n     * @param message  Log message\n     * @param t        Log throwable\n     * @return true if needed to be skipped or false\n     */\n    protected boolean skipLog(int priority, String tag, @NotNull String message, Throwable t) {\n        return filter.skipLog(priority, tag, message, t);\n    }\n}\n')),(0,a.kt)("p",null,"This class can filter on two parameters :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First parameter is obviously log priority. This is done thanks to PriorityFilter instance."),(0,a.kt)("li",{parentName:"ul"},"Second parameter is an additional Filter instance that can be provided by caller.")),(0,a.kt)("p",null,"##\xa0Log formatting"),(0,a.kt)("p",null,"Log formatting is obtained thanks to a Formatter class whose interface is defined as follow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface Formatter {\n\n    String format(int priority, String tag, String message);\n}\n")),(0,a.kt)("p",null,"Each formatter can display log to a defined format. For instance, logcat format is ",(0,a.kt)("inlineCode",{parentName:"p"},'"MM-dd HH:mm:ss:SSS {priority}/{tag}({thread id}) : {message}\\n"'),". Another format would be ",(0,a.kt)("inlineCode",{parentName:"p"},'"{tag} : {message}"'),"."),(0,a.kt)("p",null,"Because we want to log in a file what we get in logcat, then we need to implement a logcat formatter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class LogcatFormatter implements Formatter {\n\n    public static final LogcatFormatter INSTANCE = new LogcatFormatter();\n    private static final String SEP = " ";\n\n    private final HashMap<Integer, String> prioPrefixes = new HashMap<>();\n\n    private LogcatFormatter() {\n        prioPrefixes.put(Log.VERBOSE, "V/");\n        prioPrefixes.put(Log.DEBUG, "D/");\n        prioPrefixes.put(Log.INFO, "I/");\n        prioPrefixes.put(Log.WARN, "W/");\n        prioPrefixes.put(Log.ERROR, "E/");\n        prioPrefixes.put(Log.ASSERT, "WTF/");\n    }\n\n    @Override\n    public String format(int priority, String tag, @NotNull String message) {\n        String prio = prioPrefixes.get(priority);\n        if (prio == null) {\n            prio = "";\n        }\n        return TimeUtils.timestampToDate(System.currentTimeMillis(), "MM-dd HH:mm:ss:SSS")\n               + SEP\n               + prio\n               + (tag == null ? "" : tag)\n               + "(" + Thread.currentThread().getId() + ") :"\n               + SEP\n               + message\n               + "\\n";\n    }\n}\n')),(0,a.kt)("p",null,"Priority class can then be extended to add format functionality"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Base class to format logs\n */\npublic class FormatterPriorityTree extends PriorityTree {\n    private Formatter formatter = getDefaultFormatter();\n\n    public FormatterPriorityTree(int priority) {\n        super(priority);\n    }\n\n    /**\n     * Set {@link Formatter}\n     *\n     * @param f formatter\n     * @return itself\n     */\n    public FormatterPriorityTree withFormatter(Formatter f) {\n        this.formatter = f;\n        return this;\n    }\n\n    /**\n     * Use its formatter to format log\n     *\n     * @param priority Priority\n     * @param tag      Tag\n     * @param message  Message\n     * @return Formatted log\n     */\n    protected String format(int priority, String tag, @NotNull String message) {\n        return formatter.format(priority, tag, message);\n    }\n\n    /**\n     * @return Default log {@link Formatter}\n     */\n    protected Formatter getDefaultFormatter() {\n        return NoTagFormatter.INSTANCE;\n    }\n\n    @Override\n    protected void log(int priority, String tag, @NotNull String message, Throwable t) {\n        super.log(priority, tag, format(priority, tag, message), t);\n    }\n}\n")),(0,a.kt)("h2",{id:"file-logging"},"File logging"),(0,a.kt)("p",null,"We have seen how to filter and format logs. We can now start logging in file."),(0,a.kt)("p",null,"For this we need a ",(0,a.kt)("inlineCode",{parentName:"p"},"java.util.logging.Logger")," instance. It will be used in conjunction with ",(0,a.kt)("inlineCode",{parentName:"p"},"java.util.logging.FileHandler")," that do actual file logging. We will see how to create a Logger instance later."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class FileLoggerTree extends FormatterPriorityTree {\n    private final Logger logger;\n\n    private FileLoggerTree(int priority,\n                           Logger logger) {\n        super(priority);\n        this.logger = logger;\n    }\n}\n")),(0,a.kt)("p",null,"To activate logcat formatting by default, ",(0,a.kt)("inlineCode",{parentName:"p"},"getDefaultFormatter()")," method is overridden"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected fr.bipi.tressence.common.formatter.Formatter getDefaultFormatter() {\n    return LogcatFormatter.INSTANCE;\n}\n")),(0,a.kt)("p",null,"We need to convert logcat level to ",(0,a.kt)("inlineCode",{parentName:"p"},"java.util.logging.Level")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"private Level fromPriorityToLevel(int priority) {\n    switch (priority) {\n        case Log.VERBOSE:\n            return Level.FINER;\n        case Log.DEBUG:\n            return Level.FINE;\n        case Log.INFO:\n            return Level.INFO;\n        case Log.WARN:\n            return Level.WARNING;\n        case Log.ERROR:\n            return Level.SEVERE;\n        case Log.ASSERT:\n            return Level.SEVERE;\n        default:\n            return Level.FINEST;\n    }\n}\n")),(0,a.kt)("p",null,"Logging is done by this method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Override\nprotected void log(int priority, String tag, @NotNull String message, Throwable t) {\n    if (skipLog(priority, tag, message, t)) {\n        return;\n    }\n\n    logger.log(fromPriorityToLevel(priority), format(priority, tag, message));\n    if (t != null) {\n        logger.log(fromPriorityToLevel(priority), "", t);\n    }\n}\n')),(0,a.kt)("p",null,"It is logging in using ",(0,a.kt)("inlineCode",{parentName:"p"},"java.utils.logging")," API with log level conversion and logcat formatting"),(0,a.kt)("p",null,"We haven\u2019t seen how to provide the right logger. Let see how to configure it."),(0,a.kt)("p",null,"A builder class is defined to create a FileLoggerTree instance. This builder contains some default:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public static class Builder {\n    // 1 mb byte of data\n    private static final int SIZE_LIMIT = 1048576;\n    // Max 3 files for circular logging\n    private static final int NB_FILE_LIMIT = 3;\n\n    // Base filename.\n    // log index will be appended so actual file name will be\n    // "log.0" or "log.1"\n    // To parametrize where index is put, "%g" can be placed\n    // in file name. For instance "log%g.logcat" will give\n    // "log0.logcat", "log1.logcat" and so on\n    private String fileName = "log";\n    // Directory where files are stored\n    private String dir = "";\n    // Min priority to log from\n    private int priority = Log.INFO;\n    private int sizeLimit = SIZE_LIMIT;\n    private int fileLimit = NB_FILE_LIMIT;\n    // append log to already existing log file\n    private boolean appendToFile = true;\n\n...\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"java.util.logging.Logger")," are created and managed by ",(0,a.kt)("inlineCode",{parentName:"p"},"java.util.logging.LogManager"),". To bypass this a simple static class is used"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * Custom logger class that has no references to LogManager\n */\nprivate static class MyLogger extends Logger {\n\n    /**\n     * Constructs a {@code Logger} object with the supplied name and resource\n     * bundle name; {@code notifyParentHandlers} is set to {@code true}.\n     * <p/>\n* Notice : Loggers use a naming hierarchy. Thus "z.x.y" is a child of "z.x".\n     *\n     * @param name the name of this logger, may be {@code null} for anonymous\n     *             loggers.\n     */\n    MyLogger(String name) {\n        super(name, null);\n    }\n\n    public static Logger getLogger(String name) {\n        return new MyLogger(name);\n    }\n}\n')),(0,a.kt)("p",null,"Creation of ",(0,a.kt)("inlineCode",{parentName:"p"},"java.util.logging.Logger")," can start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public FileLoggerTree build() throws IOException {\n  // Log file path\n  String path = FileUtils.combinePath(dir, fileName);\n  // File handler that is performing file logging\n  FileHandler fileHandler;\n  // Our custom logger\n  Logger logger = MyLogger.getLogger(TAG);\n  // We force level to ALL because priority filtering is\n  // done by our Tree implementation\n  logger.setLevel(Level.ALL);\n  // File handler can now be created\n  fileHandler = new FileHandler(path, sizeLimit, fileLimit,  appendToFile);\n  // Formating is done by our Tree implementation\n  fileHandler.setFormatter(new NoFormatter());\n  // Configure java Logger\n  logger.addHandler(fileHandler);\n  // finally we got here !\n  return new FileLoggerTree(priority, logger);\n}\n")),(0,a.kt)("p",null,"Full code of ",(0,a.kt)("inlineCode",{parentName:"p"},"FileLoggerTree")," is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bastienpaulfr/Treessence/blob/master/treessence/src/main/java/fr/bipi/tressence/file/FileLoggerTree.java"},"here")),(0,a.kt)("p",null,"This tree can then be planted like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'FileLoggerTree fileTree = FileLoggerTree.Builder()\n        .withFileName("log%g.logcat")\n        .withMinPriority(Log.VERBOSE)\n        .build()\nTimber.plant(fileTree)\n')),(0,a.kt)("p",null,"Thanks for reading this. Full source code is available ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bastienpaulfr/Treessence"},"here")))}u.isMDXComponent=!0}}]);