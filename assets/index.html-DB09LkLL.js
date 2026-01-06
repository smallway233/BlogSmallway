import{_ as n,c as a,a as i,o as l}from"./app-xjrptliG.js";const e={};function p(t,s){return l(),a("div",null,[...s[0]||(s[0]=[i(`<p>最近在筹备大数据竞赛，在训练的时候出现了挺多问题，现在统一总结一下</p><h1 id="出现的问题" tabindex="-1"><a class="header-anchor" href="#出现的问题"><span>出现的问题</span></a></h1><p>首先，新版IDEA不能从正常的创建项目哪里创建Maven项目（官方的打包方法为sbt,所以正在逐渐淘汰Maven）</p><p>但是训练时候依旧需要使用Maven去构建项目，所以经查资料创建方法如下</p><h3 id="_1-首先创建一个scala项目-构建系统选择intellij-选择创建。" tabindex="-1"><a class="header-anchor" href="#_1-首先创建一个scala项目-构建系统选择intellij-选择创建。"><span>1.首先创建一个Scala项目，构建系统选择Intellij，选择创建。</span></a></h3><p><img src="https://smallway.oss-cn-beijing.aliyuncs.com/{Y}{M}{D}-{rand}image-20230416102058756.png" alt="image-20230416102058756"></p><h3 id="_2-右击该项目-选择添加框架支持" tabindex="-1"><a class="header-anchor" href="#_2-右击该项目-选择添加框架支持"><span>2.右击该项目，选择添加框架支持</span></a></h3><p><img src="https://smallway.oss-cn-beijing.aliyuncs.com/{Y}{M}{D}-{rand}image-20230416102341774.png" alt="image-20230416102341774"></p><h3 id="_3-勾选maven-点击确定" tabindex="-1"><a class="header-anchor" href="#_3-勾选maven-点击确定"><span>3.勾选Maven，点击确定</span></a></h3><p><img src="https://smallway.oss-cn-beijing.aliyuncs.com/{Y}{M}{D}-{rand}image-20230416102439511.png" alt="image-20230416102439511"></p><p>4.此时已经创建好pom.xml文件了</p><p><img src="https://smallway.oss-cn-beijing.aliyuncs.com/{Y}{M}{D}-{rand}image-20230416102540641.png" alt="image-20230416102540641"></p><p>这时就可以添加对应的依赖了</p><p>拉取对应的依赖</p><p>依赖文件如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;</span></span>
<span class="line"><span>         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span>         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd&quot;&gt;</span></span>
<span class="line"><span>    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;groupId&gt;top.smallway&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;sparkapp&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;1.0&lt;/version&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;properties&gt;</span></span>
<span class="line"><span>        &lt;scala.version&gt;2.12.16&lt;/scala.version&gt;</span></span>
<span class="line"><span>    &lt;/properties&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependencies&gt;</span></span>
<span class="line"><span>        &lt;!--scala--&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.scala-lang&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;scala-library&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;\${scala.version}&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;!--spark--&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.apache.spark&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spark-core_2.12&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;3.1.2&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.apache.spark&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spark-sql_2.12&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;3.1.2&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;8.0.32&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--        spark-hive--&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.apache.spark&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spark-hive_2.12&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;3.1.2&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;!--        hive--&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.apache.hive&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;hive-jdbc&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;3.1.2&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.apache.hive&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;hive-exec&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;3.1.2&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;com.github.housepower&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;clickhouse-integration-spark_2.12&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;2.5.4&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.apache.hadoop&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;hadoop-auth&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;3.2.1&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;jackson-databind&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;2.10.0&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;dependency&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;jackson-core&lt;/artifactId&gt;</span></span>
<span class="line"><span>            &lt;version&gt;2.10.0&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;/dependencies&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;build&gt;</span></span>
<span class="line"><span>        &lt;sourceDirectory&gt;src/main/scala&lt;/sourceDirectory&gt;</span></span>
<span class="line"><span>        &lt;testSourceDirectory&gt;src/test/scala&lt;/testSourceDirectory&gt;</span></span>
<span class="line"><span>        &lt;plugins&gt;</span></span>
<span class="line"><span>            &lt;plugin&gt;</span></span>
<span class="line"><span>                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;</span></span>
<span class="line"><span>                &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span>                &lt;configuration&gt;</span></span>
<span class="line"><span>                    &lt;source&gt;1.8&lt;/source&gt;</span></span>
<span class="line"><span>                    &lt;target&gt;1.8&lt;/target&gt;</span></span>
<span class="line"><span>                &lt;/configuration&gt;</span></span>
<span class="line"><span>            &lt;/plugin&gt;</span></span>
<span class="line"><span>        &lt;/plugins&gt;</span></span>
<span class="line"><span>    &lt;/build&gt;</span></span>
<span class="line"><span>&lt;/project&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时重新拉取Maven即可</p><p>编写Scala代码EltUtil.scala类</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>import org.apache.spark.sql._</span></span>
<span class="line"><span>import org.apache.spark.sql.jdbc.{ClickHouseDialect, JdbcDialects}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ELT工具类</span></span>
<span class="line"><span>object EltUtil {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // extract from mysql</span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * @param spark      SparkSession实例</span></span>
<span class="line"><span>   * @param jdbcMap    要加载的JDBC配置项</span></span>
<span class="line"><span>   *</span></span>
<span class="line"><span>   * @return           返回一个DataFrame（Dataset[Row]）</span></span>
<span class="line"><span>   *</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  def extractFromJDBC(spark: SparkSession, jdbcMap:Map[String,String]): Dataset[Row] = {</span></span>
<span class="line"><span>    // 读取JDBC数据源，创建DataFrame</span></span>
<span class="line"><span>    val df = spark</span></span>
<span class="line"><span>      .read</span></span>
<span class="line"><span>      .format(&quot;jdbc&quot;)</span></span>
<span class="line"><span>      .options(jdbcMap)</span></span>
<span class="line"><span>      .load()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 返回</span></span>
<span class="line"><span>    df</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // load to hive</span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   * @param spark</span></span>
<span class="line"><span>   * @param df       要装载到Hive中的DataFrame</span></span>
<span class="line"><span>   * @param db       要装载到的Hive数据库</span></span>
<span class="line"><span>   * @param tb       要装载到的Hive ODS表</span></span>
<span class="line"><span>   * @param partitionColumn 指定分区列</span></span>
<span class="line"><span>   *</span></span>
<span class="line"><span>   * @return unit</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  def loadToHive(spark: SparkSession, df:Dataset[Row], hiveMap: Map[String,String]):Unit = {</span></span>
<span class="line"><span>    val database = hiveMap(&quot;db&quot;)       // 要写入的数据库</span></span>
<span class="line"><span>    val table = hiveMap(&quot;tb&quot;)          // 要写入的数据表</span></span>
<span class="line"><span>    val partitionColumn = hiveMap.get(&quot;partitionColumn&quot;)  // 分区列</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    spark.sql(s&quot;use $database&quot;)          // 打开指定数据库，这里使用了字符串插值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 有的表需要分区，有的不需要。这里使用模式匹配来分别处理</span></span>
<span class="line"><span>    partitionColumn match{</span></span>
<span class="line"><span>      case Some(column) =&gt;</span></span>
<span class="line"><span>        df.write</span></span>
<span class="line"><span>          .format(&quot;parquet&quot;)</span></span>
<span class="line"><span>          .mode(&quot;overwrite&quot;)      // 覆盖</span></span>
<span class="line"><span>          .partitionBy(column)    // 指定分区</span></span>
<span class="line"><span>          .saveAsTable(table)</span></span>
<span class="line"><span>      case None =&gt;</span></span>
<span class="line"><span>        df.write</span></span>
<span class="line"><span>          .format(&quot;parquet&quot;)</span></span>
<span class="line"><span>          .mode(&quot;overwrite&quot;)      // 覆盖</span></span>
<span class="line"><span>          .saveAsTable(table)     // saveAsTable()方法：会将DataFrame数据保存到Hive表中</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 增量写入方法</span></span>
<span class="line"><span>  def appendToHive(spark: SparkSession, df:Dataset[Row], hiveMap: Map[String,String]):Unit = {</span></span>
<span class="line"><span>    val database = hiveMap(&quot;db&quot;)       // 要写入的数据库</span></span>
<span class="line"><span>    val table = hiveMap(&quot;tb&quot;)          // 要写入的数据表</span></span>
<span class="line"><span>    val partitionColumn = hiveMap.get(&quot;partitionColumn&quot;)  // 分区列</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    spark.sql(s&quot;use $database&quot;)          // 打开指定数据库，这里使用了字符串插值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 有的表需要分区，有的不需要。这里使用模式匹配来分别处理</span></span>
<span class="line"><span>    partitionColumn match{</span></span>
<span class="line"><span>      case Some(column) =&gt;</span></span>
<span class="line"><span>        df.write</span></span>
<span class="line"><span>          .format(&quot;parquet&quot;)</span></span>
<span class="line"><span>          .mode(&quot;append&quot;)         // 追加</span></span>
<span class="line"><span>          .partitionBy(column)    // 指定分区</span></span>
<span class="line"><span>          .saveAsTable(table)</span></span>
<span class="line"><span>      case None =&gt;</span></span>
<span class="line"><span>        df.write</span></span>
<span class="line"><span>          .format(&quot;parquet&quot;)</span></span>
<span class="line"><span>          .mode(&quot;append&quot;)         // 追加</span></span>
<span class="line"><span>          .saveAsTable(table)     // saveAsTable()方法：会将DataFrame数据保存到Hive表中</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 定义一个函数，用来将分析结果导出到mysql中</span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   *</span></span>
<span class="line"><span>   * @param db    目标数据表</span></span>
<span class="line"><span>   * @param df    分析结果集</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span>  import org.apache.spark.sql._</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  import java.util.Properties</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  def exportToMysql(df:Dataset[Row], tb:String) = {</span></span>
<span class="line"><span>    val DB_URL= &quot;jdbc:mysql://localhost:3306/shtd_result?useSSL=false&quot;       // 数据库连接url，请将localhost替换为服务器所在IP</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 下面创建一个prop 变量用来保存JDBC 连接参数</span></span>
<span class="line"><span>    val props = new Properties()</span></span>
<span class="line"><span>    props.put(&quot;user&quot;, &quot;root&quot;)        					// 表示用户名是root</span></span>
<span class="line"><span>    props.put(&quot;password&quot;, &quot;admin&quot;)   				    // 表示密码是hadoop</span></span>
<span class="line"><span>    props.put(&quot;driver&quot;,&quot;com.mysql.jdbc.Driver&quot;) 		// 表示驱动程序</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    df.write.mode(&quot;overwrite&quot;).jdbc(DB_URL, tb, props)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 定义一个函数，用来将分析结果导出到clickhouse中</span></span>
<span class="line"><span>  /**</span></span>
<span class="line"><span>   *</span></span>
<span class="line"><span>   * @param db    目标数据表（形式：db.tb）</span></span>
<span class="line"><span>   * @param df    分析结果集</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  def exportToClickHouse(df:Dataset[Row], table:String) = {</span></span>
<span class="line"><span>    // 注册ClickHouseDialect</span></span>
<span class="line"><span>    JdbcDialects.registerDialect(ClickHouseDialect)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // clickhouse驱动程序和连接信息</span></span>
<span class="line"><span>    val ckDriver = &quot;com.github.housepower.jdbc.ClickHouseDriver&quot; // 驱动程序</span></span>
<span class="line"><span>    val ckUrl = &quot;jdbc:clickhouse://localhost:9000&quot;  // 数据库连接url，请将localhost替换为服务器所在IP</span></span>
<span class="line"><span>    val ckUser = &quot;default&quot;</span></span>
<span class="line"><span>    val ckPassword = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 写出</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>      val props = new java.util.Properties</span></span>
<span class="line"><span>      props.put(&quot;driver&quot;, ckDriver)</span></span>
<span class="line"><span>      props.put(&quot;user&quot;, ckUser)</span></span>
<span class="line"><span>      props.put(&quot;password&quot;, ckPassword)</span></span>
<span class="line"><span>      df.write</span></span>
<span class="line"><span>        .mode(&quot;append&quot;)</span></span>
<span class="line"><span>        .option(&quot;batchsize&quot;, &quot;10000&quot;)</span></span>
<span class="line"><span>        .option(&quot;isolationLevel&quot;, &quot;NONE&quot;)</span></span>
<span class="line"><span>        .option(&quot;numPartitions&quot;, &quot;1&quot;)</span></span>
<span class="line"><span>        .jdbc(ckUrl, table, props)</span></span>
<span class="line"><span>    } catch {</span></span>
<span class="line"><span>      case e:Exception =&gt;</span></span>
<span class="line"><span>        println(&quot;catch and ignore!&quot;)</span></span>
<span class="line"><span>        println(e)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在主方法中调用即可</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>import org.apache.spark.sql.SparkSession</span></span>
<span class="line"><span>import org.apache.spark.sql.functions.lit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>object spark {</span></span>
<span class="line"><span>  def main(args: Array[String]): Unit = {</span></span>
<span class="line"><span>    val spark = SparkSession.builder()</span></span>
<span class="line"><span>      .master(&quot;local[*]&quot;)</span></span>
<span class="line"><span>      .appName(&quot;sparkapp&quot;)</span></span>
<span class="line"><span>      .enableHiveSupport()</span></span>
<span class="line"><span>      .getOrCreate()</span></span>
<span class="line"><span>    val stock_customer_info_sql = &quot;select * from customer_inf where modified_time &lt;= &#39;2022-08-20 23:59:59&#39;&quot;</span></span>
<span class="line"><span>    val jdbcMap = Map(</span></span>
<span class="line"><span>      &quot;url&quot; -&gt; &quot;jdbc:mysql://localhost/database&quot;,</span></span>
<span class="line"><span>      &quot;user&quot; -&gt; &quot;user&quot;,</span></span>
<span class="line"><span>      &quot;password&quot; -&gt; &quot;password&quot;,</span></span>
<span class="line"><span>      &quot;query&quot; -&gt; stock_customer_info_sql,</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    val dataDF = EltUtil.extractFromJDBC(spark, jdbcMap)</span></span>
<span class="line"><span>    val df12 = dataDF.withColumn(&quot;etl_date&quot;, lit(&quot;20221123&quot;))</span></span>
<span class="line"><span>    val hiveMap = Map(</span></span>
<span class="line"><span>      &quot;db&quot; -&gt; &quot;Hive数据库&quot;,</span></span>
<span class="line"><span>      &quot;tb&quot; -&gt; &quot;Hive数据库中的表&quot;,</span></span>
<span class="line"><span>      &quot;partitionColumn&quot; -&gt; &quot;列名&quot;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    EltUtil.loadToHive(spark, df12, hiveMap)</span></span>
<span class="line"><span>    spark.table(&quot;Hive数据库.表名&quot;).show()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21)])])}const d=n(e,[["render",p]]),r=JSON.parse('{"path":"/blog/spark/","title":"Spark操作Hive误区","lang":"zh-CN","frontmatter":{"title":"Spark操作Hive误区","createTime":"2023-04-16T11:11:51.000Z","permalink":"/blog/spark/","categories":["大数据学习"],"description":"最近在筹备大数据竞赛，在训练的时候出现了挺多问题，现在统一总结一下 出现的问题 首先，新版IDEA不能从正常的创建项目哪里创建Maven项目（官方的打包方法为sbt,所以正在逐渐淘汰Maven） 但是训练时候依旧需要使用Maven去构建项目，所以经查资料创建方法如下 1.首先创建一个Scala项目，构建系统选择Intellij，选择创建。 image-...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spark操作Hive误区\\",\\"image\\":[\\"https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230416102058756.png\\",\\"https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230416102341774.png\\",\\"https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230416102439511.png\\",\\"https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230416102540641.png\\"],\\"dateModified\\":\\"2025-12-31T10:10:50.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://blog.smallway.top/blog/spark/"}],["meta",{"property":"og:site_name","content":"碎白的项目垃圾桶"}],["meta",{"property":"og:title","content":"Spark操作Hive误区"}],["meta",{"property":"og:description","content":"最近在筹备大数据竞赛，在训练的时候出现了挺多问题，现在统一总结一下 出现的问题 首先，新版IDEA不能从正常的创建项目哪里创建Maven项目（官方的打包方法为sbt,所以正在逐渐淘汰Maven） 但是训练时候依旧需要使用Maven去构建项目，所以经查资料创建方法如下 1.首先创建一个Scala项目，构建系统选择Intellij，选择创建。 image-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230416102058756.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-12-31T10:10:50.000Z"}],["meta",{"property":"article:modified_time","content":"2025-12-31T10:10:50.000Z"}]]},"readingTime":{"minutes":4.25,"words":1276},"git":{"createdTime":1767175850000,"updatedTime":1767175850000,"contributors":[{"name":"小白nbfan","username":"","email":"","commits":1,"avatar":"https://gravatar.com/avatar/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855?d=retro"}]},"autoDesc":true,"filePathRelative":"blog/spark.md","headers":[],"categoryList":[]}');export{d as comp,r as data};
