export interface Question {
  id: number;
  type: '单选题' | '多选题' | '判断题';
  title: string;
  options: string[];
  answer: string;
  explanation: string;
  category?: string;
}

export const questions: Question[] = [
  {
    "id": 1,
    "type": "单选题",
    "title": "阿里云的云盾会检查通过公共互联网登录云服务器ECS的来源IP，登录方式包括SSH和远程桌面，当来自某个IP的登录请求出现多次密码错误的情况时，会发出”ECS遭遇密码暴力破解”的报警，当收到这个报警后，最安全的处理方法应该是<strong>____</strong>。",
    "options": [
      "A.通知自己业务平台的所有用户立即修改密码，并通过技术手段杜绝简单密码",
      "B.这个报警无关紧要，可以忽略",
      "C.立即更新云服务器ECS实例的系统用户的密码，并启用安全组防火墙，只允许特定IP连接ECS实例",
      "D.立即登录云服务器ECS实例，检查登录日志，如果没有异常登录成功的记录，可直接忽略"
    ],
    "answer": "C",
    "explanation": "当某个IP的尝试多次登录云服务器ECS的时候，为了防止密码被破解，建议立即修改云服务器ECS的密码，并启动安全组防火墙，只允许特定IP登录该ECS。",
    "category": "安全"
  },
  {
    "id": 2,
    "type": "单选题",
    "title": "您基于阿里云的云服务器ECS实例部署了Mysql数据库，随着业务量的不断上涨，您自己部署的数据库的服务能力越来越不足，表现在并发连接数不足，磁盘的IOPS不能满足业务需要等，可以采用阿里云的<strong>____</strong>产品来解决这些问题。",
    "options": [
      "A.对象存储OSS",
      "B.表格存储",
      "C.云数据库RDS",
      "D.大数据分析ODPS"
    ],
    "answer": "C",
    "explanation": "题目中说遇到了自己部署的数据库的服务能力越来越不足的问题，所以可以通过云数据库RDS来解决问题。",
    "category": "数据库"
  },
  {
    "id": 3,
    "type": "单选题",
    "title": "作为一个互联网初创企业的技术负责人，小A在早期选择了阿里云的云服务器ECS并将Java应用程序、数据库MySQL等部署在了一台云服务器ECS实例上。随着业务发展和用户量增加，发现部署在这台ECS实例上数据库性能出现瓶颈。为了最快速度解决该问题，同时提高系统安全性和稳定性，您建议选择阿里云的<strong>____</strong>产品。",
    "options": [
      "A.对象存储OSS",
      "B.云数据库RDS",
      "C.负载均衡SLB",
      "D.专有云VPC"
    ],
    "answer": "B",
    "explanation": "这台ECS实例上数据库性能出现瓶颈，所以需要选择阿里云的RDS解决性能问题。",
    "category": "安全"
  },
  {
    "id": 4,
    "type": "单选题",
    "title": "在公共云的环境中，阿里云负责云计算基础设施的安全（如: IDC环境、物理服务器运维、云产品虚拟化层等），用户需要对自己购买的云产品进行必要的安全优化和防护设置，以下几种客户的行为中您认为最安全的是<strong>____</strong>。",
    "options": [
      "A.为了管理方便，将云服务器ECS实例的管理员密码修改为123456",
      "B.云服务器ECS实例购买成功后，立即通过管理控制台启用该ECS实例的安全组防火墙，并设置为只允许某管理IP远程登录",
      "C.为了减少沟通成本，公司的5个管理员都用root帐号登录云服务器ECS实例",
      "D.为了方便在家办公的同事更新数据，对云数据库RDS实例开通了公网IP，并允许所有IP连接"
    ],
    "answer": "B",
    "explanation": "上云实践中推荐：云服务器器ECS实例购买成功后，立即启⽤安全组防火墙,并对公网只开通必要的服务端口。",
    "category": "安全"
  },
  {
    "id": 5,
    "type": "单选题",
    "title": "阿里云内容分发网络CDN系统能够实现内容加速的功能，需要智能DNS解析的支持，以下<strong>____</strong>功能不是智能DNS解析系统具备的。",
    "options": [
      "A.可以根据不同的访问者IP把同一个域名分别解析成不同的IP地址",
      "B.智能DNS解析系统具备网页内容缓存的功能，用户首次访问时从源站抓取数据，之后的请求优先从缓存中读取",
      "C.可以根据预先配置好的IP段位置信息，将用户请求指向离客户最近的服务器",
      "D.如果用户在多个机房放置相同的镜象站点，可以让不同的地方客户访问不同的站点，实现负载均衡"
    ],
    "answer": "B",
    "explanation": "目前智能DNS解析是不支持页内容缓存的功能的。参考链接：<a href=\"https://help.aliyun.com/document_detail/29730.html?spm=a2c4g.11186623.6.574.8d1a14caIdTcob\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/29730.html?spm=a2c4g.11186623.6.574.8d1a14caIdTcob</a>",
    "category": "CDN"
  },
  {
    "id": 6,
    "type": "单选题",
    "title": "阿里云对象存储OSS的图片处理服务中，所有对图片的转换参数都会加在图片文件的URL后面，使URL变得冗长，不方便管理与阅读。为了简化操作，OSS图片处理服务提供了<strong>___</strong>功能，可以将常见的转换参数保存起来多次使用。",
    "options": [
      "A.样式",
      "B.方案",
      "C.短网址",
      "D.管道"
    ],
    "answer": "A",
    "explanation": "参考链接：<a href=\"https://help.aliyun.com/document_detail/48884.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/48884.html</a>",
    "category": "OSS"
  },
  {
    "id": 7,
    "type": "单选题",
    "title": "开通阿里云对象存储OSS服务后，您首先需要使用fOSS管理控制台或OpenAPI创建Bucket来存储文件。创建Bucket时“所属地域”这个属性必须要指定，特别是您的云服务器ECS实例需要通过内网访问OSS Bucket时，必须选择与ECS实例相同的地域，以下有关“所属地域”的说法<strong><strong>_</strong></strong>是正确的。",
    "options": [
      "A.Bucket创建后，“所属地域”属性可随时更改",
      "B.Bucket创建后，“所属地域”属性不可更改",
      "C.Bucket创建后，如果未上传任何文件，则“所属地域”属性可以更改",
      "D.Bucket创建后，要想修改“所属地域”属性，需申请特殊权限"
    ],
    "answer": "B",
    "explanation": "Bucket创建后，所属地域不可更改。",
    "category": "OSS"
  },
  {
    "id": 8,
    "type": "单选题",
    "title": "阿里云对象存储OSS是阿里云对外提供的海量、安全、低成本、高可靠的云存储服务。使用阿里云OSS进行数据存储前，需要先建立创建一个或者多个存储空间，这个存储空间在OSS里叫<strong>____</strong>。",
    "options": [
      "A.key",
      "B.value",
      "C.object",
      "D.bucket"
    ],
    "answer": "D",
    "explanation": "基础知识，顾名思义是Bucket。",
    "category": "安全"
  },
  {
    "id": 9,
    "type": "单选题",
    "title": "阿里云对象存储服务（Object Storage Service，简称 OSS），是阿里云提供的海量、安全、低成本、高可靠的云存储服务。用户操作OSS的基本数据单元是什么？",
    "options": [
      "A.Object",
      "B.Bucket",
      "C.Service",
      "D.安全组"
    ],
    "answer": "A",
    "explanation": "OSS的基本数据单元是对象/文件（Object）。参考链接：<a href=\"https://help.aliyun.com/document_detail/31817.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/31817.html</a>",
    "category": "安全"
  },
  {
    "id": 10,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB包含了几个主要的部分：来自外部的访问请求、Listener、LoadBalancer、BackendServer等，关于Listener的说法中正确的是<strong>____</strong>。",
    "options": [
      "A.主要包括用户定制的负载均衡策略和转发规则",
      "B.提供对外服务的ECS实例集合",
      "C.是指负载均衡SLB实例",
      "D.通过配置监控规则，可以生成负载均衡SLB实例的监控指标"
    ],
    "answer": "A",
    "explanation": "Listener：用户定制的监听器，定义了负载均衡策略和转发规则。参考链接：<a href=\"https://yq.aliyun.com/articles/311875\" target=\"_blank\" rel=\"noopener\">https://yq.aliyun.com/articles/311875</a>",
    "category": "负载均衡"
  },
  {
    "id": 11,
    "type": "单选题",
    "title": "在使用阿里云负载均衡SLB产品时，如果从负载均衡服务中移除ECS实例，直接将ECS实例从负载均衡实例中移除，可能会造成业务闪段。建议先执行以下哪个步骤？",
    "options": [
      "A.将ECS实例权重修改为0",
      "B.先停止ECS实例上web服务",
      "C.在管理控制台里将ECS实例停止",
      "D.将负载均衡的健康检查功能关闭"
    ],
    "answer": "A",
    "explanation": "题目问的是：直接将ECS实例从负载均衡实例中移除，可能会造成业务中断。因为有部分用户的请求可能这台ECS此时正在处理，所以如何保证业务不中断也能把ECS给下线（从负载均衡中移除）了。所以最好的办法就是”将ECS实例权重修改为0“。这样ECS就不会再被分配新的请求了，同时待权重修改之前的请求处理完成了，就可以把该ECS直接从负载均衡中移除了。文档释义：将负载均衡后端ECS的权重置零，相当于将该ECS手工下线，用于对相应ECS进行重启、配置调整等主动运维。而由于该状态下，业务数据是无法经负载均衡转发到该服务器的，所以健康检查相应的自然会显示异常。",
    "category": "负载均衡"
  },
  {
    "id": 12,
    "type": "单选题",
    "title": "在阿里云上创建专有网络VPC时，VPC会自动为用户创建1条系统路由，这条路由的作用是<strong>____</strong>。",
    "options": [
      "A.没有任何作用",
      "B.用于专有网络外的云产品实例访问专有网络内的云产品实例",
      "C.用于专有网络内的云产品实例访问专有网络外的云服务（该云服务支持VPC内的云产品实例直接访问）",
      "D.用于打通用户所有的专有网"
    ],
    "answer": "C",
    "explanation": "以100.64.0.0/10为目标网段的路由条目，用于VPC内的云产品通信。参考链接：<a href=\"https://help.aliyun.com/document_detail/49002.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/49002.html</a>",
    "category": "网络"
  },
  {
    "id": 13,
    "type": "单选题",
    "title": "阿里云的云盾补丁管理服务里发布的补丁来自<strong><strong>_</strong></strong>。",
    "options": [
      "A.阿里云自己研发",
      "B.应用厂商官方发布",
      "C.开源社区网友的贡献",
      "D.操作系统厂商官方发布"
    ],
    "answer": "A",
    "explanation": "云盾依靠积累的安全大数据，每天自动分析0day，第一时间会进行补丁自研，若开通补丁管理功能，可直接进行修复，防止损失的扩大，一般自研补丁，均快于官方，在漏洞爆发和官方未发布补丁的窗口期，把黑客拦截在外。参考链接：<a href=\"https://cn.aliyun.com/product/vipaegis或https://cn.aliyun.com/product/vipaegis\" target=\"_blank\" rel=\"noopener\">https://cn.aliyun.com/product/vipaegis或https://cn.aliyun.com/product/vipaegis</a>",
    "category": "安全"
  },
  {
    "id": 14,
    "type": "单选题",
    "title": "阿里云绿网是云盾体系内的业务防护模块，它的作用是保护网站内容的安全，提前发现不符合政策规定的信息。以下对绿网功能的描述最准确的是<strong>____</strong>。",
    "options": [
      "A.自动判别文本内容和图片是否合规，支持API批量检测图片",
      "B.只支持文本内容的识别",
      "C.可以限制服务器对外访问的资源，防止ECS云主机中毒后破坏内容的完整性",
      "D.用来限制访问ECS云主机的源IP，防止黑客篡改内容"
    ],
    "answer": "A",
    "explanation": "支持API批量检测图片和识别的文字，参考链接：<a href=\"https://help.aliyun.com/document_detail/70430.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/70430.html</a>",
    "category": "安全"
  },
  {
    "id": 15,
    "type": "单选题",
    "title": "当客户开通云盾安骑士功能后经常能收到一些安全的报警信息，但是没有时间处理，为了避免安全风险的发生，客户还可以选择云盾的<strong><strong>___</strong></strong>服务，让阿里云专业的工程师代为处理。",
    "options": [
      "A.态势感知",
      "B.安全管家",
      "C.内容安全（原名：绿网）",
      "D.DDoS高防IP"
    ],
    "answer": "B",
    "explanation": "安全管家有专业技术人员可以帮你运维机实例，参考链接：<a href=\"https://help.aliyun.com/document_detail/31742.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/31742.html</a>",
    "category": "安全"
  },
  {
    "id": 16,
    "type": "单选题",
    "title": "某视频手机应用，日均活跃用户为两百万，可以使用阿里云的哪一款或几款产品来解决用户对视频，图片，音频的大量访问？",
    "options": [
      "A.OSS+CDN",
      "B.VPC",
      "C.云盾+云监控",
      "D.PTS"
    ],
    "answer": "A",
    "explanation": "划重点：来解决用户对视频，图片，音频的大量访问。所以选择OSS和CDN。",
    "category": "其他"
  },
  {
    "id": 17,
    "type": "单选题",
    "title": "阿里云内容分发网络CDN在实际应用中，CDN效果的好坏与是否正确使用非常相关。 以下<strong><strong>___</strong></strong>场景不适合使用CDN。",
    "options": [
      "A.重复访问率不高的个人网盘业务",
      "B.纯静态页的企业门户网站",
      "C.短视频分发网站",
      "D.手机APP的升级包下载站"
    ],
    "answer": "A",
    "explanation": "重复访问率不高的个人网盘业务的回源次数太高，不适合使用CDN。",
    "category": "CDN"
  },
  {
    "id": 18,
    "type": "单选题",
    "title": "阿里云弹性伸缩(Auto Scaling)中，可以配置伸缩规则来定义具体的扩展和收缩操作。以下<strong>____</strong>是伸缩规则。",
    "options": [
      "A.加入或移出3个云服务器ECS实例",
      "B.配置周期性任务，每天13:00点定时触发",
      "C.自动创建云服务器ECS实例时，使用的配置以及镜像",
      "D.是否将不健康的云服务器ECS实例移出"
    ],
    "answer": "A",
    "explanation": "伸缩规则（Scaling Rule）定义了具体的扩展或收缩操作，例如加入或移出N个实例。",
    "category": "监控"
  },
  {
    "id": 19,
    "type": "单选题",
    "title": "您在阿里云两个在不同地域创建了专有网络VPC，如果希望实现两个VPC之间的私网通信，采用<strong>____</strong>产品可以实现。",
    "options": [
      "A.通过高速通道实现VPC之间的私网通信",
      "B.通过路由器创建新的路由条目打通",
      "C.通过安全组创建新的访问规则打通",
      "D.无需任何操作，同一个帐号下的不同VPC本来就是内网连通的"
    ],
    "answer": "A",
    "explanation": "题目问的是希望实现两个VPC之间的私网通信，所以需要通过高速通道实现VPC之间的私网通信。",
    "category": "网络"
  },
  {
    "id": 20,
    "type": "单选题",
    "title": "当收到阿里云的云盾检测出的安全报警信息后，正确的处理方法是<strong><strong>_</strong></strong>。",
    "options": [
      "A.无需理会，阿里云的云盾会搞定一切",
      "B.屏蔽报警信息，一点都不重要",
      "C.云盾只是一个产品，不能处理一切风险。当用户收到报警信息后需判断具体的风险点，主动修复。如:安装杀毒软件、修改管理密码、升级应用软件等",
      "D.云盾报警是非常可怕的，应立即向公安机关报案"
    ],
    "answer": "C",
    "explanation": "云盾检测出的安全报警信息后，用户需要认证对待，判断具体的风险点并尽早主动修复。",
    "category": "安全"
  },
  {
    "id": 21,
    "type": "单选题",
    "title": "阿里云内容分发网络CDN在基本配置之上为用户开放了很多优化功能，包括：页面优化、智能压缩、过滤参数、拖拽播放等。以下关于这些优化功能的描述，错误的是<strong>____</strong>。",
    "options": [
      "A.可以压缩与去除页面中无用的空行、回车等内容，有效缩减页面大小",
      "B.支持多种内容格式的智能压缩，有效减少用户传输内容的大小",
      "C.可以提高站点的整体安全性，防止源站服务器帐号被爆力破解",
      "D.可实现视频、音频点播的随机拖拽播放功能"
    ],
    "answer": "C",
    "explanation": "提高站点的整体安全性不属于CDN性能优化的一部分，参考链接（性能优化部分）：<a href=\"https://www.alibabacloud.com/help/zh/docdetail/64935.htm\" target=\"_blank\" rel=\"noopener\">https://www.alibabacloud.com/help/zh/docdetail/64935.htm</a>",
    "category": "CDN"
  },
  {
    "id": 22,
    "type": "单选题",
    "title": "阿里云的云盾数据风控可以很好地解决WEB应用中常见的垃圾注册、刷库等业务风险识别的难题， 要想使用这项服务首先得进行业务数据的采集，对于WEB应用系统，可以采用<strong><strong>_</strong></strong>方式来采集信息。",
    "options": [
      "A.JavaScript",
      "B.SDK",
      "C.JavaScript和SDK",
      "D.HTML5"
    ],
    "answer": "A",
    "explanation": "数据风控目前只支持在Web中插入指定的JS代码，其他的暂时还不支持，参考链接：<a href=\"https://help.aliyun.com/document_detail/44822.html?spm=5176.10695662.1996646101.searchclickresult.9b7e2313t5UoAq\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/44822.html?spm=5176.10695662.1996646101.searchclickresult.9b7e2313t5UoAq</a>",
    "category": "安全"
  },
  {
    "id": 23,
    "type": "单选题",
    "title": "阿里云的云盾数据风控是通过领先的行为收集技术和机器学习模型，解决账号、活动、支付等关键业务环节存在的欺诈威胁，最终实验降低企业损失。该项服务是基于阿里巴巴的<strong><strong>__</strong></strong>能力开发的。",
    "options": [
      "A.BGP网络",
      "B.弹性计算",
      "C.大数据风控",
      "D.DDoS攻防经验"
    ],
    "answer": "C",
    "explanation": "云盾数据风控是基于阿里大数据风控服务能力，通过领先的行为收集技术和机器学习模型，解决账号、活动、支付等关键业务环节存在的欺诈威胁，降低企业经济损失。",
    "category": "安全"
  },
  {
    "id": 24,
    "type": "单选题",
    "title": "在使用阿里云的负载均衡SLB实例时，做了如下健康检查的配置：响应超时时间为5秒，健康检查间隔为2秒，不健康阀值为3，健康阀值为3。即对于确认一个云服务器ECS实例是健康的，需要连续三次得到正常响应。如果某后端云服务器ECS实例当前状态是不健康的，现在对该实例进行修复，可以通过健康检查确认该实例是健康的时间窗是多久？",
    "options": [
      "A.19秒",
      "B.21秒",
      "C.5秒",
      "D.7秒"
    ],
    "answer": "D",
    "explanation": "题目问的是：后端云服务器ECS实例当从不健康状态，到通过健康检查确认其健康状态的时间窗的时长，所以此题时间窗=(健康检查成功响应时间1S x 健康阈值3S) + 健康检查间隔2S x (健康阈值31)=7S，参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/39455.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39455.html</a>",
    "category": "负载均衡"
  },
  {
    "id": 25,
    "type": "单选题",
    "title": "在使用阿里云的负载均衡SLB实例时，做了如下健康检查的配置：响应超时时间为5秒，健康检查间隔为2秒，不健康阀值为3，健康阀值为3，即对于确认一个后端云服务器ECS实例是不健康的，需要连续三次健康检查超时。则在某后端云服务器ECS实例状态异常后，被负载均衡SLB实例从后端服务器中移出的时间窗为是多久？",
    "options": [
      "A.19秒",
      "B.21秒",
      "C.5秒",
      "D.7秒"
    ],
    "answer": "A",
    "explanation": "题目问的是：ECS被负载均衡SLB实例从后端服务器中移出的时间窗为是多久。即后端云服务器ECS实例从健康状态，到健康检查不健康状态的时间窗的时长，此题时间窗= (健康检查成功响应时间5S x 健康阈值3) + 检查间隔2S x (健康阈值3  1)=19S，参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/39455.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39455.html</a>",
    "category": "负载均衡"
  },
  {
    "id": 26,
    "type": "单选题",
    "title": "如果用户的在使用阿里云对象存储OSS产品时，产生的外网下行流量比较多，可以使用阿里云内容分发网络CDN产品来降低用户的外网流量成本。组合方案中CDN的公网流量成本比OSS的低，同时CDN向OSS回源时产生的流量费也比访客直接访问OSS低。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "题目所表达的意思是因为有了CDN，就不需要频繁回源OSS，但是假如是用户每次都请求OSS的话就需要频繁回源OSS，这个时候，CDN向OSS回源的产生的流量费相比于直接访问要低很多。",
    "category": "CDN"
  },
  {
    "id": 27,
    "type": "单选题",
    "title": "阿里云内容分发网络CDN和传统厂商的CDN相比具有稳定快速、节约成本和简单易用三个特点。以下关于阿里云CDN节约成本的描述错误的是<strong>____</strong>。",
    "options": [
      "A.资源弹性扩展，按实际使用量付费，接入即可实现跨运营商、跨地域的全网覆盖",
      "B.先使用后付费,提供按流量或峰值带宽两种计费方式，满足不同业务需求",
      "C.对于网站突发流量，无需用户干预，自动作出响应和调整,有效减少源站压力",
      "D.同一地域的CDN和云服务ECS实例之间，不收回源流量费"
    ],
    "answer": "D",
    "explanation": "CDN回源的地址可以使回源域名，也可以是回源IP，这个时候访问的是ECS的公网IP，不管是否是同一个地域都会产生回源流量费。参考链接：<a href=\"https://blog.csdn.net/lsj960922/article/details/83411210\" target=\"_blank\" rel=\"noopener\">https://blog.csdn.net/lsj960922/article/details/83411210</a>",
    "category": "CDN"
  },
  {
    "id": 28,
    "type": "单选题",
    "title": "关于阿里云CDN加速域名的“停用”和“删除”，表述正确的是？",
    "options": [
      "A.停用加速域名会自己停止相关域名的解析",
      "B.删除加速域名时，被加速域名的解析记录也会同时被自己恢复为加速前的内容",
      "C.”停用“该加速域名后，该条加速域名信息仍保留，针对加速域名的请求系统不会再做自动回源处理",
      "D.“删除”该加速域名后，将删除该加速域名的全部相关记录，对于仅需要暂停使用该加速域名，推荐选择“停用”方式"
    ],
    "answer": "D",
    "explanation": "“停用”该加速域名后，该条加速域名信息仍保留，针对加速域名的请求系统将做自动回源处理。参考链接：<a href=\"https://yq.aliyun.com/ask/59575?spm=5176.10695662.1996646101.searchclickresult.76dd287flGFI9H\" target=\"_blank\" rel=\"noopener\">https://yq.aliyun.com/ask/59575?spm=5176.10695662.1996646101.searchclickresult.76dd287flGFI9H</a>",
    "category": "CDN"
  },
  {
    "id": 29,
    "type": "单选题",
    "title": "关于阿里云CDN缓存数据更新的建议和描述，错误的是<strong>___</strong>？",
    "options": [
      "A.缓存刷新指的是强制将分发节点上缓存的资源标记为过期，当用户再次对该资源发起请求时，节点会回源拉取资源，并缓存一份更新后的资源在分发节点",
      "B.同名更新时，可以从控制台提交刷新请求，或者使用API，完成主动刷新",
      "C.同名更新时，如果不主动刷新，只能等待缓存文件到期后才能回源拉取最新的文件",
      "D.阿里云CDN支持对同名更新的实时更新，用户只要做相关配置后，不必主动提交请求，便可以实现自动刷新"
    ],
    "answer": "D",
    "explanation": "阿里云CDN支持对同名更新的实时更新，用户只要做相关配置后，在您不主动提交请求的时候，CSN不会自动去实现刷新请求。",
    "category": "CDN"
  },
  {
    "id": 30,
    "type": "单选题",
    "title": "云盾反欺诈服务是阿里巴巴的什么能力开发的？",
    "options": [
      "A.BGP网络",
      "B.DDos攻防经验",
      "C.大数据风控服务",
      "D.弹性计算"
    ],
    "answer": "C",
    "explanation": "云盾反欺诈服务是阿里巴巴的大数据风控服务能力开发。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/39305.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39305.html</a>",
    "category": "安全"
  },
  {
    "id": 31,
    "type": "单选题",
    "title": "某企业托管到传统IDC机房的服务器（包括windows和Linux两种操作系统），每天晚上有来自很多国家的IP地址对其管理密码进行尝试破解。为此管理员小王很是担心，因为工作需要，远程管理端口必须对公网开放。 小王听说阿里云的云盾可以帮助客户提升安全防护的能力，想把系统迁到阿里云上。在阿里云上开通<strong><strong>_</strong></strong>功能可以减少密码被暴力破解的可能。",
    "options": [
      "A.内容安全（原名：绿网）",
      "B.安骑士",
      "C.DDoS基础防护",
      "D.态势感知"
    ],
    "answer": "B",
    "explanation": "题目中问的是防止密码破解，这个是安骑士的功能点。",
    "category": "安全"
  },
  {
    "id": 32,
    "type": "单选题",
    "title": "您希望在阿里云上构建一个安全隔离的网络环境，并且在这个网络环境中可以按自己的需求进行网络拓扑的设计和私网IP地址网段的划分，可以采用<strong>____</strong>产品来满足这个需求。",
    "options": [
      "A.弹性伸缩",
      "B.高速通道",
      "C.专有网络VPC",
      "D.专线"
    ],
    "answer": "C",
    "explanation": "题目中问的是需要实现网络的拓扑的设计和私网IP地址网段的划分，所以需要通过专有网络VPC来实现。",
    "category": "安全"
  },
  {
    "id": 33,
    "type": "单选题",
    "title": "BGP(边界网关协议)主要用于互联网AS(自治系统)之间的互联，BGP的最主要功能在于控制路由的传播和选择最好的路由，阿里云的云服务器ECS产品支持的多线BGP接入,解决的主要问题是<strong>___</strong>。",
    "options": [
      "A.提升全网内容分发效率；",
      "B.避免跨运营商的网络访问的速度瓶颈；",
      "C.解决网络边界内容缓存的问题；",
      "D.解决网络带宽的问题；"
    ],
    "answer": "B",
    "explanation": "使用BGP协议还可以使网络具有很强的扩展性可以将IDC网络与其他运营商互联，轻松实现单IP多线路，做到所有互联运营商的用户访问都很快。所以解决的是跨运营商的网络访问的速度瓶颈问题，参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/40677.html?spm=5176.11065259.1996646101.searchclickresult.6f84264bNJbVX5\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/40677.html?spm=5176.11065259.1996646101.searchclickresult.6f84264bNJbVX5</a>",
    "category": "其他"
  },
  {
    "id": 34,
    "type": "单选题",
    "title": "您的业务将面临一个新的挑战，要进行一次大型的促销，但无法预估业务增长的幅度，但您了解云服务器ECS实例的CPU利用率如果超过了70%，业务的响应速度将会有大幅度的下降，目前您的web应用部署在一组阿里云的云服务器ECS实例上，前端采用一个公网的负载均衡SLB作为流量入口。采用<strong>____</strong>方式可以最高效并最节省地来应对这个场景。",
    "options": [
      "A.制作部署web服务的云服务器ECS实例的镜像,基于该镜像创建足够多的新的云服务器ECS实例,并加入到负载均衡SLB的集群中,提前做好准备",
      "B.采用弹性伸缩Auto Scaling服务,设定伸缩规则,当CPU利用率超过70%的时候自动增加新的服务器ECS实例加入到负载均衡SLB的集群当中,CPU利用率低于30%的时候释放多余的云服务器ECS实例",
      "C.制作部署web服务的云服务器ECS实例的镜像,基于该镜像创建部分新的云服务器ECS实例,并加入到负载均衡SLB的集群中,并由运维人员实时监控CPU的利用率,如果超过70%就立刻申请新的云服务器ECS实例加入到负载均衡的集群中",
      "D.采用弹性伸缩Auto Scaling服务,设定伸缩规则,当CPU利用率超过70%的时候自动增加新的云服务器ECS实例加入到负载均衡SLB的集群当中"
    ],
    "answer": "B",
    "explanation": "题目中说到高效并最节省，所以不仅需要应对CPU超过70%的情况，还需要考虑节省，所以设置了,CPU利用率低于30%的时候释放多余的云服务器ECS实例来节省成本。",
    "category": "负载均衡"
  },
  {
    "id": 35,
    "type": "单选题",
    "title": "某企业使用公共云的云服务器进行文件处理，出于改善性能的考虑，将正在使用的1核2G云服务器的配置提升至2核8G，这种操作在云计算中被称为<strong>____</strong>。",
    "options": [
      "A.垂直扩展",
      "B.自动扩展",
      "C.水平扩展",
      "D.资源编排"
    ],
    "answer": "A",
    "explanation": "题目中说的是升级ECS的配置，所以称之为垂直扩展，假如是通过弹性伸缩来完成的拓展，称之为水平扩展。",
    "category": "其他"
  },
  {
    "id": 36,
    "type": "单选题",
    "title": "由于业务的流量增长，您需要对您的阿里云的云服务ECS实例的带宽进行临时升级操作，以下的描述中错误的是<strong>____</strong>。",
    "options": [
      "A.可以按天进行升级，升级后如果云服务器ECS续费，仍然按照原基础带宽进行续费",
      "B.不支持按天升级，升级之后按升级之后的带宽进行续费",
      "C.可以在当前生命周期内，设定时间段区间内临时增加带宽",
      "D.可以多次叠加操作，支持随时操作，不受任何操作影响"
    ],
    "answer": "B",
    "explanation": "ECS的带宽是带宽支持临时升级操作，但是临时升级只能升级到云服务的有效期的结束时间，所以在升级之后仍然按照升级之前的带宽进行续费。",
    "category": "其他"
  },
  {
    "id": 37,
    "type": "单选题",
    "title": "您在创建阿里云的云服务器ECS实例时必须要选择<strong>____</strong>来指定新建的云服务器ECS实例的系统盘的配置？",
    "options": [
      "A.IP地址",
      "B.镜像",
      "C.安全组",
      "D.区域"
    ],
    "answer": "B",
    "explanation": "ECS的系统盘的配置需要通过镜像来新建完成。",
    "category": "其他"
  },
  {
    "id": 38,
    "type": "单选题",
    "title": "用户在阿里云以外的服务器上安装“安骑士客户端”后，通过<strong><strong>_</strong></strong>方式与指定的阿里云官网帐号关联。",
    "options": [
      "A.在管理控制台生成的安装验证key",
      "B.用户帐号ID",
      "C.用户的AccessKey",
      "D.用户名和密码"
    ],
    "answer": "A",
    "explanation": "安装“安骑士客户端”后，需要通过管理控制台的Key来完成和阿里云官网账号的关联，参考链接：<a href=\"https://help.aliyun.com/document_detail/28457.html?spm=a2c4g.11186623.6.560.1b40c39ajjHSE1\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/28457.html?spm=a2c4g.11186623.6.560.1b40c39ajjHSE1</a>",
    "category": "安全"
  },
  {
    "id": 39,
    "type": "单选题",
    "title": "用户在阿里云以外的服务器上安装“云安全中心客户端”后，通过<strong><strong>_</strong></strong>方式与指定的阿里云官网帐号关联。",
    "options": [
      "A.在管理控制台生成的安装验证key",
      "B.用户帐号ID",
      "C.用户的AccessKey",
      "D.用户名和密码"
    ],
    "answer": "A",
    "explanation": "安装“云安全中心客户端”后，需要通过管理控制台的Key来完成和阿里云官网账号的关联，参考链接：<a href=\"https://www.aliyun.com/ss/?t=h&amp;k=key&amp;rangeinfo=h_pid_28498\" target=\"_blank\" rel=\"noopener\">https://www.aliyun.com/ss/?t=h&amp;k=key&amp;rangeinfo=h_pid_28498</a>",
    "category": "安全"
  },
  {
    "id": 40,
    "type": "单选题",
    "title": "采用云计算服务与传统自建IT系统不同，相比传统自建方式，云计算带来了巨大的便利性。以阿里云服务器ECS为例，这些便利性中不包括<strong><strong>_</strong></strong>。",
    "options": [
      "A.用户按照需要获得计算量而不是按照峰值设计",
      "B.用户无需参与任何安全管理工作",
      "C.用户无需再去维护和管理硬件",
      "D.获得服务器实例在几分钟内而不是数天数周"
    ],
    "answer": "B",
    "explanation": "题目问的是便利性不包括，安全管理工作还是需要用户参加的。",
    "category": "其他"
  },
  {
    "id": 41,
    "type": "单选题",
    "title": "您的特定业务要暂时停止一段时间，为了节省成本希望暂时不使用或者释放这些业务的云服务器ECS实例，但希望能够继续保留现有的云服务器ECS实例系统盘上运行的服务和数据， 通过<strong><strong>_</strong></strong>可以最节省高效地实现。",
    "options": [
      "A.直接释放该云服务器ECS实例，阿里云会自动为用户保留数据",
      "B.制作该云服务器ECS实例的自定义镜像，并释放该实例",
      "C.直接释放该云服务器ECS实例，自动镜像可以保证需要保留的应用和数据还能找回来",
      "D.暂停该云服务器ECS实例"
    ],
    "answer": "B",
    "explanation": "题目要求节省成本希望暂时不使用或者释放这些业务的云服务器ECS实例，所以需要保存这些ECS的数据，所以制作镜像后再释放实例满足题目的要求。",
    "category": "其他"
  },
  {
    "id": 42,
    "type": "单选题",
    "title": "为了提升您在阿里云上部署的应用的可用性，可以在多可用区创建云服务器ECS实例并进行应用的部署，同时可以与<strong>____</strong>产品搭配使用，可以实现高可用的架构。",
    "options": [
      "A.云监控",
      "B.弹性伸缩Auto Scaling",
      "C.云数据库RDS",
      "D.负载均衡SLB"
    ],
    "answer": "D",
    "explanation": "题目中要求可以在多可用区部署ECS，所以需要通过负载均衡SLB来实现。",
    "category": "其他"
  },
  {
    "id": 43,
    "type": "单选题",
    "title": "阿里云的云盾DDoS高防IP是阿里云在“基础DDoS防护”之上提供的高级防护产品，支持四层和七层的抗攻击能力， 以下关于云盾DDoS高防IP的功能描述错误的是<strong>____</strong>。",
    "options": [
      "A.支持弹性按天计费",
      "B.DDoS防护阈值弹性调整，您可以随时升级更高级别的防护，调整过程服务中断时间不超过5分钟",
      "C.提供实时精准的流量报表及攻击详情，让您及时准确获得当前服务详情",
      "D.防护多种DDoS类型攻击，包括但不限于以下攻击类型 ICMP Flood、UDP Flood、TCP Flood、SYN Flood、ACK Flood 等"
    ],
    "answer": "B",
    "explanation": "调整DDoS防护阈值并不会导致服务的中断。",
    "category": "安全"
  },
  {
    "id": 44,
    "type": "单选题",
    "title": "A电商平台近几年业务增长很快，访问量持续保持每年提升300%，平台运营团队因此获得了公司的年度特别奖励。在高兴之余运营团队发现平台系统带宽的支出是以每年500%的比例增长的，如果能有效降低这块成本可以提升整体的运营质量。此时，该公司选择阿里云的<strong>____</strong>服务，效果会最明显。",
    "options": [
      "A.支持多可用区的云数据库RDS",
      "B.内容分发网络CDN",
      "C.对象存储OSS",
      "D.负载均衡SLB"
    ],
    "answer": "B",
    "explanation": "题目中说”系统带宽的支出是以每年500%的比例增长的”，说明服务很占用带宽资源，可以通过内容分发网络CDN来减少服务器的带宽输出。",
    "category": "其他"
  },
  {
    "id": 45,
    "type": "单选题",
    "title": "阿里云的专有网络VPC中用于连接VPC内的各个交换机的设备是<strong>____</strong>。",
    "options": [
      "A.路由器",
      "B.路由表",
      "C.云服务器ECS",
      "D.负载均衡SLB"
    ],
    "answer": "A",
    "explanation": "路由器和交换机 路由器(VRouter)是专有网络的枢纽。作为专有网络中重要的功能组件,它可以连接VPC内的各个交换机,同时也是连接VPC和其他网络的网关设备。参考链接：<a href=\"https://helpcdn.aliyun.com/document_detail/34217.html\" target=\"_blank\" rel=\"noopener\">https://helpcdn.aliyun.com/document_detail/34217.html</a>",
    "category": "网络"
  },
  {
    "id": 46,
    "type": "单选题",
    "title": "阿里云对象存储OSS是阿里云对外提供的海量、安全、低成本、高可靠的云存储服务。在安全性方面OSS服务本身具备了防DDoS攻击和自动黑洞清洗的功能，如果采用传统IT的解决方案，实现和OSS类似的防DDos功能，需要做什么投入<strong>____</strong>。",
    "options": [
      "A.只需要在存储服务器内安装特定的安全软件",
      "B.需要购买专业的流量清洗和黑洞设备，同时按预期的防护能力购买相应的IDC入口带宽",
      "C.购买多台存储服务器，同时启用，可实现相同级别的抗DDoS功能",
      "D.专业的存储服务器都自带了防DDoS功能，无需客户购买"
    ],
    "answer": "B",
    "explanation": "题目问的是传统IT的解决方案需要实现防DDos功能，所以需要购购买专业的流量清洗和黑洞设备，同时按预期的防护能力购买相应的IDC入口带宽。",
    "category": "安全"
  },
  {
    "id": 47,
    "type": "单选题",
    "title": "阿里云的云服务器ECS实例的磁盘快照是某一个时间点上某一个磁盘的数据拷贝。以下针对云服务器ECS实例的磁盘快照的描述正确的是<strong>____</strong>。",
    "options": [
      "A.快照被存放在用户自己的磁盘中",
      "B.自定义快照名称可以以auto开头",
      "C.快照存放在OSS上",
      "D.只有系统盘支持自动快照"
    ],
    "answer": "C",
    "explanation": "快照不会自动保存到已有的OSS Bucket。快照存放的位置与您自建的OSS Bucket相互独立，您无需为快照创建新的Bucket。总结就是快照保存在独立于你自建的OSS空间内。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/52045.html?spm=a2c4g.11186631.6.808.45387acerez4Rq\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/52045.html?spm=a2c4g.11186631.6.808.45387acerez4Rq</a>",
    "category": "其他"
  },
  {
    "id": 48,
    "type": "单选题",
    "title": "阿里云对象存储OSS为每个存储空间Bucket自动分配一个内网地址和一个外网地址，如果正确使用内网地址，一方面可以实现OSS Bucket与云服务器ECS实例之间的流量免费，另一方面云服务器ECS实例通过内网访问OSS Bucket的网络质量较好，能够有效的提升部署在ECS实例上的应用的上传和下载质量。以下关于OSS Bucket内网地址的描述正确的是<strong>____</strong>。",
    "options": [
      "A.如果ECS实例使用OSS Bucket内网地址，只能访问与ECS实例在同一地域且在同一可用区的OSS Bucket",
      "B.只要ECS实例和OSS Bucket属于同一用户，ECS实例就可以通过内网访问OSS Bucket",
      "C.从公共云上的任意一台ECS实例都可以通过内网访问任何地域的OSS Bucket",
      "D.如果ECS实例需要访问OSS Bucket的内网地址，只能访问与ECS实例在同一地域的Bucket"
    ],
    "answer": "D",
    "explanation": "ECS需要通过内网访问OSS的Bucket的话，需要和此Bucket处于同一地域。",
    "category": "OSS"
  },
  {
    "id": 49,
    "type": "单选题",
    "title": "在互联网环境中，云服务器ECS要想被别的应用或网民访问到，就必须开通相应的“端口”，比如常见的HTTP应用工作在80端口，FTP应用工作在21端口，以下是某管理员对云服务器ECS配置的策略，请您选出最安全的一种方法<strong>____</strong>。",
    "options": [
      "A.云服务器ECS实例购买成功后，立即从管理控制台启用了安全组防火墙，并对公网只开通必要的服务端口",
      "B.用户打算在1台云服务器ECS实例上搭建多个应用，为了方便管理，采用了默认的设置，开放全部端口",
      "C.云服务器ECS实例购买成功后，立即从管理控制台启用了安全组防火墙，对公网开放的端口范围是从0到1024",
      "D.云服务器ECS实例购买成功后，立即从管理控制台启用了安全组防火墙，对公网开放全部端口，ECS实例对外只能访问80端口"
    ],
    "answer": "A",
    "explanation": "按照企业上云的最佳安全策略，应该是需要用到ECS的指定的服务端口才去开通必要的服务端口。避免由于端口暴露导致ECS的安全问题。",
    "category": "安全"
  },
  {
    "id": 50,
    "type": "单选题",
    "title": "某企业使用公共云搭建了一个门户网站，目前访问缓慢。为了提升网站的响应速度，又购置了多台云服务器，希望新增加的服务器和原有服务器一起对外提供服务，需要哪种技术配合实现这个方案<strong>____</strong>？",
    "options": [
      "A.CDN（内容分发网络）",
      "B.容器服务",
      "C.VPC（虚拟专用网）服务",
      "D.负载均衡"
    ],
    "answer": "D",
    "explanation": "题目中说”希望新增加的服务器和原有服务器一起对外提供服务”的技术，所以选择把新加的机器作为负载均衡SLB后端的机器一起提供服务，所以选择负载均衡SLB。",
    "category": "其他"
  },
  {
    "id": 51,
    "type": "单选题",
    "title": "云计算一个重要特点是弹性，阿里云的用户可以根据业务需求和策略实现计算资源的自动调整。在业务量高峰时增加ECS实例来提升系统的处理能力，在业务量低谷时自动减少ECS实例以节约成本。针对此场景，阿里云的<strong>____</strong>产品可以和云服务器ECS实例配合使用实现弹性计算。",
    "options": [
      "A.负载均衡SLB",
      "B.弹性伸缩Auto Scaling",
      "C.云数据库RDS",
      "D.专有网络VPC"
    ],
    "answer": "B",
    "explanation": "题目中说需要自动根还有业务量来自动调节ECS实例的数目，所以需要选择弹性伸缩Auto Scaling。",
    "category": "其他"
  },
  {
    "id": 52,
    "type": "单选题",
    "title": "云计算以多种形式对外提供服务，比如提供给消费者的服务是运行在云计算基础设施上的应用程序，消费者可以在各种设备上通过瘦客户端界面访问，如浏览器（例如基于Web的邮件），不需要管理或控制任何云计算基础设施，包括网络、服务器、操作系统、存储，甚至独立的应用能力等等，仅需要对应用进行有限的、特殊的配置。这种服务形式被称作<strong>____</strong>。",
    "options": [
      "A.PaaS(平台即服务)",
      "B.DaaS(数据存储即服务)",
      "C.SaaS(软件即服务)",
      "D.IaaS(基础设施即服务)"
    ],
    "answer": "C",
    "explanation": "题目中说了是消费者通过瘦客户端界面访问，提到客户端那就相当于日常使用的软件，所以选择SaaS(软件即服务)。",
    "category": "网络"
  },
  {
    "id": 53,
    "type": "单选题",
    "title": "用户通过网络使用软件，无需购买软硬件、建设机房等，而改用向提供商租用基于Web的软件，来管理企业经营活动，且无需对软件进行维护，服务提供商会全权管理和维护软件。这种模式是云计算提供的<strong>____</strong>服务。",
    "options": [
      "A.SaaS(软件即服务)",
      "B.DaaS(数据即服务)",
      "C.IaaS(基础设施即服务)",
      "D.PaaS(平台即服务)"
    ],
    "answer": "A",
    "explanation": "题目中说了是基于Web的软件，消费者只需要通过网络使用软件，不需要管理和维护软件，所以选择SaaS(软件即服务)。",
    "category": "网络"
  },
  {
    "id": 54,
    "type": "单选题",
    "title": "阿里云云服务器ECS是一种简单高效、处理能力可弹性伸缩的计算服务，帮助您快速构建更稳定、安全的应用，提升运维效率，降低 IT 成本。ECS属于<strong>____</strong>。",
    "options": [
      "A.SaaS(软件即服务)",
      "B.IaaS(基础设施即服务)",
      "C.PaaS(平台即服务)",
      "D.DaaS(数据即服务)"
    ],
    "answer": "B",
    "explanation": "IaaS也就是基础设施即服务（InfrastructureasaService）。IaaS公司会提供场外服务器，存储和网络硬件，也可以选择租用。节省了维护成本和办公场地，公司可以在任何时候利用这些硬件来运行其应用。比如阿里云的ECS，亚马逊的EC2，腾讯云的CVM，都属于IaaS。",
    "category": "安全"
  },
  {
    "id": 55,
    "type": "单选题",
    "title": "云计算以多种形式对外提供服务，比如提供给消费者的服务是把客户开发或者购买的应用程序部署到云计算基础设施上。消费者不需要管理或控制底层的云基础设施，包括网络、服务器、操作系统、存储等，但能够控制部署的应用程序，也可能控制运行应用程序的托管环境配置。这种服务形式被称作<strong>____</strong>。",
    "options": [
      "A.SaaS(软件即服务)",
      "B.DaaS(数据即服务)",
      "C.IaaS(基础设施即服务)",
      "D.PaaS(平台即服务)"
    ],
    "answer": "D",
    "explanation": "题目中说了消费者不需要控制底层的设施，但是可以控制运行应用程序的托管环境配置，且平台包括网络、服务器、操作系统、存储等。所以属于平台服务。",
    "category": "网络"
  },
  {
    "id": 56,
    "type": "单选题",
    "title": "云计算以多种形式对外提供服务，比如可以提供给消费者处理能力、存储、网络和其他基本的计算资源，消费者能够利用这些计算资源部署和运行任意软件，包括操作系统和应用程序，但不能管理或控制任何云计算基础设施。这种服务形式被称作<strong>____</strong>。",
    "options": [
      "A.SaaS(软件即服务)",
      "B.PaaS(平台即服务)",
      "C.IaaS(基础设施即服务)",
      "D.DaaS(数据即服务)"
    ],
    "answer": "C",
    "explanation": "题目中说了：利用这些计算资源部署和运行任意软件，包括操作系统和应用程序，说到”计算资源”了，所以就是提供基础的云计算服务，即基础设施即服务，具体可以结合参考链接中的产品举例理解区分：<a href=\"https://yq.aliyun.com/articles/560829\" target=\"_blank\" rel=\"noopener\">https://yq.aliyun.com/articles/560829</a>",
    "category": "网络"
  },
  {
    "id": 57,
    "type": "单选题",
    "title": "某企业利用某公共云服务，租用了若干台虚拟机，并把这些虚拟机放在一个隔离的虚拟网络中，可以完全掌控自己的虚拟网络，包括选择自有 IP 地址范围、划分网段、配置路由表和网关等，这个虚拟网络在公共云服务中通常称作<strong>____</strong>。",
    "options": [
      "A.NFV服务",
      "B.VPN服务",
      "C.SDN服务",
      "D.VPC服务"
    ],
    "answer": "D",
    "explanation": "题目中说需要构建隔离的虚拟网络，所以需要用到阿里云专用网络VPC服务。",
    "category": "网络"
  },
  {
    "id": 58,
    "type": "单选题",
    "title": "您的阿里云专有网络VPC创建后，需要完成<strong>____</strong>操作之后，才能够在专有网络内创建其他的云产品实例，如云服务器、负载均衡和云数据库等.",
    "options": [
      "A.配置网段地址",
      "B.创建交换机",
      "C.设置路由表",
      "D.创建路由器"
    ],
    "answer": "B",
    "explanation": "在阿里云专有网络VPC创建后，路由器也是随着VPC一起自动创建的，所以不需要手动创建了。这个时候需要继续创建交换机才能在交换机中创建其他云产品。",
    "category": "数据库"
  },
  {
    "id": 59,
    "type": "单选题",
    "title": "D公司基于阿里云对象存储OSS和云服务器ECS构建了一个应用网站。初期采用OSS的原因是看上了它的大容量存储和能在多台ECS之间共享读写文件的功能，后来因业务需要逐渐增加了事务性的数据交互需求，在多个请求共同写OSS上的同一个文件时会互相覆盖，为此管理员很发愁。遇到这种情况可以选用阿里云的哪个云服务直接解决<strong>____</strong>？",
    "options": [
      "A.增加更多的云服务器ECS",
      "B.内容分发网络CDN",
      "C.选用负载均衡SLB",
      "D.选用关系型云数据库RDS解决"
    ],
    "answer": "D",
    "explanation": "题目中说因为增加了事务性的数据交互需求，导致在同时写一个文件的时候会相互覆盖，这个时候需要选择关系型数据库RDS来解决事务性的交互需求。",
    "category": "OSS"
  },
  {
    "id": 60,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB提供对多台云服务器进行流量分发的服务，支持四层和七层的流量转发。其中七层流量转发是通过<strong>____</strong>实现的。",
    "options": [
      "A.LVS",
      "B.Nginx",
      "C.Tengine",
      "D.Heartbeat"
    ],
    "answer": "C",
    "explanation": "流量转发四层是通过LVS实现，七层是通过Tengine实现",
    "category": "负载均衡"
  },
  {
    "id": 61,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB提供对多台云服务器进行流量分发的服务，支持四层和七层的流量转发。其中四层流量转发是通过<strong>____</strong>实现的。",
    "options": [
      "A.LVS",
      "B.Tengine",
      "C.Nginx",
      "D.Heartbeat"
    ],
    "answer": "A",
    "explanation": "流量转发四层是通过LVS实现，七层是通过Tengine实现",
    "category": "负载均衡"
  },
  {
    "id": 62,
    "type": "单选题",
    "title": "阿里云的云服务器ECS产品支持的多线BGP接入，解决的主要问题是<strong>____</strong>.",
    "options": [
      "A.提升全网内容分发效率",
      "B.避免跨运营商的网络访问的速度瓶颈",
      "C.解决网络边界内容缓存的问题",
      "D.其他都是"
    ],
    "answer": "B",
    "explanation": "阿里云多线BGP（中国电信、联通、移动、教育网等）接入，确保全国用户访问畅通，提升用户访问的质量。所以解决的是避免跨运营商的网络访问的速度瓶颈。",
    "category": "其他"
  },
  {
    "id": 63,
    "type": "单选题",
    "title": "如果在配置阿里云的负载均衡SLB实例的监听时，开启了“获取真实访问IP”，针对7层服务可以通过http头部中的<strong>____</strong>字段获取来访者真实IP。",
    "options": [
      "A.Authorization",
      "B.Connection",
      "C.Etag",
      "D.XForwardedFor"
    ],
    "answer": "D",
    "explanation": "在负载均衡SLB中，可以通过XForwardedFor的方式获取访问者真实IP。参考链接：<a href=\"https://help.aliyun.com/document_detail/100972.html?spm=5176.11065259.1996646101.searchclickresult.6d656c30x7VJQG\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/100972.html?spm=5176.11065259.1996646101.searchclickresult.6d656c30x7VJQG</a>",
    "category": "负载均衡"
  },
  {
    "id": 64,
    "type": "单选题",
    "title": "阿里云对象存储OSS是按使用收费的服务，为了防止用户在OSS上的数据被其他人盗链而产生不必要的支出，OSS设计了防盗链功能，以下有关OSS防盗链实现机制的说法正确的是<strong>____</strong>?",
    "options": [
      "A.基于SSL密钥实现",
      "B.基于HTTP的Authorization实现",
      "C.基于IP黑、白名单机制",
      "D.基于HTTP header中表头字段referer实现"
    ],
    "answer": "D",
    "explanation": "对象存储OSS的防盗链是基于HTTP或HTTPS header中包含Referer字段来实现的。参考链接：<a href=\"https://help.aliyun.com/document_detail/32021.html?spm=5176.10695662.1996646101.searchclickresult.64af13a2RWVt4S\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/32021.html?spm=5176.10695662.1996646101.searchclickresult.64af13a2RWVt4S</a>",
    "category": "OSS"
  },
  {
    "id": 65,
    "type": "单选题",
    "title": "某视频直播公司采用阿里云弹性伸缩（Auto Scaling）来实现动态添加或者减少云服务器ECS实例，来应对业务量的变化。由于该公司的系统刚上线不久，没有历史数据做参考，同时也不能预估业务量的变化，他们希望通过ECS实例资源的使用情况（比如CPU利用率、系统负载Load等）来弹性伸缩计算资源。他们应该选择以下哪种伸缩模式<strong>____</strong>?",
    "options": [
      "A.lazy模式",
      "B.定时模式",
      "C.固定数量模式",
      "D.动态模式"
    ],
    "answer": "D",
    "explanation": "因为公司不能正确预估业务量的变化，所以需要用动态模式来自动伸缩ECS。",
    "category": "监控"
  },
  {
    "id": 66,
    "type": "单选题",
    "title": "以下<strong>____</strong>安全功能需要单独购买，不是在创建阿里云的云服务器ECS实例的同时可以免费获得的。",
    "options": [
      "A.木马查杀",
      "B.基础DDoS防护",
      "C.防暴力破解",
      "D.DDoS高防IP"
    ],
    "answer": "D",
    "explanation": "DDoS高防IP是需要付费购买的功能。基础DDoS防护是可以免费开通的。",
    "category": "安全"
  },
  {
    "id": 67,
    "type": "单选题",
    "title": "阿里云的云服务器ECS实例的安全组实现了类似虚拟防火墙的功能，用于设置单个或多个云服务器ECS实例的网络访问策略。对于云服务器安全组使用的说法正确的是<strong>____</strong> 。",
    "options": [
      "A.每个ECS实例只能属于一个安全组",
      "B.每个ECS实例可以加入多个安全组，无数量上限",
      "C.ECS实例必须加入安全组",
      "D.ECS实例可以不加入安全组"
    ],
    "answer": "C",
    "explanation": "每个ECS实例最多可以加入 5 个安全组，且ECS至少加入一个安全组、<a href=\"https://help.aliyun.com/knowledge_detail/87018.html?spm=5176.2000002.0.0.14222621oEcXv4\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/87018.html?spm=5176.2000002.0.0.14222621oEcXv4</a>",
    "category": "安全"
  },
  {
    "id": 68,
    "type": "单选题",
    "title": "您已经成功购买了阿里云的弹性公网IP（EIP），需要通过管理控制台进行弹性公网IP的绑定，但是界面提示没有找到相应的云服务器ECS实例，可能是<strong>____</strong>原因引起的。",
    "options": [
      "A.您所申请的EIP所在地域的某个可用区内没有经典网络的云服务器ECS实例",
      "B.您所申请的EIP所在地域的专有网络VPC内在某个可用区内的没有云服务器ECS实例",
      "C.您所申请的EIP所在的地域内的专有网络VPC内没有云服务器ECS实例",
      "D.您所申请的EIP所在的地域内没有经典网络的云服务器ECS实例"
    ],
    "answer": "C",
    "explanation": "划重点：绑定弹性公网IP却提示没有找到相应的云服务器ECS实例。弹性公网IP的限制有：ECS实例的网络类型必须是专有网络、ECS实例的地域必须和EIP的地域相同。所以选择：您所申请的EIP所在的地域内的专有网络VPC内没有云服务器ECS实例。参考链接：<a href=\"https://help.aliyun.com/document_detail/54479.html?spm=a2c4g.11186623.6.543.37205a4f4vAvhz\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/54479.html?spm=a2c4g.11186623.6.543.37205a4f4vAvhz</a>",
    "category": "其他"
  },
  {
    "id": 69,
    "type": "单选题",
    "title": "您的业务增长，会出现现有的阿里云的云服务器ECS实例的系统盘存储资源不足的问题，阿里云提供了系统盘扩容的功能帮您解决系统盘存储资源不足的问题。下列关于扩容系统盘的操作说法错误的是<strong>____</strong>。",
    "options": [
      "A.扩容系统盘之后您实例的IP地址会发生变化",
      "B.其他都是错误的",
      "C.通过更换实例的系统盘来实现系统盘的扩容",
      "D.扩容系统盘的时候需要停止您的实例，因此会短暂中断您的业务"
    ],
    "answer": "A",
    "explanation": "扩容系统盘是需要ECS处于停止的状态，所以会中断ECS中的业务，但是扩容系统盘之后不会导致实例的IP地址发生变化。",
    "category": "其他"
  },
  {
    "id": 70,
    "type": "单选题",
    "title": "某企业使用负载均衡SLB将用户的访问请求分发到多台云服务器ECS实例上，同时为了应对业务波动带来的计算资源需求的变化，选用了阿里云弹性伸缩（Auto Scaling）对后端云服务器ECS实例进行动态的添加或者删除。基于对业务状况的判断，他们定义了两种伸缩模式的任务，一种是定时任务，即在指定的时间点执行伸缩活动，另一种是报警任务，即根据云监控的返回信息自动触发伸缩活动。假设在某一时间点，定时任务和报警任务同时满足执行条件，以下说法正确的是<strong>____</strong> ？",
    "options": [
      "A.两个伸缩活动同时执行",
      "B.同时只会有一个伸缩活动执行，两种任务并没有优先级的区分",
      "C.同时只会有一个伸缩活动执行，报警任务触发的伸缩活动优先执行",
      "D.同时只会有一个伸缩活动执行，定时任务触发的伸缩活动优先执行"
    ],
    "answer": "B",
    "explanation": "两者是没有优先级之分，两个同时触发会随机执行。请以我们的答案为准。这个答案我们都是确认过的，所以不用质疑哦，这个暂时没有官方文档释义支持。",
    "category": "负载均衡"
  },
  {
    "id": 71,
    "type": "单选题",
    "title": "您发现在创建云服务器ECS实例的磁盘快照时所需的时间每次都不同，关于这个现象说法错误的是<strong>____</strong>？",
    "options": [
      "A.因为磁盘容量大小不同，导致快照创建的时间不同",
      "B.第一次给磁盘创建快照是一个全量的过程，会把整个磁盘都做成快照，所以第一次快照制作的时间比较长",
      "C.第一次快照之后的磁盘快照是增量创建，只会对磁盘增加的数据和修改的数据做快照，所以第一次之后的快照制作的时间相对短一些",
      "D.磁盘快照生成的时候磁盘本身的读写性能发生了变化"
    ],
    "answer": "D",
    "explanation": "阿里云提供的磁盘本身的读写性能是稳定的，并不会发生了变化，创建一份快照的所需时间主要取决于磁盘容量大小。根据快照的增量原理，磁盘的第一份快照为全量快照，耗时较久。再次创建快照，相对耗时较短，但依然取决于和上一份快照之间的数据变化量。变化越大，耗时越久。参考链接：<a href=\"https://help.aliyun.com/document_detail/25455.html?spm=5176.11065259.1996646101.searchclickresult.41243e7fSh5imI\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25455.html?spm=5176.11065259.1996646101.searchclickresult.41243e7fSh5imI</a>",
    "category": "其他"
  },
  {
    "id": 72,
    "type": "单选题",
    "title": "阿里云负载均衡SLB可以通过流量分发扩展部署在后端服务器中的应用系统对外服务的能力，通过消除单点故障提升应用系统的可用性，必须和阿里云提供的<strong>____</strong>配合使用。",
    "options": [
      "A.云数据库RDS",
      "B.云服务器ECS",
      "C.专有网络VPC",
      "D.云监控"
    ],
    "answer": "B",
    "explanation": "负载均衡SLB必须和云服务器ECS配合使用。",
    "category": "负载均衡"
  },
  {
    "id": 73,
    "type": "单选题",
    "title": "<a href=\"http://www.bestcar.com是一个刚建立的汽车资讯车友交流网站。主站用Php搭建，有10GB的图片素材，部分JS文件。目前购买一台ECS放置所有程序代码，并在ECS上安装MySQL数据库。随着用户访问量的不断增长，访问网站的速度越来越慢，图片加载慢，网站响应慢。用户上传的图片每周增长50GB。以下哪种产品组合方案可以同时解决大量图片存储和快速访问两个问题_______\" target=\"_blank\" rel=\"noopener\">www.bestcar.com是一个刚建立的汽车资讯车友交流网站。主站用Php搭建，有10GB的图片素材，部分JS文件。目前购买一台ECS放置所有程序代码，并在ECS上安装MySQL数据库。随着用户访问量的不断增长，访问网站的速度越来越慢，图片加载慢，网站响应慢。用户上传的图片每周增长50GB。以下哪种产品组合方案可以同时解决大量图片存储和快速访问两个问题_______</a>_ ？",
    "options": [
      "A.采用OSS+ECS组合",
      "B.采用OSS+MTS组合",
      "C.采用OSS+RDS组合",
      "D.采用OSS+CDN组合"
    ],
    "answer": "D",
    "explanation": "题目中说了需要需要同时解决大量图片存储和快速访问，解决大量图片所以需要用OSS来存储，实现快速访问所以需要用CDN来配合加速访问。",
    "category": "数据库"
  },
  {
    "id": 74,
    "type": "单选题",
    "title": "您的业务将面临一个新的挑战，要进行一次大型的促销，但无法预估业务增长的幅度，但您了解云服务器ECS实例的CPU利用率如果超过了70%，业务的响应速度将会有大幅度的下降，目前您的web应用部署在一组阿里云的云服务器ECS实例上，前端采用一个公网的负载均衡SLB作为流量入口。采用<strong>____</strong>方式可以最高效并最节省地来应对这个场景。",
    "options": [
      "A.制作部署web服务的云服务器ECS实例的镜像，基于该镜像创建足够多的新的云服务器ECS实例，并加入到负载均衡SLB的集群中，提前做好准备",
      "B.采用弹性伸缩Auto Scaling服务，设定伸缩规则，当CPU利用率超过70%的时候自动增加新的服务器ECS实例加入到负载均衡SLB的集群当中，CPU利用率低于30%的时候释放多余的云服务器ECS实例",
      "C.制作部署web服务的云服务器ECS实例的镜像，基于该镜像创建部分新的云服务器ECS实例，并加入到负载均衡SLB的集群中，并由运维人员实时监控CPU的利用率，如果超过70%就立刻申请新的云服务器ECS实例加入到负载均衡的集群中",
      "D.采用弹性伸缩Auto Scaling服务，设定伸缩规则，当CPU利用率超过70%的时候自动增加新的云服务器ECS实例加入到负载均衡SLB的集群当中"
    ],
    "answer": "B",
    "explanation": "题目中说无法预估业务增长的幅度，且需要”最高效最节省”，所以没有办法准确的预计需要用的ECS的数量，所以需要用到弹性伸缩的动态伸缩模式，且需要在CUP利用率比较低的时候自动减少ECS来释放多余的ECS节省成本。",
    "category": "负载均衡"
  },
  {
    "id": 75,
    "type": "单选题",
    "title": "您已经有一台运行状态的云服务器ECS实例，并完成了所需的应用软件的部署。如果您希望创建一个部署同样软件的新的云服务器ECS实例，可以采用<strong>____</strong>方式最高效的获得。",
    "options": [
      "A.上传本地制作好的镜像，并基于该镜像创建一台新的云服务器ECS实例",
      "B.基于现有的云服务器ECS实例的系统盘制作快照，并基于该快照生成新的云服务器ECS实例",
      "C.直接生成一台新的云服务器ECS实例，并进行所需软件的部署",
      "D.基于现有的云服务器ECS实例的系统盘制作自定义镜像，并基于该自定义镜像生成新的云服务器ECS实例"
    ],
    "answer": "D",
    "explanation": "题目中说需要创建一个部署同样软件的新的云服务器ECS实例，所以需要通过制作镜像来实现快速复制，",
    "category": "其他"
  },
  {
    "id": 76,
    "type": "单选题",
    "title": "阿里云弹性伸缩（Auto Scaling）经常会和云服务器ECS、负载均衡SLB、云数据库RDS等产品配合使用，以下说法中正确的是<strong>____</strong>？",
    "options": [
      "A.弹性伸缩必须和云服务器ECS一起使用",
      "B.弹性伸缩可以单独使用，不依赖于其他任何产品",
      "C.弹性伸缩必须和云数据库RDS一起使用",
      "D.弹性伸缩必须和负载均衡SLB一起使用"
    ],
    "answer": "B",
    "explanation": "阿里云弹性伸缩(Auto Scaling)可以单独使用，无需搭配其他云产品一起使用。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/25970.html?spm=a2c4g.11186631.2.10.1d7522dbf5Y9Uk\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/25970.html?spm=a2c4g.11186631.2.10.1d7522dbf5Y9Uk</a>",
    "category": "数据库"
  },
  {
    "id": 77,
    "type": "单选题",
    "title": "互联网络设备之间的数据传输需要特定的规范，这个规范的专业述语被称为“协议”，有一种协议的发明对互联网的产生起了决定性的作用，通过这个协议可以使数万台的计算机连接在一起，这个协议的名称是<strong>____</strong>。",
    "options": [
      "A.HTTP",
      "B.UDP",
      "C.SOAP",
      "D.TCP/IP"
    ],
    "answer": "D",
    "explanation": "Internet使用TCP/IP协议实现了全球范围的计算机网络的互连。",
    "category": "网络"
  },
  {
    "id": 78,
    "type": "单选题",
    "title": "阿里云对象存储OSS提供了海量的存储能力。当用户需要将一些Object从一个Bucket复制到另外一个Bucket，且不改变内容时，可以使用OSS OpenAPI的CopyObject实现。使用CopyObjec来复制文件可以节省<strong>____</strong>成本。",
    "options": [
      "A.存储成本",
      "B.网络带宽",
      "C.API请求次数",
      "D.没有节约成本"
    ],
    "answer": "B",
    "explanation": "CopyObject接口用于在存储空间（Bucket ） 内或同地域的Bucket之间拷贝文件（Object），所以不需要使用带宽再次上传至OSS，可以节省OSS的网络带宽。",
    "category": "OSS"
  },
  {
    "id": 79,
    "type": "单选题",
    "title": "阿里云弹性伸缩(Auto Scaling)，是根据用户的业务需求和策略，自动调整其弹性计算资源的管理服务。支持用户添加已有的云服务器ECS实例，但该云服务器ECS实例的状态必须为<strong>____</strong>。",
    "options": [
      "A.已停止",
      "B.运行中",
      "C.准备中",
      "D.已创建"
    ],
    "answer": "B",
    "explanation": "弹性伸缩手动添加ECS，ECS的状态必须为运行中。",
    "category": "监控"
  },
  {
    "id": 80,
    "type": "单选题",
    "title": "某公司有一个阿里云官网账号，并通过此账号申请使用了阿里云的负载均衡SLB实例，公司的账号的管理员创建了子账号，并将负载均衡SLB实例的只读权限授予该子账号，该子账号的拥有者可以查看SLB服务，但是无法对其进行修改。上述授权操作使用了阿里云的<strong>____</strong>。",
    "options": [
      "A.RAM (Resource Access Management)",
      "B.资源编排",
      "C.DAC（Discretionary Access Control）",
      "D.MAC（Mandatory Access Control）"
    ],
    "answer": "A",
    "explanation": "提及到”子账号”，所以需要通过阿里云的RAM (Resource Access Management) ，即用户身份管理与资源访问控制服务。参考链接：<a href=\"https://help.aliyun.com/document_detail/28627.html?spm=5176.11065259.1996646101.searchclickresult.69ec47ecbFOnAe\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/28627.html?spm=5176.11065259.1996646101.searchclickresult.69ec47ecbFOnAe</a>",
    "category": "负载均衡"
  },
  {
    "id": 81,
    "type": "单选题",
    "title": "当云服务器ECS实例选择了CentOS系统时，本地为Windows操作系统，采用<strong>____</strong>方式无法正确的登录该ECS实例。",
    "options": [
      "A.阿里云管理控制台",
      "B.SecureCRT",
      "C.Putty",
      "D.Windows自带的远程桌面客户端"
    ],
    "answer": "D",
    "explanation": "Windows自带的远程桌面客户端只能连接Windows系统的远程界面，不能连接Centos系统（Linux系统）。",
    "category": "其他"
  },
  {
    "id": 82,
    "type": "单选题",
    "title": "阿里云对象存储OSS是阿里云对外提供的海量、安全、低成本、高可靠的云存储服务。用OSS管理的文件可以很方便地对外提供分享，分享前点击文件后面的“获取地址”文字链接即可得到当前文件的地址，这个分享使用的是<strong>____</strong>应用层（七层）协议。",
    "options": [
      "A.HTTP",
      "B.TCP",
      "C.FTP",
      "D.SMTP"
    ],
    "answer": "A",
    "explanation": "OSS的分享文件使用的是HTTP应用层（七层）的协议。",
    "category": "安全"
  },
  {
    "id": 83,
    "type": "单选题",
    "title": "使用阿里云弹性伸缩(Auto Scaling)来实现计算资源的弹性配置时，做了如下设置：伸缩组的属性中设置MinSize=6，MaxSize=8，伸缩规则为“减少5台ECS”， 伸缩配置也进行了正常的配置。该伸缩组当前的云服务器ECS实例数为8台，通过设置定时任务来执行，执行一次后，会减少<strong>____</strong>云服务器ECS实例。",
    "options": [
      "A.5台",
      "B.1台",
      "C.2台",
      "D.0台"
    ],
    "answer": "C",
    "explanation": "注意：MinSize=6，所以执行定时任务每次减少5台，但是最少需要有6台机器，所以执行一次后最多只能减少2台。",
    "category": "监控"
  },
  {
    "id": 84,
    "type": "单选题",
    "title": "云盾是阿里云整体安全体系的一部分，为云上客户和阿里云自身提供多方面的安全保障功能。以下关于云盾的描述，正确的是<strong>____</strong>。",
    "options": [
      "A.是一款软件产品，用户开通云产品后需要安装才能使用",
      "B.是一款硬件产品",
      "C.是阿里云为用户提供的，包括安全漏洞检测、网页木马检测以及主机入侵检测、防DDoS攻击等功能的一站式安全服务",
      "D.云盾的所有功能都需要付费使用"
    ],
    "answer": "C",
    "explanation": "云盾是阿里巴巴集团多年来安全技术研究积累的成果，结合阿里云云计算平台强大的数据分析能力。为中小网站提供如安全漏洞检测、网页木马检测以及面向云服务器用户提供的主机入侵检测、防DDOS等一站式安全服务。云盾的功能产品部分是可以免费使用的。",
    "category": "安全"
  },
  {
    "id": 85,
    "type": "单选题",
    "title": "当您的阿里云的云服务器ECS实例处于<strong>____</strong>状态时，通过API查询云服务器状态时，返回状态是running。",
    "options": [
      "A.启动中",
      "B.运行中",
      "C.更换系统中",
      "D.重置中"
    ],
    "answer": "B",
    "explanation": "ECS状态是running对应的是运行中的状态。启动中的状态是：Starting。注意区别。",
    "category": "其他"
  },
  {
    "id": 86,
    "type": "单选题",
    "title": "您希望通过华北2（北京）地域的阿里云专有网络VPC中的云服务器ECS实例通过内网访问OSS，但是连接osscnbeijinginternal.aliyuncs.com（华北2（北京）地域的通用内网地址）失败，可以通过<strong>____</strong>解决。",
    "options": [
      "A.只能通过外网地址进行访问",
      "B.其他方式都不能解决",
      "C.换其他地域的内网地址进行访问，如华北1（青岛）地域的通用内网地址（osscnqingdaointernal.aliyuncs.com）",
      "D.通过VPC专用的OSS内网地址进行访问，vpc100osscnbeijing.aliyuncs.com"
    ],
    "answer": "D",
    "explanation": "在VPC的环境中ECS连接osscnbeijinginternal.aliyuncs.com这个地址不通。这个是因为OSS针对VPC是有一套自己的内网地址，所以需要用北京：vpc100osscnbeijing.aliyuncs.com，参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/38740.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/38740.html</a>",
    "category": "OSS"
  },
  {
    "id": 87,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB是对多台后端服务器进行流量分发的服务。以下关于负载均衡SLB的说法正确的是<strong>____</strong>。",
    "options": [
      "A.通过Tengine提供四层负载均衡",
      "B.可以不需要云服务器ECS实例就实现负载均衡服务",
      "C.通过集群提供服务，具有高可靠性",
      "D.通过LVS提供七层负载均衡"
    ],
    "answer": "C",
    "explanation": "通过集群提供服务,具有高可用性(也可以说是可靠性)，四层负载均衡是通过LVS来实现的，七层负载均衡是通过Tengine来实现的。负载均衡必须和云服务器ECS配合使用。",
    "category": "负载均衡"
  },
  {
    "id": 88,
    "type": "单选题",
    "title": "阿里云的云服务器ECS产品的应用非常广泛，既可以单独的作为Web服务器，也可以与其他阿里云产品配合提供多媒体解决方案。在多媒体、大流量的APP或网站应用场景下，云服务器ECS实例与阿里云的<strong>____</strong>产品搭配，可大幅减少用户访问的等待时间并降低带宽费用。",
    "options": [
      "A.对象存储OSS",
      "B.负载均衡SLB",
      "C.内容分发网络CDN",
      "D.弹性伸缩Auto Scaling"
    ],
    "answer": "C",
    "explanation": "题目中说了大幅减少用户访问的等待时间并降低带宽费用，意思就是加速访问，节省带宽，所以需要内容分发网络CDN来实现。",
    "category": "其他"
  },
  {
    "id": 89,
    "type": "单选题",
    "title": "阿里云会为每个云服务器ECS实例分配一个私网IP。以下关于云服务器ECS实例的私网IP说法正确的是<strong>____</strong>。",
    "options": [
      "A.私网IP不可以用于SLB的负载均衡",
      "B.同一地域内实例之间通过私网IP进行的通讯流量是收费的",
      "C.不要在操作系统内部自行变更私网IP，否则可能会导致私网通讯中断",
      "D.私网不允许同一帐号下的云服务器ECS实例之间或者云服务器ECS实例与其他云服务之间互访"
    ],
    "answer": "C",
    "explanation": "私网IP是可以用于SLB的负载均衡，同一地域内实例之间通过私网IP进行的通讯是不收取流量费的。",
    "category": "其他"
  },
  {
    "id": 90,
    "type": "单选题",
    "title": "某用户是做香蕉销售生意的，所有的在线平台和数据都放在阿里云的云服务器ECS实例和云数据库RDS实例中，现在CEO想对香蕉销售额的变化趋势做一个监控，并在订单量发生较大变化时能收到预警信息，可以使用阿里云的<strong>____</strong>产品实现，并在管理控制台中展现结果。",
    "options": [
      "A.态势感知",
      "B.阿里绿网",
      "C.云服务器ECS",
      "D.云监控"
    ],
    "answer": "D",
    "explanation": "题目中说需要在管理控制台中展现云产品的监控预警信息，所以需要用到阿里云的云监控。",
    "category": "数据库"
  },
  {
    "id": 91,
    "type": "单选题",
    "title": "使用阿里云弹性伸缩（Auto Scaling）时，创建了伸缩组，指定了“伸缩最小实例数（台）”为5，“伸缩最大实例数（台）”为8，设定了正确的伸缩配置，并添加了伸缩规则为“增加3台ECS实例”，创建了基于该伸缩规则的定时任务（运行时间设置为1小时后）。当前伸缩组中有效的ECS实例个数为3，马上启用该伸缩组，以下说法正确的是<strong>____</strong>？",
    "options": [
      "A.会在定时任务触发时按照伸缩配置自动创建3个ECS实例，添加到伸缩组",
      "B.会在伸缩组启用时，按照伸缩配置自动创建7个ECS实例，添加到伸缩组",
      "C.会在伸缩组启用时，按照伸缩配置自动创建2个ECS实例，添加到伸缩组",
      "D.会在定时任务触发时按照伸缩配置自动创建2个ECS实例，添加到伸缩组"
    ],
    "answer": "C",
    "explanation": "【会在定时任务触发时按照伸缩配置自动创建3个ECS实例】，【会在伸缩组启用时按照伸缩配置自动创建2个ECS实例】，两个选项都是正确的。所以这个是阿里云官方的题目的问题，假如考试遇到这个原题的话直接选择【会在伸缩组启用时按照伸缩配置自动创建2个ECS实例】，然后再举手示意考场老师题目问题。特此确认。防止产生误解。",
    "category": "监控"
  },
  {
    "id": 92,
    "type": "单选题",
    "title": "您的操作系统为Windows的阿里云的云服务器ECS实例，通过远程登录发现黑屏，不可能是<strong>____</strong>原因造成的。",
    "options": [
      "A.CPU资源耗尽",
      "B.内存空间不足",
      "C.系统宕机",
      "D.密码输入错误"
    ],
    "answer": "D",
    "explanation": "云服务器ECS实例黑屏说明是ECS的状态不正常导致的，密码输入错误是不会导致云服务器ECS实例出现异常。",
    "category": "其他"
  },
  {
    "id": 93,
    "type": "单选题",
    "title": "某在线教育网站是基于云服务器ECS+负载均衡SLB+弹性伸缩（Auto Scaling）的方案实现的，在保证系统稳定、客户体验良好的前提下，大大节省了资源成本和运维成本。现在他们想把用户的访问信息（如来源IP、访问页面URL、停留时长等）保存下来进行分析，支持一些市场活动。以下说法中错误的是<strong>____</strong>？",
    "options": [
      "A.伸缩组中的每台ECS实例，均保存各自处理的用户访问信息，这些ECS实例上的数据随时可以访问、分析，这种方案简单高效、稳定可靠，同时节省成本",
      "B.将用户相关的访问信息实时或者准实时的同步到对象存储OSS中，供后续使用",
      "C.将用户相关的访问信息实时或者准实时的保存到云数据库RDS MySQL版中去，后续的查询、分析均通过RDS实现",
      "D.将用户相关的访问信息实时或者准实时的同步到云数据库Memcache版（原OCS）中去，后续通过应用访问OCS，或者按照一定规则将OCS中的数据持久化，然后使用持久化后的数据"
    ],
    "answer": "A",
    "explanation": "因为涉及到多台ECS且将ECS挂载到到了负载均衡的后端，上云最佳实践中，不能在每台ECS中各自保存用户的访问信息，这样会导致之后的请求的数据不同步，最佳的解决方案是将用户的信息保存到统一的云产品（比如云数据库RDS）中，所有的ECS都通过该云产品来调用访问用户信息。",
    "category": "负载均衡"
  },
  {
    "id": 94,
    "type": "单选题",
    "title": "某保险公司的线上平台每天在线订单量超过20万笔，一年来频繁受到大流量攻击（超过10G），使服务断断续续，严重影响了公司的品牌和业务量。如果该客户使用阿里云的<strong>____</strong>产品可以抵御这类攻击，保证业务的高可用性。",
    "options": [
      "A.DDoS高防IP",
      "B.态势感知",
      "C.DDoS基础防护",
      "D.服务器安全托管"
    ],
    "answer": "A",
    "explanation": "DDoS基础防护只能防护5GB以下的DDoS攻击，超过5GB的DDoS攻击需要用到DDoS高防IP。",
    "category": "其他"
  },
  {
    "id": 95,
    "type": "单选题",
    "title": "您希望通过管理控制台进行阿里云的专有网络VPC内的云服务器ECS实例的私网IP地址的修改，但发现操作的菜单不可用，可能是<strong>____</strong>原因引起的。",
    "options": [
      "A.该云服务器ECS实例所在的VPC类型是默认专有网络",
      "B.该云服务器ECS实例没有绑定EIP",
      "C.没有针对该云服务器ECS实例进行停止操作，且该云服务器ECS实例不是停止状态",
      "D.该云服务器ECS实例不是运行状态"
    ],
    "answer": "C",
    "explanation": "修改私网IP需要保证ECS处于已停止的状态，参考链接：<a href=\"https://help.aliyun.com/document_detail/27733.html?spm=5176.11065259.1996646101.searchclickresult.45a35cbfsFVrbb\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/27733.html?spm=5176.11065259.1996646101.searchclickresult.45a35cbfsFVrbb</a>",
    "category": "网络"
  },
  {
    "id": 96,
    "type": "单选题",
    "title": "如果您希望在使用阿里云云服务器ECS时，为了定义更灵活的网络拓扑，并按需选择私网IP地址范围并进行网段的划分，应该使用<strong>____</strong>产品。",
    "options": [
      "A.VPN",
      "B.负载均衡SLB",
      "C.专有网络VPC",
      "D.云服务器ECS"
    ],
    "answer": "C",
    "explanation": "题目中需要实现：网络拓扑，网段划分，所以需要专有网络VPC来实现。",
    "category": "网络"
  },
  {
    "id": 97,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB提供对多台云服务器ECS实例进行流量分发的服务。负载均衡SLB实例和后端提供服务的云服务器ECS实例必须具有相同的<strong>____</strong>。",
    "options": [
      "A.地域（Region）",
      "B.规格配置（CPU、内存等）",
      "C.可用区（Zone）",
      "D.带宽设置"
    ],
    "answer": "A",
    "explanation": "负载均衡SLB实例和云服务器ECS搭配使用的时候，两者必须是在同一个地域。",
    "category": "负载均衡"
  },
  {
    "id": 98,
    "type": "单选题",
    "title": "使用阿里云的负载均衡SLB时，为了实现跨地域（Region）的高可用性，可以在不同的地域（Region）创建多个负载均衡SLB实例，通过<strong>____</strong>的方式对外提供服务。",
    "options": [
      "A.DNS多播",
      "B.DNS最小连接数",
      "C.DNS轮询",
      "D.DNS广播"
    ],
    "answer": "C",
    "explanation": "实现不同地域的多个负载均衡SLB的负载，需要通过DNS轮询来实现，参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/39752.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39752.html</a>",
    "category": "负载均衡"
  },
  {
    "id": 99,
    "type": "单选题",
    "title": "阿里云对象存储OSS是阿里云对外提供的海量、安全、低成本、高可靠 的云存储服务。与自建存储对比，OSS在可靠性、安全、成本和数据处理能力等几个方面都具有优势。以下<strong>____</strong>不是OSS在数据处理能力方面表现出来的优势。",
    "options": [
      "A.提供大规模的数据分析能力",
      "B.提供实时缩放图片的处理功能",
      "C.提供实时的“图片水印”的图片处理功能",
      "D.提供实时的“文字水印”的图片处理功能"
    ],
    "answer": "A",
    "explanation": "对象存储OSS并不具备大规模的数据分析能力。",
    "category": "安全"
  },
  {
    "id": 100,
    "type": "单选题",
    "title": "您在阿里云的某台云服务器ECS实例上运行的服务出现响应缓慢的情况，通过云监控发现目前该ECS实例的带宽利用率已经达到80%以上。在不希望对云服务器ECS实例重启的前提下，可以尝试通过<strong>____</strong>操作来缓解服务响应缓慢的问题。",
    "options": [
      "A.其他三个都不需要",
      "B.升级ECS实例的带宽",
      "C.为ECS实例增加磁盘",
      "D.升级ECS实例的CPU和内存"
    ],
    "answer": "B",
    "explanation": "题目中说了是因为带宽利用率太高，导致了解服务响应缓慢的问题，所以需要通过升级ECS实例的带宽的方式减轻带宽压力。",
    "category": "监控"
  },
  {
    "id": 101,
    "type": "单选题",
    "title": "想要实现同一个阿里云帐号下的不同云服务器ECS实例之间的网络访问控制，可以通过阿里云管理控制台提供的<strong>____</strong>功能实现。",
    "options": [
      "A.云盾",
      "B.安全组",
      "C.绿网",
      "D.防火墙"
    ],
    "answer": "B",
    "explanation": "题目中说不同云服务器ECS实例之间的网络访问控制，注意是网络访问控制，所以需要通过安全组来实现。",
    "category": "网络"
  },
  {
    "id": 102,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB中的证书（Certificate）用于HTTPS协议，在需要使用加密协议时，用户可以将证书上传至负载均衡SLB实例中，在创建HTTPS协议监听时绑定证书，提供HTTPS服务。目前阿里云的负载均衡SLB只支持<strong>____</strong>格式的证书。",
    "options": [
      "A.PEM",
      "B.P7B",
      "C.PFX",
      "D.DER"
    ],
    "answer": "A",
    "explanation": "负载均衡只支持PEM格式的证书。参考链接：<a href=\"https://help.aliyun.com/document_detail/85968.html?spm=a2c4g.11186623.6.598.56dd6327YGkPhK\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/85968.html?spm=a2c4g.11186623.6.598.56dd6327YGkPhK</a>",
    "category": "负载均衡"
  },
  {
    "id": 103,
    "type": "单选题",
    "title": "如果您在创建Linux操作系统的云服务器ECS实例的同时选择增加了数据盘，以下关于系统盘和数据盘的说法中错误的是<strong>____</strong>。",
    "options": [
      "A.云服务器支持对数据盘进行二次分区",
      "B.如果您使用第三方工具对系统盘进行二次分区操作，不会发生什么异常",
      "C.可以根据业务需要，对数据盘进行多分区配置",
      "D.系统需要先格式化数据盘，然后挂载数据盘"
    ],
    "answer": "B",
    "explanation": "使用第三方工具对系统盘进行二次分区操作，可能会导致云服务器ECS出现异常。",
    "category": "其他"
  },
  {
    "id": 104,
    "type": "单选题",
    "title": "当您通过Open API进行阿里云的云服务器ECS实例的磁盘挂载的时候，发现不能成功挂载，可能是由于<strong>____</strong>原因引起的。",
    "options": [
      "A.云服务器ECS实例的状态为已停止",
      "B.云服务器ECS实例的状态为运行中",
      "C.云服务器ECS实例的状态为启动中",
      "D.磁盘的状态为待挂载"
    ],
    "answer": "C",
    "explanation": "只有在稳定（运行中，已停止）状态才能挂载磁盘，其他状态都不行。参考链接：<a href=\"https://help.aliyun.com/document_detail/25446.html?spm=5176.11065259.1996646101.searchclickresult.24c753fcUln2Lm\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25446.html?spm=5176.11065259.1996646101.searchclickresult.24c753fcUln2Lm</a>",
    "category": "其他"
  },
  {
    "id": 105,
    "type": "单选题",
    "title": "用户在阿里云以外的服务器上安装“安骑士客户端”后，通过<strong>____</strong>方式与指定的阿里云官网帐号关联。",
    "options": [
      "A.在管理控制台生成的安装验证key",
      "B.用户帐号ID",
      "C.用户的AccessKey",
      "D.用户名和密码"
    ],
    "answer": "A",
    "explanation": "安装“安骑士客户端”后，需要用在管理控制台生成的安装验证key与指定的阿里云官网帐号关联。参考链接：<a href=\"https://help.aliyun.com/document_detail/28457.html?spm=5176.11065259.1996646101.searchclickresult.175f4e360Grii0\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/28457.html?spm=5176.11065259.1996646101.searchclickresult.175f4e360Grii0</a>",
    "category": "安全"
  },
  {
    "id": 106,
    "type": "单选题",
    "title": "您希望基于已有的磁盘快照在青岛可用区A的云服务器ECS实例创建一个新的块存储磁盘，您可以使用<strong>____</strong>快照创建该磁盘。",
    "options": [
      "A.以上都不行",
      "B.青岛可用区A的某个ECS实例的系统盘快照1",
      "C.北京可用区A的某个ECS实例的数据盘快照",
      "D.香港可用区A的某个ECS实例的数据盘快照"
    ],
    "answer": "A",
    "explanation": "题目中要求的是在ECS上面新挂载一块数据盘，所以可以使用和它同一个可用区的非系统盘快照来创建。所以三个选项都是不符合要求的。系统盘快照，不能用来作为创建新的数据盘。",
    "category": "其他"
  },
  {
    "id": 107,
    "type": "单选题",
    "title": "您需要创建一个新的云服务器ECS实例进行一个10天的临时性的测试时，采用<strong>____</strong>方式去开通云服务器ECS实例是最经济的模式。",
    "options": [
      "A.按量付费",
      "B.包年包月",
      "C.预付费模式",
      "D.其他都不对"
    ],
    "answer": "A",
    "explanation": "临时使用ECS，并不需要长期租赁，所以使用按量付费的模式最经济最合适。",
    "category": "其他"
  },
  {
    "id": 108,
    "type": "单选题",
    "title": "阿里云对象存储OSS是阿里云提供的海量、安全、低成本、高可靠的云存储服务。如果您有一个网站是纯静态页的，或者是对某复杂网站做过动静分离，您可以直接将静态网页通过OSS提供服务，不仅如此，OSS还可以与<strong>____</strong>产品结合起来提供加速服务。",
    "options": [
      "A.内容分发网络CDN",
      "B.云服务器ECS",
      "C.高性能计算 HPC",
      "D.专有网络 VPC"
    ],
    "answer": "A",
    "explanation": "题目是说到了加速服务。所以需要通过内容分发网络CDN来实现。",
    "category": "安全"
  },
  {
    "id": 109,
    "type": "单选题",
    "title": "C公司是一个互联网金融创业企业，自去年下半年开始公司上线的P2P理财项目规模增长了500倍，日参与融资和理财的客户数量超过8万人。一边是业务规模快速增长，一边是用户体验停滞不前。经过架构师团队仔细评审后发现核心问题是APP客户端经常因本地DNS篡改导致连不上服务器，以及敏感的内容不敢用传统CDN分发导致访问速度慢。 C公司可以选择阿里云的<strong>____</strong>产品组合解决这两个问题。",
    "options": [
      "A.阿里云的云解析和内容分发网络CDN",
      "B.阿里云的云解析和对象存储OSS",
      "C.阿里云HTTPDNS和内容分发网络CDN",
      "D.阿里云HTTPDNS和对象存储OSS"
    ],
    "answer": "C",
    "explanation": "HTTPDNS 是面向移动开发者推出的一款域名解析产品，具有域名防劫持、精准调度等特性。主要是用在客户端的时候请求URL防止域名劫持的情况。参考链接：<a href=\"https://help.aliyun.com/document_detail/30102.html?spm=a2c4g.11186623.6.542.6ff85a20JIneW1\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/30102.html?spm=a2c4g.11186623.6.542.6ff85a20JIneW1</a>",
    "category": "CDN"
  },
  {
    "id": 110,
    "type": "单选题",
    "title": "PFX是使用二进制的格式保存的个人证书，一般出现在Windows Server中，现在想把该格式的证书上传到阿里云的负载均衡SLB实例，以下说法正确的是<strong>____</strong>。",
    "options": [
      "A.负载均衡SLB支持PFX格式的证书，可以将其直接上传",
      "B.负载均衡SLB不支持PFX格式的证书，只能先将其转换成P7B格式，再上传",
      "C.负载均衡SLB不支持PFX格式的证书，只能先将其转换成PEM格式，再上传",
      "D.负载均衡SLB不支持PFX格式的证书，只能先将其转换成DER格式，再上传"
    ],
    "answer": "C",
    "explanation": "负载均衡只支持PEM格式的证书。假如是PFX格式或其他部分格式，需要现将其转换成PEM格式再上传。参考链接：<a href=\"https://help.aliyun.com/document_detail/85968.html?spm=a2c4g.11186623.6.598.56dd6327YGkPhK\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/85968.html?spm=a2c4g.11186623.6.598.56dd6327YGkPhK</a>",
    "category": "负载均衡"
  },
  {
    "id": 111,
    "type": "单选题",
    "title": "您基于阿里云的云服务器ECS实例部署了Mysql数据库，随着业务量的不断上涨，您的运维工作不断增加，包括数据库的备份、主备数据库之间的数据同步等问题，可以采用阿里云的<strong>____</strong>产品来快速解决该问题。",
    "options": [
      "A.表格存储",
      "B.云数据库RDS",
      "C.开放搜索服务OpenSearch",
      "D.对象存储OSS"
    ],
    "answer": "B",
    "explanation": "题目中说了因为业务量的上涨导致自部署的Mysql数据库工作量越来越大，所以需要云数据库RDS来快速解决这些问题。",
    "category": "数据库"
  },
  {
    "id": 112,
    "type": "单选题",
    "title": "您通过阿里云的云监控服务为某台云服务器ECS实例的磁盘使用率设置了1条报警规则：统计周期为5分钟，磁盘使用率平均值超过80%，连续探测5次超过阈值后就报警。如果您的磁盘平均使用率超过80%后，至少需要几分钟后可以收到报警<strong>____</strong>？",
    "options": [
      "A.40分钟",
      "B.0分钟",
      "C.20分钟",
      "D.30分钟"
    ],
    "answer": "C",
    "explanation": "连续五次超过阈值就报警，问的是最少的时间。所以可以假设刚启动云监控就开始第一次探测超过阈值。所以后面一共只需要四个探测周期就可以报警了。所以时间为5分钟*4次=20分钟。",
    "category": "监控"
  },
  {
    "id": 113,
    "type": "单选题",
    "title": "阿里云的云盾态势感知能从多个维度监控用户云上资源的安全状况，包括网络层、主机层、数据库层、应用层，甚至还提供安全情报功能，目前态势感知可以通过<strong>____</strong>方式向用户发送报警信息。",
    "options": [
      "A.包括手机短信和电子邮件",
      "B.只有手机短信",
      "C.只有电子邮件",
      "D.包括手机短信、电子邮件和旺旺"
    ],
    "answer": "A",
    "explanation": "目前态势感知（现已改名为云安全中心）的告警设置仅支持：短信、邮件、钉钉机器人、站内信。目前不支持旺旺告警，参考链接：<a href=\"https://help.aliyun.com/document_detail/111648.html?spm=a2c4g.11186623.6.611.6501472eRnjgMn\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/111648.html?spm=a2c4g.11186623.6.611.6501472eRnjgMn</a>",
    "category": "安全"
  },
  {
    "id": 114,
    "type": "单选题",
    "title": "B公司基于阿里云对象存储OSS和云服务器ECS实例构建了一个mp3音乐下载站点，用户在该网站注册后可获得mp3文件的下载链接。 最近一周OSS的公网流量突然增长了一倍，但注册用户数只增加了5%，经仔细分析后发现很多下载请求不是用户从该网站直接下载，而是来自某搜索引擎。您认为该网站采取<strong>____</strong>措施可以快速降低这种风险。",
    "options": [
      "A.增加负载均衡SLB，多一层防护",
      "B.通过OSS Bucket 属性里的“防盗链设置”功能做来源限制",
      "C.将音乐下载站点改成HTTPS访问",
      "D.将音乐文件从OSS搬迁到云服务器ECS实例的数据盘"
    ],
    "answer": "B",
    "explanation": "题目中说了是因为其他非自己的站点的下载导致OSS的公网流量增长，所以需要用到对象存储OSS的防盗链功能来杜绝其他站点的下载。",
    "category": "OSS"
  },
  {
    "id": 115,
    "type": "单选题",
    "title": "SQL注入是一种常见的应用层攻击，一般是通过构建特殊的输入作为参数传入Web应用程序，盗取或破坏应用的数据。请您指出SQL注入攻击最终破坏或盗取的对象是<strong>____</strong>。",
    "options": [
      "A.数据库",
      "B.服务器上的机密文件",
      "C.WEB应用",
      "D.服务器的图片"
    ],
    "answer": "A",
    "explanation": "SQL注入顾名思义攻击者非法操作数据库的数据。",
    "category": "其他"
  },
  {
    "id": 116,
    "type": "单选题",
    "title": "您基于阿里云的云服务器ECS实例部署了Mysql数据库，随着业务量的不断上涨，您自己部署的数据库的服务能力越来越不足，表现在并发连接数不足，磁盘的IOPS不能满足业务需求等，可以采用阿里云的<strong>____</strong>产品来解决这些问题。",
    "options": [
      "A.云数据库RDS",
      "B.对象存储OSS",
      "C.大数据分析ODPS",
      "D.表格存储"
    ],
    "answer": "A",
    "explanation": "题目中说了自己部署的Mysql数据库服务能力不足，所以需要选择云数据库RDS来解决这个问题。",
    "category": "数据库"
  },
  {
    "id": 117,
    "type": "单选题",
    "title": "阿里云对象存储OSS为用户提供保存访问日志记录的功能。Bucket的拥有者可以通过OSS管理控制台，为其所拥有的Bucket开启访问日志记录功能。当一个Bucket A开启访问日志记录功能后，OSS自动将访问这个Bucket的请求日志，以小时为单位，按照固定的命名规则，生成一个Object写入用户指定的Bucket B。以下关于OSS日志记录说法正确的<strong>____</strong>。",
    "options": [
      "A.Bucket A和Bucket B可以属于不同的用户",
      "B.Bucket A和Bucket B可以是同一个Bucket，也可以是不同的Bucket，但必须属于同一个用户",
      "C.Bucket A和Bucket B必须是同一个Bucket",
      "D.Bucket A和Bucket B必须是不同的Bucket"
    ],
    "answer": "B",
    "explanation": "源Bucket和目标Bucket可以是同一个Bucket，也可以是不同的Bucket，但必须属于同一个账号下的同一地域内。您也可以将多个源Bucket的Log都保存在同一个目标Bucket内（建议指定不同的TargetPrefix）。参考链接：<a href=\"https://help.aliyun.com/document_detail/31868.html?spm=5176.87240.400427.35.1f104614aqA0Yf\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/31868.html?spm=5176.87240.400427.35.1f104614aqA0Yf</a>",
    "category": "OSS"
  },
  {
    "id": 118,
    "type": "单选题",
    "title": "某视频公司，使用负载均衡SLB将用户的访问请求分发到30台云服务器ECS实例上去，由这些配置相同的ECS实例来响应用户的请求。每天晚上20:00到次日凌晨2:00期间，业务量会大幅增加，基本上会比其他时间段增加1倍左右，为了能正常响应游戏用户的请求，从成本和容易实现的角度，以下哪种解决办法最可取<strong>____</strong>？",
    "options": [
      "A.使用自定义的镜像，手工创建30台云服务器ECS实例，在每天晚上20:00前，手工增加到SLB中去，次日凌晨2:00再从SLB中移除",
      "B.使用阿里云弹性伸缩（Auto Scaling），通过合适的配置，自动提升每台ECS实例的规格",
      "C.基于自定义的镜像创建30台云服务器ECS实例，添加到SLB中去，通过设置权重，让这些ECS实例在每天晚上20:00到次日凌晨2:00之间可以响应用户需求，其他时间段权重修改为0",
      "D.使用阿里云弹性伸缩（Auto Scaling），通过合适的配置，自动增加ECS实例或者减少ECS实例"
    ],
    "answer": "D",
    "explanation": "题目要求成本和容易的角度，所以是通过动态伸缩更加简单和节省成本。",
    "category": "负载均衡"
  },
  {
    "id": 119,
    "type": "单选题",
    "title": "与传统的软件运行和维护模式相比，云计算要求硬件资源和软件资源能够更好地共享，任何一个企业用户都能够按照自己的需求对SaaS软件进行客户化配置而不影响其他用户的使用。云计算环境中能够满足上述需求的技术是<strong>____</strong>？",
    "options": [
      "A.VPC技术",
      "B.多租户技术",
      "C.计算资源隔离技术",
      "D.CDN技术"
    ],
    "answer": "B",
    "explanation": "简单说就是充分利用计算机资源，将资源共享给多个需要租用的用户，且每个用户之间数据是隔离的。参考链接：<a href=\"https://www.cnblogs.com/pingfan21/p/7478242.html\" target=\"_blank\" rel=\"noopener\">https://www.cnblogs.com/pingfan21/p/7478242.html</a>",
    "category": "其他"
  },
  {
    "id": 120,
    "type": "单选题",
    "title": "开通阿里云对象存储OSS服务后，您首先需要使用OSS管理控制台或OpenAPI创建Bucket来存储文件。创建Bucket时“所属地域”这个属性必须要指定， 特别是您的云服务器ECS实例需要通过内网访问OSS Bucket时，必须选择与 ECS实例相同的地域，以下有关“所属地域”的说法<strong>____</strong>是正确的。",
    "options": [
      "A.Bucket创建后，如果未上传任何文件，则“所属地域”属性可以更改",
      "B.Bucket创建后，要想修改“所属地域”属性，需申请特殊权限",
      "C.Bucket创建后，“所属地域”属性可随时更改",
      "D.Bucket创建后，“所属地域”属性不可更改"
    ],
    "answer": "D",
    "explanation": "云产品创建了以后，地域的不可以改变的，所以Bucket创建后，“所属地域”属性不可更改的。",
    "category": "OSS"
  },
  {
    "id": 121,
    "type": "单选题",
    "title": "以下创建ECS镜像时，<strong>____</strong>步骤的描述有错？",
    "options": [
      "A.输入的自定义镜像描述，不可以为空",
      "B.选择全部快照，可以看到快照的列表",
      "C.输入自定义镜像名称，可以为空",
      "D.登陆阿里云的控制台来创建ECS镜像"
    ],
    "answer": "C",
    "explanation": "您输入自定义镜像名称,不能为空",
    "category": "其他"
  },
  {
    "id": 122,
    "type": "单选题",
    "title": "当阿里云用户想要通过API进行ECS实例删除的操作的时候，必须保证ECS实例状态为<strong>____</strong>，才可以进行删除操作，删除后实例的状态变为<strong>____</strong>？",
    "options": [
      "A.Stopped；Deleted",
      "B.Stopped；Starting",
      "C.Stopping；Deleted",
      "D.Stopping；Starting"
    ],
    "answer": "A",
    "explanation": "删除云服务器ECS必须保证ECS实例状态为已停止 Stopped，删除了以后状态为已删除：Deleted。",
    "category": "其他"
  },
  {
    "id": 123,
    "type": "单选题",
    "title": "下列<strong>____</strong>参数代表的是负载均衡SLB实例的唯一标识？",
    "options": [
      "A.LoadBalancerId",
      "B.RegionId",
      "C.Address",
      "D.LoadBalancerName"
    ],
    "answer": "A",
    "explanation": "负载均衡实例ID即LoadBalancerId是来区分不同负载均衡SLB实例的唯一标识。",
    "category": "负载均衡"
  },
  {
    "id": 124,
    "type": "单选题",
    "title": "在对ECS实例进行续费操作时，无法实现以下<strong>____</strong>操作？",
    "options": [
      "A.增加CPU规格",
      "B.带宽升级",
      "C.增加内存空间",
      "D.无需重启即可享受升级后的配置"
    ],
    "answer": "D",
    "explanation": "ECS升级CPU或内存等配置需要重启才可享受升级后的配置。",
    "category": "其他"
  },
  {
    "id": 125,
    "type": "单选题",
    "title": "下列关于ECS连接实例的说法错误的是<strong>____</strong>？",
    "options": [
      "A.Windows 2008默认允许最多2个session远程连接",
      "B.可以通过两种方式连接和管理用户实例：远程连接客户端和阿里云ECS控制台",
      "C.Linux或Mac OS X环境连接Linux实例，直接使用ssh命令",
      "D.如果用户使用远程连接的工具访问ECS实例，使用公网和私网IP的实例都能被远程连接"
    ],
    "answer": "D",
    "explanation": "用户使用远程连接工具访问ECS实例，只有在ECS开通公网的情况才能访问。只有用户在阿里云的控制台上，才能实现题目中的使用公网和私网IP的实例都能被远程连接。",
    "category": "其他"
  },
  {
    "id": 126,
    "type": "单选题",
    "title": "用户通过ECS管理控制台查看其拥有的某个区域拥有的所有ECS实例的步骤包括<strong>____</strong>：a. 进入ECS管理控制台;b.选择地域；c.选择ECS实例管理，则正确的排列顺序是？",
    "options": [
      "A.b;a;c",
      "B.a;b;c",
      "C.a;c;b",
      "D.c;b;a"
    ],
    "answer": "C",
    "explanation": "正确的操作顺序是，登录进入ECS管理控制台，选择对应的ECS实例管理，最后再选择地域。",
    "category": "其他"
  },
  {
    "id": 127,
    "type": "单选题",
    "title": "如果用户需要创建SLB实例，为了能够真正的实现应用的负载分担，那么要保证至少要有<strong>____</strong>个ECS实例？",
    "options": [
      "A.5个",
      "B.2个",
      "C.3个",
      "D.1个"
    ],
    "answer": "B",
    "explanation": "因为题目中强调了需要真正实现负载的分担，所以至少需要两台ECS配合才能实现。",
    "category": "负载均衡"
  },
  {
    "id": 128,
    "type": "单选题",
    "title": "下列关于RDS内网连接说法错误的是<strong>____</strong>？",
    "options": [
      "A.用户可以在RDS内网和外网间切换",
      "B.RDS实例内外网切换不会影响其他与RDS实例的连接",
      "C.ECS可以使用内网地址连接RDS实例",
      "D.用户可以在RDS管理控制台的实例基本信息中查看当前实例使用的连接方式"
    ],
    "answer": "B",
    "explanation": "RDS实例内外网切换会影响其他与RDS实例的连接。",
    "category": "数据库"
  },
  {
    "id": 129,
    "type": "单选题",
    "title": "在OSS服务中，单个object的大小限制为<strong>____</strong>？",
    "options": [
      "A.24.4TB",
      "B.50TB",
      "C.48.8TB",
      "D.没有容量上限"
    ],
    "answer": "C",
    "explanation": "单个Object的大小限制是48.8T，但是每个Bucket的容量是没有上限的哦。",
    "category": "OSS"
  },
  {
    "id": 130,
    "type": "单选题",
    "title": "下列关于SLB API ServerCertificate的说法错误的是<strong>____</strong>？",
    "options": [
      "A.一次可以上传多份证书",
      "B.证书和PrivateKey一定要对应",
      "C.一次只能上传一个PrivateKey",
      "D.返回结果为成功或者错误码"
    ],
    "answer": "A",
    "explanation": "目前使用UploadServerCertificate接口一次只能上传一份服务器证书和对应的私钥。参考链接：<a href=\"https://help.aliyun.com/document_detail/104125.html?spm=a2c4g.11186623.6.1285.6d946f7dZr67Du\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/104125.html?spm=a2c4g.11186623.6.1285.6d946f7dZr67Du</a>",
    "category": "负载均衡"
  },
  {
    "id": 131,
    "type": "单选题",
    "title": "VPC实例的状态变为<strong>____</strong>之后，表示VPC创建成功，可以进行下一步的管理操作。",
    "options": [
      "A.Standby",
      "B.Running",
      "C.Available",
      "D.Inavailable"
    ],
    "answer": "C",
    "explanation": "VPC没有runing状态，目前只有Pending：配置中和Available：可用两种状态。",
    "category": "网络"
  },
  {
    "id": 132,
    "type": "单选题",
    "title": "关于OSS域名绑定描述正确的是<strong>____</strong>？",
    "options": [
      "A.OSS域名绑定（CNAME）功能目前仅支持OSS以二级域名访问方式进行绑定。",
      "B.OSS域名绑定时的访问方式为（Bucket name）.{zone}.aliyuncs.com",
      "C.以上都不对",
      "D.OSS cname绑定的域名必须经过阿里云备案"
    ],
    "answer": "C",
    "explanation": "OSS域名绑定（CNAME）功能目前仅支持OSS以三级域名访问方式进行绑定。即您的OSS访问方式为（Bucket name）.{region}.aliyuncs.com。OSS cname绑定的域名不是必须经过阿里云备案而是必须经过工信部的备案。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/39614.html?spm=5176.11065259.1996646101.searchclickresult.25bc5b688Dgl4u\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39614.html?spm=5176.11065259.1996646101.searchclickresult.25bc5b688Dgl4u</a>",
    "category": "OSS"
  },
  {
    "id": 133,
    "type": "单选题",
    "title": "SLB LoadBalancer中<strong>____</strong>接口是用来修改SLB实例的计费方式的？",
    "options": [
      "A.ModifyLoadBalancerInternetSpec",
      "B.CreateLoadBalancer",
      "C.SetLoadBalancerStatus",
      "D.SetLoadBalancerName"
    ],
    "answer": "A",
    "explanation": "使用ModifyLoadBalancerInternetSpec修改公网负载均衡实例的计费方式。参考链接：<a href=\"https://help.aliyun.com/document_detail/27578.html?spm=5176.10695662.1996646101.searchclickresult.7960437bKJYEDv\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/27578.html?spm=5176.10695662.1996646101.searchclickresult.7960437bKJYEDv</a>",
    "category": "负载均衡"
  },
  {
    "id": 134,
    "type": "单选题",
    "title": "当ECS处于以下<strong>____</strong>状态时可以挂载磁盘?",
    "options": [
      "A.更换系统中",
      "B.启动中",
      "C.重置中",
      "D.已停止"
    ],
    "answer": "D",
    "explanation": "挂载云盘（磁盘）需要实例状态必须为 运行中（Running）或者 已停止（Stopped），不能为 已锁定（Locked）。参考链接：<a href=\"https://help.aliyun.com/document_detail/25446.html?spm=5176.10695662.1996646101.searchclickresult.6c505e81rYpgQN\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25446.html?spm=5176.10695662.1996646101.searchclickresult.6c505e81rYpgQN</a>",
    "category": "其他"
  },
  {
    "id": 135,
    "type": "单选题",
    "title": "阿里云OSS图片处理服务，绑定域名名需要做线上验证，其中一步是下载验证文件并上传到您域名的<strong>____</strong>下，此步骤为验证您对绑定域名的所有权。",
    "options": [
      "A.有效率",
      "B.根目录",
      "C.顶级目录",
      "D.子目录"
    ],
    "answer": "B",
    "explanation": "线上验证是将下载的验证文件放置于域名的根目录下来完成验证绑定域名的所有权。",
    "category": "OSS"
  },
  {
    "id": 136,
    "type": "单选题",
    "title": "实现VPC中ECS服务器切换/迁移到同VPC下的其他交换机，包括以下几步，请选择正确的顺序<strong>____</strong>：1.打开云服务器管理控制台；2.找到对应的需要切换/迁移的云服务器；3. 选择您所需的交换机，同时指定新交换机下的IP；4. 修改云服务器的私网地址；",
    "options": [
      "A.1，2，3，4",
      "B.1，2，4，3",
      "C.1，3，2，4",
      "D.1，3，4，2"
    ],
    "answer": "C",
    "explanation": "题目问是的如何切换ECS的交换机，正确操作应该是从云服务器管理控制台后选择您所需切换的的交换机，同时指定新交换机下的IP。然后找到对应的需要切换/迁移的云服务器，修改云服务器的私网地址",
    "category": "网络"
  },
  {
    "id": 137,
    "type": "单选题",
    "title": "下列关于SLB说法错误的是<strong>____</strong>？",
    "options": [
      "A.不同操作系统的ECS可以同时做为SLB服务的后端服务器",
      "B.SLB的服务能力与后端ECS的公网宽带规格无关",
      "C.同一组ECS不可以搭建多个网站并同时进行负载均衡",
      "D.在使用SLB的过程中随时调整后端ECS的数目"
    ],
    "answer": "C",
    "explanation": "同一组ECS可以同时搭建多个网站并进行负载均衡。",
    "category": "负载均衡"
  },
  {
    "id": 138,
    "type": "单选题",
    "title": "当用户想以个人身份向OSS发送请求时，需要首先将发送的请求按照OSS指定的格式生成签名字符串；然后使用AccessKeySecret对签名字符串进行加密产生验证码。OSS收到请求以后，会通过AccessKeyID找到对应的AccessKeySecret，以同样的方法提取签名字符串和验证码，如果计算出来的验证码和提供的一样即认为该请求是有效的；否则，OSS将拒绝处理这次请求，并返回HTTP错误状态码是<strong>____</strong>？",
    "options": [
      "A.错误状态码:405",
      "B.错误状态码:400",
      "C.错误状态码:403",
      "D.错误状态码:500"
    ],
    "answer": "C",
    "explanation": "拒绝处理这次请求对应的状态码是：403。",
    "category": "OSS"
  },
  {
    "id": 139,
    "type": "单选题",
    "title": "下列哪种<strong>____</strong>状态表示负载均衡SLB后端服务器的状态表示未开启SLB健康检查？",
    "options": [
      "A.unavailable",
      "B.available",
      "C.abnormal",
      "D.normal"
    ],
    "answer": "A",
    "explanation": "负载均衡SLB后端服务器的状态为unavailable的时候表示其未开启健康检查，参考链接：<a href=\"https://mvp.aliyun.com/zhidao/9043\" target=\"_blank\" rel=\"noopener\">https://mvp.aliyun.com/zhidao/9043</a>",
    "category": "负载均衡"
  },
  {
    "id": 140,
    "type": "单选题",
    "title": "云服务器ECS服务的API服务地址是<strong>____</strong>。",
    "options": [
      "A.ecsapi.aliyuncs.com",
      "B.ecs.aliyunapi.com",
      "C.ecs.aliyuncs.com",
      "D.ecs.aliyun.com"
    ],
    "answer": "C",
    "explanation": "阿里云ECS的API为：ecs.aliyuncs.com，参考链接：<a href=\"https://help.aliyun.com/document_detail/25489.html?spm=a2c4g.11186623.6.1011.78767ad5vLIPZt\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25489.html?spm=a2c4g.11186623.6.1011.78767ad5vLIPZt</a>",
    "category": "其他"
  },
  {
    "id": 141,
    "type": "单选题",
    "title": "在阿里云ECS中，无论每次接口调用请求是否成功，系统都会返回一个唯一识别码（返回参数）<strong>____</strong>给用户？",
    "options": [
      "A.Version",
      "B.AccessKeyId",
      "C.Response",
      "D.RequestId"
    ],
    "answer": "D",
    "explanation": "用户发送的每次接口调用请求，无论成功与否，系统都会返回一个唯一识别码 RequestId 给用户。参考链接：<a href=\"https://www.alibabacloud.com/help/zh/docdetail/45136.htm\" target=\"_blank\" rel=\"noopener\">https://www.alibabacloud.com/help/zh/docdetail/45136.htm</a>",
    "category": "其他"
  },
  {
    "id": 142,
    "type": "单选题",
    "title": "如果ECS实例采用linux系统，关于能否开启NetWorkManager服务说法正确的是<strong>____</strong>？",
    "options": [
      "A.linux系统请不要开启NetWorkManager服务，该服务会跟系统内部网络服务出现冲突，导致网络异常",
      "B.linux系统可以开启NetWorkManager服务",
      "C.以上都不对",
      "D.linux系统请可以开启NetWorkManager服务，但需要进行相应的配置调整"
    ],
    "answer": "A",
    "explanation": "NetworkManager服务来实现网络的配置和管理，NetworkManager服务启动以后可能会导致系统内部的网络配置出现紊乱。",
    "category": "其他"
  },
  {
    "id": 143,
    "type": "单选题",
    "title": "ECS外部系统可以通过API在请求时传入参数来指定返回的数据格式，默认为<strong>____</strong>格式？",
    "options": [
      "A.JSP",
      "B.HTTP",
      "C.JSON",
      "D.XML"
    ],
    "answer": "D",
    "explanation": "API默认返回是XML格式，参考链接：<a href=\"https://help.aliyun.com/document_detail/25490.html?spm=a2c4g.11186623.2.17.7fb24c96WG2Zwe\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25490.html?spm=a2c4g.11186623.2.17.7fb24c96WG2Zwe</a>",
    "category": "其他"
  },
  {
    "id": 144,
    "type": "单选题",
    "title": "用户如果想要在OSS中模拟实现文件夹的创建操作，需要使用的API是<strong>____</strong>？",
    "options": [
      "A.Multipart Upload",
      "B.putObject",
      "C.Get Object",
      "D.Copy Object"
    ],
    "answer": "B",
    "explanation": "OSS中文件夹的概念仅是一个逻辑概念，在通过API/SDK的方式设置文件夹的时候可以指定object对应的key值包括前面的目录即可实现该功能。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/39527.html?spm=5176.11065259.1996646101.searchclickresult.357c5d0fgYB9pV\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39527.html?spm=5176.11065259.1996646101.searchclickresult.357c5d0fgYB9pV</a>",
    "category": "OSS"
  },
  {
    "id": 145,
    "type": "单选题",
    "title": "以下针对ECS地域和可用区的描述不正确的是<strong>____</strong>？",
    "options": [
      "A.同账号下，同一地域不同可用区的ECS实例内网不能互通",
      "B.若购买的ECS需要和阿里其他服务搭配使用，建议选择相同地域",
      "C.一个地域拥有多个可用区",
      "D.在购买了ECS实例后，地域不可更改"
    ],
    "answer": "A",
    "explanation": "同账号下，同一地域ECS实例内网都可以互通。",
    "category": "其他"
  },
  {
    "id": 146,
    "type": "单选题",
    "title": "除了通过PUT Object接口上传文件到OSS以外，OSS还提供了另外一种上传模式是<strong>____</strong>？",
    "options": [
      "A.Get Object",
      "B.Put Bucket",
      "C.Multipart Upload",
      "D.Head Object"
    ],
    "answer": "C",
    "explanation": "除了通过PUT Object接口上传文件到OSS以外，OSS还提供了另外一种上传模式——Multipart Upload。参考链接：<a href=\"https://help.aliyun.com/document_detail/31991.html?spm=a2c4g.11186623.6.1144.1732f816aERrZx\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/31991.html?spm=a2c4g.11186623.6.1144.1732f816aERrZx</a>",
    "category": "OSS"
  },
  {
    "id": 147,
    "type": "单选题",
    "title": "下面<strong>____</strong>不是安骑士包含的功能？",
    "options": [
      "A.木马文件检查",
      "B.异地登录报警",
      "C.高危漏洞修复",
      "D.防WEB应用系统密码破解"
    ],
    "answer": "D",
    "explanation": "防WEB应用系统密码破解是属于Web应用防火墙的功能，是需要收费的服务。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/53966.html?spm=5176.11065259.1996646101.searchclickresult.6d817462Sp2sqx\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/53966.html?spm=5176.11065259.1996646101.searchclickresult.6d817462Sp2sqx</a>",
    "category": "安全"
  },
  {
    "id": 148,
    "type": "单选题",
    "title": "在新建的Linux ECS 实例中，启动 OFBiz 服务的时候，步骤如下：a. # chmod +x ant；b. # cd ofbizrelease12.04；c. # ./ant run； # ./ant start &amp; ；d. # ./ant；# ./ant runinstall。则下列排序正确的是<strong>____</strong>？",
    "options": [
      "A.a；c；b；d",
      "B.a；b；c；d",
      "C.b；a；d；c",
      "D.b；c；d；a"
    ],
    "answer": "C",
    "explanation": "这个仅要求记住即可，具体步骤解释为：1.进入OFBiz文件夹，2.给ant脚本赋予执行权限，3.运行安装脚本，4.启动ant",
    "category": "其他"
  },
  {
    "id": 149,
    "type": "单选题",
    "title": "中国大陆范围内的网站都需要做ICP备案，在架构设计时应该告诉客户提前<strong>____</strong>就需要准备提交备案？",
    "options": [
      "A.网站上线前一天",
      "B.网站上线当天",
      "C.网站上线前一周",
      "D.网站上线前一个月"
    ],
    "answer": "D",
    "explanation": "为了保证网站能按时上线，需要在网站上线前一个月提交备案资料，保证留有充足的备案时间来完成备案操作。",
    "category": "其他"
  },
  {
    "id": 150,
    "type": "单选题",
    "title": "弹性伸缩的伸缩规则指的是<strong>____</strong>。",
    "options": [
      "A.定义了SLB的监听规则",
      "B.定义了具体的扩展或收缩操作",
      "C.定义了组内ECS实例数的最大值、最小值",
      "D.定义了用于弹性伸缩的ECS实例的配置信息"
    ],
    "answer": "B",
    "explanation": "弹性伸缩的伸缩规则定义了具体的扩展或收缩操作，例如加入或移出 N 个 ECS 实例。参考链接：<a href=\"https://help.aliyun.com/document_detail/25858.html?spm=a2c4g.11186623.6.547.12ca4670zL7Ij8\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25858.html?spm=a2c4g.11186623.6.547.12ca4670zL7Ij8</a>",
    "category": "监控"
  },
  {
    "id": 151,
    "type": "单选题",
    "title": "下列哪个阿里提供的操作系统是自带图形化界面的？",
    "options": [
      "A.windows server2008",
      "B.OpenSUSE",
      "C.Ubuntu",
      "D.CentOS"
    ],
    "answer": "A",
    "explanation": "Linux系列的系统大部分是不带图形界面的，windows server目前是默认带图形化界面。",
    "category": "其他"
  },
  {
    "id": 152,
    "type": "单选题",
    "title": "以下对ECS的带宽临时升级操作的描述错误的是<strong>____</strong>？",
    "options": [
      "A.支持在当前生命周期内，设定时间段区间内临时增加带宽",
      "B.可以多次叠加操作，支持随时操作，不受任何操作影响",
      "C.可以按天进行升级，升级后如如云服务器ECS续费，仍然按照原基础带宽进行续费",
      "D.不支持按天升级，升级之后按升级之后的带宽进行续费"
    ],
    "answer": "D",
    "explanation": "ECS的带宽是带宽支持临时升级操作，但是临时升级只能升级到云服务的有效期的结束时间，所以在升级之后仍然按照升级之前的带宽进行续费。",
    "category": "其他"
  },
  {
    "id": 153,
    "type": "单选题",
    "title": "专有网络可以与<strong>____</strong>产品结合使用实现与传统数据中心组成一个按需定制的网络环境，实现应用的平滑迁移上云？",
    "options": [
      "A.SLB",
      "B.VPN",
      "C.ECS",
      "D.OCS"
    ],
    "answer": "B",
    "explanation": "通过VPN专线可以将该网络与传统数据中心组成一个按需定制的网络环境。",
    "category": "网络"
  },
  {
    "id": 154,
    "type": "单选题",
    "title": "在管理控制台，对阿里云CDN加速域名进行“停用”或“删除”前，需要做<strong>____</strong>操作，以确保网站可以正常访问？",
    "options": [
      "A.保证源站服务器的带宽充足就够了",
      "B.不需要做什么",
      "C.保证源站服务器正常开启即可",
      "D.到该域名所在的域名解析服务商处恢复域名A记录"
    ],
    "answer": "D",
    "explanation": "停用CDN加速域名，可以删除解析到此加速域名的记录，并到该域名所在的域名解析服务商处恢复原来域名解析的A记录。",
    "category": "CDN"
  },
  {
    "id": 155,
    "type": "单选题",
    "title": "在OSS API中通过<strong>____</strong>参数的操作可以实现设置object头？",
    "options": [
      "A.Multipart Upload",
      "B.Get Object",
      "C.Get Bucket",
      "D.Copy Object"
    ],
    "answer": "D",
    "explanation": "Copy Object接口可以发送一个Put请求给OSS，并在Put请求Header中添加元素xosscopysource来指定源Object。",
    "category": "OSS"
  },
  {
    "id": 156,
    "type": "单选题",
    "title": "为了防止因本地IP对阿里云服务器频繁访问而被屏蔽的情况，可以通过云盾的<strong>____</strong>功能进行设置？",
    "options": [
      "A.IP白名单",
      "B.webshell云查杀",
      "C.安全网络",
      "D.常用登录地管理"
    ],
    "answer": "A",
    "explanation": "需要屏蔽某个/某段IP频繁非法访问的情况，可以通过云盾的IP白名单来实现。",
    "category": "安全"
  },
  {
    "id": 157,
    "type": "单选题",
    "title": "渗透测试是通过模拟<strong>____</strong>的攻击方法，来评估计算机网络系统安全的一种评估方法.",
    "options": [
      "A.网络专家",
      "B.高并发客户",
      "C.恶意黑客",
      "D.正常客户"
    ],
    "answer": "C",
    "explanation": "渗透测试是通过模拟恶意黑客的攻击方法。",
    "category": "安全"
  },
  {
    "id": 158,
    "type": "单选题",
    "title": "有很多10或100开头的IP在频繁访问我SLB的后端ECS实例，而安全检查没有报告问题，可能的原因是<strong>____</strong>？",
    "options": [
      "A.ECS服务器故障",
      "B.正在遭受网络攻击",
      "C.SLB系统的健康检查和可用性监控",
      "D.真实用户的访问"
    ],
    "answer": "C",
    "explanation": "有10或100开头的IP在频繁访问ECS是因为负载均衡系统除了会通过系统服务器的内网IP将来自外部的访问请求转到后端ECS上之外，还会对ECS进行健康检查（前提是您已经开启了这一功能）和对您的负载均衡服务进行可用性监控，这些访问的来源都是由负载均衡系统发起的。参考链接：<a href=\"https://yq.aliyun.com/ask/58922?spm=a2c4e.11153940.blogcont210105.39.41986e8196JQkz\" target=\"_blank\" rel=\"noopener\">https://yq.aliyun.com/ask/58922?spm=a2c4e.11153940.blogcont210105.39.41986e8196JQkz</a>",
    "category": "安全"
  },
  {
    "id": 159,
    "type": "单选题",
    "title": "在使用阿里云负载均衡SLB的时候，经常会发现有很多100开头的IP（100.x.x.x）在访问负载均衡SLB实例的后端云服务器ECS实例，这可能是<strong>____</strong>引起的？",
    "options": [
      "A.开启了健康检查选项，负载均衡SLB实例对ECS实例进行健康检查引起的",
      "B.是云监控搜集各种统计指标",
      "C.是阿里云飞天系统的Zookeeper守护进程",
      "D.肯定配置了阿里云弹性伸缩（Auto Scaling），这是弹性伸缩的弹性自愈进程在做ECS实例的状态检查"
    ],
    "answer": "A",
    "explanation": "有10或100开头的IP在频繁访问ECS是因为负载均衡系统除了会通过系统服务器的内网IP将来自外部的访问请求转到后端ECS上之外，还会对ECS进行健康检查（前提是您已经开启了这一功能）和对您的负载均衡服务进行可用性监控，这些访问的来源都是由负载均衡系统发起的。参考链接：<a href=\"https://yq.aliyun.com/ask/58922?spm=a2c4e.11153940.blogcont210105.39.41986e8196JQkz\" target=\"_blank\" rel=\"noopener\">https://yq.aliyun.com/ask/58922?spm=a2c4e.11153940.blogcont210105.39.41986e8196JQkz</a>",
    "category": "负载均衡"
  },
  {
    "id": 160,
    "type": "单选题",
    "title": "关于弹性IP说法错误的是<strong>____</strong>。",
    "options": [
      "A.可以单独购买一个弹性公网IP，而不是与其他计算资源或存储资源绑定购买",
      "B.弹性公网IP支持绑在经典网络的ECS实例上",
      "C.弹性公网IP能动态绑定到不同的ECS实例上，绑定和解绑时无需停机",
      "D.弹性公网IP只能绑定在相同Region的VPC类型的云产品实例上"
    ],
    "answer": "B",
    "explanation": "EIP可绑定到专有网络类型的ECS实例、专有网络类型的私网SLB实例和NAT网关上。所以不支持绑定到经典网络的ECS实例上。参考链接：<a href=\"https://help.aliyun.com/document_detail/32321.html?spm=5176.11065259.1996646101.searchclickresult.470a774aDYHQF5\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/32321.html?spm=5176.11065259.1996646101.searchclickresult.470a774aDYHQF5</a>",
    "category": "其他"
  },
  {
    "id": 161,
    "type": "单选题",
    "title": "作为一个互联网初创企业的技术负责人，小A在早期选择了阿里云的云服务器ECS并将Java应用程序、数据库MySQL等部署在了一台云服务器ECS实例上。随着业务发展和用户量增加，发现部署在这台ECS实例上数据库性能出现瓶颈。为了最快速度解决该问题，您建议选择阿里云的<strong>____</strong>产品。",
    "options": [
      "A.对象存储OSS",
      "B.云数据库RDS",
      "C.负载均衡SLB",
      "D.专有云VPC"
    ],
    "answer": "B",
    "explanation": "这台ECS实例上数据库性能出现瓶颈，所以需要选择阿里云的RDS解决性能问题",
    "category": "数据库"
  },
  {
    "id": 162,
    "type": "单选题",
    "title": "阿里云对象存储OSS的一个突出特点就是提供了极高的数据可靠性，谈到可靠性自然离不开备份的技术和策略，以下关于OSS备份的说法，正确的是<strong>____</strong>？",
    "options": [
      "A.OSS提供三重备份（每份数据保留三个副本），出现故障时自动恢复",
      "B.用户需要自己考虑数据的安全性，OSS提供了丰富的备份接口，方便用户将数据进行异地备份",
      "C.OSS提供三重备份（每份数据保留三个副本），出现故障时在人工参与下可快速恢复",
      "D.OSS服务的备份是采用的物理机磁盘的RAID0+1技术方案，两块硬盘同时出现故障也不影响服务"
    ],
    "answer": "A",
    "explanation": "这个是OSS的数据可靠性的描述，OSS默认支持三份副本，通过校验保证三份副本一致，单副本损坏或丢失，会触发拷贝，保持三份。参考链接：<a href=\"https://help.aliyun.com/document_detail/31818.html?spm=a2c4g.11186623.6.543.2637b31cwL2wOb\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/31818.html?spm=a2c4g.11186623.6.543.2637b31cwL2wOb</a>",
    "category": "OSS"
  },
  {
    "id": 163,
    "type": "单选题",
    "title": "防DDoS攻击是阿里云的云盾最主要的功能之一，很多网站都曾经受到过不同类型的DDoS攻击，准确理解DDoS对网站做好安全防护至关重要。以下有关DDoS攻击的描述最准确的是<strong>____</strong>？",
    "options": [
      "A.DDoS攻击通过大量的尝试破解的服务器的登录密码",
      "B.DDoS攻击的目的是窃取机密信息",
      "C.DDoS攻击的主要目标是数据库",
      "D.DDoS攻击的主要目的是让被攻击的目标服务器无法提供正常的服务，是目前最强大、最难防御的网络攻击之一"
    ],
    "answer": "D",
    "explanation": "DDoS攻击并不是尝试破解服务器密码，窃取机密信息或者是破坏数据库。DDoS攻击是一种针对目标系统的恶意网络攻击行为，DDoS攻击经常会导致被攻击者的业务无法正常访问，也就是所谓的拒绝服务。参考链接：<a href=\"https://help.aliyun.com/document_detail/65932.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/65932.html</a>",
    "category": "安全"
  },
  {
    "id": 164,
    "type": "单选题",
    "title": "您的两台阿里云的云服务器ECS实例之间内网不能通信，一定不是由于<strong>____</strong>原因引起的。",
    "options": [
      "A.两台云服务器实例在不同地域",
      "B.其中一台云服务器ECS实例修改过私网IP",
      "C.两台ECS实例在同一个账号下，同一个地域的不同可用区",
      "D.两个云服务器ECS实例在不同的安全组"
    ],
    "answer": "C",
    "explanation": "两台云服务器ECS实例之间内网不能通信，题目中问的一定不是什么原因导致的，所以在同一账号的同一地域是不会导致云服务器ECS实例之间内网不能通信的。",
    "category": "其他"
  },
  {
    "id": 165,
    "type": "单选题",
    "title": "某企业采取阿里云负载均衡SLB和弹性伸缩（Auto Scaling）配合使用的方案，希望在拥有良好的稳定性、可靠性的同时，还能节省运维 成本和资源使用成本。由于此前没有相关的使用经验，他们根据自己的理解列出了一些应该注意的事项，然后向您咨询意见。作为阿里云产品专家，您判断出只有<strong>____</strong>是正确的，在该公司后续的项目建设过程中也逐一得到验证。",
    "options": [
      "A.负载均衡SLB实例下的所有的ECS实例操作系统一定相同",
      "B.负载均衡SLB实例下的所有后端服务器的配置必须相同",
      "C.负载均衡SLB实例必须开启健康检查，否则无法和弹性伸缩一起使用",
      "D.负载均衡SLB实例下的所有后端服务器必须都有相应的伸缩组"
    ],
    "answer": "C",
    "explanation": "假如需要和弹性伸缩ESS配合使用的话，负载均衡SLB下面的ECS必须开启健康检查，否则负载均衡SLB无法监听到后端ECS的状态则无法正常弹性伸缩。SLB下面可以添加多个伸缩组，所以后端ECS可能来自用户手动添加非伸缩的ECS。",
    "category": "负载均衡"
  },
  {
    "id": 166,
    "type": "单选题",
    "title": "您已经在阿里云的一台经典网络类型的没有数据盘的云服务器ECS实例上运行所有的应用，现在出于业务发展的需要，您希望将这台云服务器ECS实例迁移到相同地域的专有网络VPC中去，以下<strong>____</strong>操作是可行的。",
    "options": [
      "A.直接将云服务器ECS实例的类型转换为专有网络",
      "B.制作该云服务器ECS实例的镜像，基于该镜像制作专有网络类型的云服务器ECS实例，业务会短暂停顿",
      "C.将该云服务器ECS实例的安全组变更为专有网络类型",
      "D.无法迁移"
    ],
    "answer": "B",
    "explanation": "题目中需要将经典网络的云服务器ECS实例迁移到相同地域的专有网络VPC中去，虽然目前阿里云支持直接迁移，但是从上云实践的规范中出发，因为云服务器或捆绑或者依赖其他多个附属的云产品（如：数据库RDS等），所以运营一键迁移并不能完成其他附属云产品的转换。所以基于镜像来迁移至专用网络VPC中去是最稳妥的方法。参考链接：<a href=\"https://help.aliyun.com/document_detail/57978.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/57978.html</a>",
    "category": "网络"
  },
  {
    "id": 167,
    "type": "单选题",
    "title": "与专有云相比，公共云天生就暴露在互联网上。共有云在为企业应用带来与生自来的互联网+的特性，同时也带来了来自互联网的安全威胁。由于云计算模式基于网 络提供服务，面向相对开放的环境，在技术上，除了仍然面临传统IT系统在物理、网络、系统等方面的安全问题之外，也面临着一些新的和云计算特征结合紧密的 安全问题。阿里云是通过<strong>____</strong>产品来提供云计算服务的基础安全加固和防护的（比如常见的防DDoS攻击）？",
    "options": [
      "A.云数据库",
      "B.云服务器",
      "C.云监控",
      "D.云盾"
    ],
    "answer": "D",
    "explanation": "题目中问的什么云产品是供云计算服务的基础安全加固和防护的，所以选择云盾平台。",
    "category": "安全"
  },
  {
    "id": 168,
    "type": "单选题",
    "title": "阿里云账号的AccessKey有所有API访问权限。下列关于AccessKeyId和AccessKeySecret说法错误的是<strong>____</strong>。",
    "options": [
      "A.AccessKeySecret是用于加密签名字符串和服务器端验证签名字符串的密钥",
      "B.AccessKeySecret可以通过控制台直接查看而无需做额外验证",
      "C.AccessKeyId和AccessKeySecret是由阿里云官方发给访问者的",
      "D.AccessKeyID 是用于标识访问者的身份"
    ],
    "answer": "B",
    "explanation": "AccessKeySecret并不支持通过控制台直接查看，AccessKeySecret只能一次生成，后续不支持再次查看。如何忘记AccessKeySecret，只能在授权登录后在控制台重新生成。参考链接：<a href=\"https://help.aliyun.com/document_detail/25934.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25934.html</a>",
    "category": "其他"
  },
  {
    "id": 169,
    "type": "单选题",
    "title": "A电商平台近几年业务增长很快，访问量持续保持每年提升300%，平台运营团队因此获得了公司的年度特别奖励。在高兴之余运营团队发现平台系统带宽的支出 是以每年500%的比例增长的，如果能有效降低这块成本可以提升整体的运营质量。此时，该公司选择阿里云的<strong>____</strong>服务，效果会最明显。",
    "options": [
      "A.支持多可用区的云数据库RDS",
      "B.对象存储OSS",
      "C.内容分发网络CDN",
      "D.负载均衡SLB"
    ],
    "answer": "C",
    "explanation": "题目说的就是带宽的问题，每年的带宽增长很快，所以需要CDN来帮他们缓解服务器带宽的压力。",
    "category": "其他"
  },
  {
    "id": 170,
    "type": "单选题",
    "title": "当一个阿里云的云服务器ECS实例无法加入指定的安全组时，可能是<strong>____</strong>原因造成的。",
    "options": [
      "A.云服务器ECS实例创建之后默认已经加入一个安全组，不能再加入其它安全组",
      "B.本云服务器ECS实例目前已经加入的安全组数量达到上限",
      "C.该云服务器ECS实例没有开启公网带宽，所以无法加入安全组",
      "D.该云服务器ECS实例的状态为运行中"
    ],
    "answer": "B",
    "explanation": "每个ECS实例最多可以加入 5 个安全组，当超过5个了以后就无法继续加入其他安全组。",
    "category": "安全"
  },
  {
    "id": 171,
    "type": "单选题",
    "title": "某大型购物商城新上了一套视频监控系统，在商城所在一个5层高的大楼里共安装了35个高清摄像头，用于监控主要的出口通道。该系统的应用部署在一台阿里云的云服务器ECS实例上，该ECS实例上挂了4块2T的数据盘来存储视频数据。上线后一周后发现视频数据的增速过快，预计8T硬盘不出1个月就会用完。 您认为使用阿里云的<strong>____</strong>产品可以最好地解决该客户的存储问题，同时在需要的时候快速读取到历史的视频数据。",
    "options": [
      "A.对象存储OSS",
      "B.归档存储（Archive Storage）",
      "C.内容分发网络CDN",
      "D.多台云服务器ECS"
    ],
    "answer": "A",
    "explanation": "题目中要求需要解决数据增长过快的问题，需要可以通过将视频文件存储到OSS中来解决问题，因为OSS没有空间上限，不需要担心增长过快的问题，同时还可以满足快速读取的要求。（归档存储无法快速读取数据）",
    "category": "监控"
  },
  {
    "id": 172,
    "type": "单选题",
    "title": "阿里云负载均衡SLB中提供了证书上传和管理的服务，在需要进行加密传输时，用户可以将证书上传到负载均衡SLB实例，在创建监听的时候绑定证书。证书是为了支持<strong>____</strong>协议。",
    "options": [
      "A.HTTP",
      "B.HTTPS",
      "C.TCP",
      "D.PPPoE"
    ],
    "answer": "B",
    "explanation": "绑定证书是为了满足加密传输的HTTPS要求。",
    "category": "负载均衡"
  },
  {
    "id": 173,
    "type": "单选题",
    "title": "购买了阿里云的云服务器ECS实例之后，对于您来说需要承担的维护工作是<strong>____</strong>。",
    "options": [
      "A.磁盘设备的维护",
      "B.硬件服务器的维护",
      "C.应用软件的升级",
      "D.网络设备的维护"
    ],
    "answer": "C",
    "explanation": "购买了阿里云的云服务器ECS实例之后，你无需关心硬件和网络的运维工作，你仅需要关心云服务器ECS上应用的部署和",
    "category": "其他"
  },
  {
    "id": 174,
    "type": "单选题",
    "title": "您已经创建好了一块新的块存储，想要通过阿里云的管理控制台进行磁盘挂载到云服务器ECS实例上的操作，却找不到想挂载的云服务器实例，一定不是因为<strong>____</strong>原因引起的。",
    "options": [
      "A.块存储与云服务器ECS实例在同一个可用区",
      "B.云服务器ECS实例已经释放",
      "C.块存储与云服务器ECS实例不在一个可用区",
      "D.块存储与云服务器ECS实例在同一个地域"
    ],
    "answer": "A",
    "explanation": "云盘只能挂载到同一地域下同一可用区内的实例上，不能跨可用区挂载。题目中问的是一定不是因为什么原因，所以在一个可用区不会导致找不到挂载的ECS的情况。",
    "category": "其他"
  },
  {
    "id": 175,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB可以把用户请求分发到多台云服务器ECS实例上去，其中“加权轮询模式”的转发策略是指<strong>____</strong>。",
    "options": [
      "A.将访问请求分发给目前负载最低的后端云服务器ECS实例",
      "B.将等待最久的访问请求分发给后端云服务器池中处理能力最强的ECS实例",
      "C.将访问请求按照后端云服务器ECS实例的权重依次分发",
      "D.将优先级最高的访问请求优先分发给后端云服务器ECS实例"
    ],
    "answer": "C",
    "explanation": "加权轮询：权重值越高的后端服务器，被轮询到的次数（概率）也越高。参考链接：<a href=\"https://help.aliyun.com/document_detail/53858.html?spm=5176.11065259.1996646101.searchclickresult.7c265aae5Bg9yW\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/53858.html?spm=5176.11065259.1996646101.searchclickresult.7c265aae5Bg9yW</a>",
    "category": "负载均衡"
  },
  {
    "id": 176,
    "type": "单选题",
    "title": "阿里云弹性伸缩（Auto Scaling）提供了“弹性自愈”功能，能保持伸缩组中的云服务器ECS实例都处在正常状态，从而使业务始终保持正常的负载，提高系统的稳定性。关于“弹性自愈”，以下说法中正确的是<strong>____</strong>？",
    "options": [
      "A.如果伸缩组中某台ECS实例状态不是运行中，阿里云弹性伸缩首先会自动重启该ECS，重启成功后继续保持在伸缩组中，如果重启失败，则会使用指定的镜像恢复该ECS实例到初始状态，继续保持在伸缩组中",
      "B.如果伸缩组中某台ECS实例状态不是运行中，则该ECS实例会被移出伸缩组，同时自动创建一台新的ECS实例，添加到伸缩组中来",
      "C.如果伸缩组中某台ECS实例的状态不是运行中，阿里云弹性伸缩会启动ECS实例的故障检查与修复进程，对ECS实例进行自动修复",
      "D.如果伸缩组中某台ECS实例状态不是运行中，阿里云弹性伸缩首先会自动重启该ECS，重启成功后继续保持在伸缩组中，如果重启失败，则从伸缩组中移除，同时创建新的ECS实例键入到伸缩组中来"
    ],
    "answer": "B",
    "explanation": "弹性自愈即当检测到某台ECS实例处于不健康状态时。弹性伸缩自动释放不健康ECS实例并创建新的ECS实例，自动添加新ECS实例到负载均衡实例和RDS实例的访问白名单中。参考链接：<a href=\"https://help.aliyun.com/document_detail/ess/productdescription/productdescription.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/ess/productdescription/productdescription.html</a> 最后的介绍。",
    "category": "监控"
  },
  {
    "id": 177,
    "type": "单选题",
    "title": "小张管理的网站选择部署在阿里云的云服务器ECS实例上，最近发现一个现象，网站首页的宣传视频在某些区域播放速度良好，但是在其它地区播放速度很慢。为了解决此问题，你会选择阿里云<strong>____</strong>产品。",
    "options": [
      "A.负载均衡SLB",
      "B.对象存储OSS",
      "C.云数据库RDS",
      "D.内容分发网络CDN"
    ],
    "answer": "D",
    "explanation": "题目中遇到的问题是在某些区域播放良好，但是在其他地区播放较差，所以需要内容分发网络CDN来解决其他地域访问速度慢的问题。",
    "category": "其他"
  },
  {
    "id": 178,
    "type": "单选题",
    "title": "某阿里云公共云用户，购买了一台云服务器ECS实例，部署了tomcat，用<strong><strong>___</strong></strong>方法可以最简单的监控该实例的tomcat的8080端口是否访问正常。",
    "options": [
      "A.购买第三方的监控工具",
      "B.每小时间登录一次云服务器ECS实例，用命令行查看",
      "C.在阿里云的云监控的站点监控中创建探测点，监控该端口的状态",
      "D.自己写脚本探测，然后上报数据到云监控"
    ],
    "answer": "C",
    "explanation": "划重点：最简单的监控，所以最简单直接的方法之间通过云监控去检测这些该端口是否正常。",
    "category": "监控"
  },
  {
    "id": 179,
    "type": "单选题",
    "title": "云计算服务商都支持用户以Web方式自助获得计算资源并对其进行管理。为了提供更好的开发性，云计算平台都支持通过API开放服务，这些API最不可能通过哪个协议进行开放？",
    "options": [
      "A.Restful",
      "B.PPPoE",
      "C.HTTP",
      "D.Web Service"
    ],
    "answer": "B",
    "explanation": "PPPoE是拨号上网相关协议，已经过时了。不可能在API协议中使用。",
    "category": "其他"
  },
  {
    "id": 180,
    "type": "单选题",
    "title": "在一些业务场景下，可以通过购买按量付费的云服务器ECS实例来满足特定时间段内需要更多资源的需求，可以通过设定自动释放时间的方式来保证按量付费的资源按预期释放。下列关于该操作说法准确的是<strong>____</strong>。",
    "options": [
      "A.只能在云服务ECS实例创建的时候进行自动释放时间的设置",
      "B.只能设置一次ECS实例的自动释放时间",
      "C.可以在取消之前重新设置的ECS实例的自动释放时间",
      "D.ECS实例的自动释放时间一旦设置不能取消"
    ],
    "answer": "C",
    "explanation": "自动释放时间可以多次设置，且设置了可以取消之前的设置。",
    "category": "其他"
  },
  {
    "id": 181,
    "type": "单选题",
    "title": "阿里云对象存储OSS中所有数据都在Bucket中，当一个OSS bucket设置成<strong>____</strong>权限，意味着该 OSS Bucket仅允许其他用户来访问 （GET Object）属于该Bucket下的object。",
    "options": [
      "A.私有",
      "B.私有读",
      "C.公共读写",
      "D.公共读"
    ],
    "answer": "D",
    "explanation": "允许其他用户访问就代表允许公共访问此Bucket，所以选择公共读。",
    "category": "OSS"
  },
  {
    "id": 182,
    "type": "单选题",
    "title": "使用阿里云OSS产品实现在线的音视频内容直播时，必须要和阿里云的<strong>____</strong>产品一起配合实现。",
    "options": [
      "A.多媒体转码服务MTS",
      "B.内容分发网络CDN",
      "C.云数据库RDS",
      "D.负载均衡SLB"
    ],
    "answer": "A",
    "explanation": "题目中说到”在线的音视频内容直播”就需要用到多媒体转码服务MTS服务。",
    "category": "OSS"
  },
  {
    "id": 183,
    "type": "单选题",
    "title": "阿里云对象存储OSS是阿里云对外提供的海量、安全、低成本、高可靠的云存储服务。用OSS管理的文件可以很方便地对外提供分享，分享前点击文件后面的“获取地址”文字链接即可得到当前文件的地址，这个分享使用的是<strong>____</strong>应用层（七层）协议。",
    "options": [
      "A.HTTP",
      "B.FTP",
      "C.SMTP",
      "D.TCP"
    ],
    "answer": "A",
    "explanation": "文件的分享地址，是在OSS应用的控台操作的，所以属于HTTP的第七层应用层。",
    "category": "安全"
  },
  {
    "id": 184,
    "type": "单选题",
    "title": "如果您不再需要某个阿里云的按量付费的云服务器ECS实例，可以将其释放。关于按量付费的实例释放的操作中，错误的是<strong>____</strong>。",
    "options": [
      "A.您可以再次设置自动释放的时间并覆盖前一次的设置",
      "B.通过定时释放设置为您的按量付费实例安排释放计划，选择一个未来的时间释放资源",
      "C.不可以随时释放按量付费的实例",
      "D.可以立即释放该按量付费的实例"
    ],
    "answer": "C",
    "explanation": "自动释放时间可以多次设置，且随时可以取消之前的设置，实现随时释放按量付费的实例。",
    "category": "其他"
  },
  {
    "id": 185,
    "type": "单选题",
    "title": "某阿里云负载均衡SLB实例下，后端多台云服务器ECS实例配置的权重都一样，但是实际上ECS实例负载却不一样。可能是因为<strong>____</strong>。",
    "options": [
      "A.ECS实例在不同的地域（Region），网络延迟不同",
      "B.采用的转发规则不同",
      "C.开启了会话保持功能",
      "D.开启了获取真实IP的功能"
    ],
    "answer": "C",
    "explanation": "负载均衡请求不均衡可能有以下几种原因：1. ECS实例请求连接数较少。2. 不同ECS实例的性能不同导致请求不均衡。3. 开启了会话保持功能。4. ECS健康检查异常。5. TCP Keepalive保持长连接。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/66280.html?spm=5176.10695662.1996646101.searchclickresult.7ffb624c9LU4fM\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/66280.html?spm=5176.10695662.1996646101.searchclickresult.7ffb624c9LU4fM</a>",
    "category": "负载均衡"
  },
  {
    "id": 186,
    "type": "单选题",
    "title": "您的阿里云的云服务器ECS实例的系统盘使用的SSD云盘，需要新增数据盘时不能使用<strong>____</strong>磁盘类型。",
    "options": [
      "A.本地SSD盘",
      "B.高效云盘",
      "C.SSD云盘",
      "D.普通云盘"
    ],
    "answer": "A",
    "explanation": "由于本地SSD盘采用服务器本地盘的方式实现，无法实现远程挂载；因此不支持在原来ECS实例上进行添加本地SSD盘，也不支持将存量的普通云盘更换成本地SSD盘。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/40547.html?spm=5176.11065259.1996646101.searchclickresult.1f37104dE5r4ul\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/40547.html?spm=5176.11065259.1996646101.searchclickresult.1f37104dE5r4ul</a>",
    "category": "其他"
  },
  {
    "id": 187,
    "type": "单选题",
    "title": "作为某初创企业的技术负责人，阿明将Java应用程序、图片视频等静态文件都部署在了一台ECS实例上，提供服务。随着业务发展和用户量的增加，发现存储在ECS实例上的静态文件访问速度不能达到预期的要求。您建议选择阿里云的<strong><strong>_</strong></strong>产品可以快速解决静态文件的访问速度问题。",
    "options": [
      "A.云数据库RDS",
      "B.负载均衡SLB",
      "C.对象存储OSS",
      "D.弹性伸缩Auto Scaling"
    ],
    "answer": "C",
    "explanation": "划重点：静态文件访问速度不能达到预期的要求，所以需要把静态文件存储到OSS中加快访问速度。",
    "category": "其他"
  },
  {
    "id": 188,
    "type": "单选题",
    "title": "某O2O网站基于阿里云的云服务器ECS、负载均衡SLB以及弹性伸缩（Auto Scaling）搭建了线上系统，其中ECS用来处理用户响 应，SLB用来分发流量，弹性伸缩负责动态分配资源以满足突发的业务变化，三个产品配合可以提供稳定、便捷、低成本的服务。现在想要增加云数据库RDS到 该架构中来，用来保存用户访问时产生的数据。以下说法中正确的是<strong><strong>_</strong></strong>？",
    "options": [
      "A.可以把RDS实例手工添加到伸缩组，RDS实例可以保存用户访问的数据",
      "B.如果在伸缩组中指定了RDS实例，则弹性伸缩会自动把伸缩组中的ECS实例的IP地址添加到RDS的白名单中去，无需手工设置",
      "C.对RDS实例所在的地域（Region）没有硬性规定，但是建议和弹性伸缩在同一个地域，可以减小网络传输的延迟，提升响应速度",
      "D.可以把RDS实例直接挂在SLB下，由SLB按照转发规则分配任务到RDS实例进行处理"
    ],
    "answer": "B",
    "explanation": "弹性伸缩(Auto Scaling)与 SLB/RDS 紧密集成，可以自动管理SLB后端服务器和RDS白名单，节省操作成本。参考弹性伸缩产品优势链接：<a href=\"https://help.aliyun.com/document_detail/25859.html?spm=a2c4g.11174283.6.543.78b37300eCJbEF\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25859.html?spm=a2c4g.11174283.6.543.78b37300eCJbEF</a>",
    "category": "数据库"
  },
  {
    "id": 189,
    "type": "单选题",
    "title": "使用阿里云的负载均衡SLB实例时，合理的会话保持配置可以实现与某个连接（Session）相关的所有应用请求能够由同一台后端云服务器ECS实例进行处理，维持业务的延续性。四层服务的会话保持是基于<strong>____</strong>实现的。",
    "options": [
      "A.源IP",
      "B.负载均衡IP",
      "C.cookie",
      "D.用户的UUID"
    ],
    "answer": "A",
    "explanation": "四层服务的会话保持是基于源IP实现的，七层服务的会话保持是基于Cookie实现的。",
    "category": "负载均衡"
  },
  {
    "id": 190,
    "type": "单选题",
    "title": "使用阿里云的负载均衡SLB实例时，合理的会话保持配置可以实现与某个连接（Session）相关的所有应用请求能够由同一台后端云服务器ECS实例进行处理，维持业务的延续性。七层服务的会话保持是基于<strong>____</strong>实现的。",
    "options": [
      "A.cookie",
      "B.源IP",
      "C.负载均衡IP",
      "D.用户的UUID"
    ],
    "answer": "A",
    "explanation": "四层服务的会话保持是基于源IP实现的，七层服务的会话保持是基于Cookie实现的。",
    "category": "负载均衡"
  },
  {
    "id": 191,
    "type": "单选题",
    "title": "如果您在非阿里云的服务器上安装了云盾安骑士客户端，通过<strong>____</strong>可以确保在您的管理控制台中能查到此服务器的相关报告。",
    "options": [
      "A.报告无法在阿里云的管理控制台查看",
      "B.通过阿里云官网帐号关联",
      "C.非阿里云服务器不支持安骑士",
      "D.在安装安骑士的过程中需要输入“安装验证key”，通过此Key关联用户的管理控制台"
    ],
    "answer": "D",
    "explanation": "安装“安骑士客户端”后，需要用在管理控制台生成的安装验证key与指定的阿里云官网帐号关联。参考链接：<a href=\"https://help.aliyun.com/document_detail/28457.html?spm=5176.11065259.1996646101.searchclickresult.175f4e360Grii0\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/28457.html?spm=5176.11065259.1996646101.searchclickresult.175f4e360Grii0</a>",
    "category": "安全"
  },
  {
    "id": 192,
    "type": "单选题",
    "title": "阿里云的专有网络VPC可以帮助您基于阿里云的产品构建出一个隔离的网络环境。通过与<strong>____</strong>连接方式结合，可以实现专有网络VPC与传统数据中心组成一个按需定制的网络环境。",
    "options": [
      "A.VPN",
      "B.负载均衡SLB",
      "C.域名解析DNS",
      "D.云监控"
    ],
    "answer": "A",
    "explanation": "通过VPN专线可以将该网络与传统数据中心组成一个按需定制的网络环境。",
    "category": "网络"
  },
  {
    "id": 193,
    "type": "单选题",
    "title": "阿里云的弹性公网IP支持与云服务器ECS实例的动态绑定和解绑。下列关于弹性公网IP说法中错误的是<strong>____</strong>。",
    "options": [
      "A.弹性公网IP只能绑定在同一个地域的特定可用区的VPC类型的云服务器ECS实例上",
      "B.弹性公网IP不能绑定在经典网络的云服务器ECS实例上",
      "C.1个弹性公网IP只能绑定到1个ECS实例上",
      "D.弹性公网IP只能绑定在相同地域的VPC类型的云服务器ECS实例上"
    ],
    "answer": "A",
    "explanation": "题目问的是描述错误的选项，每个弹性公网IP只能绑定到同一地域的一个VPC网络的云产品实例上。不一定要求是在同一个可用区。",
    "category": "其他"
  },
  {
    "id": 194,
    "type": "单选题",
    "title": "您基于阿里云的云服务器ECS实例部署了Mysql数据库，随着业务量的不断上涨，您需要通过读写分离的方式来改善数据库的性能，可以采用阿里云的<strong>____</strong>产品来快速解决该问题。",
    "options": [
      "A.对象存储OSS",
      "B.本读SSD盘",
      "C.云数据库RDS",
      "D.表格存储"
    ],
    "answer": "C",
    "explanation": "题目中是因为在云服务器ECS上部署了MySQL服务，随着业务上涨导致MySQL服务出现性能的问题，所以需要使用云数据库RDS来改善。",
    "category": "数据库"
  },
  {
    "id": 195,
    "type": "单选题",
    "title": "您拥有香港地域可用区A、华北1（青岛）地域可用区B和华南1（深圳）可用区B的云服务器ECS实例，现在希望通过购买新的块存储挂载到已有的云服务器ECS实例上进行磁盘空间的扩容，肯定不能购买<strong>____</strong>可用区的块存储。",
    "options": [
      "A.华北1（青岛）地域可用区A",
      "B.华北1（青岛）地域可用区B",
      "C.香港地域可用区A",
      "D.华南1（深圳）地域可用区B"
    ],
    "answer": "A",
    "explanation": "根据题意，购买新的块存储意味创建新的数据盘，所以只能购买同一个可用区的云盘，所以只能选择：香港地域可用区A，华北1（青岛）地域可用区B和华南1（深圳）可用区B。",
    "category": "其他"
  },
  {
    "id": 196,
    "type": "单选题",
    "title": "您的应用系统中存在大量的非结构化数据，之前采用阿里云的云服务器ECS实例加云数据盘的方式进行存储，随着数据的不断膨胀，维护成本和拥有成本越来愈高。您希望将目前存储在云服务器ECS实例的数据盘上的大量非结构化的数据转存到其他的服务上去，并使用新的服务提供后续的数据存储服务，从而实现更好的节省运维、管理及存储本身的成本，采用<strong>____</strong>方式最为经济高效。",
    "options": [
      "A.将数据转移到表格存储中，提供低成本、高并发、低延时的海量数据存储与在线访问",
      "B.申请OSS bucket，使用闪电立方将磁盘上的数据转移到OSS服务中进行存储",
      "C.在云服务所在的地域申请OSS bucket，使用OssImport将磁盘上的数据转移到OSS服务中进行存储",
      "D.将磁盘数据存储下载到本地数据中心的磁带库中进行存储"
    ],
    "answer": "C",
    "explanation": "闪电立方Lightning Cube（海外叫数据迁移Data Transport）是阿里云为TB乃至PB级数据迁移提供的服务。而题目中说的是：云服务器ECS实例的数据盘上的大量非结构化的数据转存到其他的服务上去。所以使用OSSImport更方便。",
    "category": "其他"
  },
  {
    "id": 197,
    "type": "单选题",
    "title": "您启动了一台新的阿里云的云服务器ECS实例，要求此实例只允许开放80端口的公网访问。可以通过以下哪个操作来实现此要求而不影响其它实例？",
    "options": [
      "A.在该实例所在的默认安全组添加一条公网访问规则仅允许80端口的公网入流量",
      "B.在该实例所在的默认安全组添加一条公网访问规则仅允许80端口的公网出访问，并添加一条公网访问规则不允许所有的公网出流量",
      "C.新建一个安全组，并新增一条安全组规则允许80端口的公网入流量，将该云服务器实例放入该安全组",
      "D.新建一个安全组，并新增一条安全组规则允许80端口的公网入流量，将该云服务器实例放入该安全组，并从原先的默认安全组挪出"
    ],
    "answer": "D",
    "explanation": "题目中要求ECS实例只允许开放80端口的公网访问，所以需要新增安全组规则，允许80端口的公网入方向访问，将实例加入该组为了不影响其他实例，并将其从原先的默认安全组移出。",
    "category": "其他"
  },
  {
    "id": 198,
    "type": "单选题",
    "title": "您在使用阿里云的云服务器ECS实例的过程中，如果进行<strong>____</strong>操作一定不会导致云服务器ECS实例出现异常。",
    "options": [
      "A.修改上层应用的网络协议",
      "B.自行编译系统内核",
      "C.在ECS实例上部署虚拟化程序",
      "D.随意更改系统分区下目录的权限"
    ],
    "answer": "A",
    "explanation": "修改上层应用的网络协议只是修改应用的访问方式，比如将TCP改成HTTP，并不会导致ECS服务器异常。",
    "category": "其他"
  },
  {
    "id": 199,
    "type": "单选题",
    "title": "公网IP可以实现阿里云的云服务器ECS实例与Internet之间互访。下列对于云服务器ECS实例的公网IP描述错误的是<strong>____</strong>。",
    "options": [
      "A.无论您选择何种计费方式，在购买实例的时候，您都需要选择公网的带宽上限",
      "B.手工修改ECS实例的公网IP后，该ECS实例的网络通信会受到影响",
      "C.公网IP可用于不同地域的云服务器之间互访",
      "D.云服务器ECS实例更换系统盘时，公网IP地址也会随之变更"
    ],
    "answer": "D",
    "explanation": "更换系统盘不会导致网络层面的变更，所以公网IP不会变更。",
    "category": "其他"
  },
  {
    "id": 200,
    "type": "单选题",
    "title": "您发现某台阿里云的云服务器ECS实例无法连接到互联网，不可能是<strong>____</strong>原因造成的。",
    "options": [
      "A.您修改了云服务器ECS实例访问公网的安全组策略",
      "B.自行修改过公网IP",
      "C.在云服务器ECS实例中将公网IP对应的网卡关闭了",
      "D.云服务器ECS实例的网口松了"
    ],
    "answer": "D",
    "explanation": "云服务器ECS实例无法连接到互联网不会是因为云服务器ECS的网口连接问题导致的。",
    "category": "其他"
  },
  {
    "id": 201,
    "type": "单选题",
    "title": "您的应用系统部署在阿里云的云服务器ECS实例上，系统每天晚上会进行当天运营数据的报表统计，在凌晨3点钟会出现短暂的统计服务响应变慢的情况，但很快会自动消失，很可能是云服务器ECS实例自身的<strong>____</strong>操作引起的。",
    "options": [
      "A.云服务器ECS实例自动休眠了",
      "B.云服务器ECS实例的自动快照的时间设置在每天凌晨3点",
      "C.云服务器ECS实例的自动镜像服务设置在凌晨3点",
      "D.互联网网络不稳定"
    ],
    "answer": "B",
    "explanation": "设置自动快照创建时间和重复日期时应尽量避开业务高峰，因为创建快照可能会轻微降低磁盘的性能，出现短暂瞬间变慢。参考链接：<a href=\"https://help.aliyun.com/document_detail/25456.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25456.html</a>",
    "category": "其他"
  },
  {
    "id": 202,
    "type": "单选题",
    "title": "作为某初创企业的技术负责人，阿明将Java应用程序、图片视频等静态文件都部署在了一台ECS实例上，提供服务。随着业务发展和用户量的增加，发现存储在ECS实例上的静态文件访问速度不能达到预期的要求。您建议选择阿里云的<strong><strong>_</strong></strong>产品可以快速解决静态文件的访问速度问题。",
    "options": [
      "A.负载均衡SLB",
      "B.云数据库RDS",
      "C.对象存储OSS",
      "D.弹性伸缩Auto Scaling"
    ],
    "answer": "C",
    "explanation": "划重点：静态文件访问速度不能达到预期的要求，所以需要把静态文件存储到OSS中加快访问速度。",
    "category": "其他"
  },
  {
    "id": 203,
    "type": "单选题",
    "title": "您基于阿里云的云服务器ECS实例部署了Mysql数据库，随着业务量的不断上涨，您的运维工作不断增加，包括数据库的备份、主备数据库之间的数据同步等问题，可以采用阿里云的<strong>____</strong>产品来快速解决该问题。",
    "options": [
      "A.开放搜索服务OpenSearch",
      "B.云数据库RDS",
      "C.对象存储OSS",
      "D.表格存储"
    ],
    "answer": "B",
    "explanation": "题目中是因为在云服务器ECS上部署了MySQL服务，随着业务上涨导致MySQL的运维工作繁重，所以需要使用云数据库RDS的功能来快速解决问题。",
    "category": "数据库"
  },
  {
    "id": 204,
    "type": "单选题",
    "title": "某视频公司，使用负载均衡SLB将用户的访问请求分发到30台云服务器ECS实例上去，由这些配置相同的ECS实例来响应用户的请求。每天晚上20:00到次日凌晨2:00期间，业务量会大幅增加，基本上会比其他时间段增加1倍左右，为了能正常响应用户的请求，从成本和容易实现的角度，以下哪种解决办法最可取？",
    "options": [
      "A.使用阿里云弹性伸缩（Auto Scaling），通过合适的配置，自动增加ECS实例或者减少ECS实例",
      "B.使用自定义的镜像，手工创建30台云服务器ECS实例，在每天晚上20:00前，手工增加到SLB中去，次日凌晨2:00再从SLB中移除",
      "C.基于自定义的镜像创建30台云服务器ECS实例，添加到SLB中去，通过设置权重，让这些ECS实例在每天晚上20:00到次日凌晨2:00之间可以响应用户需求，其他时间段权重修改为0",
      "D.使用阿里云弹性伸缩（Auto Scaling），通过合适的配置，自动提升每台ECS实例的规格"
    ],
    "answer": "A",
    "explanation": "题目要求成本和容易的角度，所以是通过动态伸缩更加简单和节省成本。",
    "category": "负载均衡"
  },
  {
    "id": 205,
    "type": "单选题",
    "title": "阿里云弹性伸缩（Auto Scaling）可以通过设置定时任务来定时地增加或减少 ECS 实例,那么如果多个定时任务在同一时间内触发执行同一个伸缩组的伸缩规则,下面关于定时任务执行的说法正确是?",
    "options": [
      "A.会选取最近创建的定时任务执行,排在后面的定时任务会在 LaunchExpirationTime 内自动重试定时触发",
      "B.会选取最早创建的定时任务执行,排在后面的定时任务会在 LaunchExpirationTime 内自动重试定时触发",
      "C.会选取最近创建的定时任务执行,排在后面的定时任务则会取消",
      "D.多个定时任务部分先后将同时执行"
    ],
    "answer": "B",
    "explanation": "如果多个定时任务在相近的时间内触发执行同一个伸缩组的伸缩规则，则最早触发的定时任务会先执行伸缩活动。由于同一个伸缩组同一时刻内只能有一个伸缩活动，排在后面的定时任务会在LaunchExpirationTime内自动重试定时触发。如上一个伸缩活动完成之后，排在后面的定时任务还在LaunchExpirationTime内重试，则执行该定时任务的伸缩规则并触发相应的伸缩活动。<a href=\"https://help.aliyun.com/document_detail/25957.html?spm=5176.11065259.1996646101.searchclickresult.14ad64d8HYwcY7\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25957.html?spm=5176.11065259.1996646101.searchclickresult.14ad64d8HYwcY7</a>",
    "category": "监控"
  },
  {
    "id": 206,
    "type": "单选题",
    "title": "阿里云弹性伸缩(Auto Scaling)是根据用户的业务需求和策略，自动调整其弹性计算资源的管理服务，可以自动调整<strong>____</strong>。",
    "options": [
      "A.云服务器ECS实例的个数",
      "B.云服务器ECS实例的CPU个数",
      "C.云服务器ECS实例的内存大小",
      "D.云服务器ECS实例的带宽"
    ],
    "answer": "A",
    "explanation": "弹性伸缩(Auto Scaling)是横向扩展，扩展的是云服务器ECS实例的个数，云服务器ECS实例的配置是不支持伸缩的。",
    "category": "监控"
  },
  {
    "id": 207,
    "type": "单选题",
    "title": "某视频直播公司采用阿里云弹性伸缩（Auto Scaling）来实现动态添加或者减少云服务器ECS实例，以应对业务量的变化。由于该公司的系统刚上线不久，没有历史数据做参考，同时也不能预估业务量的变化，他们希望通过ECS实例资源的使用情况（比如CPU利用率、系统负载Load等）来弹性伸缩计算资源。他们应该选择以下哪种伸缩模式？",
    "options": [
      "A.动态模式",
      "B.定时模式",
      "C.固定数量模式",
      "D.lazy模式"
    ],
    "answer": "A",
    "explanation": "没有历史数据做参考，即无法确定需要伸缩的ECS的数量，所以选择动态模式最合适。",
    "category": "监控"
  },
  {
    "id": 208,
    "type": "单选题",
    "title": "阿里云对象存储OSS中所有数据都保存在Bucket中，当一个OSS bucket设置成<strong>____</strong>权限，意味着该OSS Bucket仅允许其他用户来访问 （GET Object）属于该Bucket下的object。",
    "options": [
      "A.公共读写",
      "B.公共读",
      "C.私有",
      "D.私有读"
    ],
    "answer": "B",
    "explanation": "允许其他用户访问就代表允许公共访问此Bucket，所以选择公共读。",
    "category": "OSS"
  },
  {
    "id": 209,
    "type": "单选题",
    "title": "阿里云对象存储OSS是阿里云对外提供的海量、安全、低成本、高可靠 的云存储服务。在OSS Bucket中所有元素都是以<strong>_</strong>来存储的。",
    "options": [
      "A.key",
      "B.value",
      "C.object",
      "D.bucket"
    ],
    "answer": "C",
    "explanation": "Bucket中所有元素都是以对象（也可以叫文件、Object）来存储的。参考链接：<a href=\"https://help.aliyun.com/document_detail/31817.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/31817.html</a>",
    "category": "安全"
  },
  {
    "id": 210,
    "type": "单选题",
    "title": "如果阿里云对象存储OSS客户想对访问OSS的IP进行限制，只允许有限的几个IP地址可以下载OSS上的文件，可以通过<strong><strong>___</strong></strong>配置方法实现。",
    "options": [
      "A.直接使用OSS的IP白名单功能",
      "B.OSS本身不提供IP黑白名单，可以先使用CDN加速，然后在CDN上配置IP白名单",
      "C.直接使用OSS的IP黑名单功能",
      "D.OSS本身不提供IP黑白名单，可以在OSS前面部署SLB，然后在SLB上配置IP白名单"
    ],
    "answer": "B",
    "explanation": "OSS服务本身不提供IP黑名单的功能，可以结合内容分发CDN来实现IP黑白名单的功能。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/39555.html?spm=5176.11065259.1996646101.searchclickresult.45fb359epbxdYi\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39555.html?spm=5176.11065259.1996646101.searchclickresult.45fb359epbxdYi</a>",
    "category": "OSS"
  },
  {
    "id": 211,
    "type": "单选题",
    "title": "开通阿里云对象存储OSS服务后，您首先需要使用OSS管理控制台或OpenAPI创建存储空间Bucket以用来存储文件，以下有关Bucket的说法<strong><strong>_</strong></strong>是正确的。",
    "options": [
      "A.Bucket的名称要求全局唯一，且创建后不支持更改",
      "B.Bucket的名称要求全局唯一，创建后支持更改",
      "C.Bucket的名称只要求在本帐号内唯一，创建后支持更改",
      "D.Bucket的名称要求在本帐号内唯一，且创建后不支持更改"
    ],
    "answer": "A",
    "explanation": "每个Bucket存储空间的名字全局唯一，Bucket存储空间一旦创建成功，名称和所处地域不能修改。参考链接：<a href=\"https://help.aliyun.com/document_detail/31842.html?spm=5176.11826750.0.0.7800uMGguMGg8H#%E5%88%9B%E5%BB%BA%E5%AD%98%E5%82%A8%E7%A9%BA%E9%97%B4\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/31842.html?spm=5176.11826750.0.0.7800uMGguMGg8H#%E5%88%9B%E5%BB%BA%E5%AD%98%E5%82%A8%E7%A9%BA%E9%97%B4</a>",
    "category": "OSS"
  },
  {
    "id": 212,
    "type": "单选题",
    "title": "在使用阿里云的负载均衡SLB实例时，可以对后端云服务器ECS实例配置不同的权重，权重越大的ECS实例，会被分到越多的负载。某个SLB实例的后端服务器池中有5个ECS实例，都处在健康状态，其中一台实例ecs_inst1权重被设置成了100，以下说法中正确的是<strong>____</strong>。",
    "options": [
      "A.由于不确定其他4台ECS实例的权重配置，所以无法判断ecs_inst1会被分到多大比例的负载",
      "B.100%的负载都会被分发到ecs_inst1上去，其余4台ECS实例会处于空闲状态",
      "C.根据SLB的工作原理，ecs_inst1将会被分到大约20%左右的负载",
      "D.根据外部请求中的请求级别参数判断，所有请求级别参数为100的，都会被转发至ecs_inst1"
    ],
    "answer": "A",
    "explanation": "因为只有一台配置了100的权重，并不知道其他4台ECS的具体权重配置（并不是说一台设置了100的权重，其他的权重都必须0，其他ECS也是同样可以设置为100的权重，这样和这一台的权重是相同的，被分发的请求量也是相同的），所以所以无法判断ecs_inst1会被分到多大比例的负载。",
    "category": "负载均衡"
  },
  {
    "id": 213,
    "type": "单选题",
    "title": "某在线考试网站提供在线的认证考试服务，用户登录网站后，需要在120分钟时间内完成答卷。该网站使用了阿里云的云服务器ECS以及负载均衡SLB实现，上述场景中，如果要保持120分钟之内用户和服务器之间的连接不间断，可以通过负载均衡SLB的<strong>____</strong>功能实现。",
    "options": [
      "A.会话保持",
      "B.加权轮询",
      "C.弹性自愈",
      "D.会话同步"
    ],
    "answer": "A",
    "explanation": "划重点：保持120分钟之内用户和服务器之间的连接不间断。所以选择会话保持。",
    "category": "负载均衡"
  },
  {
    "id": 214,
    "type": "单选题",
    "title": "负载均衡通过设置虚拟服务地址，将添加的ECS实例虚拟成一个高性能、高可用的应用服务池，并根据转发规则，将来自客户端的请求分发给云服务器池中的ECS实例。下列关于SLB转发规则说法错误的是？",
    "options": [
      "A.SLB支持“轮询模式”转发规则",
      "B.SLB支持“最小连接数模式“转发规则",
      "C.SLB四层流量走默认路由",
      "D.一般情况下，默认路由在有内网的情况下，先走内网，无内网再走外网"
    ],
    "answer": "D",
    "explanation": "一般情况下默认路由在有外网情况下会先走外网网卡,如无外网则走内网网卡。",
    "category": "负载均衡"
  },
  {
    "id": 215,
    "type": "单选题",
    "title": "使用阿里云的负载均衡SLB实例时，可以通过健康检查来判断后端云服务器ECS实例上的可用性。针对7层服务，负载均衡SLB实例的健康检查机制为：默认由负载均衡SLB实例向后端云服务器ECS实例的内网IP地址的应用服务器配置的缺省首页发起<strong>____</strong>请求，如果返回“200 OK”，将认为后端云服务器ECS实例运行正常，否则视为运行异常。",
    "options": [
      "A.http",
      "B.ssh",
      "C.telnet",
      "D.ICMP"
    ],
    "answer": "A",
    "explanation": "7层服务的监控检查机制为由负载均衡SLB实例向后端云服务器ECS实例的内网IP地址的应用服务器配置的缺省首页发起HTTP请求，然后判断请求的返回码来进行健康检查操作，参考链接：<a href=\"https://help.aliyun.com/document_detail/98226.html?spm=5176.10695662.1996646101.searchclickresult.122a4e64H34gSM\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/98226.html?spm=5176.10695662.1996646101.searchclickresult.122a4e64H34gSM</a>",
    "category": "负载均衡"
  },
  {
    "id": 216,
    "type": "单选题",
    "title": "阿里云提供公网和私网两种类型的负载均衡服务。下列关于SLB实例属性配置说法错误的是？",
    "options": [
      "A.如果用户不指定一个容易识别的SLB名称，则系统会自行分配一个名称",
      "B.LoadBalancerId是用于识别用户SLB实例的唯一标识",
      "C.系统自动选择公网或者私网访问",
      "D.不同类型的SLB，系统会分配不同的服务地址给用户"
    ],
    "answer": "C",
    "explanation": "负载均衡SLB中的公网或者私网访问的选择是由用户在购买时候的选择，并不是系统自动选择。",
    "category": "负载均衡"
  },
  {
    "id": 217,
    "type": "单选题",
    "title": "在阿里云的负载均衡SLB的管理控制台中，可以根据一些监控的统计指标来设置报警信息，常见的如流量、数据包、连接数等，设置报警阈值，一旦触发了报警条件，就会通过多种方式进行报警。目前还不支持<strong>____</strong>的报警方式。",
    "options": [
      "A.电话报警",
      "B.邮件报警",
      "C.短信报警",
      "D.旺旺报警"
    ],
    "answer": "A",
    "explanation": "阿里云的负载均衡SLB的监控报警目前还不支持电话报警。开通负载均衡的云监控服务后，您可以在云监控控制台配置监控报警规则。云监控支持“短信”、“邮件”、“旺旺” 三种报警方式，暂不支持电话报警。参考链接：<a href=\"https://help.aliyun.com/document_detail/32470.html?spm=5176.11065259.1996646101.searchclickresult.42a64e4dIBKutX\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/32470.html?spm=5176.11065259.1996646101.searchclickresult.42a64e4dIBKutX</a>",
    "category": "负载均衡"
  },
  {
    "id": 218,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB可以通过流量分发扩展应用系统对外的服务能力，通过消除单点故障提升应用系统的可用性。以下关于负载均衡SLB特点的说法中错误的是<strong>____</strong>。",
    "options": [
      "A.跨地域容灾：支持同一个负载均衡SLB实例分流负载到跨多个地域（Region）的云服务器ECS实例，可用性更高",
      "B.扩展性：支持删除和添加后端云服务器，实现无缝伸缩",
      "C.安全：结合阿里云的安全产品提供多种安全防护，使应用更加安全可靠",
      "D.成本：和传统硬件负载均衡器相比，成本大幅下降"
    ],
    "answer": "A",
    "explanation": "同一个负载均衡只支持跨可用区容灾，不支持跨地域容灾。",
    "category": "负载均衡"
  },
  {
    "id": 219,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB对应的后端服务器池中包含多台云服务器ECS实例时，若ECS实例对外服务能力不同，为了更充分的利用ECS实例的处理能力，以下说法中正确的是<strong>____</strong>。",
    "options": [
      "A.给处理能力强的ECS实例配置更高的权重，权重越高意味着将有机会被分配到更多的访问请求",
      "B.按照轮询的模式分发任务，能力强的ECS实例一定能分配到更多的请求",
      "C.按照最小连接数的模式分发任务，能力强的ECS实例一定能分配到更多的请求",
      "D.负载均衡SLB的目的就是为了平衡后台ECS实例间的负载，无法让某些ECS实例分配到更多的请求"
    ],
    "answer": "A",
    "explanation": "通过设置轮询权重，能力强的设置比较高的权重从而获得更多的请求来处理。",
    "category": "负载均衡"
  },
  {
    "id": 220,
    "type": "单选题",
    "title": "假设网络管理员需要随时随地通过公网对阿里云专有网络VPC下的多台云服务器ECS实例进行管理，通过<strong>____</strong>方式可以既安全又低成本的实现。",
    "options": [
      "A.修改VPC的安全组策略，允许公网的访问",
      "B.其他答案都不对",
      "C.为每一台云服务器ECS实例绑定一个EIP，登录各个云服务器ECS实例进行管理",
      "D.在VPC内选择一台云服务器ECS实例作为堡垒机，申请一个EIP绑定到该ECS实例，通过该堡垒机进行其他云服务器ECS实例的管理"
    ],
    "answer": "D",
    "explanation": "为某台ECS申请了EIP，则可以通过公网访问这台ECS，然后通过这台ECS管理VPC内的其他ECS实例。",
    "category": "安全"
  },
  {
    "id": 221,
    "type": "单选题",
    "title": "您希望通过管理控制台进行阿里云的专有网络VPC内的云服务器ECS实例的私网IP地址的修改，但发现操作的菜单不可用，是<strong>____</strong>原因引起的。",
    "options": [
      "A.该云服务器ECS实例没有绑定EIP",
      "B.该云服务器ECS实例所在的VPC类型是默认专有网络",
      "C.该云服务器ECS实例不是运行状态",
      "D.没有针对该云服务器ECS实例进行停止操作，且该云服务器ECS实例不是停止状态"
    ],
    "answer": "D",
    "explanation": "修改云服务器ECS的私网IP地址需要云服务器ECS处于停止的状态，所以是”没有针对该云服务器ECS实例进行停止操作，且该云服务器ECS实例不是停止状态”的原因造成的。参考链接：<a href=\"https://help.aliyun.com/document_detail/27733.html?spm=5176.11065259.1996646101.searchclickresult.64dd5cbfrVAGlk\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/27733.html?spm=5176.11065259.1996646101.searchclickresult.64dd5cbfrVAGlk</a>",
    "category": "网络"
  },
  {
    "id": 222,
    "type": "单选题",
    "title": "阿里云的安骑士是云盾提供的用来保护服务器的产品，以下<strong>____</strong>不属于安骑士的功能。",
    "options": [
      "A.木马文件检查",
      "B.防WEB应用系统的密码破解",
      "C.异地登录报警",
      "D.防操作系统密码暴力破解"
    ],
    "answer": "B",
    "explanation": "防WEB应用系统的密码破解不属于安骑士的功能，而是属于Web应用防火墙的功能。参考链接：<a href=\"https://help.aliyun.com/document_detail/31770.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/31770.html</a>",
    "category": "安全"
  },
  {
    "id": 223,
    "type": "单选题",
    "title": "阿里云的云盾加密服务通过在阿里云上使用经国家密码管理局检测认证的硬件密码机，帮助用户满足数据安全方面的监管合规要求，保护云上业务数据的隐私性和机密性。云盾加密服务的密钥由<strong><strong>___</strong></strong>负责保管。",
    "options": [
      "A.阿里云的系统管理员",
      "B.客户",
      "C.客户和阿里云的系统管理员",
      "D.阿里云的第三方合作伙伴"
    ],
    "answer": "B",
    "explanation": "客户通过VPN或专线接入VPC，使用USB Key对加密服务实例进行初始化并管理密钥。",
    "category": "安全"
  },
  {
    "id": 224,
    "type": "单选题",
    "title": "在服务器上手动安装阿里云的云盾客户端安骑士时需要<strong><strong>___</strong></strong>权限。",
    "options": [
      "A.系统管理员权限",
      "B.系统普通用户权限",
      "C.FTP服务权限",
      "D.数据库权限"
    ],
    "answer": "A",
    "explanation": "在服务器上手动安装安骑士时需要管理员权限。参考链接：<a href=\"https://help.aliyun.com/document_detail/28457.html?spm=a2c4g.11186623.6.560.543a4d95o6kLR2\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/28457.html?spm=a2c4g.11186623.6.560.543a4d95o6kLR2</a>",
    "category": "安全"
  },
  {
    "id": 225,
    "type": "单选题",
    "title": "阿里云的云监控（CloudMonitor） 是一项针对阿里云资源和互联网应用进行监控的服务。下列关于云监控的说法准确的是？",
    "options": [
      "A.需要单独购买并付费，才可以开通",
      "B.不能通过管理控制台使用云监控服务",
      "C.支持监控未部署在阿里云产品上的网站",
      "D.不支持监控未部署在阿里云产品上的网站"
    ],
    "answer": "C",
    "explanation": "无论您的服务器是阿里云服务器 ECS，还是其他云厂商的服务器或物理机，都可以使用主机监控服务。参考链接：<a href=\"https://help.aliyun.com/document_detail/43503.html?spm=a2c4g.11186623.6.565.47491b29irCwKS\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/43503.html?spm=a2c4g.11186623.6.565.47491b29irCwKS</a>",
    "category": "监控"
  },
  {
    "id": 226,
    "type": "单选题",
    "title": "某企业托管到传统IDC机房的服务器（包括windows和Linux两种操作系统），每天晚上有来自很多国家的IP地址对其管理密码进行尝试破解。为此管理员小王很是担心，因为工作需要，远程管理端口必须对公网开放。小王听说阿里云的云盾可以帮助客户提升安全防护的能力，想把系统迁到阿里云上。在阿里云上开通<strong><strong>_</strong></strong>功能可以减少密码被暴力破解的可能。",
    "options": [
      "A.阿里绿网",
      "B.安骑士",
      "C.DDoS基础防护",
      "D.态势感知"
    ],
    "answer": "B",
    "explanation": "题目中问的是防止密码破解，这个是安骑士的功能点。",
    "category": "安全"
  },
  {
    "id": 227,
    "type": "单选题",
    "title": "D公司在线视频业务全国排名前五，整个业务系统全部建设在阿里云之上，使用的云产品有云服务器ECS、对象存储OSS、内容分发网络CDN。 最近发现有黑客恶意下载公司的正版视频，在国外社区里分发。 假设你是D公司的系统管理员，从技术上可以如何解决这个问题？",
    "options": [
      "A.启用阿里云CDN的IP黑名单功能",
      "B.启用阿里云CDN的URL鉴权功能",
      "C.启用阿里云OSS的Refer黑名单功能",
      "D.启用云服务顺的安全组功能"
    ],
    "answer": "B",
    "explanation": "划重点：公司使用了CDN，黑客恶意下载公司的正版视频。所以需要对CDN的访问进行保护，但是题目中并不知道黑客的具体IP或者某一段IP，知道具体IP的话可以直接把具体IP或者这段IP加入黑名单，所以只能需要采用CDN的URL鉴权功能防止在社区在分发的问题。",
    "category": "CDN"
  },
  {
    "id": 228,
    "type": "单选题",
    "title": "阿里云内容分发网络CDN和传统厂商的CDN相比具有稳定快速、节约成本和简单易用三个特点。以下关于阿里云CDN稳定快速特点的描述错误的是<strong>____</strong>。",
    "options": [
      "A.先进的分布式系统架构，在国内、外均有数百个缓存节点，且节点数在不断增加",
      "B.充足的带宽和存储资源",
      "C.CDN的全部缓存节点都采用BGP线路",
      "D.完善的监控体系和服务体系",
      "E.稳定高效的性能指标：95%以上的命中率，毫秒级响应时间"
    ],
    "answer": "C",
    "explanation": "CDN的全部缓存节点并没有采用BGP线路，BGP线路主要为OSS，和DDoS高防IP提供服务，实现不同运营商的网站都可以快速访问。CDN则是有充足的带宽和存储资源。",
    "category": "CDN"
  },
  {
    "id": 229,
    "type": "单选题",
    "title": "某公司很多系统都架构在阿里云上，使用了多个阿里云弹性伸缩（Auto Scaling）的伸缩组来实现动态资源管理。现有一台包年包月的云服务器ECS实例还未到期，且处于闲置状态，出于避免资源浪费的考虑，想把它更好的利用起来。以下说法中正确的是？",
    "options": [
      "A.可以把它手工添加到同一个地域（Region）的任意一个伸缩组中去",
      "B.如果该ECS的处理能力很强的话，可以加入到同一个可用区（Zone）的多个伸缩组中去，前提是要部署多个应用处理的环境",
      "C.只能把加到同一个可用区（Zone）的某一个伸缩组中去，前提是它的规格要符合该伸缩组伸缩配置规定的规格",
      "D.只能把加到同一个地域（Region）的某一个伸缩组中去，前提是它的规格要符合该伸缩组伸缩配置规定的规格"
    ],
    "answer": "A",
    "explanation": "弹性伸缩是有地域的限制，手动添加的ECS必须与伸缩组处于同一个地域。但是不需要要求ECS符合该伸缩组伸缩配置规定的规格。参考链接：<a href=\"https://help.aliyun.com/document_detail/25901.html?spm=5176.10695662.1996646101.searchclickresult.46c7e2a9i5RqOL\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25901.html?spm=5176.10695662.1996646101.searchclickresult.46c7e2a9i5RqOL</a>",
    "category": "监控"
  },
  {
    "id": 230,
    "type": "单选题",
    "title": "您部署在阿里云云服务器ECS上的服务，希望能够通过阿里云的产品来提升该服务的可用性，以下哪种方案的可用性最高？",
    "options": [
      "A.在同一个地域的多个可用区的多台云服务器上部署应用，并挂载在同一个负载均衡实例后面",
      "B.在同一个地域的同一个可用区的多台云服务器上部署应用，并挂载在同一个负载均衡实例后面",
      "C.在不同地域的多个可用区的多台云服务器上部署应用，并挂载在同一个负载均衡实例后面",
      "D.在不同地域的同一个可用区的多台云服务器上部署应用，并挂载在同一个负载均衡实例后面"
    ],
    "answer": "A",
    "explanation": "手动添加的ECS只能添加到和其同一地域的伸缩组中去，手动添加的 ECS 实例配置与当前伸缩配置没有关联。即对手动添加的ECS没有任何特别的要求。。参考链接：<a href=\"https://help.aliyun.com/document_detail/25901.html?spm=5176.11065259.1996646101.searchclickresult.29e7210cJXOcUz\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25901.html?spm=5176.11065259.1996646101.searchclickresult.29e7210cJXOcUz</a>",
    "category": "其他"
  },
  {
    "id": 231,
    "type": "单选题",
    "title": "阿里云的云服务器ECS产品的应用非常广泛，既可以单独的作为Web服务器，也可以与其他阿里云产品配合提供多媒体解决方案。在多媒体、大流量的APP或网站应用场景下，云服务器ECS实例与阿里云的<strong>____</strong>产品，可以实现在业务量增长时自动增加ECS实例，并在业务量下降时自动减少ECS实例，保证满足访问量达到峰值时对资源的要求，同时降低了系统资源的拥有成本。",
    "options": [
      "A.对象存储OSS",
      "B.内容分发网络CDN",
      "C.弹性伸缩Auto Scaling",
      "D.云监控"
    ],
    "answer": "C",
    "explanation": "题目中说：”业务量增长时自动增加ECS实例，并在业务量下降时自动减少ECS实例”，顾名思义是弹性伸缩Auto Scaling。",
    "category": "其他"
  },
  {
    "id": 232,
    "type": "单选题",
    "title": "阿里云的云服务器ECS相对于传统物理服务器的一个重要特征是，可以更为便捷的进行服务器的配置升级。下列关于云服务器ECS无缝升级的说法错误的是<strong>____</strong>。",
    "options": [
      "A.云服务器ECS支持变更CPU、内存和宽带升级",
      "B.云服务器ECS不支持新增数据盘",
      "C.升级带宽不需要云服务器ECS进行重启",
      "D.云服务器ECS的配置升级时，用户不需要重新部署环境或者迁移数据"
    ],
    "answer": "B",
    "explanation": "云服务器ECS支持变更配置和新增数据盘，变更配置需要重新服务但不会影响到服务器数据。",
    "category": "其他"
  },
  {
    "id": 233,
    "type": "单选题",
    "title": "某视频公司的服务部署在阿里云的云服务器ECS上，春晚或每周五热门节目来临时，如临大敌，又不想长期采购大量的云服务器ECS实例提供服务，可以采用阿里云提供的<strong>____</strong>产品来低成本地解决这个问题。",
    "options": [
      "A.弹性伸缩Auto Scaling",
      "B.表格存储",
      "C.专有网络VPC",
      "D.对象存储OSS"
    ],
    "answer": "A",
    "explanation": "题目中要求需要解决，春晚或每周五服务器压力比较大的问题，但是又不想长期采购云服务器ECS，所以可以通过弹性伸缩来解决上述问题。",
    "category": "其他"
  },
  {
    "id": 234,
    "type": "单选题",
    "title": "随着业务的增长，您现有的阿里云的云服务器ECS实例的系统盘出现了存储资源不足的问题，阿里云提供了系统盘扩容的功能帮您解决该问题。下列关于扩容系统盘的操作说法错误的是<strong>____</strong>。",
    "options": [
      "A.通过更换ECS实例的系统盘操作来实现系统盘的扩容",
      "B.扩容ECS实例的系统盘时需要停止您的实例，因此会短暂中断您的业务",
      "C.扩容系统盘之后您的ECS实例的IP地址会发生变化",
      "D.扩容系统盘后，用户创建的快照会保留"
    ],
    "answer": "C",
    "explanation": "]扩容系统盘并不是导致网络层的IP地址会发生变化。",
    "category": "其他"
  },
  {
    "id": 235,
    "type": "单选题",
    "title": "某新媒体公司通过手机APP提供新闻资讯服务，采用阿里云弹性伸缩（Auto Scaling）来实现动态添加或者减少云服务器ECS实例，来应对业务量的变化。该公司的业务人员和技术人员相互配合，估算出他们所需要的资源为闲时10台ECS，但是有几个时间段业务量会比较多，基本上集中在7:30到9:00，18:30到20:00，随着时间点的不同，所需的ECS实例在10到20个之间动态变化。他们在伸缩组中将最小实例个数设置为10，最大实例个数设置为20。从容易部署以及节省成本的角度来考虑，他们还需要配置一个什么模式的任务？",
    "options": [
      "A.动态模式",
      "B.定时模式",
      "C.固定数量模式",
      "D.lazy模式"
    ],
    "answer": "A",
    "explanation": "题目中说了，ECS在这段时间内是动态变化的，以及要从节省成本的角度出发，定时任务一下子从10台增加到20台，这样虽然满足业务要求但是成本增加了，所以选择动态任务既可以满足要求还可以根据需求适当扩展ECS减少成本。",
    "category": "监控"
  },
  {
    "id": 236,
    "type": "单选题",
    "title": "某视频直播公司采用阿里云弹性伸缩（Auto Scaling）来实现动态添加或者减少云服务器ECS实例，以应对业务量的变化。由于该公司的系统刚上线不久，没有历史数据做参考，同时也不能预估业务量的变化，他们希望通过ECS实例资源的使用情况（比如CPU利用率、系统负载Load等）来弹性伸缩计算资源。他们应该选择以下哪种伸缩模式？",
    "options": [
      "A.动态模式",
      "B.定时模式",
      "C.固定数量模式",
      "D.lazy模式"
    ],
    "answer": "A",
    "explanation": "因为题目中的场次是弹性伸缩且没有任何历史数据作为参考，所以本题是动态模式最合适。",
    "category": "监控"
  },
  {
    "id": 237,
    "type": "单选题",
    "title": "某企业使用负载均衡SLB+云服务器ECS+弹性伸缩（Auto Scaling）的架构搭建网站，已经创建了伸缩组，冷却时间设置为缺省值300秒，最小ECS数设置为1，最大ECS数设置为100，并设定了伸缩规则为“每次增加1台ECS”，同时配置报警任务：“统计周期”设为2分钟，“重复几次后报警”设置为3，每当CPU使用率平均值超过60%时，触发伸缩规则定义的伸缩活动，当前伸缩组中有10台ECS实例。该网站业务在长达1小时的时间段内发生了井喷式的爆发增长，CPU的使用率会一直高于60%，这一小时期间，每两次触发该报警任务的时间间隔最少为<strong>____</strong>加上创建一台ECS实例的消耗时间。",
    "options": [
      "A.11分钟",
      "B.5分钟",
      "C.6分钟",
      "D.9分钟"
    ],
    "answer": "C",
    "explanation": "此题考察的是：每两次触发该报警任务间隔时间。题目中的统计周期为2min，重复次数为3，所以每次报警任务的执行间隔时间是2<em>3=6min，此间隔时间6min已经过了300s(即5min)的冷却时间的限制了，所以本题答案是：最少时间间隔=周期</em>重复次数，即2min*3=6min。此题经常考，需重视。",
    "category": "负载均衡"
  },
  {
    "id": 238,
    "type": "单选题",
    "title": "小明是一个社交网站的架构师，创业初期用户量较少，每个注册客户上传的图片文件直接保存在了一台阿里云的云服务器ECS实例上。最近用户量爆增，图片存储的空间达到了3.5T，WEB服务器由原来的1台ECS实例扩展到了5台ECS实例，性能问题得到了解决，可是保存在ECS实例的图片无法在多台ECS之间共享读写。 阿里云的<strong>____</strong>产品非常适合解决这个问题。",
    "options": [
      "A.对象存储OSS",
      "B.内容分发网络CDN",
      "C.归档存储（Archive Storage）",
      "D.负载均衡SLB"
    ],
    "answer": "A",
    "explanation": "划重点：保存在ECS实例的图片无法在多台ECS之间共享读写，所以需要对象存储OSS提升图片存储的性能已经共享读写图片。",
    "category": "其他"
  },
  {
    "id": 239,
    "type": "单选题",
    "title": "阿里云对象存储OSS提供了丰富的文件上传和下载接口，用户可以通过API方便地实现大容量存储空间的管理。如果您想建立一个大型图片分享站点，该网站允许大量用户通过WEB方式进行图片的上传和分享，可以使用阿里云的<strong>____</strong>产品与OSS配合实现。",
    "options": [
      "A.负载均衡SLB",
      "B.云服务器ECS",
      "C.云数据RDS",
      "D.内容分发网络CDN"
    ],
    "answer": "B",
    "explanation": "题目中要求允许大量用户通过WEB方式进行图片的上传和分享，所以需要云服务器ECS来提供WEB服务支持。",
    "category": "OSS"
  },
  {
    "id": 240,
    "type": "单选题",
    "title": "开通阿里云对象存储OSS服务后，您首先需要使用OSS管理控制台或OpenAPI创建Bucket来存储文件。创建Bucket时“所属地域”这个属性必须要指定， 特别是您的云服务器ECS实例需要通过内网访问OSS Bucket时，必须选择与 ECS实例相同的地域，以下有关“所属地域”的说法<strong><strong>_</strong></strong>是正确的。",
    "options": [
      "A.Bucket创建后，“所属地域”属性可随时更改",
      "B.Bucket创建后，“所属地域”属性不可更改",
      "C.Bucket创建后，如果未上传任何文件，则“所属地域”属性可以更改",
      "D.Bucket创建后，要想修改“所属地域”属性，需申请特殊权限"
    ],
    "answer": "B",
    "explanation": "Bucket创建后，“所属地域”属性不可再更改。",
    "category": "OSS"
  },
  {
    "id": 241,
    "type": "单选题",
    "title": "C公司基于阿里云对象存储OSS和云服务器ECS实例构建了一个网站，ECS实例与OSS之间有频繁的文件上传和下载需求。系统管理员小赵最近通过阿里云管理控制台中的费用中心发现OSS的流量费用增长很快，但是从ECS实例上部署的应用系统日志里没有发现网站访问量有明显增长。 请您帮小赵判断一下有可能是<strong><strong>_</strong></strong>原因导致的。",
    "options": [
      "A.系统架构中缺少云数据库RDS",
      "B.可能是ECS实例通过公网地址调用OSS的API",
      "C.ECS实例的系统配置不足,需要增加内存",
      "D.系统架构中缺少负载均衡SLB"
    ],
    "answer": "B",
    "explanation": "题目中说：ECS和OSS之前有频繁的上传和下载的需求，但是ECS的访问量很小，但公网流量增长却很快，所以可以判断是ECS通过公网API访问OSS导致的公网流量。",
    "category": "OSS"
  },
  {
    "id": 242,
    "type": "单选题",
    "title": "阿里云OSS图片处理服务（Image Service） 是阿里云OSS对外提供的图片处理服务。用户将原始图片上传保存在OSS上，通过简单的RESTful接口，可以在任何时间、任何地点、任何互联网设备上对图片进行处理。以下有关OSS图片处理服务说法正确的<strong><strong>____</strong></strong>。",
    "options": [
      "A.可以处理来自于阿里云OSS以外的图片",
      "B.处理完的图片会保存在OSS中",
      "C.处理的图片是OSS用户上传到Bucket里的Object",
      "D.其它答案都正确"
    ],
    "answer": "C",
    "explanation": "图片处理第一步就是需要将图片上传到用户指定的Bucket，所以处理图片是基于Bucket里面的图片文件来处理的。处理完的图片并不会保存到OSS，而是直接返回给请求的用户。参考链接：<a href=\"https://help.aliyun.com/document_detail/44686.html?spm=a2c4g.11186623.2.14.59cb2367diNmNh#conceptm4fdcnvdb\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/44686.html?spm=a2c4g.11186623.2.14.59cb2367diNmNh#conceptm4fdcnvdb</a>",
    "category": "OSS"
  },
  {
    "id": 243,
    "type": "单选题",
    "title": "阿里云对象存储OSS支持分块上传操作，即可以将大文件进行分块处理后再分别上传，该操作适合在上传大文件或者网络较差的情况下使用。在分块上传的所有任务完成之后，如果没有调用Complete Multipart Upload接口，就会产生一些不完整的文件，这些不完整的文件会占用用户bucket的空间。为了方便用户删除这些不完整的文件，OSS专门提供了<strong>___</strong>功能。",
    "options": [
      "A.在线批量删除",
      "B.OpenAPI批量删除",
      "C.Bucket清空",
      "D.碎片管理"
    ],
    "answer": "D",
    "explanation": "题目中说了需要删除不完整的碎片文件，所以需要用到碎片管理功能来删除这些不完整的文件。参考链接：<a href=\"https://help.aliyun.com/document_detail/31916.html?spm=5176.10695662.1996646101.searchclickresult.40113f03tJCrFU\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/31916.html?spm=5176.10695662.1996646101.searchclickresult.40113f03tJCrFU</a>",
    "category": "OSS"
  },
  {
    "id": 244,
    "type": "单选题",
    "title": "某企业购买了一个负载均衡SLB实例，该实例下挂载了多台云服务器ECS实例，每个ECS实例上都部署了多个不同的站点，并使用不同域名访问。现在负载均衡SLB实例可以通过配置<strong>____</strong>来实现对同一台ECS实例上不同站点的健康检查。",
    "options": [
      "A.主机头（Http Host）",
      "B.ECS实例的IP和端口号",
      "C.会话保持使用的协议",
      "D.站点首页的URL"
    ],
    "answer": "A",
    "explanation": "一个负载均衡实例最多支持添加50个监听，每个监听配置对应后端ECS实例上的一个应用。您可以通过对后端ECS实例上的多个应用配置不同主机头的方式来满足这一需求。参考链接：<a href=\"https://help.aliyun.com/document_detail/27678.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/27678.html</a>",
    "category": "负载均衡"
  },
  {
    "id": 245,
    "type": "单选题",
    "title": "某企业的网站构建在阿里云的云服务器ECS实例、负载均衡SLB实例以及弹性伸缩（Auto Scaling）之上，其中负载均衡SLB实例已和弹性伸缩绑定，且已开启健康检查。负载均衡检SLB实例检查出后端云服务器ECS实例ecs_inst1处于不健康状态，且ecs_inst1在弹性伸缩的伸缩组中。以下说法中正确的是？",
    "options": [
      "A.弹性伸缩的弹性自愈功能将会把ecs_inst1移出当前伸缩组，且会新创建一个ECS实例添加进来，该新添加实例会被SLB实例分配负载",
      "B.负载均衡SLB实例会将ecs_inst1的权重置为0，暂时不分配负载给它，但是会继续通过健康检查监控ecs_inst1的状态，一旦恢复，则将其重新启用，正常分配负载",
      "C.弹性伸缩的弹性自愈功能将会针对ecs_inst1启动错误检查和自动恢复功能，如果修复成功，ecs_inst1状态恢复正常，则会继续留在伸缩组中，且会被负载均衡SLB实例分配负载",
      "D.弹性伸缩会自动创建一个新的ECS实例，并将该新实例添加到伸缩组，接收负载均衡SLB实例分配的负载，ecs_inst1将会被保留在伸缩组中，等其状态恢复正常后，将会被继续加入SLB实例的后台服务器池"
    ],
    "answer": "A",
    "explanation": "健康检查检查出云服务器ECS实例ecs_inst1处于不健康状态，则会将ecs_inst1移出伸缩组且会重新创建一个新的ECS实例来代替ecs_inst1，同时将其加入负载均衡SLB后端并给其分发请求。",
    "category": "负载均衡"
  },
  {
    "id": 246,
    "type": "单选题",
    "title": "在使用阿里云负载均衡SLB的管理控制台时，如果需要添加某台云服务器ECS实例到某负载均衡SLB实例的后端服务器池中，ECS实例必须处于<strong>____</strong>状态。",
    "options": [
      "A.运行中",
      "B.启动中",
      "C.已停止",
      "D.已创建"
    ],
    "answer": "A",
    "explanation": "手动添加负载均衡SLB的后端服务器的时候，后端的ECS服务器必须处于运行中状态。",
    "category": "负载均衡"
  },
  {
    "id": 247,
    "type": "单选题",
    "title": "SLB是将访问流量根据转发策略分发到后端多台云服务器（ECS实例）的流量分发控制服务。下列关于SLB说法错误的是？",
    "options": [
      "A.SLB的服务能力与后端ECS的公网宽带规格无关",
      "B.同一组ECS不可以搭建多个网站并同时进行负载均衡",
      "C.在使用SLB的过程中随时调整后端ECS的数目",
      "D.不同操作系统的ECS可以同时做为SLB服务的后端服务器"
    ],
    "answer": "B",
    "explanation": "同一组ECS可以同时搭建多个网站并进行负载均衡。",
    "category": "负载均衡"
  },
  {
    "id": 248,
    "type": "单选题",
    "title": "负载均衡支持按带宽计费的负载均衡实例下的所有监听共享实例的总带宽,假如您购买了一个带宽峰值为 10MB 的负载均衡实例，并在该实例下创建了三个监听（监听A、监听B和监听C）。监听A的带宽峰值设置为 4MB，另外两个监听没有设置带宽峰值，如果监听A和监听C一直没有流量进入，那么关于监听B的说法，以下说法正确的是<strong>____</strong>。",
    "options": [
      "A.监听B最多也只能跑满 6MB 带宽",
      "B.监听B最多也只能跑满4MB 带宽",
      "C.监听B最多也只能跑满10MB 带宽",
      "D.监听B最多也只能跑满14MB 带宽"
    ],
    "answer": "A",
    "explanation": "监听A的4MB带宽不管用不用都会预留出来的，所以监听B最大只能跑满6MB的带宽。参考链接：<a href=\"https://help.aliyun.com/document_detail/85930.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/85930.html</a>",
    "category": "负载均衡"
  },
  {
    "id": 249,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB提供对多台后端服务器进行流量分发的服务。对于后端服务器的选择，以下说法中正确的是<strong>____</strong>。",
    "options": [
      "A.只能是阿里云的云服务器ECS实例",
      "B.所有能通过公网访问的服务器均可",
      "C.所有阿里云的云产品实例",
      "D.支持AWS的EC2"
    ],
    "answer": "A",
    "explanation": "阿里云的负载均衡SLB目前只支持阿里云的云服务器ECS实例，不支持其他服务器。",
    "category": "负载均衡"
  },
  {
    "id": 250,
    "type": "单选题",
    "title": "某创业团队刚刚成立，几个核心的程序员分布在5个不同的城市异地办公，新发布的线上系统使用了阿里云的云数据库RDS。 由于程序员需要在异地用动态IP连接RDS，所以管理员只能打开RDS的公网连接地址和端口，并每天多次从管理控制台查看RDS的连接信息，防止黑客远程登录RDS。 管理员通过<strong><strong>___</strong></strong>方法可以最简单地降低这种担忧和人工防护的成本。",
    "options": [
      "A.开通云盾态势感知服务，一旦有非常用IP登录数据库rds即可收到报警信息",
      "B.开通云盾DDoS基础防护，可以防止RDS被非法登录",
      "C.开启阿里云云监控，一旦发现RDS外网流量特别大就立即登录控制台查看是否是非法连接",
      "D.内容安全（原名:绿网），可以自动过滤非法的连接"
    ],
    "answer": "A",
    "explanation": "题目中说了：在异地用动态IP连接RDS。意思就是程序员登录RDS的IP是不固定的，DDoS基础防护只可以防护DDoS的攻击，云监控在每次都要查看非法IP也不合适，阿里绿网并不能知道什么的非法的连接。所以最合适的还是用态势感知服务的报警服务。",
    "category": "数据库"
  },
  {
    "id": 251,
    "type": "单选题",
    "title": "采用云计算服务与传统自建IT系统不同，相比传统自建方式，云计算带来了巨大的便利性。以阿里云服务器ECS为例，这些便利性中不包括？",
    "options": [
      "A.用户无需再去维护和管理硬件",
      "B.获得服务器实例在几分钟内而不是数天数周",
      "C.用户无需参与任何安全管理工作",
      "D.用户按照需要获得计算量而不是按照峰值设计"
    ],
    "answer": "C",
    "explanation": "用户虽然不用管理维护硬件，但是仍然需要参加云计算的安全管理工作。",
    "category": "其他"
  },
  {
    "id": 252,
    "type": "单选题",
    "title": "阿里云的云盾安骑士可以记录远程访问服务器的源IP地址,并对频繁连接的可疑IP进行屏蔽,日常运维过程中需要通过<strong>____</strong>功能对系统管理员常用的IP进行设置。",
    "options": [
      "A.安全组",
      "B.webshell云查杀",
      "C.IP白名单",
      "D.常用登录地管理"
    ],
    "answer": "C",
    "explanation": "题目中明确说了对频繁连接的可疑IP进行屏蔽，所以通过IP白名单直接只允许指定的IP访问即可。",
    "category": "安全"
  },
  {
    "id": 253,
    "type": "单选题",
    "title": "阿里云弹性伸缩(Auto Scaling)是根据用户的业务需求和策略,自动调整其弹性计算资源的管理服务。为了在弹性伸缩创建的ECS实中可以直接正常处理用户请求,无需任何额外的系统调度和配置,弹性伸缩的云服务器ECS实例中部署的应用必须满足<strong>____</strong>。",
    "options": [
      "A.无状态且可横向扩展的",
      "B.有状态",
      "C.无状态且符合幂等性",
      "D.所有数据保存在ECS实例磁盘上"
    ],
    "answer": "A",
    "explanation": "弹性伸缩主要是ECS的横向伸缩，同时也是服务的横向伸缩，弹性伸缩要求每台ECS是无状态的，否则不能保证数据的统一。参考链接：<a href=\"https://kyfxbl.iteye.com/blog/1831869\" target=\"_blank\" rel=\"noopener\">https://kyfxbl.iteye.com/blog/1831869</a>",
    "category": "监控"
  },
  {
    "id": 254,
    "type": "单选题",
    "title": "在使用阿里云弹性伸缩(Auto Scaling)时,需要先创建伸缩组,然后会基于伸缩组提供按照策略或者业务需求弹性伸缩计算资源的服务。当某个伸缩组不再使用时,可以将其删除,其中<strong>____</strong>不依赖于伸缩组的生命周期,即不会随着伸缩组的删除而被删除。",
    "options": [
      "A.定时任务",
      "B.伸缩配置",
      "C.伸缩规则",
      "D.伸缩活动"
    ],
    "answer": "A",
    "explanation": "定时任务独立于伸缩组存在，不依赖伸缩组的生命周期管理，删除伸缩组不会删除定时任务；云监控报警任务独立于伸缩组存在，不依赖伸缩组的生命周期管理，删除伸缩组不会删除报警任务。参考链接：<a href=\"http://docsaliyun.cnhangzhou.oss.aliyuninc.com/pdf/autoscalingproductdescriptioncnzh20170407.pdf\" target=\"_blank\" rel=\"noopener\">http://docsaliyun.cnhangzhou.oss.aliyuninc.com/pdf/autoscalingproductdescriptioncnzh20170407.pdf</a>",
    "category": "监控"
  },
  {
    "id": 255,
    "type": "单选题",
    "title": "您基于阿里云的云服务器ECS实例部署了Mysql数据库,随着业务量的不断上涨,您的运维工作不断增加,包括数据库的备份、主备数据库之间的数据同步等问题,可以采用阿里云的<strong>____</strong>产品来快速解决该问题。",
    "options": [
      "A.表格存储",
      "B.云数据库RDS",
      "C.开放搜索服务OpenSearch",
      "D.对象存储OSS"
    ],
    "answer": "B",
    "explanation": "题目中是因为在云服务器ECS上部署了MySQL服务，随着业务上涨导致MySQL的运维工作繁重，所以需要使用云数据库RDS的功能来快速解决问题。",
    "category": "数据库"
  },
  {
    "id": 256,
    "type": "单选题",
    "title": "阿里云对象存储OSS是阿里云对外提供的海量、安全、低成本、高可靠的云存储服务。可以广泛应用于各种场景。例如:图片和音视频类应用的海量存储、静态网站、应用中的静态网页。以下<strong>____</strong>场景适合使用OSS服务。",
    "options": [
      "A.客户A是一个网店老板,每天产生10Gb的高清图片,需要稳定可靠的存储",
      "B.客户B的一个在线应用,采用自建MySQL数据库保存订单信息,该应用每天产生2000万条订单数据,预计2周后存储容量达到服务器上限,希望通过阿里云产品解决订单存储问题",
      "C.客户C想对当前业务系统积累了5年的数据进行数据挖掘,为新财年的营销策略制定提供数据支持",
      "D.客户D的小型电子商务系统由于业务量爆增,计算能力明显不足,每天业务高峰期时服务器的CPU利用率都超过90%,正在寻找优化方案"
    ],
    "answer": "A",
    "explanation": "OSS仅适合存放静态非结构化数据，所以数据库的数据是不行的。",
    "category": "安全"
  },
  {
    "id": 257,
    "type": "单选题",
    "title": "云计算的一个显著特点是提供按需供应、按需付费的服务。所有的资源以资源池的方式存在，提供配置化的访问方式，资源类型包括网络、服务器、存储、应用和服务。关于资源池的说法错误的是？",
    "options": [
      "A.资源池无法突破单台物理机所拥有的资源",
      "B.资源池包含了多个相同类型的资源",
      "C.资源池是实现计算服务化的基础",
      "D.不同的资源池有不同的资源池优化方法"
    ],
    "answer": "A",
    "explanation": "资源池的解释：云计算的核心理念就是通过互联网络为用户提供按需的IT资源服务。为了达到这个目标，云服务提供商首先要保证拥有一个容量充足的资源池以满足在并发的业务高峰时刻仍能满足用户的服务要求。参考链接：<a href=\"http://book.51cto.com/art/201202/319793.htm\" target=\"_blank\" rel=\"noopener\">http://book.51cto.com/art/201202/319793.htm</a>",
    "category": "网络"
  },
  {
    "id": 258,
    "type": "单选题",
    "title": "当您确认不再需要某个阿里云的弹性公网IP（EIP）时，可以释放指定的EIP。在释放EIP之前，要确定已经从云产品实例上解绑EIP，才能释放该EIP。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "EIP解绑后，仍需要支付IP占有费。为避免不必要的计费，您可以在解绑后，释放EIP。参考链接：<a href=\"https://help.aliyun.com/document_detail/65204.html?spm=5176.11065259.1996646101.searchclickresult.45406047N0LbzN\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/65204.html?spm=5176.11065259.1996646101.searchclickresult.45406047N0LbzN</a>",
    "category": "其他"
  },
  {
    "id": 259,
    "type": "单选题",
    "title": "共享存储是指是多台服务器访问(读写)同一个存储设备的同一个分区,即系统允许多个用户共享同一份文件。如阿里云的文件存储（Network Attached Storage,简称NAS）就提供了共享存储的服务,以下说法错误的是?",
    "options": [
      "A.多个云服务器实例可以同时访问同一个共享文件系统",
      "B.公共云计算中使用的存储都是共享存储",
      "C.适合跨多个云服务器实例部署的应用程序访问相同数据来源的应用场景",
      "D.支持主流的应用程序及工作负载可无缝配合使用,无需任何修改即可读写数据"
    ],
    "answer": "B",
    "explanation": "公共云计算中使用的存储并非是共享存储，而是分布式的私有存储。",
    "category": "其他"
  },
  {
    "id": 260,
    "type": "单选题",
    "title": "阿里云的云盾态势感知用大数据分析技术,按攻击者的视角来建立安全防御体系,颠覆了传统单一的入侵和漏洞检测,让用户对安全“可见、可控、可管”。 以下关于态势感知功能的描述错误的是<strong>____</strong>。",
    "options": [
      "A.可以发现webshell,恶意病毒攻击",
      "B.利用大数据,可对高级攻击者使用的0day漏洞攻击进行防御",
      "C.实时捕捉云服务器ECS实例中的网络连接,利用情报信息做异常识别,发现僵尸网络",
      "D.是一个针对阿里云服务器ECS的托管服务"
    ],
    "answer": "D",
    "explanation": "态势感知是对云上资产的诊断服务，服务器安全托管服务才是对ECS的托管。参考链接：<a href=\"https://help.aliyun.com/document_detail/73743.html?spm=5176.10695662.1996646101.searchclickresult.4dbe2d4cca0F6H\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/73743.html?spm=5176.10695662.1996646101.searchclickresult.4dbe2d4cca0F6H</a>",
    "category": "安全"
  },
  {
    "id": 261,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB提供对多台云服务器ECS实例进行流量分发的服务，可以扩展应用系统对外的服务能力，并且可以消除单点故障提升应用系统的可用性。结合<strong>____</strong>共同使用，可以提供WAF及防DDoS攻击能力，使应用环境更安全。",
    "options": [
      "A.云盾的DDoS高防IP",
      "B.云监控",
      "C.云盾的态势感知",
      "D.云盾的先知计划"
    ],
    "answer": "A",
    "explanation": "WAF解释为Web应用防护系统（也称为：网站应用级入侵防御系统。英文：Web Application Firewall，简称： WAF），DDoS高防IP也是支持Web应用DDoS攻击防护，支持过滤多种flood，高频攻击等攻击，支持HTTP特征过滤、URI过滤、host过滤。参考链接：<a href=\"https://help.aliyun.com/document_detail/28465.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/28465.html</a>",
    "category": "安全"
  },
  {
    "id": 262,
    "type": "单选题",
    "title": "阿里云弹性伸缩(Auto Scaling),是根据用户的业务需要和策略,自动调整其弹性计算资源的管理服务。支持用户添加已有的云服务器ECS实例到伸缩组中去,但是对云服务器ECS实例所在地域有一定要求。以下说法中正确的是?",
    "options": [
      "A.该实例和伸缩组必须在同一个地域(Region)中,对可用区(Zone)没有要求",
      "B.该实例和伸缩组必须在同一个地域(Region)的同一个可用区(Zone)中",
      "C.对该实例和伸缩组的地域(Region)和可用区(Zone)没有要求,",
      "D.一个伸缩组最多可以跨两个地域(Region),添加完ECS实例后,要保证伸缩组中的所有ECS实例所在的区域不超过两个"
    ],
    "answer": "A",
    "explanation": "添加的ECS需要和伸缩组处于同一个地域(Region)",
    "category": "监控"
  },
  {
    "id": 263,
    "type": "单选题",
    "title": "在使用阿里云弹性伸缩(Auto Scaling)时，伸缩组中包含的云服务器ECS实例有两种类型，一种是根据用户的伸缩配置和伸缩规则由弹性伸缩服务自动创建的云服务器ECS实例，另外一种是由用户手工添加到伸缩组中的ECS实例。关于这两种云服务器ECS实例，以下说法正确的是？",
    "options": [
      "A.当ECS实例被弹性伸缩从伸缩组中移出时，对于自动创建的ECS实例会停止和释放，对于手工添加的ECS实例则不会停止和释放",
      "B.手工添加的ECS实例，受伸缩配置中定义的规格的限制",
      "C.手工添加的ECS实例对地域没有要求，但是对状态有要求，必须是“运行中”",
      "D.当伸缩组需要减少ECS实例时，自动创建的ECS实例会被优先移出伸缩组，手工添加的ECS实例会被尽量保留"
    ],
    "answer": "A",
    "explanation": "手动添加一台或多台 ECS 实例。手动添加的ECS实例配置与当前伸缩配置没有关联。但是手工添加的ECS需要和当前伸缩组处于同一个地域。参考链接：<a href=\"https://help.aliyun.com/document_detail/25901.html?spm=5176.11065259.1996646101.searchclickresult.29e7210cJXOcUz\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25901.html?spm=5176.11065259.1996646101.searchclickresult.29e7210cJXOcUz</a>",
    "category": "监控"
  },
  {
    "id": 264,
    "type": "单选题",
    "title": "某大型互联网公司，原来的业务都运行在物理机上，并且有自建的监控和报警系统，最近准备把一部分业务迁到阿里云上，并通过云监控来监控云服务器ECS实例并设置报警。用户需要<strong><strong>___</strong></strong>才能快速将云监控现有的报警通知对接到自建的报警系统，并在自建的报警系统中综合处理物理机和云服务器ECS实例的报警信息。",
    "options": [
      "A.无法实现",
      "B.使用云监控提供的事件订阅功能，从消息队列消费报警信息",
      "C.调用云监控提供的查询数据的接口，定时查询，然后自己写code判断指标是否异常",
      "D.调用查询旺旺信息的API，获取发送到旺旺的报警通知"
    ],
    "answer": "C",
    "explanation": "题目中说了需要”在自建的报警系统中综合处理物理机和云服务器ECS实例的报警信息”，所以需要通过云监控提供的API接口获取指定的指标数据。",
    "category": "监控"
  },
  {
    "id": 265,
    "type": "单选题",
    "title": "您成功地创建了一台阿里云的云服务器ECS实例,准备进行应用的部署。在部署应用之前,如何保证该云服务器ECS实例具备防御500M以内的DDoS攻击的能力？",
    "options": [
      "A.其他都不对",
      "B.需要您自己架设防DDoS服务",
      "C.阿里云的云盾产品提供免费的基础DDoS防护服务,不需要单独购买",
      "D.需要另行购买DDoS防护服务才可以具备防护功能"
    ],
    "answer": "C",
    "explanation": "阿里云的云盾免费的DDoS基础防护提供最高5G的默认DDoS防护能力，所以5G以下可以选择云盾DDoS基础防护，5G以上可以选择云盾的DDoS高防IP服务。",
    "category": "其他"
  },
  {
    "id": 266,
    "type": "单选题",
    "title": "在使用阿里云弹性伸缩(Auto Scaling)时,希望能根据计算资源的使用情况来增加或者减少云服务器ECS实例,如当CPU利用率小于等于30%时则减少一台云服务器ECS实例,首先配置伸缩规则为“减少1台ECS”,然后还需要<strong>____</strong>来实现。",
    "options": [
      "A.创建报警任务",
      "B.设置伸缩组的属性",
      "C.创建定时任务",
      "D.创建伸缩配置"
    ],
    "answer": "A",
    "explanation": "划重点：当CPU利用率小于等于30%时则减少一台云服务器ECS实例。只有达到这个条件才去执行，所以这就是一个报警任务。",
    "category": "监控"
  },
  {
    "id": 267,
    "type": "单选题",
    "title": "在众多的网络攻击类型中，“钓鱼网站”是最常见的攻击之一。钓鱼网站的页面看上去与真实网站界面完全一致，要求访问者提交账号和密码，以此来骗取用户银行或信用卡账号、密码等私人资料。以下有关钓鱼网站的传播手段，说法错误的是<strong><strong>__</strong></strong>。",
    "options": [
      "A.通过QQ、旺旺等客户端聊天工具发送传播钓鱼网站链接",
      "B.在搜索引擎、中小网站投放广告，吸引用户点击钓鱼网站链接",
      "C.银行在官方网站的显著位置发布钓鱼网站链接",
      "D.通过Email、论坛、博客、SNS网站批量发布钓鱼网站链接"
    ],
    "answer": "C",
    "explanation": "钓鱼网站不会在银行的官方网站发布钓鱼链接，参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/56273.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/56273.html</a>",
    "category": "网络"
  },
  {
    "id": 268,
    "type": "单选题",
    "title": "您成功地创建了一台阿里云的云服务器ECS实例，准备进行应用的部署。在部署应用之前，如何保证该云服务器ECS实例具备防御500M以内的DDoS攻击的能力？",
    "options": [
      "A.阿里云的云盾产品提供免费的基础DDoS防护服务，不需要单独购买",
      "B.需要另行购买DDoS防护服务才可以具备防护功能",
      "C.需要您自己架设防DDoS服务",
      "D.其他都不对"
    ],
    "answer": "A",
    "explanation": "DDoS基础防护的防护阈值只有5GB，需要防护阈值在5GB以上的话或者要保证保证业务需要保持在99.9以上，就需要用到DDoS高防IP服务。",
    "category": "其他"
  },
  {
    "id": 269,
    "type": "单选题",
    "title": "您需要进行某台云服务ECS实例的磁盘快照的创建，只有该云服务器ECS实例处于<strong>____</strong>状态下时才可以进行快照创建的操作。",
    "options": [
      "A.启动中",
      "B.创建中",
      "C.运行中",
      "D.停止中"
    ],
    "answer": "C",
    "explanation": "注意停止中和已停止的区别，根据实例创建快照时，实例必须处于 运行中 或 已停止 状态。参考链接：<a href=\"https://help.aliyun.com/document_detail/25455.html?spm=5176.11065259.1996646101.searchclickresult.230e3e7fXP17FX\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25455.html?spm=5176.11065259.1996646101.searchclickresult.230e3e7fXP17FX</a>",
    "category": "其他"
  },
  {
    "id": 270,
    "type": "单选题",
    "title": "通过<strong>____</strong>操作，可以实现在阿里云的同一个专有网络VPC下的三个交换机下的云服务器ECS实例之间内网互相不能访问，但并不影响该专有网络VPC的内网其他流量？",
    "options": [
      "A.创建三个安全组，分别包含三个交换机下的所有云服务器ECS实例，先为每个安全组设置允许所有网段访问的规则，再设置禁止另外两个交换机所在网段访问的规则（优先级要高于前者）",
      "B.创建三个安全组，分别包含三个交换机下的所有云服务器ECS实例，先为每个安全组设置允许所有网段访问的规则，再设置禁止另外两个交换机所在网段访问的规则（优先级要低于前者）",
      "C.创建一个安全组包含三个交换机下的所有云服务器ECS实例，先为该安全组设置允许所有网段访问的规则，再设置禁止另外两个交换机所在网段访问的规则（优先级要高于前者）",
      "D.其他答案都不对"
    ],
    "answer": "A",
    "explanation": "划重点：三个交换机下的云服务器ECS实例之间内网互相不能访问，所以需要三个安全组，安全组中禁止访问的规则需要高于允许访问的规则。",
    "category": "网络"
  },
  {
    "id": 271,
    "type": "单选题",
    "title": "A公司将最近两年的内部培训录像都保存在阿里云对象存储OSS中，以方便员工在需要的时候学习。随着智能手机的普及，很多员工希望通过手机来观看视频，但是保存在OSS中的视频格式无法在手机上直接播放，遇到这种问题时客户可以使用阿里云的<strong>____</strong> 产品很高效地解决。",
    "options": [
      "A.云服务器ECS",
      "B.阿里云媒体转码（Media Transcoding，简称MTS）",
      "C.云数据库RDS",
      "D.负载均衡SLB"
    ],
    "answer": "B",
    "explanation": "划重点：OSS中的视频格式无法在手机上直接播放，所以需要用到视频解码来解决直接播放的问题。",
    "category": "OSS"
  },
  {
    "id": 272,
    "type": "单选题",
    "title": "服务器安全托管是阿里云云盾的一项高级服务,服务内容包括专家人工安全体检、清除木马,VIP 技术支持等,此服务是针对阿里云<strong>____</strong>产品提供的。",
    "options": [
      "A.云数据库RDS",
      "B.云服务器ECS",
      "C.负载均衡SLB",
      "D.专有网络VPC"
    ],
    "answer": "B",
    "explanation": "划重点：服务器安全托管服务，服务器安全托管是由阿里云/阿里云授权安全合作伙伴为您提供的针对云上ECS主机的安全托管服务。参考链接：<a href=\"https://help.aliyun.com/document_detail/73743.html?spm=5176.10695662.1996646101.searchclickresult.37f44934pPA3sR\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/73743.html?spm=5176.10695662.1996646101.searchclickresult.37f44934pPA3sR</a>",
    "category": "安全"
  },
  {
    "id": 273,
    "type": "单选题",
    "title": "跨站脚本攻击（Crosssite scripting，通常简称为XSS）可被用于进行窃取隐私、钓鱼欺骗、偷取密码、传播恶意代码等攻击行为。请问XSS攻击主要发生在<strong>____</strong>。",
    "options": [
      "A.用户浏览器",
      "B.WEB应用的服务器",
      "C.数据库",
      "D.缓存服务器"
    ],
    "answer": "A",
    "explanation": "XSS, 即为（Cross Site Scripting）, 中文名为跨站脚本, 是发生在目标用户的浏览器层面上的，当渲染DOM树的过程成发生了不在预期内执行的JS代码时，就发生了XSS攻击。参考链接：<a href=\"https://www.cnblogs.com/unclekeith/p/7750681.html\" target=\"_blank\" rel=\"noopener\">https://www.cnblogs.com/unclekeith/p/7750681.html</a>",
    "category": "OSS"
  },
  {
    "id": 274,
    "type": "单选题",
    "title": "某公司属于传统行业，一年前刚刚发展互联网线上业务，用了5台云服务器ECS实例，没有专门的系统管理员，最近半年来线上系统总是出现各种安全问题，几次高危漏洞被黑客利用，差点将核心数据泄露。使用阿里云的<strong><strong>__</strong></strong>可以快速解决这个问题。",
    "options": [
      "A.安骑士",
      "B.安全管家",
      "C.内容安全（原名：绿网）",
      "D.DDoS高防IP"
    ],
    "answer": "B",
    "explanation": "划重点：没有专门的系统管理员。所以需要用到阿里云的安全管家服务来托管公司的ECS服务器。参考链接：<a href=\"https://help.aliyun.com/document_detail/31742.html?spm=a2c4g.11186623.6.542.47cd3609wWEKtX\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/31742.html?spm=a2c4g.11186623.6.542.47cd3609wWEKtX</a>",
    "category": "安全"
  },
  {
    "id": 275,
    "type": "单选题",
    "title": "小王是某新闻网站的技术负责人，该网站目前部署在一台阿里云的云服务器ECS实例上。随着用户访问量的增加，小王发现用户访问网站的响应速度在变慢，通过分析发现是应用服务器的Web会话数量太多且CPU利用率超过75%。为了快速缓解该应用服务器的压力，您认为最紧要的事情是<strong>____</strong>。",
    "options": [
      "A.增加一台云服务器ECS实例，并采用负载均衡SLB进行负载分担",
      "B.采用云数据库RDS进行新闻数据存储",
      "C.采用对象存储OSS进行内容的存储",
      "D.采用专有云VPC提升运维效率"
    ],
    "answer": "A",
    "explanation": "划重点：应用服务器的CPU利用率超过75%，所以需要增加ECS来减轻这台服务器的压力，同时需要通过负载均衡SLB来实现他们的负载分担。",
    "category": "其他"
  },
  {
    "id": 276,
    "type": "单选题",
    "title": "您在阿里云的云服务器ECS实例的使用中，要创建新的安全组规则时，不可以规定<strong>____</strong>类型的授权。",
    "options": [
      "A.IP授权",
      "B.端口授权",
      "C.MAC授权",
      "D.安全组授权"
    ],
    "answer": "C",
    "explanation": "安全组规则是不支持MAC授权的。",
    "category": "安全"
  },
  {
    "id": 277,
    "type": "单选题",
    "title": "阿里云的云服务器ECS实例的快照是指某一个时间点上某一块磁盘的数据拷贝。下列关于云服务器ECS实例快照的说法错误的是<strong>____</strong>。",
    "options": [
      "A.用户可以手动创建快照和也可以设置自动快照策略",
      "B.可以保留自动快照到用户自己的OSS Bucket中",
      "C.系统盘和数据盘都可以制作快照",
      "D.云服务器ECS实例到期后或手动释放磁盘时，手动创建的快照不会同时释放"
    ],
    "answer": "B",
    "explanation": "自动快照是保存在OSS里面，但是是保存在独立于用户自己的OSS Bucket里面，而不是用户的Bucket里面。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/52045.html?spm=5176.11065259.1996646101.searchclickresult.79392606dQMy0U\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/52045.html?spm=5176.11065259.1996646101.searchclickresult.79392606dQMy0U</a>",
    "category": "其他"
  },
  {
    "id": 278,
    "type": "单选题",
    "title": "如果您需要对某个域名(如abc.com)通过阿里云内容分发网络CDN加速，必须要在CDN服务中将该域名（如abc.com）添加到“加速域名”中。添加完成之后您会获得一个CNAME地址A，接下来需要进行域名解析的修改，将该加速域名(如abc.com)指向这个CNAME地址A。以下有关修改域名解析的说法中错误的是？",
    "options": [
      "A.该加速域名（如abc.com）所使用的DNS系统必须支持“智能解析”功能",
      "B.“加速域名”使用的解析服务商可以是阿里云以外的公司",
      "C.如果您的“加速域名”提前转移到阿里云，且在同一个阿里云帐号下管理，可以实现一键修改解析",
      "D.为“加速域名”分配的CNAME地址指向的具体IP地址，由阿里云CDN系统智能控制"
    ],
    "answer": "A",
    "explanation": "阿里云以外的公司的公司也可以提供解析。参考链接：<a href=\"https://help.aliyun.com/document_detail/27101.html?spm=a2c4g.11186623.6.542.4d9379c6aKHBPc\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/27101.html?spm=a2c4g.11186623.6.542.4d9379c6aKHBPc</a>",
    "category": "CDN"
  },
  {
    "id": 279,
    "type": "单选题",
    "title": "当您的云服务器ECS实例的镜像选择了Aliyun Linux，可以兼容以下<strong>____</strong>操作系统。",
    "options": [
      "A.CentOS",
      "B.Windows Server 2008",
      "C.OpenSUSE",
      "D.UBUNTU"
    ],
    "answer": "A",
    "explanation": "Aliyun Linux和Centos都属于RedHat一家的。兼容Red Hat。其中包括（Red Hat Enterprise Linux， Fedora，CentOS，Scientific Linux， Oracle Linux），参考：<a href=\"https://blog.csdn.net/wangjianno2/article/details/51607847\" target=\"_blank\" rel=\"noopener\">https://blog.csdn.net/wangjianno2/article/details/51607847</a>",
    "category": "其他"
  },
  {
    "id": 280,
    "type": "单选题",
    "title": "阿里云弹性伸缩(Auto Scaling)中，伸缩组是一组部署了相同应用的云服务器ECS实例的集合。以下关于伸缩组的说法中正确的是？",
    "options": [
      "A.当伸缩组对应的伸缩规则的条件触发后，弹性伸缩会根据设定的伸缩规则添加或者减少伸缩组中的云服务器ECS实例",
      "B.伸缩组是云服务器ECS实例的资源池，当实际应用中需要添加计算资源时，会从伸缩组中获取可用的ECS实例，添加到应用中去",
      "C.伸缩组是云服务器ECS实例的资源池，弹性伸缩会预先创建一定数量的云服务器ECS实例放在伸缩组中",
      "D.伸缩组是监控的目标，其中的云服务器ECS实例，必须是由阿里云弹性伸缩基于相同的镜像自动创建的"
    ],
    "answer": "A",
    "explanation": "阿里云弹性伸缩（Auto Scaling）的基础知识。服务器ECS实例可以是自己创建，也可以自动添加闲置的云服务器ECS资源。",
    "category": "监控"
  },
  {
    "id": 281,
    "type": "单选题",
    "title": "阿里云对象存储OSS提供了海量的文件存储能力，对于文件管理除了支持简单上传、断点续传和大文件分片上传功能外，还提供了多种删除文件的功能。如果需要删除的Object数目很多，而且删除的Object是有一定的规律，比如定期删除某些天之前的Object，或者干脆是要清空整个Bucket，特别适合使用哪个功能来完成？",
    "options": [
      "A.管理控制台逐个删除",
      "B.管理控制台批量删除",
      "C.生命周期管理",
      "D.通过OpenAPI逐个删除"
    ],
    "answer": "C",
    "explanation": "题目中说需要比如定期删除某些天之前的Object，所以可以通过生命周期管理来管理最合适。",
    "category": "OSS"
  },
  {
    "id": 282,
    "type": "单选题",
    "title": "阿里云OSS产品的账单费用由三部分组成，包括：存储空间费用、流量费用和OSS API请求费用。 每一次对OSS的操作都算作一次API请求，上传文件是PUT请求，下载文件是GET请求。OSS API请求费用的付费方式支持<strong>____</strong>。",
    "options": [
      "A.包年包月和按量付费",
      "B.只有按量付费",
      "C.只有包年包月",
      "D.按天计费和按量付费"
    ],
    "answer": "B",
    "explanation": "OSS每小时结算一次调用 OSS API 的请求费用。目前只支持按量付费：每万次请求的单价 * 每小时实际请求次数/10000。参考链接：<a href=\"https://help.aliyun.com/document_detail/59636.html?spm=a2c4g.11186623.6.548.680065d3CgLSml\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/59636.html?spm=a2c4g.11186623.6.548.680065d3CgLSml</a>",
    "category": "OSS"
  },
  {
    "id": 283,
    "type": "单选题",
    "title": "阿里云OSS产品的账单费用由三部分组成，包括：存储空间费用、流量费用和OSS API请求费用。其中存储费用是根据应用所占用的存储空间的大小计费，存储费用的付费方式支持<strong>___</strong>。",
    "options": [
      "A.包年包月和按量付费",
      "B.只有按量付费",
      "C.只有包年包月",
      "D.按天计费和按量付费"
    ],
    "answer": "A",
    "explanation": "存储费用支持包年包月和按量付费。参考链接：<a href=\"https://help.aliyun.com/document_detail/59636.html?spm=a2c4g.11186623.6.548.360865d3QTUWbW#h2url3\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/59636.html?spm=a2c4g.11186623.6.548.360865d3QTUWbW#h2url3</a>",
    "category": "OSS"
  },
  {
    "id": 284,
    "type": "单选题",
    "title": "某创业团队基于阿里云的产品构建了一个网盘应用，允许用户通过WEB方式进行文件的上传和下载。当前版本的实现方式是所有文件都保存在多台云服务器ECS实例的数据盘上。随着业务量的增长，ECS实例的数量也同步增加，系统整体的运维成本越来越高。如果用户开通阿里云的<strong>___</strong>产品与ECS实例搭配，可以很好地降低运维成本。",
    "options": [
      "A.负载均衡SLB",
      "B.阿里云对象存储OSS",
      "C.内容分发网络CDN",
      "D.关系型云数据库RDS"
    ],
    "answer": "B",
    "explanation": "划重点：保存在多台云服务器ECS实例的数据盘上，需要降低运维成本。所以需要把文件文件转存到对象存储OSS上面。",
    "category": "其他"
  },
  {
    "id": 285,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB是对多台后端服务器进行流量分发的服务。以下关于负载均衡SLB的说法正确的是<strong>____</strong>。",
    "options": [
      "A.通过集群提供服务，具有高可靠性",
      "B.通过LVS提供七层负载均衡",
      "C.通过Tengine提供四层负载均衡",
      "D.负载均衡后端ECS实例数不得少于2"
    ],
    "answer": "A",
    "explanation": "通过集群提供服务,具有高可用性(也可以说是可靠性)，SLB后端的实例数量并不强制要求是2个及以上。",
    "category": "负载均衡"
  },
  {
    "id": 286,
    "type": "单选题",
    "title": "阿里云负载均衡服务SLB支持用户可以同时设置实例维度上的“后端服务器”、监听维度上的“虚拟服务器组”和“转发规则”，那么当用户流量经过负载均衡某端口时，关于SLB判断流量转发的顺序，以下说法正确的是<strong>____</strong>。",
    "options": [
      "A.先判断其是否能够匹配上某条“转发规则”，如果匹配，则将流量转发到该规则的后端服务器组上；",
      "B.先判断该监听上是否设置了虚拟服务器组，如何设置，那么将流量转发到该虚拟服务器组上；",
      "C.先判断是否有实例维度上的“后端服务器”，如果存在，那么即将流量转发到实例级别添加的各后端服务器中",
      "D.支持用户同时在这三个维度上的设置，但三者添加的服务器之间有约束关系，所以无需考虑转发顺序"
    ],
    "answer": "A",
    "explanation": "注意以下描述的首先和其次的顺序：当用户流量经过负载均衡某端口时，我们首先判断其是否能够匹配上某条“转发规则”，如果匹配，则将流量转发到该规则的后端服务器组上；若不匹配并且在该监听上设置了虚拟服务器组，那么将流量转发到该虚拟服务器组上；若用户没有在该监听上设置虚拟服务器组，即将流量转发到实例级别添加的各后端服务器中。",
    "category": "负载均衡"
  },
  {
    "id": 287,
    "type": "单选题",
    "title": "阿里云负载均衡SLB在四层（TCP）转发时，设置了会话保持，在会话保持的超时时间内，以下说法中正确的是<strong>____</strong>。",
    "options": [
      "A.来源IP地址相同的连接都会转发到同一台后端云服务器ECS实例上",
      "B.负载均衡SLB实例将自动以Session为单位进行转发，无需IP地址判断或者cookie信息辅助",
      "C.客户端的请求中带有负载均衡SLB实例设置的cookie信息，负载均衡SLB实例会根据cookie中的信息判断是否来自同一会话，如果是，则转发到相同的ECS实例",
      "D.采用testandset机制，负载均衡SLB实例先去检查后端ECS实例的内存中是否存在相同Session信息，如果某台ECS实例中存在，则转发至该ECS实例，如果所有ECS实例中都没有相关信息，则该请求被认为是某个Session的第一次连接，会按照转发规则转发给任意一台ECS实例"
    ],
    "answer": "A",
    "explanation": "负载均衡SLB在四层（TCP）转发是是基于源IP的会话保持。四层会话保持的最长时间是3600秒。",
    "category": "负载均衡"
  },
  {
    "id": 288,
    "type": "单选题",
    "title": "新建阿里云的专有网络VPC时会自动创建一个路由器，路由器自带1个路由表。路由表的操作中说法错误的是<strong>____</strong>。",
    "options": [
      "A.删除VPC时，系统会自动删除对应的路由表",
      "B.不支持创建和删除路由表",
      "C.每个路由器可以有多个路由表",
      "D.路由表的路由条目会影响VPC中的所有云产品实例"
    ],
    "answer": "C",
    "explanation": "路由器（VRouter）是专有网络的枢纽。作为专有网络中重要的功能组件，它可以连接VPC内的各个交换机，同时也是连接VPC和其他网络的网关设备。每个专有网络创建成功后，系统会自动创建一个路由器。每个路由器关联一张路由表。更多信息参见路由。参考链接：<a href=\"https://help.aliyun.com/document_detail/34217.html?spm=5176.11065259.1996646101.searchclickresult.7bd24885gu8yKH\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/34217.html?spm=5176.11065259.1996646101.searchclickresult.7bd24885gu8yKH</a>",
    "category": "网络"
  },
  {
    "id": 289,
    "type": "单选题",
    "title": "您在阿里云的华东1（杭州）跟华北2（北京）都创建了专有网络VPC，通过<strong>____</strong>可以最快速的把华东1（杭州）跟华北2（北京）的VPC通过内网连接起来实现两地云服务器ECS实例可以互相访问。",
    "options": [
      "A.VPN",
      "B.高速通道",
      "C.专线",
      "D.其他答案都对"
    ],
    "answer": "D",
    "explanation": "因为快速是相对的，高速通道、VPN以及专线的建立都是需要一定时间的。所以题目的意思不能说谁最快速，而是说怎么样能通过阿里云最快速实现这样的功能，所以三个都选。",
    "category": "网络"
  },
  {
    "id": 290,
    "type": "单选题",
    "title": "关于用户使用阿里云专有网络VPC产品的费用，以下说法中错误的是<strong><strong>__</strong></strong>。",
    "options": [
      "A.专有网络VPC是一个免费的网络容器",
      "B.VPC中使用的弹性公网IP是免费的",
      "C.交换机是免费的",
      "D.路由器是免费的"
    ],
    "answer": "B",
    "explanation": "弹性公网IP是收费的服务。",
    "category": "网络"
  },
  {
    "id": 291,
    "type": "单选题",
    "title": "在创建阿里云的云产品实例时，可以选择默认类型的专有网络VPC和交换机，这两项配置确定了专有网络类型的云产品创建时在相应地域和可用区下唯一的默认网络位置，与非默认的专有网络VPC和交换机之间的区别主要在于默认类型的VPC和交换机只能由阿里云为您创建。下列关于默认专有网络VPC的描述错误的是<strong><strong>_</strong></strong>。",
    "options": [
      "A.每个地域的默认专有网络VPC唯一",
      "B.默认专有网络VPC与非默认专有网络VPC的操作方式与规格限制不一致",
      "C.默认专有网络VPC由阿里云为您创建，您自行创建的均为非默认专有网络VPC",
      "D.默认专有网络VPC不占用阿里云为您分配的专有网络VPC配额"
    ],
    "answer": "B",
    "explanation": "默认专有网络与非默认专有网络的操作方式与规格限制一致。参考链接：<a href=\"https://www.alibabacloud.com/help/zh/docdetail/65402.htm\" target=\"_blank\" rel=\"noopener\">https://www.alibabacloud.com/help/zh/docdetail/65402.htm</a>",
    "category": "网络"
  },
  {
    "id": 292,
    "type": "单选题",
    "title": "您的应用部署在阿里云的云服务器ECS实例上，想自己采集指标做应用层面的监控。阿里云提供的云监控服务的<strong>____</strong>功能可以提供指标收集、聚合和报警的服务。",
    "options": [
      "A.自定义监控",
      "B.站点监控",
      "C.云服务监控",
      "D.云监控无法满足"
    ],
    "answer": "A",
    "explanation": "自定义监控中，用户可以针对自己关心的业务指标进行监控。参考链接：<a href=\"https://help.aliyun.com/document_detail/63767.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/63767.html</a>",
    "category": "监控"
  },
  {
    "id": 293,
    "type": "单选题",
    "title": "防DDoS攻击是阿里云的云盾最主要的功能之一，为了帮助客户抵御不同规模的网络攻击，云盾提供了多种抗DDoS攻击的产品，其中“DDoS基础防护”的开通方法是<strong>____</strong>。",
    "options": [
      "A.联系客户经理线下开通",
      "B.自动开通",
      "C.需要从管理控制台申请开通",
      "D.提交工单，24小时之内开通"
    ],
    "answer": "B",
    "explanation": "DDoS基础防护是在云产品购买后自动开通的，无需手动开通。",
    "category": "安全"
  },
  {
    "id": 294,
    "type": "单选题",
    "title": "用户A是公司的系统管理员，经常去上海出差，每当他在上海远程登录服务器时系统就会发出报警信息，提示“有人异地登录，请注意服务器安全”。通过<strong><strong>___</strong></strong>方法可以快速、自助解决这个问题。",
    "options": [
      "A.立即提交工单，咨询阿里云工程师",
      "B.向公司领导请求帮助",
      "C.登录阿里云管理控制台，在安骑士配置项里填加“常用登录地点”",
      "D.向朋友电话求助，他是业界有名的黑客高手"
    ],
    "answer": "C",
    "explanation": "题目中说的是系统管理员每次在上海出差时候远程登录服务器就会发出异地的报警信息，所以需要通过控制台的添加“常用登录地点”来解决这个报警信息的问题。",
    "category": "安全"
  },
  {
    "id": 295,
    "type": "单选题",
    "title": "虚拟化（英语：Virtualization）是云计算的底层结构。它是一种资源管理技术，是将计算机的各种实体资源，如服务器、网络、内存及存储等，予以抽象、转换后呈现出来，打破实体结构间的不可切割的障碍，使用户可以比原本的组态更好的方式来应用这些资源。虚拟化架构描述错误的是以下哪个？",
    "options": [
      "A.虚拟化技术可以将单个CPU模拟成多个CPU",
      "B.虚拟机中的操作系统和物理机上的操作系统有着本质的区别",
      "C.虚拟化软件层模拟出来的每台虚拟机都是一个完整的系统",
      "D.相比物理机，虚拟化可以提供更高的IT资源利用率和性能"
    ],
    "answer": "B",
    "explanation": "排除法，虚拟机中的操作系统和物理机上的操作系统没有本质的区别。",
    "category": "网络"
  },
  {
    "id": 296,
    "type": "单选题",
    "title": "B公司运营着一个手机APP应用商店，类似Apple的AppStore，创业初期所有的软件包都存储在云服务器ECS实例的数据盘上。 从上个月开始，公司做了大量的推广，下载量增长了200倍，用户覆盖范围也从之前的一个省扩展到了全国。为了节约存储和带宽成本，同时又能提高用户下载速度，B公司选择阿里云的<strong>__</strong>产品组合，可达到最佳效果。",
    "options": [
      "A.弹性伸缩(Auto Scaling)+云服务器ECS",
      "B.对象存储OSS和内容分发网络CDN",
      "C.对象存储OSS和弹性伸缩(Auto Scaling)",
      "D.对象存储OSS和云数据库RDS"
    ],
    "answer": "B",
    "explanation": "划重点：节约存储和带宽成本，使用对象存储OSS节省存储成本和带宽成本，提高用户下载速度，使用CDN来提高全国用户的下载速度。",
    "category": "其他"
  },
  {
    "id": 297,
    "type": "单选题",
    "title": "阿里云的云盾加密服务采用<strong>____</strong>机制来保证密钥的安全。",
    "options": [
      "A.符合国家密码管理局要求的算法",
      "B.符合银监会对密钥强度的要求",
      "C.防篡改硬件密码机",
      "D.国际通用密码算法"
    ],
    "answer": "A",
    "explanation": "加密服务是云上的数据安全加密解决方案。服务底层使用经国家密码管理局检测认证的硬件密码机。密码机的关键还是加密算法，题目主要问的是机制，所以选择国家密码管理局检测认证的加密算法。",
    "category": "安全"
  },
  {
    "id": 298,
    "type": "单选题",
    "title": "游戏行业有个明显的特点是业务流量很难预估，波动很大，例如今天上线1台云服务器ECS实例就足够处理所有的业务需求，明天可能就需要10台云服务器ECS实例来处理所有的需求。这样的场景下，您不知道所需的云服务器ECS实例的数量，准备的少无法应对业务峰值，投入的多又造成大量的资源浪费。在阿里云上，您认为应对游戏行业这种场景的最佳阿里云产品的组合方式是<strong>____</strong>。",
    "options": [
      "A.负载均衡SLB+云服务器ECS+云数据库RDS+弹性伸缩Auto Scaling",
      "B.负载均衡SLB+云服务器ECS+云数据库RDS",
      "C.云服务器ECS+弹性伸缩Auto Scaling",
      "D.云服务器ECS"
    ],
    "answer": "A",
    "explanation": "题目中游戏行业的服务，1. 需要云服务器ECS来搭建和运行网站服务；2. 需要云数据库RDS来保存用户数据；3. 需要弹性伸缩Auto Scaling跟库业务报警来实现ECS的弹性增加或减少；4. 需要负载均衡SLB来实现多个ECS之间的请求分发。",
    "category": "其他"
  },
  {
    "id": 299,
    "type": "单选题",
    "title": "如果您在创建Windows操作系统的阿里云的云服务器ECS实例时选择了数据盘，在登录实例后要完成<strong>____</strong>操作才可以正常使用该数据盘。",
    "options": [
      "A.格式化数据盘",
      "B.挂载数据盘",
      "C.对数据盘进行多分区配置",
      "D.不需要任何操作"
    ],
    "answer": "A",
    "explanation": "如果在创建Windows实例时配了数据盘，您需要先格式化并分区数据盘后才能正常使用数据盘。参考链接：<a href=\"https://help.aliyun.com/document_detail/25418.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25418.html</a>",
    "category": "其他"
  },
  {
    "id": 300,
    "type": "单选题",
    "title": "ECS服务器会对每个访问的请求进行身份验证，以下哪一个是用于标识访问者身份的？",
    "options": [
      "A.Access Key Secret",
      "B.RequestId",
      "C.Access Key Id",
      "D.User name"
    ],
    "answer": "C",
    "explanation": "注意不是Access Key Secret，Access Key Secret是用来\b鉴权校验的，Access Key Id是用来区分用户的。阿里云 access key ID 和 access key secret 是您访问阿里云API的唯一凭证。Access key ID 是类似身份的标识，而 access key secret 的作用是签名您的访问参数，以防被篡改。Access key secret 类似您的登录密码，不要向任何人泄漏。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/43189.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/43189.html</a>",
    "category": "其他"
  },
  {
    "id": 301,
    "type": "单选题",
    "title": "阿里云对象存储OSS是阿里云对外提供的海量、安全、低成本、高可靠 的云存储服务。与自建存储对比，OSS在可靠性、安全、成本和数据处理能力等几个方面都具有优势。以下<strong><strong>_</strong></strong>是OSS在可靠性方面表现出来的优势。",
    "options": [
      "A.受限于硬件可靠性,易出问题,一旦出现磁盘坏道,容易出现不可逆转的数据丢失",
      "B.数据可靠性不低于 99.99999999%。数据自动多重冗余备份",
      "C.数据需要客户手工备份、耗时、耗力",
      "D.提供多种鉴权和授权机制及白名 单、防盗链、主子账号功能"
    ],
    "answer": "B",
    "explanation": "题目中问的是OSS在可靠性方面表现出来的优势，所以选择”数据可靠性不低于 99.99999999%。数据自动多重冗余备份”，”提供多种鉴权和授权机制及白名 单、防盗链、主子账号功能”是OSS在安全性方面表现出来的优势。",
    "category": "安全"
  },
  {
    "id": 302,
    "type": "单选题",
    "title": "在传统IT解决方案中，要想对海量数据存储实现高于99.99999999%的数据可靠性，并且在单台物理硬件发生损坏的情况下不影响正常服务，至少需要购买多台专业的存储服务器，配合双电源+双控制器+磁盘冗余+故障报警等功能才有可能完成。阿里云的<strong><strong>____</strong></strong>服务天然就具备这个特性，即开即用。",
    "options": [
      "A.负载均衡SLB",
      "B.云数据库RDS",
      "C.对象存储OSS",
      "D.内容分发网络CDN"
    ],
    "answer": "C",
    "explanation": "划重点：对海量数据存储实现高于99.99999999%的数据可靠性。所以需要使用对象存储OSS服务。",
    "category": "其他"
  },
  {
    "id": 303,
    "type": "单选题",
    "title": "阿里云对象存储OSS出于安全考虑，直接在浏览器地址栏输入OSS通信域名(oss.aliyuncs.com)，如访问：<a href=\"http://bucketname.oss.aliyuncs.com/a.jpg\" target=\"_blank\" rel=\"noopener\">http://bucketname.oss.aliyuncs.com/a.jpg</a> (文件类型包括：txt、html、htm、图片格式、视频格式、音频格式等安全敏感文件)，均限制在浏览器客户端以“另存为”下载的方式打开文件。若需要直接在浏览器打开这类文件，需要如何配置？",
    "options": [
      "A.在OSS的安全管理菜单中修改ACL，允许浏览器直接访问，设置时需要短信验证",
      "B.绑定用户自定义的域名（可以是三级域名）",
      "C.在OSS管理控制台&gt;Object管理中，修改文件的HTTP头信息",
      "D.OSS不直接提供这样的功能，需要二次开发"
    ],
    "answer": "B",
    "explanation": "如果您使用OSS自带域名，如<a href=\"http://bucketname.oss.aliyuncs.com/objcet访问静态文件时（文件类型包括：txt、html、htm、图片格式、视频格式、音频格式等），均限制在浏览器中以“另存为”下载的方式打开文件，而不能直接浏览该文件。因此您需要将自定义的域名访问绑定在属于自己的Bucket上面，即CNAME。域名绑定成功后，为了使用域名正常访问\" target=\"_blank\" rel=\"noopener\">http://bucketname.oss.aliyuncs.com/objcet访问静态文件时（文件类型包括：txt、html、htm、图片格式、视频格式、音频格式等），均限制在浏览器中以“另存为”下载的方式打开文件，而不能直接浏览该文件。因此您需要将自定义的域名访问绑定在属于自己的Bucket上面，即CNAME。域名绑定成功后，为了使用域名正常访问</a> OSS，还需要添加 CNAME 记录指向存储空间对应的外网域名。参考链接：<a href=\"https://www.alibabacloud.com/zh/gettingstarted/projects/hostastaticwebsiteonoss\" target=\"_blank\" rel=\"noopener\">https://www.alibabacloud.com/zh/gettingstarted/projects/hostastaticwebsiteonoss</a>",
    "category": "安全"
  },
  {
    "id": 304,
    "type": "单选题",
    "title": "某社区网站每天的PV量高达2000万次，应用程序部署在阿里云的云服务器ECS实例上，日志记录在单台ECS实例的数据盘。现在业务部门提出新的需求，网站的访问日志要保存24个月，并且在需要的时候可以按照日期快速下载，单台ECS实例的数据盘扩到最大容量，可以保存存三个月的日志数据。您认为在该系统上增加阿里云的<strong>___</strong>产品可以一次性解决日志的保存问题。",
    "options": [
      "A.对象存储OSS",
      "B.归档存储（Archive Storage）",
      "C.云数据库RDS",
      "D.内容分发网络CDN"
    ],
    "answer": "A",
    "explanation": "划重点：保存存三个月的日志数据且支持快速下载，所以需要用到OSS。",
    "category": "其他"
  },
  {
    "id": 305,
    "type": "单选题",
    "title": "在使用阿里云负载均衡SLB时后端服务器可以设置主备服务器组,当主机工作正常时，流量将直接走主机；当主机宕机时，流量将走到备机。关于主备服务器组支持的协议，以下说法正确的是<strong>____</strong>。",
    "options": [
      "A.主备服务器组只支持四层监听（TCP和UDP协议）",
      "B.主备服务器组只支持七层监听（HTTP和HTTPS协议）",
      "C.主备服务器组只支持七层监听（HTTP协议）",
      "D.主备服务器组支持四层监听（TCP和UDP协议）和七层监听（HTTP协议）"
    ],
    "answer": "A",
    "explanation": "主备服务器组是在监听维度上维护的，并且只支持四层监听。参考链接：<a href=\"https://help.aliyun.com/document_detail/52796.html?spm=5176.10695662.1996646101.searchclickresult.3b535647Z715JJ\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/52796.html?spm=5176.10695662.1996646101.searchclickresult.3b535647Z715JJ</a>",
    "category": "负载均衡"
  },
  {
    "id": 306,
    "type": "单选题",
    "title": "阿里云负载均衡服务SLB支持配置域名或者URL转发策略，将来自不同域名或者URL的请求转发给不同的ECS处理，关于域名或者URL转发策略支持的协议，以下说法正确的是<strong>____</strong>。",
    "options": [
      "A.只有4层监听（TCP和UDP协议）支持配置转发策略",
      "B.只有7层监听（HTTP协议）支持配置转发策略",
      "C.只有7层监听（HTTP和HTTPS协议）支持配置转发策略",
      "D.4层监听（TCP和UDP协议）和7层监听（HTTP和HTTPS协议）都支持配置转发策略"
    ],
    "answer": "C",
    "explanation": "只有7层监听（HTTPS/HTTP协议）支持配置URL转发策略。参考链接：<a href=\"https://help.aliyun.com/document_detail/85955.html?spm=5176.10695662.1996646101.searchclickresult.45d73c96TRVz8v\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/85955.html?spm=5176.10695662.1996646101.searchclickresult.45d73c96TRVz8v</a>",
    "category": "负载均衡"
  },
  {
    "id": 307,
    "type": "单选题",
    "title": "使用阿里云的负载均衡SLB实例时，可以通过健康检查来判断后端云服务器ECS实例的可用性。针对7层服务（HTTP协议），负载均衡SLB实例通过<strong>____</strong>来判断云服务器ECS实例是否可用。",
    "options": [
      "A.端口检查是否超时",
      "B.云服务器ECS实例的服务器端返回的报文内容中的特殊字符",
      "C.云服务器ECS实例的服务器端返回的状态码",
      "D.云服务器ECS实例的服务器端返回的字节数"
    ],
    "answer": "C",
    "explanation": "四层是检查端口，七层是检查服务器端返回的状态码。",
    "category": "负载均衡"
  },
  {
    "id": 308,
    "type": "单选题",
    "title": "使用阿里云的负载均衡SLB实例时，可以通过健康检查来判断后端云服务器ECS实例的可用性。针对4层服务（TCP协议），负载均衡SLB实例通过<strong>____</strong>来判断云服务器ECS实例是否可用。",
    "options": [
      "A.端口检查是否超时",
      "B.云服务器ECS实例的服务器端返回的报文内容中的特殊字符",
      "C.云服务器ECS实例的服务器端返回的状态码",
      "D.云服务器ECS实例的服务器端返回的字节数"
    ],
    "answer": "A",
    "explanation": "四层是检查端口，七层是检查服务器端返回的状态码。",
    "category": "负载均衡"
  },
  {
    "id": 309,
    "type": "单选题",
    "title": "使用集群是解决高并发，海量数据的通常手段，对于这种类型的网站而言，不管多么强大的服务器都满足不了持续增长的业务需求。这种情况下，需要增加服务器来分担原有系统的压力,我们可以开通阿里云上哪个服务来实现该请求的分发？",
    "options": [
      "A.ECS",
      "B.SLB",
      "C.RDS",
      "D.DRDS"
    ],
    "answer": "B",
    "explanation": "划重点：来实现该请求的分发，所以需要负载均衡SLB。",
    "category": "其他"
  },
  {
    "id": 310,
    "type": "单选题",
    "title": "您所在的公司半年前在自建机房内刚刚构建了一套财务系统，计划上线的客户管理系统准备基于阿里云的产品构建，同时财务系统与客户管理系统之间需要通过内网互联互通，<strong>____</strong>方案可以最大限度的使用已有的系统投资并满足新的业务需求。",
    "options": [
      "A.基于经典网络的云产品实例构建客户管理系统，结合专线来实现两个系统之间的内网互联互通",
      "B.基于阿里云专有网络VPC购买云产品实例来构建客户管理系统，不需要任何额外的操作，就可以直接实现两个系统的安全内网互联",
      "C.将财务系统迁移到阿里云上",
      "D.基于阿里云专有网络VPC购买云产品实例来构建客户管理系统，结合专线或者VPN，实现两个系统之间的内网互联互通"
    ],
    "answer": "D",
    "explanation": "划重点：同时财务系统与客户管理系统之间需要通过内网互联互通，就是阿里云连接传统机房IDC，可以选择专线或者VPN连接。",
    "category": "其他"
  },
  {
    "id": 311,
    "type": "单选题",
    "title": "阿里云的专有网络VPC下的云服务器ECS实例如果绑定了EIP，就可以实现该服务器ECS实例对公网的服务。出于安全的考虑要限制某台绑定了EIP的云服务器ECS实例的3389远程端口的访问，可以通过<strong>____</strong>方法来实现。",
    "options": [
      "A.在这台云服务器实例的安全组规则中添加一条内网规则，拒绝TCP协议来自3389端口的入方向访问",
      "B.在这台云服务器实例的安全组规则中添加一条外网规则，拒绝TCP协议来自3389端口的入方向访问",
      "C.在这台云服务器实例的安全组规则中添加一条内网规则，拒绝TCP协议来自3389端口的出方向访问",
      "D.在这台云服务器实例的安全组规则中添加一条外网规则，拒绝TCP协议来自3389端口的出方向访问"
    ],
    "answer": "A",
    "explanation": "在控制台里面，专用网络VPC下面的ECS，不管是否绑定了EIP，在设置安全组的时候，只可以设置内网规则，外网规则是不可以选的。因为对于其来说，内网规则等同于外网规则，所以不要被题目中的”对公网的服务”误导。所以此题应该选择添加一条内网规则，拒绝TCP协议来自3389端口的入方向访问。",
    "category": "安全"
  },
  {
    "id": 312,
    "type": "单选题",
    "title": "如果您希望在阿里云专有网络VPC内创建不同可用区的云服务器ECS实例，获得更高的容灾能力，以下<strong>____</strong>方式是可行的。",
    "options": [
      "A.可以通过将处于不同可用区的云服务器ECS实例部署到同一台交换机下，从而实现多可用区容灾",
      "B.可以通过将云服务器ECS实例部署在处于不同可用区的交换机下，从而实现多可用区容灾",
      "C.可以通过将云服务器ECS实例部署在处于不同可用区的路由器下，从而实现多可用区容灾",
      "D.可以通过将处于不同地域的云服务器ECS实例部署到同一台路由器下，从而实现多地域的多可用区容灾"
    ],
    "answer": "B",
    "explanation": "云服务器云服务器是关联在交换机下面的，VPC下面可以包含同一个地域多个不同可用区的交换机，所以想具备容灾的能力，可以考虑ECS在一个VPC下面跨交换机部署。是关联在交换机下面的，VPC下面可以包含同一个地域多个不同可用区的交换机，所以想具备容灾的能力，可以考虑ECS在一个VPC下面跨交换机部署。",
    "category": "网络"
  },
  {
    "id": 313,
    "type": "单选题",
    "title": "在互联网上存在着各种以盈利为目的的黑客组织，他们控制着大量的服务器资源，可以随时对目标服务器发起网络攻击，其中有一种很常见的，也是破坏性比较强的攻击，可以让目标服务器的资源耗尽，使正常客户无法连接到服务器。以下<strong><strong>___</strong></strong>属于此类攻击。",
    "options": [
      "A.DDoS攻击",
      "B.XSS攻击",
      "C.SQL注入",
      "D.WebShell攻击"
    ],
    "answer": "A",
    "explanation": "划重点：破坏性比较强的攻击，可以让目标服务器的资源耗尽，使正常客户无法连接到服务器。所以描述的是DDoS攻击。",
    "category": "网络"
  },
  {
    "id": 314,
    "type": "单选题",
    "title": "阿里云的云监控产品的监控数据可以采用<strong><strong>___</strong></strong>方式下载。",
    "options": [
      "A.从管理控制台直接下载",
      "B.通过OpenAPI下载",
      "C.只能查看报表，无法下载",
      "D.支持管理控制台和OpenAPI两种方式下载"
    ],
    "answer": "C",
    "explanation": "目前云监控的数据只支持在控制台或者调用接口查看，目前不支持导出下载数据。",
    "category": "监控"
  },
  {
    "id": 315,
    "type": "单选题",
    "title": "日常工作和生活中，很多用户在不同网站使用的是相同的帐号和密码，因此黑客可以通过获取用户在A网站的账户从而尝试登录B网址，这种攻击行为被称作“撞库攻击”。当您在云盾态势感知中发现有撞库攻击的威胁时，应该采取<strong><strong>___</strong></strong>应对。",
    "options": [
      "A.立即修改云服务器ECS实例的所有密码，并检查登录日志",
      "B.立即修改数据库密码，新密码采用8位以上的复杂密码",
      "C.通知自己业务平台的所有用户立即修改密码，并通过技术手段杜绝简单密码",
      "D.撞库攻击产生的风险由用户自己负责，不需要做任何操作"
    ],
    "answer": "C",
    "explanation": "当您在云盾态势感知中发现有撞库攻击的威胁时，说明黑客很有可能已经知道了网站用户的用户名和密码，这个时候应该紧急通知自己业务平台的所有用户修改密码，并加强密码规则。此时修改数据库密码是没有作用的。",
    "category": "安全"
  },
  {
    "id": 316,
    "type": "单选题",
    "title": "硬件虚拟化是使用软件的方法重新定义划分IT资源，可以实现IT资源的动态分配、灵活调度、跨域共享，提高IT资源利用率，是云计算的基础技术。如果一个虚拟机因为错误而崩溃，同一物理主机上的其他虚拟机不会受到影响，这是描述虚拟化技术的哪种特性？",
    "options": [
      "A.隔离性",
      "B.兼容性",
      "C.独立于硬件",
      "D.统一性"
    ],
    "answer": "A",
    "explanation": "划重点：如果一个虚拟机因为错误而崩溃，同一物理主机上的其他虚拟机不会受到影响。所以描述的是虚拟化技术的隔离性。",
    "category": "其他"
  },
  {
    "id": 317,
    "type": "单选题",
    "title": "G公司开发了一款购物的APP，全部系统都基于阿里云的产品构建，用到了华北1(青岛)地域的云服务器ECS实例和对象存储OSS，静态网页和图片全部放在OSS中。上线后在中国大陆范围内访问速度良好。最近公司想拓展美国市场，希望美国用户使用APP时也能实现较快的速度。G公司使用阿里云的<strong><strong>_</strong></strong>方案是最佳的。",
    "options": [
      "A.启用华东1(杭州)和华北2(北京)双地域的对象存储OSS和内容分发网络CDN",
      "B.启用美西（硅谷）地域的对象存储OSS和内容分发网络CDN",
      "C.启用弹性伸缩(Auto Scaling)和更多的云服务器ECS实例",
      "D.启用弹性伸缩(Auto Scaling)和内容分发网络CDN"
    ],
    "answer": "B",
    "explanation": "题目中需要美国用户使用APP时也能实现较快的速度，所以需要在美国地域开启相应的CDN功能，所以选择在美西（硅谷）地域的对象存储OSS和内容分发网络CDN。",
    "category": "OSS"
  },
  {
    "id": 318,
    "type": "单选题",
    "title": "阿里云弹性伸缩(Auto Scaling)的冷却时间是指在同一个伸缩组内，当有一个伸缩活动被成功执行后的一段锁定时间内，该伸缩组不执行其他的伸缩活动。以下关于冷却时间的开始计时的时间点的说法正确的是？",
    "options": [
      "A.当伸缩组加入或移出多个ECS实例时，最后一个ECS实例加入或移出完成后，整个伸缩组冷却时间才开始计时",
      "B.当伸缩组加入或移出多个ECS实例时，第一个ECS实例加入或移出完成后，整个伸缩组冷却时间才开始计时",
      "C.伸缩活动结束后，冷却时间马上开始计时",
      "D.伸缩活动开始后，冷却时间马上开始计时"
    ],
    "answer": "A",
    "explanation": "伸缩活动中，最后一个ECS实例加入或移出完成后，整个伸缩组冷却时间才开始计时，伸缩活动结束并不代表最后一个ECS实例已经加入或移出完成。",
    "category": "监控"
  },
  {
    "id": 319,
    "type": "单选题",
    "title": "阿里云的云盾<strong><strong>_</strong></strong>是通过领先的行为收集技术和机器学习模型，解决用户的WEB应用和手机APP的账号、活动、支付等关键业务环节存在的欺诈威胁，最终实现降低企业损失。比如：帮助客户发现代金券套现行为，恶意刷单行为，恶意注册片区新用户奖励的行为等。",
    "options": [
      "A.态势感知",
      "B.数据风控",
      "C.绿网",
      "D.加密服务"
    ],
    "answer": "B",
    "explanation": "数据风控由阿里聚安全提供，是基于阿里大数据计算能力，通过业内领先的风险决策引擎，解决企业账号、活动、交在的易等关键业务环节存欺诈威胁，降低企业经济损失。",
    "category": "安全"
  },
  {
    "id": 320,
    "type": "单选题",
    "title": "云产品的可用区指的是一套独立的基础设施，不同的可用区之间基础设施（网络，电力和空调等）相互独立，即一个可用区出现基础设施故障不影响另外一个可用区。下列关于阿里云ECS的可用区说法正确的是？",
    "options": [
      "A.可用区是在用户购买时指定的，购买后不支持更改",
      "B.可用区之间内网互通",
      "C.可用区内网络延时小于1s",
      "D.若要提高应用的容灾能力则可以将实例创建在同一可用区"
    ],
    "answer": "A",
    "explanation": "只有在同一个地域前提下，可用区之间的内网才是互通的。可用区是指在同一地域内，电力和网络互相独立的物理区域。所以云产品一旦购买了，不支持更改可用区。",
    "category": "网络"
  },
  {
    "id": 321,
    "type": "单选题",
    "title": "阿里云的云服务器ECS产品的应用非常广泛，既可以单独的作为Web服务器，也可以与其他阿里云产品配合提供多媒体解决方案。在多媒体、大流量的APP或网站应用场景下，云服务器ECS实例与阿里云的<strong>____</strong>产品搭配，可以存储静态图片、视频、下载包等来降低存储费用。",
    "options": [
      "A.对象存储",
      "B.云数据库",
      "C.弹性伸缩",
      "D.块存储"
    ],
    "answer": "A",
    "explanation": "划重点：存储静态图片、视频、下载包，所以选择OSS",
    "category": "其他"
  },
  {
    "id": 322,
    "type": "单选题",
    "title": "阿里云的对象存储OSS可以与云服务器ECS实例协同来实现文件存储的功能。下列关于云服务器ECS实例与OSS之间的关系描述正确的是<strong>____</strong>。",
    "options": [
      "A.华东1（杭州）的云服务器ECS实例与华北1（青岛）OSS之间可以通过内网进行访问",
      "B.云服务器ECS实例与OSS之间的请求次数，不分内外网都会计费",
      "C.其他都不对"
    ],
    "answer": "B",
    "explanation": "文档原话，记住了，走内网流量是不收费的，但是每次的请求次数还是收费。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/39679.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39679.html</a>",
    "category": "OSS"
  },
  {
    "id": 323,
    "type": "单选题",
    "title": "创建阿里云弹性伸缩(Auto Scaling)伸缩组的时候，可以配置“移出策略”。现将移出策略配置为“最早伸缩配置对应的实例”，以下说法中正确的是？",
    "options": [
      "A.只移除通过弹性规则创建的ECS实例，并且是按照伸缩配置创建ECS实例的时间先后顺序优先移出先建的ECS实例",
      "B.根据ECS实例的创建时间判断，优先移出先建的ECS实例",
      "C.只移除手工添加的ECS实例，并且是按照伸缩配置创建ECS实例的时间先后顺序优先移出先建的ECS实例",
      "D.根据ECS实例添加到伸缩组的时间判断，优先移出先添加ECS实例"
    ],
    "answer": "A",
    "explanation": "顾名思义，最先的，伸缩配置创建的实例。",
    "category": "监控"
  },
  {
    "id": 324,
    "type": "单选题",
    "title": "阿里云OSS产品的账单费用由三部分组成，包括：存储空间费用、流量费用和OSS API请求费用。其中流量费用是根据用户使用OSS的下行流量多少收费，上行流量和通过内网访问的流量免费，以下使用OSS的场景中哪一个是不产生OSS流量费用的？",
    "options": [
      "A.在阿里云ECS上静态网站直接引用了OSS中的图片，该网站来自公网的访问量是每天1000次",
      "B.某系管理员将OSS用作数据备份，从ECS上每天晚上用内网上传200G的数据到OSS",
      "C.某淘宝卖家为了提高店铺的访问速度，将店铺中的所有图片上传到了OSS，然后在店铺中直接引用",
      "D.管理员在自己的办公室内浏览自己OSS Bucket里的图片"
    ],
    "answer": "B",
    "explanation": "只有公网下载（下行）才会产生流量费用，所以此题内网上传文件到OSS，是不会产生流量费用的的。",
    "category": "OSS"
  },
  {
    "id": 325,
    "type": "单选题",
    "title": "阿里云对象存储OSS里存储的文件可以进行分享和下载，当文件所在的Bucket的读写权限为“私有”时，OSS分享链接采用的安全机制是<strong><strong>__</strong></strong>。",
    "options": [
      "A.在管理控制台中获取文件访问URL时设置分享链接的访问密码，访客下载文件时凭密码访问",
      "B.“私有”权限的文件对外享时，访客只能看到文件的一部分内容（前500K）",
      "C.在管理控制台中获取文件访问URL时设置分享链接有效的时间，超过设定时间就无法下载",
      "D.“私有”权限的文件对外分享时，系统会检查文件的大小，超过2M的文件不允许分享"
    ],
    "answer": "C",
    "explanation": "出于安全考虑，目前控制台针对私有bucket的获取URL链接签名操作做了优化，使用的AccessKey是临时生成的密钥对，主账号用户最长有效时间是64800秒（18小时），RAM子账号用户以及sts用户最长有效时间是3600秒（1小时），超时后链接就无法访问了。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/39530.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39530.html</a>",
    "category": "安全"
  },
  {
    "id": 326,
    "type": "单选题",
    "title": "阿里云负载均衡SLB实例中的后端服务器ECS实例需要设置权重，可以给对外服务能力更强的ECS实例设置更大的权重，这些ECS实例就会有机会处理更多的访问请求。在提供稳定服务的同时，充分的利用了已有资源。如果将一台ECS实例的权重设置为0，以下说法正确的是<strong>____</strong>。",
    "options": [
      "A.该ECS实例不会再得到负载均衡SLB实例分发的外部访问请求",
      "B.所有外部访问请求都被分发到这台ECS实例上",
      "C.该ECS实例会被认为状态异常，负载均衡SLB会把它移出后端服务器池",
      "D.负载均衡SLB会分发外部请求给这台ECS实例，分发量的大小等于总请求数除以后端服务器ECS实例个数"
    ],
    "answer": "A",
    "explanation": "将负载均衡后端 ECS 的权重置零，新发起的业务请求是无法经负载均衡转发到该服务器的，健康检查相应的会显示异常。所以该ECS实例不会再得到负载均衡SLB实例分发的外部访问请求。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/39492.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39492.html</a>",
    "category": "负载均衡"
  },
  {
    "id": 327,
    "type": "单选题",
    "title": "您需要进行阿里云的云服务器ECS实例的系统盘更换操作之前,无需停止ECS实例。系统盘更换之后,ECS实例数据盘的数据不会受到影响。",
    "options": [
      "A.正确",
      "B.错误"
    ],
    "answer": "B",
    "explanation": "更换云服务器ECS实例的系统盘需要先停止该云服务器，所以题目中说的无需停止是不争正确的，系统盘更换之后，ECS实例数据盘的数据不会受到影响。",
    "category": "其他"
  },
  {
    "id": 328,
    "type": "单选题",
    "title": "阿里云的弹性伸缩主要可以提供的功能，下面说法错误的是？",
    "options": [
      "A.根据客户业务需求横向扩展ECS实例的容量，即自动增加和减少ECS实例，数量是有限制的。",
      "B.支持SLB负载均衡配置：在增加或减少ECS实例时，自动向SLB实例中添加或移除相应的ECS实例",
      "C.支持RDS访问白名单：在增加或减少ECS实例时，自动向RDS访问白名单中添加或移出该ECS实例的IP",
      "D.多模式兼容，可同时配置定时、动态、自定义、固定、健康模式，可通过API方便对接外在监控系统"
    ],
    "answer": "A",
    "explanation": "弹性伸缩是可以根据客户业务需求横向扩展ECS实例的容量，即自动增加和减少ECS实例，但是伸缩组内不限制ECS实例的数量。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/25969.html?spm=a2c4g.11186631.2.12.714622dbpX9coK\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/25969.html?spm=a2c4g.11186631.2.12.714622dbpX9coK</a>",
    "category": "监控"
  },
  {
    "id": 329,
    "type": "单选题",
    "title": "云监控的http提交指令是哪一个？",
    "options": [
      "A.post",
      "B.copy",
      "C.write",
      "D.put"
    ],
    "answer": "A",
    "explanation": "云监控的http提交指令为post。",
    "category": "监控"
  },
  {
    "id": 330,
    "type": "单选题",
    "title": "下面哪种镜像可以进行复制？",
    "options": [
      "A.自定义镜像",
      "B.公共镜像",
      "C.镜像市场镜像",
      "D.共享的镜像"
    ],
    "answer": "A",
    "explanation": "复制镜像仅适用于自定义镜像。如果您需要复制其他类型的镜像，可先使用镜像创建实例，再使用该实例创建自定义镜像。然后，复制该自定义镜像。参考链接：<a href=\"https://help.aliyun.com/document_detail/25462.html?spm=5176.10695662.1996646101.searchclickresult.396d518dXjkN3T\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25462.html?spm=5176.10695662.1996646101.searchclickresult.396d518dXjkN3T</a>",
    "category": "其他"
  },
  {
    "id": 331,
    "type": "单选题",
    "title": "F公司新推出一款手机APP，将安装包链接挂在公司的官网（基于云服务器ECS实例）进行下载（安装包大小：6Mb），上线前两个月下载速度还能接受。 自从上周公司在CCTV做了一次广告后，下载量持续爆增，不仅用户体验下降了，官网ECS实例的带宽成本也急剧上升。F公司可以选择阿里云的<strong>____</strong>产品组合，同时解决下载速度和带宽成本的问题。",
    "options": [
      "A.对象存储OSS和内容分发网络CDN",
      "B.对象存储OSS和弹性伸缩(Auto Scaling)",
      "C.对象存储OSS和云数据库RDS",
      "D.弹性伸缩(Auto Scaling)和云服务器ECS实例"
    ],
    "answer": "A",
    "explanation": "题目需要同时解决下载速度和带宽成本的问题，所以需要将APP存储到对象存储OSS中结合内容分发CDN来解决下载速度和带宽的问题。",
    "category": "其他"
  },
  {
    "id": 332,
    "type": "单选题",
    "title": "您在阿里云购买了一台云服务器ECS实例，部署好Python环境后，通过<strong><strong>___</strong></strong>能最简单快捷的监控Python进程是否持续运行，当进程不存在时发出报警信息。",
    "options": [
      "A.自己写脚本监控",
      "B.使用ECS监控中的进程监控",
      "C.使用站点监控",
      "D.去ECS控制台查看"
    ],
    "answer": "B",
    "explanation": "题目中要求最简单查看Python进行是否在运行，所以最简单是通过云监控控制台直接查看。",
    "category": "监控"
  },
  {
    "id": 333,
    "type": "单选题",
    "title": "阿里云的云盾<strong>____</strong>是通过领先的行为收集技术和机器学习模型，解决用户的WEB应用和手机APP的账号、活动、支付等关键业务环节存在的欺诈威胁，最终实现降低企业损失。比如:帮助客户发现代金券套现行为，恶意刷单行为、恶意注册骗取新用户奖励的行为等。",
    "options": [
      "A.态势感知",
      "B.数据风控",
      "C.内容安全（原名：绿网）",
      "D.加密服务"
    ],
    "answer": "B",
    "explanation": "数据风控由阿里聚安全提供，是基于阿里大数据计算能力，通过业内领先的风险决策引擎，解决企业账号、活动、交在的易等关键业务环节存欺诈威胁，降低企业经济损失。",
    "category": "安全"
  },
  {
    "id": 334,
    "type": "单选题",
    "title": "在使用阿里云DDoS高防IP时，CNAME配置非常简单，只需要配一条DNS记录就可以启用。",
    "options": [
      "A.正确",
      "B.错误"
    ],
    "answer": "A",
    "explanation": "CNAME接入模式更加方便，您只需要在域名解析服务商处（如万网云解析或者DNSPod）修改一次解析配置即可生效，实现零部署、零运维。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/40532.html?spm=a2c4g.11186623.6.640.4b465cd5U9yD4Q\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/40532.html?spm=a2c4g.11186623.6.640.4b465cd5U9yD4Q</a>",
    "category": "其他"
  },
  {
    "id": 335,
    "type": "单选题",
    "title": "在阿里云的云盾的网络防护体系中，有一种服务默认为所有客户开通，可提供最高5G以下的小规模DDoS防御功能。该项服务的名称是<strong>____</strong>。",
    "options": [
      "A.态势感知",
      "B.WAF防火墙",
      "C.DDoS基础防护",
      "D.DDoS高防IP"
    ],
    "answer": "C",
    "explanation": "云盾的DDoS基础防护提供免费的5G以下的防DDoS攻击能力。",
    "category": "安全"
  },
  {
    "id": 336,
    "type": "单选题",
    "title": "交换机，是组成 VPC 网络的基础网络设备。它可以连接不同的云产品实例。在 VPC 网络内创建云产品实例的时候，必须指定云产品实例所在的交换机。下面关于交换机说法错误的是?",
    "options": [
      "A.VPC 的交换机，是一个 3 层交换机，不支持 2 层广播和组播;",
      "B.只有当 VPC 的状态为 Available 时，才能创建新的交换机;",
      "C.交换机不支持并行创建，一个交换机创建成功之后，才能够创建下一个;",
      "D.交换机创建完成之后，无法修改 CIDRBlock;",
      "E.删除交换机时，该交换机所连接的云产品实例也一同删除;"
    ],
    "answer": "E",
    "explanation": "删除交换机之前，必须先删除目标交换机所连接的云产品实例。",
    "category": "网络"
  },
  {
    "id": 337,
    "type": "单选题",
    "title": "BGP(边界网关协议)主要用于互联网AS(自治系统)之间的互联，BGP的最主要功能在于控制路由的传播和选择最好的路由，BGP线路可有效避免不同运营商之间网络访问慢的问题。",
    "options": [
      "A.正确",
      "B.错误"
    ],
    "answer": "A",
    "explanation": "边界网关协议，简称BGP，主要用于互联网AS（自治系统）之间的互联。BGP协议的最主要功能在于控制路由的传播和选择最好的路由。使用BGP高防可以解决跨运营商访问慢、部分小运营商访问不稳定的情况。这个是文档的原话。",
    "category": "网络"
  },
  {
    "id": 338,
    "type": "单选题",
    "title": "阿里云弹性伸缩(Auto Scaling) 的一个伸缩活动在12：00执行完成，设置的冷却时间是15分钟。假如这时用户停用再启用伸缩组，在12：05伸缩组完成启动，如果在12：10云监控触发伸缩活动，当前伸缩组将如何处理该请求？",
    "options": [
      "A.接受执行该请求，无需等待",
      "B.仍需等待5分钟后执行",
      "C.仍需等待10分钟后执行",
      "D.仍需等待15分钟后执行"
    ],
    "answer": "A",
    "explanation": "停用伸缩组以后，之前的冷却时间即失效。所以后面伸缩活动不会受到冷却时间的影响。参考链接：<a href=\"https://help.aliyun.com/document_detail/25912.html?spm=5176.10695662.1996646101.searchclickresult.490817e5F4EzCY\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25912.html?spm=5176.10695662.1996646101.searchclickresult.490817e5F4EzCY</a>",
    "category": "监控"
  },
  {
    "id": 339,
    "type": "单选题",
    "title": "阿里云的云盾加密服务通过在阿里云上使用经国家密码管理局检测认证的硬件密码机，帮助用户满足数据安全方面的监管合规要求，保护云上业务数据的隐私性和机密性。管理云盾加密服务的密钥时，必须通过<strong><strong>___</strong></strong>方式的认证。",
    "options": [
      "A.身份卡(USB Key)",
      "B.阿里云官网帐号的AK",
      "C.用户名和密码",
      "D.用户自己上传的SSL证书"
    ],
    "answer": "A",
    "explanation": "所有的密钥管理都必须依赖身份认证卡（USB key），请务必妥善保管身份卡。如身份认证卡（USB key）丢失，阿里云也无法恢复。参考链接：<a href=\"https://help.aliyun.com/document_detail/28357.html?spm=a2c4g.11186623.6.557.735f1115szEGvC\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/28357.html?spm=a2c4g.11186623.6.557.735f1115szEGvC</a>",
    "category": "安全"
  },
  {
    "id": 340,
    "type": "单选题",
    "title": "阿里云提供的安全产品云盾涵盖从网络、主机、应用、数据、图片识别、混合云到数字证书和业务风控、保险等多个子产品，遇到不同的风险时选择合适的产品可以做到事半功倍。当客户服务器经常遭受大流量的攻击，导致服务器无法正常对外提供服务时，选择<strong>____</strong>产品进行防护最合适。",
    "options": [
      "A.安全众测",
      "B.WEB应用防火墙（WAF）",
      "C.DDoS高防IP",
      "D.安全管家服务",
      "E.渗透测试",
      "F.云安全中心"
    ],
    "answer": "C",
    "explanation": "划重点：客户服务器经常遭受大流量的攻击。所以需要通过配置DDoS高防IP，将攻击流量引流到高防IP，确保源站的稳定可靠。参考链接：<a href=\"https://help.aliyun.com/document_detail/28464.html?spm=a2c4g.11186623.6.604.4f0e4ab3CXJuYo\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/28464.html?spm=a2c4g.11186623.6.604.4f0e4ab3CXJuYo</a>",
    "category": "安全"
  },
  {
    "id": 341,
    "type": "单选题",
    "title": "使用阿里云的负载均衡SLB实例时，针对7层（HTTP协议）服务，由于采取替换HTTP头文件IP地址的方式来进行请求转发，所以后端云服务器ECS实例看到的访问IP是负载均衡SLB实例的IP地址，而不是实际来访者的真实IP。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "针对7层（HTTP协议）服务，由于采取替换HTTP头文件IP地址的方式来进行请求转发，所以后端云服务器看到的访问IP是SLB系统的本地IP而不是实际来访者的真实IP。所以系统支持用户采用XForwardedFor的方式获取访问者真实IP，前提是用户必须在配置7层（HTTP协议）服务监听时开启了“获取真实访问IP”功能",
    "category": "负载均衡"
  },
  {
    "id": 342,
    "type": "单选题",
    "title": "在使用阿里云弹性伸缩（AutoScaling）时如果在伸缩组中指定了RDS实例，伸缩组会自动将加入伸缩组的ECS实例的内网IP添加到指定的RDS实例的访问白名单当中，下面说法错误的是?",
    "options": [
      "A.如果ECS实例无法加入到RDS访问白名单，该ECS实例不会被回滚操作并释放",
      "B.指定的RDS实例必须是运行中状态。",
      "C.指定的RDS实例访问白名单的IP个数不能达到上限。",
      "D.伸缩组创建成功后，伸缩组不会立即生效，只有启用伸缩组，才能接受伸缩规则的触发和执行相关的伸缩活动。"
    ],
    "answer": "A",
    "explanation": "题目问的是描述错误的选项，如果弹性伸缩的ECS实例无法加入到RDS访问白名单，自动创建的ECS会被回滚和释放。手动创建的ECS不会被回滚和释放。[<a href=\"https://help.aliyun.com/document_detail/25915.html]，参考链接：https://help.aliyun.com/document_detail/25936.html?spm=5176.10695662.1996646101.searchclickresult.76e97940ds64hg\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25915.html]，参考链接：https://help.aliyun.com/document_detail/25936.html?spm=5176.10695662.1996646101.searchclickresult.76e97940ds64hg</a>",
    "category": "数据库"
  },
  {
    "id": 343,
    "type": "单选题",
    "title": "阿里云的云盾的先知计划，是调动众多网络安全专家的力量一起维护互联网平台和业务的安全，降低客户的安全损失。先知计划为企业提供的是<strong>____</strong>服务。",
    "options": [
      "A.为企业收集情报（漏洞）",
      "B.为企业保障服务器安全",
      "C.为企业保障网络安全",
      "D.用大数据的方式为企业进行安全分析"
    ],
    "answer": "A",
    "explanation": "先知（安全众测）是一个帮助企业建立私有应急响应中心的平台（帮助企业收集漏洞信息），尽早发现存在的漏洞可以有效地减少企业可能的损失。参考链接：<a href=\"https://help.aliyun.com/document_detail/28378.html?spm=a2c4g.11186623.6.542.23823c7dXqHjYW\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/28378.html?spm=a2c4g.11186623.6.542.23823c7dXqHjYW</a>",
    "category": "安全"
  },
  {
    "id": 344,
    "type": "单选题",
    "title": "云计算在极大地方便用户和企业廉价使用存储资源、软件资源、计算资源的同时,同样也面临着安全方面的挑战。上云并不会增加安全风险,同时云计算厂商也不会帮助客户解决一切安全问题,需要用户积极参予。目前普遍遵循“三不变”原则,不包括以下哪项？",
    "options": [
      "A.数据归属关系不变",
      "B.安全管理责任不变",
      "C.运维管理方式不变",
      "D.安全管理标准不变"
    ],
    "answer": "C",
    "explanation": "在安全管理方面，中网办发布《关于加强党政部门云计算服务网络安全管理的意见》（中网办发文〔2014〕14号）（以下称“14号文”），进一步明确党政部门云计算服务网络安全管理的基本要求，提出了“安全管理责任不变，数据归属关系不变，安全管理标准不变，敏感信息不出境”四条基本要求。不包含”运维管理方式不变”。",
    "category": "安全"
  },
  {
    "id": 345,
    "type": "单选题",
    "title": "A 公司管理员小牛近期发现公司的网站访问速度越来越慢，偶尔会出现无法打开的现象，从 web 日志中发现了数据被恶意爬取的行为，且并发访问量较大，这种情况下可以使用阿里云的<strong>____</strong>安全产品进行防护。",
    "options": [
      "A.安全管家",
      "B.态势感知",
      "C.Web 应用防火墙（WAF）",
      "D.云安全中心（安骑士）"
    ],
    "answer": "C",
    "explanation": "划重点：从 web 日志中发现了数据被恶意爬取的行为，且并发访问量较大。所以需要用到Web 应用防火墙（WAF）的防爬虫功能。",
    "category": "安全"
  },
  {
    "id": 346,
    "type": "单选题",
    "title": "阿里云的云盾先知计划的目的是帮助企业建立私有的<strong>____</strong>中心，以较低的成本发现企业自身企业的安全风险，并得到解决方案。",
    "options": [
      "A.私有数据中心",
      "B.应急响应中心",
      "C.病毒防护中心",
      "D.远程备份中心"
    ],
    "answer": "B",
    "explanation": "先知计划是一个帮助企业建立私有应急响应中心的平台（帮助企业收集漏洞信息）。",
    "category": "安全"
  },
  {
    "id": 347,
    "type": "单选题",
    "title": "云盾先知计划的目的是帮助企业建立私有的什么中心？",
    "options": [
      "A.应急响应中心",
      "B.病毒防护中心",
      "C.私有数据中心",
      "D.远程备份中心"
    ],
    "answer": "A",
    "explanation": "先知计划是一个帮助企业建立私有应急响应中心的平台（帮助企业收集漏洞信息）。",
    "category": "安全"
  },
  {
    "id": 348,
    "type": "单选题",
    "title": "对于阿里云态势感知典型的功能点描述正确的是<strong>____</strong>。",
    "options": [
      "A.恶意进程查杀",
      "B.漏洞检测和修复",
      "C.外部风险扫描：如AK泄露、账密泄露",
      "D.全量安全日志，自动化入侵回溯",
      "E.其它选项都正确"
    ],
    "answer": "E",
    "explanation": "文档原文：态势感知具备异常登录检测、网站后门查杀、网站后门查杀、进程异常行为、敏感文件篡改、异常网络连接、Linux 软件漏洞、Windows 系统漏洞、WebCMS 漏洞、应急漏洞、Web 漏洞扫描、主机基线、云产品基线、资产指纹、AK 和账号密码泄露、数据大屏、日志检索、全量日志分析。参考链接：<a href=\"https://www.jianshu.com/p/99360d03b1cd\" target=\"_blank\" rel=\"noopener\">https://www.jianshu.com/p/99360d03b1cd</a>",
    "category": "其他"
  },
  {
    "id": 349,
    "type": "单选题",
    "title": "用户在使用阿里云云服务器ECS的时候，经常收到密码被暴力破解的报警信息，虽然都没有成功，但是很担心某一天会被攻破。为了提升系统的安全性，并不再接收到该ECS实例的密码暴力破解报警信息，以下<strong><strong>_</strong></strong>是最安全的措施。",
    "options": [
      "A.关闭云监控的异常报警机制",
      "B.开通安全众测，查找系统中的潜在漏洞",
      "C.将ECS密码修改为8位以上的复杂密码，同时用安全组关闭远程管理端口",
      "D.使用WAF来提升系统的安全性"
    ],
    "answer": "C",
    "explanation": "WAF保护的是ECS上应用层的用户服务，而不能保护ECS的被保密破解。先知（安全众测）是一个帮助企业建立私有应急响应中心的平台（帮助企业收集漏洞信息），也不能保护ECS的被保密破解。所以最安全的是提升ECS登录密码的复杂度，关闭ECS远程登录管理的端口。",
    "category": "安全"
  },
  {
    "id": 350,
    "type": "单选题",
    "title": "以下<strong>____</strong>安全事件是不能由阿里云态势感知集中管理的。",
    "options": [
      "A.发现主机有异常进程",
      "B.发现主机成为肉鸡",
      "C.机房断电",
      "D.发现网站被DDoS攻击成功"
    ],
    "answer": "C",
    "explanation": "机房断电是态势感知不能预测到的故障。",
    "category": "安全"
  },
  {
    "id": 351,
    "type": "单选题",
    "title": "伸缩活动的生命周期为：判断伸缩组的健康状态和边界条件 步骤与 启动 cooldown 步骤之间的所有活动。手工加入既有的ECS实例，还包括A:判断ECS实例的状态、类型；B:分配ActivityId和执行伸缩活动；C:修改Total Capacity；D:加入ECS实例等活动，这些活动正确的顺序是<strong><strong>_</strong></strong>。",
    "options": [
      "A.ABDC",
      "B.BADC",
      "C.ADBC",
      "D.BCAD"
    ],
    "answer": "A",
    "explanation": "手工加入的步骤：1. 判断伸缩组的健康状态、边界条件和 ECS 实例的状态、类型。2. 分配 ActivityId 和执行伸缩活动。3. 加入 ECS 实例。4. 修改 Total Capacity。5. 添加 RDS 白名单。6. 挂载负载均衡，将权重设为当前伸缩组中已激活的伸缩配置上指定的“负载均衡权重”。此处使用了伸缩配置上指定的“负载均衡权重”。7. 伸缩活动完成，启动 cooldown。参考链接：<a href=\"https://bbs.aliyun.com/simple/t586976.html\" target=\"_blank\" rel=\"noopener\">https://bbs.aliyun.com/simple/t586976.html</a>",
    "category": "其他"
  },
  {
    "id": 352,
    "type": "单选题",
    "title": "在使用阿里云的公网IP的负载均衡SLB实例的四层（TCP协议）转发时，后端云服务器池中的ECS实例不能直接向该ECS实例所在的负载均衡SLB实例的公网IP发送请求。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "这和负载均衡TCP的实现机制有关。在四层TCP协议服务中，当前不支持后端云服务器的ECS既作为RealServer，又作为客户端向所在的负载均衡实例发送请求。因为，返回的数据包只在云服务器内部转发，不经过负载均衡，所以在负载均衡实例的后端ECS上去访问的负载均衡的服务地址是不通的。参考链接：<a href=\"https://bbs.aliyun.com/read/539321.html?page=e\" target=\"_blank\" rel=\"noopener\">https://bbs.aliyun.com/read/539321.html?page=e</a>",
    "category": "负载均衡"
  },
  {
    "id": 353,
    "type": "单选题",
    "title": "在同一个阿里云的专有网络VPC内，不同的虚拟交换机中的云服务器ECS实例是默认内网是不互通的，需要通过添加路由的方式实现互相访问。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "同一个VPC内的交换机间默认内网是互通的。所以题目的描述的错误的。参考链接：<a href=\"https://help.aliyun.com/document_detail/65387.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/65387.html</a>",
    "category": "网络"
  },
  {
    "id": 354,
    "type": "单选题",
    "title": "阿里云专有网络VPC使用了隧道技术，每个VPC都有一个独立的隧道号，一个隧道号对应着一张虚拟化网络，达到与传统VLAN方式类似的隔离效果。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "VPC的基础解释。",
    "category": "网络"
  },
  {
    "id": 355,
    "type": "单选题",
    "title": "阿里云内容分发网络CDN优化功能可以提高CDN缓存的命中率，降低带宽成本，但是会增加源站的安全风险，用户应该在应用层安全防护上多加关注。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "CDN客户端应用直接访问CDN服务，避免了客户端直接访问ECS，部分程度上增加了源站和ECS的安全性。而不是题目中说的增加了安全风险.",
    "category": "安全"
  },
  {
    "id": 356,
    "type": "单选题",
    "title": "如果您在已经创建好的阿里云的云服务器ECS实例中进行了更改网卡mac地址的操作，可能会导致网络不通的问题。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "更改云服务器ECS的Mac地址，可能会影响到服务器的网络通信服务。",
    "category": "网络"
  },
  {
    "id": 357,
    "type": "单选题",
    "title": "阿里云对象存储OSS上的文件可以直接通过阿里云内容分发网络CDN进行加速，加速成功后可以提升文件的访问速度，同时可以节约OSS的流量成本。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "正确描述。CDN会将您OSS存储的热点数据分发到全国各地的节点。用户访问时只需访问最近的CDN节点读取文件，而无需访问OSS的源文件，也不会消耗OSS的外网流量。这样不仅可以提升您边缘用户的访问速度和体验，同时CDN的外网流量费用相对OSS外网流量较低，仅为OSS外网流量的50%。可有效的节省您整体应用的网络费用。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/39681.html?spm=5176.2000002.0.0.37f03fb7vnGdS9\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39681.html?spm=5176.2000002.0.0.37f03fb7vnGdS9</a>",
    "category": "CDN"
  },
  {
    "id": 358,
    "type": "单选题",
    "title": "阿里云对象存储OSS可以用于进行海量文件的存储，但是单个bucket下保存的文件数量是有限的，最大只能是65535个。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "Bucket的大小是没有上线的，所以保存的文件也是没有上限的，PS：每个Object/元素/文件大小最大限制是48.8T。",
    "category": "OSS"
  },
  {
    "id": 359,
    "type": "单选题",
    "title": "某期货交易网站，使用阿里云负载均衡SLB服务。由于期货交易对于负载有高敏感性，高频的健康检查有可能会对用户的正常访问带来影响。该网站可以通过以下方式减少健康检查对正常业务的影响：降低健康检查的频率，增大健康检查间隔。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "如果您的业务对负载敏感性高，高频率的健康检查探测可能会对正常业务访问造成影响。您可以结合业务情况，通过降低健康检查频率、增大健康检查间隔、七层检查修改为四层检查等方式，来降低对业务的影响。但为了保障业务的持续可用，不建议关闭健康检查。<a href=\"https://help.aliyun.com/knowledge_detail/39455.html?spm=5176.11065259.1996646101.searchclickresult.52bb2724RQE4UG\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39455.html?spm=5176.11065259.1996646101.searchclickresult.52bb2724RQE4UG</a>",
    "category": "负载均衡"
  },
  {
    "id": 360,
    "type": "单选题",
    "title": "阿里云的云盾数据风控服务可以输出风险评估报告，实时呈现今日、昨日及特定时间段的风险情况，便捷跟踪、掌握风险防控情况。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "阿里云的云盾数据风控服务支持多个维度输出风险评估报告。参考链接：<a href=\"https://help.aliyun.com/document_detail/84371.html?spm=a2c4g.11186623.6.592.580a1d8cNjhLHA\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/84371.html?spm=a2c4g.11186623.6.592.580a1d8cNjhLHA</a>",
    "category": "安全"
  },
  {
    "id": 361,
    "type": "单选题",
    "title": "阿里云的云盾的内容安全（原名：绿网）产品提供网站内容和图片的合规自动检查功能，支持基于HTTP协议的静态和动态网站。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "绿网（现：内容安全）的站点检测支持对网站的内容和图片进行检查，同时支持静态和动态的站点。参考链接：<a href=\"https://help.aliyun.com/document_detail/28424.html?spm=a2c4g.11174359.6.563.75397831RY24pd\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/28424.html?spm=a2c4g.11174359.6.563.75397831RY24pd</a>",
    "category": "安全"
  },
  {
    "id": 362,
    "type": "单选题",
    "title": "阿里云的云上安全运维最佳实践中，推荐客户使用云服务器ECS实例的安全组将ECS实例分组管理，结合堡垒机和VPN提供安全的远程运维。在阿里云的云市场中有多种堡垒机和VPN的成熟方案可以选择。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "题目中描述是正确的，也是上云最佳实践中的原话表达。",
    "category": "安全"
  },
  {
    "id": 363,
    "type": "单选题",
    "title": "云计算服务可以提供可靠性非常高的数据存储能力，比如阿里云的对象存储（Object Storage Service，简称OSS）的数据可靠性就不低于99.99999999%。云计算的数据可靠性完全是由于磁盘采用了RAID 0+1 的冗余技术实现的。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "完全由于的说法不对，数据自动多重冗余备份只是可靠性的一部分，还依赖于规模自动扩展，规模自动扩展等。",
    "category": "OSS"
  },
  {
    "id": 364,
    "type": "单选题",
    "title": "在OSS服务创建了存储空间之后，用户可以上传任意类型文件到存储空间中，OSS服务所有元素都是用文件形式来存储。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "Bucket中所有元素都是以对象（也可以叫文件、Object）来存储的。参考链接：<a href=\"https://help.aliyun.com/document_detail/31817.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/31817.html</a>",
    "category": "OSS"
  },
  {
    "id": 365,
    "type": "单选题",
    "title": "加入到阿里云的云盾先知计划的安全专家100%通过了支付宝实名认证。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "安全专家都是100%支付宝实名认证的安全专家，参考先知（安全众测）的文档参考链接：<a href=\"https://help.aliyun.com/document_detail/28381.html?spm=a2c4g.11186623.6.544.54fa79f7xkMD1z\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/28381.html?spm=a2c4g.11186623.6.544.54fa79f7xkMD1z</a>",
    "category": "安全"
  },
  {
    "id": 366,
    "type": "单选题",
    "title": "云盾的安全管家包含端口检测、异地登录提醒、密码暴力破解、WebShell检测服务。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "端口检测、异地登录提醒、密码暴力破解、WebShell检测服务，这些是安骑士提供的服务，而非安全管家提供的服务，参考链接：<a href=\"https://help.aliyun.com/document_detail/31770.html?spm=a2c4g.11186623.6.543.723a3c318RmzWJ\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/31770.html?spm=a2c4g.11186623.6.543.723a3c318RmzWJ</a>",
    "category": "安全"
  },
  {
    "id": 367,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB实例会检查后端云服务器ECS实例的健康状态，对于异常状态的云服务器ECS实例，将会移出后端云服务器池，并新建一个云服务器ECS实例添加到后端服务器池中来，从而解决了单台云服务器ECS实例的单点问题，同时提高了应用的整体服务能力。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "题目中的情况负载均衡SLB不会新建一个云服务器ECS实例添加到后端服务器池中来。对于异常状态的云服务器ECS实例，负载均衡SLB会将异常的ECS隔离，待ECS正常了以后还会将其从隔离区移出并继续给其分发请求。",
    "category": "负载均衡"
  },
  {
    "id": 368,
    "type": "单选题",
    "title": "您在阿里云的linux操作系统的云服务器ECS实例中开启了NetWorkManger服务之后，对该云服务器ECS实例的所有网络连接服务都没有任何影响。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "NetworkManager服务来实现网络的配置和管理，NetworkManager服务启动以后可能会导致系统内部的网络配置出现紊乱。",
    "category": "网络"
  },
  {
    "id": 369,
    "type": "单选题",
    "title": "在创建阿里云的专有网络VPC时，用户需要以CIDRBlock的形式指定专有网络VPC内使用的私网网段。专有网络VPC创建成功之后，CIDRBlock可以进行修改。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "交换机创建完成之后，无法修改CIDRBlock，且新建交换机所使用的CIDRBlock不可以与已经存在的交换机的CIDRBlock重复。",
    "category": "网络"
  },
  {
    "id": 370,
    "type": "单选题",
    "title": "客户小王准备建立一个静态的网站，想基于阿里云提供的多线BGP能力为客户提供网站的快速访问，小王可以仅通过阿里云对象存储OSS这个产品就能实现。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "因为是静态的网站，可以直接托管在对象存储OSS上面就可以直接提供服务，假如是动态网站，就需要通过ECS来部署项目来提供服务。",
    "category": "OSS"
  },
  {
    "id": 371,
    "type": "单选题",
    "title": "阿里云对象存储OSS的Bucket不支持重命名。如果有变更Bucket名称的需求，可以先创建一个新的Bucket，然后用COPY Object的方式将原Bucket下的文件复制到新Bucket。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "OSS的bucket暂不支持重命名，若需要其他名称建议您重新创建bucket。OSS 提供了COPY objcet的功能，您可以将原bucekt下的文件COPY到新bucket即可。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/39588.html?spm=5176.10695662.1996646101.searchclickresult.7d922be4rhXvW9\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39588.html?spm=5176.10695662.1996646101.searchclickresult.7d922be4rhXvW9</a>",
    "category": "OSS"
  },
  {
    "id": 372,
    "type": "单选题",
    "title": "阿里云对象存储OSS与云服务器ECS实例结合，可以实现一个完整的动静分离的网站，静态页面放在OSS上提供快速访问能有效降低ECS实例的负载。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "从项目架构的合理性出发，以及为了CDN能更合理区分动态和静态文件，所以网站是需要做做动静分离。",
    "category": "OSS"
  },
  {
    "id": 373,
    "type": "单选题",
    "title": "由于阿里云提供了对象存储OSS的海量存储服务，因此在任何场景下都可以使用OSS作为数据的存储服务，包括结构化的数据和非结构化的数据的存储。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "对象存储OSS推荐存储非结构化数据，而不推荐存储结构化数据。结构化的数据存储建议使用云数据库RDS。",
    "category": "OSS"
  },
  {
    "id": 374,
    "type": "单选题",
    "title": "由于阿里云提供了云数据库RDS的服务，因此在阿里云的云服务器ECS实例上不支持用户自行进行数据库的部署。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "用户是可自行在ECS实例上部署数据库的服务的，阿里云不做限制。",
    "category": "数据库"
  },
  {
    "id": 375,
    "type": "单选题",
    "title": "如果您在已经创建好的云服务器ECS实例进行了更改网卡mac地址的操作，可能会导致网络不通的问题。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "更改云服务器ECS的Mac地址，可能会影响到服务器的网络通信服务。",
    "category": "网络"
  },
  {
    "id": 376,
    "type": "单选题",
    "title": "阿里云的云盾的安骑士提供了服务器密码暴力破解防护，用户再也不用设置难记的复杂密码了。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "云盾的安骑士暴力破解防护，但是用户仍然需要做好密码的妥善保管工作。",
    "category": "安全"
  },
  {
    "id": 377,
    "type": "单选题",
    "title": "您需要进行阿里云的云服务器ECS实例的系统盘更换操作之前，无需停止ECS实例。系统盘更换之后，ECS实例数据盘的数据不会受到影响。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "更换系统盘需要云服务器ECS实例处于停止的状态，所以需要停止ECS实例。更换系统盘，数据盘的数据是不会受到影响。",
    "category": "其他"
  },
  {
    "id": 378,
    "type": "单选题",
    "title": "开通阿里绿网后，对用户阿里云的服务器上公开对外发布的网页内容进行实时检测，支持针对URL进行内容屏蔽。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "这个是文档的基础描述，参考绿网（现已改名内容安全）链接：<a href=\"https://help.aliyun.com/document_detail/28417.html?spm=a2c4g.11186623.6.542.4a7972e66CinZL\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/28417.html?spm=a2c4g.11186623.6.542.4a7972e66CinZL</a>",
    "category": "安全"
  },
  {
    "id": 379,
    "type": "单选题",
    "title": "分布式计算是把一个任务分成许多小的部分，然后把这些部分分配给多个计算节点进行处理，最后把这些计算结果综合起来得到最终的结果。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "分布式计算的基础解释。参考链接：<a href=\"https://baike.baidu.com/item/%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97/85448\" target=\"_blank\" rel=\"noopener\">https://baike.baidu.com/item/%E5%88%86%E5%B8%83%E5%BC%8F%E8%AE%A1%E7%AE%97/85448</a>",
    "category": "其他"
  },
  {
    "id": 380,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB、云服务器ECS以及弹性伸缩（Auto Scaling）配合使用时，同一个负载均衡SLB实例的后端服务器池中可以包含多个伸缩组。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "一台负载均衡SLB实例可以加入多个伸缩组，参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/38560.html?spm=a2c4g.11186623.4.5.1cc16c93Oy6v2B\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/38560.html?spm=a2c4g.11186623.4.5.1cc16c93Oy6v2B</a>",
    "category": "负载均衡"
  },
  {
    "id": 381,
    "type": "单选题",
    "title": "某快递公司开发一款APP，供分布在全国各地的20万名快递员使用，随时接收发件请求，查看总部发来的内部公告及其它的共享信息（上述信息为敏感数据），服务器端平台建在阿里云上。为了提高快递员的访问速度，该公司可以选用阿里云内容分发网络CDN服务，其中敏感数据的访问采用URL鉴权的方法可以有效解决非授权访问，在安全的基础上实现加速访问。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "正确描述，CDN可以提高全国快递员的访问速度，同时CDN提供URL鉴权功能，可以防止非授权的访问。",
    "category": "安全"
  },
  {
    "id": 382,
    "type": "单选题",
    "title": "阿里云弹性伸缩（Auto Scaling）中的伸缩活动有ECS实例加入伸缩组失败时，需要保持伸缩活动级的事务完整性，而非ECS实例事务的完整性，即需要进行伸缩活动级的回滚。比如当某伸缩活动要创建并添加20台ECS实例到伸缩组中，但只有19台加入成功时，整个伸缩活动会回退，加入到伸缩组中的19台机器会移出并释放。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "当弹性伸缩有ECS实例加入伸缩组失败时，整个伸缩活动不会进行回退，加入到伸缩组中的19台机器也不会移出和释放。只会对不成功的 1 台 ECS 实例进行自动释放操作。参考链接：<a href=\"https://help.aliyun.com/document_detail/25916.html?spm=5176.10695662.1996646101.searchclickresult.766a40d2f6tgXd\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25916.html?spm=5176.10695662.1996646101.searchclickresult.766a40d2f6tgXd</a>",
    "category": "监控"
  },
  {
    "id": 383,
    "type": "单选题",
    "title": "阿里云的云盾安骑士具有“密码暴力破解”防护功能，因此用户如果开启了安骑士，就没有必要定期修改云服务器ECS实例的管理员密码，也没有必要设置复杂密码。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "虽然安骑士具有“密码暴力破解”防护功能，但是用户仍然需要设置复杂密码且妥善保管维护ECS实例的密码。",
    "category": "安全"
  },
  {
    "id": 384,
    "type": "单选题",
    "title": "阿里云对象存储OSS是阿里云对外提供的海量、安全、低成本、高可靠的云存储服务。OSS采用多副本数据冗余机制，当底层硬件出现故障时OSS服务一定会短暂中断，最快在2分钟内修复。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "OSS服务中数据自动多重冗余备份，当底层硬件出现故障时OSS服务会立即修复且服务不会中断。参考链接：<a href=\"https://help.aliyun.com/document_detail/31818.html?spm=a2c4g.11186623.6.545.54e558d5NvKfb6\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/31818.html?spm=a2c4g.11186623.6.545.54e558d5NvKfb6</a>",
    "category": "安全"
  },
  {
    "id": 385,
    "type": "单选题",
    "title": "阿里云对象存储OSS是阿里云对外提供的海量、安全、低成本、高可靠的云存储服务。通过阿里云的管理控制台或OpenAPI上传文件到OSS，不收取任何流量费。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "上传文件到OSS不会收取流量费用。OSS只有在公网下行（即公网下载文件）的时候才会收取流量费。",
    "category": "安全"
  },
  {
    "id": 386,
    "type": "单选题",
    "title": "镜像是阿里云的云服务器ECS实例的运行环境的模版，可以包括操作系统和预装软件。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "镜像的基础描述，参考官网对镜像的概述。参考链接：<a href=\"https://help.aliyun.com/document_detail/25389.html?spm=5176.11065259.1996646101.searchclickresult.46375662W0Ch7V\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25389.html?spm=5176.11065259.1996646101.searchclickresult.46375662W0Ch7V</a>",
    "category": "其他"
  },
  {
    "id": 387,
    "type": "单选题",
    "title": "阿里云的云服务器ECS产品支持的应用非常广泛，可以与其他的阿里云的产品进行搭配提供网站、存储、视频直播、物联网等丰富的应用解决方案。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "云服务器ECS的场景概述。参考链接：<a href=\"https://help.aliyun.com/document_detail/25371.html?spm=a2c4g.11186623.6.544.2e4150bfrcJs6H\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25371.html?spm=a2c4g.11186623.6.544.2e4150bfrcJs6H</a>",
    "category": "其他"
  },
  {
    "id": 388,
    "type": "单选题",
    "title": "用户可以使用阿里云对象存储OSS图片处理服务（Image Service）对.JPG的图片进行缩放和添加水印。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "图片处理是OSS提供的海量、安全、低成本、高可靠的图片处理服务。OSS图片处理提供以下功能：获取图片信息，图片格式转换，图片缩放，图片裁剪，图片旋转，图片效果，图片水印（包括添加图片、文字、图文混合水印），自定义图片处理样式，级联处理。参考链接：<a href=\"https://help.aliyun.com/document_detail/47735.html?spm=5176.10695662.1996646101.searchclickresult.1591133cnwWeld\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/47735.html?spm=5176.10695662.1996646101.searchclickresult.1591133cnwWeld</a>",
    "category": "OSS"
  },
  {
    "id": 389,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB可以把用户请求分发给后端的云服务器ECS实例，这些云服务器ECS实例的规格配置必须相同。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "负载均衡SLB后端的ECS实例的规格可以不同，用户只要确保后端ECS实例中的应用服务部署相同且数据一致即可。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/55198.html?spm=a2c4g.11186623.6.742.56cd4078AYFo9P\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/55198.html?spm=a2c4g.11186623.6.742.56cd4078AYFo9P</a>",
    "category": "负载均衡"
  },
  {
    "id": 390,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB实例默认会把来自同一客户端的访问请求分发到同一台后端云服务器ECS实例上进行处理，无需额外的配置。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "会话保持：默认关闭。启用后，负载均衡会把来自同一客户端的访问请求分发到同一台后端服务器上进行处理。",
    "category": "负载均衡"
  },
  {
    "id": 391,
    "type": "单选题",
    "title": "用户可以卸载阿里云的云服务器ECS实例上的云盾安骑士客户端，在需要的时候可以再次安装。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "阿里云的云服务器ECS支持随时安装/卸载。参考链接：<a href=\"https://help.aliyun.com/document_detail/93648.html?spm=5176.11065259.1996646101.searchclickresult.4c3a5b7aWdEAhh\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/93648.html?spm=5176.11065259.1996646101.searchclickresult.4c3a5b7aWdEAhh</a>",
    "category": "安全"
  },
  {
    "id": 392,
    "type": "单选题",
    "title": "您在开通阿里云的云服务器ECS实例的同时，阿里云会免费为您开通云盾的基础防护功能，包括基础DDoS攻击等服务，来保证您的ECS实例的网络安全得到基本的保护。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "阿里云免费为负载均衡服务提供最高5G的DDoS基础防护。参考链接：<a href=\"https://help.aliyun.com/document_detail/59714.html?spm=5176.10695662.1996646101.searchclickresult.de7663dexQk8sg\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/59714.html?spm=5176.10695662.1996646101.searchclickresult.de7663dexQk8sg</a>",
    "category": "安全"
  },
  {
    "id": 393,
    "type": "单选题",
    "title": "客户小赵想使用阿里云对象存储OSS实现公司内部文件共享（100人），但是小赵没有任何技术开发经验，小赵可以选择在阿里云云市场下载支持OSS的FTP工具来实现。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "题目中的需求是可以通过对象存储OSS的FTP根据来实现文件共享，参考链接：<a href=\"https://help.aliyun.com/document_detail/44075.html?spm=5176.11065259.1996646101.searchclickresult.667f6566UP7kN6\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/44075.html?spm=5176.11065259.1996646101.searchclickresult.667f6566UP7kN6</a>",
    "category": "OSS"
  },
  {
    "id": 394,
    "type": "单选题",
    "title": "使用阿里云对象存储OSS保存云服务器ECS实例上的业务系统日志，可以有效降低存储成本。如果ECS实例和OSS在同一地域，只能通过公网地址传输数据。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "ECS实例和OSS在同一地域，是可以通过内网来传输数据的。",
    "category": "OSS"
  },
  {
    "id": 395,
    "type": "单选题",
    "title": "您希望将服务部署在阿里云上，可以通过将业务的模块进行拆分、采用多个低配置的云服务ECS实例结合负载均衡SLB的方案，来提高业务的整体可用性。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "这个是上云实践中的描述，可以将业务拆分为多个模块，在多个低配置的云服务ECS实例结合负载均衡SLB的方案，来实践业务的高可用。",
    "category": "负载均衡"
  },
  {
    "id": 396,
    "type": "单选题",
    "title": "使用阿里云弹性伸缩（Auto Scaling）创建伸缩组时，可以指定配合使用的云数据库RDS实例，伸缩组会自动将ECS实例的内网IP添加到RDS实例的IP白名单中，允许ECS通过内网连接RDS实例。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "文档原话，如果创建伸缩组时添加了RDS实例，伸缩组会自动将加入伸缩组的ECS实例的内网IP添加到指定的RDS实例的访问白名单中，允许ECS实例内网通信。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/38560.html?spm=5176.2000002.0.0.376e6160KDocNg\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/38560.html?spm=5176.2000002.0.0.376e6160KDocNg</a>",
    "category": "数据库"
  },
  {
    "id": 397,
    "type": "单选题",
    "title": "您在开通阿里云的云服务器ECS实例之后，希望通过阿里云提供的管理控制台对该ECS实例的运行情况进行监控，需要开通收费的云监控服务来满足需求。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "你开通阿ECS后会自动开通云监控，云监控是不收费的。",
    "category": "监控"
  },
  {
    "id": 398,
    "type": "单选题",
    "title": "阿里云内容分发网络CDN建立并覆盖在承载网之上，由分布在不同区域的边缘节点服务器群组成的分布式网络替代传统以WEB Server为中心的数据传输模式。阿里云CDN支持动态网站加速，用户不需要做动静分离。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "为了CDN能更好地区分动态和静态文件，已经合理地存储热点静态文件，所以网站还是要做动静分离。",
    "category": "CDN"
  },
  {
    "id": 399,
    "type": "单选题",
    "title": "若您的阿里云的云服务器ECS的实例希望能够和internet直接连通，就一定要开启公网带宽或者绑定EIP。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "因为题目是说需要直接连通，所以只能通过公网带宽或者EIP来实现。",
    "category": "其他"
  },
  {
    "id": 400,
    "type": "单选题",
    "title": "云盾的DDoS防护功能可以保护阿里云机房内的所有云产品，包括：ECS、SLB、RDS、OCS、OSS、ODPS、ADS等。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "云盾DDoS防护功能可以保障ECS、SLB、WAF、VPC、EIP、NAT云产品的DDoS网络安全，并不是题目中说的这些。",
    "category": "安全"
  },
  {
    "id": 401,
    "type": "单选题",
    "title": "云盾安骑士可以保防阿里云以外的服务器。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "云盾安骑士支持防护阿里云的ECS以及非阿里云的线下机房的实例。参考链接：<a href=\"https://help.aliyun.com/document_detail/28457.html?spm=a2c4g.11186623.6.560.17a76a82ikFFQ4\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/28457.html?spm=a2c4g.11186623.6.560.17a76a82ikFFQ4</a>",
    "category": "安全"
  },
  {
    "id": 402,
    "type": "单选题",
    "title": "云盾反欺诈服务（数据风控）可以输出风险评估报告，实时呈现今日、昨日及特定时间段的风险情况，便捷跟踪、掌握风险防控情况。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "数据风控的数据监控支持输出详细的风险评估报告。参考链接：<a href=\"https://help.aliyun.com/document_detail/66601.html?spm=a2c4g.11186623.2.11.630b6556qUU682\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/66601.html?spm=a2c4g.11186623.2.11.630b6556qUU682</a>",
    "category": "安全"
  },
  {
    "id": 403,
    "type": "单选题",
    "title": "当用户通过ECS Open API进行跨账户的ECS资源访问时，ECS后台向RAM进行权限检查，以确保资源拥有者将相关资源的相应权限授予给了调用者。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "阿里云RAM支持对不同的角色设置不用的权限，所以当RAM用户调用API的时候，ECS后台向RAM进行权限检查。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/58900.html?spm=5176.10695662.1996646101.searchclickresult.11d57ff4rODWTG\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/58900.html?spm=5176.10695662.1996646101.searchclickresult.11d57ff4rODWTG</a>",
    "category": "其他"
  },
  {
    "id": 404,
    "type": "单选题",
    "title": "报警任务名称在用户账号下唯一。如果该报警任务名称已经存在，则用新的值进行替换。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "",
    "category": "其他"
  },
  {
    "id": 405,
    "type": "单选题",
    "title": "对安全组的操作调整，对用户的服务连续性没有影响。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "对安全组的调整操作，对用户的服务连续性没有影响。这个是文档的原话，解释就是：用户操作了安全组，可能会导致请求访问ECS失败，但是并不会影响到ECS上面服务的运行。",
    "category": "安全"
  },
  {
    "id": 406,
    "type": "单选题",
    "title": "阿里云CDN不仅支持图片和css文件加速，还支持视频流媒体加速。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "阿里云CDN广泛应用于网站与应用加速、音视频点播、文件等场景，通过高性能缓存机制，提高访问效率和资源可用性。符合题目的描述。参考链接：<a href=\"https://help.aliyun.com/document_detail/27104.html?spm=a2c4g.11186623.6.545.574212ccRDpcNp\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/27104.html?spm=a2c4g.11186623.6.545.574212ccRDpcNp</a>",
    "category": "CDN"
  },
  {
    "id": 407,
    "type": "单选题",
    "title": "阿里云的云数据库可以完美兼容Oracle的PL/SQL、数据类型、高级函数、数据字典。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "详细参考RDS的官方产品介绍页。RDS是高度兼容Oracle，并不是完美兼容，因为还是有部分的Oracle的功能是不支持的。",
    "category": "数据库"
  },
  {
    "id": 408,
    "type": "单选题",
    "title": "无论伸缩组内是否有伸缩活动，都可以停用伸缩组。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "伸缩组里面有伸缩活动正在执行的时候，不可以停用伸缩组。强制停用可能会导致伸缩组伸缩异常。",
    "category": "其他"
  },
  {
    "id": 409,
    "type": "单选题",
    "title": "经典网络的内网网段不支持用户自定义，专有网络用户可自定义内网网段。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "经典网络的IP都是随系统分配，不支持用户自定义网段。VPC网络可以支持用户自由定义网络，按需配置网络，可自定义IP地址范围与路由表等。",
    "category": "网络"
  },
  {
    "id": 410,
    "type": "单选题",
    "title": "弹性伸缩一定要搭配负载均衡SLB、云监控才能使用。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "弹性伸缩可以单独使用，无需搭载负载均衡SLB，云监控一起使用。",
    "category": "负载均衡"
  },
  {
    "id": 411,
    "type": "单选题",
    "title": "ECS API调用成功返回的数据格式主要有XML和JSON两种，外部系统可以在请求时传入参数来制定返回的数据格式，默认为JSON格式。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "API默认返回是XML格式，参考链接：<a href=\"https://help.aliyun.com/document_detail/25490.html?spm=a2c4g.11186623.2.17.7fb24c96WG2Zwe\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25490.html?spm=a2c4g.11186623.2.17.7fb24c96WG2Zwe</a>",
    "category": "其他"
  },
  {
    "id": 412,
    "type": "单选题",
    "title": "动静分离是指将一个网站的动态和静态内容分成两个以上的站点分别承载， 动静分离的网站不利于通过CDN加速。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "动静分离的网站是有利于通过CDN加速的。上云实践中用户可以通过利用OSS和CDN对网站进行架构优化，做到网站文件的动静分离的，提升用户访问体验，实现成本可控。",
    "category": "CDN"
  },
  {
    "id": 413,
    "type": "单选题",
    "title": "选择阿里云本地磁盘或者本地SSD盘的ECS实例，一旦创建后，不能修改实例规格。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "由于本地SSD盘采用物理服务器本地盘的方式，购买带有本地SSD盘的实例（包含系统盘和数据盘）无法升级磁盘/CPU/内存等配置，仅支持带宽升级。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/40547.html?spm=5176.10695662.1996646101.searchclickresult.7a997ee87TJgkt\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/40547.html?spm=5176.10695662.1996646101.searchclickresult.7a997ee87TJgkt</a>",
    "category": "其他"
  },
  {
    "id": 414,
    "type": "单选题",
    "title": "不同VPC之间内部网络完全隔离，只能通过对外映射的IP（弹性IP和NAT IP）互联。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "文档原话：VPC基于隧道技术，实现数据链路层的隔离，为每个租户提供一张独立、隔离的安全网络。不同专有网络之间内部网络完全隔离，只能通过对外映射的IP（弹性公网IP和NAT IP）互连。参考链接：<a href=\"https://help.aliyun.com/document_detail/54095.html?spm=5176.11065259.1996646101.searchclickresult.6ace4127wDKila\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/54095.html?spm=5176.11065259.1996646101.searchclickresult.6ace4127wDKila</a>",
    "category": "网络"
  },
  {
    "id": 415,
    "type": "单选题",
    "title": "对于阿里云OSS服务来说，每个Bucket中只能存放10000个Object。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "Bucket的空间是没有上限的，所以对于Bucket中的Object个数也是没有限制的。",
    "category": "OSS"
  },
  {
    "id": 416,
    "type": "单选题",
    "title": "某客户的网站在原服务商做过ICP备案，拥有了自己的备案号，现在他想将网站迁移至阿里云ECS，必须在阿里云进行一次备案接入操作。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "需要将网站迁移至阿里云ECS，需要在阿里云完成接入ICP备案操作。",
    "category": "其他"
  },
  {
    "id": 417,
    "type": "单选题",
    "title": "ECS实例不支持强制停止，强制停止等同于断电，可能会丢失ECS实例操作系统中所有磁盘的数据。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "ECS是不支持强行停止，但是只要磁盘上面的数据已写入，不会因为断电停止等原因导致磁盘的数据丢失。（同理，电脑强行关机只要不是磁盘损坏，同时需要数据是已写入，也不会导致电脑的数据丢失。）",
    "category": "其他"
  },
  {
    "id": 418,
    "type": "单选题",
    "title": "对ECS API接口调用是通过向ECS API的服务端地址发送HTTP GET请求，并按照接口说明在请求中加入相应请求参数来完成的。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "云服务器ECS的API是通过向ECS API的服务端地址发送HTTP GET请求来实现相关的业务请求。参考链接：<a href=\"https://help.aliyun.com/document_detail/25692.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25692.html</a>",
    "category": "其他"
  },
  {
    "id": 419,
    "type": "单选题",
    "title": "您在阿里云的linux操作系统的云服务器ECS实例中开启了NetWorkManager服务之后，对该云服务器ECS实例的所有网络连接服务都没有任何影响。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "NetworkManager服务来实现网络的配置和管理，NetworkManager服务启动以后可能会导致系统内部的网络配置出现紊乱。所以说没有任何影响是错误的。",
    "category": "网络"
  },
  {
    "id": 420,
    "type": "单选题",
    "title": "对阿里云的云服务器ECS实例进行停止操作之后，ECS实例将停止工作，从而中断您的业务，需谨慎执行。由于停止操作之后ECS实例处于停止状态，阿里云将不再对该ECS实例进行收费。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "停机不收费仅面向于按量付费的ECS，包年包月的ECS关机仍然继续收费，只有在ECS实例到期后才不继续收费。",
    "category": "其他"
  },
  {
    "id": 421,
    "type": "单选题",
    "title": "专有网络类型的ECS实例只能在创建时指定，这类实例可以属于多个虚拟交换机。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "专有网络类型的ECS实例只能在创建时指定，这类实例只可以属于单个虚拟交换机。",
    "category": "网络"
  },
  {
    "id": 422,
    "type": "单选题",
    "title": "如果您在Linux操作系统的阿里云的云服务器ECS实例中开启SELINUX服务，该云服务器ECS实例的监控功能不会受到任何影响。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "linux系统的服务器不支持开启Selinux服务，如果开启了Selinux服务，会导致系统异常并无法启动。",
    "category": "监控"
  },
  {
    "id": 423,
    "type": "单选题",
    "title": "基于阿里云提供的云服务器ECS实例，可以快速完成您的系统部署来提高效率。同时，阿里云提供的多线BGP接入可以提高您在全国各地的客户访问质量。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "阿里云多线BGP（中国电信、联通、移动、教育网等）接入，确保全国用户访问畅通，提升用户访问的质量。",
    "category": "其他"
  },
  {
    "id": 424,
    "type": "单选题",
    "title": "您在阿里云的Linux操作系统的云服务器ECS实例中可以随意更改系统根目录的目录权限，不会对云服务器ECS实例的所有服务产生任何影响。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "随意更改系统根目录的目录权限，特别是系统文件的权限，会对ECS服务造成不可预测的影响。",
    "category": "其他"
  },
  {
    "id": 425,
    "type": "单选题",
    "title": "您如果更改了阿里云的云服务器ECS实例的网卡的MAC地址，对该ECS实例的网络访问没有任何影响。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "有些软件需要获取并验证服务器的MAC地址，假如修改了ECS的MAC地址，可能会影响到相应云产品的网络访问。",
    "category": "网络"
  },
  {
    "id": 426,
    "type": "单选题",
    "title": "您在阿里云的Windows系统的云服务器ECS实例中不建议删除或者重命名administrator账户，如果进行以上操作可能会引起在阿里云的管理控制台上修改密码失效。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "对administrator账户做了操作，如禁用、删除和改名等操作确实会导致在控制台修改ECS实例密码不成功。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/86624.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/86624.html</a>",
    "category": "其他"
  },
  {
    "id": 427,
    "type": "单选题",
    "title": "如果在阿里云的Linux系统的云服务器ECS实例中执行fdisk l命令，发现没有/dev/xvdb，/dev/xvdc，…，/dev/xvdz的设备，则表明该ECS实例无数据盘。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "正常情况下用fdisk l命令,可以查看到新增的硬盘。/dev/xvda为系统盘，/dev/xvdb,/dev/xvdc…/dev/xvdz都是数据盘。",
    "category": "其他"
  },
  {
    "id": 428,
    "type": "单选题",
    "title": "阿里云的云服务器ECS实例的Linux系统内核是经过优化的，为了不影响您的云服务器ECS实例的正常使用，不建议您自行进行Linux内核的编译。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "云服务器ECS实例的Linux系统内核是经过优化的，不建议用户自行编译Linux内核。",
    "category": "其他"
  },
  {
    "id": 429,
    "type": "单选题",
    "title": "使用阿里云弹性伸缩（Auto Scaling）时，为了应对一些复杂的场景，可以把多种伸缩模式混合使用，比如对于同一个伸缩组可以同时设置固定数量模式、定时模式以及动态模式。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "多种伸缩模式混合使用即伸缩模式中的多模式并行的模式，多模式并行模式可以组合配置，灵活解决实际业务需求中的问题。参考链接：<a href=\"https://www.alibabacloud.com/help/zh/docdetail/25860.html?spm=a2c5t.10695662.1996646101.searchclickresult.6908497faJDrtO\" target=\"_blank\" rel=\"noopener\">https://www.alibabacloud.com/help/zh/docdetail/25860.html?spm=a2c5t.10695662.1996646101.searchclickresult.6908497faJDrtO</a>",
    "category": "监控"
  },
  {
    "id": 430,
    "type": "单选题",
    "title": "阿里云对象存储OSS的同一个Bucket中的文件不能重名，但是支持对文件进行重命名。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "同一个Bucket中的文件不能重名是对的，但是文件Object不支持重命名。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/39588.html?spm=5176.11065259.1996646101.searchclickresult.31071285aQOqko\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39588.html?spm=5176.11065259.1996646101.searchclickresult.31071285aQOqko</a>",
    "category": "OSS"
  },
  {
    "id": 431,
    "type": "单选题",
    "title": "阿里云对象存储OSS支持子帐号，并且可以为每个子帐号分配不同Bucket的使用权限。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "阿里云对象存储OSS支持多个不同权限的子帐号来访问OSS的资源。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/65416.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/65416.html</a>",
    "category": "OSS"
  },
  {
    "id": 432,
    "type": "单选题",
    "title": "阿里云对象存储OSS的用户可以直接将保存在OSS上的高清电影文件通过阿里云CDN分发，在不需要其它阿里云的产品配合的情况下，可实现在线视频直播网站。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "在对象存储OSS的基础上需要实现在线视频直播网站的功能，还需要使用阿里云媒体转码（Media Transcoding，简称MTS）来实现解码的功能。",
    "category": "CDN"
  },
  {
    "id": 433,
    "type": "单选题",
    "title": "阿里云对象存储OSS自身提供的了 “IP黑白名单”功能，当发现有恶意IP频繁访问OSS时，可以直接将IP拉黑，屏蔽访问。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "OSS服务本身不提供IP黑名单的功能，可以结合内容分发CDN来实现IP黑白名单的功能。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/39555.html?spm=5176.11065259.1996646101.searchclickresult.45fb359epbxdYi\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39555.html?spm=5176.11065259.1996646101.searchclickresult.45fb359epbxdYi</a>",
    "category": "OSS"
  },
  {
    "id": 434,
    "type": "单选题",
    "title": "阿里云对象存储OSS是阿里云提供的海量、安全、低成本、高可靠的云存储服务。如果访问OSS文件的并发用户数和流量特别大，可以使用负载均衡SLB进行访问加速。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "负载均衡SLB只支持云服务器ECS的负载，不支持对象存储OSS的负载均衡，题目中的问题建议网站结合CDN来实现流量大的情景。",
    "category": "安全"
  },
  {
    "id": 435,
    "type": "单选题",
    "title": "如果用户更改负载均衡SLB服务的相关配置策略，可以通过SLB控制台进行更改，但更改策略会导致负载均衡SLB服务地址（IP）的变更。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "用户可以在控制台更改SLB服务的相关配置策略，但是并不会导致导致负载均衡SLB服务地址（IP）的变更。",
    "category": "负载均衡"
  },
  {
    "id": 436,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB支持同一地域（Region）跨可用区（Zone）容灾，结合DNS还可以支持跨地域（Region）的容灾。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "多个不同地域的负载均衡SLB支持通过DNS轮询来实现跨域容灾，参考链接：<a href=\"https://yq.aliyun.com/articles/43118?spm=5176.10695662.1996646101.searchclickresult.393a1484oIJgka\" target=\"_blank\" rel=\"noopener\">https://yq.aliyun.com/articles/43118?spm=5176.10695662.1996646101.searchclickresult.393a1484oIJgka</a>",
    "category": "负载均衡"
  },
  {
    "id": 437,
    "type": "单选题",
    "title": "负载均衡集群采用LVS和Tengine实现，其中4层监听（TCP/UDP）经过LVS后直接到达后端服务器，而7层监听（HTTP/HTTPS）经过LVS和Tengine最后达到后端服务器。7层性能没有4层性能好。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "因为7层比4层多了一个处理环节，因此，7层性能没有4层性能好。参考链接：<a href=\"https://help.aliyun.com/document_detail/27658.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/27658.html</a>",
    "category": "负载均衡"
  },
  {
    "id": 438,
    "type": "单选题",
    "title": "阿里云专有网络VPC内部存在虚拟交换机和虚拟路由器，可以像传统网络环境一样划分子网，每个子网内的云服务器ECS实例之间使用同一个虚拟交换机互联，不同子网间的ECS实例之间使用虚拟路由器互联。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "不同专有网络之间通过隧道ID进行隔离。专有网络内部由于交换机和路由器的存在，所以可以像传统网络环境一样划分子网，每一个子网内部的不同云服务器使用同一个交换机互联，不同子网间使用路由器互联。参考链接：<a href=\"https://help.aliyun.com/document_detail/34219.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/34219.html</a>",
    "category": "网络"
  },
  {
    "id": 439,
    "type": "单选题",
    "title": "路由表是指阿里云专有网络VPC中的路由器上管理路由条目的列表，VPC可以支持任意创建和删除路由表。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "可以支持自由创建和删除自定义路由表，但是路由表有最大的个数限制，所以用”任意”两字是错误的。",
    "category": "网络"
  },
  {
    "id": 440,
    "type": "单选题",
    "title": "路由器是阿里云专有网络VPC的枢纽，可以连接本VPC内的各个交换机，但不是连接本VPC与其他网络的网关设备。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "路由器（VRouter） 可以连接VPC内的各个交换机，同时也是连接VPC和其他网络的网关设备。参考链接：<a href=\"https://www.alibabacloud.com/help/zh/docdetail/65398.htm\" target=\"_blank\" rel=\"noopener\">https://www.alibabacloud.com/help/zh/docdetail/65398.htm</a>",
    "category": "网络"
  },
  {
    "id": 441,
    "type": "单选题",
    "title": "阿里云专有网络VPC和VPN是不同的概念。专有网络VPC是一个二层隔离的网络环境；VPN是一种远程访问技术，利用公网架设虚拟专用网络。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "VPN功能的基础解释。VPC使用的是二层的隔离技术，VPC中的交换机属于三层的交换机。参考阿里云VPC图解：<a href=\"http://cloud.51cto.com/art/201704/537129.htm\" target=\"_blank\" rel=\"noopener\">http://cloud.51cto.com/art/201704/537129.htm</a>",
    "category": "网络"
  },
  {
    "id": 442,
    "type": "单选题",
    "title": "阿里云的云监控除了可以为云服务器ECS实例提供安全有效的监控服务外，还能够监控客户放在传统机房的服务器上的HTTP站点，只是配置比较复杂，必须自己开发脚本进行数据收集。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "阿里云的云监控同时可以监控传统机房的服务器上的HTTP站点，使用的是站点监控，可以直接在阿里云控制台快速配置，配置并不复杂，同时阿里云提供技术支持。",
    "category": "安全"
  },
  {
    "id": 443,
    "type": "单选题",
    "title": "阿里云的云盾DDoS基础防护提供最高5G的默认DDoS防护能力，阿里云在此基础上，推出了安全信誉防护联盟计划，如果安全信誉分较高，可进一步提升DDoS防护能力。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "为了给您带来更好的安全防护体验，并且提升安全防护能力，阿里云开展安全信誉防护联盟计划。加入该计划后，依据安全信誉评估结果，可获得阿里云提供的动态的DDoS攻击防御能力。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/40054.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/40054.html</a>",
    "category": "安全"
  },
  {
    "id": 444,
    "type": "单选题",
    "title": "在安全性方面，为了防止源站信息被恶意访问，阿里云内容分发网络CDN同时提供了“IP黑名单”和“Refer黑名单”、“Refer白名单”功能。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "阿里云内容分发网络CDN支持一下防护配置：防盗链功能（Refer黑白名单），IP黑白名单，URL鉴权，参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/40206.html?spm=5176.11065259.1996646101.searchclickresult.7cc75641O79Up6\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/40206.html?spm=5176.11065259.1996646101.searchclickresult.7cc75641O79Up6</a>",
    "category": "安全"
  },
  {
    "id": 445,
    "type": "单选题",
    "title": "未经用户允许阿里云的云盾先知计划不会对外公开任何漏洞标题及细节。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "先知（安全众测）平台会对所有入驻企业的漏洞进行严格的保密，包括漏洞的标题、简述及详情，更不会使用或暗指企业的漏洞来做宣传（企业已授权的情况除外）。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/40058.html?spm=a2c4g.11186623.6.565.772a71d2X7uAkG\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/40058.html?spm=a2c4g.11186623.6.565.772a71d2X7uAkG</a>",
    "category": "安全"
  },
  {
    "id": 446,
    "type": "单选题",
    "title": "阿里云的云盾先知计划共享了众多实名认证过的安全专家和第三方安全公司的能力，提供服务前必须首先签署用户保密协议。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "阿里云的云盾先知计划共享了众多实名认证过的安全专家（白帽子）和第三方安全公司的能力，在安全专家和安全公司注册入驻之前需要在阿里云注册认证及同意相关的保密协议。",
    "category": "安全"
  },
  {
    "id": 447,
    "type": "单选题",
    "title": "由于阿里云提供了云数据库RDS的服务，因此阿里云不支持用户在云服务器ECS实例上自行部署数据库。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "阿里云支持用户在云服务器ECS实例上自行部署数据库。",
    "category": "数据库"
  },
  {
    "id": 448,
    "type": "单选题",
    "title": "对阿里云的云服务器ECS实例进行磁盘快照回滚操作后，在没有任何额外操作的情况下，该磁盘上回滚前的原有数据也可以恢复。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "在没有任何额外操作的情况下，该磁盘上回滚前的原有数据不可恢复。",
    "category": "其他"
  },
  {
    "id": 449,
    "type": "单选题",
    "title": "您创建的处于阿里云的不同可用区内的云服务器ECS实例之间内网一定不互通。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "同一地域不同可用区之间的云服务器ECS实例之间内网是互通的。只有不同地域之间的云服务器ECS实例之间内网默认是不互通的。",
    "category": "其他"
  },
  {
    "id": 450,
    "type": "单选题",
    "title": "您创建阿里云的云服务器ECS实例时，如果系统盘选择了SSD云盘后，可以在线修改系统盘的类型。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "SSD系统盘的云盘不支持修改系统盘的类型。参考链接：<a href=\"https://help.aliyun.com/document_detail/25448.html?spm=5176.11065259.1996646101.searchclickresult.23d42bdaOuWEwC\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25448.html?spm=5176.11065259.1996646101.searchclickresult.23d42bdaOuWEwC</a>",
    "category": "其他"
  },
  {
    "id": 451,
    "type": "单选题",
    "title": "您注册好阿里云账号后，可以单独开通阿里云的云监控服务，云监控服务可以帮助您收集并获取云服务器ECS实例的多项监控指标，还可以针对各项指标设置警报，提升您的监控及运维效率。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "阿里云的云监控服务是自动开通，不需要单独开通。",
    "category": "监控"
  },
  {
    "id": 452,
    "type": "单选题",
    "title": "阿里云弹性伸缩（Auto Scaling）中的伸缩组是指部署了相同应用的云服务器ECS实例的集合，其中的ECS实例既可以是包年包月的，也可以是按量付费的。对于业务量突变的场景，按量计费的ECS实例会在满足业务需求的同时尽可能的节省成本；对于用户已有的包年包月的闲置的ECS实例，也可以手工添加到满足一定条件的伸缩组，能充分利用闲置资源。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "弹性伸缩（Auto Scaling）中既支持自动伸缩，也支持手动添加闲置的ECS实例，手动添加的ECS的规格配置不需要和伸缩配置中的配置相同。",
    "category": "监控"
  },
  {
    "id": 453,
    "type": "单选题",
    "title": "使用阿里云弹性伸缩（Auto Scaling）时，为了应对一些复杂的场景，可以把多种伸缩模式混合使用，比如对于同一个伸缩组可以同时设置固定数量模式、定时模式以及动态模式。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "",
    "category": "监控"
  },
  {
    "id": 454,
    "type": "单选题",
    "title": "阿里云弹性伸缩（Auto Scaling）中，当进行弹性收缩时，对于运行在需要移出伸缩组的ECS实例上的应用，如果简单的中断服务，会影响到客户体验。如果需要确保在ECS实例上任务处理完成才释放该实例，弹性伸缩提供了解决方案：在创建ECS实例使用的镜像中存放一个包含处理逻辑的脚本，并设置成在ECS实例操作系统关机时自动执行该脚本。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "如您需要确保在 ECS 实例上任务处理完成才让弹性伸缩释放该实例，您需要在自定义镜像中存放执行脚本，并设置命令在操作系统关机时自动执行该脚本。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/38552.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/38552.html</a>",
    "category": "监控"
  },
  {
    "id": 455,
    "type": "单选题",
    "title": "阿里云对象存储OSS与云服务器ECS实例之间的内网通信免费，只要OSS Bucket和ECS实例的所属地域在中国大陆范围内，就可以使用内网地址免费通信。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "只有ECS和OSS的Bucket处于同一个地域（Region），才可以使用内网地址通信。",
    "category": "OSS"
  },
  {
    "id": 456,
    "type": "单选题",
    "title": "阿里云对象存储OSS的存储空间Bucket支持删除操作，在删除Bucket前必须先删除Bucket中的所有文件，包括未完成的分片文件。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "删除Bucket前，碎片文件也必须要一起删除。参考链接：<a href=\"https://help.aliyun.com/document_detail/31846.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/31846.html</a>",
    "category": "OSS"
  },
  {
    "id": 457,
    "type": "单选题",
    "title": "阿里云对象存储OSS自身提供的了 “IP黑白名单”功能，当发现有恶意IP频繁访问OSS时，可以直接将IP拉黑，屏蔽访问。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "OSS不提供IP黑名单的功能，可以配合CDN来实现黑名单的功能。",
    "category": "OSS"
  },
  {
    "id": 458,
    "type": "单选题",
    "title": "Bucket的拥有者可以通过OSS控制台为其所拥有的Bucket开启访问日志记录功能,OSS用户需要手动保存访问日志纪录",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "OSS的访问日志会自动保存，用户不需要手动保存访问日志纪录。",
    "category": "OSS"
  },
  {
    "id": 459,
    "type": "单选题",
    "title": "负载均衡提供获取客户端真实IP地址的功能，针对4层（TCP协议）负载均衡服务，SLB后端云服务器ECS可以直接获得来访者的真实IP",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "七层协议通过XForwardedFor获取真实IP，针对4层（TCP协议）服务，后端云服务器将直接获得来访者的真实IP，所以无需采用其他手段获取。参考链接：<a href=\"https://help.aliyun.com/document_detail/85960.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/85960.html</a>",
    "category": "负载均衡"
  },
  {
    "id": 460,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB可以把用户请求分发给后端的云服务器ECS实例，这些云服务器ECS实例的规格配置必须相同。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "负载均衡SLB后端的服务器规格配置不一定必须相同，用户可以手动添加规格配置不相同的ECS实例至负载均衡的后端。参考链接：<a href=\"https://help.aliyun.com/document_detail/86451.html?spm=a2c4g.11186623.6.559.382c4078wroX9p\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/86451.html?spm=a2c4g.11186623.6.559.382c4078wroX9p</a>",
    "category": "负载均衡"
  },
  {
    "id": 461,
    "type": "单选题",
    "title": "阿里云内容分发网络CDN建立并覆盖在承载网之上，由分布在不同区域的边缘节点服务器群组成的分布式网络替代传统以WEB Server为中心的数据传输模式。CDN加速特别适合在站点访问量大，且静态资源被不同用户重复访问的比例高的场景中使用，重复访问率越高加速效果越明显。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "文档原话，阿里云 CDN（内容分发网络）全称是 Alibaba Cloud Content Delivery Network，建立并覆盖在承载网之上、由分布在不同区域的边缘节点服务器群组成的分布式网络，替代传统以WEB Server为中心的数据传输模式。",
    "category": "CDN"
  },
  {
    "id": 462,
    "type": "单选题",
    "title": "使用阿里云弹性伸缩（Auto Scaling）根据业务需求和策略，自动调整其弹性计算资源的管理服务,用户只需购买1台云市场中的镜像,就可以弹出n台同类型镜像的ECS实例。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "弹性伸缩中虽然不可以选择云市场镜像，但是您可以购买一台云市场镜像后，基于此镜像制作自定义镜像，在弹性伸缩策略中设置伸缩的镜像为此自定义镜像即可弹出n台同等类型的ECS实例。",
    "category": "监控"
  },
  {
    "id": 463,
    "type": "单选题",
    "title": "用户开启SLB会话保持功能后，SLB会把来自同一客户端的访问请求分发到不同的后端ECS上进行处理。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "开启会话保持后，负载均衡监听会把来自同一客户端的访问请求分发到同一台后端服务器上。参考链接：<a href=\"https://www.aliyun.com/ss/5Lya6Kd5Ld5oyB/1_a?spm=5176.11065259.0.0.706522e9qmdyKV\" target=\"_blank\" rel=\"noopener\">https://www.aliyun.com/ss/5Lya6Kd5Ld5oyB/1_a?spm=5176.11065259.0.0.706522e9qmdyKV</a>",
    "category": "负载均衡"
  },
  {
    "id": 464,
    "type": "单选题",
    "title": "路由器是阿里云专有网络VPC的枢纽，可以连接本VPC内的各个交换机，但不是连接本VPC与其他网络的网关设备。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "路由器是VPC网络的枢纽，它可以连接VPC内的各个交换机，同时也是连接VPC与其他网络的网关设备。",
    "category": "网络"
  },
  {
    "id": 465,
    "type": "单选题",
    "title": "用户开启阿里绿网后不会占用云服务器ECS实例的CPU资源。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "绿网（新已改名为内容安全）是以API的形式提供服务，不会占用云服务器ECS实例的CPU资源。",
    "category": "安全"
  },
  {
    "id": 466,
    "type": "单选题",
    "title": "阿里云的云盾“DDoS基础防护”和“安骑士”都是阿里云提供的的DDoS防护产品，只是部署的位置不同，一个在IDC入口防护，一个在云服务器内部防护。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "安骑士不具备DDoS防护的功能特性。参考链接：<a href=\"https://help.aliyun.com/document_detail/31770.html?spm=a2c4g.11186623.6.543.408d55164KyMf1\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/31770.html?spm=a2c4g.11186623.6.543.408d55164KyMf1</a>",
    "category": "安全"
  },
  {
    "id": 467,
    "type": "单选题",
    "title": "阿里云的专有网络VPC下的云服务器ECS实例可以绑定EIP，通过EIP打通与外网的连接，可以通过将绑定EIP的云服务器ECS实例配置成公网网关，实现VPC内其他云服务器ECS实例的公网访问。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "VPC下的云服务器ECS实例可以绑定EIP实现公网的访问，同时可以将其配置成公网网关，实现VPC内其他云服务器ECS实例的公网访问。",
    "category": "网络"
  },
  {
    "id": 468,
    "type": "单选题",
    "title": "阿里云的云盾DDos基础防护的工作流程是:当出现网络攻击时,系统自动检测并促发清洗异常流量,如果攻击流量超过DDos基础防护的服务上限,自动做黑洞处理。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "黑洞是指服务器受攻击流量超过本机房黑洞阈值时，阿里云屏蔽服务器的外网访问。当服务器进入黑洞一段时间后，如果系统监控到攻击流量停止，黑洞会自动解封。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/40032.html?spm=5176.11065259.1996646101.searchclickresult.27c4c0373bV29C\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/40032.html?spm=5176.11065259.1996646101.searchclickresult.27c4c0373bV29C</a>",
    "category": "安全"
  },
  {
    "id": 469,
    "type": "单选题",
    "title": "使用阿里云弹性伸缩（Auto Scaling）时,弹性伸缩支持对数据盘的自动弹性伸缩,只需在伸缩配置中进行相应的设置即可。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "弹性伸缩支持数据盘的弹性伸缩，具体请参考：<a href=\"https://help.aliyun.com/knowledge_detail/38553.html?spm=a2c4g.11186631.2.3.202b22dbdaEC7z\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/38553.html?spm=a2c4g.11186631.2.3.202b22dbdaEC7z</a>",
    "category": "监控"
  },
  {
    "id": 470,
    "type": "单选题",
    "title": "阿里云弹性伸缩(Auto Scaling)自动增加云服务器ECS实例后，需要把这些实例的IP手工增加到负载均衡SLB的白名单中去，否则这些新增云服务器ECS实例将无法被负载均衡SLB识别。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "自动伸缩的话，实例的IP会自动增加到负载均衡SLB的白名单中。",
    "category": "负载均衡"
  },
  {
    "id": 471,
    "type": "单选题",
    "title": "TCP是面向连接的协议，在正式收发数据前，必须和对方建立可靠的连接；而UDP协议在数据发送前需要与对方先进行三次握手，然后进行数据包发送和接收。UDP协议的性能要优于TCP。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "TCP需要三次握手，UDP是面向非连接的协议。",
    "category": "其他"
  },
  {
    "id": 472,
    "type": "单选题",
    "title": "阿里云对象存储OSS是阿里云对外提供的海量、安全、低成本、高可靠的云存储服务。OSS中创建文件夹本质上来说是创建了一个size为0的object",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "OSS中的文件夹其实是一个大小为0KB的空文件(叫文件、Object、元素都可以)。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/39527.html?spm=5176.11065259.1996646101.searchclickresult.965e5d0fD3sL0v\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/39527.html?spm=5176.11065259.1996646101.searchclickresult.965e5d0fD3sL0v</a>",
    "category": "安全"
  },
  {
    "id": 473,
    "type": "单选题",
    "title": "在用户自己创建的阿里云专有网络VPC内创建云产品实例的时候，必须指定云产品实例所在的交换机，否则无法创建VPC的云产品实例。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "当创建一个云产品实例时，如果没有可用的专有网络和交换机，您可以使用默认专有网络和交换机。当有可用的专有网络和交换机时，可以指定相应的专用网络和交换机，所以说不管有没有你都需要指定云产品实例所在的交换机。参考链接：<a href=\"https://help.aliyun.com/document_detail/65402.html?spm=5176.10695662.1996646101.searchclickresult.f08b6bbeVf3dUa\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/65402.html?spm=5176.10695662.1996646101.searchclickresult.f08b6bbeVf3dUa</a>",
    "category": "网络"
  },
  {
    "id": 474,
    "type": "单选题",
    "title": "如果您在已经创建好的阿里云的云服务器ECS实例的操作系统内部更改了该ECS实例的私网IP地址，一定不会影响该云服务器ECS实例与其他ECS实例之间私网通信。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "在操作系统内修改了改ECS地址，可能会导致和其他云产品的通信失败。",
    "category": "其他"
  },
  {
    "id": 475,
    "type": "单选题",
    "title": "如果您使用了阿里云的云服务器ECS部署应用，可以结合公网的负载均衡SLB提升web服务的可用性，同时还可以选择内网的负载均衡SLB来提升后台服务的可用性，从而提升整个应用的可用性。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "负载均衡SLB的在内网和公网负载的正确描述。参考链接：<a href=\"https://help.aliyun.com/document_detail/27543.html?spm=a2c4g.11186623.6.548.59d6390an0WDAp\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/27543.html?spm=a2c4g.11186623.6.548.59d6390an0WDAp</a>",
    "category": "负载均衡"
  },
  {
    "id": 476,
    "type": "单选题",
    "title": "使用阿里云弹性伸缩（Auto Scaling）时，某伸缩活动一次要增加10台ECS实例，但其中一台ECS实例创建时失败，其余9台创建成功，则弹性伸缩服务会继续创建一台新的ECS实例，而不会将已经创建好的9台实例释放后再重新创建10台ECS实例。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "弹性伸缩过程中ECS创建失败，并不会回滚之前创建成功的，而是继续去重试之前创建失败的，如题目中所表达的。",
    "category": "监控"
  },
  {
    "id": 477,
    "type": "单选题",
    "title": "阿里云弹性伸缩(Auto Scaling)可以根据用户配置的伸缩规则，自动调整云服务器ECS实例的个数，以满足业务需求。如果用户无法预测业务的变化情况，即无法准确的预测对计算资源的需求，也可以通过使用动态的伸缩模式，基于云监控性能指标（如CPU利用率等）自动增加或者减少云服务器ECS实例。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "这个是弹性伸缩的正确描述。参考链接：<a href=\"https://help.aliyun.com/document_detail/25860.html?spm=a2c4g.11186623.6.544.305c7d0ayRWkPX\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25860.html?spm=a2c4g.11186623.6.544.305c7d0ayRWkPX</a>",
    "category": "监控"
  },
  {
    "id": 478,
    "type": "单选题",
    "title": "用户如果需要使用弹性伸缩服务自动调整弹性计算资源，则必须要和负载均衡服务、云数据库RDS服务、云监控等共同使用才能发挥作用。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "阿里云弹性伸缩(Auto Scaling)可以单独使用，无需搭配其他云产品一起使用。不一定要和负载均衡SLB一起配合使用。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/25970.html?spm=a2c4g.11186631.2.10.1d7522dbf5Y9Uk\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/25970.html?spm=a2c4g.11186631.2.10.1d7522dbf5Y9Uk</a>",
    "category": "数据库"
  },
  {
    "id": 479,
    "type": "单选题",
    "title": "一个SLB实例最多对应10个监听，每个监听可独立配置限定规则。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "目前一个SLB实例最多对应50个监听，每个监听可独立设定限定规则。文档原话。",
    "category": "负载均衡"
  },
  {
    "id": 480,
    "type": "单选题",
    "title": "某公司使用阿里云产品作为企业门户网站的解决方案，通过负载均衡SLB服务转发客户请求到后端的云服务器ECS实例中去处理。目前他们要在网站中新增加一个库存查询的功能，需要访问云数据库RDS实例，他们的方案是：把RDS实例挂到SLB实例的后端服务器池中，在现有的SLB实例上多配置一个监听（Listener）专门负责监听库存查询的需求，然后把需求分发给RDS实例处理。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "负载均衡SLB只支持负载ECS，其他云产品都不支持负载。更不支持在SLB实例上多配置监听以及给RDS分发请求。",
    "category": "数据库"
  },
  {
    "id": 481,
    "type": "单选题",
    "title": "用户开启SLB健康检查功能后，当后端某个ECS健康检查出现问题时会将请求转发到其他健康检查正常的ECS上，而当该ECS恢复正常运行时，SLB会将其自动恢复到对外或对内的服务中。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "官方原话，在负载均衡服务中开启健康检查功能后，当后端某个ECS健康检查出现问题时，会将请求转发到其他健康检查正常的ECS上。当该ECS恢复正常运行时，负载均衡会将其自动恢复到对外或对内的服务中。参考链接：<a href=\"https://www.alibabacloud.com/help/zh/docdetail/27702.htm\" target=\"_blank\" rel=\"noopener\">https://www.alibabacloud.com/help/zh/docdetail/27702.htm</a>",
    "category": "负载均衡"
  },
  {
    "id": 482,
    "type": "单选题",
    "title": "阿里云的负载均衡SLB实例和后端云服务器ECS实例之间是通过公网进行通信的，所以云服务器ECS实例必须配置外网带宽。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "负载均衡SLB实例和后端云服务器ECS实例之间是通过内网通信的。",
    "category": "负载均衡"
  },
  {
    "id": 483,
    "type": "单选题",
    "title": "不同的阿里云专有网络VPC之间完全隔离，默认内网不互通，但可以通过公网建立VPN的方式实现互通。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "不同专有网络之间完全隔离，无法内网互通，当前可以通过公网建立VPN实现互通。参考链接：<a href=\"https://docs.aliyun.com/getPdf?url=cn/vpc/0.0.37/pdf/vpc_faq.pdf\" target=\"_blank\" rel=\"noopener\">https://docs.aliyun.com/getPdf?url=cn/vpc/0.0.37/pdf/vpc_faq.pdf</a>",
    "category": "网络"
  },
  {
    "id": 484,
    "type": "单选题",
    "title": "阿里云的云盾安骑士是一款服务器安全管理软件，可以保护阿里云的云服务器ECS实例的安全，也可以保护非阿里云主机。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "云盾安骑士可以保护阿里云的云服务器ECS实例的安全，也可以保护非阿里云主机。只需要将安骑士 Agent 安装至您的非阿里云服务器上，参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/40476.html?spm=a2c4g.11186631.2.1.57d014b3dqZYEo\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/40476.html?spm=a2c4g.11186631.2.1.57d014b3dqZYEo</a>",
    "category": "安全"
  },
  {
    "id": 485,
    "type": "单选题",
    "title": "阿里云的云盾DDoS高防IP可以抵御数百G的DDoS攻击，阿里云及非阿里云主机都可以使用云盾DDoS高防IP服务。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "云盾DDoS高防IP产品是针对解决互联网服务器（包括非阿里云主机）在遭受大流量的DDoS攻击后导致服务不可用的情况",
    "category": "安全"
  },
  {
    "id": 486,
    "type": "单选题",
    "title": "阿里云内容分发网络CDN支持大文件下载加速、音视频点播加速，以及HTTPS安全加速。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "阿里云内容分发网络CDN支持各类网站静态内网的加速服务，支持HTTPS。参考链接：<a href=\"https://help.aliyun.com/document_detail/27104.html?spm=a2c4g.11186623.6.545.11c612ccVo0lhr\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/27104.html?spm=a2c4g.11186623.6.545.11c612ccVo0lhr</a>",
    "category": "安全"
  },
  {
    "id": 487,
    "type": "单选题",
    "title": "由于阿里云提供了对象存储OSS的海量存储服务，因此在多种场景下均可以使用OSS作为数据的存储服务，包括结构化的数据和非结构化的数据的存储。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "对象存储OSS推荐存储非结构化数据，而不推荐存储结构化数据。结构化的数据存储建议使用云数据库RDS。",
    "category": "OSS"
  },
  {
    "id": 488,
    "type": "单选题",
    "title": "阿里云的云服务器ECS实例中的快照（Snapshot）是磁盘上的数据在某一时间点的拷贝，存储在用户自己构建的云数据库RDS实例上。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "快照是保护在独立于用户自己的OSS Bucket里面，而不是云数据库RDS实例上。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/52045.html?spm=5176.11065259.1996646101.searchclickresult.79392606dQMy0U\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/52045.html?spm=5176.11065259.1996646101.searchclickresult.79392606dQMy0U</a>",
    "category": "数据库"
  },
  {
    "id": 489,
    "type": "单选题",
    "title": "阿里云弹性伸缩（Auto Scaling）经常会和负载均衡SLB一起配合使用，伸缩组和负载均衡SLB必须在同一个地域（Region）。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "阿里云弹性伸缩和和负载均衡SLB一起使用时，两者必须处于同一地域。",
    "category": "负载均衡"
  },
  {
    "id": 490,
    "type": "单选题",
    "title": "某企业运维人员小王基于阿里云弹性伸缩（Auto Scaling）配置了一个完整的弹性伸缩方案，通过定时任务每次添加2台ECS实例到伸缩组中去。定时任务启动后，创建ECS实例的伸缩活动正在执行中，当创建到第3台ECS实例时，小王发现因为自己粗心错把“增加2台ECS”配置成了“增加20台ECS”，为了减少损失，他可以强行终止该伸缩活动。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "不能强行终止该伸缩活动，否则可能导致伸缩组伸缩异常，假如配置错误了以后可以自己手动修改成伸缩配置来释放多创建的云服务器ECS。",
    "category": "监控"
  },
  {
    "id": 491,
    "type": "单选题",
    "title": "阿里云弹性伸缩(Auto Scaling)弹性伸缩免费，但是通过弹性伸缩自动创建或者手工加入的 ECS 实例，需要按照 ECS 相关实例类型进行付费,只有当ECS实例被移出伸缩组之后才不再收取实例费用。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "实例停机不收费功能仅适用于按量付费的 VPC 类型 ECS 实例。",
    "category": "监控"
  },
  {
    "id": 492,
    "type": "单选题",
    "title": "阿里云弹性伸缩(Auto Scaling)不能单独使用，必须要和云服务器ECS以及负载均衡SLB配合使用。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "阿里云弹性伸缩(Auto Scaling)可以单独使用，无需搭配其他云产品一起使用。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/25970.html?spm=a2c4g.11186631.2.10.1d7522dbf5Y9Uk\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/25970.html?spm=a2c4g.11186631.2.10.1d7522dbf5Y9Uk</a>",
    "category": "负载均衡"
  },
  {
    "id": 493,
    "type": "单选题",
    "title": "阿里云对象存储OSS是阿里云对外提供的海量、安全、低成本、高可靠的云存储服务。 OSS支持管理控制台和API（包括SDK）两种文件上传和下载方式。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "OSS支持管理控制台直接上传Object，或者通过API上传。",
    "category": "安全"
  },
  {
    "id": 494,
    "type": "单选题",
    "title": "某企业使用阿里云负载均衡SLB服务提供对外的网站服务，其后端服务器池中的ECS实例上运行的操作系统必须一致，他们选择使用了CentOS，只能把之前一部分运行在Windows上的应用迁移到CentOS上来，否则SLB实例将无法正常工作。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "负载均衡本身不会限制后端ECS实例使用哪种操作系统，只要确保后端ECS实例中的应用服务部署相同且数据一致即可。但建议使用相同的操作系统，以便您日后的管理维护。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/55198.html?spm=a2c4g.11186623.6.744.453f4078uN7bah\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/55198.html?spm=a2c4g.11186623.6.744.453f4078uN7bah</a>",
    "category": "负载均衡"
  },
  {
    "id": 495,
    "type": "单选题",
    "title": "使用阿里云的负载均衡SLB实例时，用户开启健康检查功能后，当后端某个云服务器ECS实例健康检查的状态为异常时，会将请求转发给其他健康检查的状态为正常的云服务器ECS实例，而当该状态异常的云服务器ECS实例恢复正常运行时，负载均衡SLB实例会将其自动恢复到正常的服务中。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "题目中的描述即为负载均衡SLB的正确描述的，负载均衡SLB会将异常的ECS隔离，待ECS正常了以后还会将其从隔离区移出并给其分发请求。",
    "category": "负载均衡"
  },
  {
    "id": 496,
    "type": "单选题",
    "title": "如果用户只使用阿里云的云盾的DDoS基础防护功能，当攻击规模超过服务上限时，会触发黑洞规则，之后用户的服务器仍可以对外提供服务，只是速度受到限制。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "当ECS或SLB实例的公网IP遭到大量DDoS攻击，且DDoS攻击的流量超出对应的黑洞阈值后，该公网IP将被黑洞，所有来自外部的流量都将被丢弃，导致相关的业务无法正常访问。参考链接：<a href=\"https://help.aliyun.com/knowledge_detail/40042.html?spm=a2c4g.11186623.6.566.22c419f8LJROoZ\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/knowledge_detail/40042.html?spm=a2c4g.11186623.6.566.22c419f8LJROoZ</a>",
    "category": "安全"
  },
  {
    "id": 497,
    "type": "单选题",
    "title": "阿里云为云上客户提供了从网络、主机、应用至数据库和内容的全方位安全保护。用户在使用阿里云的服务时不需要考虑安全护问题，只要专注到自己的业务就可以了。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "阿里云提供的保护并不是万能的。用户不仅需要专注自己的业务，同时也需要考虑到服务的安全性问题。",
    "category": "安全"
  },
  {
    "id": 498,
    "type": "单选题",
    "title": "高效的数据处理和管理技术是云计算不可或缺的核心技术之一，不仅要保证数据的存储和访问，还要能够对海量数据进行特定的检索和分析，业界比较流行的有Google的BigTable、阿里云的表格存储（Table MyVuex，原OTS）等，它们提供的其实是关系型数据库服务。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "BigTable是非关系型数据库，是一个稀疏的、分布式的、持久化存储的多维度排序Map。",
    "category": "数据库"
  },
  {
    "id": 499,
    "type": "单选题",
    "title": "阿里云内容分发网络CDN建立并覆盖在承载网之上，由分布在不同区域的边缘节点服务器群组成的分布式网络替代传统以WEB Server为中心的数据传输模式。阿里云CDN可以直接对IP地址进行加速，被加速的网站可以不绑定域名。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "阿里云CDN不支持直接对IP地址进行加速，使用内容分发CDN需要在控制台绑定域名。参考链接：<a href=\"https://help.aliyun.com/document_detail/27112.html?spm=a2c4g.11186623.6.566.5c2d4080zEsQmC\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/27112.html?spm=a2c4g.11186623.6.566.5c2d4080zEsQmC</a>",
    "category": "CDN"
  },
  {
    "id": 500,
    "type": "单选题",
    "title": "负载均衡系统会根据负载均衡实例类型来分配不同的服务地址（公网IP或私网IP），所以当您要进行负载均衡实例类型切换操作时，必须在管理控制台中进行更改设置。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "因为负载均衡系统会根据负载均衡实例类型来分配不同的服务地址（公网IP或私网IP），所以当您要进行负载均衡实例类型切换操作时，必须通过先删除后创建的方式，在新建实例时重新选择负载均衡实例类型。",
    "category": "负载均衡"
  },
  {
    "id": 501,
    "type": "单选题",
    "title": "您在阿里云的Windows操作系统的云服务器ECS实例中结束了shutdown.exe进程之后，通过阿里云的管理控制台对云服务器ECS实例进行任何操作都不会受到影响。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "shutdown.exe进程是系统重要进程，如果结束该进程会导在控制台上下发的指令不能成功执行。参考链接：<a href=\"https://www.alibabacloud.com/help/zh/faqdetail/42474.htm\" target=\"_blank\" rel=\"noopener\">https://www.alibabacloud.com/help/zh/faqdetail/42474.htm</a>",
    "category": "其他"
  },
  {
    "id": 502,
    "type": "单选题",
    "title": "调用阿里云的云服务器ECS提供的Open API接口，是通过向阿里云的API服务端地址发送HTTP GET请求，并按照接口说明在请求中加入相应请求参数来完成的。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "云服务器ECS的API是通过向ECS API的服务端地址发送HTTP GET请求来实现相关的业务请求。参考链接：<a href=\"https://help.aliyun.com/document_detail/25692.html\" target=\"_blank\" rel=\"noopener\">https://help.aliyun.com/document_detail/25692.html</a>",
    "category": "其他"
  },
  {
    "id": 503,
    "type": "单选题",
    "title": "云计算有多种不同的服务模式，以下场景描述的是典型的SaaS（软件即服务）服务：用户只要接上网络，通过浏览器就能直接使用在云端上运行的应用，而不需要考虑安装、维护等工作，并且免去初期高昂的软硬件投入。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "A",
    "explanation": "SaaS的正确描述，SaaS就像打开自来水龙头就能用水一样，企业根据实际需要，向SaaS提供商租赁软件服务。",
    "category": "网络"
  },
  {
    "id": 504,
    "type": "单选题",
    "title": "阿里云专有网络VPC中支持将云服务器ECS实例从同一个路由器下的一台交换机转移到另一台交换机，也支持从一个路由器切换到另一个路由器。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "云服务器ECS实例支持切换交换机，但是不支持切换路由器操作。",
    "category": "网络"
  },
  {
    "id": 505,
    "type": "单选题",
    "title": "如果阿里云上的用户拥有多台云服务器ECS实例，且没有专业的运维团队或者不愿意在运维上花精力，可以开通阿里云的云盾安骑士，提供专家人工安全体检、清除木马、系统加固、人工安全技术支持、托管服务报告。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "安骑士不提供人工安全技术支持、托管服务报告的服务，需要人工安全技术支持、托管服务报告的服务需要选用安全管家服务。",
    "category": "安全"
  },
  {
    "id": 506,
    "type": "单选题",
    "title": "阿里云的云盾的DDoS防护功能可以保护阿里云机房内的所有云产品，包括：云服务器ECS、负载均衡SLB、云数据库RDS、对象存储OSS等。",
    "options": [
      "A.对",
      "B.错"
    ],
    "answer": "B",
    "explanation": "云盾DDoS防护功能可以保障ECS、SLB、WAF、VPC、EIP、NAT云产品的DDoS网络安全，并不是题目中说的这些。",
    "category": "安全"
  }
];

export const categories = [
  '安全',
  '数据库',
  'CDN',
  'OSS',
  '负载均衡',
  '网络',
  '监控',
  '弹性伸缩',
  '其他'
];

export const getQuestionsByCategory = (category: string): Question[] => {
  return questions.filter(q => q.category === category);
};

export const getRandomQuestions = (count: number): Question[] => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
