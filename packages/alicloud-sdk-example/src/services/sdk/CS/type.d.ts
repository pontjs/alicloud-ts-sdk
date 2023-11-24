
type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

export namespace defs {
  /**
   * @title 集群插件配置
   * @description 集群组件配置。
   */
  export class addon {
    /** 组件配置。 */
    config?: string;
    /** 是否禁止默认安装，集群创建时除了安装必需组件外，还会额外安装一些日志组件等，您可以禁止这些默认行为，后续通过安装组件的API进行安装或者通过控制台安装。取值：

    - `true`：禁止默认安装。
    - `false`：允许默认安装。
     */
    disabled?: boolean;
    /** 组件名称。 */
    name?: string;
    /** 组件版本。 */
    version?: string;
  }

  /**
   * @title 节点数据盘配置
   * @description 节点数据盘配置。
   */
  export class data_disk {
    /** 是否挂载。 */
    auto_format?: boolean;
    /** 选择自动快照策略ID，云盘会按照快照策略自动备份。

    默认值：空，不自动备份。 */
    auto_snapshot_policy_id?: string;
    /** 数据盘是否开启Burst（性能突发），磁盘类型为cloud_auto时配置。 */
    bursting_enabled?: boolean;
    /** 数据盘类型。取值：

    - `cloud`：普通云盘。
    - `cloud_efficiency`：高效云盘。
    - `cloud_ssd`：SSD云盘。
    - `cloud_essd`：ESSD云盘。

    默认值：`cloud_efficiency`。 */
    category?: string;
    /** 是否对数据盘加密。取值：

    - `true`：对数据盘加密。
    - `false`：不对数据盘加密。

    默认值：`false`。 */
    encrypted?: string;
    /** 挂载文件系统类型。auto_format为true时生效，可选值：[ext4,xfs] */
    file_system?: string;
    /** 挂载路径。auto_format为true时生效 */
    mount_target?: string;
    /** 节点数据盘磁盘性能等级，仅对ESSD磁盘生效。磁盘性能等级和磁盘大小有关。更多信息，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。 */
    performance_level?: string;
    /** 数据盘预配置的读写IOPS，磁盘类型为cloud_auto时配置。 */
    provisioned_iops?: number;
    /** 数据盘大小，单位为GiB。

    取值范围：\[40,32768\]。

    默认值：`120`。 */
    size?: number;
  }

  /**
   * @title Kubelet参数配置。
   * @description 支持的kubelet配置
   */
  export class kubelet_config {
    /** 允许的sysctl模式白名单。 */
    allowedUnsafeSysctls?: Array<string>;
    /** 每个容器可以存在的日志文件个数上限。 */
    containerLogMaxFiles?: number;
    /** 日志文件被轮转之前可以到达的最大大小。 */
    containerLogMaxSize?: string;
    /** CPU管理器策略。 */
    cpuManagerPolicy?: string;
    /** 事件记录的个数的突发峰值上限。 */
    eventBurst?: number;
    /** 每秒可生成的事件数量。 */
    eventRecordQPS?: number;
    /** 触发Pod驱逐操作的一组硬性门限。 */
    evictionHard?: object;
    /** 设置一组驱逐阈值。 */
    evictionSoft?: object;
    /** 设置一组驱逐宽限期。 */
    evictionSoftGracePeriod?: object;
    /** 特性开关，用来开启实验性功能的配置。 */
    featureGates?: object;
    /** 每秒发送到API Server的突发请求数量上限。 */
    kubeAPIBurst?: number;
    /** 与API Server通信的每秒查询个数。 */
    kubeAPIQPS?: number;
    /** kubernetes系统预留的资源配置。 */
    kubeReserved?: object;
    /** 运行的Pod个数上限。 */
    maxPods?: number;
    /** 只读端口号。 */
    readOnlyPort?: number;
    /** 突发性镜像拉取的个数上限。 */
    registryBurst?: number;
    /** 镜像仓库的QPS上限。 */
    registryPullQPS?: number;
    /** 是否逐一拉取镜像。 */
    serializeImagePulls?: boolean;
    /** 系统预留的资源配置。 */
    systemReserved?: object;
  }

  /**
   * @title 集群维护窗口。
   * @description 集群维护窗口。
   */
  export class maintenance_window {
    /** 维护时长。取值范围\[1,24\]，单位为小时。

    默认值：3h。 */
    duration?: string;
    /** 是否开启维护窗口。取值：
    - `true`：开启维护窗口。
    - `false`：不开启维护窗口。

    默认值：`false`。 */
    enable?: boolean;
    /** 维护起始时间。Golang标准时间格式，例如15:04:05Z。 */
    maintenance_time?: string;
    /** 维护周期，多个值用英文半角逗号（,）分隔。取值：{Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday}

    默认值：`Thursday`。 */
    weekly_period?: string;
  }

  /**
   * @title 节点池信息。
   * @description 节点池。
   */
  export class nodepool {
    /** 自动伸缩节点池配置。 */
    auto_scaling?: {
      /** 【该字段已废弃】

      EIP带宽峰值。单位：Mbps。 */
      eip_bandwidth?: number;
      /** 【该字段已废弃】

      EIP计费类型，取值：

      - `PayByBandwidth`：按固定带宽计费。
      - `PayByTraffic`：按使用流量计费。

      默认值：PayByBandwidth。 */
      eip_internet_charge_type?: string;
      /** 是否启用自动伸缩。

      - `true`：开启节点池自动伸缩功能。
      - `false`：不开启自动伸缩，当取值为false时，`auto_scaling`内的其他配置参数将不生效。

      默认值：`false`。 */
      enable: boolean;
      /** 【该字段已废弃】

      是否绑定EIP，取值：

      - `true`：绑定EIP。
      - `false`：不绑定EIP。

      默认值：`false`。 */
      is_bond_eip?: boolean;
      /** 自动伸缩组最大实例数。 */
      max_instances: number;
      /** 自动伸缩组最小实例数。 */
      min_instances: number;
      /** 自动伸缩类型，按照自动伸缩实例类型划分。取值：

      - `cpu`：普通实例型。
      - `gpu`：GPU实例型。
      - `gpushare`：GPU共享型。
      - `spot`：抢占式实例型。

      默认值：`cpu`。 */
      type?: string };
    /** 【该字段已废弃，请使用desired_size代替】

    节点池节点数量。 */
    count?: number;
    /** 【该字段已废弃】

    边缘节点池配置。 */
    interconnect_config?: {
      /** 【该字段已废弃】

      边缘增强型节点池的网络带宽，单位：Mbps。 */
      bandwidth?: number;
      /** 【该字段已废弃】

      边缘增强型节点池绑定的云连接网实例ID(CCNID)。 */
      ccn_id?: string;
      /** 【该字段已废弃】

      边缘增强型节点池绑定的云连接网实例所属的地域。 */
      ccn_region_id?: string;
      /** 【该字段已废弃】

      边缘增强型节点池绑定的云企业网实例ID(CENID)。 */
      cen_id?: string;
      /** 【该字段已废弃】

      边缘增强型节点池的购买时长，单位：月。 */
      improved_period?: string };
    /** 边缘节点池的网络类型，该值只对`type`为`edge`类型的节点池有意义，取值范围：

    - `basic`：基础型。
    - `improved`：增强型。
    - `private`: 专用型。1.22及以上版本支持。 */
    interconnect_mode?: string;
    /** 集群相关配置。 */
    kubernetes_config?: {
      /** 是否在ECS节点上安装云监控，安装后可以在云监控控制台查看所创建ECS实例的监控信息，推荐开启。取值：

      - `true`：在ECS节点上安装云监控。
      - `false`：不在ECS节点上安装云监控。

      默认值：`false`。 */
      cms_enabled?: boolean;
      /** 节点CPU管理策略。当集群版本在1.12.6及以上时支持以下两种策略：

      - `static`：允许为节点上具有某些资源特征Pod增强其CPU亲和性和独占性。
      - `none`：表示启用现有的默认CPU亲和性方案。

      默认值：`none`。 */
      cpu_policy?: string;
      /** 节点标签，为Kubernetes集群节点添加标签。 */
      labels?: Array<defs.tag>;
      /** 节点名称由三部分组成：前缀 + 节点 IP + 后缀：

      - 前缀和后缀均可由“.”分隔的一个或多个部分构成，每个部分可以使用小写字母、数字和“-”，节点名称首尾必须为小写字母和数字；
      - 节点 IP为完整的节点私网 IP 地址；

      传参包含四个部分，由逗号分隔，例如：参数传入"customized,aliyun,ip,com"字符串（其中“customized”和"ip"为固定的字符串，aliyun为前缀，com为后缀），则节点的名称为：aliyun.192.168.xxx.xxx.com。 */
      node_name_mode?: string;
      /** 容器运行时。取值：
      - `containerd`：推荐使用，支持所有集群版本。
      - `Sandboxed-Container.runv`：安全沙箱容器，提供更高的隔离性，支持1.24版本及以下集群。
      - `docker`：支持1.22版本及以下集群。

      默认值：`containerd` */
      runtime: string;
      /** 容器运行时版本。 */
      runtime_version: string;
      /** 污点配置。 */
      taints?: Array<defs.taint>;
      /** 节点自定义数据。 */
      user_data?: string };
    /** 托管节点池配置。 */
    management?: {
      /** 自动修复，仅当`enable=true`时生效。

      - `true`：自动修复。
      - `false`：不自动修复。 */
      auto_repair?: boolean;
      /** 是否开启托管版节点池，取值：

      - `true`：开启托管节点池。
      - `false`：不开启托管节点池，只有当`enable=true`时，其他相关配置才生效。 */
      enable: boolean;
      /** 自动升级配置，仅当`enable=true`时生效。 */
      upgrade_config?: {
        /** 是否启用自动升级，取值：

        - `true`：启用自动升级。
        - `false`：不启用自动升级。 */
        auto_upgrade?: boolean;
        /** 最大不可用节点数量，取值范围：\[1,1000\]。

        默认值：1。 */
        max_unavailable: number;
        /** 额外节点数量。 */
        surge?: number;
        /** 额外节点比例，和`surge`二选一。 */
        surge_percentage?: number } };
    /** 边缘节点池允许容纳的最大节点数量，该参数大于等于0。0表示无额外限制（仅受限于集群整体可以容纳的节点数，节点池本身无额外限制）。边缘节点池该参数值往往大于0；ess类型节点池和默认的edge类型节点池该参数值为0。 */
    max_nodes?: number;
    /** 节点池配置。 */
    nodepool_info?: {
      /** 节点池名称。 */
      name: string;
      /** 节点池所在资源ID。 */
      resource_group_id?: string;
      /** 节点池类型，取值范围：

      - `ess`：节点池。
      - `edge`：边缘节点池。 */
      type?: string };
    /** 节点池扩容组配置。 */
    scaling_group?: {
      /** 节点池是否开启自动续费，当`instance_charge_type`取值为`PrePaid`时才生效，取值：

      - `true`：自动续费。
      - `false`：不自动续费。

      默认值：`true`。 */
      auto_renew?: boolean;
      /** 节点池自动续费周期。当`instance_charge_type`取值为`PrePaid`时才生效，且为必选值。

      当`PeriodUnit=Month`时，取值范围：{1, 2, 3, 6, 12}。

      默认值：1。 */
      auto_renew_period?: number;
      /** 当`multi_az_policy`取值为`COST_OPTIMIZED`时，如果因价格、库存等原因无法创建足够的抢占式实例，是否允许自动尝试创建按量实例满足ECS实例数量要求。取值：

      - `true`：允许自动尝试创建按量实例满足ECS实例数量要求。
      - `false`：不允许自动尝试创建按量实例满足ECS实例数量要求。 */
      compensate_with_on_demand?: boolean;
      /** 节点池节点数据盘配置。 */
      data_disks?: Array<defs.data_disk>;
      /** 部署集ID。 */
      deploymentset_id?: string;
      /** 节点池期望节点数量。 */
      desired_size?: number;
      /** 自定义镜像ID，默认使用系统提供的镜像。 */
      image_id?: string;
      /** 操作系统镜像类型，和platform参数二选一，取值范围：

      - `AliyunLinux`：Alinux2镜像。
      - `AliyunLinux3`：Alinux3镜像。
      - `AliyunLinux3Arm64`：Alinux3镜像ARM版。
      - `AliyunLinuxUEFI`：Alinux2镜像UEFI版。
      - `CentOS`：CentOS镜像。
      - `Windows`：Windows镜像。
      - `WindowsCore`：WindowsCore镜像。
      - `ContainerOS`：容器优化镜像。 */
      image_type?: string;
      /** 节点池节点付费类型，取值：

      - `PrePaid`：预付费。
      - `PostPaid`：按量付费。

      默认值：`PostPaid`。 */
      instance_charge_type: string;
      /** 实例规格。 */
      instance_types: Array<string>;
      /** 公网IP收费类型。取值：

      - `PayByBandwidth`：按固定带宽计费。
      - `PayByTraffic`：按使用流量计费。 */
      internet_charge_type?: string;
      /** 节点公网IP出带宽最大值，单位为Mbps（Mega bit per second），取值范围：[1,100] */
      internet_max_bandwidth_out?: number;
      /** 密钥对名称，和`login_password`二选一。

      > 如果创建托管节点池，则只支持`key_pair`。 */
      key_pair?: string;
      /** SSH登录密码，和`key_pair`二选一。密码规则为8~30个字符，且至少同时包含三项（大小写字母、数字和特殊符号）。 */
      login_password?: string;
      /** 多可用区伸缩组ECS实例扩缩容策略。取值：

      - `PRIORITY`：根据您定义的虚拟交换机（VSwitchIds.N）扩缩容。当优先级较高的虚拟交换机所在可用区无法创建ECS实例时，自动使用下一优先级的虚拟交换机创建ECS实例。

      - `COST_OPTIMIZED`：按vCPU单价从低到高进行尝试创建。当伸缩配置设置了抢占式计费方式的多实例规格时，优先创建对应抢占式实例。您可以继续通过`CompensateWithOnDemand`参数指定当抢占式实例由于库存等原因无法创建时，是否自动尝试以按量付费的方式创建。

        >`COST_OPTIMIZED`仅在伸缩配置设置了多实例规格或者选用了抢占式实例的情况下生效。

      - `BALANCE`：在伸缩组指定的多可用区之间均匀分配ECS实例。如果由于库存不足等原因可用区之间变得不平衡，您可以通过API RebalanceInstances平衡资源。更多信息，请参见[RebalanceInstances](https://help.aliyun.com/document_detail/71516.html)。

      默认值：`PRIORITY`。 */
      multi_az_policy?: string;
      /** 伸缩组所需要按量实例个数的最小值，取值范围：[0,1000]。当按量实例个数少于该值时，将优先创建按量实例。 */
      on_demand_base_capacity?: number;
      /** 伸缩组满足最小按量实例数（`on_demand_base_capacity`）要求后，超出的实例中按量实例应占的比例。取值范围：[0,100]。 */
      on_demand_percentage_above_base_capacity?: number;
      /** 节点池节点包年包月时长，当`instance_charge_type`取值为`PrePaid`时才生效且为必选值，取值范围：`period_unit`取值为Month时，`period`取值范围：{ 1, 2, 3, 6, 12}。

      默认值：1。 */
      period?: number;
      /** 节点池节点付费周期，当`instance_charge_type`取值为`PrePaid`时需要指定周期。

      `Month`：目前只支持以月为单位。 */
      period_unit?: string;
      /** 操作系统发行版。取值：

      - `CentOS`
      - `AliyunLinux`
      - `Windows`
      - `WindowsCore`

      默认值：`AliyunLinux`。 */
      platform?: string;
      /** 私有节点池配置。 */
      private_pool_options?: {
        /** 私有节点池ID。 */
        id?: string;
        /** 私有节点池类型，实例启动的私有池容量选项。弹性保障服务或容量预定服务在生效后会生成私有池容量，供实例启动时选择。取值：

        - `Open`：开放模式。将自动匹配开放类型的私有池容量。如果没有符合条件的私有池容量，则使用公共池资源启动。

        - `Target`：指定模式。使用指定的私有池容量启动实例，如果该私有池容量不可用，则实例会启动失败。

        - `None`：不使用模式。实例启动将不使用私有池容量。 */
        match_criteria?: string };
      /** RDS实例列表。 */
      rds_instances?: Array<string>;
      /** 伸缩组模式，取值：

      - `release`：标准模式，根据申请资源值的使用量，通过创建、释放ECS的方式进行伸缩。
      - `recycle`：极速模式，通过创建、停机、启动的方式进行伸缩，提高再次伸缩的速度（停机时计算资源不收费，只收取存储费用，本地盘机型除外）。

      默认值：`release`。 */
      scaling_policy?: string;
      /** 节点池安全组ID，与`security_group_ids`二选一，推荐使用`security_group_ids`。 */
      security_group_id?: string;
      /** 安全组ID列表，与`security_group_id`二选一，推荐使用`security_group_ids`，当同时指定`security_group_id`和`security_group_ids`将优先使用`security_group_ids`。 */
      security_group_ids?: Array<string>;
      /** 指定可用实例规格的个数，伸缩组将按成本最低的多个规格均衡创建抢占式实例。取值范围：[1,10]。 */
      spot_instance_pools?: number;
      /** 是否开启补齐抢占式实例。开启后，当收到抢占式实例将被回收的系统消息时，伸缩组将尝试创建新的实例，替换掉将被回收的抢占式实例。取值：

      - `true`：开启补齐抢占式实例。
      - `false`：不开启补齐抢占式实例。 */
      spot_instance_remedy?: boolean;
      /** 当前单台抢占式实例规格市场价格区间配置。 */
      spot_price_limit?: Array<{
        /** 抢占式实例规格。 */
        instance_type?: string;
        /** 单台实例上限价格。
         */
        price_limit?: string }>;
      /** 抢占式实例类型，取值：
      - NoSpot：非抢占式实例。
      - SpotWithPriceLimit：设置抢占实例价格上限。
      - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。

      更多信息，请参见[抢占式实例](https://help.aliyun.com/document_detail/157759.html)。 */
      spot_strategy?: string;
      /** 节点系统盘是否开启Burst（性能突发）。 取值：

      - true：是。
      - false：否。

      当`SystemDiskCategory`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)。 */
      system_disk_bursting_enabled?: boolean;
      /** 节点系统盘类型，取值：

      - `cloud_efficiency`：高效云盘。
      - `cloud_ssd`：SSD云盘。
      - `cloud_essd`：ESSD云盘。
      - `cloud_auto`：ESSD AutoPL云盘。

      默认值：`cloud_efficiency`。 */
      system_disk_category: string;
      /** 节点系统盘磁盘性能，只对ESSD磁盘生效。

      - PL0：并发极限I/O性能中等，读写时延较为稳定。
      - PL1：并发极限I/O性能中等，读写时延较为稳定。
      - PL2：并发极限I/O性能较高，读写时延稳定。
      - PL3：并发极限I/O性能极高，读写时延极稳定。 */
      system_disk_performance_level?: string;
      /** 节点系统盘预配置的读写IOPS。可能值：0~min{50,000, 1000\*容量-基准性能}。 基准性能=min{1,800+50\*容量, 50000}。

      当`SystemDiskCategory`为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)。 */
      system_disk_provisioned_iops?: number;
      /** 节点系统盘大小，单位：GiB。

      取值范围：[40,500]。 */
      system_disk_size: number;
      /** 仅为ECS实例添加标签。

      标签键不可以重复，最大长度为128个字符；标签键和标签值都不能以“aliyun”、“acs:”开头，或包含“https://”、“http://”。 */
      tags?: Array<{
        /** 标签的名称。 */
        key?: string;
        /** 标签值。 */
        value?: string }>;
      /** 虚拟交换机ID。 */
      vswitch_ids: Array<string> };
    /** 加密计算节点池配置。 */
    tee_config?: {
      /** 是否为加密计算节点池。 */
      tee_enable: boolean };
  }

  /**
   * @title 容器运行时配置
   * @description 容器引擎。
   */
  export class runtime {
    /** 容器运行时名称，ACK支持以下三种容器运行时。

    - `Sandboxed-Container.runv`：安全沙箱容器，提供更高的隔离性。
    - `docker`。
    - `containerd`。


    默认：`docker`。 */
    name?: string;
    /** 容器运行时版本，默认为最新版。

    关于安全沙箱运行时的变更详情，请参见[安全沙箱运行时变更记录](https://help.aliyun.com/document_detail/160312.html)。 */
    version?: string;
  }

  /**
   * @title 集群Tag配置
   * @description 标签配置。
   */
  export class tag {
    /** 标签`key`值。 */
    key?: string;
    /** 标签`value`值。 */
    value?: string;
  }

  /**
   * @title 节点污点配置
   * @description 节点污点配置。
   */
  export class taint {
    /** 调度策略。取值：

    - `NoSchedule`：不能容忍，但仅影响调度过程，已被调度的Pod不受影响，仅对新增加的Pod生效。

    - `NoExecute`：不能容忍，当污点变动时，Pod对象会被驱逐。

    - `PreferNoSchedule`：柔性约束，节点现存Pod不受影响。尽量不去满足不合要求的Pod调度到节点上。

    默认策略：`NoSchedule`。 */
    effect?: string;
    /** 污点`key`值。 */
    key?: string;
    /** 污点`value`值。 */
    value?: string;
  }
}

export namespace API {
    /**
   * @path: /clusters/{ClusterId}/attach
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/AttachInstances
   * 添加已有ECS实例到ACK集群。
   * @summary: 添加已有ECS实例到ACK集群。
   */
  export namespace AttachInstances {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = {
      /** 节点CPU管理策略。当集群版本在1.12.6及以上时支持以下两种策略：

      - `static`：允许为节点上具有某些资源特征Pod增强其CPU亲和性和独占性。
      - `none`：表示启用现有的默认CPU亲和性方案。

      默认值：`none`。

      > 指定`nodepool_id`后，该参数不支持。 */
      cpu_policy?: string;
      /** 是否将容器数据和镜像存储在数据盘中。取值：

      - `true`：将容器数据和镜像存储在数据盘。

      - `false`：不将容器数据和镜像存储在数据盘。

      默认值：`false`。


      数据盘挂载规则：

      - 如果ECS已挂载数据盘，且最后一块数据盘的文件系统未初始化，系统会自动将该数据盘格式化为EXT4，用来存放内容/var/lib/docker、/var/lib/kubelet。
      - 如果ECS未挂载数据盘，则不会挂载新的数据盘。
      >当选择将数据存储至数据盘并且ECS已挂载数据盘，数据盘内原有数据将丢失，请注意备份数据。 */
      format_disk?: boolean;
      /** 自定义镜像ID，如果不传则使用默认系统镜像。

      >- 实例系统盘镜像将被替换为该镜像。
      - 指定`nodepool_id`后，该参数不支持。
       */
      image_id?: string;
      /** 待添加实例列表。 */
      instances: Array<string>;
      /** 是否为边缘节点，即ENS节点。取值：

      - `true`：表示添加的节点是边缘节点。

      - `false`：表示添加的节点是不是边缘节点。

      默认值：`false`。

      > 如果是边缘节点，取值必须是`true`，用于标识该节点类型为ENS节点。 */
      is_edge_worker?: boolean;
      /** 是否保留原实例名称。取值：

      - `true`：保留实例名称。

      - `false`：不保留实例名称。

      默认值：`false`。 */
      keep_instance_name?: boolean;
      /** 待添加实例的密钥对名称，和`login_password`二选一。

      > 指定`nodepool_id`后，该参数不支持。 */
      key_pair?: string;
      /** 节点池ID。如果不指定，则将节点添加到默认节点池中。 */
      nodepool_id?: string;
      /** 待添加实例的SSH登录密码，和`key_pair`二选一。密码规则为8~30个字符，且至少同时包含三项（大小写字母、数字和特殊符号），不支持反斜线（\）和半角双引号（"）两个符号。

      出于安全性考虑，密码传输过程中都是经过加密处理的。 */
      password?: string;
      /** RDS实例列表。
       */
      rds_instances?: Array<string>;
      /** 容器运行时。
      > 指定`nodepool_id`后，该参数不支持。 */
      runtime?: defs.runtime;
      /** 节点标签。标签定义规则：

      - 标签由区分大小写的键值对组成，您最多可以设置20个标签。
      - 标签键不可以重复，最长为64个字符；标签值可以为空，最长为128个字符。标签键和标签值都不能以`aliyun`、`acs:`、`https://`或`http://`开头。详情请参见[Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set)。
      > 指定`nodepool_id`后，该参数不支持。 */
      tags?: Array<defs.tag>;
      /** 节点自定义数据。更多详情，请参见[生成实例自定义数据](https://help.aliyun.com/document_detail/49121.html)。

      > 指定`nodepool_id`后，该参数不支持。 */
      user_data?: string };
    export type APIReponse = {
      /** 节点添加信息列表。 */
      list?: Array<{
        /** 节点添加结果状态码。 */
        code?: string;
        /** 实例ID。 */
        instanceId?: string;
        /** 节点添加结果描述信息。 */
        message?: string }>;
      /** 任务ID。 */
      task_id?: string };
  };

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}/attach
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/AttachInstancesToNodePool
   * 添加已有节点到节点池。
   * @summary: 添加已有节点到节点池。
   */
  export namespace AttachInstancesToNodePool {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 节点池ID。 */
      NodepoolId: string;
    };
    export type bodyParams = {
      /** 是否将容器数据和镜像存储在数据盘中。取值：

      - `true`：将容器数据和镜像存储在数据盘。

      - `false`：不将容器数据和镜像存储在数据盘。

      默认值：`false`。


      数据盘挂载规则：

      - 如果ECS已挂载数据盘，且最后一块数据盘的文件系统未初始化，系统会自动将该数据盘格式化为EXT4，用来存放内容/var/lib/docker、/var/lib/kubelet。
      - 如果ECS未挂载数据盘，则不会挂载新的数据盘。
      >当选择将数据存储至数据盘并且ECS已挂载数据盘，数据盘内原有数据将丢失，请注意备份数据。 */
      format_disk?: boolean;
      /** 待添加的实例ID列表。 */
      instances?: Array<string>;
      /** 是否保留原实例名称。取值：

      - `true`：保留实例名称。

      - `false`：不保留实例名称。

      默认值：`true`。 */
      keep_instance_name?: boolean;
      /** 待添加实例的SSH登录密码。 */
      password?: string };
    export type APIReponse = {
      /** 请求ID。 */
      request_id?: string;
      /** 任务ID。 */
      task_id?: string };
  };

  /**
   * @path: /api/v2/clusters/{ClusterId}/upgrade/cancel
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CancelClusterUpgrade
   * 取消处于升级状态的ACK集群。
   * @summary: 取消处于升级状态的ACK集群。
   */
  export namespace CancelClusterUpgrade {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{clusterId}/components/{componentId}/cancel
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CancelComponentUpgrade
   * 取消集群组件升级。
   * @summary: 取消集群组件升级。
   */
  export namespace CancelComponentUpgrade {
    export type Params = {
      /** 集群ID。 */
      clusterId: string;
      /** 组件ID。 */
      componentId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /tasks/{task_id}/cancel
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CancelTask
   * 取消集群任务执行。
   * @summary: 取消集群任务执行。
   */
  export namespace CancelTask {
    export type Params = {
      /** 任务ID。 */
      task_id: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /gs/workflow/{workflowName}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CancelWorkflow
   * 调用CancelWorkflow取消正在运行中的工作流。
   * @summary: 调用CancelWorkflow取消正在运行中的工作流。
   */
  export namespace CancelWorkflow {
    export type Params = {
      /** 工作流名称。 */
      workflowName: string;
    };
    export type bodyParams = {
      /** 执行的操作，目前只支持cancel。 */
      action: string };
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{ClusterId}/controlplanelog
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CheckControlPlaneLogEnable
   * 调用CheckControlPlaneLogEnable查询ACK托管集群控制平面组件日志当前配置状态。
   * @summary: 调用CheckControlPlaneLogEnable查询ACK托管集群控制平面组件日志当前配置状态。
   */
  export namespace CheckControlPlaneLogEnable {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 阿里云账号ID。 */
      aliuid?: string;
      /** 当前开启控制平面日志的组件列表。 */
      components: Array<string>;
      /** 控制平面组件日志对应存储的SLS Project名称。

      默认值：k8s-log-$集群ID。 */
      log_project?: string;
      /** 日志在SLS logstore里的数据保存时间。取值范围：1~3000，单位：天。

      默认值：30天。 */
      log_ttl?: string };
  };

  /**
   * @path: /cluster/{ClusterId}/autoscale/config/
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CreateAutoscalingConfig
   * 调用CreateAutoscalingConfig创建自动伸缩配置。
   * @summary: 调用CreateAutoscalingConfig创建自动伸缩配置。
   */
  export namespace CreateAutoscalingConfig {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = {
      /** 缩容触发时延，节点缩容时需要连续满足触发时延所设定的时间，才能进行缩容。单位：分钟。 */
      cool_down_duration?: string;
      /** 缩容时是否驱逐节点上的DaemonSet pods
      - `true`：驱逐。
      - `false`：不会驱逐。 */
      daemonset_eviction_for_nodes?: boolean;
      /** 节点池扩容顺序策略。取值：
      - `least-waste` ：默认策略。如果可扩容节点池有多个，从中选择一个资源浪费最少的节点池进行扩容。
      - `random`：随机策略。如果可扩容节点池有多个，从中任意选择一个节点池进行扩容。
      - `priority `：优先级策略。如果可扩容节点池有多个，会按照您自定义的伸缩组顺序，选择优先级高的节点池进行扩容。
      优先级的配置存储在kube-system命名空间下ConfigMap的`cluster-autoscaler-priority-expander`中。当自动伸缩进行扩容时，实时读取此配置，将可扩容的伸缩组ID与配置中伸缩组ID进行匹配，在匹配上的伸缩组中选取优先级最大值的伸缩组作为扩容对象。 */
      expander?: string;
      /** GPU缩容阈值，节点上Request的资源与总资源量的比值。 */
      gpu_utilization_threshold?: string;
      /** cluster autoscaler缩容节点时等待节点上pod终止的最长时间。单位：s。 */
      max_graceful_termination_sec?: number;
      /** 考虑缩容时Pod应该有的最小副本数。 */
      min_replica_count?: number;
      /** 极速模式节点缩容成功后，是否删除其对应的K8s Node对象。 */
      recycle_node_deletion_enabled?: boolean;
      /** 是否允许进行节点缩容。取值：
      - `true`：允许缩容。
      - `false`：禁止缩容。 */
      scale_down_enabled?: boolean;
      /** 集群Ready节点数为0时，CA是否扩容。 */
      scale_up_from_zero?: boolean;
      /** 弹性灵敏度，判断伸缩的间隔时间。单位：s。 */
      scan_interval?: string;
      /** cluster autoscaler是否缩容有local storage（如EmptyDir 或 HostPath）的pods的节点
      - `true`：不会缩容。
      - `false`：缩容。 */
      skip_nodes_with_local_storage?: boolean;
      /** cluster autoscaler是否缩容有kube-system命名空间下的Pods（除了DaemonSet或mirror Pods）的节点。
      - `true`：不会缩容。
      - `false`：缩容。 */
      skip_nodes_with_system_pods?: boolean;
      /** 静默时间。扩容出的节点，在静默时间过后，才能进入缩容判断。单位：分钟。 */
      unneeded_duration?: string;
      /** 缩容阈值，节点上Request的资源与总资源量的比值。 */
      utilization_threshold?: string };
    export type APIReponse = any;
  };

  /**
   * @path: /clusters
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CreateCluster
   * 本文仅提供创建ACK集群的全量参数配置，关于如何通过OpenAPI创建不同类型ACK集群的具体操作，请参见如下文档操作：
   * - [通过OpenAPI创建Kubernetes托管版集群](https://help.aliyun.com/document_detail/90776.html)
   * - [通过OpenAPI创建Kubernetes专有版集群](https://help.aliyun.com/document_detail/197620.html)
   * - [通过OpenAPI创建ACK Serverless集群](https://help.aliyun.com/document_detail/144246.html)
   * - [通过OpenAPI创建ACK Edge集群](https://help.aliyun.com/document_detail/128204.html)
   * - [通过OpenAPI创建基础托管版安全沙箱Kubernetes集群](https://help.aliyun.com/document_detail/196321.html)
   * - [通过OpenAPI创建专有版安全沙箱Kubernetes集群](https://help.aliyun.com/document_detail/140623.html)
   * @summary: 本文介绍如何通过OpenAPI创建ACK集群，包含ACK托管版集群、ACK专有版集群、ACK Serverless集群，ACK Edge集群、ACK安全沙箱以及注册集群。关于如何创建不同类型集群的具体操作，请参见下文的使用说明。
   */
  export namespace CreateCluster {
    export type Params = {};
    export type bodyParams = {
      /** 注册集群 API Server SLB 访问控制列表。 */
      access_control_list?: Array<string>;
      /** 集群组件列表，创建集群时通过`addons`指定想要安装的集群组件。

      **网络组件**：必选，包含Flannel和Terway两种网络类型，创建集群时二选一：

      - Flannel网络：\[{"name":"flannel","config":""}\]。
      - Terway网络：\[{"name": "terway-eniip","config": ""}\] 。

      **存储组件**：必选，支持`csi`和`flexvolume`两种类型：

      - `csi`：\[{"name":"csi-plugin","config": ""},{"name": "csi-provisioner","config": ""}\]。
      - `flexvolume`：\[{"name": "flexvolume","config": ""}\] 。

      **日志组件**：可选。推荐开启，如果不开启日志服务时，将无法使用集群审计功能。

      - 使用已有`SLS Project`：\[{"name": "logtail-ds","config": "{\"IngressDashboardEnabled\":\"true\",\"sls_project_name\":\"your_sls_project_name\"}"}\] 。
      - 创建新的`SLS Project`：\[{"name": "logtail-ds","config": "{\"IngressDashboardEnabled\":\"true\"}"}\] 。

      **Ingress组件**：可选，ACK专有版集群默认安装Ingress组件`nginx-ingress-controller`。

      - 安装Ingress并且开启公网：\[{"name":"nginx-ingress-controller","config":"{\"IngressSlbNetworkType\":\"internet\"}"}\] 。
      - 禁止默认安装Ingress：\[{"name": "nginx-ingress-controller","config": "","disabled": true}\] 。

      **事件中心**：可选，默认开启。

      事件中心提供对Kubernetes事件的存储、查询、告警等能力。Kubernetes事件中心关联的Logstore在90天内免费。关于免费策略的更多信息，请参见[创建并使用Kubernetes事件中心](https://help.aliyun.com/document_detail/150476.html#task-2389213)。

      开启事件中心示例：\[{"name":"ack-node-problem-detector","config":"{\"sls_project_name\":\"your_sls_project_name\"}"}\]。 */
      addons?: Array<defs.addon>;
      /** ServiceAccount是Pod和集群`apiserver`通讯的访问凭证，而`api-audiences`是合法的请求`token`身份，用于`apiserver`服务端认证请求`token`是否合法。支持配置多个`audienc`e，通过英文逗号（,）分割。

      关于`ServiceAccount`更多详情，请参见[部署服务账户令牌卷投影](https://help.aliyun.com/document_detail/160384.html)。 */
      api_audiences?: string;
      /** 付费类型。 */
      charge_type?: string;
      /** CIS安全加固。更多信息，请参见[ACK CIS加固使用说明](https://help.aliyun.com/document_detail/223744.html)。

      取值：

      - `true`：开启CIS安全加固。
      - `false`：不开启CIS安全加固。

      默认值：`false`。 */
      cis_enabled?: boolean;
      /** 集群是否安装云监控插件。取值：

      - `true`：安装云监控插件。
      - `false`：不安装云监控插件。

      默认值：`false`。

       */
      cloud_monitor_flags?: boolean;
      /** 集群本地域名。

      命名规则：域名由小数点（.）分隔的一个或多个部分构成，每个部分最长为63个字符，可以使用小写字母、数字和短划线（-），且首尾必须为小写字母或数字。 */
      cluster_domain?: string;
      /** 托管版集群类型，面向托管集群。取值：

      - `ack.pro.small`：专业托管集群，即："ACK Pro版集群"。
      - `ack.standard`：标准托管集群。

      默认值：`ack.standard`。取值可以为空，为空时则创建标准托管集群。

      更多详情，请参见[ACK Pro版集群介绍](https://help.aliyun.com/document_detail/173290.html)。 */
      cluster_spec?: string;
      /** 集群类型。取值：

      - `Kubernetes`：专有版集群。
      - `ManagedKubernetes`：标准托管版集群、边缘托管版集群。
      - `Ask`：标准ASK集群。
      - `ExternalKubernetes`：注册至ACK的外部集群。 */
      cluster_type: string;
      /** Pod网络地址段，必须是有效的私有网段，即以下网段及其子网：10.0.0.0/8、172.16-31.0.0/12-16、192.168.0.0/16。不能与VPC及VPC内已有Kubernetes集群使用的网段重复，创建成功后不能修改。

      有关集群网络规划，请参见[VPC下 Kubernetes的网络地址段规划](https://help.aliyun.com/document_detail/86500.html)。

      > 当创建Flannel网络类型的集群时，该字段为必填。 */
      container_cidr?: string;
      /** 组件名称列表，指定那些控制平面的组件日志需要被收集。

      默认采集apiserver、kcm、scheduler组件的日志。 */
      controlplane_log_components?: Array<string>;
      /** 控制平面组件日志服务Project，可以使用已有Project用于日志存储，也可以使用系统自动创建Project用户日志存储。如果选择自动创建日志服务Project将会自动创建一个名称为`k8s-log-{ClusterID}`的日志服务Project。 */
      controlplane_log_project?: string;
      /** 控制平面组件日志保存天数。 */
      controlplane_log_ttl?: string;
      /** 节点CPU管理策略。当集群版本在1.12.6及以上时支持以下两种策略：

      - `static`：允许为节点上具有某些资源特征Pod增强其CPU亲和性和独占性。
      - `none`：表示启用现有的默认CPU亲和性方案。

      默认值：`none`。 */
      cpu_policy?: string;
      /** 自定义证书SAN，多个IP或域名以英文逗号（,）分隔。 */
      custom_san?: string;
      /** 集群删除保护，防止通过控制台或API误删除集群。取值：

      - `true`：启用集群删除保护，将不能通过控制台或API删除集群。
      - `false`：不启用集群删除保护，则能通过控制台或API删除集群。

      默认值：`false`。 */
      deletion_protection?: boolean;
      /** 集群创建失败是否回滚。取值：

      - `true`：当集群创建失败时，进行回滚操作。
      - `false`：当集群创建失败时，不进行回滚操作。


      默认值：`true`。 */
      disable_rollback?: boolean;
      /** 是否启用RRSA功能。 */
      enable_rrsa?: boolean;
      /** KMS密钥ID，使用该密钥对数据盘进行加密。更多详情，请参见[密钥管理服务](https://help.aliyun.com/document_detail/28935.html)。

      > 该功能只在专业托管版集群（ACK Pro版集群）中生效。

       */
      encryption_provider_key?: string;
      /** 是否开启公网访问。通过EIP暴露API Server，实现集群公网访问。

      - `true`：开启公网访问。
      - `false`：不开启公网访问。选择不开放时，则无法通过外网访问集群API Server。

      默认值：`false`。 */
      endpoint_public_access?: boolean;
      /** 使用已有实例创建集群时，是否对实例进行数据盘挂载，取值：

      - `true`：将容器和镜像存储在数据盘，数据盘内原有数据将丢失，请注意备份数据。

      - `false`：不将容器和镜像存储在数据盘。

      默认值：`false`。

      数据盘挂载规则：

      - 如果ECS已挂载数据盘，且最后一块数据盘的文件系统未初始化，系统会自动将该数据盘格式化为ext4，用来存放内容/var/lib/docker、/var/lib/kubelet。
      - 如果ECS未挂载数据盘，则不会挂载新的数据盘。 */
      format_disk?: boolean;
      /** 节点自定义镜像，默认使用系统镜像。当选择自定义镜像时，将取代默认系统镜像。请参见[自定义镜像](https://help.aliyun.com/document_detail/146647.html)。 */
      image_id?: string;
      /** 操作系统发行版类型，推荐使用该字段指定节点操作系统。取值：

      - CentOS
      - AliyunLinux
      - AliyunLinux Qboot
      - AliyunLinuxUEFI
      - AliyunLinux3
      - Windows
      - WindowsCore
      - AliyunLinux3Arm64
      - ContainerOS

      默认值：`CentOS`。 */
      image_type?: string;
      /** 使用已经节点创建集群时，需要指定ECS实例列表，该实例会作为Worker节点加入集群。

      > 使用已有实例创建集群时，该字段必填。 */
      instances?: Array<string>;
      /** 集群IP Stack */
      ip_stack?: string;
      /** 自动创建企业级安全组，当`security_group_id`为空的时生效。

      > 使用普通安全组时，集群内节点与Terway Pod数量之和不能超过2000。所以创建Terway网络类型集群时，建议使用企业安全组。

      - `true`：创建并使用企业级安全组。
      - `false`：不使用企业级安全组。

      默认值：`true`。 */
      is_enterprise_security_group?: boolean;
      /** 使用已有实例创建集群时，是否保留实例名称。

      - `true`：保留。
      - `false`：不保留，会用系统规则进行替换。

      默认值：`true`。 */
      keep_instance_name?: boolean;
      /** 密钥对名称，和`login_password`二选一。 */
      key_pair?: string;
      /** 集群版本，与Kubernetes社区基线版本保持一致。建议选择最新版本，若不指定，默认使用最新版本。

      目前您可以在ACK控制台创建两种最新版本的集群。您可以通过API创建其他Kubernetes版本集群。关于ACK支持的Kubernetes版本，请参见[Kubernetes版本发布概览](https://help.aliyun.com/document_detail/185269.html)。 */
      kubernetes_version?: string;
      /** 负载均衡规格，取值：
      - slb.s1.small
      - slb.s2.small
      - slb.s2.medium
      - slb.s3.small
      - slb.s3.medium
      - slb.s3.large

      默认值：`slb.s2.small`。 */
      load_balancer_spec?: string;
      /** 集群开启日志服务，只针对ASK集群生效，且取值必须是`SLS`。 */
      logging_type?: string;
      /** SSH登录密码，和`key_pair `二选一。密码规则为8~30个字符，且至少同时包含三项（大小写字母、数字和特殊符号）。 */
      login_password?: string;
      /** Master节点是否开启自动续费，当`master_instance_charge_type`取值为`PrePaid`时才生效，可选值为：

      - `true`：自动续费。
      - `false`：不自动续费。

      默认值：`true`。 */
      master_auto_renew?: boolean;
      /** Master节点自动续费周期，当选择包年包月付费类型时才生效，且为必选值。

      取值范围：{1, 2, 3, 6, 12}。

      默认值：1。 */
      master_auto_renew_period?: number;
      /** Master节点数量，可选值`3`或`5`。

      默认值：`3`。 */
      master_count?: number;
      /** Master节点付费类型，取值：

      - `PrePaid`：包年包月。
      - `PostPaid`：按量付费。

      默认值：`PostPaid`。 */
      master_instance_charge_type?: string;
      /** Master节点实例类型。更多信息，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。 */
      master_instance_types?: Array<string>;
      /** Master节点包年包月时长，当`master_instance_charge_type`取值为`PrePaid`时才生效且为必选值。

      取值范围：{1, 2, 3, 6, 12, 24, 36, 48, 60}。

      默认值：1。

       */
      master_period?: number;
      /** Master节点付费周期，当付费类型为`PrePaid`的时候必须指定周期。

      取值：`Month`，当前仅支持以月为周期。 */
      master_period_unit?: string;
      /** Master节点系统盘类型，取值：

      - `cloud_efficiency`：高效云盘。
      - `cloud_ssd`：SSD云盘。
      - `cloud_essd`：ESSD云盘。

      默认值：`cloud_ssd`。不同可用区，默认值可能会有所差异。 */
      master_system_disk_category?: string;
      /** 集群Master节点系统盘磁盘性能等级， 仅对ESSD磁盘生效。磁盘性能等级和磁盘大小有关，更多信息，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。 */
      master_system_disk_performance_level?: string;
      /** Master节点系统盘类型，取值范围\[40,500\]，单位：GiB。

      默认值：`120`。 */
      master_system_disk_size?: number;
      /** Master节点系统盘采用的自动快照策略ID。 */
      master_system_disk_snapshot_policy_id?: string;
      /** Master节点交换机ID列表，交换机个数取值范围为\[1,3\]。为确保集群的高可用性，推荐您选择3个交换机，且分布在不同的可用区。

      指定的实例规格数量需要和`master_count`保持一致，和`master_vswitch_ids`中的元素一一对应。 */
      master_vswitch_ids?: Array<string>;
      /** 集群名称。

      命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。 */
      name: string;
      /** 创建ASK集群时，是否在VPC中创建NAT网关并配置SNAT规则。取值：

      - `true`：将为您创建NAT网关并自动配置SNAT规则，集群VPC将具备公网访问能力。
      - `false`：不为您创建NAT网关及SNAT规则。集群VPC将不具备公网访问能力。

      默认值：`false`。 */
      nat_gateway?: boolean;
      /** 节点IP数量，通过指定网络的CIDR来确定IP的数量，只对于Flannel网络类型集群生效。

      默认值：`26`。 */
      node_cidr_mask?: string;
      /** 自定义节点名称。

      节点名称由三部分组成：前缀+节点IP地址子串+后缀：

      - 前缀和后缀均可由英文句号（.）分隔的一个或多个部分构成，每个部分可以使用小写字母、数字和短划线（-），且首尾必须为小写字母和数字。
      - IP地址段长度指截取节点IP地址末尾的位数，取值范围\[5,12\]。

      例如，节点IP地址为：192.168.0.55，指定前缀为aliyun.com，IP地址段长度为5，后缀为test，则节点名称为aliyun.com00055test。 */
      node_name_mode?: string;
      /** 节点服务端口，可选端口范围：\[30000,65535\]。

      默认值：`30000-32767`。 */
      node_port_range?: string;
      /** 节点池列表。 */
      nodepools?: Array<defs.nodepool>;
      /** Worker节点数。范围是\[0，100\]。 */
      num_of_nodes?: number;
      /** 操作系统平台类型。取值：
      - Windows
      - Linux

      默认值：`Linux`。 */
      os_type?: string;
      /** 包年包月时间。 */
      period?: number;
      /** 包年包月时间单位。 */
      period_unit?: string;
      /** 操作系统发行版。取值：

      - CentOS
      - AliyunLinux
      - QbootAliyunLinux
      - Qboot
      - Windows
      - WindowsCore

      默认值：`CentOS`。 */
      platform?: string;
      /** Pod虚拟交换机列表，您需要为每一个节点虚拟交换机指定至少一个相同可用区的Pod虚拟交换机并且不能跟节点`vswitch`重复，建议选择网段掩码不大于19的虚拟交换机。

      > 当集群采用Terway网络类型时，必须为集群指定`pod_vswitch_ids`。 */
      pod_vswitch_ids?: Array<string>;
      /** 边缘集群标识。当创建集群类型为边缘托管版时，该参数必填且取值必须为`Edge`。

      - `Default`：非边缘集群。

      - `Edge`：边缘集群。 */
      profile?: string;
      /** kube-proxy代理模式

      - `iptables`: 成熟稳定的kube-proxy代理模式，Kubernetes Service的服务发现和负载均衡使用iptables规则配置，但是性能一般，受规模影响较大，适用于集群存在少量的Service。
      - `ipvs`：高性能的kube-proxy代理模式，Kubernetes Service的服务发现和负载均衡使用Linux IPVS模块进行配置，适用于集群存在大量的Service，对负载均衡有高性能要求的场景。

      默认值：`ipvs`。 */
      proxy_mode?: string;
      /** RDS实例列表，选择您想想要添加白名单的RDS实例。 建议前往RDS加入容器Pod网段与Node网段，设置RDS实例会由于实例非运行的状态导致无法弹出。 */
      rds_instances?: Array<string>;
      /** 集群所在的地域ID。

       */
      region_id: string;
      /** 集群所属资源组ID，实现不同资源的隔离。 */
      resource_group_id?: string;
      /** 集群内容器运行时，默认采用Docker运行时，同时还支持Containerd和安全沙箱容器运行时。

      更多有关容器引擎的选择，请参见[如何选择Docker运行时与安全沙箱运行时](https://help.aliyun.com/document_detail/160313.html)。 */
      runtime?: defs.runtime;
      /** 使用已有安全组创建集群时需要指定安全组ID，和`is_enterprise_security_group`二选一，集群节点自动加入到此安全组。 */
      security_group_id?: string;
      /** ServiceAccount是Pod和集群`apiserver`通讯的访问凭证。而`service-account-issuer`是`serviceaccount token`中的签发身份，即`token payload`中的`iss`字段。

      关于`ServiceAccount`更多详情，请参见[部署服务账户令牌卷投影](https://help.aliyun.com/document_detail/160384.html)。 */
      service_account_issuer?: string;
      /** Service网络地址段，可选范围：10.0.0.0/16-24，172.16-31.0.0/16-24，192.168.0.0/16-24
      不能与VPC网段10.1.0.0/21及VPC内已有Kubernetes集群使用的网段重复，创建成功后不能修改。

      默认使用172.19.0.0/20网段。 */
      service_cidr: string;
      /** 集群内服务发现类型，用于在`ASK`集群中指定服务发现方式。

      - `CoreDNS`：使用Kubernetes原生标准服务发现组件CoreDNS，需要在集群部署一组容器用于DNS解析。默认采用两个0.25 Core 512 MiB规格的ECI实例。
      - `PrivateZone`：使用阿里云PrivateZone产品提供服务发现能力，需要开启PrivateZone服务。

      默认值：不开启。 */
      service_discovery_types?: Array<string>;
      /** 为专有网络配置SNAT。取值：

      - `true`：将为您创建NAT网关并自动配置SNAT规则，若您集群内的节点、应用等需要访问公网需要设置为`true`。
      - `false`：不为您创建NAT网关及SNAT规则。这种模式下，集群内节点及应用将不能访问公网。

      > 如果创建集群时未开启，后续业务需要访问公网，可手动开启。更多信息，请参见[手动开启](https://help.aliyun.com/document_detail/178480.html)。

      默认值：`true`。 */
      snat_entry?: boolean;
      /** 等保加固。更多信息，请参见[ACK等保加固使用说明](https://help.aliyun.com/document_detail/196148.html)。

      取值：
      - `true`：开启等保加固。
      - `false`：不开启等保加固。

      默认值：`false`。 */
      soc_enabled?: boolean;
      /** 是否开放公网SSH登录。用登录"专有版集群"的Master节点，托管版集群中该参数不生效。
      - `true`：表示开放。
      - `false`：表示不开放。

      默认值：`false`。

       */
      ssh_flags?: boolean;
      /** 节点标签。标签定义规则：

      - 标签由区分大小写的键值对组成，您最多可以设置20个标签。
      - 标签键不可以重复，最长为64个字符；标签值可以为空，最长为128个字符。标签键和标签值都不能以“aliyun”、“acs:”、“https://”或“http://”开头。详情请参见[Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set)。 */
      tags?: Array<defs.tag>;
      /** 节点污点信息。污点和容忍度（Toleration）相互配合，可以用来避免Pod被分配到不合适的节点上。更多信息，请参见[taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/)。 */
      taints?: Array<defs.taint>;
      /** 集群创建超时时间，单位分钟。

      默认值：`60`。 */
      timeout_mins?: number;
      /** 集群使用的时区。 */
      timezone?: string;
      /** 自定义集群CA。 */
      user_ca?: string;
      /** 自定义节点数据。 */
      user_data?: string;
      /** 集群使用的专有网络，创建集群时必须为集群提供。 */
      vpcid: string;
      /** 集群节点所在虚拟交换机，当创建零节点的托管版集群时，该字段必填。 */
      vswitch_ids: Array<string>;
      /** Worker节点是否开启自动续费，当`worker_instance_charge_type`取值为`PrePaid`时才生效，取值：

      - `true`：自动续费。
      - `false`：不自动续费。

      默认值：`true`。 */
      worker_auto_renew?: boolean;
      /** Worker节点自动续费周期，当选择包年包月付费类型时才生效，且为必选值。

      取值范围：{1, 2, 3, 6, 12}。 */
      worker_auto_renew_period?: number;
      /** Worker节点数据盘类型、大小等配置的组合。 */
      worker_data_disks?: Array<{
        /** 数据盘类型。 */
        category: string;
        /** 是否对数据盘加密。取值：

        - `true`：对数据盘加密。
        - `false`：不对数据盘加密。

        默认值：`false`。 */
        encrypted?: string;
        /** 节点数据盘磁盘性能等级，仅对ESSD磁盘生效。磁盘性能等级和磁盘大小有关。更多信息，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。 */
        performance_level?: string;
        /** 数据盘大小，取值范围：40～32767。 */
        size: string }>;
      /** Worker节点付费类型，取值：

      - `PrePaid`：包年包月。
      - `PostPaid`：按量付费。

      默认值：按量付费。 */
      worker_instance_charge_type?: string;
      /** Worker节点实例配置。 */
      worker_instance_types?: Array<string>;
      /** Worker节点包年包月时长，当`worker_instance_charge_type`取值为`PrePaid`时才生效且为必选值。

      取值范围：{1, 2, 3, 6, 12, 24, 36, 48, 60}。

      默认值：1。 */
      worker_period?: number;
      /** Wroker节点付费周期，当付费类型为`PrePaid`的时候需要指定周期。

      取值：`Month`，当前只支持以月为周期。 */
      worker_period_unit?: string;
      /** Worker节点系统盘类型。更多信息，请参见[块存储概述](https://help.aliyun.com/document_detail/63136.html)。

      取值：

      - `cloud_efficiency`：高效云盘。
      - `cloud_ssd`：SSD云盘。


      默认值：`cloud_ssd`。 */
      worker_system_disk_category?: string;
      /** 当系统盘为ESSD云盘时，可设置ESSD云盘的性能级别PL（Performance Level）。更多信息，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。

      取值：

      - PL0
      - PL1
      - PL2
      - PL3 */
      worker_system_disk_performance_level?: string;
      /** Worker节点系统盘大小，单位为GiB。

      取值范围：\[40,500\]。

      该参数的取值必须大于或者等于max{40, ImageSize}。

      默认值：`120`。 */
      worker_system_disk_size?: number;
      /** Worker节点系统盘采用的自动快照策略ID。 */
      worker_system_disk_snapshot_policy_id?: string;
      /** 集群节点使用的虚拟交换机列表，一个节点对应一个值。

      当创建零节点的托管版集群时，字段`worker_vswitch_ids `非必填，但是需要提供`vswitch_ids`。 */
      worker_vswitch_ids?: Array<string>;
      /** 集群所属地域的可用区ID。此参数为ASK集群特有参数。

      当创建ASK集群时，如果未指定`vpc_id`和`vswitch_ids`，必须为集群指定`zone_id`，用于自动在该可用区创建VPC网络资源。

       */
      zone_id?: string };
    export type APIReponse = {
      /** 集群ID。 */
      cluster_id?: string;
      /** 请求ID。 */
      request_id?: string;
      /** 任务ID。 */
      task_id?: string };
  };

  /**
   * @path: /clusters/{ClusterId}/nodepools
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CreateClusterNodePool
   * 调用CreateClusterNodePool为集群创建节点池。
   * @summary: 调用CreateClusterNodePool为集群创建节点池。
   */
  export namespace CreateClusterNodePool {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = {
      /** 自动伸缩配置。 */
      auto_scaling?: {
        /** 【该字段已废弃】

        EIP带宽峰值。单位：Mbps。 */
        eip_bandwidth?: number;
        /** 【该字段已废弃】

        EIP计费类型。取值：
        - `PayByBandwidth`：按固定带宽计费。
        - `PayByTraffic`：按使用流量计费。

        默认值：`PayByBandwidth`。 */
        eip_internet_charge_type?: string;
        /** 是否启用自动伸缩。取值：
        - `true`：开启节点池自动伸缩功能。
        - `false`：不开启自动伸缩，当取值为false时，其他`auto_scaling`配置参数将不生效。

        默认值：`false`。 */
        enable: boolean;
        /** 【该字段已废弃】

        是否绑定EIP。取值：

        - `true`：绑定EIP。

        - `false`：不绑定EIP。

        默认值：`false`。 */
        is_bond_eip?: boolean;
        /** 自动伸缩组最大实例数。 */
        max_instances: number;
        /** 自动伸缩组最小实例数。 */
        min_instances: number;
        /** 自动伸缩类型，按照自动伸缩实例类型划分。取值：

        - `cpu`：普通实例型。

        - `gpu`：GPU实例型。

        - `gpushare`：GPU共享型。

        - `spot`：抢占式实例型。

        默认值：`cpu`。 */
        type?: string };
      /** 【该字段已废弃，请使用desired_size代替】

      节点池节点数量。 */
      count?: number;
      /** 【该字段已废弃】

      边缘节点池配置。 */
      interconnect_config?: {
        /** 【该字段已废弃】

        边缘增强型节点池的网络带宽，单位：Mbps。 */
        bandwidth?: number;
        /** 【该字段已废弃】

        边缘增强型节点池绑定的云连接网实例ID(CCNID)。 */
        ccn_id?: string;
        /** 【该字段已废弃】

        边缘增强型节点池绑定的云连接网实例所属的地域。 */
        ccn_region_id?: string;
        /** 【该字段已废弃】

        边缘增强型节点池绑定的云企业网实例ID(CENID)。 */
        cen_id?: string;
        /** 【该字段已废弃】

        边缘增强型节点池的购买时长，单位：月。 */
        improved_period?: string };
      /** 边缘节点池的网络类型，该值只对`type`为`edge`类型的节点池有意义，取值范围：

      - `basic`：基础型。
      - `improved`：增强型。
      - `private`: 专用型。1.22及以上版本支持。 */
      interconnect_mode?: string;
      /** 集群相关配置。 */
      kubernetes_config?: {
        /** 是否在ECS节点上安装云监控，安装后可以在云监控控制台查看所创建ECS实例的监控信息，推荐开启。取值：

        - `true`：在ECS节点上安装云监控。

        - `false`：不在ECS节点上安装云监控。

        默认值：`false`。 */
        cms_enabled?: boolean;
        /** 节点CPU管理策略。当集群版本在1.12.6及以上时支持以下两种策略：

        - `static`：允许为节点上具有某些资源特征Pod增强其CPU亲和性和独占性。
        - `none`：表示启用现有的默认CPU亲和性方案。

        默认值：`none`。 */
        cpu_policy?: string;
        /** 节点标签，为Kubernetes集群节点添加标签。 */
        labels?: Array<defs.tag>;
        /** 节点名称由三部分组成：前缀 \+ 节点 IP \+ 后缀：

        - 前缀和后缀均可由“.”分隔的一个或多个部分构成，每个部分可以使用小写字母、数字和“-”，节点名称首尾必须为小写字母和数字；
        - 节点 IP为完整的节点私网 IP 地址；

        传参包含四个部分，由逗号分隔，例如：参数传入"customized,aliyun,ip,com"字符串（其中“customized”和"ip"为固定的字符串，aliyun为前缀，com为后缀），则节点的名称为：aliyun.192.168.xxx.xxx.com。 */
        node_name_mode?: string;
        /** 容器运行时。 */
        runtime: string;
        /** 容器运行时版本。
         */
        runtime_version: string;
        /** 污点配置。 */
        taints?: Array<defs.taint>;
        /** 节点自定义数据。 */
        user_data?: string };
      /** 托管节点池配置。 */
      management?: {
        /** 自动修复，仅当`enable=true`时生效。

        - `true`：自动修复。

        - `false`：不自动修复。 */
        auto_repair?: boolean;
        /** 自动修复节点策略。 */
        auto_repair_policy?: {
          /** 是否允许重启节点。 */
          restart_node?: boolean };
        /** 是否自动升级。 */
        auto_upgrade?: boolean;
        /** 自动升级策略。 */
        auto_upgrade_policy?: {
          /** 是否允许自动升级kubelet。 */
          auto_upgrade_kubelet?: boolean };
        /** 是否自动修复CVE。 */
        auto_vul_fix?: boolean;
        /** 自动修复CVE策略。 */
        auto_vul_fix_policy?: {
          /** 是否允许重启节点。 */
          restart_node?: boolean;
          /** 允许自动修复的漏洞级别，以逗号分隔。 */
          vul_level?: string };
        /** 是否开启托管版节点池，取值：

        - `true`：开启托管节点池。

        - `false`：不开启托管节点池，只有当enable=true时，其他相关配置才生效。 */
        enable: boolean;
        /** 自动升级配置，仅当`enable=true`时生效。 */
        upgrade_config?: {
          /** 是否启用自动升级，取值：

          - `true`：启用自动升级。

          - `false`：不启用自动升级。 */
          auto_upgrade?: boolean;
          /** 最大不可用节点数量。
          取值范围：\[1,1000\]

          默认值：1。 */
          max_unavailable: number;
          /** 额外节点数量。 */
          surge?: number;
          /** 额外节点比例， 和`surge`二选一。 */
          surge_percentage?: number } };
      /** 边缘节点池允许容纳的最大节点数量.。该参数大于等于0。0表示无额外限制（仅受限于集群整体可以容纳的节点数，节点池本身无额外限制）。边缘节点池该参数值往往大于0；ess类型节点池和默认的edge类型节点池该参数值为0。 */
      max_nodes?: number;
      /** 节点池配置。 */
      nodepool_info?: {
        /** 节点池名称。 */
        name: string;
        /** 节点池所在资源ID。 */
        resource_group_id?: string;
        /** 节点池类型，取值范围：

        - `ess`：节点池。
        - `edge`：边缘节点池。
         */
        type?: string };
      /** 节点池扩容组配置。 */
      scaling_group?: {
        /** 节点池节点是否开启自动续费，当`instance_charge_type`取值为`PrePaid`时才生效。取值：

        - `true`：自动续费。
        - `false`：不自动续费。

        默认值：`true`。 */
        auto_renew?: boolean;
        /** 节点池节点自动续费周期，当选择预付费和自动续费时才生效，且为必选值。当`PeriodUnit=Month`时，取值范围：{1, 2, 3, 6, 12}。

        默认值：1
         */
        auto_renew_period?: number;
        /** 当`multi_az_policy`取值为`COST_OPTIMIZED`时，如果因价格、库存等原因无法创建足够的抢占式实例，是否允许自动尝试创建按量实例满足ECS实例数量要求。取值：

        - `true`：允许自动尝试创建按量实例满足ECS实例数量要求。
        - `false`：不允许自动尝试创建按量实例满足ECS实例数量要求。 */
        compensate_with_on_demand?: boolean;
        /** 节点池节点数据盘配置。 */
        data_disks?: Array<defs.data_disk>;
        /** 部署集ID。 */
        deploymentset_id?: string;
        /** 节点池期望节点数量。 */
        desired_size?: number;
        /** 自定义镜像ID，默认使用系统提供的镜像。 */
        image_id?: string;
        /** 操作系统镜像类型，和`platform`参数二选一，取值范围：

        - `AliyunLinux`：Alinux2镜像。
        - `AliyunLinux3`：Alinux3镜像。
        - `AliyunLinux3Arm64`：Alinux3镜像ARM版。
        - `AliyunLinuxUEFI`：Alinux2镜像UEFI版。
        - `CentOS`：CentOS镜像。
        - `Windows`：Windows镜像。
        - `WindowsCore`：WindowsCore镜像。
        - `ContainerOS`：容器优化镜像。 */
        image_type?: string;
        /** 节点池节点付费类型，取值：
         
        - `PrePaid`：预付费。

        - `PostPaid`：按量付费。

        默认值：`PostPaid`。 */
        instance_charge_type: string;
        /** 节点池节点实例规格。 */
        instance_types: Array<string>;
        /** 公网IP收费类型。取值：

        - PayByBandwidth：按固定带宽计费。
        - PayByTraffic：按使用流量计费。 */
        internet_charge_type?: string;
        /** 节点公网IP出带宽最大值，单位为Mbps（Mega bit per second），取值范围：\[1,100\] */
        internet_max_bandwidth_out?: number;
        /** 免密登录密钥对名称，和`login_password`二选一。

        >如果创建托管节点池，则只支持`key_pair`。 */
        key_pair?: string;
        /** SSH登录密码，和`key_pair `二选一。密码规则为8~30个字符，且至少同时包含三项（大小写字母、数字和特殊符号）。 */
        login_password?: string;
        /** 多可用区伸缩组ECS实例扩缩容策略。取值：

        - `PRIORITY`：根据您定义的虚拟交换机（VSwitchIds.N）扩缩容。当优先级较高的虚拟交换机所在可用区无法创建ECS实例时，自动使用下一优先级的虚拟交换机创建ECS实例。

        - `COST_OPTIMIZED`：按vCPU单价从低到高进行尝试创建。当伸缩配置设置了抢占式计费方式的多实例规格时，优先创建对应抢占式实例。您可以继续通过`CompensateWithOnDemand`参数指定当抢占式实例由于库存等原因无法创建时，是否自动尝试以按量付费的方式创建。

          >`COST_OPTIMIZED`仅在伸缩配置设置了多实例规格或者选用了抢占式实例的情况下生效。

        - `BALANCE`：在伸缩组指定的多可用区之间均匀分配ECS实例。如果由于库存不足等原因可用区之间变得不平衡，您可以通过API [RebalanceInstances](https://help.aliyun.com/document_detail/71516.html)平衡资源。

        默认值：`PRIORITY`。 */
        multi_az_policy?: string;
        /** 伸缩组所需要按量实例个数的最小值，取值范围：\[0,1000\]。当按量实例个数少于该值时，将优先创建按量实例。 */
        on_demand_base_capacity?: number;
        /** 伸缩组满足最小按量实例数（`on_demand_base_capacity`）要求后，超出的实例中按量实例应占的比例。取值范围：\[0,100\]。 */
        on_demand_percentage_above_base_capacity?: number;
        /** 节点池节点包年包月时长，当`instance_charge_type`取值为`PrePaid`时才生效且为必选值，取值范围：`period_unit`取值为Month时，`period`取值范围：{ 1， 2， 3，6，12}。

        默认值：1。 */
        period?: number;
        /** 节点池节点付费周期，当指定为`PrePaid`的时候需要指定周期。Month：以月为计时单位。 */
        period_unit?: string;
        /** 操作系统发行版。取值：
        - `CentOS`
        - `AliyunLinux`
        - `Windows`
        - `WindowsCore`

        默认值：`AliyunLinux`。 */
        platform?: string;
        /** 私有节点池配置。 */
        private_pool_options?: {
          /** 私有节点池ID。 */
          id?: string;
          /** 私有节点池类型，实例启动的私有池容量选项。弹性保障服务或容量预定服务在生效后会生成私有池容量，供实例启动时选择。取值：
          - `Open`：开放模式。将自动匹配开放类型的私有池容量。如果没有符合条件的私有池容量，则使用公共池资源启动。
          - `Target`：指定模式。使用指定的私有池容量启动实例，如果该私有池容量不可用，则实例会启动失败。
          - `None`：不使用模式。实例启动将不使用私有池容量。 */
          match_criteria?: string };
        /** RDS实例列表。 */
        rds_instances?: Array<string>;
        /** 伸缩组模式，取值：

        - `release`：标准模式，根据申请资源值的使用量，通过创建、释放ECS的方式进行伸缩。
        - `recycle`：极速模式，通过创建、停机、启动的方式进行伸缩，提高再次伸缩的速度（停机时计算资源不收费，只收取存储费用，本地盘机型除外）。

        默认值：`release`。 */
        scaling_policy?: string;
        /** 节点池安全组ID，与`security_group_ids`二选一，推荐使用`security_group_ids`。 */
        security_group_id?: string;
        /** 安全组ID列表，与`security_group_id`二选一，推荐使用`security_group_ids`，当同时指定`security_group_id`和`security_group_ids`将优先使用`security_group_ids`。 */
        security_group_ids?: Array<string>;
        /** 指定可用实例规格的个数，伸缩组将按成本最低的多个规格均衡创建抢占式实例。取值范围：\[1,10\]。 */
        spot_instance_pools?: number;
        /** 是否开启补齐抢占式实例。开启后，当收到抢占式实例将被回收的系统消息时，伸缩组将尝试创建新的实例，替换掉将被回收的抢占式实例。取值：

        - `true`：开启补齐抢占式实例。
        - `false`：不开启补齐抢占式实例。
         */
        spot_instance_remedy?: boolean;
        /** 当前单台抢占式实例规格市场价格区间配置。 */
        spot_price_limit?: Array<{
          /** 抢占式实例规格。 */
          instance_type?: string;
          /** 单台实例上限价格。
           */
          price_limit?: string }>;
        /** 抢占式实例类型。取值：

        - `NoSpot`：非抢占式实例。

        - `SpotWithPriceLimit`：设置抢占实例价格上限。

        - `SpotAsPriceGo`：系统自动出价，跟随当前市场实际价格。

        更多信息，请参见[抢占式实例](https://help.aliyun.com/document_detail/165053.html)。 */
        spot_strategy?: string;
        /** 节点系统盘是否开启Burst（性能突发）。 取值：
        - true：是。
        - false：否。

        当`SystemDiskCategory`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)。 */
        system_disk_bursting_enabled?: boolean;
        /** 节点系统盘类型，取值：

        - `cloud_efficiency`：高效云盘。
        - `cloud_ssd`：SSD云盘。
        - `cloud_essd`：ESSD云盘。

        默认值：`cloud_efficiency` */
        system_disk_category: string;
        /** 节点系统盘磁盘性能，只对ESSD磁盘生效。
        - PL0：并发极限I/O性能中等，读写时延较为稳定。
        - PL1：并发极限I/O性能中等，读写时延较为稳定。
        - PL2：并发极限I/O性能较高，读写时延稳定。
        - PL3：并发极限I/O性能极高，读写时延极稳定。 */
        system_disk_performance_level?: string;
        /** 节点系统盘预配置的读写IOPS。可能值：0~min{50,000, 1000\*容量-基准性能}。 基准性能=min{1,800+50\*容量, 50000}。

        当`SystemDiskCategory`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)。 */
        system_disk_provisioned_iops?: number;
        /** 节点系统盘大小，单位：GiB。

        取值范围：\[40,500\]。 */
        system_disk_size: number;
        /** 仅为ECS实例添加标签。

        标签键不可以重复，最大长度为128个字符；标签键和标签值都不能以“aliyun”、“acs:”开头，或包含“https://”、“http://”。 */
        tags?: Array<{
          /** 标签的名称。 */
          key?: string;
          /** 标签值。 */
          value?: string }>;
        /** 虚拟交换机ID，取值范围：\[1,8\]。

        > 为保证高可用性，建议选择不同可用区的虚拟交换机。 */
        vswitch_ids: Array<string> };
      /** 加密计算集群配置。 */
      tee_config?: {
        /** 是否开启加密计算集群。 */
        tee_enable: boolean } };
    export type APIReponse = {
      /** 节点池ID。 */
      nodepool_id?: string;
      /** 任务ID。 */
      task_id?: string };
  };

  /**
   * @path: /triggers
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CreateKubernetesTrigger
   * 为应用创建触发器。
   * @summary: 为应用创建触发器。
   */
  export namespace CreateKubernetesTrigger {
    export type Params = {};
    export type bodyParams = {
      /** 触发器行为，取值：

      `redeploy`：重新部署`project_id`中定义的资源。 */
      action: string;
      /** 集群ID。 */
      cluster_id: string;
      /** 触发器项目名称。

      由应用所在命名空间及应用名称组成，格式为`${namespace}/${name}`。

      取值示例：`default/test-app`。 */
      project_id: string;
      /** 触发器类型。取值：

      - `deployment`：针对无状态应用的触发器。 

      - `application`：针对应用中心应用的触发器。

      默认值：`deployment`。 */
      type?: string };
    export type APIReponse = {
      /** 触发器行为。例如，`redeploy`：重新部署。 */
      action?: string;
      /** 集群ID。 */
      cluster_id?: string;
      /** 触发器ID。 */
      id?: string;
      /** 触发器项目名称。 */
      project_id?: string;
      /** 触发器类型。

      取值：

      - `deployment`：针对无状态应用的触发器。 

      - `application`：针对应用中心应用的触发器。
       */
      type?: string };
  };

  /**
   * @path: /templates
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CreateTemplate
   * 创建一个编排模板。
   * @summary: 创建一个编排模板。
   */
  export namespace CreateTemplate {
    export type Params = {};
    export type bodyParams = {
      /** 编排模板描述。 */
      description?: string;
      /** 模板名称。

      命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。 */
      name: string;
      /** 编排模板标签。 */
      tags?: string;
      /** YAML格式的模板内容。 */
      template: string;
      /** 模板类型，取值可以是任意值。

      - 当取值是`kubernetes`时将在控制台的编排模板页面展示该模板。

      - 当取值是`compose`时将不在控制台展示。

      推荐设置为`kubernetes`。

      默认值：`compose`。 */
      template_type?: string };
    export type APIReponse = {
      /** 编排模板ID。 */
      template_id?: string };
  };

  /**
   * @path: /clusters/{cluster_id}/triggers
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CreateTrigger
   * > 创建触发器仅支持Pod的重新部署。
   * @summary: 为应用创建触发器。
   */
  export namespace CreateTrigger {
    export type Params = {
      /** 集群ID。 */
      cluster_id: string;
    };
    export type bodyParams = {
      /** 触发器行为，取值：

      `redeploy`：重新部署`project_id`中定义的资源。 */
      action: string;
      /** 集群ID。 */
      cluster_id: string;
      /** 触发器项目名称。

      由应用所在命名空间及应用名称组成，格式为`${namespace}/${name}`。

      取值示例：`default/test-app`。 */
      project_id: string;
      /** 触发器类型。取值：

      - `deployment`：针对无状态应用的触发器。 

      - `application`：针对应用中心应用的触发器。

      默认值：`deployment`。 */
      type?: string };
    export type APIReponse = {
      /** 触发器行为。例如，`redeploy`：重新部署。 */
      action?: string;
      /** 集群ID。 */
      cluster_id?: string;
      /** 触发器ID。 */
      id?: string;
      /** 触发器项目名称。 */
      project_id?: string;
      /** 触发器类型。默认值为 deployment 。 */
      type?: string };
  };

  /**
   * @path: /alert/contacts
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteAlertContact
   * undefined
   * @title: 删除报警联系人
   */
  export namespace DeleteAlertContact {
    export type Params = {};
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /alert/contact_groups
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteAlertContactGroup
   * undefined
   * @title: 删除报警联系人分组
   */
  export namespace DeleteAlertContactGroup {
    export type Params = {};
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{ClusterId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteCluster
   * 根据集群 ID 删除集群实例，并释放集群所有节点资源。
   * @summary: 根据集群 ID 删除集群实例，并释放集群所有节点资源。
   */
  export namespace DeleteCluster {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 是否保留所有资源。如果设置该值为`true`，则会忽略`retain_resources`。

      - `true`：保留所有资源。
      - `false`：不保留所有资源。

      默认值：`false`。 */
      retain_all_resources?: boolean;
      /** 是否保留SLB，取值：

      - `true`：保留创建的SLB资源。
      - `false`：不保留创建的SLB资源。

      默认值：`false`。 */
      keep_slb?: boolean;
      /** 资源列表。删除集群时如果需要保留资源，则需要提供对应资源的ID。 */
      retain_resources?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 任务ID。 */
      task_id?: string };
  };

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteClusterNodepool
   * 根据节点池ID，删除集群节点池。
   * @summary: 根据节点池ID，删除集群节点池。
   */
  export namespace DeleteClusterNodepool {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 节点池ID。 */
      NodepoolId: string;
      /** 是否强制删除。 */
      force?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      request_id?: string };
  };

  /**
   * @path: /clusters/{ClusterId}/nodes
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteClusterNodes
   * > - 移除节点会涉及Pod迁移，可能会影响业务，请在业务低峰期操作。- 操作过程中可能存在非预期风险，请提前做好相关的数据备份。- 操作过程中，后台会把当前节点设置为不可调度状态。- 移除节点仅移除Worker节点，不会移除Master节点。
   * @summary: 根据节点名称，移除集群中指定节点。
   */
  export namespace DeleteClusterNodes {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = {
      /** 是否自动排空节点上的Pod。取值：
      - `true`：自动排空节点上的Pod。
      - `false`：不自动排空节点上的Pod。

      默认值：`false`。 */
      drain_node?: boolean;
      /** 移除节点列表，节点名称必须是节点在集群中的名称，例如：`cn-hangzhou.192.168.0.70`。 */
      nodes: Array<string>;
      /** 是否同时移除ECS。取值：

      - `true`：同时移除ECS。
      - `false`：不同移除ECS。

      默认值：`false`。

      > 当节点为包年包月实例时，不支持同时移除ECS。 */
      release_node?: boolean };
    export type APIReponse = {
      /** 集群ID。 */
      cluster_id?: string;
      /** 请求ID。 */
      request_id?: string;
      /** 任务ID。 */
      task_id?: string };
  };

  /**
   * @path: /triggers/revoke/{Id}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteKubernetesTrigger
   * 根据应用触发器ID，删除应用触发器。
   * @summary: 根据应用触发器ID，删除应用触发器。
   */
  export namespace DeleteKubernetesTrigger {
    export type Params = {
      /** 触发器ID。 */
      Id: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{cluster_id}/policies/{policy_name}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeletePolicyInstance
   * 调用DeletePolicyInstance在指定集群中删除策略规则实例。
   * @summary: 调用DeletePolicyInstance在指定集群中删除策略规则实例。
   */
  export namespace DeletePolicyInstance {
    export type Params = {
      /** 目标集群ID。 */
      cluster_id: string;
      /** 策略治理规则名称。 */
      policy_name: string;
      /** 策略规则实例ID。 */
      instance_name?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 策略实例列表。 */
      instances?: Array<string> };
  };

  /**
   * @path: /templates/{TemplateId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteTemplate
   * 根据编排模板ID，删除指定编排模板。
   * @summary: 根据编排模板ID，删除指定编排模板。
   */
  export namespace DeleteTemplate {
    export type Params = {
      /** 编排模板ID。 */
      TemplateId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/[cluster_id]/triggers/[Id]
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteTrigger
   * 删除应用触发器。
   * @summary: 删除应用触发器。
   */
  export namespace DeleteTrigger {
    export type Params = {
      /** 集群ID。 */
      cluster_id: string;
      /** 触发器ID。 */
      Id: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{cluster_id}/policies/{policy_name}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeployPolicyInstance
   * 调用DeployPolicyInstance在指定集群中部署策略规则实例。
   * @summary: 调用DeployPolicyInstance在指定集群中部署策略规则实例。
   */
  export namespace DeployPolicyInstance {
    export type Params = {
      /** 目标集群ID。 */
      cluster_id: string;
      /** 策略治理规则名称。 */
      policy_name: string;
    };
    export type bodyParams = {
      /** 规则治理动作，取值：

      - `deny`：拦截违规部署
      - `warn`：告警 */
      action?: string;
      /** 限制策略实施的命名空间，为空时表示所有命名空间。 */
      namespaces?: Array<string>;
      /** 当前规则实例的配置参数。 */
      parameters?: object };
    export type APIReponse = {
      /** 策略实例列表。 */
      instances?: Array<string> };
  };

  /**
   * @path: /gs/workflow/{workflowName}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescirbeWorkflow
   * 调用DescribeWorkflow查询单个工作流的详细信息。
   * @summary: 调用DescribeWorkflow查询单个工作流的详细信息。
   */
  export namespace DescirbeWorkflow {
    export type Params = {
      /** 工作流名称 */
      workflowName: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 工作流创建时间。 */
      create_time?: string;
      /** 工作流经过时长。 */
      duration?: string;
      /** 任务结束时间。 */
      finish_time?: string;
      /** 输入数据大小。 */
      input_data_size?: string;
      /** 工作流名称。 */
      job_name?: string;
      /** 工作流所在命名空间。 */
      job_namespace?: string;
      /** 输出数据大小。 */
      output_data_size?: string;
      /** 工作流当前状态。 */
      status?: string;
      /** 碱基对个数。 */
      total_bases?: string;
      /** Reads个数。 */
      total_reads?: string;
      /** 用户输入参数。 */
      user_input_data?: string };
  };

  /**
   * @path: /clusters/components/metadata
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeAddons
   * 查询平台支持的所有组件的详情。
   * @summary: 查询平台支持的所有组件的详情。
   */
  export namespace DescribeAddons {
    export type Params = {
      /** 集群所在地域ID。 */
      region: string;
      /** 集群类型，取值：

      - `Kubernetes`: ACK专有版集群。
      - `ManagedKubernetes`：ACK托管版集群，包括ACK Pro版集群、ACK基础版集群、ACK Serverless Pro版集群、ACK Serverless基础版集群、ACK Edge Pro版集群、ACK Edge基础版。
      - `ExternalKubernetes`：ACK注册集群。 */
      cluster_type?: string;
      /** 集群类型，取值：
      - `Default`：托管版集群。
      - `Serverless`：Serverless集群。
      - `Edge`：边缘集群。 */
      cluster_profile?: string;
      /** 集群规格，当集群类型选择`ManagedKubernetes`时，通过集群规格区分集群的类型，取值：
      - `ack.pro.small`：专业托管集群，即ACK Pro版集群。
      - `ack.standard`：标准托管集群。

      默认值为空值，取值可以为空，为空时不通过该字段进行过滤。 */
      cluster_spec?: string;
      /** 集群版本。 */
      cluster_version?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 组件分组列表。 */
      ComponentGroups?: Array<{
        /** 组件分组名称。 */
        group_name?: string;
        /** 该分组内包含的组件名称。 */
        items?: Array<{
          /** 组件名称。 */
          name?: string }> }>;
      /** 标准组件。 */
      StandardComponents?: object };
  };

  /**
   * @path: /clusters/{ClusterID}/components/{AddonName}/instance
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterAddonInstance
   * 调用DescribeClusterAddonInstance查询已安装的集群组件的版本、状态和配置等信息。
   * @summary: 调用DescribeClusterAddonInstance查询已安装的集群组件的版本、状态和配置等信息。
   */
  export namespace DescribeClusterAddonInstance {
    export type Params = {
      /** 集群ID。 */
      ClusterID?: string;
      /** 组件名称。 */
      AddonName?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 组件配置。 */
      config?: string;
      /** 组件名称。 */
      name?: string;
      /** 组件状态：

      - initial：安装中
      - active：已安装
      - unhealthy：状态异常
      - upgrading：升级中
      - updating：变更中
      - deleting：卸载中
      - deleted：已删除 */
      state?: 'initial' | 'active' | 'unhealthy' | 'upgrading' | 'updating' | 'deleting' | 'deleted';
      /** 组件版本。 */
      version?: string };
  };

  /**
   * @path: /clusters/{cluster_id}/components/{component_id}/metadata
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterAddonMetadata
   * 调用DescribeClusterAddonMetadata查询特定集群可使用的指定组件版本信息，包括组件版本、可配置参数等。
   * @summary: 调用DescribeClusterAddonMetadata查询特定集群可使用的指定组件版本信息，包括组件版本、可配置参数等。
   */
  export namespace DescribeClusterAddonMetadata {
    export type Params = {
      /** 集群ID */
      cluster_id: string;
      /** 组件ID */
      component_id: string;
      /** 组件版本 */
      version?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 组件参数Schema */
      config_schema?: string;
      /** 组件名称 */
      name?: string;
      /** 组件版本 */
      version?: string };
  };

  /**
   * @path: /clusters/{ClusterId}/components/{ComponentId}/upgradestatus
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterAddonUpgradeStatus
   * 调用DescribeClusterAddonUpgradeStatus查询集群组件升级状态。
   * @summary: 调用DescribeClusterAddonUpgradeStatus查询集群组件升级状态。
   * @deprecated
   */
  export namespace DescribeClusterAddonUpgradeStatus {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 组件ID，例如：nginx-ingress-controller、flexvolume、metrics-server。

      集群支持的组件，可通过API `DescribeAddons` 进行查询。 */
      ComponentId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = object;
  };

  /**
   * @path: /clusters/{ClusterId}/components/upgradestatus
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterAddonsUpgradeStatus
   * 根据组件名称查询该组件升级状态。
   * @summary: 根据组件名称查询该组件升级状态。
   */
  export namespace DescribeClusterAddonsUpgradeStatus {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 组件名称列表。 */
      componentIds: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = object;
  };

  /**
   * @path: /clusters/{ClusterId}/components/version
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterAddonsVersion
   * 根据集群ID，查询集群中已安装的所有组件的详情。
   * @summary: 根据集群ID，查询集群中已安装的所有组件的详情。
   */
  export namespace DescribeClusterAddonsVersion {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = object;
  };

  /**
   * @path: /clusters/{ClusterId}/attachscript
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterAttachScripts
   * 查询手动添加实例到集群的脚本。
   * @summary: 查询手动添加实例到集群的脚本。
   */
  export namespace DescribeClusterAttachScripts {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = {
      /** 节点CPU架构。支持的CPU架构包括`amd64`、`arm`、`arm64`。

      默认值：`amd64`。

      > 当集群类型为边缘托管版时必填。 */
      arch?: string;
      /** 手动添加已有实例到集群时，是否对该实例进行数据盘挂载，将容器和镜像存储在数据盘上。取值：

      - `true`：对实例进行数据盘挂载，数据盘内原有数据将丢失，请注意备份数据。
      - `false`：不对实例进行数据盘挂载。

      默认值：`false`。

      数据挂载规则：

      - 如果 ECS 已挂载数据盘，且最后一块数据盘的文件系统未初始化，系统会自动将该数据盘格式化为 ext4，用来存放内容/var/lib/docker、/var/lib/kubelet 。
      - 如果 ECS 未挂载数据盘，则不会挂载新的数据盘。

       */
      format_disk?: boolean;
      /** 添加已有实到集群时，是否保留实例名称。如果不保留，则实例名称格式为`worker-k8s-for-cs-<clusterid>`。取值：

      - `true`：保留实例名称。
      - `false`：不保留实例名称，会用系统规则进行替换。

      默认值：`true`。 */
      keep_instance_name?: boolean;
      /** 节点池ID，添加节点时可以将该节点添加到指定的节点池中。

      > 如果不指定节点池ID，默认将节点添加至默认节点池。 */
      nodepool_id?: string;
      /** 节点的接入配置参数。

      > 当集群类型为边缘托管版时必填。 */
      options?: string;
      /** 如果指定了RDS实例列表，集群节点ECS会自动加入RDS访问白名单。 */
      rds_instances?: Array<string> };
    export type APIReponse = string;
  };

  /**
   * @path: /clusters/{ClusterId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterDetail
   * 根据集群ID查询该集群的详情。
   * @summary: 根据集群ID查询该集群的详情。
   */
  export namespace DescribeClusterDetail {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 集群ID。 */
      cluster_id?: string;
      /** 托管版集群类型，面向托管集群：

      - `ack.pro.small`：专业托管集群。
      - `ack.standard` ：标准托管集群。

       */
      cluster_spec?: string;
      /** 集群类型，取值：

      - `Kubernetes`: ACK专有版集群。
      - `ManagedKubernetes`：ACK托管版集群，包括ACK Pro版集群、ACK基础版集群、ACK Serverless Pro版集群、ACK Serverless基础版集群、ACK Edge Pro版集群、ACK Edge基础版。
      - `ExternalKubernetes`：注册集群。 */
      cluster_type?: string;
      /** 集群创建时间。 */
      created?: string;
      /** 集群当前版本。ACK支持的Kubernetes版本，请参见[Kubernetes版本发布概览](https://help.aliyun.com/document_detail/185269.html)。 */
      current_version?: string;
      /** 集群删除保护，防止通过控制台或API误删除集群。取值：

      - `true`：启用集群删除保护，将不能通过控制台或API删除集群。
      - `false`：不启用集群删除保护，则能通过控制台或API删除集群。

       */
      deletion_protection?: boolean;
      /** 集群中的Docker版本。 */
      docker_version?: string;
      /** 集群Ingress LB实例ID。 */
      external_loadbalancer_id?: string;
      /** 集群初始化版本。 */
      init_version?: string;
      /** 集群维护窗口配置，只在专业托管版本（即：ACK Pro版集群）中生效。 */
      maintenance_window?: defs.maintenance_window;
      /** 集群访问地址，包含内网访问地址及公网访问地址。 */
      master_url?: string;
      /** 集群元数据信息。 */
      meta_data?: string;
      /** 集群名称。

      命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。 */
      name?: string;
      /** 集群采用的网络类型，例如：VPC网络。 */
      network_mode?: string;
      /** 集群可升级版本。 */
      next_version?: string;
      /** 集群ROS参数集合。 */
      parameters?: object;
      /** 集群是否启用用PrivateZone。  true：启用 false：不启用 默认值：false。 */
      private_zone?: boolean;
      /** 面向场景时的集群类型：

      - `Default`：非边缘场景集群。
      - `Edge`：边缘场景集群。

       */
      profile?: string;
      /** 集群所在地域ID。 */
      region_id?: string;
      /** 集群资源组ID。 */
      resource_group_id?: string;
      /** 集群安全组ID。 */
      security_group_id?: string;
      /** 集群节点数，包含Master节点及Worker节点。 */
      size?: number;
      /** 集群运行状态，取值：

      - `initial`：集群创建中。
      - `failed`：集群创建失败。
      - `running`：集群运行中。
      - `updating`：集群升级中。
      - `updating_failed`：集群升级失败。
      - `scaling`：集群伸缩中。
      - `waiting`：等待接入状态。
      - `disconnected`：断开状态。
      - `stopped`：集群已经停止运行。
      - `deleting`：集群删除中。
      - `deleted`：集群已经被删除。
      - `delete_failed`：集群删除失败。    */
      state?: string;
      /** Pod网络地址段，必须是有效的私有网段，即以下网段及其子网：
      - 10.0.0.0/8
      - 172.16-31.0.0/12-16
      - 192.168.0.0/16

      不能与VPC及VPC内已有Kubernetes集群使用的网段重复，创建成功后不能被修改。

      关于集群网络规划，请参见[VPC下Kubernetes的网络地址段规划](https://help.aliyun.com/document_detail/186964.html)。 */
      subnet_cidr?: string;
      /** 集群资源标签。 */
      tags?: Array<defs.tag>;
      /** 集群更新时间。 */
      updated?: string;
      /** 集群专有网络ID，创建集群时的必填参数。 */
      vpc_id?: string;
      /** 虚拟交换机ID，创建集群时可选择1~3个虚拟交换机。为保证集群高可用，建议选择不同可用区的虚拟交换机。 */
      vswitch_id?: string;
      /** Worker RAM角色名称，授权ECS实例为集群Woker节点。 */
      worker_ram_role_name?: string;
      /** 集群所在地域内的可用区ID。 */
      zone_id?: string };
  };

  /**
   * @path: /clusters/{ClusterId}/events
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterEvents
   * 查询指定集群的事件列表。
   * @summary: 查询指定集群的事件列表。
   */
  export namespace DescribeClusterEvents {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 每页大小，取值范围1-50。
      默认值：50。 */
      page_size?: number;
      /** 分页页数。 */
      page_number?: number;
      /** 查询的任务ID。 */
      task_id?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 事件列表。 */
      events?: Array<{
        /** 集群ID。 */
        cluster_id?: string;
        /** 事件描述。 */
        data?: {
          /** 事件级别。 */
          level?: string;
          /** 事件详情。 */
          message?: string;
          /** 事件状态。 */
          reason?: string };
        /** 事件ID。 */
        event_id?: string;
        /** 事件源。 */
        source?: string;
        /** 事件关联的操作对象。 */
        subject?: string;
        /** 事件开始时间。 */
        time?: string;
        /** 事件类型。 */
        type?: string }>;
      /** 分页信息。 */
      page_info?: {
        /** 分页页数。 */
        page_number?: number;
        /** 每页大小，取值范围1-50。
        默认值：50。 */
        page_size?: number;
        /** 结果总数。 */
        total_count?: number } };
  };

  /**
   * @path: /clusters/{ClusterId}/logs
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterLogs
   * 根据集群ID，查询集群日志。
   * @summary: 根据集群ID，查询集群日志。
   */
  export namespace DescribeClusterLogs {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = Array<{
      /** 日志ID。 */
      ID?: number;
      /** 集群ID。 */
      cluster_id?: string;
      /** 日志内容。 */
      cluster_log?: string;
      /** 日志产生时间。 */
      created?: string;
      /** 日志更新时间。 */
      updated?: string }>;
  };

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterNodePoolDetail
   * 根据节点池ID，查询集群中该节点池的详情。
   * @summary: 根据节点池ID，查询集群中该节点池的详情。
   */
  export namespace DescribeClusterNodePoolDetail {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 节点池ID。 */
      NodepoolId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 自动伸缩节点池配置。 */
      auto_scaling?: {
        /** EIP带宽峰值。 */
        eip_bandwidth?: number;
        /** EIP计费类型，取值：

        - `PayByBandwidth`：按固定带宽计费。
        - `PayByTraffic`：按使用流量计费。
         */
        eip_internet_charge_type?: string;
        /** 是否启用自动伸缩。取值：

        - `true`：开启节点池自动伸缩功能。
        - `false`：不开启自动伸缩，当取值为false时，`auto_scaling`内的其他配置参数将不生效。
         */
        enable?: boolean;
        /** 是否绑定EIP，取值：

        - `true`：绑定EIP。
        - `false`：不绑定EIP。

         */
        is_bond_eip?: boolean;
        /** 最大实例数。 */
        max_instances?: number;
        /** 最小实例数。 */
        min_instances?: number;
        /** 自动伸缩类型，按照自动伸缩实例类型划分。取值：

        - `cpu`：普通实例型。
        - `gpu`：GPU实例型。
        - `gpushare`：GPU共享型。
        - `spot`：抢占式实例型。
         */
        type?: string };
      /** 【该字段已废弃】

      边缘节点池网络相关的配置。该值只对edge类型的节点池有意义。 */
      interconnect_config?: {
        /** 【该字段已废弃】

        边缘增强型节点池的网络带宽，单位为Mbps。 */
        bandwidth?: number;
        /** 【该字段已废弃】

        边缘增强型节点池绑定的云连接网实例ID (CCNID)。 */
        ccn_id?: string;
        /** 【该字段已废弃】

        边缘增强型节点池绑定的云连接网实例所属的区域。 */
        ccn_region_id?: string;
        /** 【该字段已废弃】

        边缘增强型节点池绑定的云企业网实例ID (CENID)。 */
        cen_id?: string;
        /** 【该字段已废弃】

        边缘增强型节点池的购买时长，单位为月。 */
        improved_period?: string };
      /** 边缘节点池的网络类型。basic：基础型；dedicated：专用型。该值只对edge类型的节点池有意义。 */
      interconnect_mode?: string;
      /** 集群相关配置。 */
      kubernetes_config?: {
        /** 是否在ECS节点上安装云监控，安装后可以在云监控控制台查看所创建ECS实例的监控信息，推荐开启。取值：

        - `true`：在ECS节点上安装云监控。
        - `false`：不在ECS节点上安装云监控。 */
        cms_enabled?: boolean;
        /** 节点CPU管理策略。当集群版本在1.12.6及以上时支持以下两种策略：

        - `static`：允许为节点上具有某些资源特征Pod增强其CPU亲和性和独占性。
        - `none`：表示启用现有的默认CPU亲和性方案。 */
        cpu_policy?: string;
        /** 节点标签，为Kubernetes集群节点添加标签。标签定义规则：

        - 标签由区分大小写的键值对组成，您最多可以设置20个标签。
        - 标签键不可以重复，最长为64个字符；标签值可以为空，最长为128个字符。标签键和标签值都不能以`aliyun`、`acs:`、`https://`或`http://`开头。更多信息，请参见[Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set)。 */
        labels?: Array<defs.tag>;
        /** 节点名称由三部分组成：前缀 \+ 节点 IP 地址子串 \+ 后缀：

        - 前缀和后缀均可由“.”分隔的一个或多个部分构成，每个部分可以使用小写字母、数字和“-”，节点名称首尾必须为小写字母和数字。
        - IP 地址段长度指截取节点 IP 地址末尾的位数，取值范围 5-12。

        例如，节点 IP 地址为：192.168.0.55，指定前缀为 aliyun.com，IP 地址段长度为 5，后缀为 test，则节点名称为aliyun.com00055test。 */
        node_name_mode?: string;
        /** 容器运行时名称。 */
        runtime?: string;
        /** 容器运行时版本。 */
        runtime_version?: string;
        /** 节点污点信息。污点和容忍度（Toleration）相互配合，可以用来避免Pod被分配到不合适的节点上。更多信息，请参见[taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/)。 */
        taints?: Array<defs.taint>;
        /** 节点池自定义数据。更多详情，请参见[生成实例自定义数据](https://help.aliyun.com/document_detail/49121.html)。 */
        user_data?: string };
      /** 托管节点池配置。 */
      management?: {
        /** 自动修复，仅当`enable=true`时生效。

        - `true`：自动修复。
        - `false`：不自动修复。
         */
        auto_repair?: boolean;
        /** 自动修复节点策略。 */
        auto_repair_policy?: {
          /** 是否允许重启节点。 */
          restart_node?: boolean };
        /** 是否自动升级。 */
        auto_upgrade?: boolean;
        /** 自动升级策略。 */
        auto_upgrade_policy?: {
          /** 是否允许自动升级kubelet。 */
          auto_upgrade_kubelet?: boolean };
        /** 是否自动修复CVE。 */
        auto_vul_fix?: boolean;
        /** 自动修复CVE策略。 */
        auto_vul_fix_policy?: {
          /** 是否允许重启节点。 */
          restart_node?: boolean;
          /** 允许自动修复的漏洞级别，以逗号分隔。 */
          vul_level?: string };
        /** 是否开启托管版节点池，取值：

        - `true`：开启托管节点池。
        - `false`：不开启托管节点池，只有当`enable=true`时，其他相关配置才生效。
         */
        enable?: boolean;
        /** 自动升级配置，仅当`enable=true`时生效。 */
        upgrade_config?: {
          /** 是否启用自动升级，取值：

          - `true`：启用自动升级。
          - `false`：不启用自动升级。
           */
          auto_upgrade?: boolean;
          /** 最大不可用节点数量，取值范围：\[1,1000\]。

          默认值：1。 */
          max_unavailable?: number;
          /** 额外节点数量。 */
          surge?: number;
          /** 额外节点比例，和`surge`二选一。 */
          surge_percentage?: number } };
      /** 边缘节点池允许容纳的最大节点数量. 节点池内可以容纳的最大节点数量，该参数大于等于0。0表示无额外限制（仅受限于集群整体可以容纳的节点数，节点池本身无额外限制）。边缘节点池该参数值往往大于0；ess类型节点池和默认的edge类型节点池该参数值为0。 */
      max_nodes?: number;
      /** 节点配置。 */
      node_config?: {
        /** Kubelet参数配置。 */
        kubelet_configuration?: defs.kubelet_config };
      /** 节点池配置。 */
      nodepool_info?: {
        /** 节点池创建时间。 */
        created?: string;
        /** 是否为默认节点池，通常一个集群仅有一个默认节点池。取值：
        `true`：设置为默认节点池。
        `false`：不设置为默认节点池。

         */
        is_default?: boolean;
        /** 节点池名称。

        命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。 */
        name?: string;
        /** 节点池ID。 */
        nodepool_id?: string;
        /** 地域ID。 */
        region_id?: string;
        /** 资源组ID。 */
        resource_group_id?: string;
        /** 节点池类型。 */
        type?: string;
        /** 节点池更新时间。 */
        updated?: string };
      /** 扩容组配置。 */
      scaling_group?: {
        /** 节点是否开启自动续费，当`instance_charge_type`取值为`PrePaid`时才生效，取值：

        - `true`：自动续费。
        - `false`：不自动续费。
         */
        auto_renew?: boolean;
        /** 节点自动续费周期。当`instance_charge_type`取值为`PrePaid`时才生效，且为必选值。

        当`PeriodUnit=Month`时，取值范围：{1, 2, 3, 6, 12}。 */
        auto_renew_period?: number;
        /** 当`multi_az_policy`取值为`COST_OPTIMIZED`时，如果因价格、库存等原因无法创建足够的抢占式实例，是否允许自动尝试创建按量实例满足ECS实例数量要求。取值：

        - `true`：允许自动尝试创建按量实例满足ECS实例数量要求。
        - `false`：不允许自动尝试创建按量实例满足ECS实例数量要求。 */
        compensate_with_on_demand?: boolean;
        /** 节点数据盘类型、大小等配置的组合。 */
        data_disks?: Array<defs.data_disk>;
        /** 部署集ID。 */
        deploymentset_id?: string;
        /** 节点池期望节点数。 */
        desired_size?: number;
        /** 自定义镜像ID，可通过`DescribeKubernetesVersionMetadata`查询系统支持的镜像。

         */
        image_id?: string;
        /** 节点池节点付费类型，取值：

        - `PrePaid`：预付费。
        - `PostPaid`：按量付费。
         */
        instance_charge_type?: string;
        /** 节点实例规格列表，您可以选择多个实例规格作为备选，每个节点创建时，将从第一个规格开始尝试购买，直到创建成功。最终购买的实例规格可能随库存变化而不同。 */
        instance_types?: Array<string>;
        /** 节点公网IP网络计费类型。 */
        internet_charge_type?: string;
        /** 节点公网IP出带宽最大值，单位为Mbps（Mega bit per second），取值范围：1~100。 */
        internet_max_bandwidth_out?: number;
        /** 密钥对名称，和`login_password`二选一。当节点池为托管版节点池时，只支持`key_pair`。 */
        key_pair?: string;
        /** SSH登录密码，和`key_pair`二选一。密码规则为8~30个字符，且至少同时包含三项（大小写字母、数字和特殊符号）。

        出于安全性考虑，密码查询结果经过加密处理。 */
        login_password?: string;
        /** 多可用区伸缩组ECS实例扩缩容策略。取值：

        - `PRIORITY`：根据您定义的虚拟交换机（VSwitchIds.N）扩缩容。当优先级较高的虚拟交换机所在可用区无法创建ECS实例时，自动使用下一优先级的虚拟交换机创建ECS实例。

        - `COST_OPTIMIZED`：按vCPU单价从低到高进行尝试创建。当伸缩配置设置了抢占式计费方式的多实例规格时，优先创建对应抢占式实例。您可以继续通过`CompensateWithOnDemand`参数指定当抢占式实例由于库存等原因无法创建时，是否自动尝试以按量付费的方式创建。

          >`COST_OPTIMIZED`仅在伸缩配置设置了多实例规格或者选用了抢占式实例的情况下生效。

        - `BALANCE`：在伸缩组指定的多可用区之间均匀分配ECS实例。如果由于库存不足等原因可用区之间变得不平衡，您可以通过API RebalanceInstances平衡资源。更多信息，请参见[RebalanceInstances](https://help.aliyun.com/document_detail/71516.html)。

        默认值：`PRIORITY`。 */
        multi_az_policy?: string;
        /** 伸缩组所需要按量实例个数的最小值，取值范围：\[0,1000\]。当按量实例个数少于该值时，将优先创建按量实例。 */
        on_demand_base_capacity?: number;
        /** 伸缩组满足最小按量实例数（`on_demand_base_capacity`）要求后，超出的实例中按量实例应占的比例。取值范围：\[0,100\]。 */
        on_demand_percentage_above_base_capacity?: number;
        /** 节点包年包月时长，当`instance_charge_type`取值为`PrePaid`时才生效且为必选值。

        当`PeriodUnit=Month`时，取值范围：{1, 2 , 3, 6, 12, 24, 36, 48, 60}。 */
        period?: number;
        /** 节点付费周期，当`instance_charge_type`取值为`PrePaid`时时候需要指定周期。

        `Month`：目前只支持以月为单位。
         */
        period_unit?: string;
        /** 操作系统发行版。取值：

        - `CentOS`
        - `AliyunLinux`
        - `Windows`
        - `WindowsCore` */
        platform?: string;
        /** 私有节点池配置。 */
        private_pool_options?: {
          /** 私有节点池ID。 */
          id?: string;
          /** 私有节点池类型，实例启动的私有池容量选项。弹性保障服务或容量预定服务在生效后会生成私有池容量，供实例启动时选择。取值：

          - `Open`：开放模式。将自动匹配开放类型的私有池容量。如果没有符合条件的私有池容量，则使用公共池资源启动。

          - `Target`：指定模式。使用指定的私有池容量启动实例，如果该私有池容量不可用，则实例会启动失败。

          - `None`：不使用模式。实例启动将不使用私有池容量。 */
          match_criteria?: string };
        /** Worker RAM角色名称，授权ECS实例为集群Woker节点。 */
        ram_policy?: string;
        /** 如果指定了RDS实例列表，集群节点ECS会自动加入RDS访问白名单。 */
        rds_instances?: Array<string>;
        /** 伸缩组ID。 */
        scaling_group_id?: string;
        /** 伸缩组模式，取值：

        - `release`：标准模式，根据申请资源值的使用量，通过创建、释放ECS的方式进行伸缩。
        - `recycle`：极速模式，通过创建、停机、启动的方式进行伸缩，提高再次伸缩的速度（停机时计算资源不收费，只收取存储费用，本地盘机型除外）。 */
        scaling_policy?: string;
        /** 节点池安全组ID，当节点池绑定了多个安全组时，为`security_group_ids`中的第一个值。 */
        security_group_id?: string;
        /** 节点池安全组ID列表。 */
        security_group_ids?: Array<string>;
        /** 指定可用实例规格的个数，伸缩组将按成本最低的多个规格均衡创建抢占式实例。取值范围：\[1,10\]。 */
        spot_instance_pools?: number;
        /** 是否开启补齐抢占式实例。开启后，当收到抢占式实例将被回收的系统消息时，伸缩组将尝试创建新的实例，替换掉将被回收的抢占式实例。取值：

        - `true`：开启补齐抢占式实例。
        - `false`：不开启补齐抢占式实例。

         */
        spot_instance_remedy?: boolean;
        /** 抢占实例市场价格区间配置。 */
        spot_price_limit?: Array<{
          /** 抢占式实例规格。 */
          instance_type?: string;
          /** 单台实例市场价格。

          单位：元/时。
           */
          price_limit?: string }>;
        /** 抢占式实例类型，取值：
        - NoSpot：非抢占式实例。
        - SpotWithPriceLimit：设置抢占实例价格上限。
        - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。

        更多信息，请参见[抢占式实例](https://help.aliyun.com/document_detail/157759.html)。
         */
        spot_strategy?: string;
        /** 节点系统盘类型，取值：

        - `cloud_efficiency`：高效云盘。
        - `cloud_ssd`：SSD云盘。
         */
        system_disk_category?: string;
        /** 节点系统盘磁盘性能，只针对ESSD磁盘生效。 */
        system_disk_performance_level?: string;
        /** 节点系统盘大小，单位为GiB。

        取值范围：\[20,500\]。 */
        system_disk_size?: number;
        /** 仅为ECS实例添加标签。

        标签键不可以重复，最大长度为128个字符；标签键和标签值都不能以“aliyun”、“acs:”开头，或包含“https://”、“http://”。 */
        tags?: Array<defs.tag>;
        /** 虚拟交换机ID，取值范围：\[1,20\]。

        > 为保证高可用性，建议选择不同可用区的虚拟交换机。 */
        vswitch_ids?: Array<string> };
      /** 节点池状态配置。 */
      status?: {
        /** 失败节点数。 */
        failed_nodes?: number;
        /** 健康节点数。 */
        healthy_nodes?: number;
        /** 正在创建节点数。 */
        initial_nodes?: number;
        /** 离线节点数。 */
        offline_nodes?: number;
        /** 正在被移除节点数。 */
        removing_nodes?: number;
        /** 工作中节点数。 */
        serving_nodes?: number;
        /** 节点池状态，取值：

        - `active`：已激活。
        - `scaling`：伸缩中。
        - `removing`：节点移除中。
        - `deleting`：删除中。
        - `updating`：更新中。 */
        state?: string;
        /** 节点池内总节点数。 */
        total_nodes?: number };
      /** 加密计算节集群配置。 */
      tee_config?: {
        /** 是否开启加密计算集群，取值：

        - `true`：开启。
        - `false`：不开启。
         */
        tee_enable?: boolean } };
  };

  /**
   * @path: /clusters/{ClusterId}/nodepools
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterNodePools
   * 调用DescribeClusterNodePools查询集群内所有节点池详情。
   * @summary: 调用DescribeClusterNodePools查询集群内所有节点池详情。
   */
  export namespace DescribeClusterNodePools {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 节点池实例列表。 */
      nodepools?: Array<{
        /** 自动伸缩配置。 */
        auto_scaling?: {
          /** EIP带宽峰值。 */
          eip_bandwidth?: number;
          /** EIP计费类型，取值：

          - `PayByBandwidth`：按固定带宽计费。
          - `PayByTraffic`：按使用流量计费。
           */
          eip_internet_charge_type?: string;
          /** 是否启用自动伸缩，取值：

          - `true`：开启节点池自动伸缩功能。
          - `false`：不开启自动伸缩，当取值为`false`时，`auto_scaling`内的其他配置参数将不生效。

           */
          enable?: boolean;
          /** 是否绑定EIP，取值：

          - `true`：绑定EIP。
          - `false`：不绑定EIP。

           */
          is_bond_eip?: boolean;
          /** 最大实例数。 */
          max_instances?: number;
          /** 最小实例数。 */
          min_instances?: number;
          /** 自动伸缩类型，按照自动伸缩实例类型划分。取值：

          - `cpu`：普通实例型。
          - `gpu`：GPU实例型。
          - `gpushare`：GPU共享型。
          - `spot`：抢占式实例型。
           */
          type?: string };
        /** 【该字段已废弃】

        边缘节点池网络相关的配置。该值只对edge类型的节点池有意义。 */
        interconnect_config?: {
          /** 【该字段已废弃】

          边缘增强型节点池的网络带宽，单位：Mbps。 */
          bandwidth?: number;
          /** 【该字段已废弃】

          边缘增强型节点池绑定的云连接网实例ID(CCNID)。 */
          ccn_id?: string;
          /** 【该字段已废弃】

          边缘增强型节点池绑定的云连接网实例所属的区域。 */
          ccn_region_id?: string;
          /** 【该字段已废弃】

          边缘增强型节点池绑定的云企业网实例ID(CENID)。 */
          cen_id?: string;
          /** 【该字段已废弃】

          边缘增强型节点池的购买时长，单位：月。 */
          improved_period?: string };
        /** 边缘节点池的网络类型。basic：基础型；dedicated：专用型。该值只对edge类型的节点池有意义。 */
        interconnect_mode?: string;
        /** 集群相关配置。 */
        kubernetes_config?: {
          /** 是否在ECS节点上安装云监控，安装后可以在云监控控制台查看所创建ECS实例的监控信息，推荐开启。取值：

          - `true`：在ECS节点上安装云监控。
          - `false`：不在ECS节点上安装云监控

           */
          cms_enabled?: boolean;
          /** 节点CPU管理策略。当集群版本在1.12.6及以上时支持以下两种策略：

          - `static`：允许为节点上具有某些资源特征Pod增强其CPU亲和性和独占性。
          - `none`：表示启用现有的默认CPU亲和性方案。 */
          cpu_policy?: string;
          /** 节点标签，为Kubernetes集群节点添加标签。标签定义规则：

          - 标签由区分大小写的键值对组成，您最多可以设置20个标签。
          - 标签键不可以重复，最长为64个字符；标签值可以为空，最长为128个字符。标签键和标签值都不能以`aliyun`、`acs:`、`https://`或`http://`开头。更多信息，请参见[Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set)。 */
          labels?: Array<defs.tag>;
          /** 节点名称由三部分组成：前缀 \+ 节点 IP 地址子串 \+ 后缀：

          - 前缀和后缀均可由“.”分隔的一个或多个部分构成，每个部分可以使用小写字母、数字和“-”，节点名称首尾必须为小写字母和数字；
          - IP 地址段长度指截取节点 IP 地址末尾的位数，取值范围 5-12

          例如：节点 IP 地址为：192.168.0.55，指定前缀为 aliyun.com，IP 地址段长度为 5，后缀为 test，则节点名称为 aliyun.com00055test */
          node_name_mode?: string;
          /** 容器运行时名称。 */
          runtime?: string;
          /** 容器运行时版本。 */
          runtime_version?: string;
          /** 节点污点信息。污点和容忍度（Toleration）相互配合，可以用来避免Pod被分配到不合适的节点上。更多信息，请参见[taint-and-toleration](https://kubernetes.io/zh/docs/concepts/scheduling-eviction/taint-and-toleration/)。 */
          taints?: Array<defs.taint>;
          /** 节点池自定义数据。更多详情，请参见[生成实例自定义数据](https://help.aliyun.com/document_detail/49121.html)。 */
          user_data?: string };
        /** 托管节点池配置，当前只在专业托管集群中生效。 */
        management?: {
          /** 自动修复，仅当`enable=true`时生效。

          - `true`：自动修复。
          - `false`：不自动修复。

           */
          auto_repair?: boolean;
          /** 自动修复节点策略。 */
          auto_repair_policy?: {
            /** 是否允许重启节点。 */
            restart_node?: boolean };
          /** 是否自动升级。 */
          auto_upgrade?: boolean;
          /** 自动升级策略。 */
          auto_upgrade_policy?: {
            /** 是否允许自动升级kubelet。 */
            auto_upgrade_kubelet?: boolean };
          /** 是否自动修复CVE。 */
          auto_vul_fix?: boolean;
          /** 自动修复CVE策略。 */
          auto_vul_fix_policy?: {
            /** 是否允许重启节点。 */
            restart_node?: boolean;
            /** 允许自动修复的漏洞级别，以逗号分隔。 */
            vul_level?: string };
          /** 是否开启托管版节点池，取值：

          - `true`：开启托管节点池。
          - `false`：不开启托管节点池，只有当`enable=true`时，其他相关配置才生效。
           */
          enable?: boolean;
          /** 自动升级配置，仅当`enable=true`时生效。 */
          upgrade_config?: {
            /** 是否启用自动升级，取值：

            - `true`：启用自动升级。
            - `false`：不启用自动升级。
             */
            auto_upgrade?: boolean;
            /** 最大不可用节点数量，取值范围：\[1,1000\]

            默认值：1。 */
            max_unavailable?: number;
            /** 额外节点数量。 */
            surge?: number;
            /** 设置额外节点数的比例，和`surge`二选一。

            额外节点数=额外节点数比例×节点数，例如，设置额外节点数比例为50%，存在的节点数为6，那么将产生的额外节点数=50%×6，也就是将生产3个额外节点数。 */
            surge_percentage?: number } };
        /** 边缘节点池允许容纳的最大节点数量. 节点池内可以容纳的最大节点数量，该参数大于等于0。0表示无额外限制（仅受限于集群整体可以容纳的节点数，节点池本身无额外限制）。边缘节点池该参数值往往大于0；ess类型节点池和默认的edge类型节点池该参数值为0 */
        max_nodes?: number;
        /** 节点配置。 */
        node_config?: {
          /** Kubelet参数配置。 */
          kubelet_configuration?: defs.kubelet_config };
        /** 节点池信息。 */
        nodepool_info?: {
          /** 节点池创建时间。 */
          created?: string;
          /** 是否为默认节点池，通常一个集群仅有一个默认节点池。取值：

          - `true`：设置为默认节点池。
          - `false`：不设置为默认节点池。

           */
          is_default?: boolean;
          /** 节点池名称。

          命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。 */
          name?: string;
          /** 节点池ID。 */
          nodepool_id?: string;
          /** 地域ID。 */
          region_id?: string;
          /** 资源组ID。 */
          resource_group_id?: string;
          /** 节点池类型。取值：
          - `edge`：边缘节点池。
          - `ess`：云端节点池。 */
          type?: string;
          /** 节点池更新时间。 */
          updated?: string };
        /** 扩容组配置。	 */
        scaling_group?: {
          /** 节点是否开启自动续费，当`instance_charge_type`取值为`PrePaid`时才生效，取值：

          - `true`：自动续费。
          - `false`：不自动续费。

           */
          auto_renew?: boolean;
          /** 节点自动续费周期。当`instance_charge_type`取值为`PrePaid`时才生效，且为必选值。

          当`PeriodUnit=Month`时，取值范围：{1, 2, 3, 6, 12}。 */
          auto_renew_period?: number;
          /** 当`multi_az_policy`取值为`COST_OPTIMIZED`时，如果因价格、库存等原因无法创建足够的抢占式实例，是否允许自动尝试创建按量实例满足ECS实例数量要求。取值：

          - `true`：允许自动尝试创建按量实例满足ECS实例数量要求。
          - `false`：不允许自动尝试创建按量实例满足ECS实例数量要求。 */
          compensate_with_on_demand?: boolean;
          /** 节点数据盘类型、大小等配置的组合。 */
          data_disks?: Array<defs.data_disk>;
          /** 部署集ID。 */
          deploymentset_id?: string;
          /** 节点池期望节点数 */
          desired_size?: number;
          /** 自定义镜像ID，可通过`DescribeKubernetesVersionMetadata`查询系统支持的镜像。
           */
          image_id?: string;
          /** 节点池节点付费类型，取值：

          - `PrePaid`：预付费。
          - `PostPaid`：按量付费。

           */
          instance_charge_type?: string;
          /** 节点实例规格列表，您可以选择多个实例规格作为备选，每个节点创建时，将从第一个规格开始尝试购买，直到创建成功。最终购买的实例规格可能随库存变化而不同。 */
          instance_types?: Array<string>;
          /** 节点公网IP网络计费类型 */
          internet_charge_type?: string;
          /** 节点公网IP出带宽最大值，单位为Mbps（Mega bit per second），取值范围：1~100 */
          internet_max_bandwidth_out?: number;
          /** 密钥对名称，和`login_password`二选一。

          当节点池为托管版节点池时，只支持`key_pair`。 */
          key_pair?: string;
          /** SSH登录密码，和`key_pair`二选一。密码规则为8~30个字符，且至少同时包含三项（大小写字母、数字和特殊符号）。

          出于安全性考虑，密码查询结果经过加密处理。 */
          login_password?: string;
          /** 多可用区伸缩组ECS实例扩缩容策略。取值：

          - `PRIORITY`：根据您定义的虚拟交换机（VSwitchIds.N）扩缩容。当优先级较高的虚拟交换机所在可用区无法创建ECS实例时，自动使用下一优先级的虚拟交换机创建ECS实例。

          - `COST_OPTIMIZED`：按vCPU单价从低到高进行尝试创建。当伸缩配置设置了抢占式计费方式的多实例规格时，优先创建对应抢占式实例。您可以继续通过`CompensateWithOnDemand`参数指定当抢占式实例由于库存等原因无法创建时，是否自动尝试以按量付费的方式创建。

            >`COST_OPTIMIZED`仅在伸缩配置设置了多实例规格或者选用了抢占式实例的情况下生效。

          - `BALANCE`：在伸缩组指定的多可用区之间均匀分配ECS实例。如果由于库存不足等原因可用区之间变得不平衡，您可以通过API `RebalanceInstances`平衡资源。更多信息，请参见[RebalanceInstances](https://help.aliyun.com/document_detail/71516.html)。

           */
          multi_az_policy?: string;
          /** 伸缩组所需要按量实例个数的最小值，取值范围：\[0,1000\]。当按量实例个数少于该值时，将优先创建按量实例。 */
          on_demand_base_capacity?: number;
          /** 伸缩组满足最小按量实例数（`on_demand_base_capacity`）要求后，超出的实例中按量实例应占的比例。取值范围：\[0,100\]。 */
          on_demand_percentage_above_base_capacity?: number;
          /** 节点包年包月时长，当`instance_charge_type`取值为`PrePaid`时才生效且为必选值。

          当`PeriodUnit=Month`时，取值范围：{1, 2 , 3, 6, 12, 24, 36, 48, 60}。 */
          period?: number;
          /** 节点付费周期，当`instance_charge_type`取值为`PrePaid`时才生效。

          `Month`：以月为计时单位，当前只支持以月为单位。

           */
          period_unit?: string;
          /** 操作系统发行版。取值：

          - `CentOS`
          - `AliyunLinux`
          - `Windows`
          - `WindowsCore` */
          platform?: string;
          /** 私有池选项。 */
          private_pool_options?: {
            /** 私有池ID。即弹性保障服务ID或容量预定服务ID。 */
            id?: string;
            /** 私有节点池类型，实例启动的私有池容量选项。弹性保障服务或容量预定服务在生效后会生成私有池容量，供实例启动时选择。取值：

            - `Open`：开放模式。将自动匹配开放类型的私有池容量。如果没有符合条件的私有池容量，则使用公共池资源启动。

            - `Target`：指定模式。使用指定的私有池容量启动实例，如果该私有池容量不可用，则实例会启动失败。

            - `None`：不使用模式。实例启动将不使用私有池容量。 */
            match_criteria?: string };
          /** Worker RAM角色名称，授权ECS实例为集群Woker节点。 */
          ram_policy?: string;
          /** 如果指定了RDS实例列表，集群节点ECS会自动加入RDS访问白名单。 */
          rds_instances?: Array<string>;
          /** 伸缩组ID。 */
          scaling_group_id?: string;
          /** 伸缩组模式，取值：

          - `release`：标准模式，根据申请资源值的使用量，通过创建、释放ECS的方式进行伸缩。
          - `recycle`：极速模式，通过创建、停机、启动的方式进行伸缩，提高再次伸缩的速度（停机时计算资源不收费，只收取存储费用，本地盘机型除外）。 */
          scaling_policy?: string;
          /** 节点池安全组ID，当节点池绑定多个安全组时，为`security_group_ids`中的第一个值。 */
          security_group_id?: string;
          /** 节点池安全组ID列表。 */
          security_group_ids?: Array<string>;
          /** 指定可用实例规格的个数，伸缩组将按成本最低的多个规格均衡创建抢占式实例。取值范围：\[1,10\]。 */
          spot_instance_pools?: number;
          /** 是否开启补齐抢占式实例。开启后，当收到抢占式实例将被回收的系统消息时，伸缩组将尝试创建新的实例，替换掉将被回收的抢占式实例。取值：

          - `true`：开启补齐抢占式实例。
          - `false`：不开启补齐抢占式实例。

           */
          spot_instance_remedy?: boolean;
          /** 抢占式实例市场价格区间配置。 */
          spot_price_limit?: Array<{
            /** 抢占式实例规格。 */
            instance_type?: string;
            /** 单台实例市场价格区间。

            单位：元/时。
             */
            price_limit?: string }>;
          /** 抢占式实例类型，取值：
          - NoSpot：非抢占式实例。
          - SpotWithPriceLimit：设置抢占实例价格上限。
          - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。

          更多信息，请参见[抢占式实例](https://help.aliyun.com/document_detail/157759.html)。

           */
          spot_strategy?: string;
          /** 节点系统盘类型，取值：

          - `cloud_efficiency`：高效云盘。
          - `cloud_ssd`：SSD云盘。
           */
          system_disk_category?: string;
          /** 节点系统盘磁盘性能，只针对ESSD磁盘生效 */
          system_disk_performance_level?: string;
          /** 节点系统盘大小，单位为GiB。

          取值范围：\[20,500\]。

           */
          system_disk_size?: number;
          /** 仅为ECS实例添加标签。

          标签键不可以重复，最大长度为128个字符；标签键和标签值都不能以“aliyun”、“acs:”开头，或包含“https://”、“http://”。 */
          tags?: Array<defs.tag>;
          /** 虚拟交换机ID，取值范围：\[1,20\]。

          > 为保证高可用性，建议选择不同可用区的虚拟交换机。 */
          vswitch_ids?: Array<string> };
        /** 节点池状态信息。	 */
        status?: {
          /** 失败实例数。 */
          failed_nodes?: number;
          /** 处于健康状态实例数。 */
          healthy_nodes?: number;
          /** 正在创建的节点数。	 */
          initial_nodes?: number;
          /** 离线节点数。	 */
          offline_nodes?: number;
          /** 正在被移除的节点数。	 */
          removing_nodes?: number;
          /** 处于工作状态的节点数。 */
          serving_nodes?: number;
          /** 节点池状态，取值：

          - `active`：已激活。
          - `scaling`：伸缩中。
          - `removing`：节点移除中。
          - `deleting`：删除中。
          - `updating`：更新中。 */
          state?: string;
          /** 节点池内节点数量。 */
          total_nodes?: number };
        /** 加密计算配置。	 */
        tee_config?: {
          /** 是否开启加密计算集群，取值：

          - `true`：开启。
          - `false`：不开启。
           */
          tee_enable?: boolean } }> };
  };

  /**
   * @path: /clusters/{ClusterId}/nodes
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterNodes
   * 根据集群ID，查询该集群中的所有节点的详情。
   * @summary: 根据集群ID，查询该集群中的所有节点的详情。
   */
  export namespace DescribeClusterNodes {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 节点实例ID列表，多值使用英文逗号（,）分隔。 */
      instanceIds?: string;
      /** 节点池ID。 */
      nodepool_id?: string;
      /** 集群节点状态，按照集群节点运行状态进行过滤，取值：

      - `all`：以下4种状态的集群节点。
      - `running`：正在运行的集群节点。
      - `removing`：正在删除的集群节点。
      - `initial`：正在初始化的集群节点。
      - `failed`：创建失败的集群节点。

      默认值：`all`。 */
      state?: string;
      /** 每页显示的记录数。取值范围为[1,100]。

      默认值：10。 */
      pageSize?: string;
      /** 页码。

      默认值：1。 */
      pageNumber?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 节点详情列表。 */
      nodes?: Array<{
        /** 节点创建时间。 */
        creation_time?: string;
        /** 节点创建时错误信息。 */
        error_message?: string;
        /** 节点到期时间。 */
        expired_time?: string;
        /** 节点主机名。 */
        host_name?: string;
        /** 节点使用的系统镜像ID。 */
        image_id?: string;
        /** 节点付费类型。取值：

        - `PrePaid`：预付费，包年包月。选择该类付费方式时，您必须确认自己的账号支持余额支付或信用支付，否则将返回`InvalidPayMethod`的错误提示。

        - `PostPaid`：按量付费。 */
        instance_charge_type?: string;
        /** 节点实例ID。 */
        instance_id?: string;
        /** 节点在集群中的名称。 */
        instance_name?: string;
        /** 节点角色类型：

        - Master：集群Master节点。
        - Worker：集群Worker节点。 */
        instance_role?: string;
        /** 节点运行状态。 */
        instance_status?: string;
        /** 节点类型。 */
        instance_type?: string;
        /** 节点所属ECS族名称。 */
        instance_type_family?: string;
        /** 节点IP地址。 */
        ip_address?: Array<string>;
        /** 是否为阿里云实例。取值：

        - `true`：是阿里云实例。

        - `false`：不是阿里云实例。 */
        is_aliyun_node?: boolean;
        /** 节点名称，集群内节点标识。 */
        node_name?: string;
        /** 节点是否就绪。取值：

        - `Ready`：节点已就绪。

        - `NotReady`：节点未就绪。

        - `Unknown`：未知。

        - `Offline`：离线中。 */
        node_status?: string;
        /** 节点池ID。 */
        nodepool_id?: string;
        /** 节点通过何种方式初始化，例如：手动创建或ROS创建。 */
        source?: string;
        /** 抢占式实例类型，取值：
        - NoSpot：非抢占式实例。
        - SpotWithPriceLimit：设置抢占实例价格上限。
        - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
         */
        spot_strategy?: string;
        /** 节点运行状态。取值：

        - `pending`：创建中。

        - `running`：运行中。

        - `starting`：启动中。

        - `stopping`：停止中。

        - `stopped`：已停止。 */
        state?: string }>;
      /** 分页信息。 */
      page?: {
        /** 页码。 */
        page_number?: number;
        /** 每页显示的记录数。 */
        page_size?: number;
        /** 结果总数。 */
        total_count?: number } };
  };

  /**
   * @path: /clusters/{ClusterId}/resources
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterResources
   * 根据集群ID查询该集群的所有资源。
   * @summary: 根据集群ID查询该集群的所有资源。
   */
  export namespace DescribeClusterResources {
    export type Params = {
      /** 集群ID。

      关于如何查看集群ID，请参见[查看集群信息](https://help.aliyun.com/document_detail/89446.html)。

      您也可通过API接口[DescribeClustersV1](https://help.aliyun.com/document_detail/183905.html)，查看阿里云账号下所有创建的集群信息。 */
      ClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = Array<{
      /** 资源是否由ACK创建：

      - 1：表示由ACK创建
      - 0：表示该资源为已有资源 */
      auto_create?: number;
      /** 集群ID。 */
      cluster_id?: string;
      /** 资源创建时间。 */
      created?: string;
      /** 依赖资源列表。 */
      dependencies?: Array<{
        /** 依赖资源的集群ID。 */
        cluster_id?: string;
        /** 依赖资源实例ID。 */
        instance_id?: string;
        /** 依赖资源类型。 */
        resource_type?: string }>;
      /** 资源ID。 */
      instance_id?: string;
      /** 资源信息。关于资源的源信息，请参见[ListStackResources](https://help.aliyun.com/document_detail/133836.html)。 */
      resource_info?: string;
      /** 资源类型。 */
      resource_type?: string;
      /** 资源状态。可选值：

      - `CREATE_COMPLETE`：成功创建资源。
      - `CREATE_FAILED`：创建资源失败。
      - `CREATE_IN_PROGRESS`：创建资源中。
      - `DELETE_FAILED`：删除资源失败。
      - `DELETE_IN_PROGRESS`：删除资源中。
      - `ROLLBACK_COMPLETE`：成功回滚。
      - `ROLLBACK_FAILED`：回滚失败。
      - `ROLLBACK_IN_PROGRESS`：回滚中。 */
      state?: string }>;
  };

  /**
   * @path: /clusters/{cluster_id}/tasks
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterTasks
   * 根据集群ID查询集群任务列表。
   * @summary: 根据集群ID查询集群任务列表。
   */
  export namespace DescribeClusterTasks {
    export type Params = {
      /** 集群id。 */
      cluster_id?: string;
      page_size?: number;
      page_number?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 分页信息。 */
      page_info?: {
        /** 页数。 */
        page_number?: number;
        /** 每页数量。 */
        page_size?: number;
        /** 结果总数。 */
        total_count?: number };
      /** 请求ID。 */
      requestId?: string;
      /** 任务数组。 */
      tasks?: Array<{
        /** 创建时间。 */
        created?: string;
        /** 任务错误信息。 */
        error?: {
          /** 错误码。 */
          code?: string;
          /** 错误信息。 */
          message?: string };
        /** 任务状态。 */
        state?: string;
        /** 任务ID。 */
        task_id?: string;
        /** 任务类型。 */
        task_type?: string;
        /** 更新时间。 */
        updated?: string }> };
  };

  /**
   * @path: /k8s/{ClusterId}/user_config
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterUserKubeconfig
   * > KubeConfig签发证书的默认有效期为3年。在临近过期两个月内，您可以通过容器服务管理控制台或获取集群KubeConfig接口获取轮转后刷新的KubeConfig，新KubeConfig证书的有效期仍为3年，老的KubeConfig凭据在证书过期前仍然有效，请您根据控制台显示或接口返回的KubeConfig过期时间及时获取轮转凭据。
   * @summary: 根据集群ID查询访问该集群的kubeconfig配置。
   */
  export namespace DescribeClusterUserKubeconfig {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 是否获取内网连接配置。取值：
      - `true`：仅获取内网连接凭据。
      - `false`：仅获取公网连接凭据。 

      默认值：`false`。 */
      PrivateIpAddress?: boolean;
      /** 临时kubeconfig有效期，单位：分钟。取值范围：15（15分钟）～4320（3天）。
      >当不设置该参数时，将由系统自动确定一个更长的有效期，具体过期时间通过返回的`expiration`字段的值确定。 */
      TemporaryDurationMinutes?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 集群访问配置。关于如何查看访问集群配置信息，请参见[配置集群凭据](https://help.aliyun.com/document_detail/86494.html)。 */
      config?: string;
      /** kubeconfig的过期时间。格式：RFC3339格式的UTC时间。 */
      expiration?: string };
  };

  /**
   * @path: /api/v2/k8s/{ClusterId}/user_config
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterV2UserKubeconfig
   * 获取集群kubeconfig接口
   * @summary: 获取集群kubeconfig接口
   * @deprecated
   */
  export namespace DescribeClusterV2UserKubeconfig {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 是否为内网访问。 */
      PrivateIpAddress?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** kubeconfig内容。 */
      config?: string };
  };

  /**
   * @path: /clusters/{cluster_id}/vuls
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterVuls
   * 查询集群安全漏洞信息。
   * @summary: 查询集群安全漏洞信息。
   */
  export namespace DescribeClusterVuls {
    export type Params = {
      /** 集群ID。 */
      cluster_id?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 漏洞列表。 */
      vul_records?: Array<{
        /** CVE列表。 */
        cve_list?: Array<string>;
        /** 漏洞等级。 */
        necessity?: string;
        /** 具有该漏洞的节点数量。 */
        node_count?: number;
        /** 节点池ID。 */
        nodepool_id?: string;
        /** 节点池名称。 */
        nodepool_name?: string;
        /** 漏洞别名。 */
        vul_alias_name?: string;
        /** 漏洞名称。 */
        vul_name?: string;
        /** 漏洞类型。 */
        vul_type?: string }> };
  };

  /**
   * @path: /clusters
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusters
   * 查看容器服务中创建的所有集群（包括Swarm和Kubernetes集群）。
   * @summary: 查看容器服务中创建的所有集群（包括Swarm和Kubernetes集群）。
   * @deprecated
   */
  export namespace DescribeClusters {
    export type Params = {
      /** 根据集群Name进行模糊匹配查询。 */
      name?: string;
      /** 集群类型。 */
      clusterType?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = Array<{
      /** 集群ID。 */
      cluster_id?: string;
      /** 集群类型。 */
      cluster_type?: string;
      /** 集群创建时间。 */
      created?: string;
      /** 集群当前版本。 */
      current_version?: string;
      /** 节点系统盘类型。 */
      data_disk_category?: string;
      /** 节点系统盘大小。 */
      data_disk_size?: number;
      /** 集群是否开启删除保护。 */
      deletion_protection?: boolean;
      /** 容器运行时版本。 */
      docker_version?: string;
      /** 集群Ingerss SLB实例的ID。 */
      external_loadbalancer_id?: string;
      /** 集群创建时版本。 */
      init_version?: string;
      /** 集群的endpoint地址。 */
      master_url?: string;
      /** 集群元数据。 */
      meta_data?: string;
      /** 集群名称。 */
      name?: string;
      /** 集群使用的网络类型。 */
      network_mode?: string;
      /** 集群是否开启Private Zone，默认false。 */
      private_zone?: boolean;
      /** 集群标识，区分是否为边缘托管版。 */
      profile?: string;
      /** 集群所在地域ID。 */
      region_id?: string;
      /** 集群资源组ID。 */
      resource_group_id?: string;
      /** 集群安全组ID。 */
      security_group_id?: string;
      /** 集群内实例数量。 */
      size?: number;
      /** 集群运行状态。 */
      state?: string;
      /** POD网络。 */
      subnet_cidr?: string;
      /** 集群标签。 */
      tags?: Array<{
        /** 标签名。 */
        key?: string;
        /** 标签值。 */
        value?: string }>;
      /** 集群更新时间。 */
      updated?: string;
      /** 集群使用的VPC ID。 */
      vpc_id?: string;
      /** 虚拟交换机网络ID。 */
      vswitch_cidr?: string;
      /** 节点使用的Vswitch ID。 */
      vswitch_id?: string;
      /** 集群Worker节点RAM角色名称。 */
      worker_ram_role_name?: string;
      /** 集群所在Region内的区域ID。 */
      zone_id?: string }>;
  };

  /**
   * @path: /api/v1/clusters
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClustersV1
   * 查询已创建的所有ACK集群的详情。
   * @summary: 查询已创建的所有ACK集群的详情。
   */
  export namespace DescribeClustersV1 {
    export type Params = {
      /** 集群名称。

      命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。 */
      name?: string;
      /** 集群类型，取值：
      - `Kubernetes`: ACK专有版集群。
      - `ManagedKubernetes`：ACK托管版集群，包括ACK Pro版集群、ACK基础版集群、ACK Serverless Pro版集群、ACK Serverless基础版集群、ACK Edge Pro版集群、ACK Edge基础版。
      - `ExternalKubernetes`：ACK注册集群。



       */
      cluster_type?: string;
      /** 每页显示的记录数。 */
      page_size?: number;
      /** 当前页码。 */
      page_number?: number;
      /** 集群标识。
      当集群类型选择`ManagedKubernetes`时，通过集群标识区分集群类型，取值：
      - `Default`：托管版集群。
      - `Serverless`：ACK Serverless集群。
      - `Edge`：边缘集群。

      当集群类型选择`Ask`时，取值：

      `ask.v2`：ACK Serverless集群。

      默认值为空，取值可以为空，为空时不通过该字段进行过滤。 */
      profile?: string;
      /** 集群规格，当集群类型选择`ManagedKubernetes`时，通过集群规格区分集群的类型，取值：
      - `ack.pro.small`：专业托管集群，即ACK Pro版集群。
      - `ack.standard`：标准托管集群。

      默认值为空值，取值可以为空，为空时不通过该字段进行过滤。 */
      cluster_spec?: string;
      /** 集群地域。通过指定该字段，可以过滤出该地域下的集群列表。 */
      region_id?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 集群信息列表。 */
      clusters?: Array<{
        /** 集群ID。 */
        cluster_id?: string;
        /** 托管版集群类型，面向托管集群：
        - `ack.pro.small`：专业托管集群。
        - `ack.standard`：标准托管集群。

         */
        cluster_spec?: string;
        /** 集群类型，取值：

        - `Kubernetes`: 专有版集群。
        - `ManagedKubernetes`：托管版集群。
        - `Ask`：ACK Serverless集群。
        - `ExternalKubernetes`：注册集群。
         */
        cluster_type?: string;
        /** 集群创建时间。 */
        created?: string;
        /** 集群当前版本。 */
        current_version?: string;
        /** 集群删除保护，防止通过控制台或API误删除集群。取值：

        - `true`：启用集群删除保护，将不能通过控制台或API删除集群。
        - `false`：不启用集群删除保护，则能通过控制台或API删除集群。
         */
        deletion_protection?: boolean;
        /** 集群Docker版本。 */
        docker_version?: string;
        /** 集群中Ingress SLB实例。

        默认实例规格：性能保障型（slb.s1.small）。 */
        external_loadbalancer_id?: string;
        /** 集群版本，与Kubernetes社区基线版本保持一致。建议选择最新版本，若不指定，默认使用最新版本。

        目前ACK控制台提供两种最新Kubernetes版本的集群。您可以通过API创建其他Kubernetes版本集群。ACK支持的Kubernetes版本，请参见[Kubernetes版本发布概览](https://help.aliyun.com/document_detail/185269.html)。 */
        init_version?: string;
        /** 集群维护窗口，该功能只在专业托管版中生效。 */
        maintenance_window?: defs.maintenance_window;
        /** 集群API Server访问地址，包含内网访问地址以及公网访问地址。 */
        master_url?: string;
        /** 集群元数据信息。 */
        meta_data?: string;
        /** 集群名称。

        命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。 */
        name?: string;
        /** 集群网络模式。取值：

        - `classic`：经典网络。
        - `vpc`：专有网络。
        - `overlay`：叠加网络。
        - `calico`：Calico网络。
         */
        network_mode?: string;
        /** 集群可升级版本。 */
        next_version?: string;
        /** 集群Private Zone配置。取值：

        - `true`：启用Private Zone。
        - `false`：不启用Private Zone。
         */
        private_zone?: boolean;
        /** 集群标识，取值：

        - `Edge`：边缘托管版集群。
        - `Default`：非边缘托管版集群。

         */
        profile?: string;
        /** 集群所在地域ID。 */
        region_id?: string;
        /** 集群资源组ID。 */
        resource_group_id?: string;
        /** 集群安全组ID。 */
        security_group_id?: string;
        /** 集群当前节点数量，包含Master节点以及Worker节点。 */
        size?: number;
        /** 集群运行状态，取值：

        - `initial`：集群创建中。
        - `failed`：集群创建失败。
        - `running`：集群运行中。
        - `updating`：集群升级中。
        - ` updating_failed`：集群升级失败。
        - `scaling`：集群伸缩中。
        - `stopped`：集群已经停止运行。
        - `deleting`：集群删除中。
        - `deleted`：集群已经被删除。
        - `delete_failed`：集群删除失败。    */
        state?: string;
        /** Pod网络地址段，必须是有效的私有网段，即以下网段及其子网：
        - 10.0.0.0/8
        - 172.16-31.0.0/12-16
        - 192.168.0.0/16

        不能与VPC及VPC内已有Kubernetes集群使用的网段重复，创建成功后不能修改。

        关于集群网络规划，请参见[VPC下Kubernetes的网络地址段规划](https://help.aliyun.com/document_detail/86500.html)。 */
        subnet_cidr?: string;
        /** 集群资源标签。 */
        tags?: Array<defs.tag>;
        /** 集群更新时间。 */
        updated?: string;
        /** 集群专有网络ID，创建集群时必传。 */
        vpc_id?: string;
        /** 虚拟交换机ID，创建集群时可选择1~3个虚拟交换机。为保证集群高可用，建议选择不同可用区的虚拟交换机。 */
        vswitch_id?: string;
        /** Worker RAM角色名称，授权ECS实例为集群Woker节点。 */
        worker_ram_role_name?: string;
        /** 集群所属可用区ID。 */
        zone_id?: string }>;
      /** 分页信息。
       */
      page_info?: {
        /** 分页数。 */
        page_number?: number;
        /** 单页大小。 */
        page_size?: number;
        /** 结果总数。 */
        total_count?: number } };
  };

  /**
   * @path: /events
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeEvents
   * 查询用户操作事件。
   * @summary: 查询用户操作事件。
   */
  export namespace DescribeEvents {
    export type Params = {
      /** 集群ID。 */
      cluster_id?: string;
      /** 事件类型。取值：
      - `cluster_create`：创建集群。
      - `cluster_scaleout`：扩容集群。
      - `cluster_attach`：添加已有节点。
      - `cluster_delete`：删除集群。
      - `cluster_upgrade`：升级集群。
      - `cluster_migrate`：迁移集群。
      - `cluster_node_delete`：移除节点。
      - `cluster_node_drain`：清空节点。
      - `cluster_modify`：修改集群。
      - `cluster_configuration_modify`：修改集群管控配置。
      - `cluster_addon_install`：安装组件。
      - `cluster_addon_upgrade`：升级组件。
      - `cluster_addon_uninstall`：卸载组件。
      - `runtime_upgrade`：升级运行时。
      - `nodepool_upgrade`：升级节点池。
      - `nodepool_update`：更新节点池。 */
      type?: string;
      /** 每页显示数量。 */
      page_size?: number;
      /** 分页查询页数。 */
      page_number?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 事件详情。 */
      events?: Array<{
        /** 集群ID。 */
        cluster_id?: string;
        /** 事件描述。 */
        data?: {
          /** 事件等级。 */
          level?: string;
          /** 事件详情。 */
          message?: string;
          /** 事件状态。 */
          reason?: string };
        /** 事件ID。 */
        event_id?: string;
        /** 事件来源。 */
        source?: string;
        /** 事件主体。 */
        subject?: string;
        /** 事件开始时间。 */
        time?: string;
        /** 事件类型。取值：
        - `cluster_create`：创建集群。
        - `cluster_scaleout`：扩容集群。
        - `cluster_attach`：添加已有节点。
        - `cluster_delete`：删除集群。
        - `cluster_upgrade`：升级集群。
        - `cluster_migrate`：迁移集群。
        - `cluster_node_delete`：移除节点。
        - `cluster_node_drain`：清空节点。
        - `cluster_modify`：修改集群。
        - `cluster_configuration_modify`：修改集群管控配置。
        - `cluster_addon_install`：安装组件。
        - `cluster_addon_upgrade`：升级组件。
        - `cluster_addon_uninstall`：卸载组件。
        - `runtime_upgrade`：升级运行时。
        - `nodepool_upgrade`：升级节点池。
        - `nodepool_update`：更新节点池。 */
        type?: string }>;
      /** 分页信息。 */
      page_info?: {
        /** 分页查询页数。 */
        page_number?: number;
        /** 每页显示数量。 */
        page_size?: number;
        /** 结果总数。 */
        total_count?: number } };
  };

  /**
   * @path: /k8s/{ClusterId}/external/agent/deployment
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeExternalAgent
   * 关于集群接入的更多信息，请参见[注册外部Kubernetes集群](https://help.aliyun.com/document_detail/121053.html)。
   * @summary: 根据集群ID查询集群中部署注册集群的代理配置。
   */
  export namespace DescribeExternalAgent {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 是否获取内网访问凭据。

      - `true`：仅获取内网连接凭据。
      - `false`：仅获取公网连接凭据。

      默认值：`false`。 */
      PrivateIpAddress?: string;
      /** Agent权限模式。

      admin：管理员模式，拥有所有权限。
      restricted：受限模式，仅拥有部分权限。
      默认值：admin。 */
      AgentMode?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** YAML格式的代理配置。 */
      config?: string };
  };

  /**
   * @path: /api/v1/metadata/versions
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeKubernetesVersionMetadata
   * 查询ACK支持的Kubernetes版本详情。
   * @summary: 查询ACK支持的Kubernetes版本详情。
   */
  export namespace DescribeKubernetesVersionMetadata {
    export type Params = {
      /** 集群所在地域ID。 */
      Region: string;
      /** 集群类型，取值：

      - `Kubernetes`: ACK专有版集群。
      - `ManagedKubernetes`：ACK托管版集群，包括ACK Pro版集群、ACK基础版集群、ACK Serverless Pro版集群、ACK Serverless基础版集群、ACK Edge Pro版集群、ACK Edge基础版。
      - `ExternalKubernetes`：ACK注册集群。
       */
      ClusterType: string;
      /** 集群版本，与Kubernetes社区基线版本保持一致。建议选择最新版本，若不指定，默认使用最新版本。

      目前在ACK控制台您可以创建两种最新版本的集群。您可以通过API创建其他Kubernetes版本集群。ACK支持的Kubernetes版本，请参见[Kubernetes版本发布概览](https://help.aliyun.com/document_detail/185269.html)。 */
      KubernetesVersion?: string;
      /** 面向场景时的集群类型，取值：

      - `Default`：非边缘场景集群。
      - `Edge`：边缘场景集群。
      - `Serverless`：ASK集群。

      默认值：`Default`。 */
      Profile?: string;
      /** 运行时类型，可以通过指定运行时类型，过滤出运行时所支持的系统镜像，取值：

      - `docker`：docker运行时。
      - `containerd`：containerd运行时。
      - `Sandboxed-Container.runv`：安全沙箱。

      若指定运行时类型，将返回指定运行时支持的镜像版本。

      若不指定运行时类型，默认返回全部镜像。 */
      runtime?: string;
      /** 查询模式，取值：
      - `supported`：查询受支持版本
      - `creatable`：查询可创建版本

      若指定`KubernetesVersion`，将忽略查询模式。

      若不指定查询模式，默认返回可创建版本。 */
      Mode?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = Array<{
      /** Kubernetes版本功能特性。 */
      capabilities?: object;
      /** Kubernetes版本是否可创建。 */
      creatable?: boolean;
      /** Kubernetes版本过期时间。	 */
      expiration_date?: string;
      /** 系统镜像列表。	 */
      images?: Array<{
        /** 镜像架构。 */
        architecture?: string;
        /** 镜像分类，部分取值：

        - `system`：公共镜像。
        - `self`：您的自定义镜像。
        - `others`：其他用户的公开镜像。
        - `marketplace`：镜像市场镜像。
         */
        image_category?: string;
        /** 镜像ID。 */
        image_id?: string;
        /** 镜像名称。 */
        image_name?: string;
        /** 操作系统发行版类型，推荐使用该字段指定节点操作系统。取值：

        -  `CentOS`
        - `AliyunLinux`
        -  `AliyunLinux Qboot`
        - `AliyunLinuxUEFI`
        - `AliyunLinux3`
        - `Windows`
        - `WindowsCore`
        - `AliyunLinux3Arm64`
        - `ContainerOS` */
        image_type?: string;
        /** 操作系统类型，例如：

        - `Windows`
        - `Linux` */
        os_type?: string;
        /** 镜像版本。 */
        os_version?: string;
        /** 操作系统平台。取值：
        - `AliyunLinux`
        - `CentOS`
        - `Windows`
        - `WindowsCore` */
        platform?: string }>;
      /** Kubernetes版本元数据信息。	 */
      meta_data?: object;
      /** Kubernetes版本发布时间。 */
      release_date?: string;
      /** 容器运行时配置。	 */
      runtimes?: Array<defs.runtime>;
      /** ACK发布的Kubernetes版本。更多版本信息，请参见[Kubernetes版本发布概览](https://help.aliyun.com/document_detail/185269.html)。 */
      version?: string }>;
  };

  /**
   * @path: /clusters/{cluster_id}/nodepools/{nodepool_id}/vuls
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeNodePoolVuls
   * 查询指定集群节点池的漏洞列表。
   * @summary: 查询指定集群节点池的漏洞列表。
   */
  export namespace DescribeNodePoolVuls {
    export type Params = {
      /** 集群ID。 */
      cluster_id: string;
      /** 节点池ID。 */
      nodepool_id: string;
      /** 要查询的漏洞修复必要性等级。多个等级之间使用半角逗号（,）分隔。取值：

      - `asap`：高
      - `later`：中
      - `nntf`：低 */
      necessity?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 节点池漏洞列表。 */
      vul_records?: Array<{
        /** 节点实例ID。 */
        instance_id?: string;
        /** 节点名称，集群内节点标识。 */
        node_name?: string;
        /** 漏洞列表。 */
        vul_list?: Array<{
          /** 漏洞别名。 */
          alias_name?: string;
          /** 漏洞对应的CVE列表。 */
          cve_list?: Array<string>;
          /** 漏洞名称。 */
          name?: string;
          /** 漏洞等级。 */
          necessity?: string }> }>;
      /** 是否已购买云安全CVE修复服务 */
      vuls_fix_service_purchased?: boolean };
  };

  /**
   * @path: /policies
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribePolicies
   * 调用DescribePolicies列举策略治理规则库列表。
   * @summary: 调用DescribePolicies列举策略治理规则库列表。
   */
  export namespace DescribePolicies {
    export type Params = {};
    export type bodyParams = undefined;
    export type APIReponse = object;
  };

  /**
   * @path: /policies/{policy_name}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribePolicyDetails
   * 获取策略规则模板详情。
   * @summary: 获取策略规则模板详情。
   */
  export namespace DescribePolicyDetails {
    export type Params = {
      /** 策略治理规则名称 */
      policy_name: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 规则治理动作，取值：
      - `enforce`：拦截违规部署
      - `inform`：告警 */
      action?: string;
      /** 规则模板类型 */
      category?: string;
      /** 规则模板描述 */
      description?: string;
      /** 是否删除标志，取值：
      - 0：表示未删除。
      - 1：表示删除。 */
      is_deleted?: number;
      /** 策略治理规则名称 */
      name?: string;
      /** 是否需要配置策略，取值： 
      - 0：表示需要参数配置
      - 1：表示无需参数配置 */
      no_config?: number;
      /** 规则治理等级 */
      severity?: string;
      /** 规则模板详情 */
      template?: string };
  };

  /**
   * @path: /clusters/{cluster_id}/policygovernance
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribePolicyGovernanceInCluster
   * 调用DescribePolicyGovernanceInCluster获取集群策略治理详情。
   * @summary: 调用DescribePolicyGovernanceInCluster获取集群策略治理详情。
   */
  export namespace DescribePolicyGovernanceInCluster {
    export type Params = {
      /** 目标集群ID */
      cluster_id: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 集群当前策略治理审计日志 */
      admit_log?: {
        /** 当前查询到的日志总数 */
        count?: number;
        /** 策略治理审计日志内容 */
        log?: {
          /** 目标集群ID */
          cluster_id?: string;
          /** 策略类型名称 */
          constraint_kind?: string;
          /** 策略治理审计日志信息 */
          msg?: string;
          /** 目标资源类型 */
          resource_kind?: string;
          /** 目标资源名称 */
          resource_name?: string;
          /** 目标资源命名空间 */
          resource_namespace?: string };
        /** 查询结果的状态，取值：
        * `Complete`：查询已经完成，返回结果为完整结果。
        * `Incomplete`：查询已经完成，返回结果为不完整结果，需要重复请求以获得完整结果。 */
        progress?: string };
      /** 当前集群中开启的不同等级策略计数统计 */
      on_state?: Array<{
        /** 当前开启的策略种类计数 */
        enabled_count?: number;
        /** 策略治理等级 */
        severity?: string;
        /** 该等级下策略种类总数 */
        total?: number }>;
      /** 集群中当前被拦截和告警两种处理类型下不同治理等级的违规计数。 */
      totalViolations?: {
        /** 被拦截的不同治理等级的违规计数统计 */
        deny?: {
          /** 策略治理等级 */
          severity?: string;
          /** 被拦截的事件计数 */
          violations?: number };
        /** 告警模式下不同治理等级的违规计数统计 */
        warn?: {
          /** 策略治理等级 */
          severity?: string;
          /** 告警的事件计数 */
          violations?: number } };
      /** 集群中针对不同策略类型的拦截和告警的审计计数统计列表 */
      violations?: {
        /** 被拦截的不同策略类型的审计计数 */
        deny?: {
          /** 策略描述 */
          policyDescription?: string;
          /** 策略名称 */
          policyName?: string;
          /** 策略治理等级 */
          severity?: string;
          /** 集群中对应规则类型下被拦截的违规计数统计 */
          violations?: number };
        /** 告警模式下不同治理等级的违规计数统计 */
        warn?: {
          /** 策略描述 */
          policyDescription?: string;
          /** 策略名称 */
          policyName?: string;
          /** 策略治理等级 */
          severity?: string;
          /** 集群中对应规则类型下被告警的违规计数统计 */
          violations?: number } } };
  };

  /**
   * @path: /clusters/{cluster_id}/policies
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribePolicyInstances
   * 调用DescribePolicyInstances获取集群中当前部署的策略实例。
   * @summary: 调用DescribePolicyInstances获取集群中当前部署的策略实例。
   */
  export namespace DescribePolicyInstances {
    export type Params = {
      /** 目标集群ID */
      cluster_id: string;
      /** 策略治理规则名称 */
      policy_name?: string;
      /** 策略实例名称 */
      instance_name?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = Array<{
      /** 策略实例实施者UID */
      ali_uid?: string;
      /** 目标集群ID */
      cluster_id?: string;
      /** 规则实例名称 */
      instance_name?: string;
      /** 规则治理动作，取值：

      - `deny`：拦截违规部署

      - `warn`：告警 */
      policy_action?: string;
      /** 策略类型名称 */
      policy_category?: string;
      /** 规则模板描述 */
      policy_description?: string;
      /** 策略治理规则名称 */
      policy_name?: string;
      /** 当前规则实例的配置参数 */
      policy_parameters?: string;
      /** 策略实例实施范围：

      默认"*"代表集群所有命名空间。

      否则返回作用Namespaces名称，多个Namespaces以逗号（,）分隔。 */
      policy_scope?: string;
      /** 规则实例治理等级 */
      policy_severity?: string }>;
  };

  /**
   * @path: /clusters/{cluster_id}/policies/status
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribePolicyInstancesStatus
   * 获取集群当前不同策略类型对应的实例部署状态，包括每种策略规则对应开启的实例计数，以及不同治理等级下开启的策略种类计数。
   * @summary: 获取集群当前不同策略类型对应的实例部署状态，包括每种策略规则对应开启的实例计数，以及不同治理等级下开启的策略种类计数。
   */
  export namespace DescribePolicyInstancesStatus {
    export type Params = {
      /** 目标集群ID */
      cluster_id: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 集群中当前部署的不同治理等级的策略实例计数 */
      instances_severity_count?: object;
      /** 不同策略类型下的策略实例计数列表 */
      policy_instances?: Array<{
        /** 策略类型 */
        policy_category?: string;
        /** 策略描述 */
        policy_description?: string;
        /** 已部署的策略实例计数，如果字段为空说明未部署该类型策略实例。 */
        policy_instances_count?: number;
        /** 策略名称 */
        policy_name?: string;
        /** 策略治理等级 */
        policy_severity?: string }> };
  };

  /**
   * @path: /k8s/{ClusterId}/users/{Uid}/user_config
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeSubaccountK8sClusterUserConfig
   * > 该接口只允许被阿里云账号调用。
   * @summary: 使用主账号调用DescribeSubaccountK8sClusterUserConfig，获取包含账号内指定RAM用户或角色身份信息的Kubernetes集群的KubeConfig凭证。
   */
  export namespace DescribeSubaccountK8sClusterUserConfig {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 阿里云账号内指定的RAM用户或RAM角色ID。 */
      Uid: string;
      /** 是否获取内网连接配置。取值：
      - `true`：仅获取内网连接的KubeConfig凭证。
      - `false`：仅获取公网连接的KubeConfig凭证。

      默认值：`false`。 */
      PrivateIpAddress?: boolean;
      /** 临时KubeConfig有效期，单位：分钟。

      取值范围：15分钟～4320分钟（3天）。
      > 当不设置该参数时，将由系统自动确定一个更长的有效期，具体过期时间通过返回的expiration字段的值确定。 */
      TemporaryDurationMinutes?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 集群访问配置。关于如何查看访问集群配置信息，请参见[配置集群凭据](https://help.aliyun.com/document_detail/86494.html)。 */
      config: string;
      /** KubeConfig的过期时间。格式：RFC3339格式的UTC时间。 */
      expiration?: string };
  };

  /**
   * @path: /tasks/{task_id}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeTaskInfo
   * 根据任务ID，查询该任务执行详情。
   * @summary: 根据任务ID，查询该任务执行详情。
   */
  export namespace DescribeTaskInfo {
    export type Params = {
      /** 任务ID。 */
      task_id: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 集群ID。 */
      cluster_id?: string;
      /** 任务创建时间。 */
      created?: string;
      /** 任务当前运行阶段。 */
      current_stage?: string;
      /** 任务错误信息。 */
      error?: {
        /** 错误码。 */
        code?: string;
        /** 错误消息。 */
        message?: string };
      /** 任务产生的事件。 */
      events?: Array<{
        /** 事件动作。 */
        action?: string;
        /** 事件等级。 */
        level?: string;
        /** 事件消息。 */
        message?: string;
        /** 事件原因。 */
        reason?: string;
        /** 事件来源。 */
        source?: string;
        /** 事件生成时间。 */
        timestamp?: string }>;
      /** 任务参数。 */
      parameters?: object;
      /** 任务阶段。 */
      stages?: Array<{
        /** 任务阶段结束时间。 */
        end_time?: string;
        /** 任务阶段信息。 */
        message?: string;
        /** 任务阶段输出。 */
        outputs?: object;
        /** 任务阶段开始时间。 */
        start_time?: string;
        /** 任务阶段状态。 */
        state?: string }>;
      /** 代表任务的运行状态。取值：
      - `running`：任务正在运行中。
      - `fail`：任务运行失败。
      - `success`：任务运行完成。
       */
      state?: string;
      /** 任务执行对象。 */
      target?: {
        /** 任务执行对象ID。 */
        id?: string;
        /** 任务执行对象类型。 */
        type?: string };
      /** 任务ID。 */
      task_id?: string;
      /** 任务执行详情。 */
      task_result?: Array<{
        /** 任务操作的资源，例如：扩容时操作资源是实例，那么此处就是实例ID。 */
        data?: string;
        /** 资源扩容的状态。取值：
        - `success`：扩容成功。
        - `failed`：扩容失败。
        - `initial`：初始化中。 */
        status?: string }>;
      /** 任务类型，扩容任务的类型为`cluster_scaleout`。 */
      task_type?: string;
      /** 任务更新时间。 */
      updated?: string };
  };

  /**
   * @path: /templates/{TemplateId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeTemplateAttribute
   * 根据编排模板ID，查询该编排模板的详情。
   * @summary: 根据编排模板ID，查询该编排模板的详情。
   */
  export namespace DescribeTemplateAttribute {
    export type Params = {
      /** 模板ID。 */
      TemplateId: string;
      /** 模板类型，其值可以是任意值。

      - 当取值是`kubernetes`时将在控制台的编排模板页面展示该模板。

      - 当取值是`compose`时将在控制台Swarm集群页面显示该模板（已废弃）。

      - 当取值非`kubernetes`时在控制台的编排模板页面将不会展示该模板，推荐使用`kubernetes`。

      默认值：`kubernetes`。
       */
      template_type?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = Array<{
      /** 编排模板访问权限。 */
      acl?: string;
      /** 编排模板创建时间。 */
      created?: string;
      /** 编排模板描述信息。 */
      description?: string;
      /** 编排模板ID，每次变更都会有一个模板ID。 */
      id?: string;
      /** 编排模板名称。 */
      name?: string;
      /** 部署模板的标签。 */
      tags?: string;
      /** 编排模板YAML内容。 */
      template?: string;
      /** 模板类型，其值可以是任意值。

      - 当取值是`kubernetes`时将在控制台的编排模板页面展示该模板。

      - 当取值是`compose`时将在控制台Swarm集群页面显示该模板（已废弃）。

      - 当取值非`kubernetes`时在控制台的编排模板页面将不会展示该模板，推荐使用`kubernetes`。

      默认值：`kubernetes`。
       */
      template_type?: string;
      /** 编排模板唯一ID，不随模板更新而改变。 */
      template_with_hist_id?: string;
      /** 编排模板更新时间。 */
      updated?: string }>;
  };

  /**
   * @path: /templates
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeTemplates
   * 查询已创建的所有编排模板详情。
   * @summary: 查询已创建的所有编排模板详情。
   */
  export namespace DescribeTemplates {
    export type Params = {
      /** 模板类型，值可以是任意值。

      - 当取值是`kubernetes`时将在控制台的编排模板页面展示该模板。

      - 当取值是`compose`时将不在控制台的编排模板页面展示该模板。

      默认值：`kubernetes`。 */
      template_type?: string;
      /** 对查询结果进行分页处理，指定返回第几页的数据。

      默认值： 1。 */
      page_num?: number;
      /** 对查询结果进行分页处理，指定每页包含的数据条数。

      默认值：10。 */
      page_size?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 分页信息。 */
      page_info?: {
        /** 展示当前页数。 */
        page_number?: number;
        /** 单页最大数据条数。 */
        page_size?: number;
        /** 结果总数。 */
        total_count?: number };
      /** 模板列表。 */
      templates?: Array<{
        /** 用户部署模板的访问权限，取值：

        - `private`：私有的。
        - `public`：公共的。
        - `shared`：可共享的。

        默认值：`private`。 */
        acl?: string;
        /** 部署模板创建时间。 */
        created?: string;
        /** 部署模板描述信息。 */
        description?: string;
        /** 部署模板ID。 */
        id?: string;
        /** 部署模板名称。 */
        name?: string;
        /** 部署模板的标签，如果不显式指定，默认为模板名称。 */
        tags?: string;
        /** YAML格式的模板内容。 */
        template?: string;
        /** 模板类型，值可以是任意值。

        - 当取值是`kubernetes`时将在控制台的编排模板页面展示该模板。

        - 当取值是`compose`时将在控制台Swarm集群页面显示该模板（已废弃）。 */
        template_type?: string;
        /** 模板关联的父模板ID，用于实现模板多版本功能（同一模板的不同版本拥有相同的`template_with_hist_id`值）。 */
        template_with_hist_id?: string;
        /** 部署模板更新时间。 */
        updated?: string }> };
  };

  /**
   * @path: /clusters/{cluster_id}/triggers
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeTrigger
   * 查询指定的触发器。
   * @summary: 查询指定的触发器。
   */
  export namespace DescribeTrigger {
    export type Params = {
      /** 集群ID。 */
      cluster_id: string;
      /** 应用所属命名空间。 */
      Namespace: string;
      /** 触发器类型。取值：

      - `deployment`：针对无状态应用的触发器。 

      - `application`：针对应用中心应用的触发器。

      默认值：`deployment`。

      当不指定触发器类型时，查询结果将不过滤触发器类型。 */
      Type?: string;
      /** 应用名称。 */
      Name: string;
      /** 触发器行为，取值：

      `redeploy`：重新部署`project_id`中定义的资源。

      当不指定触发器行为时，查询结果将不过滤触发器行为。 */
      action?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = Array<{
      /** 触发器行为，取值：

      `redeploy`: 重新部署project_id中定义的资源。 */
      action?: string;
      /** 集群ID。 */
      cluster_id?: string;
      /** 触发器ID。 */
      id?: string;
      /** 触发器名称。 */
      name?: string;
      /** 触发器项目名称。

      由应用所在命名空间及应用名称组成，格式为`${namespace}/${name}`，取值示例：default/test-app。 */
      project_id?: string;
      /** Token信息。 */
      token?: string;
      /** 触发器类型。

      取值：

      - `deployment`：针对无状态应用的触发器。 

      - `application`：针对应用中心应用的触发器。

      默认值：`deployment`。 */
      type?: string }>;
  };

  /**
   * @path: /api/v2/k8s/{ClusterId}/namespaces
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeUserClusterNamespaces
   * 列举用户集群命名空间
   * @summary: 列举用户集群命名空间
   */
  export namespace DescribeUserClusterNamespaces {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = Array<string>;
  };

  /**
   * @path: /permissions/users/{uid}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeUserPermission
   * 查询指定RAM用户的集群授权信息。
   * @summary: 查询指定RAM用户的集群授权信息。
   */
  export namespace DescribeUserPermission {
    export type Params = {
      /** 指定RAM用户或RAM角色的ID。

      > 当为RAM角色授权时，使用RAM角色的ID。 */
      uid: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = Array<{
      /** 是否为集群创建者的授权，取值：

      - `0`：代表不是集群创建者的授权记录。
      - `1`：代表该授权记录为集群创建者的管理员权限。 */
      is_owner?: number;
      /** 是否为RAM角色授权，取值：

      - `0`：代表当前记录不是RAM角色授权。
      - `1`：代表当前记录是RAM角色授权。

       */
      is_ram_role?: number;
      /** 集群访问配置，格式为：

      - 当是集群维度授权时，格式为：`{cluster_id}`。
      - 当是命名空间维度授权时，格式为：`{cluster_id}/{namespace}`。
      - 当是所有集群授权时，值固定为：`all-clusters`。 */
      resource_id?: string;
      /** 授权类型，取值：

      - `cluster`：集群维度。
      - `namespace`：命名空间维度。
      - `console`：所有集群维度的授权（之前只用于控制台展示）。

       */
      resource_type?: string;
      /** 自定义角色名称，当授权自定义角色时，该字段为指定的自定义集群管理角色名称。 */
      role_name?: string;
      /** 预置的角色类型，取值：

      - `admin`：管理员。
      - `ops`：运维人员。
      - `dev`：开发人员。
      - `restricted`：受限用户。
      - `custom`：使用自定义的集群管理角色。 */
      role_type?: string }>;
  };

  /**
   * @path: /quota
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeUserQuota
   * 查询集群及节点配额。
   * @summary: 查询集群及节点配额。
   */
  export namespace DescribeUserQuota {
    export type Params = {};
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 托管版集群配额。默认为20。如果超过默认值，需[到配额平台提交申请](https://quotas.console.aliyun.com/products/csk/quotas)扩容。 */
      amk_cluster_quota?: number;
      /** ASK集群配额，默认为20。如果超过默认值，需[到配额平台提交申请](https://quotas.console.aliyun.com/products/csk/quotas)扩容。 */
      ask_cluster_quota?: number;
      /** 单集群节点池配额，默认值为20。如果超过默认值，需[到配额平台提交申请](https://quotas.console.aliyun.com/products/csk/quotas)扩容 */
      cluster_nodepool_quota?: number;
      /** 单账户总集群配额，默认为50。如果超过默认值，需[到配额平台提交申请](https://quotas.console.aliyun.com/products/csk/quotas)扩容。 */
      cluster_quota?: number;
      /** 边缘增强型节点池Quota。 */
      edge_improved_nodepool_quota?: {
        /** 每个边缘增强型节点池允许的最大带宽，单位：Mbps。 */
        bandwidth?: number;
        /** 每个账号下允许创建的边缘增强型节点池数量。 */
        count?: number;
        /** 每个边缘增强型节点池最大购买时长，单位：月。
        >由于边缘增强型节点池为按量付费，您暂时无需关注该字段。 */
        period?: number };
      /** 单集群节点数配额，默认为100。如果超过默认值，需[到配额平台提交申请](https://quotas.console.aliyun.com/products/csk/quotas)扩容。 */
      node_quota?: number;
      /** 新配额项，如存在该字段，则以该字段为准。 */
      quotas?: object };
  };

  /**
   * @path: /gs/workflows
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeWorkflows
   * 调用DescribeWorkflows查询已创建的所有工作流。
   * @summary: 调用DescribeWorkflows查询已创建的所有工作流。
   */
  export namespace DescribeWorkflows {
    export type Params = {};
    export type bodyParams = undefined;
    export type APIReponse = {
      /** Job列表。 */
      jobs?: Array<{
        /** 集群ID。 */
        cluster_id?: string;
        /** 工作流创建时间。 */
        create_time?: string;
        /** 工作流名称。 */
        job_name?: string }> };
  };

  /**
   * @path: /clusters/{cluster_id}/nodepools/{nodepool_id}/vuls/fix
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/FixNodePoolVuls
   * 1. 节点池CVE修复基于云安全中心提供，您需要购买云安全中心旗舰版（容器版）才能正常使用。
   * 2. 部分CVE修复需要重启您的节点，容器服务会在您的节点重启前执行本节点的排水工作，请确保集群有足够的节点空余资源用于排水，例如提前扩容节点池。
   * 3. CVE的兼容性由云安全中心保证，您需要关注您的应用与CVE的兼容性，您可以在修复过程中随时暂停或者取消修复。
   * 4. CVE修复是分批次进行的，点击暂停或者取消CVE修复后，已经下发了修复任务的批次会继续执行直到完成，未下发的批次会被暂停任务下发或取消任务下发。
   * @summary: 自动修复指定集群节点池的漏洞。
   */
  export namespace FixNodePoolVuls {
    export type Params = {
      /** 集群ID。 */
      cluster_id: string;
      /** 节点池ID。 */
      nodepool_id: string;
    };
    export type bodyParams = {
      /** 修复完成后是否自动重启节点。 */
      auto_restart?: boolean;
      /** 待修复的节点名称列表。 */
      nodes?: Array<string>;
      /** 轮转修复策略。 */
      rollout_policy?: {
        /** 轮转修复时的最大并行度，最小值为1，最大值为节点池节点数量。 */
        max_parallelism?: number };
      /** 漏洞列表。 */
      vuls?: Array<string> };
    export type APIReponse = {
      /** 修复任务ID。 */
      task_id?: string };
  };

  /**
   * @path: /clusters/{cluster_id}/checks/{check_id}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/GetClusterCheck
   * 使用GetClusterCheck查询指定的集群检查状态和结果。
   * @summary: 使用GetClusterCheck查询指定的集群检查状态和结果。
   */
  export namespace GetClusterCheck {
    export type Params = {
      /** 集群ID。 */
      cluster_id: string;
      /** 检查ID。 */
      check_id: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** Id of the request */
      check_id?: string;
      /** 检查项。 */
      check_items?: object;
      /** 创建时间。 */
      created_at?: string;
      /** 完成时间。 */
      finished_at?: string;
      /** 检查状态信息。 */
      message?: string;
      /** 检查状态。 */
      status?: string;
      /** 检查类型。 */
      type?: string };
  };

  /**
   * @path: /triggers/{ClusterId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/GetKubernetesTrigger
   * 根据应用名称查询该应用的触发器。
   * @summary: 根据应用名称查询该应用的触发器。
   */
  export namespace GetKubernetesTrigger {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 命名空间名称。 */
      Namespace: string;
      /** 触发器类型。取值：

      - `deployment`：针对无状态应用的触发器。 

      - `application`：针对应用中心应用的触发器。

      默认值：`deployment`。

      当不指定触发器类型时，查询结果将不过滤触发器类型。 */
      Type?: string;
      /** 应用名称。 */
      Name: string;
      /** 触发器行为，取值：

      `redeploy`：重新部署`project_id`中定义的资源。

      当不指定触发器行为时，查询结果将不过滤触发器行为。 */
      action?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = Array<{
      /** 触发器行为，取值：

      `redeploy`: 重新部署project_id中定义的资源。 */
      action?: string;
      /** 集群ID。 */
      cluster_id?: string;
      /** 触发器ID。 */
      id?: string;
      /** 触发器名称。 */
      name?: string;
      /** 触发器项目名称。

      由应用所在命名空间及应用名称组成，格式为`${namespace}/${name}`，取值示例：default/test-app。 */
      project_id?: string;
      /** Token */
      token?: string;
      /** 触发器类型。

      取值：

      - `deployment`：针对无状态应用的触发器。 

      - `application`：针对应用中心应用的触发器。

      默认值：`deployment`。 */
      type?: string }>;
  };

  /**
   * @path: /api/v2/clusters/{ClusterId}/upgrade/status
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/GetUpgradeStatus
   * 根据集群ID，查询该集群的升级状态。
   * @summary: 根据集群ID，查询该集群的升级状态。
   */
  export namespace GetUpgradeStatus {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 集群升级中的错误信息。 */
      error_message?: string;
      /** 预检查返回ID。 */
      precheck_report_id?: string;
      /** 集群目前升级的状态。取值：

      - `success` : 升级成功。
      - `fail` : 升级失败。
      - `pause` : 升级暂停。
      - `running` : 升级进行中。 */
      status?: string;
      /** 集群目前升级的阶段。取值：

      - `not_start` : 暂未开始。
      - `prechecking` : 预检查中。
      - `upgrading`:  升级中。
      - `pause` : 暂停中。
      - `success` : 升级成功。 */
      upgrade_step?: string;
      /** 升级任务详情。 */
      upgrade_task?: {
        /** 升级任务描述信息。 */
        message?: string;
        /** 升级任务状态。取值：
        - `running`: 执行中。
        - `Success`: 执行成功。
        - `Failed`: 执行失败。

         */
        status?: string } };
  };

  /**
   * @path: /permissions/users/{uid}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/GrantPermissions
   * **注意事项**：
   * 
   * - 请确保已在RAM控制台为目标RAM用户授予了至少拥有目标集群的只读权限的RAM策略，否则API将返回`ErrorRamPolicyConfig`错误码。
   * 关于RAM授权操作详情，请参见 [自定义RAM授权策略](https://help.aliyun.com/document_detail/86485.html)。
   * - 如果调用这个API的账号是RAM用户账号，请先确保该账号已拥有修改其他RAM用户集群授权信息的权限，否则API将返回`StatusForbidden`或`ForbiddenGrantPermissions`错误码。具体操作，请参见[子账号如何给其他子账号进行RBAC授权](https://help.aliyun.com/document_detail/119035.html) 。
   * 
   * - 全量更新RAM用户集群授权信息操作会覆盖目标RAM用户已有的集群权限，请求时需要包含想要授权给目标RAM用户的所有权限配置。
   * @summary: 调用GrantPermissions全量更新RAM用户集群授权信息。
   */
  export namespace GrantPermissions {
    export type Params = {
      /** RAM用户的ID。 */
      uid: string;
    };
    export type bodyParams = Array<{
      /** 授权目标集群ID。

      - 当`role_type`参数的值是`all-clusters`时，此参数的值传空字符串。 */
      cluster: string;
      /** 该授权是否是自定义授权（`role_name`使用自定义的ClusterRole名称）。 */
      is_custom?: boolean;
      /** 是否是RAM角色授权。 */
      is_ram_role?: boolean;
      /** 命名空间名称，集群维度授权时默认为空。

       */
      namespace?: string;
      /** 预置的角色名称，取值：

      - `admin`: 管理员。
      - `ops`：运维人员。
      - `dev`：开发人员。
      - `restricted`: 受限用户。
      - 自定义的ClusterRole名称。 */
      role_name: string;
      /** 授权类型，取值：

      - `cluster`：集群维度。
      - `namespace`: 命名空间维度。
      - `all-clusters`: 所有集群维度。 */
      role_type: string }>;
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{ClusterId}/components/install
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/InstallClusterAddons
   * 为集群安装组件。
   * @summary: 为集群安装组件。
   */
  export namespace InstallClusterAddons {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = Array<{
      /** 组件自定义参数，使用JSON字符串编码。 */
      config?: string;
      /** 组件名称。 */
      name: string;
      /** 组件版本。

      > 可以API接口[DescribeClusterAddonsVersion](https://help.aliyun.com/document_detail/197434.html)通过组件列表查询版本号。 */
      version: string }>;
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{cluster_id}/checks
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ListClusterChecks
   * 使用ListClusterChecks查询指定集群的全部集群检查。
   * @summary: 使用ListClusterChecks查询指定集群的全部集群检查。
   */
  export namespace ListClusterChecks {
    export type Params = {
      /** 集群ID。 */
      cluster_id?: string;
      /** 检查类型。 */
      type?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 检查列表。 */
      checks?: Array<{
        /** 检查ID。 */
        check_id?: string;
        /** 创建时间。 */
        created_at?: string;
        /** 完成时间。 */
        finished_at?: string;
        /** 检查状态信息。 */
        message?: string;
        /** 检查状态。 */
        status?: string;
        /** 检查类型。 */
        type?: string }> };
  };

  /**
   * @path: /tags
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ListTagResources
   * 根据集群ID，查询指定集群资源的标签。
   * @summary: 根据集群ID，查询指定集群资源的标签。
   */
  export namespace ListTagResources {
    export type Params = {
      /** 要查询的集群ID列表。

       */
      resource_ids: Array<string>;
      /** 资源类型，目前支持：`CLUSTER`。 */
      resource_type: string;
      /** 地域ID。 */
      region_id: string;
      /** 要查询的标签列表，限制最多包含20个子项。

       */
      tags?: Array<defs.tag>;
      /** 下一个查询开始的令牌。 */
      next_token?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 下一个查询开始的令牌。

       */
      next_token?: string;
      /** 请求ID。 */
      request_id?: string;
      /** 标签资源集。 */
      tag_resources?: {
        /** 标签资源。





         */
        tag_resource?: Array<{
          /** 资源ID。 */
          resource_id?: string;
          /** 资源类型。更多信息，请参见[标签](https://help.aliyun.com/document_detail/110425.html)。 */
          resource_type?: string;
          /** 标签的名称。 */
          tag_key?: string;
          /** 标签值。 */
          tag_value?: string }> } };
  };

  /**
   * @path: /clusters/{cluster_id}/migrate
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/MigrateCluster
   * 调用MigrateCluster将集群从标准托管版迁移至Pro托管版。
   * @summary: 调用MigrateCluster将集群从标准托管版迁移至Pro托管版。
   */
  export namespace MigrateCluster {
    export type Params = {
      /** 集群ID。 */
      cluster_id: string;
    };
    export type bodyParams = {
      /** Bucket访问端点。 */
      oss_bucket_endpoint?: string;
      /** Bucket名称。 */
      oss_bucket_name?: string };
    export type APIReponse = {
      /** 集群ID。 */
      cluster_id?: string;
      /** 请求ID。 */
      request_id?: string;
      /** 任务ID。 */
      task_id?: string };
  };

  /**
   * @path: /api/v2/clusters/{ClusterId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ModifyCluster
   * 根据集群ID修改该集群配置。
   * @summary: 根据集群ID修改该集群配置。
   */
  export namespace ModifyCluster {
    export type Params = {
      /** 集群ID。

       */
      ClusterId: string;
    };
    export type bodyParams = {
      /** 注册集群 API Server SLB 访问控制列表。 */
      access_control_list?: Array<string>;
      /** 集群是否绑定EIP，用于公网访问API Server。取值：

      - `true`：集群绑定EIP。
      - `false`：集群不绑定EIP。 */
      api_server_eip?: boolean;
      /** 集群API Server绑定的EIP实例ID，仅当`api_server_eip`取值为`true`时生效。 */
      api_server_eip_id?: string;
      /** 集群名称。

      命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。 */
      cluster_name?: string;
      /** 集群删除保护，防止通过控制台或API误删除集群。取值：

      - `true`：启用集群删除保护，将不能通过控制台或API删除集群。
      - `false`：不启用集群删除保护，则能通过控制台或API删除集群。

      默认值：`false`。 */
      deletion_protection?: boolean;
      /** 启用或禁用RRSA功能。取值：

      - `true`：启用。
      - `false`：禁用。
       */
      enable_rrsa?: boolean;
      /** 重新绑定集群测试域名。取值：

      - `true`：重新绑定集群测试域名。
      - `false`：不重新绑定集群测试域名。

      默认值：`false`。 */
      ingress_domain_rebinding?: boolean;
      /** 被修改集群的SLB实例ID。 */
      ingress_loadbalancer_id?: string;
      /** 实例删除保护，防止通过控制台或API误删除释放节点。取值：

      - `true`: 不能通过控制台或API误删除集群。
      - `false`：能通过控制台或API误删除集群。

      默认值：`false`。 */
      instance_deletion_protection?: boolean;
      /** 集群维护窗口，该功能只在Pro托管版集群中生效。 */
      maintenance_window?: defs.maintenance_window;
      /** 集群资源组ID。 */
      resource_group_id?: string;
      /** 系统事件存储配置。 */
      system_events_logging?: {
        /** 是否开启系统事件存储。 */
        enabled?: boolean;
        /** 系统事件存储的LogProject名称。 */
        logging_project?: string } };
    export type APIReponse = {
      /** 集群ID。 */
      cluster_id?: string;
      /** 请求ID。 */
      request_id?: string;
      /** 任务ID。 */
      task_id?: string };
  };

  /**
   * @path: /clusters/{cluster_id}/components/{component_id}/config
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ModifyClusterAddon
   * 使用该API可修改普通集群组件的配置以及ACK Pro集群的管控面参数配置：
   * - 普通组件可配置参数列表可通过`DescribeClusterAddonMetadata ` API查询，详情参见[查询集群组件版本元数据](https://help.aliyun.com/document_detail/415029.html)。
   * - ACK Pro集群管控面组件可配置的参数列表，请参见[自定义ACK Pro集群的管控面参数](https://help.aliyun.com/document_detail/199588.html)。
   * 
   * 修改配置可能会导致组件重新部署和启动，请评估影响后再进行操作。
   * 
   * 
   * 
   * @summary: 调用ModifyClusterAddon修改已安装的集群组件配置。修改配置可能会导致组件重新部署和启动，请评估影响后再进行操作。
   */
  export namespace ModifyClusterAddon {
    export type Params = {
      /** 集群ID。 */
      cluster_id: string;
      /** 组件ID。 */
      component_id: string;
    };
    export type bodyParams = {
      /** 自定义参数设置。 */
      config?: string };
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ModifyClusterNodePool
   * 调用ModifyClusterNodePool更新节点配置。
   * @summary: 调用ModifyClusterNodePool更新节点配置。
   */
  export namespace ModifyClusterNodePool {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 节点池ID。 */
      NodepoolId: string;
    };
    export type bodyParams = {
      /** 自动伸缩配置。 */
      auto_scaling?: {
        /** EIP带宽峰值。 */
        eip_bandwidth?: number;
        /** EIP计费类型，取值：

        - `PayByBandwidth`：按固定带宽计费。
        - `PayByTraffic`：按使用流量计费。

        默认值：`PayByBandwidth`。 */
        eip_internet_charge_type?: string;
        /** 是否启用自动伸缩，取值：

        - `true`：开启节点池自动伸缩功能。
        - `false`：不开启自动伸缩，当取值为false时，`auto_scaling`内的其他配置参数将不生效。

        默认值：`false`。 */
        enable?: boolean;
        /** 是否绑定EIP，取值：

        - `true`：绑定EIP。
        - `false`：不绑定EIP。

        默认值：`false`。 */
        is_bond_eip?: boolean;
        /** 最大实例数。 */
        max_instances?: number;
        /** 最小实例数。 */
        min_instances?: number;
        /** 自动伸缩类型，按照自动伸缩实例类型划分。取值：

        - `cpu`：普通实例型。
        - `gpu`：GPU实例型。
        - `gpushare`：GPU共享型。
        - `spot`：抢占式实例型。

        默认值：`cpu`。 */
        type?: string };
      /** 集群相关配置。 */
      kubernetes_config?: {
        /** 是否在ECS节点上安装云监控，安装后可以在云监控控制台查看所创建ECS实例的监控信息，推荐开启。取值：

        - `true`：在ECS节点上安装云监控。
        - `false`：不在ECS节点上安装云监控。

        默认值：`false`。 */
        cms_enabled?: boolean;
        /** 节点CPU管理策略。当集群版本在1.12.6及以上时支持以下两种策略：

        - `static`：允许为节点上具有某些资源特征Pod增强其CPU亲和性和独占性。
        - `none`：表示启用现有的默认CPU亲和性方案。

        默认值：`none`。 */
        cpu_policy?: string;
        /** 节点标签，为Kubernetes集群节点添加标签。标签定义规则：

        - 标签由区分大小写的键值对组成，您最多可以设置20个标签。
        - 标签键不可以重复，最长为64个字符；标签值可以为空，最长为128个字符。标签键和标签值都不能以`aliyun`、`acs:`、`https://`或`http://`开头。更多信息，请参见[Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set)。 */
        labels?: Array<defs.tag>;
        /** 容器运行时名称。 */
        runtime?: string;
        /** 容器运行时版本。 */
        runtime_version?: string;
        /** 节点污点配置。 */
        taints?: Array<defs.taint>;
        /** 节点池自定义数据。更多信息，请参见[生成实例自定义数据](https://help.aliyun.com/document_detail/49121.html)。 */
        user_data?: string };
      /** 托管节点池配置。 */
      management?: {
        /** 是否自动修复，仅当`enable=true`时生效。取值：

        - `true`：自动修复。
        - `false`：不自动修复。

        默认值：`true`。 */
        auto_repair?: boolean;
        /** 自动修复节点策略。 */
        auto_repair_policy?: {
          /** 是否允许重启节点，取值：

          - `true`：允许重启节点。
          - `false`：不允许重启节点。 */
          restart_node?: boolean };
        /** 是否启用自动升级，取值：

        - `true`：启用自动升级。
        - `false`：不启用自动升级。
         */
        auto_upgrade?: boolean;
        /** 自动升级策略。 */
        auto_upgrade_policy?: {
          /** 是否允许自动升级kubelet，取值：

          - `true`：允许自动升级kubelet。
          - `false`：不允许自动升级kubelet。 */
          auto_upgrade_kubelet?: boolean };
        /** 是否自动修复CVE，取值：

        - `true`：允许自动修复CVE。
        - `false`：不允许自动修复CVE。 */
        auto_vul_fix?: boolean;
        /** 自动修复CVE策略。 */
        auto_vul_fix_policy?: {
          /** 是否允许重启节点，取值：

          - `true`：允许重启节点。
          - `false`：不允许重启节点。 */
          restart_node?: boolean;
          /** 允许自动修复的漏洞级别，以逗号分隔。 */
          vul_level?: string };
        /** 是否开启托管节点池，取值：

        - `true`：开启托管节点池。
        - `false`：不开启托管节点池，只有当`enable=true`时，其他相关配置才生效。

        默认值：`false`。 */
        enable?: boolean;
        /** 自动升级配置，仅当`enable=true`时生效。 */
        upgrade_config?: {
          /** 是否启用自动升级：

          - true：启用。
          - false：不启用。

          默认值：`true`。 */
          auto_upgrade?: boolean;
          /** 最大不可用节点数量。

          取值范围：\[1,1000\]

          默认值：1。 */
          max_unavailable?: number;
          /** 额外节点数量。升级的时候节点会不可用，您可以创建额外节点补偿集群的负载。

          > 建议创建的额外节点不超过当前的节点数。 */
          surge?: number;
          /** 额外节点比例，和`surge`二选一。 */
          surge_percentage?: number } };
      /** 节点池配置。 */
      nodepool_info?: {
        /** 节点池名称。

        命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。 */
        name?: string;
        /** 资源组ID。 */
        resource_group_id?: string };
      /** 扩容组配置。 */
      scaling_group?: {
        /** 节点是否开启自动续费，当`instance_charge_type`取值为`PrePaid`时才生效。取值：

        - `true`：自动续费。
        - `false`：不自动续费。

        默认值：`true`。 */
        auto_renew?: boolean;
        /** 节点自动续费周期。当`instance_charge_type`取值为`PrePaid`时才生效，且为必选值。

        当`PeriodUnit=Month`时，取值范围：{1, 2 , 3, 6, 12}。 */
        auto_renew_period?: number;
        /** 当`multi_az_policy`取值为`COST_OPTIMIZED`时，如果因价格、库存等原因无法创建足够的抢占式实例，是否允许自动尝试创建按量实例满足ECS实例数量要求。取值：

        - `true`：允许自动尝试创建按量实例满足ECS实例数量要求。
        - `false`：不允许自动尝试创建按量实例满足ECS实例数量要求。 */
        compensate_with_on_demand?: boolean;
        /** 节点数据盘配置，取值范围\[0,10\]。最多支持添加10块数据盘。 */
        data_disks?: Array<defs.data_disk>;
        /** 节点池期望节点数。 */
        desired_size?: number;
        /** 自定义镜像ID。可通过`DescribeKubernetesVersionMetadata`查询系统支持的镜像，默认使用系统最新镜像。 */
        image_id?: string;
        /** 节点池节点付费类型，取值：

        - `PrePaid`：预付费
        - `PostPaid`：按量付费

        默认值：`PostPaid`。 */
        instance_charge_type?: string;
        /** 节点实例规格列表，您可以选择多个实例规格作为备选，每个节点创建时，将从第一个规格开始尝试购买，直到创建成功。最终购买的实例规格可能随库存变化而不同。 */
        instance_types?: Array<string>;
        /** 公网IP收费类型。取值：

        - `PayByBandwidth`：按固定带宽计费。
        - `PayByTraffic`：按使用流量计费。 */
        internet_charge_type?: string;
        /** 节点公网IP出带宽最大值，单位为Mbps（Mega bit per second），取值范围：\[1,100\]。 */
        internet_max_bandwidth_out?: number;
        /** 密钥对名称，和`login_password`二选一。当节点池为托管版节点池时，只支持`key_pair`。 */
        key_pair?: string;
        /** SSH登录密码，和`key_pair`二选一。密码规则为8~30个字符，且至少同时包含三项（大小写字母、数字和特殊符号）。 */
        login_password?: string;
        /** 多可用区伸缩组ECS实例扩缩容策略。取值：

        - `PRIORITY`：根据您定义的虚拟交换机（VSwitchIds.N）扩缩容。当优先级较高的虚拟交换机所在可用区无法创建ECS实例时，自动使用下一优先级的虚拟交换机创建ECS实例。

        - `COST_OPTIMIZED`：按vCPU单价从低到高进行尝试创建。当伸缩配置设置了抢占式计费方式的多实例规格时，优先创建对应抢占式实例。您可以继续通过`CompensateWithOnDemand`参数指定当抢占式实例由于库存等原因无法创建时，是否自动尝试以按量付费的方式创建。

          > `COST_OPTIMIZED`仅在伸缩配置设置了多实例规格或者选用了抢占式实例的情况下生效。

        - `BALANCE`：在伸缩组指定的多可用区之间均匀分配ECS实例。如果由于库存不足等原因可用区之间变得不平衡，您可以通过API `RebalanceInstances`平衡资源。更多信息，请参见[RebalanceInstances](https://help.aliyun.com/document_detail/71516.html)。

        默认值：`PRIORITY`。 */
        multi_az_policy?: string;
        /** 伸缩组所需要按量实例个数的最小值，取值范围：\[0,1000\]。当按量实例个数少于该值时，将优先创建按量实例。 */
        on_demand_base_capacity?: number;
        /** 伸缩组满足最小按量实例数（`on_demand_base_capacity`）要求后，超出的实例中按量实例应占的比例。取值范围：\[0,100\]。 */
        on_demand_percentage_above_base_capacity?: number;
        /** 节点包年包月时长，当`instance_charge_type`取值为`PrePaid`时才生效且为必选值。

        当`PeriodUnit=Month`时，取值范围：{1, 2 , 3, 6, 12, 24, 36, 48, 60}。 */
        period?: number;
        /** 节点付费周期，当`instance_charge_type`取值为`PrePaid`时时候需要指定周期。

        目前只支持以月为计时单位。

        默认值：`Month`。 */
        period_unit?: string;
        /** 操作系统平台。取值：

        - `AliyunLinux`
        - `CentOS`
        - `Windows`
        - `WindowsCore` */
        platform?: string;
        /** 私有节点池配置。 */
        private_pool_options?: {
          /** 私有节点池ID。 */
          id?: string;
          /** 私有节点池类型，实例启动的私有池容量选项。弹性保障服务或容量预定服务在生效后会生成私有池容量，供实例启动时选择。取值：
          - `Open`：开放模式。将自动匹配开放类型的私有池容量。如果没有符合条件的私有池容量，则使用公共池资源启动。
          - `Target`：指定模式。使用指定的私有池容量启动实例，如果该私有池容量不可用，则实例会启动失败。
          - `None`：不使用模式。实例启动将不使用私有池容量。 */
          match_criteria?: string };
        /** RDS实例列表。 */
        rds_instances?: Array<string>;
        /** 伸缩组模式，取值：

        - `release`：标准模式，根据申请资源值的使用量，通过创建、释放ECS的方式进行伸缩。
        - `recycle`：极速模式，通过创建、停机、启动的方式进行伸缩，提高再次伸缩的速度（停机时计算资源不收费，只收取存储费用，本地盘机型除外）。 */
        scaling_policy?: string;
        /** 指定可用实例规格的个数，伸缩组将按成本最低的多个规格均衡创建抢占式实例。取值范围：\[1,10\]。 */
        spot_instance_pools?: number;
        /** 是否开启补齐抢占式实例。开启后，当收到抢占式实例将被回收的系统消息时，伸缩组将尝试创建新的实例，替换掉将被回收的抢占式实例。取值：

        - `true`：开启补齐抢占式实例。
        - `false`：不开启补齐抢占式实例。
         */
        spot_instance_remedy?: boolean;
        /** 抢占实例市场价格区间配置。 */
        spot_price_limit?: Array<{
          /** 抢占式实例规格。 */
          instance_type?: string;
          /** 单台实例上限价格。

          单位：元/小时。
           */
          price_limit?: string }>;
        /** 抢占式实例类型，取值：

        - `NoSpot`：非抢占式实例。
        - `SpotWithPriceLimit`：设置抢占实例价格上限。
        - `SpotAsPriceGo`：系统自动出价，跟随当前市场实际价格。

        更多信息，请参见[抢占式实例](https://help.aliyun.com/document_detail/157759.html)。 */
        spot_strategy?: string;
        /** 节点系统盘类型，取值：

        - `cloud_efficiency`：高效云盘。
        - `cloud_ssd`：SSD云盘。

        默认值：`cloud_ssd`。 */
        system_disk_category?: string;
        /** 节点系统盘磁盘性能等级， 仅对ESSD磁盘生效。磁盘性能等级和磁盘大小有关。更多信息，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html) */
        system_disk_performance_level?: string;
        /** 节点系统盘大小，单位为GiB。

        取值范围：\[20,500\]。

        该参数的取值必须大于或者等于max{20, ImageSize}。

        默认值：max{40, 参数ImageId对应的镜像大小}。 */
        system_disk_size?: number;
        /** 仅为ECS实例添加标签。

        标签键不可以重复，最大长度为128个字符；标签键和标签值都不能以“aliyun”、“acs:”开头，或包含“https://”、“http://”。 */
        tags?: Array<defs.tag>;
        /** 虚拟交换机ID列表，取值范围\[1,20\]。

        > 为保证高可用性，建议选择不同可用区的虚拟交换机。 */
        vswitch_ids?: Array<string> };
      /** 加密计算集群配置。 */
      tee_config?: {
        /** 是否开启加密计算集群，取值：

        - `true`：开启。
        - `false`：不开启。

        默认值：`false`。 */
        tee_enable?: boolean };
      /** 同步更新节点标签及污点。 */
      update_nodes?: boolean };
    export type APIReponse = {
      /** 节点池ID。 */
      nodepool_id?: string;
      /** 任务ID。 */
      task_id?: string };
  };

  /**
   * @path: /clusters/{ClusterId}/tags
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ModifyClusterTags
   * 根据集群ID修改该集群的集群标签。
   * @summary: 根据集群ID修改该集群的集群标签。
   */
  export namespace ModifyClusterTags {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = Array<defs.tag>;
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}/node_config
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ModifyNodePoolNodeConfig
   * > ACK支持修改节点池内节点的kubelet配置。修改完成后，节点池的节点会自动生效，节点池新增节点也将使用新的配置。
   * @summary: 修改节点池节点配置信息。
   */
  export namespace ModifyNodePoolNodeConfig {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 节点池ID。 */
      NodepoolId: string;
    };
    export type bodyParams = {
      /** kubelet参数配置。 */
      kubelet_config?: defs.kubelet_config;
      /** 轮转配置。 */
      rolling_policy?: {
        /** 最大不可用节点数。 */
        max_parallelism?: number } };
    export type APIReponse = {
      /** 节点池ID。 */
      nodepool_id?: string;
      /** 请求ID。 */
      request_id?: string;
      /** 任务ID。 */
      task_id?: string };
  };

  /**
   * @path: /clusters/{cluster_id}/policies/{policy_name}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ModifyPolicyInstance
   * 调用ModifyPolicyInstance在指定集群中更新策略规则实例。
   * @summary: 调用ModifyPolicyInstance在指定集群中更新策略规则实例。
   */
  export namespace ModifyPolicyInstance {
    export type Params = {
      /** 目标集群ID */
      cluster_id: string;
      /** 策略治理规则名称 */
      policy_name: string;
    };
    export type bodyParams = {
      /** 规则治理动作，取值：

      - `deny`：拦截违规部署
      - `warn`：告警 */
      action?: string;
      /** 策略规则实例ID */
      instance_name?: string;
      /** 限制策略实施的命名空间，为空时表示所有命名空间 */
      namespaces?: Array<string>;
      /** 当前规则实例的配置参数。更多参数配置规则，请参见[容器安全策略规则库说明](https://help.aliyun.com/document_detail/359819.html)。

       */
      parameters?: object };
    export type APIReponse = {
      /** 已更新的实例列表 */
      instances?: Array<string> };
  };

  /**
   * @path: /service/open
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/OpenAckService
   * - 阿里云账号（主账号）可以开通容器服务ACK。
   * - RAM用户（子账号）有AdministratorAccess权限的子账号可以开通服务。
   * @summary: 调用OpenAckService接口开通容器服务ACK。
   */
  export namespace OpenAckService {
    export type Params = {
      /** 要开通的服务类型。取值：

      - `propayasgo`：容器服务ACK Pro托管版。
      - `edgepayasgo`：边缘容器服务。
      - `gspayasgo`：基因计算服务。 */
      type?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 开通服务的订单号。 */
      order_id?: string;
      /** 请求ID。 */
      request_id?: string };
  };

  /**
   * @path: /api/v2/clusters/{ClusterId}/upgrade/pause
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/PauseClusterUpgrade
   * 暂停用户集群升级。
   * @summary: 暂停用户集群升级。
   */
  export namespace PauseClusterUpgrade {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{clusterid}/components/{componentid}/pause
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/PauseComponentUpgrade
   * 调用PauseComponentUpgrade暂停组件升级。
   * @summary: 调用PauseComponentUpgrade暂停组件升级。
   */
  export namespace PauseComponentUpgrade {
    export type Params = {
      /** 集群ID。 */
      clusterid: string;
      /** 组件ID。 */
      componentid: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /tasks/{task_id}/pause
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/PauseTask
   * 暂停执行中的集群任务。
   * @summary: 暂停执行中的集群任务。
   */
  export namespace PauseTask {
    export type Params = {
      /** 任务ID。 */
      task_id: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}/nodes
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/RemoveNodePoolNodes
   * > - 移除节点会涉及Pod迁移，可能会影响业务，请在业务低峰期操作。- 操作过程中可能存在非预期风险，请提前做好相关的数据备份。- 操作过程中，后台会把当前节点设置为不可调度状态。- 移除节点仅移除Worker节点，不会移除Master节点。
   * @summary: 移除节点池内的节点。
   */
  export namespace RemoveNodePoolNodes {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 节点池ID。 */
      NodepoolId: string;
      /** 是否释放节点。可选值：
      - true：释放。
      - false：不释放。 */
      release_node?: boolean;
      /** 是否排水节点。可选值：
      - true：排水。
      - false：不排水。 */
      drain_node?: boolean;
      /** 移除节点列表。 */
      nodes?: Array<string>;
      /** 移除实例列表。 */
      instance_ids?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      request_id?: string;
      /** 任务ID。 */
      task_id?: string };
  };

  /**
   * @path: /gs/workflow/{workflowName}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/RemoveWorkflow
   * 调用RemoveWorkflow删除某个指定工作流。
   * @summary: 调用RemoveWorkflow删除某个指定工作流。
   */
  export namespace RemoveWorkflow {
    export type Params = {
      /** 工作流名称。 */
      workflowName: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{cluster_id}/nodepools/{nodepool_id}/repair
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/RepairClusterNodePool
   * 调用RepairClusterNodePool修复指定的托管节点池内指定节点存在的问题。
   * @summary: 调用RepairClusterNodePool修复指定的托管节点池内指定节点存在的问题。
   */
  export namespace RepairClusterNodePool {
    export type Params = {
      /** 集群ID */
      cluster_id: string;
      /** 节点池ID */
      nodepool_id: string;
    };
    export type bodyParams = {
      /** 是否重启节点。 */
      auto_restart?: boolean;
      /** 节点列表，如果不指定则表示当前节点池内所有节点 */
      nodes?: Array<string> };
    export type APIReponse = {
      /** 请求ID */
      request_id?: string;
      /** 任务ID */
      task_id?: string };
  };

  /**
   * @path: /clusters/{clusterid}/components/{componentid}/resume
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ResumeComponentUpgrade
   * 调用ResumeComponentUpgrade重新启动被暂停的组件升级任务。
   * @summary: 调用ResumeComponentUpgrade重新启动被暂停的组件升级任务。
   */
  export namespace ResumeComponentUpgrade {
    export type Params = {
      /** 集群ID。 */
      clusterid: string;
      /** 组件ID。 */
      componentid: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /tasks/{task_id}/resume
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ResumeTask
   * 恢复已暂停的集群任务。
   * @summary: 恢复已暂停的集群任务。
   */
  export namespace ResumeTask {
    export type Params = {
      /** 任务ID。 */
      task_id: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /api/v2/clusters/{ClusterId}/upgrade/resume
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ResumeUpgradeCluster
   * 根据集群ID，恢复升级处于升级暂停状态的集群。
   * @summary: 根据集群ID，恢复升级处于升级暂停状态的集群。
   */
  export namespace ResumeUpgradeCluster {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{cluster_id}/checks
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/RunClusterCheck
   * 使用RunClusterCheck发起集群检查，例如集群升级检查等
   * @summary: 使用RunClusterCheck发起集群检查，例如集群升级检查等
   */
  export namespace RunClusterCheck {
    export type Params = {
      /** 集群ID。 */
      cluster_id?: string;
    };
    export type bodyParams = {
      /** 检查选项。 */
      options?: object;
      /** 检查类型。 */
      type: string };
    export type APIReponse = {
      /** 检查ID。 */
      check_id?: string;
      /** Id of the request */
      request_id?: string };
  };

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ScaleClusterNodePool
   * 根据节点池ID，扩容节点池节点。
   * @summary: 根据节点池ID，扩容节点池节点。
   */
  export namespace ScaleClusterNodePool {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 节点池ID。 */
      NodepoolId: string;
    };
    export type bodyParams = {
      /** 扩容节点数量。受当前集群节点配额限制，单次操作最多扩容500个节点。 */
      count?: number };
    export type APIReponse = {
      /** 任务ID。 */
      task_id?: string };
  };

  /**
   * @path: /clusters/{cluster_id}/vuls/scan
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ScanClusterVuls
   * 扫描集群安全漏洞。
   * @summary: 扫描集群安全漏洞。
   */
  export namespace ScanClusterVuls {
    export type Params = {
      /** 集群ID。 */
      cluster_id?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      request_id?: string;
      /** 任务ID。 */
      task_id?: string };
  };

  /**
   * @path: /alert/{ClusterId}/alert_rule/start
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/StartAlert
   * undefined
   * @title: 启动报警规则
   */
  export namespace StartAlert {
    export type Params = {
      /** 集群ID。您可以通过调用ListClusters获取集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 返回信息。 */
      msg?: string;
      /** 状态。 */
      status?: boolean };
  };

  /**
   * @path: /gs/workflow
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/StartWorkflow
   * 调用StartWorkflow创建一个新的基因工作流。
   * @summary: 调用StartWorkflow创建一个新的基因工作流。
   */
  export namespace StartWorkflow {
    export type Params = {};
    export type bodyParams = {
      /** bam文件输出名称。 */
      mapping_bam_out_filename?: string;
      /** bam文件输出路径。 */
      mapping_bam_out_path?: string;
      /** 存放mapping的bucket名称。 */
      mapping_bucket_name?: string;
      /** mapping的第一个fastq文件名。 */
      mapping_fastq_first_filename?: string;
      /** mapping的fastq文件路径。 */
      mapping_fastq_path?: string;
      /** mapping的第二个fastq文件名。 */
      mapping_fastq_second_filename?: string;
      /** 是否进行dup。 */
      mapping_is_mark_dup?: string;
      /** mapping oss数据的存放region。 */
      mapping_oss_region?: string;
      /** mapping的reference文件位置。 */
      mapping_reference_path?: string;
      /** SLA类型，可选值：s、g、p。 

      - 白银级（s）：超过90 Gbp的部分，按1.5 Gbp/min计算增加的时间。 
      - 黄金级（g）：超过90 Gbp的部分，按2 Gbp/min计算增加的时间。 
      - 铂金级（p）：超过90 Gbp的部分，按3 Gbp/min计算增加的时间。 */
      service?: string;
      /** 存放wgs的bucket名称。 */
      wgs_bucket_name?: string;
      /** wgs的第一个fastq文件名。 */
      wgs_fastq_first_filename?: string;
      /** wgs的fastq文件路径。 */
      wgs_fastq_path?: string;
      /** wgs的第二个fastq文件名。 */
      wgs_fastq_second_filename?: string;
      /** wgs oss数据的存放region。 */
      wgs_oss_region?: string;
      /** wgs的reference文件路径。 */
      wgs_reference_path?: string;
      /** wgs的vcf输出文件名称。 */
      wgs_vcf_out_filename?: string;
      /** wgs的vcf输出路径。 */
      wgs_vcf_out_path?: string;
      /** 工作流类型，可选值：wgs或mapping。 */
      workflow_type: string };
    export type APIReponse = {
      /** 工作流名称 */
      JobName?: string };
  };

  /**
   * @path: /alert/{ClusterId}/alert_rule/stop
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/StopAlert
   * 停止ACK报警中心中报警规则，停止整个报警规则集分组、单个报警规则。
   * @summary: 停止ACK报警中心中报警规则，停止整个报警规则集分组、单个报警规则。
   */
  export namespace StopAlert {
    export type Params = {
      /** 集群ID。

      您可以通过调用[ListClusters](https://help.aliyun.com/document_detail/87116.html)获取集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 执行失败时返回信息提示。 */
      msg?: string;
      /** 执行结果状态。
      - True：执行成功。
      - False：执行失败。 */
      status?: boolean };
  };

  /**
   * @path: /clusters/{ClusterId}/sync_nodepools
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/SyncClusterNodePool
   * 同步节点池，包含节点池元数据、节点池内节点信息等。
   * @summary: 同步节点池，包含节点池元数据、节点池内节点信息等。
   */
  export namespace SyncClusterNodePool {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @path: /tags
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/TagResources
   * 调用TagResources为指定的集群绑定特定标签。
   * @summary: 调用TagResources为指定的集群绑定特定标签。
   */
  export namespace TagResources {
    export type Params = {};
    export type bodyParams = {
      /** 资源所属的地域ID。 */
      region_id: string;
      /** 资源ID列表。 */
      resource_ids: Array<string>;
      /** 资源类型定义。取值范围：只支持`CLUSTER`这一种资源类型。 */
      resource_type: string;
      /** 资源的标签键值对。数组长度范围：\[1,20\]。注意：

      - 一旦传值，值不允许为空字符串，最多支持128个字符。
      - 不能以`aliyun`和`acs:`开头。
      - 不能包含`http://`或者`https://`。 */
      tags: Array<defs.tag> };
    export type APIReponse = {
      /** 请求id。 */
      RequestId?: string };
  };

  /**
   * @path: /clusters/{ClusterId}/components/uninstall
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UnInstallClusterAddons
   * 根据组件名称，卸载指定集群的组件。
   * @summary: 根据组件名称，卸载指定集群的组件。
   */
  export namespace UnInstallClusterAddons {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = Array<{
      /** 是否清理云资源。 */
      cleanup_cloud_resources?: boolean;
      /** 组件名称。 */
      name?: string }>;
    export type APIReponse = any;
  };

  /**
   * @path: /tags
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UntagResources
   * 调用UntagResources为指定的集群解绑标签。
   * @summary: 调用UntagResources为指定的集群解绑标签。
   */
  export namespace UntagResources {
    export type Params = {
      /** 资源所属的地域ID。 */
      region_id: string;
      /** 资源ID列表。 */
      resource_ids: Array<string>;
      /** 资源类型定义。取值范围：只支持`CLUSTER`这一种资源类型。 */
      resource_type: string;
      /** 资源标签键列表。 */
      tag_keys: Array<string>;
      /** 是否删除全部自定义标签，仅当`tag_keys`为空时生效。取值范围：

      - `true`: 删除全部标签。
      - `false`: 不删除全部标签。 */
      all?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求id。 */
      RequestId?: string };
  };

  /**
   * @path: /alert/{ClusterId}/alert_rule/contact_groups
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UpdateContactGroupForAlert
   * undefined
   * @title: 更新报警项联系人分组
   */
  export namespace UpdateContactGroupForAlert {
    export type Params = {
      /** 集群ID，可以调用ListCluster接口获取。 */
      ClusterId?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{ClusterId}/controlplanelog
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UpdateControlPlaneLog
   * 调用UpdateControlPlaneLog修改ACK托管集群控制平面组件日志配置。
   * @summary: 调用UpdateControlPlaneLog修改ACK托管集群控制平面组件日志配置。
   */
  export namespace UpdateControlPlaneLog {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = {
      /** 阿里云账号ID。 */
      aliuid?: string;
      /** 当前开启控制平面日志的组件列表。 */
      components?: Array<string>;
      /** 控制平面组件日志对应存储的SLS Project名称。

      默认值：k8s-log-$集群ID。 */
      log_project?: string;
      /** 日志在SLS logstore里的数据保存时间。取值范围：1~3000，单位：天。

      默认值：30天。 */
      log_ttl?: string };
    export type APIReponse = any;
  };

  /**
   * @path: /k8s/{ClusterId}/user_config/expire
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UpdateK8sClusterUserConfigExpire
   * > - 该接口只允许被主账号调用。- 如果吊销了您在该集群上使用的KubeConfig凭证，设置在该集群KubeConfig自定义过期时间也会被重置，您需要调用该接口重新设置。
   * 
   * 
   * @summary: 调用UpdateK8sClusterUserConfigExpire更新用户证书过期时间。
   */
  export namespace UpdateK8sClusterUserConfigExpire {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = {
      /** 用户指定的过期时间。单位：小时。
      >expire_hour过期小时数需大于0且小于等于 876000小时（100年）。 */
      expire_hour: number;
      /** 用户ID。 */
      user: string };
    export type APIReponse = any;
  };

  /**
   * @path: /templates/{TemplateId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UpdateTemplate
   * 根据编排模板ID，更新编排模板。
   * @summary: 根据编排模板ID，更新编排模板。
   */
  export namespace UpdateTemplate {
    export type Params = {
      /** 模板ID。 */
      TemplateId: string;
    };
    export type bodyParams = {
      /** 部署模板描述信息。 */
      description?: string;
      /** 部署模板名称。 */
      name?: string;
      /** 部署模板标签。 */
      tags?: string;
      /** YAML格式的模板内容。 */
      template?: string;
      /** 模板类型，值可以是任意值。

      - 当取值是`kubernetes`时将在控制台的编排模板页面展示该模板。

      - 当取值是`compose`时将在控制台Swarm集群页面显示该模板（已废弃）。
       */
      template_type?: string };
    export type APIReponse = any;
  };

  /**
   * @path: /api/v2/clusters/{ClusterId}/upgrade
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UpgradeCluster
   * 根据集群ID，升级指定集群。
   * @summary: 根据集群ID，升级指定集群。
   */
  export namespace UpgradeCluster {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = {
      /** 组件名称，取值：`k8s`。 */
      component_name?: string;
      /** 是否仅升级master。
      - true：仅升级master。
      - false：升级master和worker。 */
      master_only?: boolean;
      /** 集群可升级版本。 */
      next_version?: string;
      /** 集群当前版本。更多信息，请参见[集群版本](https://help.aliyun.com/document_detail/185269.html)。 */
      version?: string };
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{ClusterId}/components/upgrade
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UpgradeClusterAddons
   * 根据组件名称，将指定组件升级到指定版本。
   * @summary: 根据组件名称，将指定组件升级到指定版本。
   */
  export namespace UpgradeClusterAddons {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
    };
    export type bodyParams = Array<{
      /** 组件名称。 */
      component_name: string;
      /** 组件自定义参数，使用JSON字符串编码。 */
      config?: string;
      /** 可升级版本。调用`DescribeClusterAddonsVersion`参数可以查看可以升级的版本。 */
      next_version: string;
      /** 组件升级策略。可选值：
      - overwrite：覆盖升级。
      - canary：金丝雀升级。 */
      policy?: string;
      /** 当前版本。 */
      version?: string }>;
    export type APIReponse = any;
  };

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}/upgrade
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UpgradeClusterNodepool
   * 通过UpgradeClusterNodepool可升级指定集群节点池内节点的Kubernetes版本、操作系统版本或容器运行时版本。
   * @summary: 升级指定集群节点池的Kubernetes版本、操作系统版本或容器运行时版本。
   */
  export namespace UpgradeClusterNodepool {
    export type Params = {
      /** 集群ID。 */
      ClusterId: string;
      /** 节点池ID。 */
      NodepoolId: string;
    };
    export type bodyParams = {
      /** 节点系统镜像ID。 */
      image_id?: string;
      /** 节点Kubernetes版本。 */
      kubernetes_version?: string;
      /** 运行时类型，可选值：containerd，docker */
      runtime_type?: string;
      /** 节点运行时版本。 */
      runtime_version?: string };
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 任务ID。 */
      task_id?: string };
  };
}
