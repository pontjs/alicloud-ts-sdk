
type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

export namespace defs {

}

export namespace API {
    /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AcceptInquiredSystemEvent
   * 调用AcceptInquiredSystemEvent接受并授权执行系统事件操作。对问询中（Inquiring）状态的系统事件，接受系统事件的默认操作，授权系统执行默认操作。
   * @summary: 调用AcceptInquiredSystemEvent接受并授权执行系统事件操作。对问询中（Inquiring）状态的系统事件，接受系统事件的默认操作，授权系统执行默认操作。
   */
  export namespace AcceptInquiredSystemEvent {
    export type Params = {
      /** 系统事件所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 系统事件ID。 */
      EventId: string;
      /** >该参数正在邀测中，暂不支持使用。 */
      Choice?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ActivateRouterInterface
   * undefined
   * @deprecated
   */
  export namespace ActivateRouterInterface {
    export type Params = {
      RegionId: string;
      RouterInterfaceId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AddBandwidthPackageIps
   * undefined
   * @deprecated
   */
  export namespace AddBandwidthPackageIps {
    export type Params = {
      RegionId: string;
      BandwidthPackageId: string;
      IpCount: string;
      ClientToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AddTags
   * 调用该接口时，您需要注意：
   * 
   * -   单项云服务器ECS资源最多可以添加20个标签。
   * -   标签键（`Tag.N.Key`）与标签值（`Tag.N.Value`）必须键值匹配。
   * -   如果标签键（`Tag.N.Key`）在指定的资源上已经存在，则使用新的标签值（`Tag.N.Value`）自动覆盖原标签值。
   * @summary: 添加或者覆盖一个或者多个标签到云服务器ECS的各项资源上。您可以添加标签到实例、磁盘、快照、镜像、安全组等，便于管理资源。
   */
  export namespace AddTags {
    export type Params = {
      /** 资源所在的地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 资源类型定义。取值范围：

      - instance：ECS实例
      - disk：磁盘
      - snapshot：快照
      - image：镜像
      - securitygroup：安全组
      - volume：存储卷
      - eni：弹性网卡
      - ddh：专有宿主机
      - keypair：SSH密钥对
      - launchtemplate：启动模板
      - reservedinstance：预留实例券
      - snapshotpolicy：自动快照策略

      以上取值均为小写。 */
      ResourceType: string;
      /** 要绑定标签的资源ID。例如，当资源类型（ResourceType）为实例（instance）时，资源ID可以理解为实例ID。  */
      ResourceId: string;
      /** 标签列表 */
      Tag: Array<{
        /** 资源的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https:// 。 */
        Key?: string;
        /** 资源的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https:// 。 */
        Value?: string;
        /** 资源的标签键。

        >为提高兼容性，建议您尽量使用Tag.N.Key参数。 */
        key?: string;
        /** 资源的标签值。

        >为提高兼容性，建议您尽量使用Tag.N.Value参数。 */
        value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AllocateDedicatedHosts
   * 创建专有宿主机前，您可以调用[DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html)查看指定地域或者可用区内的资源供给情况。
   * 
   * 创建专有宿主机会产生费用，建议您提前了解资源的计费方式。更多详情，请参见[计费概述](https://help.aliyun.com/document_detail/68978.html)。
   * 
   * - 单次最多能创建100台包年包月或按量付费专有宿主机。
   * - 创建成功后，您可以将返回的专有宿主机ID列表作为请求参数，调用[DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html)查询新建专有宿主机状态。
   * - 提交创建专有宿主机的请求后，指定的参数值不合规或者库存不足时会报错。具体的报错原因，请参见错误码。
   * - 创建专有宿主机后，您可以通过[ModifyInstanceDeployment](https://help.aliyun.com/document_detail/134248.html)将ECS实例从共享宿主机迁移到专有宿主机，也可以在两台专有宿主机上调整实例部署。
   * @summary: 调用AllocateDedicatedHosts创建一台或多台按量付费或者包年包月专有宿主机。专有宿主机是单租户独享的物理机资源，您可以在专有宿主机上自行创建ECS实例和获取物理服务器属性等信息。
   */
  export namespace AllocateDedicatedHosts {
    export type Params = {
      /** 专有宿主机所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 专有宿主机的标签键。N的取值范围：1~20。

        一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun或者acs:开头，不能包含`http://`或者`https://`。 */
        Key?: string;
        /** 专有宿主机的标签值。N的取值范围：1~20。

        一旦传入该值，可以为空字符串。最多支持128个字符，不能以acs:开头，不能包含`http://`或者`https://`。 */
        Value?: string }>;
      /** 专有宿主机要加入的资源组ID。 */
      ResourceGroupId?: string;
      /** 专有宿主机所属的可用区编号。

      默认值：空，表示由系统选择。 */
      ZoneId?: string;
      /** 专有宿主机的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      DedicatedHostName?: string;
      /** 专有宿主机所属的专有宿主机集群ID。 */
      DedicatedHostClusterId?: string;
      /** 专有宿主机的规格。您可以调用[DescribeDedicatedHostTypes](https://help.aliyun.com/document_detail/134240.html)接口获得最新的专有宿主机规格表。 */
      DedicatedHostType: string;
      /** 当专有宿主机发生故障或者在线修复时，为其所宿实例设置迁移方案。取值范围：

      - Migrate：迁移实例到其他物理机并重新启动实例。

        当专有宿主机上挂载云盘存储时，默认值：Migrate。

      - Stop：在当前专有宿主机上停止实例，确认无法修复专有宿主机后，迁移实例到其他物理机并重新启动实例。

        当专有宿主机上挂载本地盘存储时，默认值：Stop。 */
      ActionOnMaintenance?: string;
      /** 负载均衡连接的UDP会话超时时间，单位：秒。取值范围：15~310。 */
      'NetworkAttributes.SlbUdpTimeout'?: number;
      /** 为专有宿主机上运行的云服务设置用户访问的UDP会话超时时间，单位：秒。取值范围：15~310。 */
      'NetworkAttributes.UdpTimeout'?: number;
      /** 专有宿主机的描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
      Description?: string;
      /** 专有宿主机是否加入自动部署资源池。当您在专有宿主机上创建实例，却不指定**DedicatedHostId**时，阿里云将自动从加入资源池的专有宿主机中，为您选取适合的宿主机部署实例，更多信息，请参见[自动部署功能介绍](https://help.aliyun.com/document_detail/118938.html)。取值范围：

      - on：加入自动部署资源池。

      - off：不加入自动部署资源池。

      默认值：on。

      > 若您不希望专有宿主机加入自动部署资源池，请将该参数设置为off。 */
      AutoPlacement?: string;
      /** CPU超卖比。仅自定义规格g6s、c6s、r6s支持设置CPU超卖比。取值范围：1~5。

      CPU超卖比影响DDH的可用vCPU数，一台DDH的可用vCPU数=物理CPU核数\*2\*CPU超卖比。例如，g6s的物理CPU核数为52，如果设置CPU超卖比为4，则DDH创建完成后vCPU总数显示为416。针对CPU绝对稳定性要求不严苛或CPU负载不高的场景，例如开发测试环境，提升超卖比可以提升可用vCPU数，用于部署更多同等规格的ECS实例，降低单位部署成本。 */
      CpuOverCommitRatio?: number;
      /** 指定专有宿主机的最小购买数量。取值范围：1~100。

      > 当专有宿主机的库存小于最小购买数量时，创建专有宿主机将会失败。 */
      MinQuantity?: number;
      /** 专有宿主机的计费方式。取值范围：

      - PrePaid：包年包月。选择包年包月时，请确认您的支付方式支持余额或者信用额度支付，否则会提示`InvalidPayMethod`。

      - PostPaid：按量付费。

      默认值：PostPaid。 */
      ChargeType?: string;
      /** 本次创建的专有宿主机的数量。取值范围：1~100。

      默认值：1。 */
      Quantity?: number;
      /** 购买专有宿主机的包年包月时长。当参数`ChargeType`取值为`PrePaid`时，`Period`参数方可生效并为必选参数。取值范围：

      - PeriodUnit=Week时：1、2、3、4。
      - PeriodUnit=Month时：1、2、3、4、5、6、7、8、9、12、24、36、48、60。
      - PeriodUnit=Year时：1、2、3、4、5。 */
      Period?: number;
      /** 购买专有宿主机的时长单位。取值范围：

      - Week
      - Month
      - Year

      默认值：Month。 */
      PeriodUnit?: string;
      /** 是否自动续费包年包月专有宿主机。
      >当参数**ChargeType**取值PrePaid时，**AutoRenew**参数方可生效。

      默认值：false。 */
      AutoRenew?: boolean;
      /** 单次自动续费的周期。当参数**AutoRenew**为true时，**AutoRenewPeriod**参数方可生效，并为必选参数。取值范围：

      - PeriodUnit=Week时：1、2、3。
      - PeriodUnit=Month时：1、2、3、6、12、24、36、48、60。 */
      AutoRenewPeriod?: number;
      /** 专有宿主机自动释放时间。需按照ISO 8601标准表示，并使用UTC+0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。

      > - 最短设置为当前时间之后半小时。
      > - 最长不能超过当前时间之后三年。
      > - 若参数值中的秒（ss）不是00，则自动取为00。 */
      AutoReleaseTime?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 专有宿主机ID（DedicatedHostId）组成的列表。 */
      DedicatedHostIdSets?: Array<string>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AllocateEipAddress
   * > 该接口已升级，不建议继续使用。新版接口的使用说明，请参见[AllocateEipAddress](https://help.aliyun.com/document_detail/120192.html)。
   * @title: 申请弹性公网IP（EIP）
   * @deprecated
   */
  export namespace AllocateEipAddress {
    export type Params = {
      RegionId: string;
      Bandwidth?: string;
      ISP?: string;
      InternetChargeType?: string;
      ActivityId?: number;
      ClientToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      AllocationId?: string;
      EipAddress?: string;
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AllocatePublicIpAddress
   * 调用该接口时，您需要注意：
   * 
   * -  分配公网IP地址之前，实例必须处于**运行中**（`Running`）或者**已停止**（`Stopped`）状态。  
   * 
   * -  被[安全控制](https://help.aliyun.com/document_detail/25695.html)的实例的`OperationLocks`中标记了`"LockReason" : "security"`时，不能分配公网IP地址。 
   * 
   * -  一台实例只能分配一个公网IP地址。如果实例已经拥有一个公网IP地址，将报错`AllocatedAlready`。 
   * 
   * -  重启实例（[RebootInstance](https://help.aliyun.com/document_detail/25502.html)）或者启动实例（[StartInstance](https://help.aliyun.com/document_detail/25500.html)）后，新的公网IP地址生效。  
   * 
   * 除分配公网IP之外，您还可以给VPC类型ECS实例绑定弹性公网IP（EIP）。详情请参见[AssociateEipAddress](https://help.aliyun.com/document_detail/36017.html)。 
   * 
   * >当VPC类型实例绑定了EIP后，则无法再分配公网IP。
   * @summary: 调用AllocatePublicIpAddress为一台ECS实例分配一个固定公网IP地址。
   */
  export namespace AllocatePublicIpAddress {
    export type Params = {
      /** 需要分配IP地址的实例ID。 */
      InstanceId: string;
      /** 实例的公网IP地址。如果该参数值为空，则默认由系统随机分配IP地址。 */
      IpAddress?: string;
      /** 实例的VLAN ID。
      > 该参数即将被弃用，为提高兼容性，请尽量使用其他参数。
       */
      VlanId?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例的公网IP地址。 */
      IpAddress?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ApplyAutoSnapshotPolicy
   * -  一块云盘只能应用一条自动快照策略。
   * -  一条自动快照策略能应用到多块云盘。
   * @summary: 调用ApplyAutoSnapshotPolicy为一块或者多块云盘应用自动快照策略。目标云盘已经应用了自动快照策略时，调用ApplyAutoSnapshotPolicy可以更换云盘当前应用的自动快照策略。
   */
  export namespace ApplyAutoSnapshotPolicy {
    export type Params = {
      /** 自动快照策略和云盘所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      regionId: string;
      /** 目标自动快照策略ID。 */
      autoSnapshotPolicyId: string;
      /** 一块或多块云盘的ID。取值是JSON数组格式，云盘ID之间用半角逗号（,）隔开。 */
      diskIds: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AssignIpv6Addresses
   * ## 接口说明
   * 您可以指定弹性网卡所属交换机下CIDR的IPv6地址，也可以指定IPv6地址数量自动创建IPv6地址。您需要注意：
   * 
   * - 弹性网卡所属的交换机必须开通了IPv6。更多信息，请参见[为已有交换机开通IPv6网段](https://help.aliyun.com/document_detail/98923.html)。
   * 
   * - 弹性网卡必须处于可用（Available）或已附加（InUse）状态。
   * 
   * - 操作主网卡时，网卡附加的实例必须处于运行中（Running）或已停止（Stopped）状态。
   * 
   * - 单个网卡能够分配的IPv6地址数量和网卡附加的实例规格有关。
   *     - 如果弹性网卡处于可用（Available）状态，最多可以分配10个IPv6地址。
   * 
   *     - 如果弹性网卡附加到实例上，能够分配的IPv6地址数将受到实例规格限制。更多信息，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。
   * 
   * - 成功调用该接口后，您可以从返回结果中获取已分配的IPv6地址信息。
   * @summary: 调用AssignIpv6Addresses为弹性网卡分配一个或多个IPv6地址。
   */
  export namespace AssignIpv6Addresses {
    export type Params = {
      /** 弹性网卡所在地域的ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 弹性网卡ID。 */
      NetworkInterfaceId: string;
      /** 为弹性网卡指定随机生成的IPv6地址数量。取值范围：1~10。

      > 调用该接口时，您必须设置`Ipv6Addresses.N`参数或者`Ipv6AddressCount`参数的其中一个，但不能同时设置这两个参数。 */
      Ipv6AddressCount?: number;
      /** 为弹性网卡指定一个或多个IPv6地址。支持设置最多10个IPv6地址，即N的取值范围：1~10。

      取值示例：Ipv6Address.1=2001:db8:1234:1a00::\*\*\*\*

      > 调用该接口时，您必须设置`Ipv6Addresses.N`参数或者`Ipv6AddressCount`参数的其中一个，但不能同时设置这两个参数。 */
      Ipv6Address?: Array<string>;
      /** 为弹性网卡指定一个或多个IPv6前缀。N的取值范围：1~10。
      > 如果您需要为弹性网卡设置IPv6前缀，则必须设置Ipv6Prefix.N或者Ipv6PrefixCount的其中一个，但不能同时设置这两个参数。 */
      Ipv6Prefix?: Array<string>;
      /** 为弹性网卡指定一个或多个IPv6前缀。取值范围：1~10。
      > 如果您需要为弹性网卡设置IPv6前缀，则必须设置Ipv6Prefix.N或者Ipv6PrefixCount的其中一个，但不能同时设置这两个参数。 */
      Ipv6PrefixCount?: number;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 弹性网卡已分配的IPv6前缀集合。 */
      Ipv6PrefixSets?: Array<string>;
      /** 弹性网卡已分配的IPv6地址。 */
      Ipv6Sets?: Array<string>;
      /** 弹性网卡ID。 */
      NetworkInterfaceId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AssignPrivateIpAddresses
   * ## 接口说明
   * 
   * - 只支持可用（Available）或者已附加（InUse）状态下的弹性网卡。
   * - 操作主网卡时，网卡附加的实例必须处于运行中（Running）或者已停止（Stopped）状态。
   * - 网卡处于可用（Available）状态时，最多可以分配50个辅助私网IP地址。一旦挂载到实例上，网卡能分配的辅助私网IP地址数将受到实例规格限制。更多详情，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。
   * - 成功调用该接口后，您可以从返回结果中获取已分配的辅助私网IP地址信息。
   * @summary: 为一块弹性网卡分配一个或多个辅助私网IP地址。可以为网卡指定在所属交换机（vSwitch）的空闲私网IP地址，或者通过指定私网地址数量自动分配私网IP地址。
   */
  export namespace AssignPrivateIpAddresses {
    export type Params = {
      /** 弹性网卡所属的地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 弹性网卡ID。 */
      NetworkInterfaceId: string;
      /** 指定私网IP地址数量，自动从交换机的空闲IP地址中分配IP地址。

      分配辅助私网IP地址时，您不能同时指定`PrivateIpAddress.N`和`SecondaryPrivateIpAddressCount`。 */
      SecondaryPrivateIpAddressCount?: number;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 从弹性网卡所属交换机的空闲IP地址中选择一个或多个辅助私网IP地址。N的取值范围：

      - 弹性网卡处于可用（`Available`）状态：1~32。
      - 弹性网卡处于已附加（`InUse`）状态：受到实例规格限制，更多信息，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。

      分配辅助私网IP地址时，您不能同时指定`PrivateIpAddress.N`和`SecondaryPrivateIpAddressCount`。 */
      PrivateIpAddress?: Array<string>;
      /** 为弹性网卡指定一个或多个IPv4前缀。N的取值范围：1~10。
      > 如果您需要为弹性网卡设置IPv4前缀，则必须设置Ipv4Prefix.N或者Ipv4PrefixCount的其中一个，但不能同时设置这两个参数。 */
      Ipv4Prefix?: Array<string>;
      /** 为弹性网卡指定随机生成的IPv4前缀数量。取值范围：1~10。
      > 如果您需要为弹性网卡设置IPv4前缀，则必须设置Ipv4Prefix.N或者Ipv4PrefixCount的其中一个，但不能同时设置这两个参数。 */
      Ipv4PrefixCount?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 已分配辅助私网IP地址的弹性网卡信息组成的集合。 */
      AssignedPrivateIpAddressesSet?: {
        /** 已分配的IPv4前缀集合。 */
        Ipv4PrefixSet?: Array<string>;
        /** 弹性网卡ID。 */
        NetworkInterfaceId?: string;
        /** 已分配的私网IP地址集合。 */
        PrivateIpSet?: Array<string> };
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AssociateEipAddress
   * undefined
   * @deprecated
   */
  export namespace AssociateEipAddress {
    export type Params = {
      RegionId?: string;
      AllocationId: string;
      InstanceId: string;
      InstanceType?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AssociateHaVip
   * undefined
   * @deprecated
   */
  export namespace AssociateHaVip {
    export type Params = {
      ClientToken?: string;
      RegionId: string;
      HaVipId: string;
      InstanceId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AttachClassicLinkVpc
   * 调用该接口时，您需要注意：
   * 
   * -  连接经典网络类型实例前，实例必须处于**运行中**（Running）或者**已停止**（Stopped）状态。 
   * -  目标VPC必须已开启ClassicLink功能。具体操作，请参见[开启ClassicLink功能](https://help.aliyun.com/document_detail/65413.html)。 
   * -  经典网络类型实例和VPC必须在同一个阿里云地域。
   * @summary: 调用AttachClassicLinkVpc将一台经典网络类型实例连接到专有网络VPC中，使经典网络类型实例可以和VPC中的云资源私网互通。
   */
  export namespace AttachClassicLinkVpc {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 经典网络类型实例ID。您可以调用[DescribeInstances](https://help.aliyun.com/document_detail/25506.html)查看您可用的实例。 */
      InstanceId: string;
      /** 开启ClassicLink的VPC ID。您可以调用[DescribeVpcs](https://help.aliyun.com/document_detail/35739.html)查看您可用的VPC。 */
      VpcId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AttachDisk
   * 调用该接口时，您需要注意：
   * 
   * - 云盘的状态必须为**待挂载**（`Available`）。 
   * - 挂载数据盘时：
   * 
   *     - 目标ECS实例必须处于**运行中**（`Running`）或者**已停止**（`Stopped`）状态。 
   *     - 如果是您单独购买的云盘，计费方式必须是按量付费。
   *     - 从ECS实例上卸载的系统盘作为数据盘挂载时，不限制计费方式。
   * 
   * - 挂载系统盘时：
   * 
   *     - 目标ECS实例必须是卸载系统盘时的源实例。
   *     - 目标ECS实例必须处于**已停止**（`Stopped`）状态。 
   *     - 您必须设置实例登录凭证。
   * 
   * - 查询ECS实例信息时，如果返回数据中包含`{"OperationLocks": {"LockReason" : "security"}}`，则禁止一切操作。
   * 
   * - 开启多重挂载特性的云盘，只能挂载到支持NVMe协议的实例上。更多信息，请参见[ESSD云盘支持NVMe](https://help.aliyun.com/document_detail/256487.html)以及[使用多重挂载功能](https://help.aliyun.com/document_detail/262105.html)。
   * @summary: 调用AttachDisk为一台ECS实例挂载一块按量付费数据盘，或者挂载一块系统盘。实例和云盘必须在同一个可用区。
   */
  export namespace AttachDisk {
    export type Params = {
      /** 目标ECS实例的ID。 */
      InstanceId: string;
      /** 待挂载的云盘ID。云盘（`DiskId`）和实例（`InstanceId`）必须在同一个可用区。

      > 支持挂载数据盘和系统盘，相关约束条件请参见上文接口说明章节。 */
      DiskId: string;
      /** 云盘设备名称。

      > 该参数即将被弃用，为提高兼容性，建议您尽量使用其他参数。 */
      Device?: string;
      /** 释放实例时，该云盘是否随实例一起释放。

      - true：释放。
      - false：不释放。云盘会转换成按量付费数据盘而被保留下来。

      默认值：false

      设置该参数时，您需要注意：

      - 将`DeleteWithInstance`置为`false`后，一旦ECS实例被安全控制，即`OperationLocks`中标记了`"LockReason" : "security"`，释放ECS实例时会忽略云盘的该属性，被同时释放。

      - 开启多重挂载特性的云盘，不支持设置该参数。 */
      DeleteWithInstance?: boolean;
      /** 是否作为系统盘挂载。

      默认值：false

      > 设置为`Bootable=true`时，目标ECS实例必须处于无系统盘状态。 */
      Bootable?: boolean;
      /** 挂载系统盘时，设置实例的用户名密码，仅对administrator和root用户名生效，其他用户名不生效。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：

      ```
      ()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
      ```
      其中，Windows实例不能以斜线号（/）为密码首字符。

      > 如果传入`Password`参数，建议您使用HTTPS协议发送请求，避免密码泄露。 */
      Password?: string;
      /** 挂载系统盘时，为Linux系统ECS实例绑定的SSH密钥对的名称。

      - Windows Server系统：不支持SSH密钥对。即使填写了该参数，只执行`Password`的配置。

      - Linux系统：密码登录方式会被初始化成禁止。 */
      KeyPairName?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AttachInstanceRamRole
   * 调用AttachInstanceRamRole为一台或多台ECS实例授予实例RAM角色。如果实例已有RAM角色，则报错提示您不能附加新的角色。
   * @summary: 调用AttachInstanceRamRole为一台或多台ECS实例授予实例RAM角色。如果实例已有RAM角色，则报错提示您不能附加新的角色。
   */
  export namespace AttachInstanceRamRole {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例RAM角色名称。您可以使用RAM API [ListRoles](https://help.aliyun.com/document_detail/28713.html)查询您已创建的实例RAM角色。 */
      RamRoleName: string;
      /** 实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。 */
      InstanceIds: string;
      /** 权限策略。长度为1~1024个字符。为一台或多台ECS实例授予实例RAM角色时，可以指定一个额外的权限策略，以进一步限制RAM角色的权限。更多信息，请参见[权限策略概览](https://help.aliyun.com/document_detail/93732.html)。
       */
      Policy?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 由实例RAM角色类型（AttachInstanceRamRoleResult）组成的信息集。 */
      AttachInstanceRamRoleResults?: Array<{
        /** 判断是否成功授予实例RAM角色。返回值为200表示成功授予，返回其他值表示授予失败，失败原因参见错误码。 */
        Code?: string;
        /** 实例ID。 */
        InstanceId?: string;
        /** 判断是否成功授予实例RAM角色。返回值为Success表示成功授予，返回其他值表示授予失败，失败原因参见错误码。 */
        Message?: string;
        /** 是否成功授予实例RAM角色。 */
        Success?: boolean }>;
      /** 授予实例RAM角色的失败个数。 */
      FailCount?: number;
      /** 实例RAM角色的名称。 */
      RamRoleName?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 授予的实例RAM角色总个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AttachKeyPair
   * 当您使用该接口时，需要注意：
   * 
   * -  Windows实例不支持SSH密钥对。 
   * -  绑定SSH密钥对后，将禁用用户名加密码的验证方式。 
   * -  如果实例处于**运行中**（Running）状态，重启实例（[RebootInstance](https://help.aliyun.com/document_detail/25502.html)）后，SSH密钥对生效。  
   * -  如果实例处于**已停止**（Stopped）状态，启动实例（[StartInstance](https://help.aliyun.com/document_detail/25500.html)）后，SSH密钥对生效。  
   * -  如果实例已经绑定了SSH密钥对，新的SSH密钥对自动替换原来的SSH密钥对。
   * @summary: 调用AttachKeyPair绑定一个SSH密钥对到一台或多台Linux实例。
   */
  export namespace AttachKeyPair {
    export type Params = {
      /** SSH密钥对所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** SSH密钥对名称。 */
      KeyPairName: string;
      /** 绑定SSH密钥对的实例ID。取值可以由多台实例ID组成一个JSON数组，最多支持50个ID，ID之间用半角逗号（,）隔开。  */
      InstanceIds: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 绑定密钥对失败的实例数量。 */
      FailCount?: string;
      /** 密钥对的名称。 */
      KeyPairName?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 绑定密钥对成功或失败的结果集合。 */
      Results?: Array<{
        /** 传递的操作状态码，其中200表示操作成功。 */
        Code?: string;
        /** 实例ID。 */
        InstanceId?: string;
        /** 传递的操作信息，当code=200时，message为successful。 */
        Message?: string;
        /** 此次操作是否成功。 */
        Success?: string }>;
      /** 绑定密钥对的实例总数量。 */
      TotalCount?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AttachNetworkInterface
   * 调用该接口时，请注意：
   * 
   * - 弹性网卡必须处于**可用**（`Available`）状态，一个弹性网卡只能同时附加到一台相同可用区且相同专有网络的实例上。
   * 
   * - 实例需处于运行中（Running）或者已停止（Stopped）状态，部分实例规格的实例在附加弹性网卡时必须为已停止（Stopped）状态，更多信息，请参见[附加弹性网卡](https://help.aliyun.com/document_detail/58503.html)中的需要停止实例的ECS实例规格章节。
   * 
   *     > 如果实例最后一次启动时间在2018年4月1日之前（包括但不限于启动新购的实例、重启、重开机），您必须提前调用RebootInstance重启一直保持运行中状态的实例，否则无法附加弹性网卡。
   * 
   * - 一台实例可以同时附加多个弹性网卡，更多信息，请参见[弹性网卡概述](https://help.aliyun.com/document_detail/58496.html)。
   *   
   * - 弹性网卡所在的交换机必须与实例所在交换机属于同一可用区且同一专有网络VPC。   
   * 
   * - 该接口为异步接口，调用成功后，您可以通过查询弹性网卡状态或监听网卡操作事件的方式来感知操作结果。 弹性网卡状态机如下图所示：
   * ![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/file-manage-files/zh-CN/20221124/esgu/AttachNetworkInterface.jpg)
   *     - Attaching说明附加弹性网卡请求发送成功，弹性网卡正在附加到ECS实例中。
   *     - InUse说明弹性网卡已附加到ECS实例。
   *     - Available说明弹性网卡附加到ECS实例失败。   
   * 
   * **调用示例详情参见**[附加弹性网卡](https://help.aliyun.com/document_detail/471550.html)。
   * @summary: 调用AttachNetworkInterface附加一个弹性网卡（ENI）到一台专有网络VPC类型ECS实例上。
   */
  export namespace AttachNetworkInterface {
    export type Params = {
      /** 实例所在地域的ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 弹性网卡ID。 */
      NetworkInterfaceId: string;
      /** 实例ID。 */
      InstanceId: string;
      /** 中继网卡ID。
      >该参数暂未上线，不支持使用。 */
      TrunkNetworkInstanceId?: string;
      /** >该参数已废弃。 */
      WaitForNetworkConfigurationReady?: boolean;
      /** 网卡指定的物理网卡索引。

      >NetworkCardIndex 取值与实例规格族有关。如果实例规格不支持NetworkCard则不能指定；如果支持，取值请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。 */
      NetworkCardIndex?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AuthorizeSecurityGroup
   * 安全组的API文档中，流量的发起端为源端（Source），数据传输的接收端为目的端（Dest）。
   * 
   * 调用该接口时，您需要了解：
   * 
   * - 出方向和入方向安全组规则数量不能超过200条。具体限制请参见[安全组使用限制](https://help.aliyun.com/document_detail/25412.html#SecurityGroupQuota1)。  
   * 
   * - 安全组规则优先级（Priority）可选范围为1~100。数字越小，代表优先级越高。
   * 
   * - 优先级相同的安全组规则，以拒绝访问（drop）的规则优先。
   * 
   * - 源端设备可以是指定的IP地址范围（SourceCidrIp、Ipv6SourceCidrIp、SourcePrefixListId），也可以是其他安全组（SourceGroupId）中的ECS实例。
   * 
   * - 企业安全组不支持授权其他安全组访问。
   * 
   * - 普通安全组支持授权的安全组数量最多为20个。
   * 
   * - 如果指定的安全组规则已存在，此次调用成功，但不会增加规则。
   * 
   * - `Permissions.N`前缀的字段和对应不带前缀的字段不能同时指定，建议您使用`Permissions.N`前缀的字段。
   * 
   * - 以下任意一组参数可以确定一条安全组规则，只指定一个参数无法确定一条安全组规则。 
   * 
   *     - 设置指定IP地址段的访问权限。此时，VPC类型安全组的网卡类型（NicType）应设置为内网（intranet）。经典网络类型安全组的网卡类型（NicType）可设置为公网（internet）或内网（intranet）。如以下请求示例：IpProtocol、PortRange、（可选）SourcePortRange、NicType、Policy和SourceCidrIp。
   * 
   *         ```
   *         http(s)://ecs.aliyuncs.com/?Action=AuthorizeSecurityGroup
   *         &SecurityGroupId=sg-bp67acfmxazb4p****
   *         &Permissions.1.SourceCidrIp=10.0.0.0/8
   *         &Permissions.1.IpProtocol=TCP
   *         &Permissions.1.PortRange=22/22
   *         &Permissions.1.NicType=intranet
   *         &Permissions.1.Policy=Accept
   *         &<公共请求参数>
   *         ```
   * 
   *     - 设置其他安全组的访问权限。此时，网卡类型（NicType）只能为内网（intranet）。经典网络类型安全组之间互访时，可以设置同一地域中其他安全组对您的安全组的访问权限。这个安全组可以是您的也可以是其他阿里云账户（SourceGroupOwnerAccount）的。VPC类型安全组之间互访时，可以设置同一VPC内其他安全组访问该安全组的访问权限。如以下请求示例：IpProtocol、PortRange、（可选）SourcePortRange、NicType、Policy、SourceGroupOwnerAccount和SourceGroupId。
   * 
   *         ```
   *         http(s)://ecs.aliyuncs.com/?Action=AuthorizeSecurityGroup
   *         &SecurityGroupId=sg-bp67acfmxazb4p****
   *         &Permissions.1.SourceGroupId=sg-1651FBB**
   *         &Permissions.1.SourceGroupOwnerAccount=test@aliyun.com
   *         &Permissions.1.IpProtocol=TCP
   *         &Permissions.1.PortRange=22/22
   *         &Permissions.1.NicType=intranet
   *         &Permissions.1.Policy=Drop
   *         &<公共请求参数>
   *         ```
   * 
   *     - 在安全组规则中设置前缀列表的访问权限。此时，前缀列表仅支持网络类型为VPC的安全组，网卡类型（NicType）只可设置为内网（intranet）。如以下请求示例：IpProtocol、PortRange、（可选）SourcePortRange、NicType、Policy和SourcePrefixListId。
   * 
   *         ```
   *         http(s)://ecs.aliyuncs.com/?Action=AuthorizeSecurityGroup
   *         &SecurityGroupId=sg-bp67acfmxazb4p****
   *         &Permissions.1.SourcePrefixListId=pl-x1j1k5ykzqlixdcy****
   *         &Permissions.1.SourceGroupOwnerAccount=test@aliyun.com
   *         &Permissions.1.IpProtocol=TCP
   *         &Permissions.1.PortRange=22/22
   *         &Permissions.1.NicType=intranet
   *         &Permissions.1.Policy=Drop
   *         &<公共请求参数>
   *        ```
   * 
   * - 更多关于安全组规则的设置示例，请参见[应用案例](https://help.aliyun.com/document_detail/25475.html)和[安全组五元组规则介绍](https://help.aliyun.com/document_detail/97439.html)。
   * @summary: 调用AuthorizeSecurityGroup增加一条或多条入方向安全组规则。指定安全组入方向的访问权限，允许或者拒绝其他设备发送入方向流量到安全组里的实例。
   */
  export namespace AuthorizeSecurityGroup {
    export type Params = {
      /** 安全组所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 安全组ID。 */
      SecurityGroupId: string;
      /** 安全组规则列表。N的取值范围：1~100。 */
      Permissions?: Array<{
        /** 安全组规则的描述信息。长度为1~512个字符。

        N的取值范围：1~100。 */
        Description?: string;
        /** 目的端IPv4 CIDR地址段。支持CIDR格式和IPv4格式的IP地址范围。

        用于支持五元组规则，请参见[安全组五元组规则](https://help.aliyun.com/document_detail/97439.html)。

        N的取值范围：1~100。 */
        DestCidrIp?: string;
        /** 传输层协议。取值不区分大小写。取值范围：

        - TCP。
        - UDP。
        - ICMP。
        - ICMPv6。
        - GRE。
        - ALL：支持所有协议。

        N的取值范围：1~100。

         */
        IpProtocol?: string;
        /** 目的端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。

        用于支持五元组规则，请参见[安全组五元组规则](https://help.aliyun.com/document_detail/97439.html)。

        N的取值范围：1~100。

        > 仅在支持IPv6的VPC类型ECS实例上有效，且该参数与`DestCidrIp`参数不可同时设置。 */
        Ipv6DestCidrIp?: string;
        /** 需要设置访问权限的源端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。

        N的取值范围：1~100。

        > 仅在支持IPv6的VPC类型ECS实例上有效，且该参数与`SourceCidrIp`参数不可同时设置。 */
        Ipv6SourceCidrIp?: string;
        /** 经典网络类型安全组规则的网卡类型。取值范围：

        - internet：公网网卡。

        - intranet：内网网卡。

        专有网络VPC类型安全组规则无需设置网卡类型，默认为intranet，只能为intranet。

        设置安全组之间互相访问时，即仅指定了DestGroupId参数时，只能为intranet。

        默认值：internet。

        N的取值范围：1~100。 */
        NicType?: string;
        /** 设置访问权限。取值范围：

        - accept：接受访问。

        - drop：拒绝访问，不返回拒绝信息，表现为发起端请求超时或者无法建立连接的类似信息。

        默认值：accept。

        N的取值范围：1~100。 */
        Policy?: string;
        /** 安全组开放的传输层协议相关的目的端口范围。取值范围：

        - TCP/UDP：取值范围为1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
        - ICMP：-1/-1。
        - GRE：-1/-1。
        - IpProtocol取值为ALL：-1/-1。

        了解端口的应用场景，请参见[典型应用的常用端口](https://help.aliyun.com/document_detail/40724.html)。

        N的取值范围：1~100。 */
        PortRange?: string;
        /** 安全组规则优先级，数字越小，代表优先级越高。取值范围：1~100。

        默认值：1。

        N的取值范围：1~100。 */
        Priority?: string;
        /** 需要设置访问权限的源端IPv4 CIDR地址段。支持CIDR格式和IPv4格式的IP地址范围。

        N的取值范围：1~100。 */
        SourceCidrIp?: string;
        /** 需要设置访问权限的源端安全组ID。

        - 至少设置`SourceGroupId`、`SourceCidrIp`、`Ipv6SourceCidrIp`或`SourcePrefixListId`参数中的一项。

        - 如果指定了`SourceGroupId`，没有指定参数`SourceCidrIp`或`Ipv6SourceCidrIp`，则参数`NicType`取值只能为`intranet`。

        - 如果同时指定了`SourceGroupId`和`SourceCidrIp`，则默认以`SourceCidrIp`为准。

        N的取值范围：1~100。

        您需要注意：

        - 企业安全组不支持授权安全组访问。

        - 普通安全组支持授权的安全组数量最多为20个。 */
        SourceGroupId?: string;
        /** 跨账户设置安全组规则时，源端安全组所属的阿里云账户。

        - 如果`SourceGroupOwnerAccount`及`SourceGroupOwnerId`均未设置，则认为是设置您其他安全组的访问权限。

        - 如果已经设置参数`SourceCidrIp`，则参数`SourceGroupOwnerAccount`无效。

        N的取值范围：1~100。 */
        SourceGroupOwnerAccount?: string;
        /** 跨账户设置安全组规则时，源端安全组所属的阿里云账户ID。

        - 如果`SourceGroupOwnerAccount`及`SourceGroupOwnerId`均未设置，则认为是设置您其他安全组的访问权限。

        - 如果已经设置参数`SourceCidrIp`，则参数`SourceGroupOwnerAccount`无效。

        N的取值范围：1~100。 */
        SourceGroupOwnerId?: number;
        /** 安全组开放的传输层协议相关的源端端口范围。取值范围：

        - TCP/UDP协议：取值范围为1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
        - ICMP协议：-1/-1。
        - GRE协议：-1/-1。
        - IpProtocol取值为ALL：-1/-1。

        用于支持五元组规则，请参见[安全组五元组规则](https://help.aliyun.com/document_detail/97439.html)。

        N的取值范围：1~100。 */
        SourcePortRange?: string;
        /** 需要设置访问权限的源端前缀列表ID。您可以调用[DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html)查询可以使用的前缀列表ID。

        N的取值范围：1~100。

        注意事项：

        - 安全组的网络类型为经典网络时，不支持设置前缀列表。关于安全组以及前缀列表使用限制的更多信息，请参见[安全组使用限制](https://help.aliyun.com/document_detail/25412.html#SecurityGroupQuota1)。

        - 当您指定了`SourceCidrIp`、`Ipv6SourceCidrIp`或`SourceGroupId`参数中的一个时，将忽略该参数。 */
        SourcePrefixListId?: string }>;
      /** 已废弃。请使用`Permissions.N.Policy`来设置访问权限。 */
      Policy?: string;
      /** 已废弃。请使用`Permissions.N.Priority`来指定安全组规则优先级。 */
      Priority?: string;
      /** 已废弃。请使用`Permissions.N.IpProtocol`来指定传输层协议。 */
      IpProtocol?: string;
      /** 已废弃。请使用`Permissions.N.SourceCidrIp`来指定源端IPv4 CIDR地址块。 */
      SourceCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.Ipv6SourceCidrIp`来指定源端IPv6 CIDR地址块。 */
      Ipv6SourceCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.SourceGroupId`来指定源端安全组ID。 */
      SourceGroupId?: string;
      /** 已废弃。请使用`Permissions.N.SourcePrefixListId`来指定源端前缀列表ID。 */
      SourcePrefixListId?: string;
      /** 已废弃。请使用`Permissions.N.PortRange`来指定端口范围。 */
      PortRange?: string;
      /** 已废弃。请使用`Permissions.N.DestCidrIp`来指定目的端IPv4 CIDR地址段。 */
      DestCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.Ipv6SourceCidrIp`来指定源端IPv6 CIDR地址块。 */
      Ipv6DestCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.SourcePortRange`来指定源端端口范围。 */
      SourcePortRange?: string;
      /** 已废弃。请使用`Permissions.N.SourceGroupOwnerAccount`来指定源端安全组所属的阿里云账户。 */
      SourceGroupOwnerAccount?: string;
      /** 已废弃。请使用`Permissions.N.SourceGroupOwnerId`来指定源端安全组所属的阿里云账户ID。 */
      SourceGroupOwnerId?: number;
      /** 已废弃。请使用`Permissions.N.NicType`来指定网卡类型。 */
      NicType?: string;
      /** 已废弃。请使用`Permissions.N.Description`来指定安全组规则的描述。 */
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AuthorizeSecurityGroupEgress
   * 安全组的API文档中，流量的发起端为源端（Source），数据传输的接收端为目的端（Dest）。
   * 
   * 调用该接口时，您需要了解：
   * 
   * - 出方向和入方向安全组规则数量不能超过200条。具体限制请参见[安全组使用限制](https://help.aliyun.com/document_detail/25412.html#SecurityGroupQuota1)。  
   * - 安全组规则分为接受访问（accept）和拒绝访问（drop）两类。
   * - 安全组规则优先级（Priority）可选范围为1~100。数字越小，代表优先级越高。  
   * - 优先级相同的安全组规则，优先以拒绝访问（drop）的规则为准。  
   * - 目的端设备可以是指定的IP地址范围（DestCidrIp、Ipv6DestCidrIp、DestPrefixListId），也可以是其他安全组（DestGroupId）中的ECS实例。
   * - 企业安全组不支持授权其他安全组访问。
   * - 普通安全组支持授权的安全组数量最多为20个。
   * - 如果指定的安全组规则已存在，此次调用成功，但不会增加规则。
   * - `Permissions.N`前缀的字段和对应不带前缀的字段不能同时指定，建议您使用`Permissions.N`前缀的字段。
   * - 以下任意一组参数可以确定一条安全组规则，只指定一个参数无法确定一条安全组规则。
   *     - 设置指定IP地址段的访问权限。如以下请求示例：IpProtocol、PortRange、（可选）SourcePortRange、NicType、Policy和DestCidrIp。
   * 
   *         ```
   *         http(s)://ecs.aliyuncs.com/?Action=AuthorizeSecurityGroupEgress
   *         &SecurityGroupId=sg-bp67acfmxazb4ph***
   *         &Permissions.1.IpProtocol=ICMP
   *         &Permissions.1.DestCidrIp=10.0.0.0/8
   *         &Permissions.1.PortRange=-1/-1
   *         &Permissions.1.NicType=intranet
   *         &Permissions.1.Policy=Accept
   *         &<公共请求参数>
   *         ```
   * 
   *     - 设置其他安全组的访问权限。如以下请求示例：IpProtocol、PortRange、（可选）SourcePortRange、NicType、Policy、DestGroupOwnerAccount和DestGroupId。
   * 
   *         ```
   *         http(s)://ecs.aliyuncs.com/?Action=AuthorizeSecurityGroupEgress
   *         &SecurityGroupId=sg-bp67acfmxazb4ph***
   *         &Permissions.1.DestGroupId=sg-bp67acfmxazb4pi***
   *         &Permissions.1.DestGroupOwnerAccount=Test@aliyun.com
   *         &Permissions.1.IpProtocol=TCP
   *         &Permissions.1.PortRange=22/22
   *         &Permissions.1.NicType=intranet
   *         &Permissions.1.Policy=Drop
   *         &<公共请求参数>
   *         ```
   * 
   *     - 在安全组规则中设置前缀列表的访问权限。此时，前缀列表仅支持网络类型为VPC的安全组，网卡类型（NicType）只可设置为内网（intranet）。如以下请求示例：IpProtocol、PortRange、（可选）SourcePortRange、NicType、Policy和DestPrefixListId。
   * 
   *         ```
   *         http(s)://ecs.aliyuncs.com/?Action=AuthorizeSecurityGroupEgress
   *         &SecurityGroupId=sg-bp67acfmxazb4ph***
   *         &Permissions.1.DestPrefixListId=pl-x1j1k5ykzqlixdcy****
   *         &Permissions.1.DestGroupOwnerAccount=Test@aliyun.com
   *         &Permissions.1.IpProtocol=TCP
   *         &Permissions.1.PortRange=22/22
   *         &Permissions.1.NicType=intranet
   *         &Permissions.1.Policy=Drop
   *         &<公共请求参数>
   *         ```
   * @summary: 调用AuthorizeSecurityGroupEgress增加一条或多条安全组出方向规则。指定安全组出方向的访问权限，允许或者拒绝安全组里的实例发送出方向流量到其他设备。
   */
  export namespace AuthorizeSecurityGroupEgress {
    export type Params = {
      /** 源端安全组所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 安全组ID。 */
      SecurityGroupId: string;
      /** 安全组规则列表。N的取值范围：1~100。 */
      Permissions?: Array<{
        /** 安全组规则的描述信息。长度为1~512个字符。

        N的取值范围：1~100。 */
        Description?: string;
        /** 需要设置访问权限的目的端IPv4 CIDR地址块。支持CIDR格式和IPv4格式的IP地址范围。

        N的取值范围：1~100。 */
        DestCidrIp?: string;
        /** 需要设置访问权限的目的端安全组ID。

        - 至少设置`DestGroupId`、`DestCidrIp`、`Ipv6DestCidrIp`或`DestPrefixListId`参数中的一项。

        - 如果指定了`DestGroupId`没有指定参数`DestCidrIp`，则参数`NicType`取值只能为intranet。

        - 如果同时指定了`DestGroupId`和`DestCidrIp`，则默认以`DestCidrIp`为准。

        N的取值范围：1~100。

        您需要注意：
        - 企业安全组不支持授权安全组访问。
        - 普通安全组支持授权的安全组数量最多为20个。 */
        DestGroupId?: string;
        /** 跨账户设置安全组规则时，目的端安全组所属的阿里云账户。 
                 
        - 如果`DestGroupOwnerAccount`及`DestGroupOwnerId`均未设置，则认为是设置您其他安全组的访问权限。
        - 如果已经设置参数`DestCidrIp`，则参数`DestGroupOwnerAccount`无效。

        N的取值范围：1~100。 */
        DestGroupOwnerAccount?: string;
        /** 跨账户设置安全组规则时，目的端安全组所属的阿里云账户ID。 
                 
        - 如果`DestGroupOwnerId`及`DestGroupOwnerAccount`均未设置，则认为是设置您其他安全组的访问权限。
        - 如果您已经设置参数`DestCidrIp`，则参数`DestGroupOwnerId`无效。

        N的取值范围：1~100。 */
        DestGroupOwnerId?: number;
        /** 需要设置访问权限的目的端前缀列表ID。您可以调用[DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html)查询可以使用的前缀列表ID。

        注意事项：

        - 安全组的网络类型为经典网络时，不支持设置前缀列表。关于安全组以及前缀列表使用限制的更多信息，请参见[安全组使用限制](https://help.aliyun.com/document_detail/25412.html#SecurityGroupQuota1)。

        - 当您指定了`DestCidrIp`、`Ipv6DestCidrIp`或`DestGroupId`参数中的一个时，将忽略该参数。

        N的取值范围：1~100。 */
        DestPrefixListId?: string;
        /** 传输层协议。取值不区分大小写。取值范围： 
        - TCP。
        - UDP。
        - ICMP。
        - ICMPv6。
        - GRE。
        - ALL：支持所有协议。

        N的取值范围：1~100。 */
        IpProtocol?: string;
        /** 需要设置访问权限的目的端IPv6 CIDR地址块。支持CIDR格式和IPv6格式的IP地址范围。

        N的取值范围：1~100。

        > 仅在支持IPv6的VPC类型ECS实例上有效，且该参数与`DestCidrIp`参数不可同时设置。
         */
        Ipv6DestCidrIp?: string;
        /** 源端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。 

        用于支持五元组规则，请参见[安全组五元组规则](https://help.aliyun.com/document_detail/97439.html)。

        N的取值范围：1~100。

        >仅在支持IPv6的VPC类型ECS实例上有效，且该参数与`DestCidrIp`参数不可同时设置。 */
        Ipv6SourceCidrIp?: string;
        /** 经典网络类型安全组规则的网卡类型。取值范围： 
                 
        - internet：公网网卡。
        - intranet：内网网卡。
            - 专有网络VPC类型安全组规则无需设置网卡类型，默认为intranet，只能为intranet。
            - 设置安全组之间互相访问时，即仅指定了DestGroupId参数时，只能为intranet。

        默认值：internet。

        N的取值范围：1~100。 */
        NicType?: string;
        /** 设置访问权限。取值范围： 
                 
        - accept：接受访问。
        - drop：拒绝访问，不返回拒绝信息，表现为发起端请求超时或者无法建立连接的类似信息。

        默认值：accept。

        N的取值范围：1~100。 */
        Policy?: string;
        /** 安全组开放的传输层协议相关的目的端口范围。取值范围：
                 
        - TCP/UDP：取值范围为1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
        - ICMP：-1/-1。
        - GRE：-1/-1。
        - ALL：-1/-1。

        N的取值范围：1~100。 */
        PortRange?: string;
        /** 安全组规则优先级。数字越小，代表优先级越高。取值范围：1~100。

        默认值：1。

        N的取值范围：1~100。 */
        Priority?: string;
        /** 源端IPv4 CIDR地址段。支持CIDR格式和IPv4格式的IP地址范围。

        用于支持五元组规则，请参见[安全组五元组规则](https://help.aliyun.com/document_detail/97439.html)。

        N的取值范围：1~100。 */
        SourceCidrIp?: string;
        /** 安全组开放的传输层协议相关的源端端口范围。取值范围：
                 
        - TCP/UDP协议：1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
        - ICMP协议：-1/-1。
        - GRE协议：-1/-1。
        - ALL：-1/-1。

        用于支持五元组规则，请参见[安全组五元组规则](https://help.aliyun.com/document_detail/97439.html)。

        N的取值范围：1~100。 */
        SourcePortRange?: string }>;
      /** 已废弃。请使用`Permissions.N.Policy`来设置访问权限。 */
      Policy?: string;
      /** 已废弃。请使用`Permissions.N.Priority`来指定规则优先级。 */
      Priority?: string;
      /** 已废弃。请使用`Permissions.N.IpProtocol`来指定传输层协议。 */
      IpProtocol?: string;
      /** 已废弃。请使用`Permissions.N.DestCidrIp`来指定目的端IPv4 CIDR地址块。 */
      DestCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.Ipv6DestCidrIp`来指定目的端IPv6 CIDR地址块。 */
      Ipv6DestCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.DestGroupId`来指定目的端安全组ID。 */
      DestGroupId?: string;
      /** 已废弃。请使用`Permissions.N.DestPrefixListId`来指定源端前缀列表ID。 */
      DestPrefixListId?: string;
      /** 已废弃。请使用`Permissions.N.PortRange`来指定端口范围。 */
      PortRange?: string;
      /** 已废弃。请使用`Permissions.N.SourceCidrIp`来指定源端IPv4 CIDR地址段。 */
      SourceCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.Ipv6SourceCidrIp`来指定源端IPv6 CIDR地址段。 */
      Ipv6SourceCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.SourcePortRange`来指定源端端口范围。 */
      SourcePortRange?: string;
      /** 已废弃。请使用`Permissions.N.DestGroupOwnerAccount`来指定目的端安全组所属的阿里云账户。 */
      DestGroupOwnerAccount?: string;
      /** 已废弃。请使用`Permissions.N.DestGroupOwnerId`来指定目的端安全组所属的阿里云账户ID。 */
      DestGroupOwnerId?: number;
      /** 已废弃。请使用`Permissions.N.NicType`来指定网卡类型。 */
      NicType?: string;
      /** 已废弃。请使用`Permissions.N.Description`来指定规则的描述。 */
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CancelAutoSnapshotPolicy
   * 调用CancelAutoSnapshotPolicy取消一块或者多块云盘的自动快照策略。
   * @summary: 调用CancelAutoSnapshotPolicy取消一块或者多块云盘的自动快照策略。
   */
  export namespace CancelAutoSnapshotPolicy {
    export type Params = {
      /** 自动快照策略和云盘所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      regionId: string;
      /** 目标云盘ID。当您需要取消多块云盘的自动快照策略时，多块云盘ID用一个格式类似 "d-xxxxxxxxx", "d-yyyyyyyyy", … "d-zzzzzzzzz" 的JSON数组表示，云盘ID之间用半角逗号（,）隔开。 */
      diskIds: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CancelCopyImage
   * 调用该接口时，您需要注意：
   * 
   * - 取消复制镜像后，目标地域中新建的镜像会被自动删除，源镜像保持不变。
   * - 若复制镜像已完成，则操作失败并返回错误提示。
   * @summary: 调用CancelCopyImage取消正在进行中的复制镜像（CopyImage）任务。
   */
  export namespace CancelCopyImage {
    export type Params = {
      /** 目标镜像所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 正在被复制的镜像ID。 */
      ImageId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CancelImagePipelineExecution
   * 调用该接口前，请确认需要取消的镜像构建任务处于构建中（BUILDING）、分发中（DISTRIBUTING）或资源回收中（RELEASING）的状态。
   * @summary: 调用CancelImagePipelineExecution取消一个镜像构建任务。
   */
  export namespace CancelImagePipelineExecution {
    export type Params = {
      /** 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** >该参数暂未开放使用。 */
      TemplateTag?: Array<{
        /** >该参数暂未开放使用。 */
        Key?: string;
        /** >该参数暂未开放使用。 */
        Value?: string }>;
      /** 构建任务ID。 */
      ExecutionId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CancelPhysicalConnection
   * undefined
   * @deprecated
   */
  export namespace CancelPhysicalConnection {
    export type Params = {
      RegionId: string;
      PhysicalConnectionId: string;
      ClientToken?: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CancelSimulatedSystemEvents
   * 调用CancelSimulatedSystemEvents取消一件或多件处于Scheduled（计划中）或Executing（执行中）状态的模拟系统事件。取消系统事件后，模拟事件变为Canceled（已取消）状态。
   * @summary: 调用CancelSimulatedSystemEvents取消一件或多件处于Scheduled（计划中）或Executing（执行中）状态的模拟系统事件。取消系统事件后，模拟事件变为Canceled（已取消）状态。
   */
  export namespace CancelSimulatedSystemEvents {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 系统事件ID列表。可输入最多100个事件ID。 */
      EventId: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CancelTask
   * 调用CancelTask取消一件正在运行的任务。目前，您能取消正在运行的导入镜像任务（ImportImage）和导出镜像任务（ExportImage）。
   * @summary: 调用CancelTask取消一件正在运行的任务。目前，您能取消正在运行的导入镜像任务（ImportImage）和导出镜像任务（ExportImage）。
   */
  export namespace CancelTask {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 任务ID。您可以调用[DescribeTasks](https://help.aliyun.com/document_detail/25622.html)查看任务ID列表。 */
      TaskId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ConnectRouterInterface
   * undefined
   * @deprecated
   */
  export namespace ConnectRouterInterface {
    export type Params = {
      RegionId: string;
      RouterInterfaceId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ConvertNatPublicIpToEip
   * 公网IP地址转换为EIP后，EIP将单独计费。请确保您已充分了解[EIP的计费方式](https://help.aliyun.com/document_detail/122035.html)。
   * 
   * 调用该接口时，ECS实例必须满足以下条件：
   * 
   * - 状态为**已停止**（`Stopped`）或者**运行中**（`Running`）。
   * - 没有绑定EIP。
   * - 没有未生效的变更配置任务。
   * 
   * - 公网带宽不能为0 Mbit/s。
   * 
   * - 公网带宽采用按使用流量计费。
   * 
   * - 专有网络VPC类型的包年包月ECS实例24小时内不会到期。
   * @summary: 调用ConvertNatPublicIpToEip将一台专有网络VPC类型ECS实例的公网IP地址（PublicIP）转化为弹性公网IP（EIP）。
   */
  export namespace ConvertNatPublicIpToEip {
    export type Params = {
      /** 需要转化公网IP的实例ID。 */
      InstanceId: string;
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CopyImage
   * ## 接口说明
   * 您可以在其他地域使用复制后的镜像创建ECS实例（RunInstances），或者更换实例的系统盘（ReplaceSystemDisk）。 
   * 
   * 调用该接口时，您需要注意：
   * 
   * - 自定义镜像的状态必须为可用（`Available`）。  
   * - 源自定义镜像可以是您账号下的自定义镜像或者其他人共享给您的镜像，不能跨账号复制。 
   * - 复制镜像期间，您无法删除复制后的镜像（[DeleteImage](https://help.aliyun.com/document_detail/25537.html)），但是您可以取消复制任务（[CancelCopyImage](https://help.aliyun.com/document_detail/25539.html)）。  
   * - 同一个地域下同时只能有一个镜像复制任务运行，其余任务需要排队等待上一个任务完成后再依次排队执行。
   * - 您可以通过`ResourceGroupId`参数指定复制后的镜像所属的资源组。如果不设置`ResourceGroupId`参数值，复制后的镜像属于默认资源组。
   * @summary: 调用CopyImage复制一个地域下的自定义镜像到其他地域。复制镜像可以实现跨地域部署ECS实例、跨地域复制ECS实例等目的。
   */
  export namespace CopyImage {
    export type Params = {
      /** 复制后的镜像的名称。长度为2~128个字符。必须以大小写字母或中文开头，也不能以`aliyun`或`acs:`开头，不能包含`http://`或者`https://`。可以包含数字、半角句号（.）、半角冒号（:）、下划线（_）或者短划线（-）。 */
      DestinationImageName?: string;
      /** 复制后的镜像的描述信息。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
      DestinationDescription?: string;
      /** 源自定义镜像的ID。 */
      ImageId: string;
      /** 源自定义镜像的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 复制到目标地域的ID。 */
      DestinationRegionId?: string;
      /** 是否加密复制后的镜像。

      - true：加密。
      - false：不加密。

      默认值：false。 */
      Encrypted?: boolean;
      /** 加密镜像使用的密钥ID。 */
      KMSKeyId?: string;
      /** >该参数暂未开放使用。 */
      EncryptAlgorithm?: string;
      /** 复制后的镜像的资源组ID。如果不设置该参数值，复制后的镜像属于默认资源组。

      > 如果您当前使用的是RAM用户调用该接口，且`ResourceGroupId`取值为空，您需要注意，当RAM用户没有默认资源组权限时，调用接口会返回报错信息`Forbidden: User not authorized to operate on the specified resource`。请您设置RAM用户支持的资源组ID或者通过相应阿里云账号为该RAM用户授予默认资源组权限后，再次调用该接口。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 复制后的镜像的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** 复制后的镜像的标签值。N的取值范围为1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或`https://`。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 复制后的镜像的ID。 */
      ImageId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CopySnapshot
   * ## 接口说明
   * 调用该接口时，您需要注意：
   * 
   * - 复制后的新快照不能回滚源快照对应的云盘。
   * - 不支持复制本地快照。
   * @summary: 调用CopySnapshot将一份普通快照或加密快照从一个地域复制到另一个地域。
   */
  export namespace CopySnapshot {
    export type Params = {
      /** 该参数暂未开放使用。 */
      ResourceGroupId?: string;
      /** 新快照的标签信息。 */
      Tag?: Array<{
        /** 新快照的标签键。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。 */
        Key?: string;
        /** 新快照的标签值。一旦传入该值，允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。 */
        Value?: string }>;
      /** 源快照所在的地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 新快照的目标地域ID。 */
      DestinationRegionId: string;
      /** 源快照ID。 */
      SnapshotId: string;
      /** 新快照的名称。长度为2~128个英文或中文字符，必须以大小字母或中文开头，不能以http://和https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。

      默认值：空。 */
      DestinationSnapshotName: string;
      /** 新快照的描述信息。长度为2~256个英文或中文字符，不能以http://或https://开头。

      默认值：空。 */
      DestinationSnapshotDescription: string;
      /** 新快照的保留时长，单位为天，到期后快照会被自动释放。取值范围：1~65536。

      默认值：空，表示快照不会被自动释放。 */
      RetentionDays?: number;
      /** 是否加密云盘。取值范围：

      - true：是。
      - false：否。

      默认值：false。 */
      Encrypted?: boolean;
      /** 目标地域的KMS用户主密钥。 */
      KMSKeyId?: string;
      /** >该参数正在邀测中，暂不支持使用。
       */
      Arn?: Array<{
        /** >该参数暂未开放使用。 */
        AssumeRoleFor?: number;
        /** >该参数暂未开放使用。 */
        RoleType?: string;
        /** >该参数暂未开放使用。 */
        Rolearn?: string }>;
      /** >该参数暂未开放使用。 */
      DestinationStorageLocationArn?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 新快照的ID。 */
      SnapshotId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateActivation
   * ## 接口说明
   * 
   * 通过激活码将非阿里云服务器注册为阿里云托管实例后，您可以在托管实例中使用阿里云提供的多种在线服务（例如云助手、运维编排和云效等服务）。
   * 
   * 非阿里云服务器的操作系统需要符合以下版本，且服务器可以访问公网，才可以注册为阿里云托管实例。
   * 
   * - Alibaba Cloud Linux 2/3及更高版本
   * - CentOS 6/7/8及更高版本
   * - Debian 8/9/10及更高版本
   * - Ubuntu 12/14/16/18及更高版本
   * - CoreOS
   * - OpenSUSE
   * - RedHat 5/6/7及更高版本
   * - SUSE Linux Enterprise Server 11/12/15及更高版本
   * - Window Server 2012/2016/2019及更高版本
   * 
   * 在一个阿里云地域下，您最多可以拥有5000条托管实例激活码。当激活码数量超过1000条时，需要激活码使用率大于50%才允许继续创建新的激活码。
   * 
   * > 您可以在**ECS云助手**页面的**托管实例**页签下，单击**注册新实例**，获取激活码使用数据。
   * @summary: 调用CreateActivation创建一个激活码。该激活码用于将非阿里云服务器注册为阿里云托管实例。
   */
  export namespace CreateActivation {
    export type Params = {
      /** 地域ID。目前支持的地域：华北1（青岛）、华北2（北京）、华北3（张家口）、华北5（呼和浩特）、华北6（乌兰察布）、华东1（杭州）、华东2（上海）、华南1（深圳）、华南2（河源）、华南3（广州）、西南1（成都）、中国香港、新加坡、日本（东京）、美国（硅谷）、美国（弗吉尼亚）。
      您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看地域对应的ID等信息。 */
      RegionId: string;
      /** 默认的实例名称前缀。支持2~50个字符，且必须以字母开头，不能以特殊字符及数字开头，只可包含特殊字符中的半角句号（.）、下划线（_）、短划线（-）和半角冒号（:），不可以使用`http://`或`https://`开头。

      使用该接口创建的激活码注册的实例，将使用该名称作为前缀，生成有序的实例名。您也可以在注册托管实例时，指定新的实例名称以覆盖此默认值。

      注册托管实例时，如果指定了InstanceName的值，则会生成名称`<InstanceName>-001`，其中编号`001`数字的位数取决于`InstanceCount`数值的位数。如果未指定InstanceName的值，则会使用主机的主机名（Hostname）作为实例的名称。 */
      InstanceName?: string;
      /** 激活码对应的描述。支持1~100个字符。 */
      Description?: string;
      /** 激活码用于注册托管实例的使用次数上限。取值范围为1~1000。

      默认值为10。 */
      InstanceCount?: number;
      /** 激活码的有效使用时间，过期后将不能用于注册新的实例。单位：小时。取值范围为1~876576，即1小时~100年。

      默认值为4小时。 */
      TimeToLiveInHours?: number;
      /** 允许使用该激活码的主机IP。取值为对应的IPv4地址、IPv6地址或CIDR地址段。 */
      IpAddressRange?: string;
      /** 激活码所属的资源组ID。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 托管实例激活码的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个。使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。

        最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** 托管实例激活码的标签值。N的取值范围为1~20。该值可以为空字符串。

        最多支持128个字符，不能包含`http://`或`https://`。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 激活码的代码。该代码仅在调用接口时返回一次，后续无法被查询。因此，请您务必妥善保存返回值。 */
      ActivationCode?: string;
      /** 激活码ID。 */
      ActivationId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateAutoProvisioningGroup
   * ## 接口说明
   * 
   * - 弹性供应是一个使用抢占式实例和按量付费实例快速部署实例集群的方案，支持一键部署跨计费方式、跨可用区、跨实例规格族的实例集群。更多信息，请参见[使用弹性供应组API批量创建ECS实例](https://help.aliyun.com/document_detail/200772.html)。
   * - 弹性供应以供应组为载体调度和维护计算资源，您可以通过弹性供应组稳定提供计算力，缓解抢占式实例的回收机制带来的不稳定因素。
   * - 弹性供应为免费功能，但是您需要为通过弹性供应组创建出的实例资源付费。更多信息，请参见[抢占式实例计费](https://help.aliyun.com/document_detail/52088.html)和[按量付费](https://help.aliyun.com/document_detail/40653.html)。
   * - 当您同时指定启动模板（`LaunchTemplateId`）与启动配置信息（`LaunchConfiguration.*`）时，系统优先使用启动模板。
   * @summary: 调用CreateAutoProvisioningGroup接口创建一个弹性供应组。
   */
  export namespace CreateAutoProvisioningGroup {
    export type Params = {
      /** 弹性供应组所在地域的ID，您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 弹性供应组所在的企业资源组ID。 */
      ResourceGroupId?: string;
      /** 弹性供应组的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      AutoProvisioningGroupName?: string;
      /** 弹性供应组的交付类型。取值范围：

      - request：一次性异步交付。供应组仅在启动时异步交付实例集群，调度失败后不再重试。

      - instant：一次性同步交付。供应组仅在启动时同步创建实例，并在请求响应中返回创建成功的实例列表和创建失败的原因。

      - maintain：持续供应。供应组在启动时尝试交付实例集群，并监控实时容量，未达到目标容量则尝试继续创建ECS实例。

      默认值：maintain。 */
      AutoProvisioningGroupType?: string;
      /** 创建抢占式实例的策略。取值范围：

      - lowest-price：成本优化策略。选择价格最低的实例规格。

      - diversified：均衡可用区分布策略。在扩展启动模板指定的可用区内创建实例，均匀分布到各可用区。

      - capacity-optimized：容量优化分布策略。根据库存情况，选择最优的实例规格和可用区进行创建。

      默认值：lowest-price。 */
      SpotAllocationStrategy?: string;
      /** 竞价实例中断时的行为。取值范围：

      - stop：停止实例。

      - terminate：释放实例。

      默认值：terminate。 */
      SpotInstanceInterruptionBehavior?: string;
      /** 在`SpotAllocationStrategy`为`lowest-price`时生效，表示弹性供应组选择价格最低的实例规格创建实例的数量。

      取值范围：低于`LaunchTemplateConfig.N`中N的取值。 */
      SpotInstancePoolsToUseCount?: number;
      /** 创建按量付费实例的策略。取值范围：

      - lowest-price：成本优化策略。选择价格最低的实例规格。

      - prioritized：优先级策略。按照`LaunchTemplateConfig.N.Priority`设定的优先级创建实例。

      默认值：lowest-price。 */
      PayAsYouGoAllocationStrategy?: string;
      /** 弹性供应组实时容量超过目标容量并触发缩容时，是否释放缩容的实例。取值范围：

      - termination：释放缩容的实例。
      - no-termination：只将缩容的实例移出弹性供应组。

      默认值：no-termination。 */
      ExcessCapacityTerminationPolicy?: string;
      /** 弹性供应组的启动时间，和`ValidUntil`共同确定有效时段。

      按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。

      默认值：该接口立即生效的时间戳。 */
      ValidFrom?: string;
      /** 弹性供应组的到期时间，和`ValidFrom`共同确定有效时段。

      按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。

      默认值：2099-12-31T23:59:59Z。 */
      ValidUntil?: string;
      /** 弹性供应组到期时，是否释放组内实例。取值范围：

      - true：释放组内实例。
      - false：只将组内实例移出弹性供应组。

      默认值：false。 */
      TerminateInstancesWithExpiration?: boolean;
      /** 删除弹性供应组时，是否释放组内实例。取值范围：

      - true：释放组内实例。
      - false：保留组内实例。

      默认值：false。 */
      TerminateInstances?: boolean;
      /** 弹性供应组内抢占式实例的最高价格。

      > 同时设置了`MaxSpotPrice`和`LaunchTemplateConfig.N.MaxPrice`时，以最低值为准。 */
      MaxSpotPrice?: number;
      /** 弹性供应组的目标总容量。取值范围：正整数。

      总容量必须大于等于`PayAsYouGoTargetCapacity`（指定的按量付费实例目标容量）和`SpotTargetCapacity`（指定的抢占式实例目标容量）取值之和。 */
      TotalTargetCapacity: string;
      /** 弹性供应组内，按量付费实例的目标容量。取值范围：小于等于`TotalTargetCapacity`的参数取值。 */
      PayAsYouGoTargetCapacity?: string;
      /** 弹性供应组内，抢占式实例的目标容量。取值范围：小于等于`TotalTargetCapacity`的参数取值。 */
      SpotTargetCapacity?: string;
      /** `PayAsYouGoTargetCapacity`和`SpotTargetCapacity`之和小于`TotalTargetCapacity`时，指定差额容量的计费方式。取值范围：

      - PayAsYouGo：按量付费实例。
      - Spot：抢占式实例。

      默认值：Spot。 */
      DefaultTargetCapacityType?: string;
      /** 弹性供应组关联的实例启动模板的ID，您可以调用[DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html)查询可用的实例启动模板。同时指定启动模板与启动配置信息（`LaunchConfiguration.*`）时，优先使用启动模板。 */
      LaunchTemplateId?: string;
      /** 弹性供应组关联的实例启动模板的版本，您可以调用[DescribeLaunchTemplateVersions](https://help.aliyun.com/document_detail/73761.html)查询可用的实例启动模板版本。

      默认值：启动模板的默认版本。 */
      LaunchTemplateVersion?: string;
      /** 弹性供应组的描述信息。 */
      Description?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 镜像ID。启动实例时选择的镜像资源，您可以调用[DescribeImages](https://help.aliyun.com/document_detail/25534.html)查询可以使用的镜像资源。同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.ImageId'?: string;
      /** 实例所属的安全组ID。同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.SecurityGroupId'?: string;
      /** 是否为I/O优化实例。取值范围：

      - none：非I/O优化。
      - optimized：I/O优化。

      已停售的实例规格实例默认值是none，其他实例规格默认值是optimized。

      同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.IoOptimized'?: string;
      /** 网络计费类型。取值范围：

      - PayByBandwidth：按固定带宽计费。
      - PayByTraffic：按使用流量计费。

      > 按使用流量计费模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用按固定带宽计费模式。

      同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.InternetChargeType'?: string;
      /** 公网入带宽最大值，单位为Mbit/s。取值范围：

      - 当公网出带宽小于等于10 Mbit/s时：1~10，默认为10。
      - 当公网出带宽大于10 Mbit/s时：1~`LaunchConfiguration.InternetMaxBandwidthOut`的取值，默认为`LaunchConfiguration.InternetMaxBandwidthOut`的取值。

      同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.InternetMaxBandwidthIn'?: number;
      /** 公网出带宽最大值，单位为Mbit/s。取值范围：0~100。

      默认值：0。

      同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.InternetMaxBandwidthOut'?: number;
      /** 实例名称。长度为2~128个字符，必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。

      默认值：实例的`InstanceId`。

      创建多台ECS实例时，您可以批量设置有序的实例名称。具体操作，请参见[批量设置有序的实例名称或主机名称](https://help.aliyun.com/document_detail/196048.html)。

      同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.InstanceName'?: string;
      /** 实例主机名称。限制说明如下：

      - 半角句号（.）和短划线（-）不能作为首尾字符，更不能连续使用。
      - Windows实例：字符长度为2~15，不支持半角句号（.），不能全是数字。允许大小写英文字母、数字和短划线（-）。
      - 其他类型实例（Linux等）：字符长度为2~64，支持多个半角句号（.），点之间为一段，每段允许大小写英文字母、数字和短划线（-）。
      - 不支持同时设置`LaunchConfiguration.HostName`与`LaunchConfiguration.HostNames.N`，否则会返回报错信息。
      - 同时指定启动模板与启动配置信息时，优先使用启动模板。

       */
      'LaunchConfiguration.HostName'?: string;
      /** 实例描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.InstanceDescription'?: string;
      /** 密钥对名称。

      -   Windows实例，忽略该参数。默认为空。
      -   Linux实例的密码登录方式会被初始化成禁止。

      同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.KeyPairName'?: string;
      /** 实例RAM角色名称。您可以使用RAM API [ListRoles](https://help.aliyun.com/document_detail/28713.html)查询您已创建的实例RAM角色。同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.RamRoleName'?: string;
      /** 是否开启安全加固。取值范围：

      -   Active：启用安全加固，只对公共镜像生效。
      -   Deactive：不启用安全加固，对所有镜像类型生效。

      同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.SecurityEnhancementStrategy'?: string;
      /** 实例自定义数据。需要以Base64方式编码，原始数据最多为16 KB。同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.UserData'?: string;
      /** 系统盘的云盘种类。取值范围：

      -   cloud_efficiency：高效云盘。
      -   cloud_ssd：SSD云盘。
      -   cloud_essd：ESSD云盘。
      -   cloud：普通云盘。

      已停售的实例规格且非I/O优化实例默认值为cloud，否则默认值为cloud_efficiency。

      同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.SystemDiskCategory'?: string;
      /** 系统盘大小。单位为GiB，取值范围：20~500。该参数的取值必须大于或者等于max{20, LaunchConfiguration.ImageId对应的镜像大小}。

      默认值：max{40, 参数LaunchConfiguration.ImageId对应的镜像大小}。

      同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.SystemDiskSize'?: number;
      /** 系统盘名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角句号（.）、半角冒号（:）、下划线（_）或者短划线（-）。

      默认值：空。

      同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.SystemDiskName'?: string;
      /** 系统盘的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。

      同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.SystemDiskDescription'?: string;
      /** 创建ESSD云盘作为系统盘使用时，设置云盘的性能等级。取值范围：

      - PL0（默认）：单盘最高随机读写IOPS 1万。
      - PL1：单盘最高随机读写IOPS 5万。
      - PL2：单盘最高随机读写IOPS 10万。
      - PL3：单盘最高随机读写IOPS 100万。

      有关如何选择ESSD性能等级，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。

      同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.SystemDiskPerformanceLevel'?: string;
      /** 是否使用镜像预设的密码。取值范围：

      - true：使用。
      - false：不使用。

      同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.PasswordInherit'?: boolean;
      /** 实例所在的企业资源组ID。同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.ResourceGroupId'?: string;
      /** 设置突发性能实例的运行模式。取值范围：

      - Standard：标准模式，实例性能请参见[什么是突发性能实例](https://help.aliyun.com/document_detail/59977.html)下的性能约束模式章节。
      - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](https://help.aliyun.com/document_detail/59977.html)下的无性能约束模式章节。

      默认值：无。

      同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.CreditSpecification'?: string;
      /** 实例的密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：

      ``()`~!@#$%^&*-_+=|{}`[]`:;'<>,.?/``

      其中，Windows实例不能以正斜线（/）为密码首字符。

      同时指定启动模板与启动配置信息时，优先使用启动模板。


       */
      'LaunchConfiguration.Password'?: string;
      /** 部署集ID。 */
      'LaunchConfiguration.DeploymentSetId'?: string;
      /** 扩展启动模板列表。 */
      LaunchTemplateConfig?: Array<{
        /** 实例规格所属的架构类型列表。 */
        Architectures?: Array<string>;
        /** 是否为性能突发实例规格。取值范围：

        - Exclude：不包含性能突发实例规格。
        - Include：包含性能突发实例规格。
        - Required：只包含性能突发实例规格。

        默认值：Include。 */
        BurstablePerformance?: string;
        /** 实例规格的vCPU内核数目列表。 */
        Cores?: Array<number>;
        /** 需要排除的实例规格列表。 */
        ExcludedInstanceTypes?: Array<string>;
        /** 实例规格族级别，用于筛选符合要求的实例规格范围。取值范围：

        - EntryLevel：入门级，即共享型实例规格。成本更低，但是无法保证实例计算性能的稳定。适用于平时CPU使用率低的业务场景。更多信息，请参见[共享型](https://help.aliyun.com/document_detail/108489.html)。
        - EnterpriseLevel：企业级。性能稳定，资源独享，适用于对稳定性要求高的业务场景。更多信息，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。
        - CreditEntryLevel：积分入门级，即突发性能实例。通过CPU积分来保证计算性能，适用于平时CPU使用率低、偶有突发CPU使用率的情况。更多信息，请参见[突发性能实例](https://help.aliyun.com/document_detail/59977.html)。

        N的取值范围：1~10。 */
        InstanceFamilyLevel?: string;
        /** 扩展启动模板对应的实例规格，N的取值范围：1~20。取值范围：请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。 */
        InstanceType?: string;
        /** 扩展启动模板中，抢占式实例的价格上限。

        > 设置了`LaunchTemplateConfig`后，`LaunchTemplateConfig.N.MaxPrice`为必选参数。 */
        MaxPrice?: number;
        /** >该参数正在邀测中，暂不支持使用。 */
        MaxQuantity?: number;
        /** 实例规格的内存大小列表。 */
        Memories?: Array<number>;
        /** 扩展启动模板的优先级，取值为0时优先级最高。取值范围：0 ~ +∞。

         */
        Priority?: number;
        /** 扩展启动模板中，ECS实例加入的虚拟交换机的ID。扩展模板中启动的ECS实例的可用区由虚拟交换机决定。

        > 设置了`LaunchTemplateConfig`后，`LaunchTemplateConfig.N.VSwitchId`为必选参数。 */
        VSwitchId?: string;
        /** 扩展启动模板中，实例规格的权重。取值越高，单台实例满足计算力需求的能力越大，所需的实例数量越小。取值范围：大于0。

        您可以根据指定实例规格的计算力和集群单节点最低计算力得出权重值。假设单节点最低计算力为8 vCPU、60 GiB，则：

        - 8 vCPU、60 GiB的实例规格权重可以设置为1。
        - 16 vCPU、120 GiB的实例规格权重可以设置为2。 */
        WeightedCapacity?: number }>;
      /** 扩展启动模板云盘配置列表。 */
      'LaunchConfiguration.DataDisk'?: Array<{
        /** 数据盘N的云盘类型。N的取值范围为1~16。取值范围：

        - cloud_efficiency：高效云盘。
        - cloud_ssd：SSD云盘。
        - cloud_essd：ESSD云盘。
        - cloud：普通云盘。

        对于I/O优化实例，默认值为cloud_efficiency。对于非I/O优化实例，默认值为cloud。

        同时指定启动模板与启动配置信息时，优先使用启动模板。 */
        Category?: string;
        /** 数据盘是否随实例释放。取值范围：
        - true：数据盘随实例释放。
        - false：数据盘不随实例释放。

        默认值：true。

        同时指定启动模板与启动配置信息时，优先使用启动模板。 */
        DeleteWithInstance?: boolean;
        /** 数据盘的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。同时指定启动模板与启动配置信息时，优先使用启动模板。 */
        Description?: string;
        /** 数据盘的挂载点。同时指定启动模板与启动配置信息时，优先使用启动模板。 */
        Device?: string;
        /** 数据盘名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角句号（.）、半角冒号（:）、下划线（_）或者短划线（-）。

        默认值：空。

        同时指定启动模板与启动配置信息时，优先使用启动模板。 */
        DiskName?: string;
        /** 数据盘N是否加密。取值范围：

        - true：加密。
        - false：不加密。

        默认值：false。

        同时指定启动模板与启动配置信息时，优先使用启动模板。 */
        Encrypted?: boolean;
        /** 数据盘对应的KMS密钥ID。同时指定启动模板与启动配置信息时，优先使用启动模板。 */
        KmsKeyId?: string;
        /** 创建ESSD云盘作为数据盘使用时，设置云盘的性能等级。N的取值必须和`LaunchConfiguration.DataDisk.N.Category`中的N保持一致。取值范围：

        - PL0：单盘最高随机读写IOPS 1万。
        - PL1（默认）：单盘最高随机读写IOPS 5万。
        - PL2：单盘最高随机读写IOPS 10万。
        - PL3：单盘最高随机读写IOPS 100万。

        有关如何选择ESSD性能等级，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。

        同时指定启动模板与启动配置信息时，优先使用启动模板。 */
        PerformanceLevel?: string;
        /** 第N个数据盘的容量大小，N的取值范围为1~16，单位为GiB。取值范围：

        - cloud_efficiency：20~32768。
        - cloud_ssd：20~32768。
        - cloud_essd：具体取值范围与`LaunchConfiguration.DataDisk.N.PerformanceLevel`的取值有关。
            - PL0：40~32768。
            - PL1：20~32768。
            - PL2：461~32768。
            - PL3：1261~32768
        - cloud：5~2000。

        > 该参数的取值必须大于等于参数`LaunchConfiguration.DataDisk.N.SnapshotId`指定的快照的大小。

        同时指定启动模板与启动配置信息时，优先使用启动模板。 */
        Size?: number;
        /** 创建数据盘N使用的快照。N的取值范围为1~16。

        指定该参数后，参数`LaunchConfiguration.DataDisk.N.Size`会被忽略，实际创建的云盘大小为指定的快照的大小。不能使用早于2013年7月15日（含）创建的快照，请求会报错被拒绝。

        同时指定启动模板与启动配置信息时，优先使用启动模板。 */
        SnapshotId?: string }>;
      /** 扩展启动模板标签列表。 */
      'LaunchConfiguration.Tag'?: Array<{
        /** 实例的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含`http://`或`https://`。同时指定启动模板与启动配置信息时，优先使用启动模板。 */
        Key?: string;
        /** 实例的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以acs:开头，不能包含`http://`或者`https://`。同时指定启动模板与启动配置信息时，优先使用启动模板。 */
        Value?: string }>;
      /** 实例系统盘信息列表。 */
      SystemDiskConfig?: Array<{
        /** 实例系统盘类型。您可通过该参数指定多种候选磁盘类型，指定顺序作为各磁盘类型的优先级顺序，当某一种磁盘不可用时，自动更换磁盘类型。取值范围：

        -   cloud_efficiency：高效云盘。
        -   cloud_ssd：SSD云盘。
        -   cloud_essd：ESSD云盘。
        -   cloud：普通云盘。 */
        DiskCategory?: string }>;
      /** 实例数据盘信息列表。 */
      DataDiskConfig?: Array<{
        /** 实例数据盘类型。您可通过该参数指定多种候选磁盘类型，指定顺序作为各磁盘类型的优先级顺序，当某一种磁盘不可用时，自动更换磁盘类型。取值范围：

        -   cloud_efficiency：高效云盘。
        -   cloud_ssd：SSD云盘。
        -   cloud_essd：ESSD云盘。
        -   cloud：普通云盘。 */
        DiskCategory?: string }>;
      /** 为一台或多台实例指定不同的主机名称。限制说明如下：

      - 仅创建一次性同步交付类型的弹性供应组（`AutoProvisioningGroupType=instant`）时，该参数生效。
      - N表示实例个数，取值范围为1~1000，且需要和TotalTargetCapacity参数值保持一致。
      - 半角句号（.）和短划线（-）不能作为首尾字符，更不能连续使用。
      - Windows实例：字符长度为2~15，不支持半角句号（.），不能全是数字。允许包含大小写英文字母、数字和短划线（-）。
      - 其他类型实例（Linux等）：字符长度为2~64，支持多个半角句号（.），半角句号（.）之间为一段，每段允许包含大小写英文字母、数字和短划线（-）。
      - 不支持同时设置`LaunchConfiguration.HostName`与`LaunchConfiguration.HostNames.N`，否则会返回报错信息。
      - 同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.HostNames'?: Array<string>;
      /** 弹性供应组的目标最小容量。取值范围：正整数。

      当您设置该参数后，需要注意：
      - 仅创建一次性同步交付类型的弹性供应组（`AutoProvisioningGroupType=instant`）时，该参数生效。
      - 如果当前地域下的实例库存小于该参数值，则会导致调用接口失败，不会创建实例。
      - 如果当前地域下的实例库存大于该参数值，则按照已设置的其他参数值正常创建实例。 */
      MinTargetCapacity?: string;
      /** 实例所属的安全组列表。 */
      'LaunchConfiguration.SecurityGroupIds'?: Array<string>;
      /** 实例的系统盘信息。同时指定启动模板与启动配置信息时，优先使用启动模板。 */
      'LaunchConfiguration.SystemDisk'?: {
        /** 系统盘加密算法。取值范围：

        - aes-256。

        - sm4-128。

        默认值：aes-256。

        同时指定启动模板与启动配置信息时，优先使用启动模板。 */
        EncryptAlgorithm?: string;
        /** 系统盘N是否加密。取值范围：

        - true：加密。

        - false：不加密。

        默认值：false。

        同时指定启动模板与启动配置信息时，优先使用启动模板。 */
        Encrypted?: string;
        /** 系统盘对应的KMS密钥ID。

        同时指定启动模板与启动配置信息时，优先使用启动模板。
         */
        KMSKeyId?: string };
      /** 该参数暂未开放使用。 */
      'LaunchConfiguration.Arn'?: Array<{
        /** 该参数暂未开放使用。 */
        AssumeRoleFor?: number;
        /** 该参数暂未开放使用。 */
        RoleType?: string;
        /** 该参数暂未开放使用。 */
        Rolearn?: string }>;
      /** >该参数正在邀测中，暂未开放使用。 */
      HibernationOptionsConfigured?: boolean;
      /** 按量付费实例的自动释放时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，使用UTC+0时间。格式为：`yyyy-MM-ddTHH:mm:ssZ`。

      - 如果秒（`ss`）取值不是`00`，则自动取为当前分钟（`mm`）开始时。

      - 最短释放时间为当前时间半小时之后。

      - 最长释放时间不能超过当前时间三年。 */
      'LaunchConfiguration.AutoReleaseTime'?: string;
      'LaunchConfiguration.ImageFamily'?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 弹性供应组的ID。 */
      AutoProvisioningGroupId?: string;
      /** 弹性供应组创建的实例组成的集合。该集合值仅当弹性供应组的交付类型为一次性同步交付（`instant`）时返回。 */
      LaunchResults?: Array<{
        /** 成功创建的实例ID列表内的实例数量。 */
        Amount?: number;
        /** 当实例创建失败时，返回的错误码。 */
        ErrorCode?: string;
        /** 当实例创建失败时，返回的错误信息。 */
        ErrorMsg?: string;
        /** 成功创建的实例ID列表。 */
        InstanceIds?: Array<string>;
        /** 实例规格。 */
        InstanceType?: string;
        /** 按量实例的抢占策略。可能值：
        - NoSpot：正常按量付费实例。
        - SpotWithPriceLimit：设置上限价格的抢占式实例。
        - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。 */
        SpotStrategy?: string;
        /** 实例所在的可用区ID。 */
        ZoneId?: string }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateAutoSnapshotPolicy
   * 调用该接口创建自动快照策略时，您可以设置自动快照的重复周期、保留时间以及跨地域备份等策略。满足您多样化的数据备份要求。创建自动快照策略后，需要调用[ApplyAutoSnapshotPolicy](https://help.aliyun.com/document_detail/25531.html)将策略应用到目标云盘。如果您需要调整自动快照策略的内容，请调用[ModifyAutoSnapshotPolicyEx](https://help.aliyun.com/document_detail/25529.html)。
   * 
   * 调用该接口时，您需要注意：
   * 
   * -  一个阿里云账户在一个地域最多能创建100条自动快照策略。 
   * 
   * -  如果云盘数据较多，单次创建自动快照的时长超过两个时间点之间的间隔，则自动跳过下一时间点。示例：您设置了09:00、10:00、11:00和12:00为自动快照时间点。由于云盘数据较多，09:00开始创建快照，10:20完成创建快照，实际耗时80分钟。系统会跳过时间点10:00，等到11:00继续为您创建自动快照。
   * 
   * - 跨地域复制快照的注意事项请参见[复制快照](https://help.aliyun.com/document_detail/159441.html)的背景信息章节。
   * @summary: 调用CreateAutoSnapshotPolicy在指定地域下创建一条自动快照策略。自动快照策略可以周期性地为云盘创建快照备份数据，同时适用于系统盘和数据盘。
   */
  export namespace CreateAutoSnapshotPolicy {
    export type Params = {
      /** 自动快照策略所属的地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      regionId: string;
      /** 自动快照策略的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://或https://开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。

      默认值：空 */
      autoSnapshotPolicyName?: string;
      /** 自动快照的创建时间点。使用UTC +8时间，单位为小时。取值范围：0~23，代表00:00至23:00共24个时间点，例如1表示01:00。格式说明：

      - 传入的参数需要保持JSON数组格式。例如，\["1"\]表示01:00创建自动快照。
      - 当一天内需要创建多次自动快照时，可以传入多个时间点，时间点之间用半角逗号（,）隔开，最多传入24个时间点。例如，\["1","3","5"\]表示01:00、03:00、05:00时创建自动快照。 */
      timePoints: string;
      /** 自动快照的重复日期，单位为天，周期为星期。取值范围：1~7，例如1表示周一。格式说明：

      - 传入的参数需要保持JSON数组格式。例如，\["1"\]表示每周一重复创建自动快照。
      - 当一星期内需要创建多次自动快照时，可以传入多个时间点，时间点之间用半角逗号（,）隔开，最多传入7个时间点。例如，\["1","3","5"\]表示每周一、周三、周五重复创建自动快照。 */
      repeatWeekdays: string;
      /** 自动快照的保留时间，单位为天。取值范围：

      - -1：永久保存
      - 1~65535：指定保存天数

      默认值：-1 */
      retentionDays: number;
      /** 是否允许自动跨地域复制。
      - true：允许
      - false：不允许 */
      EnableCrossRegionCopy?: boolean;
      /** 跨地域复制快照的目标地域。目前支持设置一个目标地域。 */
      TargetCopyRegions?: string;
      /** > 该参数暂未开放使用。 */
      StorageLocationArn?: string;
      /** 跨地域复制快照的保留时间，单位为天。取值范围：

      - -1：永久保存
      - 1~65535：指定保存天数

      默认值：-1 */
      CopiedSnapshotsRetentionDays?: number;
      /** 标签列表 */
      Tag?: Array<{
        /** 快照的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。 */
        Key?: string;
        /** 快照的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或https://。 */
        Value?: string }>;
      /** 资源组ID。 */
      ResourceGroupId?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 自动快照策略ID。 */
      AutoSnapshotPolicyId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateCapacityReservation
   * ## 接口说明
   * 您可以通过容量预定服务，指定可用区、实例规格等属性，系统会以私有池的方式预留属性相匹配的资源。更多信息，请参见[立即生效容量预定概述](https://help.aliyun.com/document_detail/193633.html)。
   * 
   * - 目前服务仅支持立即生效模式。购买立即生效容量预定服务后，实例规格即开始遵循按量付费标准计费，不论是否实际创建了按量付费实例，直至您自行手动释放或到期系统自动释放立即生效容量预订。
   *     - 您可以通过[CreateInstance](https://help.aliyun.com/document_detail/25499.html)或[RunInstances](https://help.aliyun.com/document_detail/63440.html)创建实例时设置私有池容量选项，或者通过[ModifyInstanceAttachmentAttributes](https://help.aliyun.com/document_detail/190006.html)修改实例的私有池容量选项。实例成功匹配私有池容量后，将根据您的实例配置收取实例规格、云盘、公网带宽等相关资源费用。
   *     - 未实际创建按量付费实例时，仅收取实例规格的费用。
   * - 立即生效容量预定的匹配的实例和未使用的容量账单支持通过节省计划、地域级预留实例券抵扣小时账单，不支持通过可用区级预留实例券抵扣小时账单。推荐您先购买预留实例券或节省计划，在预留实例券或节省计划的覆盖下使用立即生效容量预定服务，可以免费获取资源的确定性保障。
   * 
   * > 调用API方式仅支持创建立即生效容量预定。通过ECS控制台可以创建立即生效容量预定或指定时间生效容量预定，更多信息，请参见[资源预定服务](https://help.aliyun.com/document_detail/193626.html#section-oil-qh5-xvx)。
   * @summary: 调用CreateCapacityReservation创建容量预定服务。
   */
  export namespace CreateCapacityReservation {
    export type Params = {
      /** 容量预定服务所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 容量预定服务所在的企业资源组ID。 */
      ResourceGroupId?: string;
      /** 标签列表 */
      Tag?: Array<{
        /** 容量预定服务的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。 */
        Key?: string;
        /** 容量预定服务的标签值。N的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。 */
        Value?: string }>;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 容量预定服务的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      'PrivatePoolOptions.Name'?: string;
      /** 容量预定服务的描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。

      默认值：空 */
      Description?: string;
      /** 容量预定服务生效后生成的私有资源池的类型。取值范围：

      - Open：开放模式。
      - Target：专用模式。

      默认值：Open */
      'PrivatePoolOptions.MatchCriteria'?: string;
      /** 在一个实例规格内，需要预留的实例的总数量。 */
      InstanceAmount: number;
      /** 实例规格。目前仅支持为一个实例规格设置容量预定服务。您可以调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)查询云服务器ECS提供的实例规格信息。 */
      InstanceType: string;
      /** 容量预定服务的生效方式。目前调用API的方式仅支持设置为立即生效。

      > 该参数不传值即表示设置为立即生效。 */
      StartTime?: string;
      /** 容量预定服务的失效时间。时间格式以ISO8601为标准，并需要使用UTC +0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。更多信息，请参见[ISO 8601](https://help.aliyun.com/document_detail/25696.html)。 */
      EndTime?: string;
      /** 容量预定服务的失效方式。取值范围：

      - Limited：指定时间释放。必须同时指定`EndTime`参数。
      - Unlimited：手动释放。不限制时间。 */
      EndTimeType?: string;
      /** 实例使用的镜像的操作系统类型。该参数与地域级预留实例券的`Platform`参数对应。如果容量预定服务和地域级预留实例券的操作系统类型相匹配，则可以使用地域级预留实例券来抵扣容量预定服务中的未使用容量的账单。取值范围：

      - Windows：Windows Server类型的操作系统。
      - Linux：Linux及类Unix类型的操作系统。

      默认值：Linux

      > 该参数暂未开放使用。 */
      Platform?: string;
      /** 容量预定服务所属地域下的可用区ID。目前仅支持在一个可用区下创建容量预定服务。 */
      ZoneId: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 容量预定服务ID。 */
      PrivatePoolOptionsId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateCommand
   * ## 接口说明
   * 
   * - 您可以创建以下类型的命令： 
   *     - Windows实例适用的Bat脚本（RunBatScript）。
   *     - Windows实例适用的PowerShell脚本（RunPowerShellScript）。
   *     - Linux实例适用的Shell脚本（RunShellScript）。
   * - 您可以通过指定参数Timeout为命令设置在ECS实例中执行时最大的超时时间，命令执行超时后，[云助手Agent](https://help.aliyun.com/document_detail/64921.html)会强制终止命令进程，即取消命令的PID。
   *     - 对于单次执行，超时后，该命令针对指定的ECS实例的执行状态（[InvokeRecordStatus](https://help.aliyun.com/document_detail/64845.html)）变为执行失败（Failed）。  
   *     - 对于定时执行： 
   *         - 定时执行的超时时间对每一次执行记录均有效。 
   *         - 某次执行超时后，该次执行记录的状态（[InvokeRecordStatus](https://help.aliyun.com/document_detail/64845.html)）变为执行失败（Failed）。  
   *         - 上次执行超时与否不影响下一次执行。 
   * - 在一个地域下，您最多可以保有500～10000条云助手命令，您可以通过查看[资源配额](https://help.aliyun.com/document_detail/184115.html)或调用[DescribeAccountAttribute](https://help.aliyun.com/document_detail/73772.html)查询配额情况。
   * - 您可以通过指定参数WorkingDir为命令指定执行路径。对于Linux实例，默认在管理员root用户的home目录下，具体为`/root`目录。对于Windows实例，默认在云助手Agent进程所在目录，例如：`C:\Windows\System32`。
   * - 您可以通过指定参数EnableParameter=true启用自定义参数功能。在设置CommandContent时可以通过{{parameter}}的形式表示自定义参数，并在运行命令（[InvokeCommand](https://help.aliyun.com/document_detail/64841.html)）时，传入自定义参数键值对。例如，您在创建命令时，创建了`echo {{name}}`命令，在 InvokeCommand时，通过Parameters参数传入键值对`<name, Jack>`。则自定义参数将自动替换命令，您会得到一条新的命令，并在实例中执行`echo Jack`。
   * @summary: 调用CreateCommand新建一条云助手命令。
   */
  export namespace CreateCommand {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 命令名称，支持全字符集。长度不得超过128个字符。 */
      Name: string;
      /** 命令描述，支持全字符集。长度不得超过512个字符。 */
      Description?: string;
      /** 命令的类型。取值范围： 

      - RunBatScript：创建一个在Windows实例中运行的Bat脚本。
      - RunPowerShellScript：创建一个在Windows实例中运行的PowerShell脚本。
      - RunShellScript：创建一个在Linux实例中运行的Shell脚本。
                */
      Type: string;
      /** 命令Base64编码后的内容。

      - 该参数的值必须使用Base64编码后传输，且脚本内容的大小在Base64编码之后不能超过18 KB。
      - 命令内容支持使用自定义参数形式，具体通过指定参数`EnableParameter=true`启用自定义参数功能：
          - 自定义参数用`{{}}`包含的方式定义，在`{{}}`内参数名前后的空格以及换行符会被忽略。
          - 自定义参数个数不能超过20个。
          - 自定义参数名允许a-zA-Z0-9-_的组合，不支持acs::前缀指定非内置环境参数，不支持其余字符，参数名不区分大小写。
          - 单个参数名不能超过64字节。

      - 您可以指定内置环境参数作为自定义参数，执行命令时无需手动对参数赋值，云助手将为您自动替换为环境中对应的值。支持指定以下内置环境参数：
          - `{{ACS::RegionId}}`：地域ID。
          - `{{ACS::AccountId}}`：阿里云主账号UID。
          - `{{ACS::InstanceId}}`：实例ID。命令下发到多个实例时，如需指定`{{ACS::InstanceId}}`作为内置环境参数，需确保云助手Agent不低于以下版本：
              - Linux：2.2.3.309
              - Windows：2.1.3.309
          - `{{ACS::InstanceName}}`：实例名称。命令下发到多个实例时，如需指定`{{ACS::InstanceName}}`作为内置环境参数，需确保云助手Agent不低于以下版本：
              - Linux：2.2.3.344
              - Windows：2.1.3.344

          - `{{ACS::InvokeId}}`：命令执行ID。如需指定`{{ACS::InvokeId}}`作为内置环境参数，需确保云助手Agent不低于以下版本：
              - Linux：2.2.3.309
              - Windows：2.1.3.309
           
          - `{{ACS::CommandId}}` ：命令ID。通过调用[RunCommand](https://help.aliyun.com/document_detail/141751.html)接口执行命令时，如需指定`{{ACS::CommandId}}`作为内置环境参数，需确保云助手Agent不低于以下版本：
              - Linux：2.2.3.309
              - Windows：2.1.3.309
       */
      CommandContent: string;
      /** 您创建的命令在ECS实例中运行的目录。长度不得超过200个字符。

      默认值： 
      - Linux实例：管理员root用户的home目录下，具体为`/root`目录。  
      - Windows实例：云助手Agent进程所在目录，例如`C:\Windows\System32`。

      >设置为其他目录时，请确保实例中存在该目录。 */
      WorkingDir?: string;
      /** 您创建的命令在ECS实例中执行时最大的超时时间，单位为秒。当因为某种原因无法运行您创建的命令时，会出现超时现象。超时后，会强制终止命令进程，即取消命令的PID。

      默认值：60。 */
      Timeout?: number;
      /** 创建的命令是否使用自定义参数。

      默认值：false。 */
      EnableParameter?: boolean;
      /** 命令内容（CommandContent）的编码方式。取值范围：

      - PlainText：不编码，采用明文传输。

      - Base64：Base64编码。

      默认值：Base64。

      >错填该取值会当作Base64处理。 */
      ContentEncoding?: string;
      /** 命令所属的资源组ID。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 命令的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个。使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。

        最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。

         */
        Key?: string;
        /** 命令的标签值。N的取值范围为1~20。该值可以为空字符串。

        最多支持128个字符，不能包含`http://`或`https://`。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 命令ID。 */
      CommandId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateDedicatedHostCluster
   * 调用CreateDedicatedHostCluster创建一个专有宿主机集群。
   * @summary: 调用CreateDedicatedHostCluster创建一个专有宿主机集群。
   */
  export namespace CreateDedicatedHostCluster {
    export type Params = {
      /** 专有宿主机集群所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 是否只预检此次请求。取值范围：

      - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
      - false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。

      默认值：false。 */
      DryRun?: boolean;
      /** 标签列表。 */
      Tag?: Array<{
        /** 专有宿主机集群的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** 专有宿主机集群的标签值。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Value?: string }>;
      /** 专有宿主机集群要加入的资源组ID。 */
      ResourceGroupId?: string;
      /** 专有宿主机集群所在的可用区ID。您可以调用[DescribeZones](https://help.aliyun.com/document_detail/25610.html)查看阿里云地域下的可用区。 */
      ZoneId: string;
      /** 专有宿主机集群的名称。长度为2~128个英文或中文字符，必须以大小字母或中文开头，可包含数字、半角句号（.）、下划线（_）或短划线（-）。不能包含`http://`或`https://`。

      默认值：空。 */
      DedicatedHostClusterName?: string;
      /** 专有宿主机集群的描述。长度为2~256个字符。不能以`http://`或`https://`开头。

      默认值：空。 */
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 专有宿主机集群ID。 */
      DedicatedHostClusterId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateDemand
   * 您可通过该接口提交实例规格需求信息，阿里云根据您的需求表单供应相关资源。
   * 
   * 仅支持报备I/O优化实例规格，以及专有网络VPC类型的ECS实例。
   * 
   * > 该接口正在内测使用，尚未正式上线，暂时不建议使用，请您耐心等待。
   * @summary: 调用CreateDemand创建ECS资源需求报备信息。
   */
  export namespace CreateDemand {
    export type Params = {
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 报备实例所属的可用区ID。更多详情，请参见[DescribeZones](https://help.aliyun.com/document_detail/25610.html)获取可用区列表。

      默认值：空，表示随机选择。

       */
      ZoneId: string;
      /** 报备名称。长度为2~128个字符，必须以大小字母或中文开头，不能以http://和https:// 开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、点号（.）或者连字符（-）。

      默认值：实例规格名称。 */
      DemandName?: string;
      /** 报备的描述。长度为2~256个英文或中文字符，不能以http://和https://开头。 */
      DemandDescription?: string;
      /** 报备实例的资源规格。参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)或调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)查看目标实例规格的性能数据，或者参见[选型配置](https://help.aliyun.com/document_detail/58291.html)了解如何选择实例规格。 */
      InstanceType: string;
      /** 报备需求规格数量。取值范围：1～100000 */
      Amount: number;
      /** 报备实例的付费方式。取值范围：

      * PrePaid：包年包月
      * PostPaid（默认）：按量付费 */
      InstanceChargeType?: string;
      /** 购买资源的时长，为必选值。取值范围：

      * PeriodUnit为Day时，Period取值：{"1", "2", "3", "4", "5", "6"}

      * PeriodUnit为Week时，Period取值：{"1", "2", "3", "4"}

      * PeriodUnit为Month时，Period取值：{ "1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"} */
      Period: number;
      /** 购买资源的时长。取值范围：

      * Day
      * Week
      * Month（默认） */
      PeriodUnit: string;
      /** 最早开始购买时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，使用UTC +0时间。格式为：yyyy-MM-dd HH:mm:ss 。

      如果秒（ss）取值不是00，则自动取为当前分钟（mm）开始时。
      最晚结束购买时间晚于最早购买时间。
      早晚时间跨度一般不允许超过10天。 */
      StartTime: string;
      /** 最晚结束购买时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，使用UTC +0时间。格式为：yyyy-MM-dd HH:mm:ss

      如果秒（ss）取值不是00，则自动取为当前分钟（mm）开始时。
      最晚结束购买时间晚于最早购买时间。
      早晚时间长度一般不允许超过10天。
       */
      EndTime: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 报备ID（DemandId）。 */
      DemandId?: string;
      /** 请求ID。
       */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateDeploymentSet
   * 调用CreateDeploymentSet在指定的地域内创建一个部署集。
   * @summary: 调用CreateDeploymentSet在指定的地域内创建一个部署集。
   */
  export namespace CreateDeploymentSet {
    export type Params = {
      /** 部署集所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 部署集内实例宕机迁移后，缺乏可供打散的实例库存的紧急处理方案。取值范围： 
               
      - CancelMembershipAndStart：将实例移出部署集，宕机迁移后即刻启动实例。
      - KeepStopped：维持实例的部署集属性，实例保持停止状态。

      默认值：CancelMembershipAndStart。 */
      OnUnableToRedeployFailedInstance?: string;
      /** 部署集描述信息。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
      Description?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 部署集名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      DeploymentSetName?: string;
      /** 部署域。当前仅支持Default。

      Default：在当前可用区内，部署集内的实例会在同可用区内分布。 */
      Domain?: string;
      /** 部署粒度。当前仅支持host。

      host：部署集内实例会按照宿主机维度进行打散。 */
      Granularity?: string;
      /** 部署策略。取值范围：

      - Availability：高可用策略。
      - AvailabilityGroup：部署集组高可用策略。

      默认值：Availability。 */
      Strategy?: string;
      /** 为部署集组高可用策略设置分组数量。取值范围：1~7。

      默认值：3。

      > 该参数仅当`Strategy=AvailabilityGroup`时生效。 */
      GroupCount?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 部署集ID。 */
      DeploymentSetId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateDiagnosticMetricSet
   * 调用CreateDiagnosticMetricSet创建资源诊断指标集合。您可以根据需要，灵活组合诊断指标。
   * @summary: 调用CreateDiagnosticMetricSet创建资源诊断指标集合。您可以根据需要，灵活组合诊断指标。
   */
  export namespace CreateDiagnosticMetricSet {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 诊断资源类型。

      默认值：instance。 */
      ResourceType: 'instance' | 'account';
      /** 诊断指标集合的名称。 */
      MetricSetName?: string;
      /** 诊断指标列表。最多支持100个。 */
      MetricIds: Array<string>;
      /** 诊断指标集合的描述信息。 */
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 诊断指标集合的唯一识别码。 */
      MetricSetId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateDiagnosticReport
   * 调用CreateDiagnosticReport创建资源诊断报告。根据您传入诊断指标集合ID，生成多个诊断指标的诊断报告。您可以根据返回的诊断报告ID，调用DescribeDiagnosticReportAttributes查询资源诊断详情。
   * @summary: 调用CreateDiagnosticReport创建资源诊断报告。根据您传入诊断指标集合ID，生成多个诊断指标的诊断报告。您可以根据返回的诊断报告ID，调用DescribeDiagnosticReportAttributes查询资源诊断详情。
   */
  export namespace CreateDiagnosticReport {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 资源ID。 */
      ResourceId: string;
      /** 诊断指标集合ID。如果为空，则会使用ECS实例的默认诊断指标集合dms-instancedefault。 */
      MetricSetId?: string;
      /** 开始时间。只对无需在GuestOS内执行云助手指令的诊断指标生效。 */
      StartTime?: string;
      /** 结束时间。只对无需在GuestOS内执行云助手指令的诊断指标生效。 */
      EndTime?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 诊断报告ID，资源诊断报告的唯一标志。 */
      ReportId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateDisk
   * ## 接口说明
   * 
   * - 创建云盘时支持开启多重挂载特性（`MultiAttach`）。建议您先了解该特性及使用限制，更多信息，请参见[ESSD云盘支持NVMe](https://help.aliyun.com/document_detail/256487.html)以及[使用多重挂载功能](https://help.aliyun.com/document_detail/262105.html)。
   * - 支持创建的云盘类型：普通云盘、高效云盘、SSD云盘、ESSD云盘和ESSD AutoPL云盘。
   * - 创建云盘需要通过实名认证。请前往会员信息中[实名认证](https://account.console.aliyun.com/#/auth/home)。
   * - 创建云盘会涉及到资源计费，建议您提前了解云服务器ECS的计费方式。更多信息，请参见[计费概述](https://help.aliyun.com/document_detail/25398.html)。
   * - 创建云盘时，默认在删除云盘时删除其自动快照，即`DeleteAutoSnapshot`取值为`true`。您可以通过[ModifyDiskAttribute](https://help.aliyun.com/document_detail/25517.html)修改该参数。
   * - 创建ESSD云盘时，如果您不设置云盘性能等级，默认为PL1等级。您可以通过[ModifyDiskSpec](https://help.aliyun.com/document_detail/123780.html)修改云盘性能等级。
   * - 创建的云盘默认的计费方式为按量付费，即默认`Portable`属性为`true`。
   * @summary: 调用CreateDisk创建一块按量付费或包年包月数据盘。
   */
  export namespace CreateDisk {
    export type Params = {
      /** 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 在指定可用区内创建一块按量付费云盘。

      - 如果您不设置InstanceId，则ZoneId为必填参数。
      - 您不能同时指定ZoneId和InstanceId。 */
      ZoneId?: string;
      /** 创建云盘使用的快照。2013年7月15日及以前的快照不能用来创建云盘。 

      `SnapshotId`参数和`Size`参数存在以下限制：

      - 如果`SnapshotId`参数对应的快照容量大于设置的`Size`参数值，实际创建的云盘大小为指定快照的大小。
      - 如果`SnapshotId`参数对应的快照容量小于设置的`Size`参数值，实际创建的云盘大小为指定的`Size`参数值。 */
      SnapshotId?: string;
      /** 云盘名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。

      默认值：空。 */
      DiskName?: string;
      /** 容量大小。单位：GiB。您必须为该参数传入参数值。取值范围：

      -   cloud：5~2,000。
      -   cloud_efficiency：20~32,768。
      -   cloud_ssd：20~32,768。
      -   cloud_essd：具体取值范围与`PerformanceLevel`的取值有关。
          - PL0：40~32,768。
          - PL1：20~32,768。
          - PL2：461~32,768。
          - PL3：1,261~32,768。
      - cloud_auto：40~32,768。
      - cloud_essd_entry：10~32,768。如果您指定了`SnapshotId`参数，`SnapshotId`参数和`Size`参数存在以下限制：

      - 如果`SnapshotId`参数对应的快照容量大于设置的`Size`参数值，实际创建的云盘大小为指定快照的大小。
      - 如果`SnapshotId`参数对应的快照容量小于设置的`Size`参数值，实际创建的云盘大小为指定的`Size`参数值。 */
      Size?: number;
      /** 数据盘的云盘种类。取值范围：

      - cloud：普通云盘。
      - cloud_efficiency：高效云盘。
      - cloud_ssd：SSD云盘。
      - cloud_essd：ESSD云盘。
      - cloud_auto：ESSD AutoPL云盘。
      - cloud_essd_entry：ESSD Entry云盘。默认值：cloud。 */
      DiskCategory?: string;
      /** 云盘描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。

      默认值：空。 */
      Description?: string;
      /** 是否加密云盘。取值范围：

      - true：是。
      - false：否。

      默认值：false。 */
      Encrypted?: boolean;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 创建一块包年包月云盘，并自动挂载到指定的包年包月实例（InstanceId）上。

      - 设置实例ID后，会忽略您设置的ResourceGroupId、Tag.N.Key、Tag.N.Value、ClientToken和KMSKeyId参数。
      - 您不能同时指定ZoneId和InstanceId。

      默认值：空，代表创建的是按量付费云盘，云盘所属地由RegionId和ZoneId确定。 */
      InstanceId?: string;
      /** 云盘所在的企业资源组ID。 */
      ResourceGroupId?: string;
      /** 云盘使用的KMS密钥ID。 */
      KMSKeyId?: string;
      /** 创建一块ESSD云盘时，设置云盘的性能等级。取值范围：

      - PL0：单盘最高随机读写IOPS 1万。
      - PL1：单盘最高随机读写IOPS 5万。
      - PL2：单盘最高随机读写IOPS 10万。
      - PL3：单盘最高随机读写IOPS 100万。

      默认值：PL1。

      有关如何选择ESSD性能等级，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。 */
      PerformanceLevel?: string;
      /** 该参数暂未开放使用。 */
      AdvancedFeatures?: string;
      /** 存储集ID。

      > 存储集相关参数（`StorageSetId`、`StorageSetPartitionNumber`）与专属块存储集群参数（`StorageClusterId`）只能选择其中之一设置。如果同时设置，那么调用接口将会失败。 */
      StorageSetId?: string;
      /** 该参数暂未开放使用。 */
      EncryptAlgorithm?: string;
      /** 存储集分区数。取值范围：大于等于2，最高不能超过调用[DescribeAccountAttributes](https://help.aliyun.com/document_detail/73772.html)后显示的权益配额限制。

      默认值：2。 */
      StorageSetPartitionNumber?: number;
      /** 专属块存储集群ID。如果您需要在指定的专属块存储集群中创建云盘，请指定该参数。

      > 存储集相关参数（`StorageSetId`、`StorageSetPartitionNumber`）与专属块存储集群参数（`StorageClusterId`）只能选择其中之一设置。如果同时设置，那么调用接口将会失败。 */
      StorageClusterId?: string;
      /** 是否开启多重挂载特性。取值范围：

      - Disabled: 不开启。
      - Enabled : 开启。目前仅ESSD云盘支持设置为`Enabled`。

      默认值：Disabled。

      > 开启多重挂载特性的云盘只支持按量付费的计费方式。因此`MultiAttach=Enabled `时，不能同时设置`InstanceId`参数。您可以在创建云盘后调用[AttachDisk](https://help.aliyun.com/document_detail/25515.html)进行挂载，但需要注意开启多重挂载功能的云盘只能作为数据盘进行挂载。 */
      MultiAttach?: string;
      /** 云盘的标签信息列表。 */
      Tag?: Array<{
        /** 云盘的标签键。N的取值范围：1~20。一旦传入Tag.N.Key值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。 */
        Key?: string;
        /** 云盘的标签值。N的取值范围：1~20。一旦传入Tag.N.Value值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。 */
        Value?: string;
        /** 云盘的标签键。

        >为提高代码兼容性，请尽量使用Tag.N.Key参数。 */
        key?: string;
        /** 云盘的标签值。

        > 为提高代码兼容性，请尽量使用Tag.N.Value参数。 */
        value?: string }>;
      /** 该参数暂未开放使用。 */
      Arn?: Array<{
        /** 该参数暂未开放使用。 */
        AssumeRoleFor?: number;
        /** 该参数暂未开放使用。 */
        RoleType?: string;
        /** 该参数暂未开放使用。 */
        Rolearn?: string }>;
      /** ESSD AutoPL云盘预配置的读写IOPS。可能值：0~min{50,000, 1000*容量-基准性能}。基准性能=min{1,800+50*容量, 50000}。>当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)。
       */
      ProvisionedIops?: number;
      /** 是否开启Burst（性能突发）。取值范围：- true：是。
      - false：否。>当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)。
       */
      BurstingEnabled?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 云盘ID。 */
      DiskId?: string;
      /** 生成的订单ID。

      > 仅在创建包年包月云盘时会返回订单ID。 */
      OrderId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateElasticityAssurance
   * ## 接口说明
   * 弹性保障服务为您提供了兼顾灵活性和确定性的全新的资源购买和使用方式，是一种能够向计费方式为按量付费的ECS实例，提供确定性保障的资源预定服务。更多信息，请参见[弹性保障概述](https://help.aliyun.com/document_detail/193630.html)。
   * 
   * - 购买弹性保障服务后，不支持退款。
   * - 弹性保障服务只能创建计费方式为按量付费的ECS实例。
   * - 目前弹性保障次数只开放了无限次的模式，即`AssuranceTimes`参数只支持设置为`Unlimited`。无限次模式的弹性保障服务在保障生效后，将自动启动。
   * @summary: 调用CreateElasticityAssurance创建弹性保障服务。
   */
  export namespace CreateElasticityAssurance {
    export type Params = {
      /** 弹性保障服务所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 弹性保障服务所在的企业资源组ID。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 弹性保障服务的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。 */
        Key?: string;
        /** 弹性保障服务的标签值。N的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。 */
        Value?: string }>;
      /** 购买时长。时长单位由`PeriodUnit`参数确定。取值范围：

      - 当`PeriodUnit`参数值为`Month`时，该参数的取值：1、2、3、4、5、6、7、8、9。
      - 当`PeriodUnit`参数值为`Year`时，该参数的取值：1、2、3、4、5。

      默认值：1 */
      Period?: number;
      /** 时长单位。取值范围：

      - Month：月
      - Year：年

      默认值：Year */
      PeriodUnit?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 弹性保障服务的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。 */
      'PrivatePoolOptions.Name'?: string;
      /** 弹性保障服务的描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。

      默认值：空 */
      Description?: string;
      /** 弹性保障服务的匹配模式。取值范围：

      - Open：开放模式的弹性保障服务。
      - Target：指定模式的弹性保障服务。

      默认值：Open */
      'PrivatePoolOptions.MatchCriteria'?: string;
      /** 弹性保障的总次数。取值：Unlimited，目前仅支持在服务生效期内的无限次模式。

      默认值：Unlimited */
      AssuranceTimes?: string;
      /** 在一个实例规格内，需要预留的实例的总数量。

      取值范围：1~1000。 */
      InstanceAmount?: number;
      /** >该参数已废弃。 */
      InstanceCpuCoreCount?: number;
      /** 弹性保障服务生效时间。默认为调用该接口创建服务的时间。时间格式以ISO8601为标准，需要使用UTC +0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。更多信息，请参见[ISO8601](https://help.aliyun.com/document_detail/25696.html)。 */
      StartTime?: string;
      /** 弹性保障服务所属地域下的可用区ID。目前仅支持在一个可用区下创建弹性保障服务。 */
      ZoneId: Array<string>;
      /** 实例规格。目前仅支持为一个实例规格设置弹性保障服务。 */
      InstanceType: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 生成的订单ID。 */
      OrderId?: string;
      /** 弹性保障服务ID。 */
      PrivatePoolOptionsId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateForwardEntry
   * undefined
   * @deprecated
   */
  export namespace CreateForwardEntry {
    export type Params = {
      RegionId: string;
      ForwardTableId: string;
      ExternalIp: string;
      ExternalPort: string;
      InternalIp: string;
      InternalPort: string;
      IpProtocol: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      ForwardEntryId?: string;
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateHaVip
   * undefined
   * @deprecated
   */
  export namespace CreateHaVip {
    export type Params = {
      ClientToken?: string;
      RegionId: string;
      VSwitchId: string;
      IpAddress?: string;
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      HaVipId?: string;
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateHpcCluster
   * 调用CreateHpcCluster创建一个HPC集群。
   * @summary: 调用CreateHpcCluster创建一个HPC集群。
   */
  export namespace CreateHpcCluster {
    export type Params = {
      /** HPC集群所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** HPC集群描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。

      默认值：空 */
      Description?: string;
      /** HPC集群名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、英文句号（.）、下划线（_）或者短划线（-）。 */
      Name: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 集群ID。 */
      HpcClusterId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateImage
   * ## 接口说明
   * 调用该接口时，您需要注意：
   * 
   * -  等待镜像状态变为可用（Available）后才能使用镜像资源。  
   * -  查询ECS实例信息时，如果返回数据中包含`{"OperationLocks": {"LockReason" : "security"}}`，则禁止一切操作。
   * -  强烈建议在创建镜像时配置镜像检测参数，有助于系统帮助优化您的镜像。更多信息，请参见[镜像检测概述](https://help.aliyun.com/document_detail/439819.html)。
   * 
   * 以下描述了三种通过该接口创建自定义镜像的方法。请求参数的优先级为：`InstanceId` > `DiskDeviceMapping` > `SnapshotId`，若您的请求中同时含有两个及以上参数，默认以优先级更高的参数为准创建镜像。
   * 
   * - **方法一**：使用一台实例做模板，只需要指定实例ID（`InstanceId`）。该台实例的状态必须为运行中（`Running`）或者已停止（`Stopped`）。接口调用成功后，该台实例的每块云盘均会新增一份快照。由于运行中的实例存在缓存数据未落盘的情况，可能导致创建的自定义镜像数据与实例数据不完全一致。因此阿里云推荐您停止实例（[StopInstances](https://help.aliyun.com/document_detail/155372.html)）后创建镜像。
   * - **方法二**：针对某一台实例的系统盘创建自定义镜像，只需要指定实例系统盘的一份历史快照ID（`SnapshotId`）。其中，指定的快照不能是2013年7月15日（含）之前创建的快照。 
   * - **方法三**：将多份快照组合成一个镜像模板，需要建立几块云盘的数据关联（`DiskDeviceMapping`）。
   * 
   * 使用方法三创建自定义镜像时，请注意： 
   * 
   * -  只能指定一个系统盘快照，系统盘的设备名必须为/dev/xvda。 
   * -  可以指定多个数据盘快照，最多不能超过16块，数据盘设备名默认由系统有序分配，从/dev/xvdb依次排序到/dev/xvdz，不能重复。 
   * -  可以不指定`SnapshotId`，不指定时会创建一个指定大小的没有任何数据的空数据盘。  
   * -  指定的快照不能是2013年7月15日（含）之前创建的快照。
   * @summary: 调用CreateImage创建一份自定义镜像。您可以使用创建的自定义镜像创建ECS实例（RunInstances），或者更换实例的系统盘（ReplaceSystemDisk）。
   */
  export namespace CreateImage {
    export type Params = {
      /** 镜像所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 用于创建自定义镜像的快照ID。 */
      SnapshotId?: string;
      /** 实例ID。 */
      InstanceId?: string;
      /** 镜像名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      ImageName?: string;
      /** 镜像族系名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以aliyun和acs:开头，不能包含http://或者https://。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      ImageFamily?: string;
      /** 镜像版本。

      > 当您指定了实例ID（`InstanceId`），并且该实例的镜像是云市场镜像或者来自云市场镜像创建的自定义镜像时。该参数必须和当前实例的镜像的ImageVersion相同或置为空。 */
      ImageVersion?: string;
      /** 镜像的描述信息。长度为2~256个英文或中文字符，不能以http://或https://开头。 */
      Description?: string;
      /** 指定数据盘快照做镜像的系统盘后，需要通过Platform确定系统盘的操作系统发行版。取值范围：

      - Aliyun
      - Anolis
      - CentOS
      - Ubuntu
      - CoreOS
      - SUSE
      - Debian
      - OpenSUSE
      - FreeBSD
      - RedHat
      - Kylin
      - UOS
      - Fedora
      - Fedora CoreOS
      - CentOS Stream
      - AlmaLinux
      - Rocky Linux
      - Gentoo
      - Customized Linux
      - Others Linux
      - Windows Server 2022
      - Windows Server 2019
      - Windows Server 2016
      - Windows Server 2012
      - Windows Server 2008
      - Windows Server 2003

      默认值：Others Linux。 */
      Platform?: string;
      /** 修改镜像的启动模式。取值范围：

      - BIOS：BIOS启动模式。
      - UEFI：UEFI启动模式。

      > 您需要了解指定的镜像支持的启动模式，当通过该参数修改启动模式后，必须与镜像本身支持的启动模式匹配，实例才能正常启动。 */
      BootMode?: string;
      /** 指定数据盘快照做镜像的系统盘后，需要通过Architecture确定系统盘的系统架构。取值范围：

      - i386。
      - x86_64。
      - arm64。

      默认值为x86_64。 */
      Architecture?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 自定义镜像所在的资源组ID。如果不设置该参数值，创建的镜像属于默认资源组。

      > 如果您当前使用的是RAM用户调用该接口，且`ResourceGroupId`取值为空，您需要注意，当RAM用户没有默认资源组权限时，调用接口会返回报错信息`Forbidden: User not authorized to operate on the specified resource`。请您设置RAM用户支持的资源组ID或者通过相应阿里云账号为该RAM用户授予默认资源组权限后，再次调用该接口。 */
      ResourceGroupId?: string;
      /** 创建的自定义镜像信息列表。 */
      DiskDeviceMapping?: Array<{
        /** 指定在自定义镜像中的设备名称。取值范围：

        - 其他云盘（例如SSD云盘、高效云盘和ESSD云盘）：/dev/vda~/dev/vdz。
        - 普通云盘：/dev/xvda~/dev/xvdz。 */
        Device?: string;
        /** 指定在新镜像中的云盘类型。您可以通过该参数使用数据盘快照做为镜像的系统盘，如果不指定，默认为快照对应的云盘类型。取值范围：

        - system：系统盘。只能指定 1 块系统盘快照。
        - data：数据盘。最多可以指定 16 块数据盘快照。 */
        DiskType?: string;
        /** 云盘的大小，单位为GiB。DiskDeviceMapping.N.Size的取值和默认值和DiskDeviceMapping.N.SnapshotId有关：

        - 如果没有指定SnapshotId，Size取值以及默认值为：
            - 普通云盘：5~2000GiB，默认为5。
            - 其他云盘：20~32768GiB，默认为20。
        - 如果指定了SnapshotId，Size取值必须大于等于SnapshotId的大小，默认为SnapshotId的大小。 */
        Size?: number;
        /** 根据指定的快照创建自定义镜像。 */
        SnapshotId?: string }>;
      /** 标签列表。 */
      Tag?: Array<{
        /** 镜像的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或者`https://`。 */
        Key?: string;
        /** 镜像的标签值。N的取值范围为1~20。一旦传入该值，允许为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。 */
        Value?: string;
        /** 镜像的标签键。

        >为提高兼容性，建议您尽量使用Tag.N.Key参数。 */
        key?: string;
        /** 镜像的标签值。

        >为提高兼容性，建议您尽量使用Tag.N.Value参数。 */
        value?: string }>;
      /** 镜像检测策略，不配置此参数时不触发检测。仅支持标准（Standard）检测模式。 

      > 目前已支持大部分的Linux/Windows版本，关于镜像检测项与操作系统限制说明，请参见[镜像检测概述](https://help.aliyun.com/document_detail/439819.html)和[镜像检测操作系统限制](https://help.aliyun.com/document_detail/475800.html)。
       */
      DetectionStrategy?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 镜像ID。 */
      ImageId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateImageComponent
   * 创建镜像组件前，您需要注意：
   * 
   * - 仅支持创建您自定义的镜像组件。
   * - 仅支持Linux系统，即`SystemType=Linux`。
   * - 仅支持设置为镜像构建组件类型，即`ComponentType=Build`。
   * - 镜像组件的内容可以通过Dockerfile编辑，然后将内容传入`Content`参数。内容大小不能超过16 KB，不支持`FROM`命令，一个镜像组件最大支持127个命令。支持的命令详情，请参见[镜像构建服务支持的命令说明](https://help.aliyun.com/document_detail/200206.html)。
   * 
   * 不支持通过API使用镜像组件快速完成镜像模板的创建，仅控制台操作支持该功能。更多信息，请参见[镜像构建概述](https://help.aliyun.com/document_detail/197410.html)。
   * @summary: 调用CreateImageComponent创建一个镜像组件。镜像组件用于存储您在构建镜像时，常用的构建模板命令。
   */
  export namespace CreateImageComponent {
    export type Params = {
      /** 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 企业资源组ID。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。 */
        Key?: string;
        /** 标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或者https://。 */
        Value?: string }>;
      /** 组件名称。长度为2~128个字符，必须以大小字母或中文开头，不能以http://和https://开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。

      > 不设置`Name`时，默认使用`ImageComponentId`返回值。 */
      Name?: string;
      /** 描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。 */
      Description?: string;
      /** 组件支持的操作系统。目前仅支持Linux系统。取值：Linux

      默认值：Linux */
      SystemType?: string;
      /** 组件类型。目前仅支持镜像构建组件。取值：Build

      默认值：Build */
      ComponentType?: string;
      /** 组件内容。由多条命令组成，命令最大条数不能超过127条。支持的命令和命令格式详情，请参见[镜像构建服务支持的命令说明](https://help.aliyun.com/document_detail/200206.html)。

       */
      Content?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 镜像组件ID。 */
      ImageComponentId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateImagePipeline
   * 您可以通过镜像模版定制镜像内容，并支持跨地域跨账号构建镜像。创建镜像模板前，您需要注意：
   * 
   * - 仅支持创建您自定义的镜像模版。
   * - 仅支持设置Linux系统的公共镜像、自定义镜像、共享镜像或者镜像族系。
   * - 通过镜像模版构建镜像时，需要创建中转实例辅助构建镜像，中转实例为按量计费的ECS实例，将收取一定的费用。更多信息，请参见[按量付费](https://help.aliyun.com/document_detail/40653.html)。
   * 
   * 关于构建模板内容`BuildContent`，您需要注意：
   * - 如果参数`BuildContent`设置了`FROM`命令，则源镜像类型`BaseImageType`和源镜像`BaseImage`设置的值会被`FROM`命令覆盖。
   * - 如果参数`BuildContent`没有设置`FROM`命令，则系统会自动将源镜像类型`BaseImageType`和源镜像`BaseImage`构成的`FROM`命令添加到模板内容的首行，格式为`<BaseImageType>:<BaseImage>`。
   * - 一个镜像模板内容可以通过Dockerfile编辑，然后将内容传入`BuildContent`参数。内容大小不能超过16 KB，最大支持127个命令。支持的命令说明详情，请参见[镜像构建服务支持的命令说明](https://help.aliyun.com/document_detail/200206.html)。
   * 
   * 不支持通过API使用镜像组件快速完成镜像模板的创建，仅控制台操作支持该功能。更多信息，请参见[镜像构建概述](https://help.aliyun.com/document_detail/197410.html)。
   * @summary: 调用CreateImagePipeline创建一个镜像模板。镜像模板可用于构建镜像。
   */
  export namespace CreateImagePipeline {
    export type Params = {
      /** 标签列表。 */
      Tag?: Array<{
        /** 标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。 */
        Key?: string;
        /** 标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。 */
        Value?: string }>;
      /** 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 企业资源组ID。 */
      ResourceGroupId?: string;
      /** 目标镜像共享的阿里云账号ID。N的取值范围：1~20。 */
      AddAccount?: Array<number>;
      /** 目标镜像待分发的地域列表。N的取值范围：1~20。

      不设置参数值时，默认只在当前地域创建镜像。 */
      ToRegionId?: Array<string>;
      /** 源镜像类型。取值范围：

      - IMAGE：镜像。
      - IMAGE_FAMILY：镜像族系。 */
      BaseImageType: string;
      /** 源镜像。
      - 当`BaseImageType=IMAGE`时，该参数取值为镜像ID。
      - 当`BaseImageType=IMAGE_FAMILY`时，该参数取值为镜像族系名称。 */
      BaseImage: string;
      /** 模板名称。长度为2~128个字符，必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。

      >不设置`Name`时，默认使用`ImagePipelineId`返回值。 */
      Name?: string;
      /** 描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。 */
      Description?: string;
      /** 目标镜像名称前缀。长度为2~64个字符，必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。

      最终完整的镜像名称由系统自动拼接名称前缀与构建任务ID（`ExecutionId`），格式为`{ImageName}_{ExecutionId}`。

       */
      ImageName?: string;
      /** VPC的交换机ID。

      不设置参数值时，默认创建新的VPC与交换机，请确保您账号下VPC资源配额充足，更多信息，请参见[使用限制](https://help.aliyun.com/document_detail/27750.html)。 */
      VSwitchId?: string;
      /** 实例规格。您可以调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)查询不同的实例规格。

      不设置参数值时，默认按vCPU和内存最小的原则，自动设置实例规格，并受实例规格的库存影响。例如，默认选择ecs.g6.large实例规格，如果库存不足，将选择ecs.g6.xlarge实例规格。 */
      InstanceType?: string;
      /** 中转实例的系统盘大小。单位：GiB。取值范围：20~500。

      默认值：40。 */
      SystemDiskSize?: number;
      /** 中转实例的公网出带宽大小。单位：Mbit/s。取值范围：0~100。

      默认值：0。 */
      InternetMaxBandwidthOut?: number;
      /** 镜像构建失败后是否释放中转实例。取值范围：

      - true：释放。
      - false：不释放。

      默认值：true。

      > 中转实例如果没有成功启动，则实例默认不保留。

       */
      DeleteInstanceOnFailure?: boolean;
      /** 镜像模板内容。内容大小不能超过16 KB，最大支持127个命令。具体支持的命令请参见接口说明。 */
      BuildContent?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 镜像模板ID。 */
      ImagePipelineId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateInstance
   * ## 接口说明
   * 
   * > 您可以调用[DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html)查看指定地域或者可用区内的实例资源供给情况。若您希望批量创建实例并且实例自动进入运行中（Running）状态，推荐您使用[RunInstances](https://help.aliyun.com/document_detail/63440.html)接口。
   * 
   * 创建ECS实例需要通过实名认证。您可以参见[账号实名认证相关文档](https://help.aliyun.com/document_detail/48263.html)完成认证。创建ECS实例时，您需要注意：
   * 
   * - **计费**：
   *     - 创建实例会涉及资源计费，建议您提前了解云服务器ECS的计费方式。更多详情，请参见[计费概述](https://help.aliyun.com/document_detail/25398.html)。
   *     - 若实例计费方式为包年包月实例（`PrePaid`），在付款时默认会使用您可用的优惠券。
   * - **实例规格**：
   *     - 可以通过参数`IoOptimized`指定是否创建I/O优化实例。
   *     - 产品选型：参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)或调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)查看目标实例规格的性能数据，或者参见[选型配置](https://help.aliyun.com/document_detail/58291.html)了解如何选择实例规格。
   *     - 查询库存：调用[DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html)查看指定地域或者可用区内的资源供给情况。
   * 
   * > 如果创建实例时返回`QuotaExceed.ElasticQuota`错误，表示您在当前地域选择的实例规格所要创建的台数超出系统限额，或者全实例规格vCPU配额超出系统限额，您可以前往[ECS管理控制台](https://ecs.console.aliyun.com/?spm=a2c8b.12215451.favorites.decs.5e3a336aMGTtzy#/privileges/quota)或[配额中心](https://quotas.console.aliyun.com/products/ecs/quotas)申请提高限额。
   * 
   * - **镜像**：
   *     - 镜像确定实例的系统盘配置，实例的系统盘即为指定镜像的完全克隆。
   *     - 实例内存为512 MiB时，不能使用除半年渠道之外的Windows Server镜像。
   *     - 实例内存为4 GiB以上时，不能使用32位操作系统的镜像。
   * - **网络类型**：
   *     - 专有网络VPC类型实例必须且只能属于一个交换机。
   *     - 指定`VSwitchId`时，`SecurityGroupId`和`VSwitchId`必须属于同一个VPC。
   *     - `PrivateIpAddress`依赖于`VSwitchId`，不能单独指定`PrivateIpAddress`。同时指定`VSwitchId`和`PrivateIpAddress`时，`PrivateIpAddress`必须包含在交换机的空闲子网网段之内。
   * 
   * - **公网带宽**：
   *     - 自2020年11月27日起，创建和变配ECS实例时带宽峰值受账户限速策略影响。如需更大带宽峰值，请提交工单。具体限速策略：单个地域下，所有按使用流量计费ECS实例的实际运行带宽峰值总和不大于5 Gbit/s；所有按固定带宽计费ECS实例的实际运行带宽峰值总和不大于50 Gbit/s。
   *     - 使用`CreateInstance`创建的实例将不会分配公网IP地址，您可以调用[AllocatePublicIpAddress](https://help.aliyun.com/document_detail/25544.html)自行分配。
   *     - `InternetChargeType`和`InternetMaxBandwidthOut`的设置决定带宽费用。
   *     - 阿里云入网数据流量免费，`InternetMaxBandwidthIn`的值与计费无关。
   *     - `InternetChargeType=PayByBandwidth`表示按固定带宽付费，则`InternetMaxBandwidthOut`为所选的固定带宽值。
   *     - `InternetChargeType=PayByTraffic`表示按使用流量付费，则`InternetMaxBandwidthOut`取带宽的上限设置，计费以实际使用的网络流量为依据。
   * - **安全组**：
   *     - 您必须预先创建一个安全组，可通过[CreateSecurityGroup](https://help.aliyun.com/document_detail/25553.html)创建。
   *     - 同一个安全组内可容纳的实例数量视安全组类型而定，具体请参见[使用限制](https://help.aliyun.com/document_detail/25412.html)的安全组章节。
   *     - 同一个安全组内的实例内网可以相互访问。不同安全组之间默认隔离，不可相互访问，但是可以授权访问。更多详情，请参见[AuthorizeSecurityGroup](https://help.aliyun.com/document_detail/25554.html)和[AuthorizeSecurityGroupEgress](https://help.aliyun.com/document_detail/25560.html)。
   * - **存储**：
   *     - 根据您指定的镜像，实例被分配一个相应大小的系统盘。系统盘容量必须大于或者等于`max{20, ImageSize}`。系统盘的种类请参见`SystemDisk.Category`参数描述。
   *     - I/O优化实例的系统盘只能选择ESSD云盘（`cloud_essd`）、SSD云盘（`cloud_ssd`）及高效云盘（`cloud_efficiency`）。
   *     - 不同类型云盘的数据盘最大容量不同。详情请参见`DataDisk.N.Size`参数描述。
   *     - 一台实例最多添加16块数据盘。数据盘挂载点由系统默认顺序分配，/dev/xvdb开始到/dev/xvdz。
   * > 如果创建实例时返回`QuotaExceed.DiskCapacity`错误，表示您当前选择的磁盘类型所要创建的总容量超出指定可用区的系统限额，您可以前往[配额中心](https://quotas.console.aliyun.com/products/disk/quotas)查询和申请提升配额。
   * 
   * - **自定义数据**：若实例满足使用[实例自定义数据](https://help.aliyun.com/document_detail/49121.html)的限制，您可传入UserData信息。UserData以Base64的方式编码。因为传输API请求时，不会加密您设置的`UserData`，建议不要以明文方式传入机密的信息，例如密码和私钥等。如果必须传入，建议加密后，然后以Base64的方式编码后再传入，在实例内部以同样的方式反解密。
   * - **其他**：在阿里云CLI及SDK中使用API时，部分带英文句号（.）的入参需要去掉英文句号（.）再使用。例如，使用`SystemDiskCategory`表示入参`SystemDisk.Category`。
   * @summary: 调用CreateInstance创建一台包年包月或者按量付费ECS实例。
   */
  export namespace CreateInstance {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 镜像文件ID，启动实例时选择的镜像资源。如需使用云市场镜像，您可以在云市场镜像商详情页查看`ImageId`。当您不通过指定`ImageFamily`选用镜像族系最新可用镜像时，此参数必选。 */
      ImageId?: string;
      /** 镜像族系名称，通过设置该参数来获取当前镜像族系内最新可用镜像来创建实例。
      - 设置了`ImageId`，则不能设置该参数。
      - 未设置`ImageId`，则可以设置该参数。 */
      ImageFamily?: string;
      /** 实例的资源规格。

      - 产品选型：参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)或调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)查看目标实例规格的性能数据，或者参见[选型配置](https://help.aliyun.com/document_detail/58291.html)了解如何选择实例规格。
      - 查询库存：调用[DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html)查看指定地域或者可用区内的资源供给情况。 */
      InstanceType: string;
      /** 指定新创建实例所属于的安全组ID。 */
      SecurityGroupId?: string;
      /** 实例的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。如果没有指定该参数，默认值为实例ID。 */
      InstanceName?: string;
      /** 网络计费类型。取值范围：

      - PayByBandwidth：按固定带宽计费。
      - PayByTraffic（默认）：按使用流量计费。

      > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。 */
      InternetChargeType?: string;
      /** 是否要自动续费。当参数`InstanceChargeType`取值`PrePaid`时才生效。取值范围：

      - true：自动续费。
      - false（默认）：不自动续费。 */
      AutoRenew?: boolean;
      /** 每次自动续费的时长，当参数AutoRenew取值True时，该参数为必填参数。

      PeriodUnit为Week时，AutoRenewPeriod取值：1、2、3。PeriodUnit为Month时，AutoRenewPeriod取值：1、2、3、6、12。
       */
      AutoRenewPeriod?: number;
      /** 公网入带宽最大值，单位为Mbit/s。取值范围：

      - 当所购出网带宽小于等于10 Mbit/s时：1~10。默认值为10。
      - 当所购出网带宽大于10 Mbit/s时：1~`InternetMaxBandwidthOut`的取值，默认为`InternetMaxBandwidthOut`的取值。 */
      InternetMaxBandwidthIn?: number;
      /** 公网出带宽最大值，单位为Mbit/s。取值范围为0~100。

      默认值为0。 */
      InternetMaxBandwidthOut?: number;
      /** 云服务器的主机名。

      - 半角句号（.）或短划线（-）不能作为首尾字符，更不能连续使用。
      - Windows实例：字符长度为2~15，不支持半角句号（.），不能全是数字。允许大小写英文字母、数字和短划线（-）。
      - 其他类型实例（Linux等）：字符长度为2~64，支持多个半角句号（.），英文句号之间为一段，每段允许大小写英文字母、数字和短划线（-）。 */
      HostName?: string;
      /** 实例的密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：

      ```
      ()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
      ```

      您需要注意：

      - 如果传入Password参数，建议您使用HTTPS协议发送请求，避免密码泄露。
      - Windows实例不能以正斜线（/）为密码首字符。
      - 部分操作系统的实例不支持配置密码，仅支持配置密钥对。例如：Others Linux、Fedora CoreOS。 */
      Password?: string;
      /** 是否使用镜像预设的密码。使用该参数时，Password参数必须为空，同时您需要确保使用的镜像已经设置了密码。 */
      PasswordInherit?: boolean;
      /** 部署集ID。 */
      DeploymentSetId?: string;
      /** 如果您设置的部署集对应的策略为部署集组高可用策略（AvailabilityGroup）时，可以通过该参数指定实例在部署集中的分组号。取值范围为1~7。 */
      DeploymentSetGroupNo?: number;
      /** 实例所属的可用区ID。更多信息，请参见[DescribeZones](https://help.aliyun.com/document_detail/25610.html)获取可用区列表。

      > 如果您指定了`VSwitchId`参数，则指定的`ZoneId`参数必须和交换机所在的可用区保持一致。您也可以不指定`ZoneId`参数，系统将自动选择指定的交换机所在的可用区。

      默认值：空，系统自动选择。 */
      ZoneId?: string;
      /** 实例所在的集群ID。

      >该参数即将被弃用，为提高兼容性，请尽量使用其他参数。 */
      ClusterId?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 虚拟局域网ID。 */
      VlanId?: string;
      /** 实例的内网IP。 */
      InnerIpAddress?: string;
      /** 系统盘大小，单位为GiB。取值范围为：

      -  普通云盘：20~500

      -  其他类型云盘：20~2048

      该参数的取值必须大于或者等于max{20, ImageSize}。

      默认值：max{40, ImageSize} 。 */
      'SystemDisk.Size'?: number;
      /** 系统盘的云盘种类。取值范围：

      - cloud_essd：ESSD云盘，您可以通过参数`SystemDisk.PerformanceLevel`设置云盘的性能等级。
      - cloud_efficiency：高效云盘。
      - cloud_ssd：SSD云盘。
      - cloud：普通云盘。

      已停售的实例规格且非I/O优化实例默认值为cloud，否则默认值为cloud_efficiency。 */
      'SystemDisk.Category'?: string;
      /** 系统盘名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。

      默认值为空。 */
      'SystemDisk.DiskName'?: string;
      /** 系统盘描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。

      默认值为空。 */
      'SystemDisk.Description'?: string;
      /** 创建ESSD云盘作为系统盘使用时，设置云盘的性能等级。取值范围：

      - PL0：单盘最高随机读写IOPS 1万。
      - PL1（默认）：单盘最高随机读写IOPS 5万。
      - PL2：单盘最高随机读写IOPS 10万。
      - PL3：单盘最高随机读写IOPS 100万。

      有关如何选择ESSD性能等级，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。 */
      'SystemDisk.PerformanceLevel'?: string;
      /** >该参数正在邀测中，暂不支持使用。
       */
      NodeControllerId?: string;
      /** 实例的描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。

      默认值为空。 */
      Description?: string;
      /** 如果是创建VPC类型的实例，需要指定交换机ID。您可以调用[DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html)查询已创建的交换机的相关信息。

      > 如果您指定了`VSwitchId`参数，则指定的`ZoneId`参数必须和交换机所在的可用区保持一致。您也可以不指定`ZoneId`参数，系统将自动选择指定的交换机所在的可用区。 */
      VSwitchId?: string;
      /** 实例私网IP地址。该IP地址必须为交换机（VSwitchId）网段的空闲地址。 */
      PrivateIpAddress?: string;
      /** 是否为I/O优化实例。取值范围：

      - none：非I/O优化。
      - optimized：I/O优化。

      [已停售的实例规格](https://help.aliyun.com/document_detail/55263.html)实例默认值是none。

      其他实例规格默认值是optimized。 */
      IoOptimized?: string;
      /** 是否使用阿里云提供的虚拟机系统配置（Windows：NTP、KMS；Linux：NTP、YUM）。 */
      UseAdditionalService?: boolean;
      /** 实例的付费方式。取值范围：

      - PrePaid：包年包月。选择该类付费方式时，您必须确认自己的账号支持余额支付/信用支付，否则将返回 `InvalidPayMethod`的错误提示。
      - PostPaid（默认）：按量付费。 */
      InstanceChargeType?: string;
      /** 购买资源的时长，单位由`PeriodUnit`指定。当参数`InstanceChargeType`取值为`PrePaid`时才生效且为必选值。一旦指定了`DedicatedHostId`，则取值范围不能超过专有宿主机的订阅时长。取值范围：

      - PeriodUnit=Week时，Period取值：1、2、3、4。
      - PeriodUnit=Month时，Period取值：1、2、3、4、5、6、7、8、9、12、24、36、48、60。

       */
      Period?: number;
      /** 购买资源的时长。取值范围：

      - Week。
      - Month。

      默认值为Month。 */
      PeriodUnit?: string;
      /** 实例自定义数据，需要以Base64方式编码，原始数据最多为16KB。 */
      UserData?: string;
      /** 实例的抢占策略。当参数`InstanceChargeType`取值为`PostPaid`时生效。取值范围：

      - NoSpot（默认）：正常按量付费实例。
      - SpotWithPriceLimit：设置上限价格的抢占式实例。
      - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。 */
      SpotStrategy?: string;
      /** 密钥对名称。

      >Windows实例，忽略该参数。默认为空。即使填写了该参数，仍旧只执行`Password`的内容。 */
      KeyPairName?: string;
      /** 设置实例的每小时最高价格。支持最多3位小数，参数`SpotStrategy`取值为`SpotWithPriceLimit`时生效。 */
      SpotPriceLimit?: number;
      /** 抢占式实例的保留时长，单位为小时。取值范围：0~6

      - 保留时长2~6正在邀测中，如需开通请提交工单。
      - 取值为0，则为无保护期模式。

      默认值为1。 */
      SpotDuration?: number;
      /** 抢占实例中断模式。目前仅支持Terminate（默认）直接释放实例。 */
      SpotInterruptionBehavior?: string;
      /** 实例RAM角色名称。您可以使用RAM API [ListRoles](https://help.aliyun.com/document_detail/28713.html)查询您已创建的实例RAM角色。 */
      RamRoleName?: string;
      /** 是否开启安全加固。取值范围：

      - Active：启用安全加固，只对系统镜像生效。
      - Deactive：不启用安全加固，对所有镜像类型生效。 */
      SecurityEnhancementStrategy?: string;
      /** 实例所在的企业资源组ID。 */
      ResourceGroupId?: string;
      /** 实例所属的HPC集群ID。  */
      HpcClusterId?: string;
      /** 是否只预检此次请求。取值范围：

      - true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数、请求格式、业务限制和ECS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
      - false（默认）：发送正常请求，通过检查后直接创建实例。 */
      DryRun?: boolean;
      /** 是否在专有宿主机上创建ECS实例。

      您可以通过[DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html)查询专有宿主机ID列表。

      由于专有宿主机不支持创建抢占式实例，指定`DedicatedHostId`参数后，会自动忽略请求中的`SpotStrategy`和`SpotPriceLimit`设置。 */
      DedicatedHostId?: string;
      /** 设置突发性能实例的运行模式。取值范围：

      - Standard：标准模式，实例性能请参见[什么是突发性能实例](https://help.aliyun.com/document_detail/59977.html)下的性能约束模式章节。
      - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](https://help.aliyun.com/document_detail/59977.html)下的无性能约束模式章节。 */
      CreditSpecification?: string;
      /** 实例释放保护属性，指定是否支持通过控制台或API（[DeleteInstance](https://help.aliyun.com/document_detail/25507.html)）释放实例。

      -   true：开启实例释放保护。
      -   false（默认）：关闭实例释放保护。

      > 该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。 */
      DeletionProtection?: boolean;
      /** >该参数正在邀测中，暂不支持使用。 */
      'HibernationOptions.Configured'?: boolean;
      /** 专有宿主机实例是否与专有宿主机关联。取值范围：

      - default：实例不与专有宿主机关联。已启用节省停机模式的实例，停机后再次启动时，若原专有宿主机可用资源不足，则实例被放置在自动部署资源池的其它专有宿主机上。

      - host：实例与专有宿主机关联。已启用节省停机模式的实例，停机后再次启动时，仍放置在原专有宿主机上。若原专有宿主机可用资源不足，则实例重启失败。

      默认值为default。 */
      Affinity?: string;
      /** 是否在专有宿主机上创建实例。取值范围：

      - default：在非专有宿主机上创建实例。

      - host：在专有宿主机上创建实例。若您不指定`DedicatedHostId`，则由阿里云自动选择专有宿主机部署实例。

      默认值为default。 */
      Tenancy?: string;
      /** 存储集ID。 */
      StorageSetId?: string;
      /** 存储集中的最大分区数量。取值范围：大于等于2。 */
      StorageSetPartitionNumber?: number;
      /** 是否启用实例元数据的访问通道。取值范围：
      - enabled：启用。
      - disabled：禁用。

      默认值为enabled。
      >有关实例元数据的信息，请参见[实例元数据概述](https://help.aliyun.com/document_detail/49122.html)。 */
      HttpEndpoint?: string;
      /** 访问实例元数据时是否强制使用加固模式（IMDSv2）。取值范围：
      - optional：不强制使用。
      - required：强制使用。设置该取值后，普通模式无法访问实例元数据。

      默认值为optional。
      >有关访问实例元数据的模式，请参见[实例元数据访问模式](https://help.aliyun.com/document_detail/150575.html)。 */
      HttpTokens?: string;
      /** >该参数正在邀测中，暂不支持使用。
       */
      HttpPutResponseHopLimit?: number;
      /** 实例启动的私有池容量选项。弹性保障服务或容量预定服务在生效后会生成私有池容量，供实例启动时选择。取值范围：

      - Open：开放模式。将自动匹配开放类型的私有池容量。如果没有符合条件的私有池容量，则使用公共池资源启动。该模式下无需设置`PrivatePoolOptions.Id`参数。
      - Target：指定模式。使用指定的私有池容量启动实例，如果该私有池容量不可用，则实例会启动失败。该模式下必须指定私有池ID，即`PrivatePoolOptions.Id`参数为必填项。
      - None：不使用模式。实例启动将不使用私有池容量。

      默认值为None。

      以下任一场景，实例启动的私有池容量选项只能取值`None`或不传值。
      - 创建抢占式实例。
      - 创建经典网络类型的ECS实例。
      - 在专有宿主机DDH上创建ECS实例。 */
      'PrivatePoolOptions.MatchCriteria'?: string;
      /** 私有池ID。即弹性保障服务ID或容量预定服务ID。 */
      'PrivatePoolOptions.Id'?: string;
      /** 数据盘列表。 */
      DataDisk?: Array<{
        /** 数据盘N的云盘种类。取值范围：

        - cloud_efficiency：高效云盘。
        - cloud_ssd：SSD云盘。
        - cloud_essd：ESSD云盘。
        - cloud：普通云盘。

        I/O优化实例的默认值为cloud_efficiency，非I/O优化实例的默认值为cloud。 */
        Category?: string;
        /** 数据盘是否随实例释放。

        - true：是。
        - false：否。

        默认值为true。 */
        DeleteWithInstance?: boolean;
        /** 数据盘描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
        Description?: string;
        /** 数据盘的挂载点。

        >该参数仅用于全镜像（整机镜像）场景。您可以通过将此参数设置为全镜像中数据盘对应的挂载点，并修改对应的`DataDisk.N.Size`和`DataDisk.N.Category`参数，达到修改全镜像中数据盘磁盘种类和大小的目的。 */
        Device?: string;
        /** 数据盘名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
        DiskName?: string;
        /** >该参数暂未开放使用。 */
        EncryptAlgorithm?: string;
        /** 数据盘N是否加密。

        - true：是。

        - false：否。

        默认值为false。 */
        Encrypted?: boolean;
        /** 云盘使用的KMS密钥ID。 */
        KMSKeyId?: string;
        /** 创建ESSD云盘作为数据盘使用时，设置云盘的性能等级。N的取值必须和`DataDisk.N.Category=cloud_essd`中的N保持一致。取值范围：

        - PL0：单盘最高随机读写IOPS 1万。
        - PL1（默认）：单盘最高随机读写IOPS 5万。
        - PL2：单盘最高随机读写IOPS 10万。
        - PL3：单盘最高随机读写IOPS 100万。

        有关如何选择ESSD性能等级，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。 */
        PerformanceLevel?: string;
        /** 第n个数据盘的容量大小，N的取值范围为1~16，内存单位为GiB。取值范围：

        -   cloud_efficiency：20~32768。
        -   cloud_ssd：20~32768。
        -   cloud_essd：具体取值范围与 `DataDisk.N.PerformanceLevel`的取值有关。
            - PL0：40~32768。
            - PL1：20~32768。
            - PL2：461~32768。
            - PL3：1261~32768。
        -   cloud：5~2000。

        该参数的取值必须大于等于参数`SnapshotId`指定的快照的大小。 */
        Size?: number;
        /** 创建数据盘N使用的快照。N的取值范围为1~16。

        - 指定参数`DataDisk.N.SnapshotId`后，参数`DataDisk.N.Size`会被忽略，实际创建的云盘大小为指定的快照的大小。

        - 不能使用早于2013年7月15日（含）创建的快照，请求会报错被拒绝。 */
        SnapshotId?: string;
        /** 专属块存储集群ID。如果您在创建ECS实例时，需要使用专属块存储集群中的云盘资源作为数据盘，请设置该参数。 */
        StorageClusterId?: string }>;
      /** >该参数正在邀测中，暂不支持使用。
       */
      Arn?: Array<{
        /** >该参数正在邀测中，暂不支持使用。
         */
        AssumeRoleFor?: number;
        /** >该参数正在邀测中，暂不支持使用。
         */
        RoleType?: string;
        /** >该参数正在邀测中，暂不支持使用。
         */
        Rolearn?: string }>;
      /** 标签列表。 */
      Tag?: Array<{
        /** 实例、云盘和主网卡的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** 实例、云盘和主网卡的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。 */
        Value?: string;
        /** 标签键。

        > 为提高兼容性，建议您尽量使用Tag.N.Key参数。 */
        key?: string;
        /** 标签值。

        > 为提高兼容性，建议您尽量使用Tag.N.Value参数。 */
        value?: string }>;
      /** 系统盘相关参数，目前专属块存储集群ID（`StorageClusterId`）需要通过该参数设置参数值。 */
      SystemDisk?: {
        /** 专属块存储集群ID。如果您在创建ECS实例时，需要使用专属块存储集群中的云盘资源作为系统盘，请设置该参数。 */
        StorageClusterId?: string };
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例ID。 */
      InstanceId?: string;
      /** 订单ID。该参数只有创建包年包月ECS实例（请求参数`InstanceChargeType=PrePaid`）时有返回值。 */
      OrderId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 订单成交价。 */
      TradePrice?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateKeyPair
   * 除了调用CreateKeyPair创建密钥对之外，您还可以使用第三方工具创建密钥对，然后上传（[ImportKeyPair](https://help.aliyun.com/document_detail/51774.html)）到某一阿里云地域，其使用方法和系统为您创建的密钥对是一致的。
   * 
   * 您在每个地域的密钥对数最高为500对。更多信息，请参见[使用限制](https://help.aliyun.com/document_detail/25412.html)。
   * @summary: 调用CreateKeyPair创建一对SSH密钥对。系统会为您保管密钥的公钥部分，并返回未加密的PEM编码的PKCS#8格式私钥。您需要自行妥善保管私钥部分。
   */
  export namespace CreateKeyPair {
    export type Params = {
      /** 密钥对所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 密钥对名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      KeyPairName: string;
      /** SSH密钥对所在的企业资源组ID。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 密钥对的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或者`https://`。 */
        Key?: string;
        /** 密钥对的标签值。N的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或者https://。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 密钥对的指纹。根据RFC4716定义的公钥指纹格式，采用MD5信息摘要算法。更多信息，请参见[RFC4716](https://tools.ietf.org/html/rfc4716)。  */
      KeyPairFingerPrint?: string;
      /** SSH密钥对的ID。 */
      KeyPairId?: string;
      /** 密钥对名称。 */
      KeyPairName?: string;
      /** 密钥对的私钥。PEM编码的PKCS#8格式的私钥部分。 */
      PrivateKeyBody?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateLaunchTemplate
   * ## 接口说明
   * 
   * 实例启动模板中包含用于创建实例的相关配置，例如实例所属地域、镜像ID、实例规格、安全组ID和公网带宽等。如果模板中没有指定某一实例配置，您需要在创建实例时为实例指定该配置。
   * 
   * 创建模板（`CreateLaunchTemplate`）后，模板的初始版本为1，您可以后续基于该版本创建多个模板版本（`CreateLaunchTemplateVersion`），版本号从1开始顺序递增。如果您在创建实例（[RunInstances](https://help.aliyun.com/document_detail/63440.html)）时不指定模板版本号，会采用默认版本。
   * 
   * 调用该接口时，您需要注意：
   * 
   * -   您最多能在一个地域内创建30个实例启动模板，且每个模板最多能有30个版本。
   * 
   * -   实例启动模板的参数大多数为可选参数。创建模板时，阿里云不会验证模板中参数取值的存在性和有效性。只会在真正创建实例时校验参数取值的有效性。
   * 
   * -   如果实例启动模板中设置了某一配置，创建实例（[RunInstances](https://help.aliyun.com/document_detail/63440.html)）时就无法过滤掉该配置。例如，如果模板设置了`HostName=LocalHost`，`RunInstances`中`HostName`取值为空时，实例的主机名依然是`LocalHost`。如果您想覆盖`HostName=LocalHost`这一配置，可以在`RunInstances`中取`HostName=MyHost`或其他参数值。
   * @summary: 调用CreateLaunchTemplate创建一个ECS实例启动模板，简称模板。实例启动模板能免除每次创建实例时都需要填入大量配置参数。
   */
  export namespace CreateLaunchTemplate {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 启动模板的标签对信息。 */
      TemplateTag?: Array<{
        /** 启动模板的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** 启动模板的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Value?: string }>;
      /** 实例启动模板名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      LaunchTemplateName: string;
      /** 实例启动模板版本描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
      VersionDescription?: string;
      /** 镜像ID，启动实例时选择的镜像资源。您可以通过[DescribeImages](https://help.aliyun.com/document_detail/25534.html)查询您可以使用的镜像资源。 */
      ImageId?: string;
      /** 镜像来源。取值范围：

      - system：阿里云提供的公共镜像。
      - self：您创建的自定义镜像。
      - others：其他阿里云用户共享给您的镜像。
      - marketplace：<ph>[云市场](https://market.aliyun.com/)</ph>提供的镜像。您查询到的云市场镜像可以直接使用，无需提前订阅。您需要自行留意云市场镜像的收费详情。 */
      ImageOwnerAlias?: string;
      /** 是否使用镜像预设的密码。

      > 使用该参数时，Password参数必须为空，同时您需要确保使用的镜像已经设置了密码。  */
      PasswordInherit?: boolean;
      /** 实例的资源规格。更多信息，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)，也可以调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)接口获得最新的规格表。  */
      InstanceType?: string;
      /** 指定新创建实例所属于的安全组ID。同一个安全组内的实例之间可以互相访问，一个安全组最多能管理1000台实例。

      > 不支持同时指定`SecurityGroupId`和`SecurityGroupIds.N`。 */
      SecurityGroupId?: string;
      /** 专有网络VPC ID。 */
      VpcId?: string;
      /** 创建VPC类型实例时需要指定虚拟交换机ID。 */
      VSwitchId?: string;
      /** 实例名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      InstanceName?: string;
      /** 实例描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
      Description?: string;
      /** 公网入带宽最大值，单位为Mbit/s。取值范围：

      - 当所购公网出带宽小于等于10 Mbit/s时：1~10，默认为10。
      - 当所购公网出带宽大于10 Mbit/s时：1~`InternetMaxBandwidthOut`的取值，默认为`InternetMaxBandwidthOut`的取值。 */
      InternetMaxBandwidthIn?: number;
      /** 公网出带宽最大值，单位为Mbit/s。取值范围为0~100。 */
      InternetMaxBandwidthOut?: number;
      /** 云服务器的主机名。

      -   半角句号（.）和短划线（-）不能作为首尾字符，更不能连续使用。
      -   Windows实例：字符长度为2~15，不支持半角句号（.），不能全是数字。允许大小写英文字母、数字和短划线（-）。
      -   其他类型实例（Linux等）：字符长度为2~64，支持多个半角句号（.），半角句号之间为一段，每段允许大小写英文字母、数字和短划线（-）。 */
      HostName?: string;
      /** 实例所属的可用区ID。 */
      ZoneId?: string;
      /** 系统盘的云盘种类。取值范围：

      -   cloud：普通云盘。
      -   cloud_efficiency：高效云盘。
      -   cloud_ssd：SSD云盘。
      -   cloud_essd：ESSD云盘。您可以通过参数`SystemDisk.PerformanceLevel`设置云盘的性能等级。

      已停售的实例规格且非I/O优化实例默认值为cloud，否则默认值为cloud_efficiency。 */
      'SystemDisk.Category'?: string;
      /** 系统盘大小，单位为GiB。取值范围为20~500。

      该参数的取值必须大于或者等于max{20, ImageSize}。 */
      'SystemDisk.Size'?: number;
      /** 系统盘名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      'SystemDisk.DiskName'?: string;
      /** 系统盘描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
      'SystemDisk.Description'?: string;
      /** >该参数正在邀测中，暂未开放使用。 */
      'SystemDisk.Iops'?: number;
      /** 创建ESSD云盘作为系统盘使用时，设置云盘的性能等级。取值范围：

      - PL0（默认）：单盘最高随机读写IOPS 1万。
      - PL1：单盘最高随机读写IOPS 5万。
      - PL2：单盘最高随机读写IOPS 10万。
      - PL3：单盘最高随机读写IOPS 100万。

      有关如何选择ESSD性能等级，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。 */
      'SystemDisk.PerformanceLevel'?: string;
      /** 系统盘是否随实例释放。取值范围：

      - true：随实例释放。
      - false：不随实例释放。

      默认值：true。 */
      'SystemDisk.DeleteWithInstance'?: boolean;
      /** 系统盘采用的自动快照策略ID。 */
      'SystemDisk.AutoSnapshotPolicyId'?: string;
      /** ESSD AutoPL云盘预配置读写IOPS。取值范围：0~min{50000, 1000*容量-基准性能}。

      基准性能=min{1,800+50*容量, 50,000}

      > 当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)和[修改ESSD AutoPL云盘预配置信息](https://help.aliyun.com/document_detail/413275.html)。 */
      'SystemDisk.ProvisionedIops'?: number;
      /** 是否开启Burst（性能突发）。取值范围：

      - true：是。
      - false：否。 */
      'SystemDisk.BurstingEnabled'?: boolean;
      /** 是否为I/O优化实例。取值范围：

      -   none：非I/O优化。
      -   optimized：I/O优化。 */
      IoOptimized?: string;
      /** 实例的计费方式。取值范围：

      - PrePaid：包年包月。选择该类付费方式时，<ph>您必须确认自己的账号支持余额支付和信用支付</ph>，否则将返回`InvalidPayMethod`的错误提示。
      - PostPaid：按量付费。 */
      InstanceChargeType?: string;
      /** 购买资源的时长，单位为：月。当创建实例时，参数`InstanceChargeType`取值为`PrePaid`时该参数才生效且为必选值。取值范围：1、2、3、4、5、6、7、8、9、12、24、36、48、60。 */
      Period?: number;
      /** 网络计费方式。取值范围：

      - PayByBandwidth：按固定带宽计费。
      - PayByTraffic：按使用流量计费。

      > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。

       */
      InternetChargeType?: string;
      /** 是否启用实例操作系统配置。
      > 该参数即将被弃用，为提高兼容性，请尽量使用其他参数。 */
      EnableVmOsConfig?: boolean;
      /** 实例网络类型。取值范围：

      - classic：经典网络。
      - vpc：专有网络VPC。 */
      NetworkType?: string;
      /** 实例自定义数据，需要以Base64方式编码，原始数据最多为16 KB。 */
      UserData?: string;
      /** 密钥对名称。

      -   Windows实例，忽略该参数。即使填写了该参数，仍旧只执行`Password`的内容。
      -   Linux实例的密码登录方式会被初始化成禁止。 */
      KeyPairName?: string;
      /** 实例RAM角色名称。您可以使用RAM API [ListRoles](https://help.aliyun.com/document_detail/28713.html)查询您已创建的实例RAM角色。 */
      RamRoleName?: string;
      /** 自动释放时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC时间。格式为：yyyy-MM-ddTHH:mm:ssZ。

      - 如果秒（`ss`）取值不是`00`，则自动取为当前分钟（`mm`）开始时。

      - 最短释放时间为当前时间半小时之后。

      - 最长释放时间不能超过当前时间三年。 */
      AutoReleaseTime?: string;
      /** 按量实例的抢占策略。当参数`InstanceChargeType`取值为`PostPaid`时生效。取值范围：

      -   NoSpot：正常按量付费实例。
      -   SpotWithPriceLimit：设置上限价格的抢占式实例。
      -   SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。 */
      SpotStrategy?: string;
      /** 设置实例的每小时最高价格。支持最大3位小数，参数`SpotStrategy`取值为`SpotWithPriceLimit`时生效。  */
      SpotPriceLimit?: number;
      /** 抢占式实例的保留时长，单位为小时。取值范围为0~6。

      - 保留时长2~6正在邀测中，如需开通请提交工单。
      - 取值为0，则为无保护期模式。

      默认值：1。 */
      SpotDuration?: number;
      /** 实例、块存储和弹性网卡所在的企业资源组ID。 */
      ResourceGroupId?: string;
      /** 启动模板所在的企业资源组ID。 */
      TemplateResourceGroupId?: string;
      /** 是否为操作系统开启安全加固。取值范围：

      -   Active：启用安全加固，只对公共镜像生效。
      -   Deactive：不启用安全加固，对所有镜像类型生效。 */
      SecurityEnhancementStrategy?: string;
      /** 实例私网IP地址。

      专有网络VPC类型ECS实例设置私网IP地址时，必须从虚拟交换机（`VSwitchId`）的空闲网段中选择。 */
      PrivateIpAddress?: string;
      /** 部署集ID。 */
      DeploymentSetId?: string;
      /** 为主网卡指定随机生成的IPv6地址数量。取值范围为1~10。 */
      Ipv6AddressCount?: number;
      /** 数据盘信息列表。 */
      DataDisk?: Array<{
        /** 数据盘采用的自动快照策略ID。 */
        AutoSnapshotPolicyId?: string;
        /** 是否开启Burst（性能突发）。取值范围：

        - true：是。
        - false：否。 */
        BurstingEnabled?: boolean;
        /** 数据盘n的云盘种类。取值范围：

        -   cloud：普通云盘。
        -   cloud_efficiency：高效云盘。
        -   cloud_ssd：SSD云盘。
        -   cloud_essd：ESSD云盘。

        I/O优化实例的默认值为cloud_efficiency，非I/O优化实例的默认值为cloud。 */
        Category?: string;
        /** 表示数据盘是否随实例释放。取值范围：

        - true：随实例释放。
        - false：不随实例释放。

        默认值：true。 */
        DeleteWithInstance?: boolean;
        /** 数据盘描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
        Description?: string;
        /** 
        > 该参数即将停止使用，为提高代码兼容性，建议您尽量不要使用该参数。 */
        Device?: string;
        /** 数据盘名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
        DiskName?: string;
        /** 数据盘是否加密。 */
        Encrypted?: string;
        /** 创建ESSD云盘作为数据盘使用时，设置云盘的性能等级。N的取值必须和`DataDisk.N.Category=cloud_essd`中的N保持一致。取值范围：

        - PL0：单盘最高随机读写IOPS 1万。
        - PL1（默认）：单盘最高随机读写IOPS 5万。
        - PL2：单盘最高随机读写IOPS 10万。
        - PL3：单盘最高随机读写IOPS 100万。

        有关如何选择ESSD性能等级，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。 */
        PerformanceLevel?: string;
        /** ESSD AutoPL云盘预配置读写IOPS。取值范围：0~min{50000, 1000*容量-基准性能}。

        基准性能=min{1,800+50*容量, 50,000}

        > 当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)和[修改ESSD AutoPL云盘预配置信息](https://help.aliyun.com/document_detail/413275.html)。 */
        ProvisionedIops?: number;
        /** 第N个数据盘的容量大小，N的取值范围为1~16，内存单位为GiB。取值范围：

        -   cloud：5~2000
        -   cloud_efficiency：20~32768
        -   cloud_ssd：20~32768
        -   cloud_essd：具体取值范围与`DataDisk.N.PerformanceLevel`的取值有关。
            - PL0：40~32768。
            - PL1：20~32768。
            - PL2：461~32768。
            - PL3：1261~32768。

        该参数的取值必须大于等于参数`SnapshotId`指定的快照的大小。 */
        Size?: number;
        /** 创建数据盘N使用的快照。N的取值范围为1~16。指定参数`DataDisk.N.SnapshotId`后，参数`DataDisk.N.Size`会被忽略，实际创建的云盘大小为指定的快照的大小。

        >不能使用早于2013年7月15日（含）创建的快照，请求会报错被拒绝。 */
        SnapshotId?: string }>;
      /** 弹性网卡信息。 */
      NetworkInterface?: Array<{
        /** 辅助弹性网卡描述信息。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。`NetworkInterface.N`的N取值不能大于1。 */
        Description?: string;
        /** 弹性网卡类型。N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。

        参数取值范围：

        - Primary：主网卡。
        - Secondary：辅助网卡。

        默认值：Secondary。 */
        InstanceType?: string;
        /** 弹性网卡名称。

        您需要注意：

        - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。

        - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则无需设置该参数。 */
        NetworkInterfaceName?: string;
        /** 主网卡的通讯模式。参数取值范围：

        - Standard：使用TCP通讯模式。
        - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
         */
        NetworkInterfaceTrafficMode?: string;
        /** 添加一张弹性网卡并设置主IP地址。

        您需要注意：

        - N的取值范围为1~2：
            - 设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡。如果`Amount`参数取值大于1，且设置了主网卡并设置了该参数，则表示在批量创建ECS实例时，以指定的主IP地址为起始地址，依次为多台ECS实例分配连续的主IP地址，但需要注意，此时不支持再为实例绑定辅助网卡。
            - 设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡，但需要注意，如果`Amount`参数取值大于1且已为主网卡设置了该参数，则不支持再设置辅助网卡（即不支持再设置`NetworkInterface.2.InstanceType=Secondary`）。

        - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则该参数的作用等同于`PrivateIpAddress`，但需要注意不能同时设置`PrivateIpAddress`参数。

        - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，表示为辅助网卡设置主IP地址。默认从网卡所属的交换机网段中随机选择一个IP地址。

        > 创建ECS实例时，您最多能添加一张辅助网卡。实例创建成功后，您可以调用[CreateNetworkInterface](https://help.aliyun.com/document_detail/58504.html)和[AttachNetworkInterface](https://help.aliyun.com/document_detail/58515.html)添加更多的辅助网卡。 */
        PrimaryIpAddress?: string;
        /** 弹性网卡所属的安全组ID。

        您需要注意：

        - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。

        - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则必须设置该参数。此时该参数的作用等同于`SecurityGroupId`，但需要注意不能再设置`SecurityGroupId`、`SecurityGroupIds.N`或`NetworkInterface.N.SecurityGroupIds.N`。

        - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则该参数为非必填参数。默认值为ECS实例所属的安全组。 */
        SecurityGroupId?: string;
        /** 弹性网卡所属的一个或多个安全组ID。

        - 第一个N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。
        - 第二个N表示可以指定一个或多个安全组ID。N的取值范围与实例能够加入安全组配额有关，更多信息，请参见[安全组限制](https://help.aliyun.com/document_detail/25412.html#SecurityGroupQuota1)。

        您需要注意：

        - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则必须设置该参数或`NetworkInterface.N.SecurityGroupId`。此时该参数的作用等同于`SecurityGroupIds.N`，但需要注意不能再设置`SecurityGroupId`、`SecurityGroupIds.N`或`NetworkInterface.N.SecurityGroupId`。

        - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则该参数为非必填参数。默认值为ECS实例所属的安全组。 */
        SecurityGroupIds?: Array<string>;
        /** 弹性网卡所属的虚拟交换机ID。

        您需要注意：

        - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。

        - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则必须设置该参数。此时该参数的作用等同于`VSwitchId`，但需要注意不能同时设置`VSwitchId`参数。

        - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则该参数为非必填参数。默认值为ECS实例所属的虚拟交换机。 */
        VSwitchId?: string }>;
      /** 启动模板的标签对信息。 */
      Tag?: Array<{
        /** 实例、块存储和弹性网卡的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** 实例、块存储和弹性网卡的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。 */
        Value?: string }>;
      /** 实例加入的一个或多个安全组。N的取值范围与实例能够加入安全组配额有关，更多信息，请参见[使用限制](https://help.aliyun.com/document_detail/25412.html)。

      > 不支持同时指定`SecurityGroupId`和`SecurityGroupIds.N`。 */
      SecurityGroupIds?: Array<string>;
      /** 系统盘是否加密。取值范围：

      - true：加密。
      - false：不加密。

      默认值：false。

      >中国香港D可用区、新加坡A可用区暂不支持在创建实例时加密系统盘。 */
      'SystemDisk.Encrypted'?: string;
      /** 实例释放保护属性，指定是否支持通过控制台或API（[DeleteInstance](https://help.aliyun.com/document_detail/25507.html)）释放实例。取值范围：
      - true：开启实例释放保护。

      - false：关闭实例释放保护。

      默认值：false。

      >该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。 */
      DeletionProtection?: boolean;
      /** 设置突发性能实例的运行模式。取值范围：

      - Standard：标准模式，实例性能请参见[什么是突发性能实例](https://help.aliyun.com/document_detail/59977.html)下的性能约束模式章节。
      - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](https://help.aliyun.com/document_detail/59977.html)下的无性能约束模式章节。 */
      CreditSpecification?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例启动模板ID。 */
      LaunchTemplateId?: string;
      /** 实例启动模板版本号。 */
      LaunchTemplateVersionNumber?: number;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateLaunchTemplateVersion
   * ## 接口说明
   * 当您想修改某个版本的参数时，能通过新建模板版本的方式修改。每个实例启动模板最多创建30个版本。
   * @summary: 调用CreateLaunchTemplateVersion根据指定的ECS实例启动模板创建一个版本。
   */
  export namespace CreateLaunchTemplateVersion {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 启动模板ID。更多信息，请调用[DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html)。您必须指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板。 */
      LaunchTemplateId?: string;
      /** 实例启动模板名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      LaunchTemplateName?: string;
      /** 实例启动模板版本的描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
      VersionDescription?: string;
      /** 镜像ID，启动实例时选择的镜像资源。您可以通过[DescribeImages](https://help.aliyun.com/document_detail/25534.html)查询您可以使用的镜像资源。 */
      ImageId?: string;
      /** 镜像来源。
      > 该参数即将被弃用，为提高兼容性，请尽量使用其他参数。 */
      ImageOwnerAlias?: string;
      /** 是否使用镜像预设的密码。取值范围：
      - true。
      - false。

      默认值：false。

      > 使用该参数时，Password参数必须为空。同时您需要确保使用的镜像已经设置了密码。 

       */
      PasswordInherit?: boolean;
      /** 实例的资源规格。更多信息，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)，您也可以调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)接口获得最新的规格表。  */
      InstanceType?: string;
      /** 指定新创建实例所属于的安全组ID。同一个安全组内的实例之间可以互相访问。

      > 不支持同时指定`SecurityGroupId`和`SecurityGroupIds.N`。 */
      SecurityGroupId?: string;
      /** 专有网络VPC ID。 */
      VpcId?: string;
      /** 创建VPC类型实例时需要指定虚拟交换机ID。 */
      VSwitchId?: string;
      /** 实例名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      InstanceName?: string;
      /** 实例描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
      Description?: string;
      /** 公网入带宽最大值，单位为Mbit/s。取值范围：

      - 当所购公网出带宽小于等于10 Mbit/s时：1~10，默认为10。
      - 当所购公网出带宽大于10 Mbit/s时：1~`InternetMaxBandwidthOut`的取值，默认为`InternetMaxBandwidthOut`的取值。 */
      InternetMaxBandwidthIn?: number;
      /** 公网出带宽最大值，单位为Mbit/s。取值范围为0~100。 */
      InternetMaxBandwidthOut?: number;
      /** 云服务器的主机名。

      -   半角句号（.）和短划线（-）不能作为首尾字符，更不能连续使用。
      -   Windows实例：字符长度为2~15，不支持半角句号（.），不能全是数字。允许大小写英文字母、数字和短划线（-）。
      -   其他类型实例（Linux等）：字符长度为2~64，支持多个半角句号（.），半角句号之间为一段，每段允许大小写英文字母、数字和短划线（-）。 */
      HostName?: string;
      /** 实例所属的可用区ID。 */
      ZoneId?: string;
      /** 系统盘的云盘种类。取值范围：

      -   cloud：普通云盘。
      -   cloud_efficiency：高效云盘。
      -   cloud_ssd：SSD云盘。
      -   cloud_essd：ESSD云盘。您可以通过参数`SystemDisk.PerformanceLevel`设置云盘的性能等级。

      已停售的实例规格且非I/O优化实例默认值为cloud，否则默认值为cloud_efficiency。 */
      'SystemDisk.Category'?: string;
      /** 系统盘大小，单位为GiB。取值范围为20~500。

      该参数的取值必须大于或者等于max{20, ImageSize}。 */
      'SystemDisk.Size'?: number;
      /** 系统盘名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      'SystemDisk.DiskName'?: string;
      /** 系统盘描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
      'SystemDisk.Description'?: string;
      /** >该参数暂未开放使用。 */
      'SystemDisk.Iops'?: number;
      /** 创建ESSD云盘作为系统盘使用时，设置云盘的性能等级。取值范围：

      - PL0（默认）：单盘最高随机读写IOPS 1万。
      - PL1：单盘最高随机读写IOPS 5万。
      - PL2：单盘最高随机读写IOPS 10万。
      - PL3：单盘最高随机读写IOPS 100万。

      有关如何选择ESSD性能等级，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。 */
      'SystemDisk.PerformanceLevel'?: string;
      /** 系统盘是否随实例释放。取值范围：

      - true：随实例释放。
      - false：不随实例释放。

      默认值：true。 */
      'SystemDisk.DeleteWithInstance'?: boolean;
      /** 系统盘采用的自动快照策略ID。 */
      'SystemDisk.AutoSnapshotPolicyId'?: string;
      /** 是否修改ESSD AutoPL云盘预配置读写IOPS。取值范围：0~min{50000, 1000*容量-基准性能}。

      基准性能=min{1,800+50*容量, 50,000}。

      > 当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)和[修改ESSD AutoPL云盘预配置信息](https://help.aliyun.com/document_detail/413275.html)。

       */
      'SystemDisk.ProvisionedIops'?: number;
      /** 是否开启Burst（性能突发）。取值范围：

      - true：是。
      - false：否。 */
      'SystemDisk.BurstingEnabled'?: boolean;
      /** 是否为I/O优化实例。取值范围：

      -   none：非I/O优化。
      -   optimized：I/O优化。 */
      IoOptimized?: string;
      /** 实例的计费方式。取值范围：

      - PrePaid：包年包月。选择该类计费方式时，您必须确认自己的账号支持余额支付和信用支付，否则将返回`InvalidPayMethod`的错误提示。
      - PostPaid：按量付费。
       */
      InstanceChargeType?: string;
      /** 购买资源的时长，单位为：月。当参数`InstanceChargeType`取值为`PrePaid`时该参数才生效且为必选值。取值范围：1、2、3、4、5、6、7、8、9、12、24、36、48、60。 */
      Period?: number;
      /** 公网出方向带宽计费方式。取值范围：

      - PayByBandwidth：按固定带宽计费。
      - PayByTraffic：按使用流量计费。

      > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。

       */
      InternetChargeType?: string;
      /** 是否启用实例操作系统配置。 */
      EnableVmOsConfig?: boolean;
      /** 实例网络类型。取值范围：

      - classic：经典网络。
      - vpc：专有网络VPC。 */
      NetworkType?: string;
      /** 实例自定义数据，需要以Base64方式编码，原始数据最多为16 KB。 */
      UserData?: string;
      /** 密钥对名称。

      -   Windows实例，忽略该参数。即使填写了该参数，仍旧只执行`Password`的内容。
      -   Linux实例的密码登录方式会被初始化成禁止。 */
      KeyPairName?: string;
      /** 实例RAM角色名称。您可以使用RAM API [ListRoles](https://help.aliyun.com/document_detail/28713.html)查询您已创建的实例RAM角色。 */
      RamRoleName?: string;
      /** 自动释放时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC时间。格式为：yyyy-MM-ddTHH:mm:ssZ。

      - 如果秒（`ss`）取值不是`00`，则自动取为当前分钟（`mm`）开始时。

      - 最短释放时间为当前时间半小时之后。

      - 最长释放时间不能超过当前时间三年。 */
      AutoReleaseTime?: string;
      /** 按量实例的抢占策略。当参数`InstanceChargeType`取值为`PostPaid`时生效。取值范围：

      -   NoSpot：正常按量付费实例。
      -   SpotWithPriceLimit：设置上限价格的抢占式实例。
      -   SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。 */
      SpotStrategy?: string;
      /** 设置实例的每小时最高价格。支持最大3位小数。 */
      SpotPriceLimit?: number;
      /** 抢占式实例的保留时长，单位为小时。取值范围：0~6。

      - 保留时长2~6正在邀测中，如需开通请提交工单。
      - 取值为0，则为无保护期模式。

      默认值：1。 */
      SpotDuration?: number;
      /** 资源组ID。 */
      ResourceGroupId?: string;
      /** 是否为操作系统开启安全加固。取值范围：

      -   Active：启用安全加固，只对公共镜像生效。
      -   Deactive：不启用安全加固，对所有镜像类型生效。 */
      SecurityEnhancementStrategy?: string;
      /** 实例私网IP地址。

      专有网络VPC类型ECS实例设置私网IP地址时，必须从虚拟交换机（`VSwitchId`）的空闲网段中选择。 */
      PrivateIpAddress?: string;
      /** 为主网卡指定随机生成的IPv6地址数量。取值范围为1~10。 */
      Ipv6AddressCount?: number;
      /** 部署集ID。 */
      DeploymentSetId?: string;
      /** 数据盘列表。 */
      DataDisk?: Array<{
        /** 数据盘采用的自动快照策略ID。 */
        AutoSnapshotPolicyId?: string;
        /** 是否开启Burst（性能突发）。取值范围：

        - true：是。
        - false：否。 */
        BurstingEnabled?: boolean;
        /** 数据盘N的云盘种类。取值范围：

        -   cloud：普通云盘。
        -   cloud_efficiency：高效云盘。
        -   cloud_ssd：SSD云盘。
        -   cloud_essd：ESSD云盘。

        I/O优化实例的默认值为cloud_efficiency，非I/O优化实例的默认值为cloud。 */
        Category?: string;
        /** 表示数据盘是否随实例释放。取值范围：

        - true：随实例释放。
        - false：不随实例释放。

        默认值：true。 */
        DeleteWithInstance?: boolean;
        /** 数据盘描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
        Description?: string;
        /** >该参数即将废弃，不建议使用。 */
        Device?: string;
        /** 数据盘名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
        DiskName?: string;
        /** 数据盘是否加密。 */
        Encrypted?: string;
        /** 创建ESSD云盘作为数据盘使用时，设置云盘的性能等级。N的取值必须和`DataDisk.N.Category=cloud_essd`中的N保持一致。取值范围：

        - PL0：单盘最高随机读写IOPS 1万。
        - PL1（默认）：单盘最高随机读写IOPS 5万。
        - PL2：单盘最高随机读写IOPS 10万。
        - PL3：单盘最高随机读写IOPS 100万。

        有关如何选择ESSD性能等级，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。 */
        PerformanceLevel?: string;
        /** 是否修改ESSD AutoPL云盘预配置读写IOPS。取值范围：0~min{50000, 1000*容量-基准性能}。

        基准性能=min{1,800+50*容量, 50,000}。

        > 当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)和[修改ESSD AutoPL云盘预配置信息](https://help.aliyun.com/document_detail/413275.html)。

         */
        ProvisionedIops?: number;
        /** 第N个数据盘的容量大小，N的取值范围为1~16，内存单位为GiB。取值范围：

        -   cloud：5~2000。
        -   cloud_efficiency：20~32768。
        -   cloud_ssd：20~32768。
        -   cloud_essd：具体取值范围与`DataDisk.N.PerformanceLevel`的取值有关。   
            - PL0：40~32768。
            - PL1：20~32768。
            - PL2：461~32768。
            - PL3：1261~32768。

        该参数的取值必须大于等于参数`SnapshotId`指定的快照的大小。 */
        Size?: number;
        /** 创建数据盘N使用的快照。N的取值范围为1~16。指定参数`DataDisk.N.SnapshotId`后，参数`DataDisk.N.Size`会被忽略，实际创建的云盘大小为指定的快照的大小。

        不能使用早于2013年7月15日（含）创建的快照，请求会报错被拒绝。 */
        SnapshotId?: string }>;
      /** 弹性网卡信息。 */
      NetworkInterface?: Array<{
        /** 辅助弹性网卡描述信息。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。`NetworkInterface.N`的N取值不能大于1。 */
        Description?: string;
        /** 弹性网卡类型。N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。

        参数取值范围：

        - Primary：主网卡。
        - Secondary：辅助网卡。

        默认值：Secondary。 */
        InstanceType?: string;
        /** 辅助弹性网卡名称。`NetworkInterface.N`的N取值不能大于1。 */
        NetworkInterfaceName?: string;
        /** 主网卡的通讯模式。取值范围：

        - Standard：使用TCP通讯模式。
        - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
         */
        NetworkInterfaceTrafficMode?: string;
        /** 辅助弹性网卡的主私有IP地址。`NetworkInterface.N`的N取值不能大于1。 */
        PrimaryIpAddress?: string;
        /** 辅助弹性网卡所属安全组的ID。辅助弹性网卡的安全组和实例的安全组必须在同一个VPC下。`NetworkInterface.N`的N取值不能大于1。

        > 不支持同时指定`NetworkInterface.N.SecurityGroupId`和`NetworkInterface.N.SecurityGroupIds.N`。 */
        SecurityGroupId?: string;
        /** 辅助弹性网卡加入的一个或多个安全组。安全组和辅助弹性网卡必须在同一个专有网络VPC中。`SecurityGroupIds.N`的N取值范围与辅助弹性网卡能够加入安全组配额有关。更多信息，请参见[使用限制](https://help.aliyun.com/document_detail/25412.html)。`NetworkInterface.N`的N取值不能大于1。

        > 不支持同时指定`NetworkInterface.N.SecurityGroupId`和`NetworkInterface.N.SecurityGroupIds.N`。 */
        SecurityGroupIds?: Array<string>;
        /** 辅助弹性网卡所属的虚拟交换机ID。实例与辅助弹性网卡必须在同一VPC的同一可用区中，可以分属于不同交换机。`NetworkInterface.N`的N取值不能大于1。 */
        VSwitchId?: string }>;
      /** 标签列表。 */
      Tag?: Array<{
        /** 实例、块存储和主网卡的标签键。N的取值范围：1~5。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** 实例、块存储和主网卡的标签值。N的取值范围：1~5。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Value?: string }>;
      /** 实例加入的一个或多个安全组。N的取值范围与实例能够加入安全组配额有关。更多信息，[使用限制](https://help.aliyun.com/document_detail/25412.html)。

      > 不支持同时指定`SecurityGroupId`和`SecurityGroupIds.N`。 */
      SecurityGroupIds?: Array<string>;
      /** 系统盘是否加密。取值范围：

      - true：加密。

      - false：不加密。

      默认值：false。

      >中国香港D可用区、新加坡A可用区暂不支持在创建实例时加密系统盘。 */
      'SystemDisk.Encrypted'?: string;
      /** 实例释放保护属性，指定是否支持通过控制台或API（[DeleteInstance](https://help.aliyun.com/document_detail/25507.html)）释放实例。取值范围：
      - true：开启实例释放保护。

      - false：关闭实例释放保护。

      默认值：false。

      >该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。 */
      DeletionProtection?: boolean;
      /** 设置突发性能实例的运行模式。取值范围：

      - Standard：标准模式，实例性能请参见[什么是突发性能实例](https://help.aliyun.com/document_detail/59977.html)下的性能约束模式章节。
      - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](https://help.aliyun.com/document_detail/59977.html)下的无性能约束模式章节。 */
      CreditSpecification?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 启动模板ID。更多信息，请参见[DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html)。

      使用启动模板创建实例时，您必须指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板。 */
      LaunchTemplateId?: string;
      /** 实例启动模板版本号。 */
      LaunchTemplateVersionNumber?: number;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateNatGateway
   * undefined
   * @deprecated
   */
  export namespace CreateNatGateway {
    export type Params = {
      RegionId: string;
      VpcId: string;
      Name?: string;
      Description?: string;
      ClientToken?: string;
      BandwidthPackage: Array<{
        Bandwidth?: number;
        IpCount?: number;
        Zone?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      BandwidthPackageIds?: Array<string>;
      ForwardTableIds?: Array<string>;
      NatGatewayId?: string;
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateNetworkInterface
   * ## 接口说明
   * 
   * 调用该接口时，请注意：
   * - 该接口为同步接口，新创建的弹性网卡为可用（`Available`）状态，可以直接进行附加操作。
   * - 若创建接口返回结果中NetworkInterfaceId为空，请再次尝试创建弹性网卡。
   * - 一个弹性网卡只能附加到一台专有网络的实例。
   * - 弹性网卡重新附加到另一台实例时，其属性不变，网络流量也会重定向到新的实例。
   * - 创建弹性网卡时，如果您需要设置IPv6地址，则需要确保指定的交换机开通了IPv6。更多信息，请参见[什么是IPv6网关](https://help.aliyun.com/document_detail/98896.html)。
   * - 一个账号在一个阿里云地域内创建弹性网卡有数量限制。可在ECS管理控制台查看资源配额。具体操作，请参见[查看和提升资源配额](https://help.aliyun.com/document_detail/184115.html)。   
   * 
   * **调用示例详情参见**[创建弹性网卡](https://help.aliyun.com/document_detail/471552.html)。
   * @summary: 创建一个弹性网卡（ENI）。
   */
  export namespace CreateNetworkInterface {
    export type Params = {
      /** 实例所在地域的ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 弹性网卡的标签。 */
      Tag?: Array<{
        /** 弹性网卡的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含`http://`或者`https://`。 */
        Key?: string;
        /** 弹性网卡的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以acs:开头，不能包含`http://`或者`https://`。 */
        Value?: string }>;
      /** 资源组ID。您可以调用[ListResourceGroups](https://help.aliyun.com/document_detail/158855.html)查询资源组信息。 */
      ResourceGroupId?: string;
      /** 指定VPC的交换机ID。弹性网卡的私网IP地址在交换机的IP地址段内的空闲地址中取值。 */
      VSwitchId: string;
      /** 弹性网卡的主私有IP地址。

      指定IP必须是在所属交换机的地址段内的空闲地址，不指定则默认随机分配该交换机中的空闲地址。 */
      PrimaryIpAddress?: string;
      /** 加入一个安全组。安全组和弹性网卡必须在同一个专有网络VPC中。

      > 调用接口时，您必须设置`SecurityGroupId`或`SecurityGroupIds.N`其中一个，但不支持同时设置。 */
      SecurityGroupId?: string;
      /** 弹性网卡名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。

      默认值：空。 */
      NetworkInterfaceName?: string;
      /** 弹性网卡的描述信息。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。

      默认值：空。 */
      Description?: string;
      /** >该参数已废弃。 */
      Visible?: boolean;
      /** >该参数已废弃。 */
      InstanceType?: string;
      /** >该参数已废弃。 */
      BusinessType?: string;
      /** 指定私有IP地址数量，让ECS为您自动创建IP地址。 */
      SecondaryPrivateIpAddressCount?: number;
      /** 弹性网卡队列数。取值范围：1~2048

      附加弹性网卡时，该值必须少于实例规格支持单块网卡的最大队列数。实例规格的单块网卡最大队列数可以通过[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)接口查询`MaximumQueueNumberPerEni`字段。

      默认值：空。在附加时会采用实例规格的弹性网卡默认队列数，实例规格的弹性网卡默认队列数可以通过[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)接口查询`SecondaryEniQueueNumber`字段。
       */
      QueueNumber?: number;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 弹性网卡的通讯模式。取值范围：

      - Standard：使用TCP通讯模式。
      - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。

      > HighPerformance参数值只支持RDMA增强型实例规格族c7re，且RDMA模式的弹性网卡数量不能超过该实例规格族的限制。c7re正在华北2（北京）可用区K进行邀测。更多信息，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。

      默认值：Standard。 */
      NetworkInterfaceTrafficMode?: string;
      /** >该参数正在邀测中，暂未开放使用。 */
      QueuePairNumber?: number;
      /** 加入一个或多个安全组。安全组和弹性网卡必须在同一个专有网络VPC中。N的取值范围与弹性网卡能够加入安全组配额有关，更多信息，请参见[使用限制](https://help.aliyun.com/document_detail/25412.html)。

      > 调用接口时，您必须设置`SecurityGroupId`或`SecurityGroupIds.N`其中一个，但不支持同时设置。 */
      SecurityGroupIds?: Array<string>;
      /** 从弹性网卡所属交换机的CIDR地址段内的空闲地址中选择一个或多个辅助私有IP地址。N的取值范围：0~10。

      > 分配辅助私有IP地址时，您不能同时指定参数`PrivateIpAddress.N`和参数`SecondaryPrivateIpAddressCount`。 */
      PrivateIpAddress?: Array<string>;
      /** 为弹性网卡指定一个或多个IPv6地址。支持设置最多10个IPv6地址，即N的取值范围：1~10。

      取值示例：Ipv6Address.1=2001:db8:1234:1a00::\*\*\*\*

      > 如果您需要为弹性网卡设置IPv6地址，则必须设置`Ipv6Addresses.N`或者`Ipv6AddressCount`的其中一个，但不能同时设置这两个参数。 */
      Ipv6Address?: Array<string>;
      /** 为弹性网卡指定随机生成的IPv6地址数量。取值范围：1~10。

      > 如果您需要为弹性网卡设置IPv6地址，则必须设置`Ipv6Addresses.N`或者`Ipv6AddressCount`的其中一个，但不能同时设置这两个参数。 */
      Ipv6AddressCount?: number;
      /** 为弹性网卡指定一个或多个IPv4前缀。N的取值范围：1~10。
      > 如果您需要为弹性网卡设置IPv4前缀，则必须设置Ipv4Prefix.N或者Ipv4PrefixCount的其中一个，但不能同时设置这两个参数。 */
      Ipv4Prefix?: Array<string>;
      /** 为弹性网卡指定一个或多个IPv4前缀。取值范围：1~10。
      > 如果您需要为弹性网卡设置IPv4前缀，则必须设置Ipv4Prefix.N或者Ipv4PrefixCount的其中一个，但不能同时设置这两个参数。 */
      Ipv4PrefixCount?: number;
      /** 为弹性网卡指定一个或多个IPv6前缀。N的取值范围：1~10。
      > 如果您需要为弹性网卡设置IPv6前缀，则必须设置Ipv6Prefix.N或者Ipv6PrefixCount的其中一个，但不能同时设置这两个参数。 */
      Ipv6Prefix?: Array<string>;
      /** 为弹性网卡指定一个或多个IPv6前缀。取值范围：1~10。
      > 如果您需要为弹性网卡设置IPv6前缀，则必须设置Ipv6Prefix.N或者Ipv6PrefixCount的其中一个，但不能同时设置这两个参数。 */
      Ipv6PrefixCount?: number;
      /** 释放实例时是否保留网卡。取值范围：

      - true：不保留。

      - false：保留。 */
      DeleteOnRelease?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 弹性网卡的描述信息。 */
      Description?: string;
      /** 弹性网卡已分配的IPv4前缀集合。 */
      Ipv4PrefixSets?: Array<{
        /** IPv4前缀。 */
        Ipv4Prefix?: string }>;
      /** 弹性网卡已分配的IPv6前缀集合。 */
      Ipv6PrefixSets?: Array<{
        /** IPv6前缀。 */
        Ipv6Prefix?: string }>;
      /** 弹性网卡已分配的IPv6地址。 */
      Ipv6Sets?: Array<{
        /** IPv6地址。 */
        Ipv6Address?: string }>;
      /** 弹性网卡的MAC地址。 */
      MacAddress?: string;
      /** 弹性网卡ID。 */
      NetworkInterfaceId?: string;
      /** 弹性网卡的名称。 */
      NetworkInterfaceName?: string;
      /** 弹性网卡的所属账号ID。 */
      OwnerId?: string;
      /** 弹性网卡的私网IP地址。 */
      PrivateIpAddress?: string;
      /** PrivateIpSet组成的集合。 */
      PrivateIpSets?: Array<{
        /** 是否是主私网IP地址。 */
        Primary?: boolean;
        /** 实例的私网IP地址。 */
        PrivateIpAddress?: string }>;
      /** 请求ID。 */
      RequestId?: string;
      /** 资源组ID。 */
      ResourceGroupId?: string;
      /** 所属的安全组集合。 */
      SecurityGroupIds?: Array<string>;
      /** 弹性网卡对应的虚商ID。 */
      ServiceID?: number;
      /** 该弹性网卡的使用者是否为云产品或虚商。 */
      ServiceManaged?: boolean;
      /** 弹性网卡的状态。 */
      Status?: string;
      /** 标签。 */
      Tags?: Array<{
        /** 标签键。 */
        TagKey?: string;
        /** 标签值。 */
        TagValue?: string }>;
      /** 弹性网卡的类型。 */
      Type?: string;
      /** VPC的交换机ID。 */
      VSwitchId?: string;
      /** 网卡所属的专有网络VPC ID。 */
      VpcId?: string;
      /** 可用区ID。 */
      ZoneId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateNetworkInterfacePermission
   * 调用CreateNetworkInterfacePermission为阿里云合作伙伴（认证ISV）或者个人用户授权弹性网卡权限。
   * @summary: 调用CreateNetworkInterfacePermission为阿里云合作伙伴（认证ISV）或者个人用户授权弹性网卡权限。
   */
  export namespace CreateNetworkInterfacePermission {
    export type Params = {
      /** 弹性网卡权限的地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 阿里云合作伙伴（认证ISV）账号ID或者个人用户ID。 */
      AccountId: number;
      /** 弹性网卡ID。 */
      NetworkInterfaceId: string;
      /** 弹性网卡权限动作。当前仅支持InstanceAttach。

      InstanceAttach：允许授权的用户将您的弹性网卡挂载到对方的ECS实例上。ECS实例必须和弹性网卡在同一个可用区中。 */
      Permission: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 弹性网卡权限列表组成的信息集合。 */
      NetworkInterfacePermission?: {
        /** 阿里云合作伙伴（认证ISV）账号ID。 */
        AccountId?: number;
        /** 弹性网卡ID。 */
        NetworkInterfaceId?: string;
        /** 弹性网卡权限ID。 */
        NetworkInterfacePermissionId?: string;
        /** 弹性网卡权限。 */
        Permission?: string;
        /** 弹性网卡权限状态。可能值：

        - Pending：授权中。
        - Granted：已授权。
        - Revoking：撤销授权中。
        - Revoked：已撤销授权。 */
        PermissionState?: string;
        /** 阿里云服务名称。 */
        ServiceName?: string };
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreatePhysicalConnection
   * undefined
   * @deprecated
   */
  export namespace CreatePhysicalConnection {
    export type Params = {
      RegionId: string;
      AccessPointId: string;
      Type?: string;
      LineOperator: string;
      bandwidth?: number;
      PeerLocation: string;
      PortType?: string;
      RedundantPhysicalConnectionId?: string;
      Description?: string;
      Name?: string;
      CircuitCode?: string;
      ClientToken: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      PhysicalConnectionId?: string;
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreatePrefixList
   * - 前缀列表是一些网络前缀（即CIDR地址块）的集合，您可以在配置其他资源的网络规则时引用前缀列表。关于前缀列表的详细说明，请参见[前缀列表概述](https://help.aliyun.com/document_detail/206223.html)。
   * - 创建前缀列表时：
   * 
   *     - 您必须为该前缀列表指定地址族（IPv4或IPv6），同一前缀列表中的条目只能属于同一地址族，且地址族创建后不能修改。
   *     - 您必须为该前缀列表设置最大条目容量，且创建后不能修改。
   *     - 您可以为该前缀列表指定一些条目，条目由CIDR地址块和描述构成，条目数量不能超过您设置的最大条目容量。
   * 
   * - 关于前缀列表及其他资源的使用限制说明，请参见[使用限制](https://help.aliyun.com/document_detail/25412.html)。
   * 
   * - 通过RAM用户可以让您避免与其他用户共享阿里云账号密钥，按需为用户分配最小权限，从而降低企业的信息安全风险。关于如何为RAM用户授予前缀列表相关权限的具体操作，请参见[为RAM用户授予前缀列表相关权限](https://help.aliyun.com/document_detail/206175.html)。
   * @summary: 调用CreatePrefixList创建一个前缀列表。
   */
  export namespace CreatePrefixList {
    export type Params = {
      /** 地域ID。 */
      RegionId: string;
      /** 前缀列表支持的最大条目容量。取值范围：1~200。 */
      MaxEntries: number;
      /** 前缀列表的地址族。取值范围：

      - IPv4。
      - IPv6。 */
      AddressFamily: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 前缀列表的名称。长度为2~128个字符，必须以大小字母或中文开头，不能以`http://`、`https://`、`com.aliyun`和`com.alibabacloud`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。 */
      PrefixListName: string;
      /** 前缀列表的描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。 */
      Description?: string;
      /** 前缀列表条目信息。 */
      Entry?: Array<{
        /** 前缀列表条目的CIDR地址块信息。N的取值范围：0~200。注意事项：

        - 前缀列表的条目数量不能大于最大条目容量（`MaxEntries`）。
        - 条目中的CIDR地址块类型根据地址族决定，一个前缀列表不能同时包含IPv4和IPv6的CIDR地址块。
        - 多个条目中的CIDR地址块不能重复。例如，您不能设置两个192.168.1.0/24。
        - 支持设置单IP地址，系统会自动转换为CIDR地址块。例如，您设置192.168.1.100，系统会自动转换成192.168.1.100/32。
        - 如果使用IPv6 CIDR地址块，系统会自动转换成零压缩表示形式且字母转换为小写。例如，您设置2001:0DB8:0000:0000:0000:0000:0000:0000/32，系统会自动转换成2001:db8::/32。

        关于CIDR地址块的详细信息，请参见[什么是CIDR](https://help.aliyun.com/document_detail/40637.html#title-gu4-uzk-12r)。

        默认值：空。 */
        Cidr: string;
        /** 前缀列表条目的描述信息。长度为2~32个英文或中文字符，不能以`http://`和`https://`开头。N的取值范围：0~200。 */
        Description?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 前缀列表ID。 */
      PrefixListId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateRouteEntry
   * undefined
   * @deprecated
   */
  export namespace CreateRouteEntry {
    export type Params = {
      RegionId?: string;
      RouteTableId: string;
      DestinationCidrBlock: string;
      NextHopId?: string;
      ClientToken?: string;
      NextHopType?: string;
      NextHopList?: Array<{
        NextHopId?: string;
        NextHopType?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateRouterInterface
   * undefined
   * @deprecated
   */
  export namespace CreateRouterInterface {
    export type Params = {
      RegionId: string;
      Role: string;
      OppositeRegionId: string;
      Spec: string;
      RouterType: string;
      RouterId: string;
      OppositeInterfaceId?: string;
      OppositeRouterId?: string;
      OppositeRouterType?: string;
      OppositeInterfaceOwnerId?: string;
      HealthCheckSourceIp?: string;
      HealthCheckTargetIp?: string;
      AccessPointId?: string;
      OppositeAccessPointId?: string;
      Description?: string;
      Name?: string;
      Period?: number;
      InstanceChargeType?: string;
      AutoPay?: boolean;
      PricingCycle?: string;
      ClientToken?: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      OrderId?: number;
      RequestId?: string;
      RouterInterfaceId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateSecurityGroup
   * 调用该接口时，您需要注意：
   * 
   * -  在一个阿里云地域下，您最多可以创建100个安全组。 
   * -  创建专有网络VPC类型的安全组时，您必须指定参数VpcId。
   * @summary: 调用CreateSecurityGroup新建一个安全组。新建的安全组，默认只允许安全组内的实例互相访问，安全组外的一切通信请求会被拒绝。若您想允许其他安全组实例的通信请求，或者来自互联网的访问请求，需要授权安全组权限（AuthorizeSecurityGroup）。
   */
  export namespace CreateSecurityGroup {
    export type Params = {
      /** 安全组所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 安全组描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。

      默认值：空。 */
      Description?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 安全组名称。

      长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。默认值：空。 */
      SecurityGroupName?: string;
      /** 安全组所属VPC ID。

      >若指定的地域支持经典网络，则允许不指定VpcId，来创建经典网络的安全组；若指定的地域不支持经典网络，则必须指定VpcId，创建专有网络的安全组。 */
      VpcId?: string;
      /** 安全组类型，分为普通安全组与企业安全组。取值范围：

      - normal：普通安全组。
      - enterprise：企业安全组。更多详情，请参见[企业安全组概述](https://help.aliyun.com/document_detail/120621.html)。 */
      SecurityGroupType?: string;
      /** 该参数暂未开放使用。 */
      ServiceManaged?: boolean;
      /** 安全组所在的企业资源组ID。 */
      ResourceGroupId?: string;
      /** 安全组绑定的标签。 */
      Tag?: Array<{
        /** 安全组的标签键。

        N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。 */
        Key?: string;
        /** 安全组的标签值。

        N的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持128个字符，不能以acs:开头，不能包含`http://`或者`https://`。 */
        Value?: string;
        /** 安全组的标签键。

        > 为提高兼容性，建议您尽量使用Tag.N.Key参数。 */
        key?: string;
        /** 安全组的标签值。

        > 为提高兼容性，建议您尽量使用Tag.N.Value参数。 */
        value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 安全组ID。 */
      SecurityGroupId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateSimulatedSystemEvents
   * 预约模拟事件后，您可以通过ECS管理控制台、[ECS API](https://help.aliyun.com/document_detail/63962.html)和云监控服务查看已经预约的模拟系统事件。
   * 
   * 下表为模拟系统事件的生命周期：
   * 
   * - Scheduled（计划中）：预约后，模拟系统事件自动切换为Scheduled状态。
   * - Executed（已完成）：在没有人为干预的情况下，模拟系统事件在指定时间点（NotBefore）自动变成Executed状态。
   * - Canceled（已取消）：您调用[CancelSimulatedSystemEvents](https://help.aliyun.com/document_detail/88808.html)取消模拟系统事件后，变成Canceled状态。         
   * - Avoided（已避免）：对于因系统维护实例重启（SystemMaintenance.Reboot）的模拟系统事件，可以通过在指定时间点前[重启实例](https://help.aliyun.com/document_detail/25502.html)而变成Avoided状态。
   * @summary: 调用CreateSimulatedSystemEvents为一台或多台ECS实例预约模拟系统事件。模拟系统事件相当于事件演习，不会真正执行事件，也不会对ECS实例产生影响。
   */
  export namespace CreateSimulatedSystemEvents {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 系统事件的类型。取值范围： 
      - SystemMaintenance.Reboot：因系统维护实例重启 
      - SystemFailure.Reboot：因系统错误实例重启 
      - InstanceFailure.Reboot：因实例错误实例重启
      - SystemMaintenance.Stop：因系统维护实例停止
      - SystemMaintenance.Redeploy：因系统维护实例重新部署
      - SystemFailure.Redeploy：因系统错误实例重新部署
      - SystemFailure.Stop：因系统错误实例重新停止
      - InstanceFailure.Reboot：因实例错误实例重启 */
      EventType: string;
      /** 事件计划执行的开始时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。

      > 对于系统错误或实例错误导致的异常事件，创建事件后，事件已处于正在执行（`Executing`）状态，此时参数`NotBefore`为事件进入完成执行（`Executed`）状态的时间。 */
      NotBefore: string;
      /** ECS实例ID列表信息。可输入最多100个实例ID。 */
      InstanceId: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 模拟事件ID（EventId）列表。 */
      EventIdSet?: Array<string>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateSnapshot
   * 原本地快照更替为快照极速可用功能。参数说明如下：
   * - 如果您在2020年12月14日之前使用过本地快照。您可以正常使用参数`Category`和`InstantAccess`，但需要注意：
   *     - 参数`Category`和`InstantAccess`不能同时传值。
   *     - 参数`Category`和`InstantAccess`均不传值时，默认创建普通快照。
   * - 如果您在2020年12月14日之前未使用过本地快照。您只能使用参数`InstantAccess`，不能使用参数`Category`。
   * 更多信息，请参见[12月14日阿里云快照服务升级与新增计费项通知](https://help.aliyun.com/noticelist/articleid/1060755542.html)。以下场景中，您无法为指定的云盘创建快照：
   * 
   * - 云盘保留的手动快照数达到了256份。
   * 
   * - 上份快照还未完成创建。
   * 
   * - 云盘挂载的实例从未启动过。
   * 
   * - 云盘挂载的实例未处于**已停止**（`Stopped`）或者**运行中**（`Running`）状态。
   * 
   * - 查询ECS实例信息时，如果返回数据中包含`{"OperationLocks": {"LockReason" : "security"}}`，则禁止一切操作。
   * 
   * 创建快照时，您需要注意：
   * 
   * - 如果创建快照还未完成，这份快照无法用于创建自定义镜像（[CreateImage](https://help.aliyun.com/document_detail/25535.html)）。
   * 
   * - 如果云盘已挂载到ECS实例上，创建快照期间请勿变更实例状态。
   * 
   * - 支持对处于**已过期**（`Expired`）状态的云盘创建快照。若创建快照时云盘正好达到过期释放时间，云盘被释放的同时也会删除**创建中**（`Creating`）的快照。
   * @summary: 调用CreateSnapshot为一块云盘创建一份快照。
   */
  export namespace CreateSnapshot {
    export type Params = {
      /** 云盘ID。 */
      DiskId: string;
      /** 快照的显示名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。

      为防止和自动快照的名称冲突，不能以`auto`开头。 */
      SnapshotName?: string;
      /** 快照的描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。

      默认值：空。 */
      Description?: string;
      /** 设置快照的保留时间，单位为天。保留时间到期后快照会被自动释放，取值范围：1~65536。

      默认值：空，表示快照不会被自动释放。 */
      RetentionDays?: number;
      /** 快照类型。取值范围：

      - Standard：普通快照。
      - Flash：本地快照。

      > 该参数即将被弃用，为提高兼容性，建议您尽量使用参数`InstantAccess`。该参数和参数`InstantAccess`不能同时传值。更多信息，请参见接口说明。 */
      Category?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 快照所在的企业资源组ID。 */
      ResourceGroupId?: string;
      /** 是否开启快照极速可用功能。取值范围：
      - true：开启。仅ESSD云盘支持开启该功能。
         
          >启用快照极速可用功能后，即使快照还没有创建完成，您也可以使用快照回滚云盘或者跨可用区创建云盘。无论多大的ESSD云盘，均能够快速确保该快照可用。
      - false：关闭。即创建普通快照。

      默认值：false

      >该参数和参数`Category`不能同时传值。更多信息，请参见接口说明。 */
      InstantAccess?: boolean;
      /** 设置快照极速可用功能的保留时间，保留时间到期后快照将自动释放。该参数在`InstantAccess=true`时生效。单位：天。取值范围：1~65535。

      默认与参数`RetentionDays`的值一致。 */
      InstantAccessRetentionDays?: number;
      /** 标签列表。 */
      Tag?: Array<{
        /** 快照的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。 */
        Key?: string;
        /** 快照的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或者https://。 */
        Value?: string;
        /** 快照的标签键。

        >  为提高兼容性，建议您尽量使用Tag.N.Key参数。 */
        key?: string;
        /** 快照的标签值。

        >  为提高兼容性，建议您尽量使用Tag.N.Value参数。 */
        value?: string }>;
      /** > 该参数暂未开放使用。 */
      StorageLocationArn?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 快照ID。 */
      SnapshotId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateSnapshotGroup
   * 您可以设置`InstanceId`为实例内的指定云盘创建快照一致性组；也可以只使用`DiskId.N`为同可用区内多台ECS实例挂载的多块云盘创建快照一致性组。
   * 
   * > `DiskId.N`不可与`ExcludeDiskId.N`同时设置。此外，如果设置了`InstanceId`，则`DiskId.N`只能设置指定实例内已挂载的云盘，不再支持设置多个跨实例的云盘ID。
   * 
   * 创建快照一致性组时，请注意：
   * 
   * - 待创建快照的云盘必须处于**使用中**（`In_use`）或**待挂载**（`Available`）的状态。
   * 
   *     - 如果云盘处于**使用中**（`In_use`）的状态，则ECS实例状态为**运行中**（`Running`）或者**已停止**（`Stopped`）。
   *     - 如果云盘处于**待挂载**（`Available`）的状态，则需要保证云盘有过挂载到ECS实例的历史操作。从未挂载过ECS实例的云盘不支持创建快照。
   * 
   * - 目前快照一致性组只支持ESSD云盘。
   * - 单个快照一致性组最多包括16块云盘（包括系统盘和数据盘），且总容量不超过32 TiB。
   * - 您自行创建的快照会一直保留，请定期删除不再需要的快照，避免快照容量持续扣费。
   * - 开启多重挂载特性的云盘不支持创建快照一致性组。如果实例挂载了开启多重挂载特性的云盘，您需要设置`ExcludeDiskId.N`参数排除该云盘。
   * 
   * 关于快照一致性组的功能、计费等信息，请参见[快照一致性组](https://help.aliyun.com/document_detail/199625.html)。
   * @summary: 调用CreateSnapshotGroup为指定ECS实例中的云盘创建快照一致性组。快照一致性组包含一个或多个云盘对应的快照。
   */
  export namespace CreateSnapshotGroup {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例ID。 */
      InstanceId?: string;
      /** 是否开启快照极速可用。取值范围：

      - true：开启。
      - false：关闭。

      默认值为false。 */
      InstantAccess?: boolean;
      /** 设置快照极速可用的使用时间。单位：天，取值范围：1~65535。

      仅当`InstantAccess=true`时，该参数生效。到期后自动关闭快照极速使用功能。

      默认值：空，表示和快照释放时间一致。 */
      InstantAccessRetentionDays?: number;
      /** 快照一致性组名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`或`https://`开头，可以包含数字、半角句号（.）、下划线（_）、短划线（-）或者半角冒号（:）。 */
      Name?: string;
      /** 描述。长度为2～256个字符，不能以`http://`或`https://`开头。 */
      Description?: string;
      /** >该参数暂未开发使用。 */
      StorageLocationArn?: string;
      /** 实例中不需要创建快照的云盘ID。指定云盘ID后，创建的快照一致性组将不包含该云盘对应的快照。N的取值范围为1~16。

      默认值：空，表示为实例中的所有云盘创建快照。

      > 该参数不可与`DiskId.N`同时设置。 */
      ExcludeDiskId?: Array<string>;
      /** 指定创建快照一致性组的云盘ID。在同可用区内支持跨实例设置多个云盘ID。N的取值范围为1~16，即一个快照一致性组内最多支持设置16块总大小不超过32 TiB的云盘。

      您需要注意：

      - 该参数不可与`ExcludeDiskId.N`同时设置。
      - 如果您设置了`InstanceId`，则该参数只能设置指定实例内已挂载的云盘，不再支持设置多个跨实例的云盘ID。 */
      DiskId?: Array<string>;
      /** 标签列表。 */
      Tag?: Array<{
        /** 快照一致性组的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** 快照一致性组的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或`https://`。 */
        Value?: string }>;
      /** 快照一致性组所属的资源组ID。 */
      ResourceGroupId?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 快照一致性组ID。 */
      SnapshotGroupId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateStorageSet
   * 存储集可以将云盘或共享块存储分散处理。存储集可以设置分区数量，分区数越大，表示云盘或共享块存储的物理位置越分散。
   * 
   * 使用该接口时，需要注意如下事项：
   * 
   * - 您在一个地域下可以拥有的存储集有数量限制。您可以调用[DescribeAccountAttributes](https://help.aliyun.com/document_detail/73772.html)查询数量限制。
   * 
   * - 您在一个可用区下可以指定的分区数有数量限制。您可以调用[DescribeAccountAttributes](https://help.aliyun.com/document_detail/73772.html)查询数量限制。
   * @summary: （Beta）调用CreateStorageSet在指定地域的可用区下创建一个存储集。
   */
  export namespace CreateStorageSet {
    export type Params = {
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 存储集所属地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 存储集所属可用区。您可以调用[DescribeZones](https://help.aliyun.com/document_detail/25610.html)查询最新的可用区列表。 */
      ZoneId: string;
      /** 存储集名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。 */
      StorageSetName?: string;
      /** 存储集描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。 */
      Description?: string;
      /** 存储集最大分区，StorageSet支持的最大分区号。取值范围：大于等于2，最高不能超过调用[DescribeAccountAttributes](https://help.aliyun.com/document_detail/73772.html)后显示的权益配额限制。

      默认值：2。 */
      MaxPartitionNumber?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 存储集ID。 */
      StorageSetId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateVSwitch
   * undefined
   * @deprecated
   */
  export namespace CreateVSwitch {
    export type Params = {
      ZoneId: string;
      CidrBlock: string;
      VpcId: string;
      RegionId?: string;
      VSwitchName?: string;
      Description?: string;
      ClientToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string;
      VSwitchId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateVirtualBorderRouter
   * undefined
   * @deprecated
   */
  export namespace CreateVirtualBorderRouter {
    export type Params = {
      RegionId: string;
      PhysicalConnectionId: string;
      VbrOwnerId?: number;
      VlanId: number;
      CircuitCode?: string;
      LocalGatewayIp?: string;
      PeerGatewayIp?: string;
      PeeringSubnetMask?: string;
      Description?: string;
      Name?: string;
      ClientToken: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string;
      VbrId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateVpc
   * undefined
   * @deprecated
   */
  export namespace CreateVpc {
    export type Params = {
      RegionId: string;
      CidrBlock?: string;
      VpcName?: string;
      Description?: string;
      ClientToken?: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string;
      RouteTableId?: string;
      VRouterId?: string;
      VpcId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeactivateRouterInterface
   * undefined
   * @deprecated
   */
  export namespace DeactivateRouterInterface {
    export type Params = {
      RegionId: string;
      RouterInterfaceId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteActivation
   * ## 接口说明
   * 
   * 激活码必须未被使用，即激活码对应注册的托管实例数量为0。
   * @summary: 调用DeleteActivation删除一个未被使用的激活码。
   */
  export namespace DeleteActivation {
    export type Params = {
      /** 地域ID。目前支持的地域：华北1（青岛）、华北2（北京）、华北3（张家口）、华北5（呼和浩特）、华北6（乌兰察布）、华东1（杭州）、华东2（上海）、华南1（深圳）、华南2（河源）、华南3（广州）、西南1（成都）、中国香港、新加坡、日本（东京）、美国（硅谷）、美国（弗吉尼亚）。

      您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看地域对应的ID等信息。 */
      RegionId: string;
      /** 未被使用的激活码ID。 */
      ActivationId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 激活码及使用情况信息组成的集合。 */
      Activation?: {
        /** 激活码ID。 */
        ActivationId?: string;
        /** 创建时间。 */
        CreationTime?: string;
        /** 已注销的实例数。 */
        DeregisteredCount?: number;
        /** 激活码对应的描述。 */
        Description?: string;
        /** 激活码用于注册托管实例的使用次数上限。 */
        InstanceCount?: number;
        /** 默认的实例名称前缀。 */
        InstanceName?: string;
        /** 允许使用该激活码的主机IP。 */
        IpAddressRange?: string;
        /** 已注册的实例数。 */
        RegisteredCount?: number;
        /** 激活码的有效时间。单位：小时。 */
        TimeToLiveInHours?: number };
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteAutoProvisioningGroup
   * 调用DeleteAutoProvisioningGroup删除一个弹性供应组。
   * @summary: 调用DeleteAutoProvisioningGroup删除一个弹性供应组。
   */
  export namespace DeleteAutoProvisioningGroup {
    export type Params = {
      /** 弹性供应组所在地域的ID。 */
      RegionId: string;
      /** 弹性供应组的ID。 */
      AutoProvisioningGroupId: string;
      /** 删除弹性供应组时是否释放组内实例。取值范围：

      - true：释放组内实例
      - false：组内实例继续运行 */
      TerminateInstances: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteAutoSnapshotPolicy
   * 删除一条自动快照策略。如果目标自动快照策略已经被应用到磁盘上，删除自动快照策略后，这些磁盘不再执行该策略。
   * @summary: 删除一条自动快照策略。如果目标自动快照策略已经被应用到磁盘上，删除自动快照策略后，这些磁盘不再执行该策略。
   */
  export namespace DeleteAutoSnapshotPolicy {
    export type Params = {
      /** 自动快照所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      regionId: string;
      /** 自动快照策略的ID。您可以调用[DescribeAutoSnapshotPolicyEx](https://help.aliyun.com/document_detail/25530.html)查看您可用的自动快照策略。 */
      autoSnapshotPolicyId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteBandwidthPackage
   * undefined
   * @deprecated
   */
  export namespace DeleteBandwidthPackage {
    export type Params = {
      RegionId: string;
      BandwidthPackageId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteCommand
   * ## 接口说明
   * 
   * 无法删除正在执行中的命令。
   * @summary: 调用DeleteCommand删除一条云助手命令。
   */
  export namespace DeleteCommand {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 命令ID。您可以通过接口[DescribeCommands](https://help.aliyun.com/document_detail/64843.html)查询所有可用的CommandId。  */
      CommandId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteDedicatedHostCluster
   * 调用DeleteDedicatedHostCluster删除一个专有宿主机集群。
   * @summary: 调用DeleteDedicatedHostCluster删除一个专有宿主机集群。
   */
  export namespace DeleteDedicatedHostCluster {
    export type Params = {
      /** 专有宿主机集群所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 专有宿主机集群ID。 */
      DedicatedHostClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteDemand
   * > 该接口正在内测中，尚未正式上线，暂时不建议使用，请您耐心等待。
   * @summary: 调用DeleteDemand删除ECS资源需求报备信息。您可通过该接口自助删除提交的资源需求信息。
   */
  export namespace DeleteDemand {
    export type Params = {
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 报备实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 报备ID。 */
      DemandId: string;
      /** 删除报备单原因，请详细填写。 */
      Reason?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteDeploymentSet
   * 调用DeleteDeploymentSet删除一个部署集。
   * @summary: 调用DeleteDeploymentSet删除一个部署集。
   */
  export namespace DeleteDeploymentSet {
    export type Params = {
      /** 部署集所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 部署集ID。如果部署集中仍有实例存在，则无法删除。 */
      DeploymentSetId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteDiagnosticMetricSets
   * 调用DeleteDiagnosticMetricSets删除资源诊断指标集合。
   * @summary: 调用DeleteDiagnosticMetricSets删除资源诊断指标集合。
   */
  export namespace DeleteDiagnosticMetricSets {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 诊断指标集合ID列表。最多支持10个。

       */
      MetricSetIds: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteDiagnosticReports
   * 不支持删除诊断中的报告。
   * @summary: 调用DeleteDiagnosticReports删除资源诊断报告。
   */
  export namespace DeleteDiagnosticReports {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 诊断报告ID列表。最多支持100个ID。 */
      ReportIds: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteDisk
   * 调用该接口时，您需要注意：
   * 
   * - 您的磁盘手动快照会被保留。
   * - 您可以通过[ModifyDiskAttribute](https://help.aliyun.com/document_detail/25517.html)设置是否保留或者同时释放自动快照。建议您及时删除不必要的快照，以保持足够的快照额度完成周期性的自动快照策略。
   * - 释放磁盘时，云盘的状态必须为待挂载（Available）。
   * - 如果指定ID的磁盘不存在，请求将被忽略。
   * @summary: 调用DeleteDisk释放一块按量付费数据盘。磁盘类型包括普通云盘、高效云盘、SSD云盘和ESSD云盘。
   */
  export namespace DeleteDisk {
    export type Params = {
      /** 需要释放的云盘设备ID。 */
      DiskId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteForwardEntry
   * undefined
   * @deprecated
   */
  export namespace DeleteForwardEntry {
    export type Params = {
      RegionId: string;
      ForwardTableId: string;
      ForwardEntryId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteHaVip
   * undefined
   * @deprecated
   */
  export namespace DeleteHaVip {
    export type Params = {
      ClientToken?: string;
      RegionId: string;
      HaVipId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteHpcCluster
   * 调用DeleteHpcCluster删除一个HPC集群。
   * @summary: 调用DeleteHpcCluster删除一个HPC集群。
   */
  export namespace DeleteHpcCluster {
    export type Params = {
      /** HPC集群所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** HPC集群ID。 */
      HpcClusterId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteImage
   * 调用DeleteImage删除一份自定义镜像。
   * @summary: 调用DeleteImage删除一份自定义镜像。
   */
  export namespace DeleteImage {
    export type Params = {
      /** 自定义镜像所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 镜像ID。如果指定的自定义镜像不存在，则请求将被忽略。 */
      ImageId: string;
      /** 是否执行强制删除。取值范围： 
               
      - true：强制删除自定义镜像，忽略当前镜像是否被其他实例使用。
      - false：正常删除自定义镜像，删除前检查当前镜像是否被其他实例使用。

      默认值：false */
      Force?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteImageComponent
   * 目前仅支持删除您已创建的自定义镜像组件。
   * @summary: 调用DeleteImageComponent删除一个镜像组件。
   */
  export namespace DeleteImageComponent {
    export type Params = {
      /** 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 需要删除的镜像组件ID。 */
      ImageComponentId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteImagePipeline
   * 如果存在构建中（BUILDING）、分发中（DISTRIBUTING）、资源回收中（RELEASING）或取消中（CANCELLING）的构建任务，则不允许直接删除模板，需要等待构建任务成功（SUCCESS）、失败（FAILED）或已取消（CANCELLED）。构建任务的详细信息可以通过DescribeImagePipelineExecutions查询。
   * @summary: 调用DeleteImagePipeline删除一个镜像模板。
   */
  export namespace DeleteImagePipeline {
    export type Params = {
      /** 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 镜像模板ID。 */
      ImagePipelineId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteInstance
   * - 释放后，实例所使用的物理资源都被回收，相关数据全部丢失且不可恢复。
   * - 挂载在实例上的云盘：
   *     - 如果设置了`DeleteWithInstance=false`，则云盘会被转换成按量付费云盘而保留下来。
   *     - 如果设置了`DeleteWithInstance=true`，云盘会被同时释放。
   *     - 如果为`DeleteAutoSnapshot=false`，保留自动快照。
   *     - 如果为`DeleteAutoSnapshot=true`，同时释放自动快照。
   *     - 仍旧保留云盘的手动快照。
   *     - 实例被[安全控制](https://help.aliyun.com/document_detail/25695.html)并且`OperationLocks`中标记了`"LockReason" : "security"`，即使云盘的`DeleteWithInstance`的属性为`false`，系统会忽略这个属性而释放云盘。
   * @summary: 调用DeleteInstance释放一台按量付费实例或者到期的包年包月实例。
   */
  export namespace DeleteInstance {
    export type Params = {
      /** 实例ID。 */
      InstanceId: string;
      /** 是否强制释放**运行中**（`Running`）的实例。

      - true：强制释放**运行中**（`Running`）的实例。强制释放相当于断电，实例内存以及存储中的临时数据都会被擦除，无法恢复。
      - false：正常释放实例，此时实例必须处于**已停止**（`Stopped`）状态。

      默认值为false。 */
      Force?: boolean;
      /** 是否释放已到期的包年包月实例。

      默认值为false。 */
      TerminateSubscription?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteInstances
   * ## 接口说明
   * 
   * - 释放后，实例所使用的物理资源都被回收，相关数据全部丢失且不可恢复。
   * - 挂载在实例上的云盘：
   *     - 如果设置了`DeleteWithInstance=false`，则云盘会被转换成按量付费云盘而保留下来。
   *     - 如果设置了`DeleteWithInstance=true`，云盘会被同时释放。
   *     - 如果为`DeleteAutoSnapshot=false`，保留自动快照。
   *     - 如果为`DeleteAutoSnapshot=true`，同时释放自动快照。
   *     - 仍旧保留云盘的手动快照。
   *     - 实例被[安全控制](https://help.aliyun.com/document_detail/25695.html)并且`OperationLocks`中标记了`"LockReason" : "security"`，即使云盘的`DeleteWithInstance`的属性为`false`，系统会忽略这个属性而释放云盘。
   * @summary: 调用DeleteInstances释放一台或多台按量付费ECS实例或者到期的包年包月ECS实例。
   */
  export namespace DeleteInstances {
    export type Params = {
      /** 是否只预检此次请求。

      - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DRYRUN.SUCCESS。
      - false（默认值）：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。 */
      DryRun?: boolean;
      /** 是否强制释放**运行中**（`Running`）的ECS实例。

      - true：强制释放**运行中**（`Running`）的实例。强制释放相当于断电，实例内存以及存储中的临时数据都会被擦除，无法恢复。
      - false（默认值）：正常释放实例，此时实例必须处于**已停止**（`Stopped`）状态。 */
      Force?: boolean;
      /** 是否释放已到期的包年包月实例。

      默认值：false */
      TerminateSubscription?: boolean;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例ID列表。列表元素数量最大100。 */
      InstanceId: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteKeyPairs
   * 删除SSH密钥对后，您需要注意：
   * 
   * - 无法通过[DescribeKeyPairs](https://help.aliyun.com/document_detail/51773.html)查询该SSH密钥对。  
   * - 若已有ECS实例绑定了该SSH密钥对，则该SSH密钥对不支持被删除。
   * @summary: 调用DeleteKeyPairs删除一对或者多对SSH密钥对。
   */
  export namespace DeleteKeyPairs {
    export type Params = {
      /** SSH密钥对所在的地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** SSH密钥对名称。取值可以由多个SSH密钥对名称组成一个JSON数组，最多支持100对SSH密钥对，名称之间用半角逗号（,）隔开。  */
      KeyPairNames: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteLaunchTemplate
   * 调用DeleteLaunchTemplate删除一个实例启动模板。
   * @summary: 调用DeleteLaunchTemplate删除一个实例启动模板。
   */
  export namespace DeleteLaunchTemplate {
    export type Params = {
      /** 实例启动模板所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 启动模板ID。更多信息，请参见[DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html)。

      您必须指定 `LaunchTemplateId` 或 `LaunchTemplateName` 以确定启动模板。 */
      LaunchTemplateId?: string;
      /** 启动模板名称。

      您必须指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板。  */
      LaunchTemplateName?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 启动模板ID。更多信息，请参见[DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html)。

      使用启动模板创建实例时，您必须指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板。 */
      LaunchTemplateId?: string;
      /** 删除的实例启动模板版本号集合。 */
      LaunchTemplateVersionNumbers?: Array<number>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteLaunchTemplateVersion
   * 调用DeleteLaunchTemplateVersion删除指定实例启动模板的一个版本。不支持删除默认版本，您必须通过DeleteLaunchTemplate删除整个实例启动模板才能删除默认版本。
   * @summary: 调用DeleteLaunchTemplateVersion删除指定实例启动模板的一个版本。不支持删除默认版本，您必须通过DeleteLaunchTemplate删除整个实例启动模板才能删除默认版本。
   */
  export namespace DeleteLaunchTemplateVersion {
    export type Params = {
      /** 模板所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 待删除的模板版本号。 */
      DeleteVersion: Array<number>;
      /** 需要删除的启动模板ID。更多信息，请参见[DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html)。 */
      LaunchTemplateId?: string;
      /** 启动模板名称。 */
      LaunchTemplateName?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例启动模板版本。 */
      LaunchTemplateVersions?: Array<{
        /** 实例启动模板ID。 */
        LaunchTemplateId?: string;
        /** 实例启动模板版本号。 */
        LaunchTemplateVersionNumber?: number }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteNatGateway
   * undefined
   * @deprecated
   */
  export namespace DeleteNatGateway {
    export type Params = {
      RegionId: string;
      NatGatewayId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteNetworkInterface
   * ## 接口描述
   * 
   * -  弹性网卡必须处于可用（Available）状态。
   * 
   * -  如果弹性网卡已经附加到ECS实例，必须先从实例分离（[DetachNetworkInterface](https://help.aliyun.com/document_detail/58514.html)），才能删除弹性网卡。
   * 
   * -  删除弹性网卡之后：
   * 
   *     - 弹性网卡的所有私有地址（包括主私网地址和辅助私网地址）会自动释放。
   * 
   *     - 被删除的弹性网卡退出所属的所有安全组。
   * -  本接口为异步接口，调用成功后，您可以通过查询弹性网卡状态或监听网卡操作事件来感知操作结果， 弹性网卡状态机如下图所示：
   * ![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/file-manage-files/zh-CN/20221208/xual/DeleteNetworkInterface.jpg)
   *     - Deleting说明删除弹性网卡请求发送成功，弹性网卡正在删除中。
   *     - 若无法查询到弹性网卡，说明弹性网卡删除成功。
   *     - 若弹性网卡状态长时间为Deleting说明删除失败，此时您可以重新发起删除请求弹性网卡操作。      
   * 
   * **调用示例详情参见**[删除弹性网卡](https://help.aliyun.com/document_detail/471553.html)。
   * @summary: 调用DeleteNetworkInterface删除一个弹性网卡（ENI）。
   */
  export namespace DeleteNetworkInterface {
    export type Params = {
      /** 所在地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 弹性网卡的ID。 */
      NetworkInterfaceId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteNetworkInterfacePermission
   * undefined
   * @deprecated
   */
  export namespace DeleteNetworkInterfacePermission {
    export type Params = {
      RegionId: string;
      NetworkInterfacePermissionId: string;
      Force?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeletePhysicalConnection
   * undefined
   * @deprecated
   */
  export namespace DeletePhysicalConnection {
    export type Params = {
      RegionId: string;
      PhysicalConnectionId: string;
      ClientToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeletePrefixList
   * 前缀列表与其他资源存在关联时，不能直接删除，需要先在其他资源中解除对该前缀列表的关联，再执行删除操作。您可以调用[DescribePrefixListAssociations](https://help.aliyun.com/document_detail/204724.html)查询指定前缀列表的已关联资源。
   * @summary: 调用DeletePrefixList删除指定的前缀列表，同时删除前缀列表中的所有条目。
   */
  export namespace DeletePrefixList {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 前缀列表ID。 */
      PrefixListId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteRouteEntry
   * undefined
   * @deprecated
   */
  export namespace DeleteRouteEntry {
    export type Params = {
      RegionId?: string;
      RouteTableId: string;
      DestinationCidrBlock: string;
      NextHopId?: string;
      NextHopList?: Array<{
        NextHopId?: string;
        NextHopType?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteRouterInterface
   * undefined
   * @deprecated
   */
  export namespace DeleteRouterInterface {
    export type Params = {
      RegionId: string;
      RouterInterfaceId: string;
      ClientToken?: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteSecurityGroup
   * ## 接口说明
   * 
   * 调用该接口时，您需要注意：
   * -  删除安全组之前，请确保安全组内不存在实例，并且没有其他安全组与该安全组有授权行为（[DescribeSecurityGroupReferences](https://help.aliyun.com/document_detail/57320.html)），否则DeleteSecurityGroup请求失败。   
   * -  在您使用该接口删除安全组时返回错误码InvalidOperation.DeletionProtection，或使用控制台删除安全组看到类似删除保护的提示时，说明该安全组开启了删除保护功能。在您创建ACK集群时，关联的安全组会开启删除保护功能，来防止误删除。删除保护功能无法手动关闭，只有在删除了关联的ACK集群后，才能够自动关闭。更多信息，请参见[关闭安全组删除保护](https://help.aliyun.com/document_detail/2579528.html)。
   * @summary: 调用DeleteSecurityGroup删除一个安全组。
   */
  export namespace DeleteSecurityGroup {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 安全组ID。您可以调用[DescribeSecurityGroups](https://help.aliyun.com/document_detail/25556.html)查看安全组ID。  */
      SecurityGroupId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteSnapshot
   * 调用该接口时，您需要注意：
   * 
   * - 如果指定的快照ID不存在，请求将被忽略。 
   * - 如果快照已经被用于创建自定义镜像，将不能执行删除操作。您需要先删除已创建的自定义镜像（[DeleteImage](https://help.aliyun.com/document_detail/25537.html)），才能继续删除快照。
   * - 如果快照已经被用于创建云盘，且未设置`Force`参数或`Force=false`时，不能直接删除快照。如果您确定要删除快照，请设置`Force=true`进行强制删除，快照被强制删除后对应的云盘将不能执行重新初始化。
   * @summary: 调用DeleteSnapshot删除指定的快照。如果需要取消正在创建的快照，也可以调用该接口删除快照，即取消创建快照任务。
   */
  export namespace DeleteSnapshot {
    export type Params = {
      /** 快照ID。 */
      SnapshotId: string;
      /** 是否强制删除已经被用于创建云盘的快照。取值范围：

      - true：强制删除。强制删除后该磁盘无法重新初始化。

      - false：不强制删除。

      默认值：false */
      Force?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteSnapshotGroup
   * 如果实例快照中的云盘快照已经用于创建自定义镜像，则实例快照删除时相关的云盘快照不会被删除。您如果需要删除相关的云盘快照，请先删除已创建的自定义镜像（[DeleteImage](https://help.aliyun.com/document_detail/25537.html)），再删除相关的云盘快照（[DeleteSnapshot](https://help.aliyun.com/document_detail/25525.html)）。
   * @summary: 调用DeleteSnapshotGroup删除指定的实例快照。
   */
  export namespace DeleteSnapshotGroup {
    export type Params = {
      /** 实例快照所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 快照一致性组ID。您可以调用[DescribeSnapshotGroups](https://help.aliyun.com/document_detail/210940.html)查询快照一致性组ID。 */
      SnapshotGroupId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 删除实例快照时操作状态信息合集。 */
      OperationProgressSet?: Array<{
        /** 错误码。删除成功时返回空值。



        错误码和错误信息，请参见[错误中心](https://error-center.aliyun.com/status/product/Ecs)。 */
        ErrorCode?: string;
        /** 错误信息。删除成功时返回空值。



        错误码和错误信息，请参见[错误中心](https://error-center.aliyun.com/status/product/Ecs)。 */
        ErrorMsg?: string;
        /** 操作是否成功。成功返回Success，失败返回ErrorCode和ErrorMsg信息。 */
        OperationStatus?: string;
        /** 资源信息。 */
        RelatedItemSet?: Array<{
          /** 资源名称。 */
          Name?: string;
          /** 资源ID。 */
          Value?: string }> }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteStorageSet
   * （Beta）调用DeleteStorageSet删除一个空的存储集。待删除的存储集必须为空，不能包含云盘或者共享块存储。
   * @summary: （Beta）调用DeleteStorageSet删除一个空的存储集。待删除的存储集必须为空，不能包含云盘或者共享块存储。
   */
  export namespace DeleteStorageSet {
    export type Params = {
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 存储集所属地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 存储集ID。 */
      StorageSetId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteVSwitch
   * undefined
   * @deprecated
   */
  export namespace DeleteVSwitch {
    export type Params = {
      VSwitchId: string;
      RegionId?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteVirtualBorderRouter
   * undefined
   * @deprecated
   */
  export namespace DeleteVirtualBorderRouter {
    export type Params = {
      RegionId: string;
      VbrId: string;
      ClientToken?: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteVpc
   * undefined
   * @deprecated
   */
  export namespace DeleteVpc {
    export type Params = {
      VpcId: string;
      RegionId?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeregisterManagedInstance
   * 调用DeregisterManagedInstance注销一个托管实例。注销后您将无法再使用云助手向实例发送命令或文件。
   * @summary: 调用DeregisterManagedInstance注销一个托管实例。注销后您将无法再使用云助手向实例发送命令或文件。
   */
  export namespace DeregisterManagedInstance {
    export type Params = {
      /** 地域ID。目前支持的地域：华北1（青岛）、华北2（北京）、华北3（张家口）、华北5（呼和浩特）、华北6（乌兰察布）、华东1（杭州）、华东2（上海）、华南1（深圳）、华南2（河源）、华南3（广州）、西南1（成都）、中国香港、新加坡、日本（东京）、美国（硅谷）、美国（弗吉尼亚）。

      您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看地域对应的ID等信息。 */
      RegionId: string;
      /** 托管实例ID。 */
      InstanceId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 托管实例的信息组成的集合。 */
      Instance?: {
        /** 激活码ID。 */
        ActivationId?: string;
        /** 云助手Agent的版本号。 */
        AgentVersion?: string;
        /** 托管实例主机名。 */
        Hostname?: string;
        /** 托管实例ID。 */
        InstanceId?: string;
        /** 托管实例名称。 */
        InstanceName?: string;
        /** 托管实例的公网IP。 */
        InternetIp?: string;
        /** 托管实例的内网IP。 */
        IntranetIp?: string;
        /** 托管实例执行云助手任务的次数。 */
        InvocationCount?: number;
        /** 最后一次执行云助手任务的时间。 */
        LastInvokedTime?: string;
        /** 托管实例的机器码。 */
        MachineId?: string;
        /** 托管实例的操作系统。 */
        OsType?: string;
        /** 操作系统的版本信息。 */
        OsVersion?: string;
        /** 托管实例的注册时间。 */
        RegistrationTime?: string;
        /** 托管实例所属的资源组ID。 */
        ResourceGroupId?: string };
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeAccessPoints
   * undefined
   * @deprecated
   */
  export namespace DescribeAccessPoints {
    export type Params = {
      RegionId: string;
      Type?: string;
      PageNumber?: number;
      PageSize?: number;
      Filter?: Array<{
        Key?: string;
        Value?: Array<string> }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      AccessPointSet?: Array<{
        AccessPointId?: string;
        AttachedRegionNo?: string;
        Description?: string;
        HostOperator?: string;
        Location?: string;
        Name?: string;
        Status?: string;
        Type?: string }>;
      PageNumber?: number;
      PageSize?: number;
      RequestId?: string;
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeAccountAttributes
   * [注册](https://account.aliyun.com/register/register.htm)了阿里云账号后，您可以在不同的阿里云地域中创建一定数量的ECS资源，更多信息，请参见[使用限制](https://help.aliyun.com/document_detail/25412.html)。
   * 
   * 您也可以根据自己的需求，在[配额中心](https://ecs.console.aliyun.com/?#/privilegeQuotaV2/region/cn-hangzhou?subTab=userQuota)申请提高资源使用配额。
   * @summary: 调用DescribeAccountAttributes查询您在一个阿里云地域下能创建的ECS资源配额。包括您能创建的安全组数量、弹性网卡数量、按量付费vCPU核数、抢占式实例vCPU核数、按量付费云盘总容量配额、专用宿主机数量、网络类型以及账号是否已完成实名认证。
   */
  export namespace DescribeAccountAttributes {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 可用区ID。 */
      ZoneId?: string;
      /** 查询某类资源在指定地域下的使用配额，N的取值范围为1~8。取值范围：

      - instance-network-type：可选择的网络类型。
      - max-security-groups：安全组数量。
      - max-elastic-network-interfaces：弹性网卡的数量。
      - max-postpaid-instance-vcpu-count：按量付费实例的vCPU核数上限。
      - max-spot-instance-vcpu-count：抢占式实例vCPU核数上限。
      - used-postpaid-instance-vcpu-count：已使用按量付费实例的vCPU核数。
      - used-spot-instance-vcpu-count：已使用抢占式实例vCPU核数。
      - max-postpaid-yundisk-capacity：用作数据盘的按量付费云盘的总容量上限。
      - used-postpaid-yundisk-capacity：已使用的用作数据盘的按量付费云盘容量。
      - max-dedicated-hosts：专用宿主机数量。
      - supported-postpaid-instance-types：按量付费I/O优化实例规格。
      - max-axt-command-count：云助手命令的数量。
      - max-axt-invocation-daily：每天可以执行的云助手命令次数。
      - real-name-authentication：账号是否完成了实名认证。

          > 您只有完成了实名认证才可以在中国内地地域中创建ECS实例。
      - max-cloud-assistant-activation-count：可创建的云助手托管实例激活码数量上限。

      默认值为空。 */
      AttributeName?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 指定地域下账号特权AccountAttributeItem的信息集合。 */
      AccountAttributeItems?: Array<{
        /** 资源在指定地域下的使用配额分类。可能值：

        - instance-network-type：可选择的网络类型。
        - max-security-groups：安全组数量。
        - max-elastic-network-interfaces：弹性网卡的数量。
        - max-postpaid-instance-vcpu-count：按量付费实例的vCPU核数上限。
        - max-spot-instance-vcpu-count：抢占式实例vCPU核数上限。
        - used-postpaid-instance-vcpu-count：已使用按量付费实例的vCPU核数。
        - used-spot-instance-vcpu-count：已使用抢占式实例vCPU核数。
        - max-postpaid-yundisk-capacity：用作数据盘的按量付费云盘的总容量上限。
        - used-postpaid-yundisk-capacity：已使用的用作数据盘的按量付费云盘容量。
        - max-dedicated-hosts：专用宿主机数量。
        - supported-postpaid-instance-types：按量付费I/O优化实例规格。
        - max-axt-command-count：云助手命令的数量。
        - max-axt-invocation-daily：每天可以执行的云助手命令次数。
        - real-name-authentication：账号是否完成了实名认证。

        - max-cloud-assistant-activation-count：可创建的云助手托管实例激活码数量上限。 */
        AttributeName?: string;
        /** 资源的使用配额具体数值。 */
        AttributeValues?: Array<{
          /** 特权属性类型的数量。 */
          Count?: number;
          /** 数据盘的云盘种类。可能值：
          -   cloud_efficiency：高效云盘。
          -   cloud_ssd：SSD云盘。
          -   cloud_essd：ESSD云盘。
           */
          DiskCategory?: string;
          /** 特权到期时间，仅存在到期时间的账号特权会返回该参数。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间。格式为yyyy-MM-ddTHH:mm:ssZ。 */
          ExpiredTime?: string;
          /** 实例计费方式。 */
          InstanceChargeType?: string;
          /** 实例规格。 */
          InstanceType?: string;
          /** 当前地域下某类资源的使用配额具体数值。可能值：

          以下分类返回值为0或正整数：

          - max-security-groups
          - max-elastic-network-interfaces
          - max-postpaid-instance-vcpu-count
          - max-spot-instance-vcpu-count
          - used-postpaid-instance-vcpu-count
          - used-spot-instance-vcpu-count
          - max-postpaid-yundisk-capacity
          - used-postpaid-yundisk-capacity
          - max-dedicated-hosts
          - max-axt-command-count
          - max-axt-invocation-daily

          - max-cloud-assistant-activation-count

          分类为supported-postpay-instance-types时返回值：实例规格取值。参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。

          分类为real-name-authentications时返回值：

          - yes
          - none 
          - unnecessary

          分类为instance-network-type时返回值：

          - vpc
          - classic */
          Value?: string;
          /** 可用区ID。 */
          ZoneId?: string }> }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeActivations
   * 调用DescribeActivations查询已创建的激活码以及激活码的使用情况。
   * @summary: 调用DescribeActivations查询已创建的激活码以及激活码的使用情况。
   */
  export namespace DescribeActivations {
    export type Params = {
      /** 地域ID。目前支持的地域：华北1（青岛）、华北2（北京）、华北3（张家口）、华北5（呼和浩特）、华北6（乌兰察布）、华东1（杭州）、华东2（上海）、华南1（深圳）、华南2（河源）、华南3（广州）、西南1（成都）、中国香港、新加坡、日本（东京）、美国（硅谷）、美国（弗吉尼亚）。

      您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看地域对应的ID等信息。 */
      RegionId: string;
      /** 激活码ID。 */
      ActivationId?: string;
      /** 默认的实例名称前缀。 */
      InstanceName?: string;
      /** 当前页码。

      起始值为1。

      默认值为1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值为50。

      默认值为10。 */
      PageSize?: number;
      /** 激活码所属的资源组ID。 */
      ResourceGroupId?: string;
      /** 标签列表 */
      Tag?: Array<{
        /** 托管实例激活码的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。

        最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** 托管实例激活码的标签值。N的取值范围为1~20。该值可以为空字符串。

        最多支持128个字符，不能包含`http://`或`https://`。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 激活码及使用情况信息组成的集合。 */
      ActivationList?: Array<{
        /** 激活码ID。 */
        ActivationId?: string;
        /** 创建时间。 */
        CreationTime?: string;
        /** 已注销的实例数。 */
        DeregisteredCount?: number;
        /** 激活码对应的描述。 */
        Description?: string;
        /** 激活码是否被禁用。 */
        Disabled?: boolean;
        /** 激活码用于注册托管实例的使用次数上限。 */
        InstanceCount?: number;
        /** 默认的实例名称前缀。 */
        InstanceName?: string;
        /** 允许使用该激活码的主机IP。 */
        IpAddressRange?: string;
        /** 已注册的实例数。 */
        RegisteredCount?: number;
        /** 激活码所属的资源组ID。 */
        ResourceGroupId?: string;
        /** 托管实例激活码的标签信息。 */
        Tags?: Array<{
          /** 托管实例激活码的标签键。 */
          TagKey?: string;
          /** 托管实例激活码的标签值。 */
          TagValue?: string }>;
        /** 激活码的有效时间。单位：小时。 */
        TimeToLiveInHours?: number }>;
      /** 当前页码。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 符合查询条件的记录条数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeAutoProvisioningGroupHistory
   * 调用DescribeAutoProvisioningGroupHistory查询弹性供应组的调度任务信息。
   * @summary: 调用DescribeAutoProvisioningGroupHistory查询弹性供应组的调度任务信息。
   */
  export namespace DescribeAutoProvisioningGroupHistory {
    export type Params = {
      /** 弹性供应组所在地域的ID。 */
      RegionId: string;
      /** 分页查询的当前页码。起始值：1

      默认值：1 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。最大值：100

      默认值：10 */
      PageSize?: number;
      /** 弹性供应组的ID。 */
      AutoProvisioningGroupId: string;
      /** 查询调度历史的起始时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
      StartTime?: string;
      /** 查询调度历史的结束时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
      EndTime?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 所有调度任务的信息。 */
      AutoProvisioningGroupHistories?: Array<{
        /** 单次调度任务的详细信息。 */
        ActivityDetails?: Array<{
          /** 单次调度任务一次实例创建活动的执行详情。 */
          Detail?: string;
          /** 单次调度任务一次实例创建活动的执行状态。可能值：

          - Successful：实例创建成功。
          - Failed：实例创建失败。
          - InProgress：实例创建中。
          - Warning：实例部分创建成功。 */
          Status?: string }>;
        /** 单次调度任务最后一次实例创建活动的执行时间。 */
        LastEventTime?: string;
        /** 开始执行单次调度任务的时间。 */
        StartTime?: string;
        /** 单次调度任务的状态。可能值：

        - prepare：调度任务执行中。
        - success：调度任务执行成功。
        - failed：调度任务执行失败。 */
        Status?: string;
        /** 单次调度任务的ID。 */
        TaskId?: string }>;
      /** 页码。 */
      PageNumber?: number;
      /** 每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 查询到的调度任务的总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeAutoProvisioningGroupInstances
   * 调用DescribeAutoProvisioningGroupInstances查询一个弹性供应组内的实例。
   * @summary: 调用DescribeAutoProvisioningGroupInstances查询一个弹性供应组内的实例。
   */
  export namespace DescribeAutoProvisioningGroupInstances {
    export type Params = {
      /** 弹性供应组所在地域的ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 分页查询列表的页码。

      起始值：1

      默认值：1 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值：100

      默认值：10 */
      PageSize?: number;
      /** 弹性供应组的ID。 */
      AutoProvisioningGroupId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 弹性供应组下所有实例的信息。 */
      Instances?: Array<{
        /** 实例的vCPU核数。 */
        CPU?: number;
        /** 实例创建时间。 */
        CreationTime?: string;
        /** 实例ID。
         */
        InstanceId?: string;
        /** 实例规格。 */
        InstanceType?: string;
        /** 是否为I/O优化型实例。 */
        IoOptimized?: boolean;
        /** 是否为抢占式实例。 */
        IsSpot?: boolean;
        /** 内存大小，单位MiB。 */
        Memory?: number;
        /** 实例的网络类型，取值范围：

        - vpc：专有网络
        - classic：经典网络 */
        NetworkType?: string;
        /** 实例的操作系统类型，取值范围：

        - windows：操作系统类型为Windows。
        - linux：操作系统类型为Linux。 */
        OsType?: string;
        /** 实例所属地域的ID。 */
        RegionId?: string;
        /** 实例状态。 */
        Status?: string;
        /** 实例所属可用区。 */
        ZoneId?: string }>;
      /** 页码。 */
      PageNumber?: number;
      /** 每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 查询到的弹性供应组内实例的个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeAutoProvisioningGroups
   * 调用DescribeAutoProvisioningGroups查询一个或多个弹性供应组。
   * @summary: 调用DescribeAutoProvisioningGroups查询一个或多个弹性供应组。
   */
  export namespace DescribeAutoProvisioningGroups {
    export type Params = {
      /** 弹性供应组所在地域的ID。 */
      RegionId: string;
      /** 分页查询时设置的列表页码。

      起始值：1

      默认值：1 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值：100

      默认值：10 */
      PageSize?: number;
      /** 弹性供应组的名称。 */
      AutoProvisioningGroupName?: string;
      /** 弹性供应组ID列表。可输入最多20个弹性供应组ID。 */
      AutoProvisioningGroupId?: Array<string>;
      /** 弹性供应组的状态列表。 */
      AutoProvisioningGroupStatus?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 弹性供应组的详细信息。 */
      AutoProvisioningGroups?: Array<{
        /** 弹性供应组ID。 */
        AutoProvisioningGroupId?: string;
        /** 弹性供应组的名称。 */
        AutoProvisioningGroupName?: string;
        /** 交付类型。可能值：

        - request：一次性。供应组仅在启动时交付实例集群，调度失败后不再重试。

        - maintain：持续供应。供应组在启动时尝试交付实例集群，并监控实时容量，未达到目标容量则尝试继续创建ECS实例。 */
        AutoProvisioningGroupType?: string;
        /** 创建时间。 */
        CreationTime?: string;
        /** 弹性供应组实时容量超过目标容量并触发缩容时，是否释放缩容的实例。可能值：

        - termination：释放缩容的实例。
        - no-termination：只将缩容的实例移出弹性供应组。 */
        ExcessCapacityTerminationPolicy?: string;
        /** 扩展启动模板的详细信息。 */
        LaunchTemplateConfigs?: Array<{
          /** 扩展启动模板对应的实例规格。 */
          InstanceType?: string;
          /** 扩展启动模板对应实例规格的价格上限。 */
          MaxPrice?: number;
          /** 扩展启动模板对应的实例规格的优先级，取值为0时最高。 */
          Priority?: number;
          /** 扩展启动模板对应的虚拟交换机的ID。 */
          VSwitchId?: string;
          /** 扩展启动模板对应的实例规格的权重。 */
          WeightedCapacity?: number }>;
        /** 关联的实例启动模板的ID。 */
        LaunchTemplateId?: string;
        /** 关联的实例启动模板的版本。 */
        LaunchTemplateVersion?: string;
        /** 抢占式实例的最高价格。

        > 同时设置了MaxSpotPrice和LaunchTemplateConfig.N.MaxPrice时，以最低值为准。

        LaunchTemplateConfig.N.MaxPrice在创建弹性供应组时设置，且不可修改。 */
        MaxSpotPrice?: number;
        /** 按量付费实例相关的策略。 */
        PayAsYouGoOptions?: {
          /** 创建按量付费实例的策略。可能值：

          - lowest-price：成本优化策略。选择价格最低的实例规格。

          - prioritized：优先级策略。按照LaunchTemplateConfig.N.Priority设定的优先级创建实例。

          > LaunchTemplateConfig.N.Priority在创建弹性供应组时设置，且不可修改。 */
          AllocationStrategy?: string };
        /** 所在地域的ID。 */
        RegionId?: string;
        /** 抢占式实例相关的策略。 */
        SpotOptions?: {
          /** 创建抢占式实例的策略。可能值：

          - lowest-price：成本优化策略。选择价格最低的实例规格。

          - diversified：均衡可用区分布策略。在扩展启动模板指定的可用区内创建实例，均匀分布到各可用区。 */
          AllocationStrategy?: string;
          /** 停止了超额的抢占式实例后的下一步动作。可能值：

          - stop：保持停止状态。
          - terminate：释放。 */
          InstanceInterruptionBehavior?: string;
          /** 弹性供应组选择价格最低的实例规格创建实例的数量。

          > 该参数在创建弹性供应组时被设置，且不可修改。 */
          InstancePoolsToUseCount?: number };
        /** 弹性供应组整体调度的执行状态。可能值：

        - fulfilled：已成功完成调度任务。
        - pending-fulfillment：创建实例中。
        - pending-termination：移除实例中。
        - error：调度时发生异常，未能交付实例集群。 */
        State?: string;
        /** 弹性供应组的状态。可能值：

        - submitted：完成创建，但弹性供应组尚未开始执行调度任务。
        - active：弹性供应组已开始执行调度任务。
        - deleted：弹性供应组已删除。
        - delete-running：弹性供应组删除中。
        - modifying：弹性供应组修改中。 */
        Status?: string;
        /** 弹性供应组的目标容量设置。 */
        TargetCapacitySpecification?: {
          /** PayAsYouGoTargetCapacity和SpotTargetCapacity之和小于TotalTargetCapacity时，指定的差额容量的计费方式。可能值：

          - PayAsYouGo：按量付费实例
          - Spot：抢占式实例 */
          DefaultTargetCapacityType?: string;
          /** 按量付费实例的目标容量。 */
          PayAsYouGoTargetCapacity?: number;
          /** 抢占式实例的目标容量。 */
          SpotTargetCapacity?: number;
          /** 弹性供应组的目标总容量，由以下三个部分组成：

          - PayAsYouGoTargetCapacity
          - SpotTargetCapacity
          - PayAsYouGoTargetCapacity和SpotTargetCapacity之外的差额容量 */
          TotalTargetCapacity?: number };
        /** 删除弹性供应组时，是否释放组内实例。可能值：

        - true：释放组内实例。
        - false：保留组内实例。 */
        TerminateInstances?: boolean;
        /** 弹性供应组到期时，是否释放组内实例。可能值：

        - true：释放组内实例。
        - false：只将组内实例移出弹性供应组。 */
        TerminateInstancesWithExpiration?: boolean;
        /** 弹性供应组的启动时间，和`ValidUntil`结合确定有效时段。 */
        ValidFrom?: string;
        /** 弹性供应组的到期时间，和`ValidFrom`结合确定有效时段。 */
        ValidUntil?: string }>;
      /** 页码。 */
      PageNumber?: number;
      /** 每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 查询到的弹性供应组的个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeAutoSnapshotPolicyEx
   * 调用DescribeAutoSnapshotPolicyEX查询您在某个地域下，所有已创建的符合查询条件的自动快照策略。
   * @summary: 调用DescribeAutoSnapshotPolicyEX查询您在某个地域下，所有已创建的符合查询条件的自动快照策略。
   */
  export namespace DescribeAutoSnapshotPolicyEx {
    export type Params = {
      /** 要查询的自动快照策略所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 自动快照策略ID。 */
      AutoSnapshotPolicyId?: string;
      /** 自动快照策略的名称。 */
      AutoSnapshotPolicyName?: string;
      /** 自动快照策略返回结果分多页展示。

      起始值：1。

      默认值：1。 */
      PageNumber?: number;
      /** 分页展示返回的自动快照策略时的每页行数。

      最大值：100。

      默认值：10。 */
      PageSize?: number;
      /** 标签列表。 */
      Tag?: Array<{
        /** 自动快照策略的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。 */
        Key?: string;
        /** 自动快照策略的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或者https://。 */
        Value?: string }>;
      /** 资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。

      >不支持默认资源组过滤。 */
      ResourceGroupId?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 自动快照策略详情AutoSnapshotPolicy组成的集合。 */
      AutoSnapshotPolicies?: Array<{
        /** 自动快照策略ID。 */
        AutoSnapshotPolicyId?: string;
        /** 自动快照策略的名称。 */
        AutoSnapshotPolicyName?: string;
        /** > 该参数正在邀测中，暂未开放使用。 */
        CopiedSnapshotsRetentionDays?: number;
        /** 创建时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
        CreationTime?: string;
        /** 启用该策略的云盘数量。 */
        DiskNums?: number;
        /** > 该参数正在邀测中，暂未开放使用。 */
        EnableCrossRegionCopy?: boolean;
        /** 自动快照策略所属的地域ID。 */
        RegionId?: string;
        /** 指定自动快照的重复日期。选定周一到周日中需要创建快照的日期，参数为1~7的数字，如1表示周一。允许选择多个日期。 */
        RepeatWeekdays?: string;
        /** 资源组ID。 */
        ResourceGroupId?: string;
        /** 指定自动快照的保留时间，单位为天。可能值：

        -  -1：永久保存。
        - 1~65536：指定保存天数。 */
        RetentionDays?: number;
        /** 自动快照策略状态。可能值：

        - Normal：正常。
        - Expire：由于账号欠费无法使用该策略。 */
        Status?: string;
        /** 自动快照策略的标签键值集合。 */
        Tags?: Array<{
          /** 自动快照策略的标签键。 */
          TagKey?: string;
          /** 自动快照策略的标签值。 */
          TagValue?: string }>;
        /** > 该参数正在邀测中，暂未开放使用。 */
        TargetCopyRegions?: string;
        /** 指定自动快照的创建时间点。

        使用UTC +8时间，单位为小时。从00:00~23:00共24个时间点可选，参数为0~23的数字，如：1代表在01:00时间点。可以选定多个时间点。

        传递参数为JSON数组格式：`["0", "1", ... "23"]`，最多24个时间点，用半角逗号字符（,）隔开。 */
        TimePoints?: string;
        /** 启用该策略的拓展卷数量。 */
        VolumeNums?: number }>;
      /** 自动快照策略列表的页码。 */
      PageNumber?: number;
      /** 分页展示返回的自动快照策略时的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 自动快照策略的总个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeAvailableResource
   * ## 接口说明
   * 
   * 参数`DestinationResource`的取值有不同的逻辑与要求。在下列的顺序列表中，顺序越低的取值需要设置更多的参数，不支持通过低顺序的取值筛选高顺序的资源类别。
   * 
   * - 取值顺序：`Zone > IoOptimized > InstanceType = Network = ddh > SystemDisk > DataDisk`
   * 
   * - 取值示例：
   * 
   *     - 若参数`DestinationResource`取值为`DataDisk`：
   * 
   *          - `ResourceType`取值为`disk`表示查询与ECS实例规格无关的数据盘类型，可以不传入参数`InstanceType`。
   * 
   *         - `ResourceType`取值为`instance`表示查询与ECS实例同时购买的数据盘类型，因实例规格对系统盘及数据盘有一定的限制，所以需要同时指定`InstanceType`与参数`SystemDiskCategory`。
   * 
   *     - 若参数`DestinationResource`取值为`SystemDisk`，`ResourceType`取值为`instance`，由于ECS实例规格对系统盘存在限制，则必须要传入参数`InstanceType`。
   * 
   *     - 若参数`DestinationResource`取值为`InstanceType`，建议传入参数`IoOptimized`和`InstanceType`。
   * 
   *     - 查询指定地域下所有可用区的ecs.g5.large库存供应情况：`RegionId=cn-hangzhou &DestinationResource=InstanceType &IoOptimized=optimized &InstanceType=ecs.g5.large`。
   * 
   *     - 查询指定地域下有ecs.g5.large库存供应的可用区列表：`RegionId=cn-hangzhou &DestinationResource=Zone &IoOptimized=optimized &InstanceType=ecs.g5.large`。
   * @summary: 调用DescribeAvailableResource查询某一可用区的资源列表。您可以在某一可用区创建实例（RunInstances）或者修改实例规格（ModifyInstanceSpec）时查询该可用区的资源列表。
   */
  export namespace DescribeAvailableResource {
    export type Params = {
      /** 目标地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 资源的计费方式。更多信息，请参见[计费概述](https://help.aliyun.com/document_detail/25398.html)。取值范围： 
               
      - PrePaid：包年包月。
      - PostPaid：按量付费。

      默认值：PostPaid。 */
      InstanceChargeType?: string;
      /** 按量付费实例的竞价策略。取值范围： 
               
      - NoSpot：正常按量付费实例。
      - SpotWithPriceLimit：设置上限价格的抢占式实例。
      - SpotAsPriceGo：系统自动出价，最高按量付费价格。

      默认值：NoSpot。

      当参数InstanceChargeType取值为PostPaid时，参数SpotStrategy才有效。  */
      SpotStrategy?: string;
      /** 抢占式实例的保留时长，单位为小时。取值范围：0~6。

      - 保留时长2~6正在邀测中，如需开通请提交工单。
      - 取值为0，则为无保护期模式。

      默认值：1。 */
      SpotDuration?: number;
      /** 要查询的资源类型。取值范围： 
               
      - Zone：可用区。
      - IoOptimized：I/O优化。
      - InstanceType：实例规格。
      - SystemDisk：系统盘。
      - DataDisk：数据盘。
      - Network：网络类型。
      - ddh：专有宿主机。

      参数DestinationResource的取值方式请参见本文中的**接口说明**。 */
      DestinationResource: string;
      /** 可用区ID。

      默认值：无，表示随机分配当前地域下的可用区，返回该地域（`RegionId`）下所有可用区的符合查询条件的资源。 */
      ZoneId?: string;
      /** 是否为I/O优化实例。取值范围： 
               
      - none：非I/O优化实例。
      - optimized：I/O优化实例。


      默认值：optimized。 */
      IoOptimized?: string;
      /** 专有宿主机ID。 */
      DedicatedHostId?: string;
      /** 实例规格。更多信息，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)，您也可以调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)接口获得最新的规格表。

      参数InstanceType的取值方式请参见本文中的**接口说明**。 */
      InstanceType?: string;
      /** 系统盘类型。取值范围： 
               
      - cloud：普通云盘。
      - cloud_efficiency：高效云盘。
      - cloud_ssd：SSD云盘。
      - ephemeral_ssd：本地SSD盘。
      - cloud_essd：ESSD云盘。
      - cloud_auto：ESSD AutoPL云盘。
      - cloud_essd_entry：ESSD Entry云盘。默认值：cloud_efficiency。

      > 参数ResourceType取值为instance、DestinationResource取值为DataDisk时，参数SystemDiskCategory是必选参数。如果未传递参数值，则以默认值生效。 */
      SystemDiskCategory?: string;
      /** 数据盘类型。取值范围： 
               
      - cloud：普通云盘。
      - cloud_efficiency：高效云盘。
      - cloud_ssd：SSD云盘。
      - ephemeral_ssd：本地SSD盘。
      - cloud_essd：ESSD云盘。
      - cloud_auto：ESSD AutoPL云盘。
      - cloud_essd_entry：ESSD Entry云盘。 */
      DataDiskCategory?: string;
      /** 网络类型。取值范围： 
              
      - vpc：专有网络。
      - classic：经典网络。
                */
      NetworkCategory?: string;
      /** 实例规格的vCPU内核数目。取值参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。

      当DestinationResource取值为InstanceType时，Cores才为有效参数。  */
      Cores?: number;
      /** 实例规格的内存大小，单位为GiB。取值参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。

      当DestinationResource取值为InstanceType时，Memory才为有效参数。  */
      Memory?: number;
      /** 资源类型。取值范围：

      - instance：ECS实例。
      - disk：云盘。
      - reservedinstance：预留实例券。
      - ddh：专有宿主机。 */
      ResourceType?: string;
      /** 预留实例券的范围。取值范围：
               
      - Region：地域级别。
      - Zone：可用区级别。 */
      Scope?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 库存信息组成的集合。 */
      AvailableZones?: Array<{
        /** 可供创建的具体资源组成的数组。 */
        AvailableResources?: Array<{
          /** 支持的可供创建的具体资源组成的数组。 */
          SupportedResources?: Array<{
            /** 云盘容量范围的最大值。

            仅当入参DestinationResource取值为SystemDisk或DataDisk时该参数才生效。 */
            Max?: number;
            /** 云盘容量范围的最小值。

            仅当入参DestinationResource取值为SystemDisk或DataDisk时该参数才生效。 */
            Min?: number;
            /** 具体资源类型的状态描述。可能值： 
                      
            - Available：资源充足。 
            - SoldOut：资源已售罄。 
                       */
            Status?: string;
            /** 根据库存情况对资源状态进行详细描述。可能值：

            - WithStock：库存充足。
            - ClosedWithStock：库存供应保障能力低，建议选用WithStock状态的产品规格。
            - WithoutStock：库存售罄，将会补充资源，建议选用WithStock状态的产品规格。
            - ClosedWithoutStock：库存售罄，且不补充资源，请选用WithStock状态的产品规格。 */
            StatusCategory?: string;
            /** 云盘容量的单位。

            仅当入参DestinationResource取值为SystemDisk或DataDisk时该参数才生效。 */
            Unit?: string;
            /** 资源值。 */
            Value?: string }>;
          /** 资源类型。可能值： 
                    
          - Zone：可用区。
          - IoOptimized：I/O优化。 
          - InstanceType：实例规格。
          - SystemDisk：系统盘。 
          - DataDisk：数据盘。 
          - Network：网络类型。
          - ddh：专有宿主机。
                     */
          Type?: string }>;
        /** 地域ID。 */
        RegionId?: string;
        /** 可用区的状态描述。可能值： 
                  
        - Available：资源充足 
        - SoldOut：资源已售罄 
                   */
        Status?: string;
        /** 根据可用区下库存情况对可用区状态进行详细描述。可能值：

        - WithStock：库存充足。
        - ClosedWithStock：库存供应保障能力低，建议选用WithStock状态的产品规格。
        - WithoutStock：库存售罄，将会补充资源，建议选用WithStock状态的产品规格。
        - ClosedWithoutStock：库存售罄，且不补充资源，请选用WithStock状态的产品规格。 */
        StatusCategory?: string;
        /** 可用区ID。 */
        ZoneId?: string }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeBandwidthLimitation
   * 调用DescribeBandwidthLimitation查询不同实例规格可以购买、升级或降配的公网带宽上限。
   * @summary: 调用DescribeBandwidthLimitation查询不同实例规格可以购买、升级或降配的公网带宽上限。
   */
  export namespace DescribeBandwidthLimitation {
    export type Params = {
      /** 目标地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 实例的计费方式。更多详情，请参见[计费概览](https://help.aliyun.com/document_detail/25398.html)。取值范围： 

      - PrePaid：包年包月。
      - PostPaid：按量付费。

      默认值：PostPaid。 */
      InstanceChargeType?: string;
      /** 按量付费实例的抢占策略。取值范围： 

      - NoSpot：正常按量付费实例。
      - SpotWithPriceLimit：设置上限价格的抢占式实例。
      - SpotAsPriceGo：系统自动出价，最高按量付费价格。

      默认值：NoSpot。

      >当参数InstanceChargeType取值为PostPaid时，参数SpotStrategy才有效。 */
      SpotStrategy?: string;
      /** 实例规格。取值请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。 */
      InstanceType: string;
      /** 资源ID。

      > 当您将参数OperationType设置为Upgrade或者Downgrade时，参数ResourceId为必选参数。  */
      ResourceId?: string;
      /** 查询不同操作方式的公网带宽规格限制。取值范围： 

      - Upgrade：升级公网带宽。
      - Downgrade：降级公网带宽。
      - Create：新建ECS实例。

      默认值：Create。 */
      OperationType?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 公网带宽上限信息组成的集合。 */
      Bandwidths?: Array<{
        /** 公网带宽的计费方式。取值范围：

        - PayByBandwidth：按固定带宽计费。
        - PayByTraffic：按使用流量计费。 */
        InternetChargeType?: string;
        /** 公网带宽最大值。 */
        Max?: number;
        /** 公网带宽最小值。 */
        Min?: number;
        /** 公网带宽单位。 */
        Unit?: string }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeBandwidthPackages
   * undefined
   * @deprecated
   */
  export namespace DescribeBandwidthPackages {
    export type Params = {
      RegionId: string;
      BandwidthPackageId?: string;
      NatGatewayId?: string;
      PageNumber?: number;
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      BandwidthPackages?: Array<{
        Bandwidth?: string;
        BandwidthPackageId?: string;
        BusinessStatus?: string;
        CreationTime?: string;
        Description?: string;
        ISP?: string;
        InstanceChargeType?: string;
        InternetChargeType?: string;
        IpCount?: string;
        Name?: string;
        NatGatewayId?: string;
        PublicIpAddresses?: Array<{
          AllocationId?: string;
          IpAddress?: string }>;
        RegionId?: string;
        Status?: string;
        ZoneId?: string }>;
      PageNumber?: number;
      PageSize?: number;
      RequestId?: string;
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeCapacityReservationInstances
   * 调用DescribeCapacityReservationInstances查询容量预定服务已匹配的实例列表。
   * @summary: 调用DescribeCapacityReservationInstances查询容量预定服务已匹配的实例列表。
   */
  export namespace DescribeCapacityReservationInstances {
    export type Params = {
      /** 容量预定服务所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 分页查询时每页行数。

      最大值：100。

      默认值：10。 */
      MaxResults?: number;
      /** 容量预定服务查询起始标志。由上一次的请求结果中获取。 */
      NextToken?: string;
      /** 容量预定服务ID。 */
      'PrivatePoolOptions.Id': string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 容量预定服务已匹配的实例列表。 */
      CapacityReservationItem?: Array<{
        /** 实例ID。 */
        InstanceId?: string }>;
      /** 容量预定服务每页显示行数。 */
      MaxResults?: number;
      /** 容量预定服务下一个查询起始标志。 */
      NextToken?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 符合查询条件的记录条数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeCapacityReservations
   * 调用DescribeCapacityReservations查询一个或多个容量预定服务的详细信息。
   * @summary: 调用DescribeCapacityReservations查询一个或多个容量预定服务的详细信息。
   */
  export namespace DescribeCapacityReservations {
    export type Params = {
      /** 容量预定服务所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。

      >不支持默认资源组过滤。 */
      ResourceGroupId?: string;
      /** 标签列表 */
      Tag?: Array<{
        /** 标签键。N表示可以设置多个标签键进行过滤，N的取值范围为1~20。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。 */
        Key?: string;
        /** 标签值。N表示可以设置多个标签值进行过滤，N的取值范围为1~20。 */
        Value?: string }>;
      /** 分页查询时每页行数。

      最大值：100。

      默认值：10。 */
      MaxResults?: number;
      /** 容量预定服务查询起始标志。由上一次的请求结果中获取。 */
      NextToken?: string;
      /** 容量预定服务ID列表。取值可以由多个ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。 */
      'PrivatePoolOptions.Ids'?: string;
      /** 实例的操作系统。取值范围：

      - windows：仅查询Windows系统的容量预定服务。
      - linux：仅查Linux系统的容量预定服务。
      - all：查询所有容量预定服务。

      默认值：all。 */
      Platform?: string;
      /** 实例规格。 */
      InstanceType?: string;
      /** 容量预定服务所属地域下的可用区ID。 */
      ZoneId?: string;
      /** 实例的计费方式。取值范围：

      - PostPaid：按量付费。
      - PrePaid：包年包月。

      默认值：PostPaid。 */
      InstanceChargeType?: string;
      /** 容量预定服务的状态。取值范围：

      - All：所有状态。
      - Pending：初始化。指定时间生效的容量预定会先进入初始化状态。
      - Preparing：准备中。指定时间生效的容量预定在资源交付进行阶段，处于准备中状态。
      - Prepared：待生效。指定时间生效的容量预定在资源交付完成，服务正式生效之前，处于待生效状态。
      - Active：生效中。
      - Released：已释放，包括手动释放与到期自动释放。

      默认值：Active。 */
      Status?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 容量预定服务详细信息组成的集合。 */
      CapacityReservationSet?: Array<{
        /** 资源分配详情。 */
        AllocatedResources?: Array<{
          /** 实例规格。 */
          InstanceType?: string;
          /** 在一个实例规格内，需要预留的实例的总数量。 */
          TotalAmount?: number;
          /** 已使用的实例的数量。 */
          UsedAmount?: number;
          /** 可用区ID。 */
          zoneId?: string }>;
        /** 容量预定服务描述。 */
        Description?: string;
        /** 容量预定服务的失效时间。 */
        EndTime?: string;
        /** 容量预定服务的失效方式。可能值：

        - Limited：指定时间释放。
        - Unlimited：手动释放。不限制时间。 */
        EndTimeType?: string;
        /** 容量预定服务中实例的付费类型。可能值：

        - PostPaid：按量付费。
        - PrePaid：包年包月。 */
        InstanceChargeType?: string;
        /** 匹配的实例的操作系统。可能值：

        - windows。
        - linux。 */
        Platform?: string;
        /** 容量预定服务ID。 */
        PrivatePoolOptionsId?: string;
        /** 容量预定服务生效后生成的私有资源池的类型。可能值：

        - Open：开放模式。
        - Target：专用模式。
         */
        PrivatePoolOptionsMatchCriteria?: string;
        /** 容量预定服务名称。 */
        PrivatePoolOptionsName?: string;
        /** 容量预定服务所属地域ID。 */
        RegionId?: string;
        /** 容量预定搭配的预留实例券ID。 */
        ReservedInstanceId?: string;
        /** 容量预定服务所属的资源组ID。 */
        ResourceGroupId?: string;
        /** 容量预定搭配的节省计划券ID。 */
        SavingPlanId?: string;
        /** 容量预定服务生效时间。 */
        StartTime?: string;
        /** 容量预定生效方式。可能值：

        - Now：立即生效。
        - Later：指定时间生效。 */
        StartTimeType?: string;
        /** 容量预定服务的状态。可能值：

        - Pending：初始化。
        - Preparing：准备中。
        - Prepared：待生效。
        - Active：生效中。
        - Released：已释放，包括手动释放与到期自动释放。 */
        Status?: string;
        /** 容量预定服务绑定的标签键值对信息。 */
        Tags?: Array<{
          /** 标签键。 */
          TagKey?: string;
          /** 标签值。 */
          TagValue?: string }>;
        /** > 该参数正在邀测中，暂未开放使用。 */
        TimeSlot?: string }>;
      /** 容量预定服务每页显示行数。 */
      MaxResults?: number;
      /** 容量预定服务下一个查询起始标志。 */
      NextToken?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 符合查询条件的记录条数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeClassicLinkInstances
   * 调用该接口时，您需要注意：
   * 
   * -  该接口仅支持经典网络类型实例。
   * -  单次最多只能查询100台经典网络类型实例。
   * -  参数`VpcId`和`InstanceId`不能同时为空。
   * @summary: 调用DescribeClassicLinkInstances查询一台或多台与专有网络VPC建立了连接的经典网络类型实例。
   */
  export namespace DescribeClassicLinkInstances {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** VPC ID。目标VPC必须已开启ClassicLink功能，详情请参见[建立ClassicLink连接](https://help.aliyun.com/document_detail/65413.html)。  */
      VpcId?: string;
      /** 实例ID。最多指定100台实例ID，并使用半角逗号（,）隔开。  */
      InstanceId?: string;
      /** 当前页码。起始值：1

      默认值：1  */
      PageNumber?: string;
      /** 分页查询时设置的每页行数。取值范围：1~100

      默认值：10  */
      PageSize?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 返回经典网络类型实例和VPC连接信息。 */
      Links?: Array<{
        /** 实例ID。 */
        InstanceId?: string;
        /** VPC ID。 */
        VpcId?: string }>;
      /** 分页查询的页码。 */
      PageNumber?: number;
      /** 分页查询的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 连接总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeCloudAssistantStatus
   * ## 接口说明
   * 
   * 建议您先调用该接口查询实例的云助手状态，当CloudAssistantStatus为true时再执行命令或下发文件，尤其对于新购实例。
   * @summary: 调用DescribeCloudAssistantStatus查询一台或者多台实例是否安装了云助手Agent。如果已安装了云助手，还将查询云助手命令执行的总数量、正在执行的数量以及最近一次命令执行的时间。
   */
  export namespace DescribeCloudAssistantStatus {
    export type Params = {
      /** 实例所在地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例的操作系统类型。取值范围：

      - Windows。
      - Linux。
      - FreeBSD。 */
      OSType?: string;
      /** 当前页码。

      起始值为1。

      默认值为1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。若已设置**InstanceId**参数，则该参数无效。
      最大值为50。

      默认值为10。 */
      PageSize?: number;
      /** 实例ID列表。 */
      InstanceId?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例云助手安装状态结果集合。 */
      InstanceCloudAssistantStatusSet?: Array<{
        /** 实例内的云助手运行中的任务数。 */
        ActiveTaskCount?: number;
        /** 实例内的云助手是否在运行中。可能值：

        - true：2分钟内有心跳。

        - false：2分钟内无心跳。 */
        CloudAssistantStatus?: string;
        /** 云助手Agent版本号，若未安装或未运行云助手Agent，则该值为空。 */
        CloudAssistantVersion?: string;
        /** 实例ID。 */
        InstanceId?: string;
        /** 实例内的云助手已完成的任务数。 */
        InvocationCount?: number;
        /** 云助手最近一次心跳时间。该值平均每分钟（有上下5秒的随机浮动，最短55秒，最长65秒）更新一次。 */
        LastHeartbeatTime?: string;
        /** 最近一次命令执行的时间。 */
        LastInvokedTime?: string;
        /** 实例操作系统类型。可能值：

        - Windows。
        - Linux。
        - FreeBSD。 */
        OSType?: string;
        /** 实例内的云助手是否支持会话管理功能。若不支持，表示云助手版本较低，请将客户端更新至最新版本。

        云助手支持会话管理功能的最低版本如下：
        - Linux：2.2.3.189
        - Windows：2.1.3.189 */
        SupportSessionManager?: boolean }>;
      /** 当前页码。 */
      PageNumber?: number;
      /** 每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 实例总个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeClusters
   * undefined
   * @deprecated
   */
  export namespace DescribeClusters {
    export type Params = {
      RegionId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      Clusters?: Array<{
        ClusterId?: string }>;
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeCommands
   * ## 接口说明
   * 
   * 只输入参数`Action`和`RegionId`，不输入其他任何请求参数，则默认查询您手动创建的所有可用的命令（`CommandId`）。
   * @summary: 调用DescribeCommands查询您手动创建的云助手命令或者阿里云提供的公共命令。
   */
  export namespace DescribeCommands {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 公共命令的提供者。参数值的具体说明如下：

      - 当该参数不传值时，默认查询您手动创建的所有云助手命令。
      - 当该参数取值为`AlibabaCloud`时，查询由阿里云提供的所有公共命令。
      - 当该参数的取值为具体的公共命令提供者时，查询该提供者提供的所有公共命令。例如：
          - 当`Provider=AlibabaCloud.ECS.GuestOS`时，查询`AlibabaCloud.ECS.GuestOS`提供的公共命令。
          - 当`Provider=AlibabaCloud.ECS.GuestOSDiagnose`时，查询`AlibabaCloud.ECS.GuestOSDiagnose`提供的公共命令。 */
      Provider?: string;
      /** 命令ID。 */
      CommandId?: string;
      /** 命令的名称。当指定了`Provider`参数查询公共命令时，默认支持模糊查询。 */
      Name?: string;
      /** 公共命令的描述。仅当指定了`Provider`参数查询公共命令时该参数生效，默认支持模糊查询。 */
      Description?: string;
      /** 命令的类型。取值范围： 

      - RunBatScript：命令为在Windows实例中运行的Bat脚本。
      - RunPowerShellScript：命令为在Windows实例中运行的PowerShell脚本。
      - RunShellScript：命令为在Linux实例中运行的Shell脚本。 */
      Type?: string;
      /** 设置返回数据中`CommandContent`字段和`Output`字段的编码方式。取值范围：
      - PlainText：返回原始脚本内容和输出信息。
      - Base64：返回Base64编码后的脚本内容和输出信息。

      默认值为Base64。 */
      ContentEncoding?: string;
      /** 当前页码。

      起始值为1。

      默认值为1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值为50。

      默认值为10。 */
      PageSize?: number;
      /** 若查询结果包含公共命令，是否只查询最新版本的公共命令。该参数不影响私有命令的查询。

      - true：只查询最新版本的公共命令。

      - false：查询所有版本的公共命令。

      默认值：false。 */
      Latest?: boolean;
      /** 命令所属的资源组ID。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 命令的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。

        最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** 命令的标签值。N的取值范围为1~20。该值可以为空字符串。

        最多支持128个字符，不能包含`http://`或`https://`。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 命令数据集类型。 */
      Commands?: Array<{
        /** 公共命令的类目。 */
        Category?: string;
        /** 命令内容，以Base64编码后传输。

        - 若ContentEncoding指定PlainText，返回原始脚本内容。

        - 若ContentEncoding指定Base64，返回Base64编码后的脚本内容。 */
        CommandContent?: string;
        /** 命令ID。 */
        CommandId?: string;
        /** 命令创建时间。 */
        CreationTime?: string;
        /** 命令描述。 */
        Description?: string;
        /** 该命令是否启用自定义参数。
         */
        EnableParameter?: boolean;
        /** 使用该命令创建的任务数。 */
        InvokeTimes?: number;
        /** 公共命令是否是最新版本。如果多个命令属于同一个`Provider`，且名称与类目相同，则这些命令属于同一个命令的不同版本。您手动创建的云助手命令不会返回该值。 */
        Latest?: boolean;
        /** 命令名称。 */
        Name?: string;
        /** 自定义参数详细信息列表。 */
        ParameterDefinitions?: Array<{
          /** 自定义参数的默认值。 */
          DefaultValue?: string;
          /** 自定义参数描述。 */
          Description?: string;
          /** 自定义参数名称。 */
          ParameterName?: string;
          /** 枚举类型自定义参数的可选值。 */
          PossibleValues?: Array<string>;
          /** 该自定义参数是否必填。

          - true：是。

          - false：否。

          默认值：false。 */
          Required?: boolean }>;
        /** 通过创建命令时的commandcontent解析出的自定义参数名列表，以列表（list）的形式返回。如未使用自定义参数功能，则返回空值列表。 */
        ParameterNames?: Array<string>;
        /** 公共命令的提供者。 */
        Provider?: string;
        /** 命令所属的资源组ID。 */
        ResourceGroupId?: string;
        /** 命令的标签信息。 */
        Tags?: Array<{
          /** 命令的标签键。 */
          TagKey?: string;
          /** 命令的标签值。 */
          TagValue?: string }>;
        /** 超时时间，单位：秒。 */
        Timeout?: number;
        /** 命令类型。 */
        Type?: string;
        /** 公共命令的版本。如果多个命令属于同一个`Provider`，且名称与类目相同，则这些命令属于同一个命令的不同版本。您手动创建的云助手命令不会返回该值。 */
        Version?: number;
        /** 执行路径。 */
        WorkingDir?: string }>;
      /** 命令列表页码。 */
      PageNumber?: number;
      /** 每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 命令总个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDedicatedHostAutoRenew
   * 调用DescribeDedicatedHostAutoRenew查询一台或多台包年包月专有宿主机自动续费状态。
   * @summary: 调用DescribeDedicatedHostAutoRenew查询一台或多台包年包月专有宿主机自动续费状态。
   */
  export namespace DescribeDedicatedHostAutoRenew {
    export type Params = {
      /** 专有宿主机ID。最多可以输入100个包年包月专有宿主机ID，ID之间用半角逗号（,）隔开。 */
      DedicatedHostIds: string;
      /** 专有宿主机所属的地域ID。 */
      RegionId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 专有宿主机自动续费属性组成的数组。 */
      DedicatedHostRenewAttributes?: Array<{
        /** 是否自动续费。可能值：
        - true：自动续费
        - false：不自动续费 */
        AutoRenewEnabled?: boolean;
        /** 包年包月专有宿主机内的包年包月ECS实例自动续费时，如果ECS实例续费后的到期时间比专有宿主机的到期时间晚，则该专有宿主机是否随ECS实例自动续费。可能值：

        - AutoRenewWithEcs：跟随ECS实例自动续费。
        - StopRenewWithEcs：不跟随ECS实例自动续费。
         */
        AutoRenewWithEcs?: string;
        /** 专有宿主机ID。 */
        DedicatedHostId?: string;
        /** 自动续费时长。 */
        Duration?: number;
        /** 续费单位。可能值：

        - Week
        - Month */
        PeriodUnit?: string;
        /** 是否自动续费包年包月专有宿主机。取值范围：

        - AutoRenewal：自动续费。
        - Normal：待续费。
        - NotRenewal：不续费，也不发送到期提醒。到期前第三天阿里云会发送不续费提醒。不续费的专有宿主机可以设置成待续费（Normal），再自行续费[RenewDedicatedHosts](https://help.aliyun.com/document_detail/93287.html)或设置为自动续费（AutoRenewal）。 */
        RenewalStatus?: string }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDedicatedHostClusters
   * ## 接口说明
   * 
   * 请求参数的作用类似于一个过滤器，过滤器为逻辑与（AND）关系。如果某一参数为空，则过滤器不起作用。但是参数`DedicatedHostClusterIds`的值如果是一个空JSON数组，即`[]`，则视为该过滤器有效，且返回值为空。
   * @summary: 调用DescribeDedicatedHostClusters查询一个或多个专有宿主机集群的详细信息。
   */
  export namespace DescribeDedicatedHostClusters {
    export type Params = {
      /** >该参数暂未上线，不支持使用。 */
      Status?: string;
      /** >该参数暂未上线，不支持使用。 */
      LockReason?: string;
      /** 专有宿主机集群要加入的资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。

      >不支持默认资源组过滤。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 专有宿主机集群的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或`https://`。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。 */
        Key?: string;
        /** 专有宿主机集群的标签值。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或`https://`。 */
        Value?: string }>;
      /** 专有宿主机集群所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 专有宿主机集群所在的可用区ID。您可以调用[DescribeZones](https://help.aliyun.com/document_detail/25610.html)查看阿里云地域下的可用区。 */
      ZoneId?: string;
      /** 专有宿主机集群ID列表。取值可以由多个专有宿主机集群ID组成一个JSON数组，格式为`["dc-xxxxxxxxx", "dc-yyyyyyyyy", … ,"dc-zzzzzzzzz"]`。支持最多100个ID，用半角逗号字符隔开。 */
      DedicatedHostClusterIds?: string;
      /** 专有宿主机集群名称。 */
      DedicatedHostClusterName?: string;
      /** 专有宿主机集群状态列表的页码。

      起始值：1。

      默认值：1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值：100。

      默认值：10。 */
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 由一个或多个专有宿主机集群状态组成的数组。 */
      DedicatedHostClusters?: Array<{
        /** 专有宿主机集群容量。 */
        DedicatedHostClusterCapacity?: {
          /** 专有宿主机集群内ECS实例规格的可用容量。 */
          AvailableInstanceTypes?: Array<{
            /** 可用的实例规格容量。 */
            AvailableInstanceCapacity?: number;
            /** 实例规格。 */
            InstanceType?: string }>;
          /** 当前可用内存大小。单位：GiB。 */
          AvailableMemory?: number;
          /** 当前可用vCPU数。 */
          AvailableVcpus?: number;
          /** 本地存储容量。 */
          LocalStorageCapacities?: Array<{
            /** 当前可用本地盘大小。单位：GiB。 */
            AvailableDisk?: number;
            /** 数据盘类型。可能值：
            - cloud：普通云盘。
            - cloud_efficiency：高效云盘。
            - cloud_ssd：SSD云盘。
            - ephemeral_ssd：本地SSD盘。
            - cloud_essd：ESSD云盘。 */
            DataDiskCategory?: string;
            /** 本地盘总大小。单位：GiB。 */
            TotalDisk?: number }>;
          /** 总内存大小。单位：GiB。 */
          TotalMemory?: number;
          /** 总vCPU数。 */
          TotalVcpus?: number };
        /** 专有宿主机集群ID。 */
        DedicatedHostClusterId?: string;
        /** 专有宿主机集群名称。 */
        DedicatedHostClusterName?: string;
        /** 专有宿主机集群下的专有宿主机ID列表。 */
        DedicatedHostIds?: Array<string>;
        /** 专有宿主机集群描述。 */
        Description?: string;
        /** 专有宿主机集群所在的地域ID。 */
        RegionId?: string;
        /** 专有宿主机集群的资源组ID。 */
        ResourceGroupId?: string;
        /** 专有宿主机集群的标签。 */
        Tags?: Array<{
          /** 专有宿主机集群的标签键。 */
          TagKey?: string;
          /** 专有宿主机集群的标签值。 */
          TagValue?: string }>;
        /** 专有宿主机集群所在的可用区ID。 */
        ZoneId?: string }>;
      /** 专有宿主机集群状态列表的页码。 */
      PageNumber?: number;
      /** 输入时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 专有宿主机总个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDedicatedHostTypes
   * 调用DescribeDedicatedHostTypes查询指定地域下支持的专有宿主机规格详细参数，或者查询专有宿主机支持的ECS实例规格族。
   * @summary: 调用DescribeDedicatedHostTypes查询指定地域下支持的专有宿主机规格详细参数，或者查询专有宿主机支持的ECS实例规格族。
   */
  export namespace DescribeDedicatedHostTypes {
    export type Params = {
      /** 专有宿主机所在地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 专有宿主机规格。更多详情，请参见[宿主机规格](https://help.aliyun.com/document_detail/68564.html)。 */
      DedicatedHostType?: string;
      /** 专有宿主机规格支持的ECS实例规格族。 */
      SupportedInstanceTypeFamily?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 返回专有宿主机规格的信息。 */
      DedicatedHostTypes?: Array<{
        /** 单个物理CPU的核数。 */
        Cores?: number;
        /** 支持设置CPU超卖比的范围。 */
        CpuOverCommitRatioRange?: string;
        /** 专有宿主机规格类型。 */
        DedicatedHostType?: string;
        /** GPU型号。 */
        GPUSpec?: string;
        /** 专有宿主机上的本地盘数量。 */
        LocalStorageAmount?: number;
        /** 一块本地盘容量，单位：GiB。 */
        LocalStorageCapacity?: number;
        /** 本地盘类型。 */
        LocalStorageCategory?: string;
        /** 内存容量，单位：GiB。 */
        MemorySize?: number;
        /** 物理GPU数量。 */
        PhysicalGpus?: number;
        /** 物理处理器（CPU）数量。 */
        Sockets?: number;
        /** 是否支持设置CPU超卖比。 */
        SupportCpuOverCommitRatio?: boolean;
        /** 专有宿主机支持的ECS实例规格族列表。 */
        SupportedInstanceTypeFamilies?: Array<string>;
        /** 专有宿主机支持的ECS实例规格列表。 */
        SupportedInstanceTypesList?: Array<string>;
        /** 虚拟CPU总核数。 */
        TotalVcpus?: number;
        /** 虚拟GPU总核数。 */
        TotalVgpus?: number }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDedicatedHosts
   * ## 接口说明
   * 
   * 您可以通过以下任一方式查询一台或多台专有宿主机的详细信息：
   * 
   * - 指定`DedicatedHostIds`查询专有宿主机的详细信息。
   * - 指定`DedicatedHostClusterId`查询专有宿主机集群内专有宿主机的详细信息。
   * @summary: 调用DescribeDedicatedHosts查询一台或多台专有宿主机的详细信息，包括物理性能指标、机器码、使用状态和已创建的ECS实例列表等。
   */
  export namespace DescribeDedicatedHosts {
    export type Params = {
      /** 专有宿主机所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 可用区ID。您可以调用[DescribeZones](https://help.aliyun.com/document_detail/25610.html)查看最新的阿里云可用区列表。 */
      ZoneId?: string;
      /** 专有宿主机ID列表。单次最多支持100个ID ，ID之间用半角逗号（,）隔开。 */
      DedicatedHostIds?: string;
      /** 专有宿主机的名称。 */
      DedicatedHostName?: string;
      /** 专有宿主机的使用状态。取值范围：

      - Available：运行中。专有宿主机的正常运行状态。

      - UnderAssessment：物理机风险，即故障潜伏期，其物理机处于可用状态，但可能导致专有宿主机中的ECS实例出现问题。

      - PermanentFailure：永久性故障，专有宿主机不可用。

      - TempUnavailable：宿主机临时不可用。

      - Redeploying：宿主机恢复中。

      默认值：Available。 */
      Status?: string;
      /** 专有宿主机的规格。您可以调用[DescribeDedicatedHostTypes](https://help.aliyun.com/document_detail/134240.html)接口获得最新的专有宿主机规格表。 */
      DedicatedHostType?: string;
      /** 专有宿主机被锁定的原因。取值范围：
      - financial：因欠费被锁定。
      - security：因安全原因被锁定。 */
      LockReason?: string;
      /** 响应信息的页码数。

      默认值：1。 */
      PageNumber?: number;
      /** 响应信息的每页行数。

      最大值：100。

      默认值：10。 */
      PageSize?: number;
      /** 专有宿主机所在资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。

      >不支持默认资源组过滤。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 专有宿主机的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** 专有宿主机的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。 */
        Value?: string }>;
      /** 专有宿主机集群ID。 */
      DedicatedHostClusterId?: string;
      /** 是否展示Socket维度容量信息 */
      SocketDetails?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 专有宿主机的详细信息集合。 */
      DedicatedHosts?: Array<{
        /** 当专有宿主机发生故障时，为其所宿实例设置迁移方案。取值范围：

        - Migrate：专有宿主机整机迁移至另一物理服务器，并对故障前非关机状态的实例进行启动。

        - Stop：在当前专有宿主机上停止实例，确认无法修复专有宿主机后，迁移实例到其他物理机并重新启动实例。

        当专有宿主机上挂载云盘存储时，默认值为Migrate；当专有宿主机上挂载本地盘存储时默认值为Stop。 */
        ActionOnMaintenance?: string;
        /** 专有宿主机是否加入自动部署资源池。取值范围：

        - on：加入自动部署资源池。

        - off：不加入自动部署资源池。

        关于自动部署的更多信息，请参见[自动部署功能介绍](https://help.aliyun.com/document_detail/118938.html)。 */
        AutoPlacement?: string;
        /** 自动释放时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC+0时间，格式为`yyyy-MM-ddTHH:mmZ`。 */
        AutoReleaseTime?: string;
        /** 专有宿主机性能指标集合。 */
        Capacity?: {
          /** 剩余的本地盘容量。单位：GiB。 */
          AvailableLocalStorage?: number;
          /** 剩余的内存容量，单位：GiB。 */
          AvailableMemory?: number;
          /** 剩余的vCPU核数。 */
          AvailableVcpus?: number;
          /** 可用虚拟GPU数量。 */
          AvailableVgpus?: number;
          /** 本地盘类型。 */
          LocalStorageCategory?: string;
          /** Socket维度容量信息。 */
          SocketCapacities?: Array<{
            /** 剩余内存容量，单位：GiB。 */
            AvailableMemory?: number;
            /** vCPU总核数。 */
            AvailableVcpu?: number;
            /** Socket序号。 */
            SocketId?: number;
            /** 内存总容量，单位：GiB。 */
            TotalMemory?: number;
            /** 	
            剩余的vCPU核数。 */
            TotalVcpu?: number }>;
          /** 本地盘总容量，单位：GiB。 */
          TotalLocalStorage?: number;
          /** 内存总容量，单位：GiB。 */
          TotalMemory?: number;
          /** vCPU总核数。 */
          TotalVcpus?: number;
          /** 总虚拟GPU数量。 */
          TotalVgpus?: number };
        /** 专有宿主机的计费方式。 */
        ChargeType?: string;
        /** 单个CPU的核数。 */
        Cores?: number;
        /** CPU超卖比。 */
        CpuOverCommitRatio?: number;
        /** 专有宿主机的创建时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC+0时间，格式为`yyyy-MM-ddTHH:mmZ`。 */
        CreationTime?: string;
        /** 专有宿主机所在的专有宿主机集群ID。 */
        DedicatedHostClusterId?: string;
        /** 专有宿主机ID。 */
        DedicatedHostId?: string;
        /** 专有宿主机的名称。 */
        DedicatedHostName?: string;
        /** 专有宿主机所有者的用户ID。 */
        DedicatedHostOwnerId?: number;
        /** 专有宿主机的规格类型。 */
        DedicatedHostType?: string;
        /** 专有宿主机的描述信息。 */
        Description?: string;
        /** 包年包月专有宿主机的到期时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC+0时间，格式为`yyyy-MM-ddTHH:mmZ`。 */
        ExpiredTime?: string;
        /** GPU型号。 */
        GPUSpec?: string;
        /** 该参数即将被弃用，为提高兼容性，建议您尽量使用其他参数。 */
        HostDetailInfo?: {
          /** 该参数即将被弃用，为提高兼容性，建议您尽量使用其他参数。 */
          SerialNumber?: string };
        /** 专有宿主机上创建的ECS实例。 */
        Instances?: Array<{
          /** 专有宿主机上创建的ECS实例ID。 */
          InstanceId?: string;
          /** ECS实例所有者的用户ID。 */
          InstanceOwnerId?: number;
          /** 专有宿主机上创建的ECS实例规格信息。 */
          InstanceType?: string;
          /** 实例所处的Socket的序号。 */
          SocketId?: string }>;
        /** 专有宿主机机器码。 */
        MachineId?: string;
        /** 专有宿主机的网络属性值。 */
        NetworkAttributes?: {
          /** SLB UDP超时时间。单位：S。当前仅支持60S。 */
          SlbUdpTimeout?: number;
          /** UDP超时时间。单位：S。当前仅支持60S。 */
          UdpTimeout?: number };
        /** 专有宿主机资源被锁定原因。 */
        OperationLocks?: Array<{
          /** 专有宿主机被锁定的原因。可能值：
          - financial：因欠费被锁定。
          - security：因安全原因被锁定。 */
          LockReason?: string }>;
        /** 物理GPU数量。 */
        PhysicalGpus?: number;
        /** 专有宿主机所在地域ID。 */
        RegionId?: string;
        /** 专有宿主机所在资源组ID。 */
        ResourceGroupId?: string;
        /** 包年包月单位。可能值：
        - Month。
        - Year。 */
        SaleCycle?: string;
        'SchedulerOptions.ManagedPrivateSpaceId'?: string;
        /** 物理处理器（CPU）数量。 */
        Sockets?: number;
        /** 专有宿主机的使用状态。可能值：

        - Available：运行中。专有宿主机的正常运行状态。

        - UnderAssessment：物理机风险，即故障潜伏期，其物理机处于可用状态，但可能导致专有宿主机中的ECS实例出现问题。

        - PermanentFailure：故障。永久性故障，专有宿主机不可用。 */
        Status?: string;
        /** 专有宿主机支持的自定义实例规格族。 */
        SupportedCustomInstanceTypeFamilies?: Array<string>;
        /** 专有宿主机支持的ECS实例规格族。 */
        SupportedInstanceTypeFamilies?: Array<string>;
        /** 专有宿主机支持的ECS实例规格。 */
        SupportedInstanceTypesList?: Array<string>;
        /** 专有宿主机的标签。 */
        Tags?: Array<{
          /** 专有宿主机的标签键。 */
          TagKey?: string;
          /** 专有宿主机的标签值。 */
          TagValue?: string }>;
        /** 可用区ID。 */
        ZoneId?: string }>;
      /** 专有宿主机列表的页码。 */
      PageNumber?: number;
      /** 输入时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 专有宿主机总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDemands
   * 您可通过该接口查询阿里云为您报备的资源详情，包括报备资源类型、资源的交付情况以及资源的消费情况。
   * 
   * 默认查询I/O优化实例规格，以及专有网络VPC类型的ECS实例的报备表单状态。
   * 
   * 如果您需要获取关于创建ECS资源需求报备信息（CreateDemand）、修改ECS资源需求报备信息（ModifyDemand）及删除ECS资源需求报备信息（DeleteDemand）的相关信息，请联系您对应的客户经理。
   * @summary: 调用DescribeDemands查询报备资源的交付及使用状态。
   */
  export namespace DescribeDemands {
    export type Params = {
      /** 目标地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 报备单列表的页码。起始值：1

      默认值：1 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。最大值：100

      默认值：10 */
      PageSize?: number;
      /** 是否只预检此次请求。取值范围：

      - true：发送检查请求，不会查询报备单状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
      - false（默认值）：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询报备单状况。 */
      DryRun?: boolean;
      /** 标签列表。 */
      Tag?: Array<{
        /** > 该参数暂未开放使用。 */
        Key?: string;
        /** > 该参数暂未开放使用。 */
        Value?: string }>;
      /** 可用区ID。更多详情，请参见[DescribeZones](https://help.aliyun.com/document_detail/25610.html)获取可用区列表。 */
      ZoneId?: string;
      /** 报备ID。指定该参数后，将忽略其他非必选请求参数。 */
      DemandId?: string;
      /** 报备实例的规格族。 */
      InstanceTypeFamily?: string;
      /** 报备实例的规格。 */
      InstanceType?: string;
      /** 实例的计费方式。取值范围：

      - PostPaid：按量付费
      - PrePaid：包年包月 */
      InstanceChargeType?: string;
      /** 报备实例来源。取值范围：

      * Custom：自助报备。
      * System（默认）：阿里云协助报备。 */
      DemandType?: string;
      /** 报备单或资源使用状态。取值范围：

      - Creating：报备单创建中。
      - Active：资源供应中。
      - Expired：报备单已过期。
      - Finished：消费完毕。
      - Refused：报备拒绝，具体原因请查看返回参数`Comment`。
      - Cancelled：报备取消。 */
      DemandStatus?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 指定地域符合过滤条件的报备单集合。 */
      Demands?: Array<{
        /** 报备资源当前可使用实例数量。 */
        AvailableAmount?: number;
        /** 资源报备被拒绝的反馈建议。 */
        Comment?: string;
        /** 报备资源中待交付实例数量。 */
        DeliveringAmount?: number;
        /** 报备描述。 */
        DemandDescription?: string;
        /** 报备ID。 */
        DemandId?: string;
        /** 报备名称。 */
        DemandName?: string;
        /** 报备单或资源使用的状态。可能值：

        - Creating：报备单创建中。
        - Active：资源供应中。
        - Expired：报备单已过期。
        - Finished：消费完毕。
        - Refused：报备拒绝，具体原因请查看参数`comment`。
        - Cancelled：报备取消，报备资源已取消。报备取消后，资源交付状态无效。 */
        DemandStatus?: string;
        /** 报备单创建时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
        DemandTime?: string;
        /** 报备资源预期截止购买时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
        EndTime?: string;
        /** 报备资源的付费类型。可能值：

        - Prepaid：包年包月
        - Postpaid：按量付费 */
        InstanceChargeType?: string;
        /** 报备的实例规格。 */
        InstanceType?: string;
        /**  报备实例所属的规格族。 */
        InstanceTypeFamily?: string;
        /** 报备资源的使用时长。 */
        Period?: number;
        /** 报备资源的使用时长单位。可能值：

        - Hour
        - Day
        - Week- Month
         */
        PeriodUnit?: string;
        /** 报备资源预期开始购买时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
        StartTime?: string;
        /** 报备资源的交付状态。 */
        SupplyInfos?: Array<{
          /** 交付的实例数量。 */
          Amount?: number;
          /** 需求单对应的私有池ID。 */
          PrivatePoolId?: string;
          /** 资源交付可用的截止时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
          SupplyEndTime?: string;
          /** 资源交付可用的开始时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
          SupplyStartTime?: string;
          /** 资源交付状态。可能值：

          - Delivered ：已交付
          - Delivering：交付中 */
          SupplyStatus?: string }>;
        /** 报备的实例数。 */
        TotalAmount?: number;
        /** 已经消耗的实例数。 */
        UsedAmount?: number;
        /** 报备资源所在的可用区。 */
        ZoneId?: string }>;
      /** 报备单列表的页码。 */
      PageNumber?: number;
      /** 输入时设置的每页行数。 */
      PageSize?: number;
      /** 查询的地域。 */
      RegionId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 查询到的报备单数量。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDeploymentSetSupportedInstanceTypeFamily
   * ## 接口说明
   * 
   * 更多实例规格族的详情，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。
   * @summary: 调用DescribeDeploymentSetSupportedInstanceTypeFamily查询支持部署集的实例规格族。
   */
  export namespace DescribeDeploymentSetSupportedInstanceTypeFamily {
    export type Params = {
      /** 部署集所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 部署策略。取值范围：

      - Availability：高可用策略。

      - AvailabilityGroup：部署集组高可用策略。

      - LowLatency：网络低时延策略。

      默认值：Availability。 */
      Strategy?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 支持部署集的实例规格族。 */
      InstanceTypeFamilies?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDeploymentSets
   * 调用DescribeDeploymentSets查询一个或多个部署集的属性列表。
   * @summary: 调用DescribeDeploymentSets查询一个或多个部署集的属性列表。
   */
  export namespace DescribeDeploymentSets {
    export type Params = {
      /** 部署集所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 部署集列表的页码。

      起始值为1。

      默认值为1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值为50。

      默认值为10。 */
      PageSize?: number;
      /** 部署集ID列表。取值可以由多个部署集ID组成一个JSON数组，格式为`["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]`。最多支持100个ID，ID之间用半角逗号（,）隔开。  */
      DeploymentSetIds?: string;
      /** >该参数已废弃。 */
      NetworkType?: string;
      /** 部署策略。取值范围：

      - Availability：高可用策略。
      - AvailabilityGroup：部署集组高可用策略。 */
      Strategy?: string;
      /** 部署集名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能`以http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      DeploymentSetName?: string;
      /** >该参数已废弃。 */
      Granularity?: string;
      /** >该参数已废弃。 */
      Domain?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 由DeploymentSet组成的数组格式，返回部署集详细信息。 */
      DeploymentSets?: Array<{
        /** 由Capacity组成的数组格式。仅当部署集内有存量ECS实例时提供返回结果，返回结果包含部署集可用区维度的容量信息。 */
        Capacities?: Array<{
          /** 该可用区内，还可以加入当前部署集的ECS实例数量。 */
          AvailableAmount?: number;
          /** 部署集内属于该可用区的ECS实例数量。 */
          UsedAmount?: number;
          /** 可用区ID。只返回部署集内存量ECS实例所属的可用区ID。 */
          ZoneId?: string }>;
        /** 部署集的创建时间。 */
        CreationTime?: string;
        /** 部署集的描述信息。 */
        DeploymentSetDescription?: string;
        /** 部署集ID。 */
        DeploymentSetId?: string;
        /** 部署集名称。 */
        DeploymentSetName?: string;
        /** 部署策略。该返回值对应请求参数`Strategy`的值。 */
        DeploymentStrategy?: string;
        /** 部署域。 */
        Domain?: string;
        /** 部署粒度。 */
        Granularity?: string;
        /** 部署集中的分组数量。

        > 当部署集策略为部署集组高可用策略（AvailabilityGroup）时，该返回值生效。 */
        GroupCount?: number;
        /** 部署集内的实例数量。 */
        InstanceAmount?: number;
        /** 部署集内的实例ID列表。 */
        InstanceIds?: Array<string>;
        /** 部署策略。 */
        Strategy?: string }>;
      /** 部署集列表的页数。 */
      PageNumber?: number;
      /** 设置的每页行数。 */
      PageSize?: number;
      /** 部署集所处的地域ID。 */
      RegionId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 查询到的部署集总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDiagnosticMetricSets
   * 调用DescribeDiagnosticMetricSets查询资源诊断集合列表。
   * @summary: 调用DescribeDiagnosticMetricSets查询资源诊断集合列表。
   */
  export namespace DescribeDiagnosticMetricSets {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 诊断项集合列表。 */
      MetricSetIds?: Array<string>;
      /** 诊断项集合类型。取值范围：

      - User：用户。
      - Common：公共。

      默认值：User。 */
      Type?: 'User' | 'Common';
      /** 资源类型。 */
      ResourceType?: 'instance';
      /** 查询凭证（Token）。取值为上一次调用接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。 */
      NextToken?: string;
      /** 分页查询时每页行数。最大值为100。

      默认值：

      - 当不设置值时，默认值为10。
      - 当设置的值大于100时，默认值为100。 */
      MaxResults?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 诊断指标集合。 */
      MetricSets?: Array<{
        /** 诊断指标集合的描述信息。 */
        Description?: string;
        /** 诊断指标列表。 */
        MetricIds?: Array<string>;
        /** 诊断指标集合ID。 */
        MetricSetId?: string;
        /** 诊断指标集合的名称。 */
        MetricSetName?: string;
        /** 支持的资源类型。 */
        ResourceType?: string;
        /** 诊断指标集合类型。取值范围：

        - User：用户。
        - Common：公共。
         */
        Type?: string }>;
      /** 本次调用返回的查询凭证值。 */
      NextToken?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDiagnosticMetrics
   * 调用DescribeDiagnosticMetrics查询诊断指标列表。
   * @summary: 调用DescribeDiagnosticMetrics查询诊断指标列表。
   */
  export namespace DescribeDiagnosticMetrics {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 诊断指标列表。 */
      MetricIds?: Array<string>;
      /** 支持的资源类型。 */
      ResourceType?: 'instance';
      /** 查询凭证（Token）。取值为上一次调用接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。 */
      NextToken?: string;
      /** 分页查询时每页行数。最大值为100。

      默认值：

      - 当不设置值时，默认值为10。
      - 当设置的值大于100时，默认值为100。 */
      MaxResults?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 诊断指标。 */
      Metrics?: Array<{
        /** 诊断指标描述。 */
        Description?: string;
        /** 是否需要在GuestOS内执行脚本。 */
        GuestMetric?: boolean;
        /** 诊断指标分类。 */
        MetricCategory?: string;
        /** 诊断指标ID。 */
        MetricId?: string;
        /** 诊断指标名称。 */
        MetricName?: string;
        /** 诊断指标支持的资源。 */
        ResourceType?: string;
        /** 支持的操作系统。取值范围：

        - Windows：支持Windows操作系统。
        - Linux：支持Linux操作系统。
        - All：支持Windows和Linux操作系统。 */
        SupportedOperatingSystem?: string }>;
      /** 本次调用返回的查询凭证值。 */
      NextToken?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDiagnosticReportAttributes
   * 调用DescribeDiagnosticReportAttributes查询资源诊断详情。
   * @summary: 调用DescribeDiagnosticReportAttributes查询资源诊断详情。
   */
  export namespace DescribeDiagnosticReportAttributes {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 诊断报告ID。 */
      ReportId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 诊断报告的扩展属性。 */
      Attributes?: string;
      /** 诊断报告创建时间。 */
      CreationTime?: string;
      /** 结束时间。调用[CreateDiagnosticReport](https://help.aliyun.com/document_detail/442490.html)接口创建诊断报告时传入的参数。 */
      EndTime?: string;
      /** 诊断报告完成时间。 */
      FinishedTime?: string;
      /** 诊断集合中所有指标的诊断结果。 */
      MetricResults?: Array<{
        /** 诊断问题列表。 */
        Issues?: Array<{
          /** 诊断问题携带的额外数据，帮助理解问题更多信息，数据格式为JSON的字符串。 */
          Additional?: string;
          /** 诊断问题的唯一识别码。 */
          IssueId?: string;
          /** 问题发生的时间。 */
          OccurrenceTime?: string;
          /** 诊断问题严重程度，严重等级由轻到重如下：

          - Info：有关联信息，可能与异常相关。
          - Warn：有关联信息，可能导致异常。
          - Critical：有关键异常。 */
          Severity?: string }>;
        /** 诊断指标分类。 */
        MetricCategory?: string;
        /** 诊断指标ID。 */
        MetricId?: string;
        /** 诊断指标严重等级。可能值：

        - Unknown：初始状态，表示未开始诊断或者诊断过程程序异常退出，无诊断结论。
        - Normal：诊断正常，没有发现问题。
        - Info：有关联信息，可能与异常相关。
        - NotSupport：GuestOS版本不支持诊断该项目。
        - Warn：有关联信息，可能导致异常。
        - Critical：有关键异常。 */
        Severity?: string;
        /** 指标诊断状态。可能值：

        - InProgress：诊断中。
        - Finished：诊断完成。
        - Failed：诊断失败。 */
        Status?: string }>;
      /** 诊断指标集合ID。 */
      MetricSetId?: string;
      /** 诊断报告ID。资源诊断报告的唯一标志。 */
      ReportId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 资源ID。 */
      ResourceId?: string;
      /** 资源类型。支持的类型为instance。 */
      ResourceType?: string;
      /** 报告严重等级。所有指标中最严重的等级，严重等级由轻到重如下：

      - Unknown：初始状态，表示未开始诊断或者诊断过程程序异常退出，无诊断结论。
      - Normal：诊断正常，没有发现问题。
      - Info：有关联信息，可能与异常相关。
      - Warn：有关联信息，可能导致异常。
      - Critical：有关键异常。 */
      Severity?: string;
      /** 开始时间。调用[CreateDiagnosticReport](https://help.aliyun.com/document_detail/442490.html)接口创建诊断报告时传入的参数。 */
      StartTime?: string;
      /** 诊断报告状态。可能值：

      - InProgress：诊断中。
      - Finished：诊断完成。
      - Failed：诊断失败。 */
      Status?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDiagnosticReports
   * 调用DescribeDiagnosticReports查询资源诊断报告列表。
   * @summary: 调用DescribeDiagnosticReports查询资源诊断报告列表。
   */
  export namespace DescribeDiagnosticReports {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 诊断报告ID列表。 */
      ReportIds?: Array<string>;
      /** 资源ID列表。最多支持100个ID。 */
      ResourceIds?: Array<string>;
      /** 报告状态。取值范围：

      - InProgress：诊断中。
      - Failed：诊断失败。
      - Finished：诊断完成。 */
      Status?: 'InProgress' | 'Finished' | 'Failed' | 'inprogress' | 'finished' | 'failed';
      /** 严重等级。取值范围：

      - Unknown：初始状态，表示未开始诊断或者诊断过程程序异常退出，无诊断结论。
      - Normal：诊断正常，没有发现问题。
      - Info：有关联信息，可能与异常相关。
      - Warn：有关联信息，可能导致异常。
      - Critical：有关键异常。 */
      Severity?: 'normal' | 'info' | 'warn' | 'critical' | 'Normal' | 'Info' | 'Warn' | 'Critical' | 'unknown' | 'Unknown';
      /** 查询凭证（Token）。取值为上一次调用接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。
       */
      NextToken?: string;
      /** 分页查询时每页行数。最大值为100。

      默认值：

      - 当不设置值时，默认值为10。
      - 当设置的值大于100时，默认值为100。 */
      MaxResults?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 本次调用返回的查询凭证值。 */
      NextToken?: string;
      /** 诊断报告列表。 */
      Reports?: Array<{
        /** 诊断报告创建时间。 */
        CreationTime?: string;
        /** 结束时间。调用[CreateDiagnosticReport](https://help.aliyun.com/document_detail/442490.html)接口创建诊断报告时传入的参数。 */
        EndTime?: string;
        /** 诊断报告结束时间。 */
        FinishedTime?: string;
        /** 诊断问题列表。 */
        Issues?: Array<{
          /** 诊断问题的唯一识别码。 */
          IssueId?: string;
          /** 诊断指标分类。 */
          MetricCategory?: string;
          /** 诊断指标ID。 */
          MetricId?: string;
          /** 诊断指标严重等级。严重等级由轻到重如下：

          - Info：有关联信息，可能与异常相关。
          - Warn：有关联信息，可能导致异常。
          - Critical：有关键异常。 */
          Severity?: string }>;
        /** 诊断指标集合ID。 */
        MetricSetId?: string;
        /** 诊断报告ID。 */
        ReportId?: string;
        /** 资源ID。 */
        ResourceId?: string;
        /** 资源类型。 */
        ResourceType?: string;
        /** 严重等级。取值范围：

        - Unknown：初始状态，表示未开始诊断或者诊断过程程序异常退出，无诊断结论。
        - Normal：诊断正常，没有发现问题。
        - Info：有关联信息，可能与异常相关。
        - Warn：有关联信息，可能导致异常。
        - Critical：有关键异常。 */
        Severity?: string;
        /** 开始时间。调用[CreateDiagnosticReport](https://help.aliyun.com/document_detail/442490.html)接口创建诊断报告时传入的参数。 */
        StartTime?: string;
        /** 诊断报告状态。 */
        Status?: string }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDiskMonitorData
   * 可查询云盘实用信息包括读IOPS、写IOPS、读带宽（B/s）、写带宽（B/s）、读时延（μs）以及写时延（μs）。
   * 
   * 调用该接口时，您需要注意：
   * 
   * -  只能查询状态为使用中（`In_Use`）的云盘使用信息。更多详情，请参见[普通云盘状态表](https://help.aliyun.com/document_detail/25689.html)。
   *     > 若查询的信息中出现内容缺失，是因为无法获取该段时间的使用信息，即云盘状态不是使用中（`In_Use`）。
   * 
   * -  一次最多返回400条数据，即指定的`（EndTime–StartTime）/Period`不能超过400。  
   * 
   * - 一次最多能查询近30天内的监控信息，即指定的参数`StartTime`不能超过30天。
   * @summary: 调用DescribeDiskMonitorData查询一块云盘指定时间内的使用信息。
   */
  export namespace DescribeDiskMonitorData {
    export type Params = {
      /** 云盘ID。 */
      DiskId: string;
      /** 数据的起始时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果秒（ss）不是00，则自动取为下一分钟开始时。 */
      StartTime: string;
      /** 数据的结束时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果秒（ss）不是00，则自动取为下一分钟开始时。 */
      EndTime: string;
      /** 数据的精度，单位为秒。取值范围：

      - 60
      - 600  
      - 3600  

      默认值：60 */
      Period?: '60' | '600' | '3600';
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 云盘的监控数据集合。 */
      MonitorData?: Array<{
        /** 系统盘读带宽，单位：Byte/s。 */
        BPSRead?: number;
        /** 系统盘读写总带宽，单位：Byte/s。 */
        BPSTotal?: number;
        /** 系统盘写带宽，单位：Byte/s。 */
        BPSWrite?: number;
        /** 云盘ID。 */
        DiskId?: string;
        /** 系统盘I/O读操作，单位：次/s。 */
        IOPSRead?: number;
        /** 系统盘I/O读写总操作，单位：次/s。 */
        IOPSTotal?: number;
        /** 系统盘I/O写操作，单位：次/s。 */
        IOPSWrite?: number;
        /** 云盘读时延。单位：μs（微秒）。 */
        LatencyRead?: number;
        /** 云盘写时延。单位：μs（微秒）。 */
        LatencyWrite?: number;
        /** 查询监控信息的时间戳。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
        TimeStamp?: string }>;
      /** 请求ID。 */
      RequestId?: string;
      /** 云盘使用信息的返回条目数量。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDisks
   * ### 接口说明
   * 
   * - 请求参数`RegionId`、`ZoneId`、`DiskIds`和`InstanceId`等都是过滤器的概念，参数间是逻辑与（AND）关系。
   * - 请求参数`DiskIds`是一个JSON格式的数组（Array），如果参数为空，则过滤器不起作用，但是`DiskIds`如果是一个空数组，则视为该过滤器有效，且返回空。
   * - 支持以下两种方式查看返回数据：
   *     - 方式一：通过`NextToken`设置查询凭证（Token），其取值是上一次调用DescribeDisks返回的`NextToken`参数值，再通过`MaxResults`设置单页查询的最大条目数。
   *     - 方式二：通过`PageSize`设置单页返回的条目数，再通过`PageNumber`设置页码。
   * 
   *   以上两种方式只能任选其中之一。当返回的条目数较多时，推荐使用方式一。如果设置了`NextToken`，则请求参数`PageSize`和`PageNumber`将失效，且返回数据中的`TotalCount`无效。
   * 
   * - 开启多重挂载特性的云盘可以挂载到多个实例上，您可以根据返回结果的`Attachment`列表查看云盘涉及的所有挂载信息。
   * 
   * 通过阿里云CLI调用API时，不同数据类型的请求参数取值必须遵循格式要求。更多信息，请参见[CLI参数格式说明](https://help.aliyun.com/document_detail/110340.html)。
   * @summary: 调用DescribeDisks查询一块或多块您已经创建的块存储（包括云盘以及本地盘）。
   */
  export namespace DescribeDisks {
    export type Params = {
      /** 块存储所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 可用区ID。 */
      ZoneId?: string;
      /** 云盘或本地盘ID。一个带有格式的JSON数组，最多支持100个ID，用半角逗号（,）隔开。 */
      DiskIds?: string;
      /** 云盘或本地盘挂载的实例ID。 */
      InstanceId?: string;
      /** 要查询的云盘或本地盘类型。取值范围： 
               
      - all：同时查询系统盘与数据盘。
      - system：只查询系统盘。
      - data：只查询数据盘。

      默认值：all。 */
      DiskType?: string;
      /** 云盘或本地盘种类。取值范围： 
               
      - all：所有云盘以及本地盘。
      - cloud：普通云盘。
      - cloud_efficiency：高效云盘。
      - cloud_ssd：SSD盘。
      - cloud_essd：ESSD云盘。
      - cloud_auto：ESSD AutoPL云盘。- local_ssd_pro：I/O密集型本地盘。
      - local_hdd_pro：吞吐密集型本地盘。
      - ephemeral：（已停售）本地盘。
      - ephemeral_ssd：（已停售）本地SSD盘。
      - cloud_essd_entry：ESSD Entry云盘。默认值：all。

      ESSD AutoPL云盘正在邀测中，邀测地域支持华东6（乌兰察布）和华南2（河源）。如需使用，请前往[邀测页面申请](https://www.aliyun.com/daily-act/ecs/ebs?spm=a2c4g.11186623.0.0.4f7c3cb2PMyXmy)。 */
      Category?: string;
      /** 云盘状态。更多信息，请参见[云盘状态](https://help.aliyun.com/document_detail/25689.html)。取值范围：

      -   In_use。
      -   Available。
      -   Attaching。
      -   Detaching。
      -   Creating。
      -   ReIniting。
      -   All。

      默认值：All。 */
      Status?: string;
      /** 创建云盘时使用的快照ID。 */
      SnapshotId?: string;
      /** 云盘或本地盘是否支持卸载。取值范围：

      -   true：支持。可以独立存在，且可以在可用区内自由挂载和卸载。

      -   false：不支持。不可以独立存在，且不可以在可用区内自由挂载和卸载。

      以下类型块存储的`Portable`属性都为`false`，生命周期与实例等同：

      -   本地盘。
      -   本地SSD盘。
      -   包年包月数据盘。 */
      Portable?: boolean;
      /** 云盘是否设置了随实例释放。取值范围：

      -   true：云盘随实例一起释放。
      -   false：云盘保留不释放，转为按量付费数据盘而保留下来。

      默认值：false。 */
      DeleteWithInstance?: boolean;
      /** 释放云盘时，是否会同时释放自动快照。

      - true：是。

      - false：否。

      默认值：false。 */
      DeleteAutoSnapshot?: boolean;
      /** 云盘或本地盘状态列表的页码。

      起始值：1。

      默认值：1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值：100。

      默认值：10。 */
      PageSize?: number;
      /** 查询凭证（Token），取值为上一次API调用返回的`NextToken`参数值。

      有关本接口查看返回数据的设置方式，请参见上文接口说明。 */
      NextToken?: string;
      /** 返回的最大数。取值范围：10~500。

      默认值：
      - 当不设置值或者设置的值小于10，默认值为10。
      - 当设置的值大于500时，默认值为500。 */
      MaxResults?: number;
      /** 云盘或本地盘名称。 */
      DiskName?: string;
      /** 根据自动快照策略ID查询云盘。 */
      AutoSnapshotPolicyId?: string;
      /** 云盘是否启用自动快照策略功能。

      - true：启用。
      - false：未启用。

      > 创建后的云盘默认启用自动快照策略功能，您只需要为云盘绑定自动快照策略即可正常使用。 */
      EnableAutoSnapshot?: boolean;
      /** 云盘是否设置了自动快照策略。
      - true：已设置。
      - false：未设置。

      默认值：false。 */
      EnableAutomatedSnapshotPolicy?: boolean;
      /** 云盘或本地盘的计费方式。取值范围：

      - PrePaid：包年包月。
      - PostPaid：按量付费。 */
      DiskChargeType?: string;
      /** 云盘或本地盘被锁定的原因。取值范围：

      - financial：因欠费被锁定。
      - security：因安全原因被锁定。
      - recycling：抢占式实例的待释放锁定状态。
      - dedicatedhostfinancial：因为专有宿主机欠费导致ECS实例被锁定。 */
      LockReason?: string;
      /** 查询资源时的筛选键，取值必须为`CreationStartTime`。同时设置`Filter.1.Key`和`Filter.1.Value`可以查询在指定时间点后创建的资源信息。 */
      'Filter.1.Key'?: string;
      /** 查询资源时的筛选键，取值必须为`CreationEndTime`。同时设置`Filter.2.Key`和`Filter.2.Value`可以查询在指定时间点前创建的资源信息。 */
      'Filter.2.Key'?: string;
      /** 查询资源时的筛选值。指定该参数时必须同时指定`Filter.1.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC +0时区。 */
      'Filter.1.Value'?: string;
      /** 查询资源时的筛选值。指定该参数时必须同时指定`Filter.2.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC +0时区。 */
      'Filter.2.Value'?: string;
      /** 云盘或本地盘所在的企业资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。

      >不支持默认资源组过滤。 */
      ResourceGroupId?: string;
      /** 是否是共享块存储。 */
      EnableShared?: boolean;
      /** 是否只筛选出加密云盘。

      - true：是。

      - false：否

      默认值：false。 */
      Encrypted?: boolean;
      /** 是否只预检此次请求。取值范围：

      -   true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
      -   false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。

      默认值：false。 */
      DryRun?: boolean;
      /** 云盘使用的KMS密钥ID。 */
      KMSKeyId?: string;
      /** 是否开启了多重挂载特性。取值范围：

      - Disabled：未开启。
      - Enabled：已开启。
      - LegacyShared：用于查询共享块存储。

      多重挂载功能正在邀测中，如需使用，请[提交工单](https://selfservice.console.aliyun.com/ticket/createIndex)。

       */
      MultiAttach?: string;
      /** 云盘或本地盘标签列表。 */
      Tag?: Array<{
        /** 云盘或本地盘的标签键。N的取值范围：1~20。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。 */
        Key?: string;
        /** 云盘或本地盘的标签值。N的取值范围：1~20。 */
        Value?: string;
        /** 云盘或本地盘的标签键。

        >为提高代码兼容性，请尽量使用Tag.N.Key参数。 */
        key?: string;
        /** 云盘或本地盘的标签值。

        >为提高代码兼容性，请尽量使用Tag.N.Value参数。 */
        value?: string }>;
      /** 其他属性值。目前仅支持传入值为IOPS，表示查询当前磁盘的IOPS上限。 */
      AdditionalAttributes?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 云盘或本地盘信息组成的集合。 */
      Disks?: Array<{
        /** 该云盘最后一次挂载的时间。按照ISO8601标准表示，使用UTC+0时间。格式为：yyyy-MM-ddThh:mmZ。 */
        AttachedTime?: string;
        /** 云盘所涉及的挂载信息。由`Attachment`对象组成的列表，查询共享块存储时不返回该列表。 */
        Attachments?: Array<{
          /** 挂载的时间，以UTC +0时间为准。 */
          AttachedTime?: string;
          /** 设备名称。 */
          Device?: string;
          /** 所挂载的实例ID。 */
          InstanceId?: string }>;
        /** 云盘采用的自动快照策略ID。 */
        AutoSnapshotPolicyId?: string;
        /** 该参数正在邀测中，暂未开放使用。 */
        BdfId?: string;
        /** 是否开启Burst（性能突发）。可能值：- true：是。
        - false：否。当`DiskCategory`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)。
         */
        BurstingEnabled?: boolean;
        /** 云盘或本地盘种类。可能值：

        - cloud：普通云盘。
        - cloud_efficiency：高效云盘。 
        - cloud_ssd：SSD盘。
        - cloud_essd：ESSD云盘。
         - cloud_auto：ESSD AutoPL云盘。- local_ssd_pro：I/O密集型本地盘。 
        - local_hdd_pro：吞吐密集型本地盘。 
        - ephemeral：（已停售）本地盘。
        - ephemeral_ssd：（已停售）本地SSD盘。
        - cloud_essd_entry：ESSD Entry云盘。 */
        Category?: string;
        /** 创建时间。 */
        CreationTime?: string;
        /** 是否同时删除自动快照。可能值：

        - true：删除云盘上的快照。
        - false：保留云盘上的快照。

        通过[CreateSnapshot](https://help.aliyun.com/document_detail/25524.html)或者在控制台创建的快照，不受这个参数的影响，会始终保留。 */
        DeleteAutoSnapshot?: boolean;
        /** 是否随实例释放。可能值：

        - true：释放实例时，这块云盘随实例一起释放。
        - false：释放实例时，这块云盘保留不释放。 */
        DeleteWithInstance?: boolean;
        /** 云盘或本地盘描述。 */
        Description?: string;
        /** 该云盘最后一次卸载时间。 */
        DetachedTime?: string;
        /** 云盘或本地盘挂载的实例的设备名，例如/dev/xvdb。您需要注意：

        - 该参数仅在`Status`参数值为`In_use`时才有值，其他状态时为空。

        - 对于开启多重挂载特性的云盘，该值始终为空。您可以通过返回的`Attachment`对象组成的列表，查看云盘所涉及的所有挂载信息。

        > 该参数即将停止使用，为提高代码兼容性，建议您尽量不要使用该参数。 */
        Device?: string;
        /** 云盘或本地盘的计费方式。可能值：

        - PrePaid：包年包月。
        - PostPaid：按量付费。 */
        DiskChargeType?: string;
        /** 云盘或本地盘ID。 */
        DiskId?: string;
        /** 云盘或本地盘名称。 */
        DiskName?: string;
        /** 云盘是否启用自动快照策略功能。 */
        EnableAutoSnapshot?: boolean;
        /** 云盘是否设置了自动快照策略。 */
        EnableAutomatedSnapshotPolicy?: boolean;
        /** 是否为加密云盘。 */
        Encrypted?: boolean;
        /** 包年包月云盘的过期时间。 */
        ExpiredTime?: string;
        /** 每秒读写（I/O）操作的次数上限，单位：次/s。 */
        IOPS?: number;
        /** 每秒读操作的次数上限，单位：次/s。 */
        IOPSRead?: number;
        /** 每秒写操作的次数上限，单位：次/s。 */
        IOPSWrite?: number;
        /** 创建ECS实例时使用的镜像ID，只有通过镜像创建的云盘才有值，否则为空。这个值在云盘的生命周期内始终不变。 */
        ImageId?: string;
        /** 云盘或本地盘挂载的实例ID。您需要注意：

        - 该参数值仅在`Status`参数值为`In_use`时才有值，其他状态时为空。

        - 对于开启多重挂载特性的云盘，该值始终为空。您可以通过返回的`Attachment`对象组成的列表，查看云盘所涉及的所有挂载信息。 */
        InstanceId?: string;
        /** 云盘使用的KMS密钥ID。 */
        KMSKeyId?: string;
        /** 共享存储挂载的实例数量。 */
        MountInstanceNum?: number;
        /** 共享存储挂载到实例上的信息集合。 */
        MountInstances?: Array<{
          /** 挂载时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。  */
          AttachedTime?: string;
          /** 云盘或本地盘的挂载点。 */
          Device?: string;
          /** 云盘或本地盘挂载的实例ID。 */
          InstanceId?: string }>;
        /** 云盘是否开启了多重挂载特性。 */
        MultiAttach?: string;
        /** 云盘或本地盘锁定原因类型。 */
        OperationLocks?: Array<{
          /** 云盘或本地盘被安全锁定的原因。 */
          LockReason?: string }>;
        /** ESSD云盘的性能等级。可能值：

        - PL0：单盘最高随机读写IOPS 1万。
        - PL1：单盘最高随机读写IOPS 5万。
        - PL2：单盘最高随机读写IOPS 10万。
        - PL3：单盘最高随机读写IOPS 100万。 */
        PerformanceLevel?: string;
        /** 云盘或本地盘是否可卸载。 */
        Portable?: boolean;
        /** 云市场的商品标识。 */
        ProductCode?: string;
        /** ESSD AutoPL云盘预配置的读写IOPS。可能值：0~min{50000, 1000*容量-基准性能}。基准性能=min{1,800+50*容量, 50,000}。当`DiskCategory`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)。
         */
        ProvisionedIops?: number;
        /** 云盘或本地盘所属的地域ID。 */
        RegionId?: string;
        /** 云盘或本地盘所在的企业资源组ID。 */
        ResourceGroupId?: string;
        /** 云盘或本地盘的序列号。 */
        SerialNumber?: string;
        /** 云盘或本地盘大小，单位GiB。 */
        Size?: number;
        /** 创建云盘使用的快照ID。

        如果创建云盘时，没有指定快照，则该参数值为空。该参数值在云盘的生命周期内始终不变。

         */
        SourceSnapshotId?: string;
        /** 云盘状态。可能值：

        - In_use。
        - Available。
        - Attaching。
        - Detaching。
        - Creating。
        - ReIniting。 */
        Status?: string;
        /** 云盘所属的专属块存储集群ID。如果您的云盘在公共云块存储集群中，则该返回值为空。 */
        StorageClusterId?: string;
        /** 存储集ID。 */
        StorageSetId?: string;
        /** 存储集中的最大分区数量。 */
        StorageSetPartitionNumber?: number;
        /** 云盘或本地盘的标签集合。 */
        Tags?: Array<{
          /** 标签键。 */
          TagKey?: string;
          /** 标签值。 */
          TagValue?: string }>;
        /** 单位时间内可以成功传输的数据数量，单位：MB/s。 */
        Throughput?: number;
        ThroughputRead?: number;
        ThroughputWrite?: number;
        /** 云盘或本地盘类型。可能值：

        - system：系统盘。
        - data：数据盘。 */
        Type?: string;
        /** 云盘或本地盘所属的可用区ID。 */
        ZoneId?: string }>;
      /** 本次调用返回的查询凭证值。 */
      NextToken?: string;
      /** 云盘或本地盘列表的页码。 */
      PageNumber?: number;
      /** 输入时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 查询结果总条数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDisksFullStatus
   * -  块存储的全部状态信息包含块存储生命周期（`Status`）、块存储健康状态（`HealthStatus`）和块存储事件类型（`EventType`）。  
   * 
   * -  由于块存储相关事件的发布时间、事件的计划执行时间以及事件的实际执行时间相同，如果指定一段时间（`EventTime.Start`~`EventTime.End`），则可以查询这段时间中发生过的所有历史事件。目前，您最多可以查询最近一周的历史事件。
   * @summary: 调用DescribeDisksFullStatus查询一块或多块块存储的全部状态信息。
   */
  export namespace DescribeDisksFullStatus {
    export type Params = {
      /** 块存储所在地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 指定块存储的生命周期状态，详情请参见[云盘状态表](https://help.aliyun.com/document_detail/25689.html)。取值范围： 

      - In_use：使用中 。
      - Available：待挂载 。
      - Attaching：挂载中 。
      - Detaching：卸载中 。
      - Creating：创建中 。
      - ReIniting：初始化中 。
                */
      Status?: string;
      /** 指定块存储的健康状态。取值范围： 

      - Impaired：暂时性不可读写 。
      - Warning：服务降级 。
      - Initializing：初始化中 。
      - InsufficientData：数据不足 。
      - NotApplicable：不适用 。
                */
      HealthStatus?: string;
      /** 指定块存储的事件类型。取值范围： 

      - Degraded：块存储性能降级。
      - SeverelyDegraded：块存储性能严重降级。
      - Stalled：块存储性能受到严重影响。
      - ErrorDetected：本地盘出现损坏。 */
      EventType?: string;
      /** 查询事件发生时间的开始时间。

      按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC+0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。 */
      'EventTime.Start'?: string;
      /** 查询事件发生时间的结束时间。

      按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC+0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。 */
      'EventTime.End'?: string;
      /** 查询结果的页码。取值范围：正整数。

      默认值：1 。 */
      PageNumber?: number;
      /** 查询结果的分页大小。取值范围：1~100。

      默认值：10 。 */
      PageSize?: number;
      /** 块存储ID。N的取值范围：1~100。 */
      DiskId?: Array<string>;
      /** 事件ID。N的取值范围：1~100。 */
      EventId?: Array<string>;
      /** 块存储资源所属的资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 块存储资源绑定的标签键。N表示可以设置一个或多个标签键，且N的数值和`Tag.N.Value`参数中的N对应，构成键值对。N的取值范围：1~20。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。 */
        Key?: string;
        /** 块存储资源绑定的标签值。N表示可以设置一个或多个标签值，且N的数值和`Tag.N.Key`参数中的N对应，构成键值对。N的取值范围：1~20。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 块存储全状态数组。 */
      DiskFullStatusSet?: Array<{
        /** 块存储挂载于实例上的设备名，例如/dev/xvdb。

        该参数仅在`Status`参数值为`In_use`时有值，其他状态时为空。 

        > 该参数即将停止使用，为提高代码兼容性，建议您尽量不要使用该参数。 */
        Device?: string;
        /** 块存储事件数组。 */
        DiskEventSet?: Array<{
          /** 事件结束时间。 */
          EventEndTime?: string;
          /** 块存储事件ID。 */
          EventId?: string;
          /** 事件发生时间。 */
          EventTime?: string;
          /** 事件类型。 */
          EventType?: {
            /** 事件类型代码。 */
            Code?: number;
            /** 事件类型名称。可能值：
            - Degraded：块存储性能降级。
            - SeverelyDegraded：块存储性能严重降级。
            - Stalled：块存储性能受到严重影响。
            - ErrorDetected：本地盘出现损坏。 */
            Name?: string };
          /** 影响级别。 */
          ImpactLevel?: string }>;
        /** 块存储ID。 */
        DiskId?: string;
        /** 块存储健康状态。 */
        HealthStatus?: {
          /** 块存储健康状态代码。 */
          Code?: number;
          /** 块存储健康状态名称。 */
          Name?: string };
        /** 实例ID。 */
        InstanceId?: string;
        /** 块存储生命周期状态。 */
        Status?: {
          /** 块存储生命周期状态代码。 */
          Code?: number;
          /** 块存储生命周期状态名称。 */
          Name?: string } }>;
      /** 列表页码。 */
      PageNumber?: number;
      /** 每页大小。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 全状态总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeEipAddresses
   * undefined
   * @deprecated
   */
  export namespace DescribeEipAddresses {
    export type Params = {
      RegionId: string;
      Status?: string;
      EipAddress?: string;
      AllocationId?: string;
      ISP?: string;
      PageNumber?: number;
      PageSize?: number;
      'Filter.1.Key'?: string;
      'Filter.2.Key'?: string;
      'Filter.1.Value'?: string;
      'Filter.2.Value'?: string;
      LockReason?: string;
      AssociatedInstanceType?: string;
      AssociatedInstanceId?: string;
      ChargeType?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      EipAddresses?: Array<{
        AllocationId?: string;
        AllocationTime?: string;
        Bandwidth?: string;
        ChargeType?: string;
        EipBandwidth?: string;
        ExpiredTime?: string;
        InstanceId?: string;
        InstanceType?: string;
        InternetChargeType?: string;
        IpAddress?: string;
        OperationLocks?: Array<{
          LockReason?: string }>;
        RegionId?: string;
        Status?: string }>;
      PageNumber?: number;
      PageSize?: number;
      RequestId?: string;
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeEipMonitorData
   * undefined
   * @deprecated
   */
  export namespace DescribeEipMonitorData {
    export type Params = {
      RegionId?: string;
      AllocationId: string;
      StartTime: string;
      EndTime: string;
      Period?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      EipMonitorDatas?: Array<{
        EipBandwidth?: number;
        EipFlow?: number;
        EipPackets?: number;
        EipRX?: number;
        EipTX?: number;
        TimeStamp?: string }>;
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeElasticityAssuranceInstances
   * 当弹性保障服务失效后，实例与弹性保障服务对应的私有池的匹配关联数据也会失效。此时调用该接口查询已失效的服务，返回值为空。
   * @summary: 调用DescribeElasticityAssuranceInstances查询弹性保障服务已匹配的运行状态的实例列表。
   */
  export namespace DescribeElasticityAssuranceInstances {
    export type Params = {
      /** 弹性保障服务所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 分页查询时每页行数。

      最大值：100

      默认值：10 */
      MaxResults?: number;
      /** 弹性保障服务查询起始标志。由上一次的请求结果中获取。 */
      NextToken?: string;
      /** 弹性保障服务ID。 */
      'PrivatePoolOptions.Id': string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 弹性保障服务已匹配的实例列表。 */
      ElasticityAssuranceItem?: Array<{
        /** 实例ID。 */
        InstanceId?: string }>;
      /** 分页查询时每页行数。 */
      MaxResults?: number;
      /** 弹性保障服务下一个查询起始标志。 */
      NextToken?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 符合查询条件的记录条数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeElasticityAssurances
   * 调用DescribeElasticityAssurances查询弹性保障服务的详细信息。
   * @summary: 调用DescribeElasticityAssurances查询弹性保障服务的详细信息。
   */
  export namespace DescribeElasticityAssurances {
    export type Params = {
      /** 弹性保障服务所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。

      >不支持默认资源组过滤。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 标签键。N表示可以设置多个标签键进行过滤，N的取值范围为1~20。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。 */
        Key?: string;
        /** 标签值。N表示可以设置多个标签键进行过滤，N的取值范围为1~20。 */
        Value?: string }>;
      /** 分页查询时每页行数。

      最大值为100。

      默认值为10。 */
      MaxResults?: number;
      /** 弹性保障服务查询起始标志。由上一次的请求结果中获取。 */
      NextToken?: string;
      /** 弹性保障服务ID列表。取值可以由多个ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。 */
      'PrivatePoolOptions.Ids'?: string;
      /** >该参数已废弃。 */
      Platform?: string;
      /** 实例规格。 */
      InstanceType?: string;
      /** 弹性保障服务所属地域下的可用区ID。 */
      ZoneId?: string;
      /** 实例的计费方式。取值：PostPaid，目前仅支持按量付费。

      默认值为PostPaid。 */
      InstanceChargeType?: string;
      /** 弹性保障服务的状态。取值范围：

      - All：所有状态。
      - Preparing：准备中。
      - Prepared：待生效。
      - Active：生效中。
      - Released：已释放。

      默认值为Active。 */
      Status?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 弹性保障服务详细信息组成的集合。 */
      ElasticityAssuranceSet?: Array<{
        /** 资源分配详情。 */
        AllocatedResources?: Array<{
          /** 实例规格。 */
          InstanceType?: string;
          /** 在一个实例规格内，需要预留的实例的总数量。 */
          TotalAmount?: number;
          /** 已使用的实例的数量。 */
          UsedAmount?: number;
          /** 可用区ID。 */
          zoneId?: string }>;
        /** 弹性保障服务描述。 */
        Description?: string;
        /** 弹性保障服务失效时间。 */
        EndTime?: string;
        /** 实例的计费方式。可能值：PostPaid，目前仅支持按量付费。 */
        InstanceChargeType?: string;
        /** > 该参数暂未开放使用。 */
        LatestStartTime?: string;
        /** 弹性保障服务ID。 */
        PrivatePoolOptionsId?: string;
        /** 弹性保障服务的匹配模式。可能值：

        - Open：开放模式的弹性保障服务。
        - Target：指定模式的弹性保障服务。 */
        PrivatePoolOptionsMatchCriteria?: string;
        /** 弹性保障服务名称。 */
        PrivatePoolOptionsName?: string;
        /** 弹性保障服务所属地域ID。 */
        RegionId?: string;
        /** 资源组ID。 */
        ResourceGroupId?: string;
        /** 弹性保障服务生效时间。 */
        StartTime?: string;
        /** 弹性保障生效方式。可能值：

        - Now：立即生效。
        - Later：指定时间生效。 */
        StartTimeType?: string;
        /** 弹性保障服务的状态。可能值：

        - Preparing：准备中。
        - Prepared：待生效。
        - Active：生效中。
        - Released：已释放。 */
        Status?: string;
        /** 弹性保障服务绑定的标签键值对信息。 */
        Tags?: Array<{
          /** 标签键。 */
          TagKey?: string;
          /** 标签值。 */
          TagValue?: string }>;
        /** 弹性保障服务的总次数。 */
        TotalAssuranceTimes?: string;
        /** > 该参数暂未开放使用。 */
        UsedAssuranceTimes?: number }>;
      /** 弹性保障服务每页显示行数。 */
      MaxResults?: number;
      /** 弹性保障服务下一个查询起始标志。 */
      NextToken?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 符合查询条件的记录条数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeEniMonitorData
   * ## 接口说明
   * 
   * 可查询的辅助网卡流量信息包括辅助网卡收发数据包的数量、内网出入流量、辅助网卡收发丢包的数量。当返回信息中缺少部分内容时，可能是由于系统没有获取到相应的信息。例如，当实例处于已停止（Stopped）状态或者辅助网卡没有挂载到实例上，即处于可用（Available）状态时，无法获取到相应的信息。调用该接口时，您需要注意： 
   * 
   * - 每次最多返回400条监控数据，即如果指定的参数(EndTime - StartTime)/Period>400，则返回错误。
   * - 单次最多能查询近30天内的监控信息，如果指定的参数StartTime超过30天，则返回错误。
   * @summary: 调用DescribeEniMonitorData查询一块辅助网卡在指定时间段内使用的流量信息。
   */
  export namespace DescribeEniMonitorData {
    export type Params = {
      /** 辅助网卡的ID。默认查询指定实例上所有已绑定的辅助网卡。 */
      EniId?: string;
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 辅助网卡绑定的实例ID。 */
      InstanceId: string;
      /** 获取数据的起始时间点。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果指定的秒（ss）不是00，则自动换算为下一分钟。  */
      StartTime: string;
      /** 获取数据的结束时间点。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果指定的秒（ss）不是00，则自动换算为下一分钟。  */
      EndTime: string;
      /** 获取监控数据的间隔时间，单位：秒。取值范围：
      - 60。
      - 600。
      - 3600。

      默认值：60。 */
      Period?: '60' | '600' | '3600';
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 辅助网卡流量的监控数据EniMonitorDataType组成的集合。  */
      MonitorData?: Array<{
        /** 辅助网卡接收丢弃的内网数据包，单位：packets。 */
        DropPacketRx?: string;
        /** 辅助网卡发送丢弃的内网数据包，单位：packets。 */
        DropPacketTx?: string;
        /** 辅助网卡ID。 */
        EniId?: string;
        /** 辅助网卡接收的内网数据平均速率，单位：kB/s。 */
        IntranetRx?: string;
        /** 辅助网卡发送的内网数据平均速率，单位：kB/s。 */
        IntranetTx?: string;
        /** 辅助网卡接收的内网数据包，单位：packets。 */
        PacketRx?: string;
        /** 辅助网卡发送的内网数据包，单位：packets。 */
        PacketTx?: string;
        /** 查询监控信息的时间戳。按照ISO 8601标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
        TimeStamp?: string }>;
      /** 请求ID。 */
      RequestId?: string;
      /** 返回条目数量。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeForwardTableEntries
   * undefined
   * @deprecated
   */
  export namespace DescribeForwardTableEntries {
    export type Params = {
      RegionId: string;
      ForwardTableId: string;
      ForwardEntryId?: string;
      PageNumber?: number;
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      ForwardTableEntries?: Array<{
        ExternalIp?: string;
        ExternalPort?: string;
        ForwardEntryId?: string;
        ForwardTableId?: string;
        InternalIp?: string;
        InternalPort?: string;
        IpProtocol?: string;
        Status?: string }>;
      PageNumber?: number;
      PageSize?: number;
      RequestId?: string;
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeHaVips
   * undefined
   * @deprecated
   */
  export namespace DescribeHaVips {
    export type Params = {
      RegionId: string;
      PageNumber?: number;
      PageSize?: number;
      Filter: Array<{
        Key?: string;
        Value?: Array<string> }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      HaVips?: Array<{
        AssociatedEipAddresses?: Array<string>;
        AssociatedInstances?: Array<string>;
        CreateTime?: string;
        Description?: string;
        HaVipId?: string;
        IpAddress?: string;
        MasterInstanceId?: string;
        RegionId?: string;
        Status?: string;
        VSwitchId?: string;
        VpcId?: string }>;
      PageNumber?: number;
      PageSize?: number;
      RequestId?: string;
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeHpcClusters
   * 调用DescribeHpcClusters查询您可用的HPC集群。请求参数作为筛选器（Filter）使用，筛选关系为逻辑与关系，参数之间无依赖关系。
   * @summary: 调用DescribeHpcClusters查询您可用的HPC集群。请求参数作为筛选器（Filter）使用，筛选关系为逻辑与关系，参数之间无依赖关系。
   */
  export namespace DescribeHpcClusters {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** HPC集群ID。
      取值可以由多个HPC集群ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。 */
      HpcClusterIds?: string;
      /** HPC集群列表的页码。

      起始值：1

      默认值：1 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值：100

      默认值：10 */
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 由HpcCluster组成的数组格式，返回HPC集群的信息。 */
      HpcClusters?: Array<{
        /** HPC集群的描述。 */
        Description?: string;
        /** HPC集群ID。 */
        HpcClusterId?: string;
        /** HPC集群的名称。 */
        Name?: string }>;
      /** HPC集群列表的页码。 */
      PageNumber?: number;
      /** 输入时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** HPC集群总个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeImageComponents
   * 您可以设置`NextToken`查询凭证（Token），其取值是上一次调用DescribeImageComponents返回的`NextToken`参数值，再通过`MaxResults`设置单页查询的最大条目数进行查询。
   * @summary: 调用DescribeImageComponents查询一个或多个镜像组件的详细信息。
   */
  export namespace DescribeImageComponents {
    export type Params = {
      /** 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。

      >不支持默认资源组过滤。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 标签键。N的取值范围：1~20 */
        Key?: string;
        /** 标签值。N的取值范围：1~20 */
        Value?: string }>;
      /** 镜像组件名称。仅支持精确查找。 */
      Name?: string;
      /** 查询凭证（Token）。取值为上一次调用该接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。 */
      NextToken?: string;
      /** 分页查询时每页行数。取值范围：1~500

      默认值：50。 */
      MaxResults?: number;
      /** 镜像组件类型。取值范围：

      - SELF：您创建的自定义镜像组件。
      - ALIYUN：阿里云提供的系统组件。 */
      Owner?: string;
      /** 待查询的镜像组件ID。N取值范围：1~20 */
      ImageComponentId?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 镜像组件的详细信息组成的列表。 */
      ImageComponent?: Array<{
        /** 组件类型。 */
        ComponentType?: string;
        /** 组件内容。 */
        Content?: string;
        /** 组件创建时间。 */
        CreationTime?: string;
        /** 描述信息。 */
        Description?: string;
        /** 镜像组件ID。 */
        ImageComponentId?: string;
        /** 组件名称。 */
        Name?: string;
        /** 镜像组件类型。可能值：

        - SELF：您创建的自定义镜像组件。
        - ALIYUN：阿里云提供的系统组件。 */
        Owner?: string;
        /** 资源组ID。 */
        ResourceGroupId?: string;
        /** 组件支持的操作系统。 */
        SystemType?: string;
        /** 标签键值对列表。 */
        Tags?: Array<{
          /** 标签键。 */
          TagKey?: string;
          /** 标签值。 */
          TagValue?: string }> }>;
      /** 分页查询时每页行数。 */
      MaxResults?: number;
      /** 本次调用返回的查询凭证（Token）。具体使用方式请参见接口说明。 */
      NextToken?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 返回的镜像组件数量。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeImageFromFamily
   * ## 接口说明
   * 
   * 指定查询的镜像族系如果不存在可用的镜像，则返回结果为空。
   * @summary: 调用DescribeImageFromFamily查询指定镜像族系内最新创建的可用自定义镜像。
   */
  export namespace DescribeImageFromFamily {
    export type Params = {
      /** 镜像所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 镜像族系名称。

      自定义镜像、公共镜像、社区镜像、共享镜像均已支持镜像族系，使用方法及介绍请参见[镜像族系概述](https://help.aliyun.com/document_detail/174241.html)。 */
      ImageFamily: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 返回的镜像信息。 */
      Image?: {
        /** 镜像系统架构类型。可能值：
        - i386
        - x86_64 */
        Architecture?: string;
        /** 镜像的创建时间。 */
        CreationTime?: string;
        /** 描述信息。 */
        Description?: string;
        /** 镜像下包含云盘和快照的映射关系。 */
        DiskDeviceMappings?: Array<{
          /** 云盘的设备信息，例如/dev/xvdb。
          > 该参数即将停止使用，为提高代码的兼容性，建议您尽量不要使用该参数。 */
          Device?: string;
          /** 镜像格式。 */
          Format?: string;
          /** 导入镜像所属OSS的Bucket。 */
          ImportOSSBucket?: string;
          /** 导入镜像所属OSS的Object。 */
          ImportOSSObject?: string;
          /** 云盘大小，单位GiB。 */
          Size?: string;
          /** 快照ID。 */
          SnapshotId?: string;
          /** 镜像的类型。 */
          Type?: string }>;
        /** 镜像族系。 */
        ImageFamily?: string;
        /** 镜像ID。 */
        ImageId?: string;
        /** 镜像的名称。 */
        ImageName?: string;
        /** 镜像所有者别名。可能值：
        - system：公共镜像。
        - self：您的自定义镜像。
        - others：其他用户的公开镜像。
        - marketplace：云市场镜像。 */
        ImageOwnerAlias?: string;
        /** 镜像版本。 */
        ImageVersion?: string;
        /** 是否是复制的镜像。 */
        IsCopied?: boolean;
        /** 是否共享过该自定义镜像给其他用户。 */
        IsSelfShared?: string;
        /** 是否订阅了该镜像商品码对应的镜像商品服务条款。 */
        IsSubscribed?: boolean;
        /** 是否支持cloud-init。 */
        IsSupportCloudinit?: boolean;
        /** 是否可以在I/O优化实例上运行。 */
        IsSupportIoOptimized?: boolean;
        /** 操作系统的中文显示名称。 */
        OSName?: string;
        /** 操作系统类型。可能值：
        - windows
        - linux */
        OSType?: string;
        /** 操作系统平台。 */
        Platform?: string;
        /** 镜像市场的镜像商品标示。 */
        ProductCode?: string;
        /** 镜像完成的进度，单位为百分比。 */
        Progress?: string;
        /** 镜像大小，单位GiB。 */
        Size?: number;
        /** 镜像的状态。可能值：
        - UnAvailable：不可用
        - Available：可用
        - Creating：创建中
        - CreateFailed：创建失败 */
        Status?: string;
        /** 镜像的标签对信息。 */
        Tags?: Array<{
          /** 自定义镜像的标签键。 */
          TagKey?: string;
          /** 自定义镜像的标签值。 */
          TagValue?: string }>;
        /** 有引用关系的资源类型。可能值：
        - instance：创建了一台或多台ECS实例。
        - none：未创建过ECS实例。 */
        Usage?: string };
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeImagePipelineExecutions
   * - 指定的镜像模板ID`ImagePipelineId`不能是已删除的镜像模板，已删除的镜像模板会同步删除对应的构建任务。
   * - 镜像模板ID`ImagePipelineId`和构建任务ID`ExecutionId`不能同时为空。
   * - 您可以设置`NextToken`查询凭证（Token），其取值是上一次调用`DescribeImagePipelineExecutions`返回的`NextToken`参数值，再通过`MaxResults`设置单页查询的最大条目数进行查询。
   * @summary: 调用DescribeImagePipelineExecutions查询一个镜像构建任务的详细信息。
   */
  export namespace DescribeImagePipelineExecutions {
    export type Params = {
      /** 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** >该参数暂未开放使用。 */
      Tag?: Array<{
        /** >该参数暂未开放使用。 */
        Key?: string;
        /** >该参数暂未开放使用。 */
        Value?: string }>;
      /** 镜像模板ID。 */
      ImagePipelineId?: string;
      /** 镜像构建任务ID。 */
      ExecutionId?: string;
      /** 镜像构建任务的状态。支持同时设置多个值，每个值之间以半角逗号（,）间隔，格式示例为`BUILDING,DISTRIBUTING`。取值范围：

      - BUILDING：构建中。
      - DISTRIBUTING：分发中。
      - RELEASING：资源回收中。
      - SUCCESS：成功。
      - FAILED：失败。
      - CANCELLING：取消中。
      - CANCELLED：已取消。

      > 目前不支持参数值为空时默认查询所有状态的镜像构建任务。 */
      Status?: string;
      /** 查询凭证（Token）。取值为上一次调用该接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。 */
      NextToken?: string;
      /** 分页查询时每页行数。取值范围：1~500。

      默认值：50。 */
      MaxResults?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 镜像构建任务的详细信息组成的列表。 */
      ImagePipelineExecution?: Array<{
        /** 镜像构建任务的创建时间。 */
        CreationTime?: string;
        /** 构建任务ID。 */
        ExecutionId?: string;
        /** 目标镜像ID。 */
        ImageId?: string;
        /** 镜像模板ID。 */
        ImagePipelineId?: string;
        /** 执行结果信息。 */
        Message?: string;
        /** 任务最近一次更新的时间。 */
        ModifiedTime?: string;
        /** 企业资源组ID。 */
        ResourceGroupId?: string;
        /** 镜像构建任务的状态。可能值：

        - BUILDING：构建中。
        - DISTRIBUTING：分发中。
        - RELEASING：资源回收中。
        - SUCCESS：成功。
        - FAILED：失败。
        - CANCELLING：取消中。
        - CANCELLED：已取消。 */
        Status?: string;
        /** >该参数暂未开放使用。 */
        Tags?: Array<{
          /** >该参数暂未开放使用。 */
          TagKey?: string;
          /** >该参数暂未开放使用。 */
          TagValue?: string }> }>;
      /** 分页查询时每页行数。 */
      MaxResults?: number;
      /** 本次调用返回的查询凭证（Token）。具体使用方式请参见接口说明。 */
      NextToken?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 返回的镜像组件数量。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeImagePipelines
   * 您可以设置`NextToken`查询凭证（Token），其取值是上一次调用`DescribeImagePipelines`返回的`NextToken`参数值，再通过`MaxResults`设置单页查询的最大条目数进行查询。
   * @summary: 调用DescribeImagePipelines查询一个或多个镜像模板的详细信息。
   */
  export namespace DescribeImagePipelines {
    export type Params = {
      /** 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 企业资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。

      >不支持默认资源组过滤。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 标签键。N的取值范围：1~20。 */
        Key?: string;
        /** 标签值。N的取值范围：1~20。 */
        Value?: string }>;
      /** 模板名称。 */
      Name?: string;
      /** 查询凭证（Token）。取值为上一次调用该接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。 */
      NextToken?: string;
      /** 分页查询时每页行数。取值范围：1~500。

      默认值：50。 */
      MaxResults?: number;
      /** 镜像模板ID。N取值范围：1~20。 */
      ImagePipelineId?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 镜像模板的详细信息组成的列表。 */
      ImagePipeline?: Array<{
        /** 目标镜像共享的阿里云账号ID。 */
        AddAccounts?: Array<string>;
        /** 源镜像。
        - 当`BaseImageType=IMAGE`时，该参数值为自定义镜像ID。
        - 当`BaseImageType=IMAGE_FAMILY`时，该参数值为镜像族系名称。 */
        BaseImage?: string;
        /** 源镜像类型。可能值：

        - IMAGE：自定义镜像。
        - IMAGE_FAMILY：镜像族系。 */
        BaseImageType?: string;
        /** 镜像模板内容。 */
        BuildContent?: string;
        /** 模板创建时间。 */
        CreationTime?: string;
        /** 镜像构建失败后是否释放中转实例。 */
        DeleteInstanceOnFailure?: boolean;
        /** 描述信息。 */
        Description?: string;
        /** 目标镜像名称前缀。 */
        ImageName?: string;
        /** 镜像模板ID。 */
        ImagePipelineId?: string;
        /** 实例规格。 */
        InstanceType?: string;
        /** 中转实例的公网出带宽大小。单位：Mbit/s */
        InternetMaxBandwidthOut?: number;
        /** 模板名称。 */
        Name?: string;
        /** 企业资源组ID。 */
        ResourceGroupId?: string;
        /** 中转实例的系统盘大小。单位：GiB */
        SystemDiskSize?: number;
        /** 标签键值对列表。 */
        Tags?: Array<{
          /** 标签键。 */
          TagKey?: string;
          /** 标签值。 */
          TagValue?: string }>;
        /** 目标镜像待分发的地域列表。 */
        ToRegionIds?: Array<string>;
        /** VPC的交换机ID。 */
        VSwitchId?: string }>;
      /** 分页查询时每页行数。 */
      MaxResults?: number;
      /** 本次调用返回的查询凭证（Token）。具体使用方式请参见接口说明。 */
      NextToken?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 返回的镜像模板数量。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeImageSharePermission
   * 查询自定义镜像已经共享的所有用户。返回结果支持分页显示，每页的信息条目默认为10条。
   * @summary: 查询自定义镜像已经共享的所有用户。返回结果支持分页显示，每页的信息条目默认为10条。
   */
  export namespace DescribeImageSharePermission {
    export type Params = {
      /** 自定义镜像所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 自定义镜像ID。 */
      ImageId: string;
      /** 查询结果显示的页码。

      起始值：1。

      默认值：1。 */
      PageNumber?: number;
      /** 查询结果显示的每页的信息条目数。

      最大值：100。

      默认值：10。 */
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 阿里云注册用户。 */
      Accounts?: Array<{
        /** 阿里云账号ID。 */
        AliyunId?: string;
        /** 镜像共享开始时间。时间格式按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC时间。 格式为：yyyy-MM-ddTHH:mm:ssZ。 */
        SharedTime?: string }>;
      /** 自定义镜像ID。 */
      ImageId?: string;
      /** 查询结果显示的页码。 */
      PageNumber?: number;
      /** 每页的信息条目数。 */
      PageSize?: number;
      /** 镜像所属地域ID。 */
      RegionId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 共享组。 */
      ShareGroups?: Array<{
        /** 共享分组。 */
        Group?: string }>;
      /** 记录总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeImageSupportInstanceTypes
   * 调用DescribeImageSupportInstanceTypes查询指定镜像支持的实例规格。
   * @summary: 调用DescribeImageSupportInstanceTypes查询指定镜像支持的实例规格。
   */
  export namespace DescribeImageSupportInstanceTypes {
    export type Params = {
      /** 镜像所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 镜像ID。 */
      ImageId?: string;
      /** 使用镜像的场景。取值范围：

      - CreateEcs（默认）：创建实例。
      - ChangeOS：更换系统盘/更换操作系统。 */
      ActionType?: string;
      /** 查询资源时的筛选条件列表。 */
      Filter?: Array<{
        /** 指定过滤条件Key，当前只支持过滤镜像ID。取值范围：
        -  imageId：过滤条件为镜像ID。
        -  filter：过滤条件为镜像ID。 */
        Key?: string;
        /** 指定过滤条件Value。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 查询的镜像ID。 */
      ImageId?: string;
      /** 由InstanceTypeItemType组成的实例规格集合。 */
      InstanceTypes?: Array<{
        /** 实例规格的vCPU内核数目。 */
        CpuCoreCount?: number;
        /** 实例规格族。 */
        InstanceTypeFamily?: string;
        /** 镜像支持的实例规格ID。 */
        InstanceTypeId?: string;
        /** 实例规格的内存大小，单位GiB。 */
        MemorySize?: number }>;
      /** 镜像所属地域ID。 */
      RegionId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeImages
   * - 您可以查询的镜像资源包括您的自定义镜像、阿里云提供的公共镜像、云市场镜像以及其他阿里云用户主动共享给您的共享镜像。
   * - 支持分页查询，查询结果包括可使用的镜像资源的总数和当前页的镜像资源。每页的数量默认为10条。
   * - 通过阿里云CLI调用API时，不同数据类型的请求参数取值必须遵循格式要求。更多信息，请参见[CLI参数格式说明](https://help.aliyun.com/document_detail/110340.html)。
   * @summary: 调用DescribeImages查询您可以使用的镜像资源。
   */
  export namespace DescribeImages {
    export type Params = {
      /** 镜像所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 查询指定状态的镜像，如果不配置此参数，默认只返回Available状态的镜像。取值范围：

      - Creating：镜像正在创建中。
      - Waiting：多任务排队中。
      - Available（默认）：您可以使用的镜像。
      - UnAvailable：您不能使用的镜像。
      - CreateFailed：创建失败的镜像。
      - Deprecated：已弃用的镜像。

      默认值：Available。当前参数支持同时取多个值，值之间以半角逗号（,）隔开。 */
      Status?: string;
      /** 镜像ID。 */
      ImageId?: string;
      /** 订阅型镜像是否已经超过使用期限。

      >该参数即将被弃用，为提高兼容性，请尽量使用其他参数。 */
      ShowExpired?: boolean;
      /** 根据某一快照ID创建的自定义镜像。 */
      SnapshotId?: string;
      /** 镜像名称。 */
      ImageName?: string;
      /** 镜像族系名称，查询镜像时可通过设置该参数来过滤当前族系对应的镜像。

      默认值：空。 */
      ImageFamily?: string;
      /** 镜像来源。取值范围：

      - system：阿里云官方提供的，且不是通过云市场发布的镜像，和控制台中的“公共镜像”概念不同。
      - self：您创建的自定义镜像。
      - others：包含共享镜像（其他阿里云用户直接共享给您的镜像）和社区镜像（任意阿里云用户将其自定义镜像完全公开共享后的镜像）。您需要注意：
          - 查找社区镜像时，IsPublic必须为true。
          - 查找共享镜像时，IsPublic需要设置为false或者不传值。
      - marketplace：阿里云或者第三方供应商ISV在云市场发布的镜像，需要和ECS一起购买。请自行留意云市场镜像的收费详情。

      默认值：空。

      >空表示返回取值为system、self以及others的结果。 */
      ImageOwnerAlias?: string;
      /** 指定实例类型可以使用的镜像。 */
      InstanceType?: string;
      /** 镜像是否可以运行在I/O优化实例上。 */
      IsSupportIoOptimized?: boolean;
      /** 镜像是否支持cloud-init。 */
      IsSupportCloudinit?: boolean;
      /** 镜像的操作系统类型。取值范围：

      - windows。
      - linux。 */
      OSType?: string;
      /** 镜像的体系架构。取值范围：

      - i386。
      - x86_64。
      - arm64。 */
      Architecture?: string;
      /** 镜像资源列表的页码。

      起始值：1。

      默认值：1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值：100。

      默认值：10。 */
      PageSize?: number;
      /** 镜像是否已经运行在ECS实例中。取值范围：

      - instance：镜像处于运行状态，有ECS实例使用。
      - none：镜像处于闲置状态，暂无ECS实例使用。 */
      Usage?: string;
      /** 是否只预检此次请求。
               
      - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。  
      - false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。 

      默认值：false。 */
      DryRun?: boolean;
      /** 镜像需要被使用到的场景。取值范围：

      - CreateEcs（默认）：创建实例。
      - ChangeOS：更换系统盘/更换操作系统。 */
      ActionType?: string;
      /** 自定义镜像所在的企业资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。

      >不支持默认资源组过滤。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 镜像的标签键。N的取值范围：1~20。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。 */
        Key?: string;
        /** 镜像的标签值。N的取值范围：1~20。 */
        Value?: string;
        /** 镜像的标签键。

        >该参数即将被弃用，为提高兼容性，建议您使用另一个`Tag.N.Key`参数。 */
        key?: string;
        /** 镜像的标签值。

        >该参数即将被弃用，为提高兼容性，建议您使用另一个`Tag.N.Value`参数。 */
        value?: string }>;
      /** 查询资源时的筛选条件列表。 */
      Filter?: Array<{
        /** 查询资源时的筛选键。取值范围：

        - 当该参数取值为`CreationStartTime`时，可以查询在指定时间点（`Filter.N.Value`）后创建的资源信息。
        - 当该参数取值为`CreationEndTime`时，可以查询在指定时间点（`Filter.N.Value`）前创建的资源信息。 */
        Key?: string;
        /** 查询资源时的筛选值。指定该参数时必须同时指定`Filter.N.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC+0时区。 */
        Value?: string }>;
      /** 是否查询已发布的社区镜像。取值范围：

      - true：查询已发布的社区镜像。当您指定该参数值为true时，ImageOwnerAlias必须为others。
      - false：查询除社区镜像的其他镜像类型，具体以ImageOwnerAlias参数值为准。

      默认值：false。 */
      IsPublic?: boolean;
      /** 镜像所属的阿里云账号ID。该参数仅在查询共享镜像以及社区镜像时生效。

       */
      ImageOwnerId?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 镜像信息Images组成的集合。 */
      Images?: Array<{
        /** 镜像系统架构类型。可能值：

        - i386。
        - x86_64。
        - arm64。 */
        Architecture?: string;
        /** 修改镜像的启动模式。取值范围：
        - BIOS：BIOS启动模式。
        - UEFI：UEFI启动模式。

        > 您需要了解指定的镜像支持的启动模式，当通过该参数修改启动模式后，必须与镜像本身支持的启动模式匹配，实例才能正常启动。 */
        BootMode?: string;
        /** 镜像的创建时间。 */
        CreationTime?: string;
        /** 描述信息。 */
        Description?: string;
        /** 镜像检测相关结果。 */
        DetectionOptions?: {
          /** 镜像检测项列表。 */
          Items?: Array<{
            /** 镜像检测项名称。 */
            Name?: string;
            /** 检测项可能存在的缺陷。 */
            RiskCode?: string;
            /** 导入的自定义镜像检测项是否存在风险，如果存在风险返回此字段，不存在风险则不返回。

            风险等级可能值：

            - High：严重，影响实例能否启动成功，强烈建议修复。

            - Medium：重要，影响实例启动性能或者实例配置等，建议优化。 */
            RiskLevel?: string;
            /** 镜像检测项结果。 */
            Value?: string }>;
          /** 镜像检测任务状态。可能值：

          - Processing：检测中。

          - Finished：检测完成。 */
          Status?: string };
        /** 镜像下包含云盘和快照的映射关系。 */
        DiskDeviceMappings?: Array<{
          /** 云盘的设备信息，例如/dev/xvdb。

          > 该参数即将停止使用，为提高代码的兼容性，建议您尽量不要使用该参数。 */
          Device?: string;
          /** 镜像格式。 */
          Format?: string;
          /** 导入镜像所属OSS的bucket。 */
          ImportOSSBucket?: string;
          /** 导入镜像所属OSS的object。 */
          ImportOSSObject?: string;
          /** 对于复制中的镜像，返回复制任务的进度。 */
          Progress?: string;
          /** 对于复制中的镜像，返回复制任务的剩余时间，单位：秒。 */
          RemainTime?: number;
          /** 云盘的大小。 */
          Size?: string;
          /** 快照ID。 */
          SnapshotId?: string;
          /** 镜像的类型。 */
          Type?: string }>;
        /** 镜像特性相关属性。 */
        Features?: {
          /** 镜像是否支持NVMe。可能值：

          - supported：支持。表示以该镜像创建的实例支持NVMe协议。

          - unsupported：不支持。表示以该镜像创建的实例不支持NVMe协议。 */
          NvmeSupport?: string };
        /** 镜像族系名称。 */
        ImageFamily?: string;
        /** 镜像ID。 */
        ImageId?: string;
        /** 镜像的名称。 */
        ImageName?: string;
        /** 镜像来源。可能值：

        - system：阿里云提供的公共镜像。
        - self：您创建的自定义镜像。
        - others：其他阿里云用户提供的共享镜像或社区镜像。
        - marketplace：云市场镜像提供的镜像。 */
        ImageOwnerAlias?: string;
        /** 镜像所属的阿里云账号ID。该参数仅在查询共享镜像以及社区镜像时生效。 */
        ImageOwnerId?: number;
        /** 镜像版本。 */
        ImageVersion?: string;
        /** 是否是拷贝的镜像。 */
        IsCopied?: boolean;
        /** 是否为公开镜像。公开镜像包括阿里云提供的公共镜像以及您已发布为社区镜像的自定义镜像。可能值：

        - true：公开镜像。
        - false：非公开镜像。


         */
        IsPublic?: boolean;
        /** 是否共享过该自定义镜像给其他用户。 */
        IsSelfShared?: string;
        /** 是否订阅了该镜像的商品码对应的镜像商品的服务条款。 */
        IsSubscribed?: boolean;
        /** 是否支持Cloud Init。 */
        IsSupportCloudinit?: boolean;
        /** 是否可以在I/O优化实例上运行。 */
        IsSupportIoOptimized?: boolean;
        /** 当前镜像是否支持非root用户登录。可能值：

        - true：支持。

        - false：不支持。 */
        LoginAsNonRootSupported?: boolean;
        /** 操作系统的中文显示名称。 */
        OSName?: string;
        /** 操作系统的英文显示名称。 */
        OSNameEn?: string;
        /** 操作系统类型。可能值：

        - windows。
        - linux。 */
        OSType?: string;
        /** 操作系统平台。 */
        Platform?: string;
        /** 云市场镜像中的镜像商品标示。 */
        ProductCode?: string;
        /** 镜像完成的进度，单位为百分比。 */
        Progress?: string;
        /** 镜像所在的企业资源组ID。 */
        ResourceGroupId?: string;
        /** 镜像大小，单位：GiB。 */
        Size?: number;
        /** 镜像的状态。可能值：

        - UnAvailable：不可用。
        - Available：可用。
        - Creating：创建中。
        - CreateFailed：创建失败。 */
        Status?: string;
        /** 社区镜像认证企业名称。 */
        SupplierName?: string;
        /** 镜像的标签对信息。 */
        Tags?: Array<{
          /** 镜像的标签键。 */
          TagKey?: string;
          /** 镜像的标签值。 */
          TagValue?: string }>;
        /** 有引用关系的资源类型。可能值：

        - instance：创建了一台或多台ECS实例。
        - none：未创建过ECS实例。 */
        Usage?: string }>;
      /** 当前页码。 */
      PageNumber?: number;
      /** 当前分页包含多少条目。 */
      PageSize?: number;
      /** 镜像所属地域ID。 */
      RegionId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 镜像总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceAttachmentAttributes
   * 私有池是弹性保障服务或容量预定服务在创建后生成的，关联了与私有池匹配的实例信息。您可以在创建实例时设置私有池，实例将会与弹性保障服务或容量预定服务进行匹配。
   * 
   * 当私有池失效后，实例与私有池的匹配关联数据也会失效。此时调用该接口，返回值的私有池信息将为空。
   * @summary: 调用DescribeInstanceAttachmentAttributes查询实例匹配的私有池信息。
   */
  export namespace DescribeInstanceAttachmentAttributes {
    export type Params = {
      /** 弹性保障服务所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。 */
      InstanceIds: string;
      /** 实例状态列表的页码。

      起始值：1

      默认值：1 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值：100

      默认值：10 */
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例匹配的私有池信息组成的集合。 */
      Instances?: Array<{
        /** 实例ID。 */
        InstanceId?: string;
        /** 私有池ID。当`PrivatePoolOptionsMatchCriteria`返回值为`Open`时，私有池ID为系统自动匹配时所分配的私有池ID。 */
        PrivatePoolOptionsId?: string;
        /** 实例的私有池匹配模式。可能值：

        - Open：开放模式。实例自动匹配开放类型的私有池。
        - Target：指定模式。实例匹配指定的私有池。
        - None：不使用模式。实例不使用私有池。 */
        PrivatePoolOptionsMatchCriteria?: string }>;
      /** 实例状态列表的页码。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 符合查询条件的记录条数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceAttribute
   * 调用DescribeInstanceAttribute查询单个ECS实例详情。
   * @summary: 调用DescribeInstanceAttribute查询单个ECS实例详情。
   */
  export namespace DescribeInstanceAttribute {
    export type Params = {
      /** 指定实例的ID。 */
      InstanceId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例所在的集群ID。
      >该参数即将被弃用，为提高兼容性，请尽量使用其他参数。 */
      ClusterId?: string;
      /** vCPU处理器核心数量。 */
      Cpu?: number;
      /** 实例创建时间。以ISO 8601为标准，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mmZ。更多信息，请参见[ISO 8601](https://help.aliyun.com/document_detail/25696.html)。 */
      CreationTime?: string;
      /** 突发性能实例的运行模式。可能值：

      - Standard：标准模式。有关实例性能的更多信息，请参见[性能模式](https://help.aliyun.com/document_detail/59977.html#section-svb-w9d-dju)。 
      - Unlimited：无性能约束模式，有关实例性能的更多信息，请参见[性能模式](https://help.aliyun.com/document_detail/59977.html#section-svb-w9d-dju)。 */
      CreditSpecification?: string;
      /** 由专有宿主机集群ID（DedicatedHostClusterId）、专有宿主机ID（DedicatedHostId）和名称（DedicatedHostName）组成的宿主机属性数组。 */
      DedicatedHostAttribute?: {
        /** 专有宿主机ID。 */
        DedicatedHostId?: string;
        /** 专有宿主机的名称。 */
        DedicatedHostName?: string };
      /** 实例描述。 */
      Description?: string;
      /** 弹性公网IP绑定信息。 */
      EipAddress?: {
        /** 弹性公网IP的ID。 */
        AllocationId?: string;
        /** 弹性公网IP的公网带宽限速，单位为Mbit/s。 */
        Bandwidth?: number;
        /** 公网带宽计费方式。可能值：

        - PayByBandwidth：按固定带宽计费。
        - PayByTraffic：按使用流量计费。

        > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。 */
        InternetChargeType?: string;
        /** 弹性公网IP。 */
        IpAddress?: string };
      /** ECS实例是否开启了Jumbo frame特性。 可能值：

      - true：开启。

      - false：不开启。

      更多信息，请参见[ECS实例MTU](https://help.aliyun.com/document_detail/200512.html)。 */
      EnableJumboFrame?: boolean;
      /** 过期时间。以ISO 8601为标准，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mmZ。更多信息，请参见[ISO 8601](https://help.aliyun.com/document_detail/25696.html)。 */
      ExpiredTime?: string;
      /** 实例主机名。 */
      HostName?: string;
      /** 实例运行的镜像ID。 */
      ImageId?: string;
      /** 经典网络类型实例的内网IP地址。 */
      InnerIpAddress?: Array<string>;
      /** 实例的计费方式。可能值：
      - PrePaid：包年包月。
      - PostPaid：按量付费。 */
      InstanceChargeType?: string;
      /** 实例ID。 */
      InstanceId?: string;
      /** 实例名称。 */
      InstanceName?: string;
      /** 实例网络类型。取值范围： 
               
      - classic：经典网络。
      - vpc：专有网络VPC。 */
      InstanceNetworkType?: string;
      /** 实例的规格。 */
      InstanceType?: string;
      /** 公网带宽计费方式。可能值：

      - PayByBandwidth：按固定带宽计费。
      - PayByTraffic：按使用流量计费。

      > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。 */
      InternetChargeType?: string;
      /** 公网入带宽最大值，单位为Mbit/s。 */
      InternetMaxBandwidthIn?: number;
      /** 公网出带宽最大值，单位为Mbit/s。 */
      InternetMaxBandwidthOut?: number;
      /** 是否是I/O优化型实例。 */
      IoOptimized?: string;
      /** 内存大小，单位为MiB。 */
      Memory?: number;
      /** 锁定类型。可能值：

      - financial：因欠费被锁定。
      - security：因安全原因被锁定。
      - Recycling：抢占式实例的待释放锁定状态。
      - dedicatedhostfinancial：因为专有宿主机欠费导致ECS实例被锁定。
      - refunded：因退款被锁定。 */
      OperationLocks?: Array<{
        /** 锁定类型。可能值：

        - financial：因欠费被锁定。
        - security：因安全原因被锁定。
        - Recycling：抢占式实例的待释放锁定状态。
        - dedicatedhostfinancial：因为专有宿主机欠费导致ECS实例被锁定。
        - refunded：因退款被锁定。 */
        LockReason?: string }>;
      /** 实例公网IP地址。 */
      PublicIpAddress?: Array<string>;
      /** 实例所属地域ID。 */
      RegionId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 实例所属安全组集合。 */
      SecurityGroupIds?: Array<string>;
      /** 实例序列号。 */
      SerialNumber?: string;
      /** 实例状态。取值范围：

      - Pending：创建中。
      - Running：运行中。
      - Starting：启动中。
      - Stopping：停止中。
      - Stopped：已停止。 */
      Status?: string;
      /** 实例停机后是否继续收费。可能值：

      - KeepCharging：停机后继续收费，为您继续保留库存资源。
      - StopCharging：停机后不收费。停机后，我们释放实例对应的资源，例如vCPU、内存和公网IP等资源。重启是否成功依赖于当前地域中是否仍有资源库存。
      - Not-applicable：本实例不支持停机不收费功能。 */
      StoppedMode?: string;
      /** 实例的VLAN ID。
      >该参数即将被弃用，为提高兼容性，请尽量使用其他参数。 */
      VlanId?: string;
      /** 专有网络VPC属性。 */
      VpcAttributes?: {
        /** 云产品的IP，用于VPC云产品之间的网络互通。 */
        NatIpAddress?: string;
        /** 私有IP地址。 */
        PrivateIpAddress?: Array<string>;
        /** 虚拟交换机ID。 */
        VSwitchId?: string;
        /** 专有网络VPC ID。 */
        VpcId?: string };
      /** 实例所属可用区。 */
      ZoneId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceAutoRenewAttribute
   * - 在设置自动续费或者手动续费前，查询实例续费状态能使您了解实例是否已为自动续费状态。
   * - 只支持包年包月的实例，按量付费的实例调用该接口会报错。
   * @summary: 调用DescribeInstanceAutoRenewAttribute查询一台或多台包年包月ECS实例的自动续费状态。
   */
  export namespace DescribeInstanceAutoRenewAttribute {
    export type Params = {
      /** 实例ID。支持最多100台包年包月实例批量查询，多个实例ID以半角逗号分隔。

      > `InstanceId`与`RenewalStatus`参数至少需要填写一个。 */
      InstanceId?: string;
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例的自动续费状态。取值范围：

      - AutoRenewal：设置为自动续费。

      - Normal：取消自动续费。

      - NotRenewal：不再续费，系统不再发送到期提醒，只在到期前第三天发送不续费提醒。不再续费的ECS实例可以通过[ModifyInstanceAutoRenewAttribute](https://help.aliyun.com/document_detail/52843.html)更改成待续费（`Normal`）后，再自行续费或设置为自动续费。 */
      RenewalStatus?: string;
      /** 分页展示响应信息时设置的每页行数，单位：行。

      最大值：100

      默认值：10 */
      PageSize?: string;
      /** 查询接口返回资源信息列表的页码。

      起始值：1

      默认值：1 */
      PageNumber?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例续费的属性InstanceRenewAttribute的集合。 */
      InstanceRenewAttributes?: Array<{
        /** 是否已设置自动续费。 */
        AutoRenewEnabled?: boolean;
        /** 自动续费时长。 */
        Duration?: number;
        /** 实例ID。 */
        InstanceId?: string;
        /** 自动续费时长的单位。 */
        PeriodUnit?: string;
        /** 实例的自动续费状态。可能值：

        - AutoRenewal：设置为自动续费。

        - Normal：取消自动续费。

        - NotRenewal：不再续费，系统不再发送到期提醒，只在到期前第三天发送不续费提醒。不再续费的ECS实例可以通过[ModifyInstanceAutoRenewAttribute](https://help.aliyun.com/document_detail/52843.html)更改成待续费（`Normal`）后，再自行续费或设置为自动续费。 */
        RenewalStatus?: string }>;
      /** 页码。 */
      PageNumber?: number;
      /** 每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 返回的实例总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceHistoryEvents
   * - 您最多可以查询最近30天的已完结历史系统事件。对于未完结的系统事件无查询时间限制。
   * 
   * - 通过指定InstanceEventCycleStatus参数，还可以查询处于Scheduled（等待执行事件）、Executing（事件执行中）和Inquiring（事件问询中）状态的系统事件。
   * @summary: 查询指定实例系统事件信息，默认查询处于非活跃状态的历史系统事件。
   */
  export namespace DescribeInstanceHistoryEvents {
    export type Params = {
      /** 资源所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例ID。不指定实例ID时，表示查询您指定地域下所有实例的系统事件信息。 */
      InstanceId?: string;
      /** 系统事件的生命周期状态。EventCycleStatus只在未指定InstanceEventCycleStatus.N参数时有效。取值范围： 

      - Scheduled：等待执行事件。
      - Avoided：事件已避免。
      - Executing：事件执行中。
      - Executed：事件已完成执行。
      - Canceled：事件已取消。
      - Failed：事件执行失败。
      - Inquiring：事件问询中。
                */
      EventCycleStatus?: string;
      /** 系统事件的类型。EventType参数只在未指定InstanceEventType.N参数时有效。取值范围： 

      - SystemMaintenance.Reboot：因系统维护实例重启。
      - SystemMaintenance.Redeploy：因系统维护实例重新部署。
      - SystemFailure.Reboot：因系统错误实例重启。
      - SystemFailure.Redeploy：因系统错误实例重新部署。
      - SystemFailure.Delete：因实例创建失败实例释放。
      - InstanceFailure.Reboot：因实例错误实例重启。
      - InstanceExpiration.Stop：因包年包月期限到期，实例停止。
      - InstanceExpiration.Delete：因包年包月期限到期，实例释放。
      - AccountUnbalanced.Stop：因账号欠费，按量付费实例停止。
      - AccountUnbalanced.Delete：因账号欠费，按量付费实例释放。

      > 事件类型说明请参见[系统事件概述](https://help.aliyun.com/document_detail/66574.html)。该参数的取值只能是实例系统事件，不能是磁盘系统事件。 */
      EventType?: string;
      /** 查询系统事件计划执行时间的开始时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
      'NotBefore.Start'?: string;
      /** 查询系统事件计划执行时间的结束时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
      'NotBefore.End'?: string;
      /** 查询系统事件发布时间的开始时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
      'EventPublishTime.Start'?: string;
      /** 查询系统事件发布时间的结束时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
      'EventPublishTime.End'?: string;
      /** >该参数暂未开放使用。 */
      ImpactLevel?: string;
      /** 查询结果的页码。取值范围：正整数。

      默认值：1。 */
      PageNumber?: number;
      /** 查询结果的分页大小。取值范围为1~100。

      默认值为10。 */
      PageSize?: number;
      /** 资源类型。取值范围：

      - instance：ECS实例。
      - ddh：专有宿主机。
      - managedhost：智能全托管资源池中的物理机。

      默认值：instance。 */
      ResourceType?: string;
      /** 一个或者多个系统事件ID。N的取值范围为1~100，多个取值使用重复列表的形式。 */
      EventId?: Array<string>;
      /** 一个或者多个系统事件的生命周期状态。N的取值范围：1~7，多个取值使用重复列表的形式。取值范围：

      - Scheduled：等待执行事件。
      - Avoided：事件已避免。
      - Executing：事件执行中。
      - Executed：事件已完成执行。
      - Canceled：事件已取消。
      - Failed：事件执行失败。
      - Inquiring：事件问询中。 */
      InstanceEventCycleStatus?: Array<string>;
      /** 一个或者多个系统事件的类型。N的取值范围：1~30，多个取值使用重复列表的形式。取值范围：

      - SystemMaintenance.Reboot：因系统维护实例重启。
      - SystemMaintenance.Redeploy：因系统维护实例重新部署。
      - SystemFailure.Reboot：因系统错误实例重启。
      - SystemFailure.Redeploy：因系统错误实例重新部署。
      - SystemFailure.Delete：因实例创建失败实例释放。
      - InstanceFailure.Reboot：因实例错误实例重启。
      - InstanceExpiration.Stop：因包年包月期限到期，实例停止。
      - InstanceExpiration.Delete：因包年包月期限到期，实例释放。
      - AccountUnbalanced.Stop：因账号欠费，按量付费实例停止。
      - AccountUnbalanced.Delete：因账号欠费，按量付费实例释放。

      > 事件类型说明请参见[系统事件概述](https://help.aliyun.com/document_detail/66574.html)。该参数的取值只能是实例系统事件，不能是磁盘系统事件。 */
      InstanceEventType?: Array<string>;
      /** 一个或多个资源ID。N的取值范围为1~100。参数的多个取值使用重复列表的形式。取值范围：

      - 当`ResourceType=instance`时，资源ID表示ECS实例ID。
      - 当`ResourceType=ddh`时，资源ID表示专有宿主机ID。
      - 当`ResourceType=managedhost`时，资源ID表示智能全托管资源池中的物理机ID。

      如果不指定该参数，表示查询指定地域（`RegionId`）和指定资源类型（`ResourceType`）下，所有资源的系统事件信息。

      > 推荐您使用`ResourceId.N`参数设置一个或多个资源ID。如果您同时指定了`ResourceId.N`参数和`InstanceId`参数，系统默认优先生效`ResourceId.N`参数。 */
      ResourceId?: Array<string>;
      /** 系统事件支持的标签列表。 */
      Tag?: Array<{
        /** 资源的标签键。 */
        Key?: string;
        /** 资源的标签值。 */
        Value?: string }>;
      /** 资源所在的资源组ID。 */
      ResourceGroupId?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例历史系统事件数组。 */
      InstanceSystemEventSet?: Array<{
        /** 系统事件的生命周期状态。 */
        EventCycleStatus?: {
          /** 系统事件状态代码。 */
          Code?: number;
          /** 系统事件状态名称。 */
          Name?: string };
        /** 系统事件结束时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
        EventFinishTime?: string;
        /** 系统事件ID。 */
        EventId?: string;
        /** 系统事件发布时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
        EventPublishTime?: string;
        /** 系统事件类型。 */
        EventType?: {
          /** 系统事件类型代码。 */
          Code?: number;
          /** 系统事件类型名称。 */
          Name?: string };
        /** 事件扩展属性。 */
        ExtendedAttribute?: {
          /** 事件是否可以处理。 */
          CanAccept?: string;
          /** 安全违规code。 */
          Code?: string;
          /** 本地盘设备名。 */
          Device?: string;
          /** 本地盘ID。 */
          DiskId?: string;
          /** 宿主机ID。 */
          HostId?: string;
          /** 宿主机类型。可能值：

          - ddh：专有宿主机。
          - managedhost：智能全托管资源池中的物理机。 */
          HostType?: string;
          /** 已释放但需要清理的非活跃云盘或本地盘信息。 */
          InactiveDisks?: Array<{
            /** 云盘或本地盘创建时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
            CreationTime?: string;
            /** 云盘或本地盘种类。可能值：
            - cloud：普通云盘。
            - cloud_efficiency：高效云盘。
            - cloud_ssd：SSD盘。
            - cloud_essd：ESSD云盘。
            - local_ssd_pro：I/O密集型本地盘。
            - local_hdd_pro：吞吐密集型本地盘。
            - ephemeral：（已停售）本地盘。
            - ephemeral_ssd：（已停售）本地SSD盘。 */
            DeviceCategory?: string;
            /** 云盘或本地盘大小，单位GiB。 */
            DeviceSize?: string;
            /** 云盘或本地盘类型。可能值：
            - system：系统盘。
            - data：数据盘。 */
            DeviceType?: string;
            /** 云盘或本地盘释放时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
            ReleaseTime?: string }>;
          /** 实例迁移选项。当前仅支持MigrationOptions（使用迁移计划迁移）。 */
          MigrationOptions?: Array<string>;
          /** 受损云盘在线维修策略。可能值：IsolateOnly，表示仅支持隔离坏盘，不支持维修坏盘。 */
          OnlineRepairPolicy?: string;
          /** 安全违规域名。 */
          PunishDomain?: string;
          /** 处罚类型。 */
          PunishType?: string;
          /** 安全违规链接。 */
          PunishUrl?: string;
          /** 云盒机柜号。 */
          Rack?: string;
          /** 事件响应结果。可能值：
          - true：事件响应成功。 
          - false：事件响应失败。 */
          ResponseResult?: string };
        /** 影响级别。 */
        ImpactLevel?: string;
        /** 实例ID。 */
        InstanceId?: string;
        /** 系统事件计划执行时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
        NotBefore?: string;
        /** 系统事件的计划原因。 */
        Reason?: string;
        /** 资源类型。可能值：

        - instance：ECS实例。
        - ddh：专有宿主机。
        - managedhost：智能全托管资源池中的物理机。 */
        ResourceType?: string }>;
      /** 实例列表页码。 */
      PageNumber?: number;
      /** 输入时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 实例总个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceMaintenanceAttributes
   * 查询已设定的维护策略，策略中主要包括两个维护属性。
   * 
   * - 维护时间窗口：您指定的一个时间段，运维只会在该时间内进行。
   * - 维护动作：您指定的实例宕机处理策略。
   * @summary: 调用DescribeInstanceMaintenanceAttributes查询实例的维护属性。
   */
  export namespace DescribeInstanceMaintenanceAttributes {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 维护属性列表的页码。

      起始值：1

      默认值：1 */
      PageNumber?: number;
      /** 单页返回的条数。取值范围：1~100

      默认值：10 */
      PageSize?: number;
      /** 实例ID列表。可输入最多100个实例ID。 */
      InstanceId?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 运维属性的集合。 */
      MaintenanceAttributes?: Array<{
        /** 实例的运维动作属性。 */
        ActionOnMaintenance?: {
          /** 维护动作，默认的值。
           */
          DefaultValue?: string;
          /** 由维护动作组成的数组格式，返回支持的运维动作值列表。 */
          SupportedValues?: Array<string>;
          /** 维护动作，当前生效的值。可能值：

          - Stop: 停止状态（即宕机）。
          - AutoRecover：自动恢复。
          - AutoRedeploy：宕机迁移，数据盘有损。 */
          Value?: string };
        /** 实例ID。 */
        InstanceId?: string;
        /** 运维窗口实例的列表。 */
        MaintenanceWindows?: Array<{
          /** 维护时间窗口结束时间。 */
          EndTime?: string;
          /** 维护时间窗口开始时间。 */
          StartTime?: string }>;
        /** 实例宕机运维前是否发送事件通知。 */
        NotifyOnMaintenance?: boolean }>;
      /** 维护属性列表的页码。 */
      PageNumber?: number;
      /** 单页返回的条数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 查询到的维护属性总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceModificationPrice
   * - 仅支持查询未到期的包年包月ECS实例升配的价格信息，暂不支持查询实例降配的价格信息。
   * - 不支持查询按量付费ECS实例变配时的价格信息。由于按量付费ECS实例变配后的价格与新购实例的价格一致，因此您可以直接调用[DescribePrice](https://help.aliyun.com/document_detail/107829.html)查询ECS实例的最新价格。
   * - 实例升配前，建议您先调用[DescribeResourcesModification](https://help.aliyun.com/document_detail/66187.html)查询指定可用区内可升配的实例规格信息。
   * @summary: 调用DescribeInstanceModificationPrice查询未到期的包年包月ECS实例升配时目标实例规格的价格信息、新增包年包月数据盘的价格信息。
   */
  export namespace DescribeInstanceModificationPrice {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 需要查询升配价格的实例ID。 */
      InstanceId: string;
      /** 实例升配的目标实例规格。建议您先调用[DescribeResourcesModification](https://help.aliyun.com/document_detail/66187.html)查询指定可用区内可升配的实例规格信息。

      > 查询时，实例规格参数（`InstanceType`）和数据盘参数（`DataDisk.N.*`）不得同时为空，必须至少指定一个。 */
      InstanceType?: string;
      /** 系统盘类型。仅当从已停售的实例规格升配至在售实例规格，并将非I/O优化实例规格升级为I/O优化实例规格时，才需要传入参数值。关于实例规格的更多信息，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)以及[已停售的实例规格](https://help.aliyun.com/document_detail/55263.html)。

      取值范围：

      - cloud_efficiency：高效云盘。
      - cloud_ssd：SSD云盘。

      默认值：无。 */
      'SystemDisk.Category'?: string;
      /** 数据盘类型信息。 */
      DataDisk?: Array<{
        /** 数据盘类型。当您需要查询ECS实例挂载的新包年包月数据盘的价格时，可以传入该参数值。N的取值范围：1~16。取值范围：

        - cloud_efficiency：高效云盘。
        - cloud_ssd：SSD云盘。
        - cloud_essd：ESSD云盘。
        - cloud：普通云盘。

        默认值：无。

        > 查询时，实例规格参数（`InstanceType`）和数据盘参数（`DataDisk.N.*`）不得同时为空，必须至少指定一个。

         */
        Category?: string;
        /** 当数据盘类型为ESSD云盘时，设置云盘的性能等级。N的取值必须和`DataDisk.N.Category=cloud_essd`中的N保持一致。取值范围：

        - PL0：单盘最高随机读写IOPS 1万。
        - PL1：单盘最高随机读写IOPS 5万。
        - PL2：单盘最高随机读写IOPS 10万。
        - PL3：单盘最高随机读写IOPS 100万。

        默认值：PL1。

        有关如何选择ESSD性能等级，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。 */
        PerformanceLevel?: string;
        /** 数据盘的容量大小。N的取值范围：1~16，内存单位为GiB。取值范围：

        - cloud_efficiency：20~32768。
        - cloud_ssd：20~32768。
        - cloud_essd：具体取值范围与`DataDisk.N.PerformanceLevel`的取值有关。    
            - PL0：40~32768。
            - PL1：20~32768。
            - PL2：461~32768。
            - PL3：1261~32768。
        - cloud：5~2000。

        默认值：指定数据盘类型相应的容量大小的最小值。 */
        Size?: number }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 价格信息类型（PriceInfo）组成的数据类型，包括价格和优惠规则信息。 */
      PriceInfo?: {
        /** 价格。 */
        Price?: {
          /** 货币单位。

          中国站：CNY。

          国际站：USD。 */
          Currency?: string;
          /** 折扣。 */
          DiscountPrice?: number;
          /** 原价。 */
          OriginalPrice?: number;
          /** 最终价，为原价减去折扣。 */
          TradePrice?: number };
        /** 活动规则。 */
        Rules?: Array<{
          /** 活动规则描述。 */
          Description?: string;
          /** 活动ID。 */
          RuleId?: number }> };
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceMonitorData
   * 调用该接口时，您需要注意：
   * 
   * -  每次最多返回400条监控数据，如果指定的参数`(EndTime - StartTime)/Period`大于400时，则返回错误信息。
   * -  单次最多能查询近30天内的监控信息，如果指定的参数`StartTime`超过30天，则返回错误信息。
   * -  当返回信息中缺少部分内容时，可能是系统没有获取到相应的信息。例如，当时实例处于已停止（Stopped）状态。
   * @summary: 调用DescribeInstanceMonitorData查询一台ECS实例的监控信息。可查询的指标包括ECS实例的vCPU使用率、突发性能实例积分、接收的数据流量、发送的数据流量、平均带宽等。
   */
  export namespace DescribeInstanceMonitorData {
    export type Params = {
      /** 待查询的实例ID。 */
      InstanceId: string;
      /** 获取数据的起始时间点。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果指定的秒（`ss`）不是`00`，则自动换算为下一分钟。  */
      StartTime: string;
      /** 获取数据的结束时间点。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果指定的秒（`ss`）不是`00`，则自动换算为下一分钟。  */
      EndTime: string;
      /** 获取监控数据的间隔时间，单位：秒。取值范围： 

      - 60  
      - 600  
      - 3600  

      默认值：60 */
      Period?: '60' | '600' | '3600';
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例的监控数据集合。 */
      MonitorData?: Array<{
        /** 实例云盘（包括系统盘和数据盘）的读带宽，单位：Byte/s。 */
        BPSRead?: number;
        /** 实例云盘（包括系统盘和数据盘）的写带宽，单位：Byte/s。 */
        BPSWrite?: number;
        /** 实例vCPU的使用比例，单位：百分比（%）。 */
        CPU?: number;
        /** 超额积分（突发性能实例积分超限部分）。 */
        CPUAdvanceCreditBalance?: number;
        /** 突发性能实例积分总数。 */
        CPUCreditBalance?: number;
        /** 突发性能实例已使用的积分数。 */
        CPUCreditUsage?: number;
        /** 超额未支付积分。 */
        CPUNotpaidSurplusCreditUsage?: number;
        /** 实例云盘（包括系统盘和数据盘）的I/O读操作，单位：次/s。 */
        IOPSRead?: number;
        /** 实例云盘（包括系统盘和数据盘）的I/O写操作，单位：次/s。 */
        IOPSWrite?: number;
        /** 实例ID。 */
        InstanceId?: string;
        /** 实例的公网带宽，单位时间内的网络流量，单位：kbits/s。 */
        InternetBandwidth?: number;
        /** 在查询监控信息时（`TimeStamp`），实例在指定的间隔时间（`Period`）内接收的公网数据流量。单位：kbits。 */
        InternetRX?: number;
        /** 在查询监控信息时（`TimeStamp`），实例在指定的间隔时间（`Period`）内发送的公网数据流量。单位：kbits。 */
        InternetTX?: number;
        /** 实例的内网带宽，单位时间内的网络流量，单位：kbits/s。 */
        IntranetBandwidth?: number;
        /** 在查询监控信息时（`TimeStamp`），实例在指定的间隔时间（`Period`）内接收的内网数据流量。单位：kbits。 */
        IntranetRX?: number;
        /** 在查询监控信息时（`TimeStamp`），实例在指定的间隔时间（`Period`）内发送的内网数据流量。单位：kbits。 */
        IntranetTX?: number;
        /** 查询监控信息的时间戳。 */
        TimeStamp?: string }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceRamRole
   * 通过阿里云CLI调用API时，不同数据类型的请求参数取值必须遵循格式要求，详情请参见[CLI参数格式说明](https://help.aliyun.com/document_detail/110340.html)。
   * @summary: 调用DescribeInstanceRamRole查询一台或者多台ECS实例上的已赋予的实例RAM角色。
   */
  export namespace DescribeInstanceRamRole {
    export type Params = {
      /** 查询接口返回资源信息列表的页码。

      起始值：1

      默认值：1 */
      PageNumber?: number;
      /** 分页展示响应信息时设置的每页行数，单位：行。

      最大值：50

      默认值：10 */
      PageSize?: number;
      /** 实例RAM角色所在的地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 指定查询的实例ID的集合。最多支持一次查询100台实例。`InstanceIds`与`RamRoleName`参数必须至少填写一个。 */
      InstanceIds?: string;
      /** 查询赋予了某一实例RAM角色的所有ECS实例。您可以使用RAM API [ListRoles](https://help.aliyun.com/document_detail/28713.html)查询您已创建的实例RAM角色。`InstanceIds`与`RamRoleName`参数必须至少填写一个。 */
      RamRoleName?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 由实例RAM角色类型InstanceRamRoleSet组成的信息集。 */
      InstanceRamRoleSets?: Array<{
        /** 实例ID。 */
        InstanceId?: string;
        /** 实例RAM角色名称列表。 */
        RamRoleName?: string }>;
      /** 实例RAM角色所在的地域。 */
      RegionId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 返回的RAM角色数量。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceStatus
   * - ECS实例的生命周期状态请参见[实例状态表](https://help.aliyun.com/document_detail/25687.html)。 
   * - 该接口同时可用于获取实例列表。
   * @summary: 调用DescribeInstanceStatus获取多台ECS实例的状态信息。
   */
  export namespace DescribeInstanceStatus {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例所属可用区。您可以调用[DescribeZones](https://help.aliyun.com/document_detail/25610.html)查看最新的阿里云可用区列表。 */
      ZoneId?: string;
      /** 实例所属的集群ID。 */
      ClusterId?: string;
      /** 实例状态列表的页码。

      起始值：1。

      默认值：1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。取值范围：1~50。

      默认值：10。 */
      PageSize?: number;
      /** 实例ID。多个实例ID在不同参数中指定，如`InstanceId.1=i-bp1j4i2jdf3owlhe****, InstanceId.2=i-bp1j4i2jdf3o1234****`。 */
      InstanceId?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例状态集类型（InstanceStatus）。 */
      InstanceStatuses?: Array<{
        /** 实例ID。 */
        InstanceId?: string;
        /** 实例状态。可能值： 

        - Pending：创建中。

        - Running：运行中。

        - Starting：启动中。

        - Stopping：停止中。

        - Stopped：已停止。 */
        Status?: string }>;
      /** 实例列表的页码。 */
      PageNumber?: number;
      /** 输入时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 实例总个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceTopology
   * > DescribeInstanceTopology正处于邀测阶段，请您耐心等待。感谢您的支持！
   * @summary: （Beta）调用DescribeInstanceTopology查询实例所在宿主机的拓扑结构。
   */
  export namespace DescribeInstanceTopology {
    export type Params = {
      /** ECS实例所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 一台或多台ECS实例的ID。支持最多100台ECS实例。 */
      InstanceIds?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 拓扑结构详情。 */
      Topologys?: Array<{
        /** ECS实例所在的物理机标识。经过加密处理，不能直接和阿里云资源的标识匹配上。但不同ECS实例只要通过该参数查询到的值是一致的，就说明ECS实例是在同一个物理机上。 */
        HostId?: string;
        /** 实例ID。 */
        InstanceId?: string }> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceTypeFamilies
   * 调用DescribeInstanceTypeFamilies查询云服务器ECS提供的实例规格族列表。
   * @summary: 调用DescribeInstanceTypeFamilies查询云服务器ECS提供的实例规格族列表。
   */
  export namespace DescribeInstanceTypeFamilies {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例规格族的系列信息。更多详情，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。取值范围：

      - ecs-1：系列I实例规格，上线时间较早，性价比高。

      - ecs-2：系列II实例规格族，第二次软硬件升级，实例性能增强。

      - ecs-3：系列III实例规格族，实例性能优良，能承载不同业务需求。

      - ecs-4：系列IV实例规格族，包含常见的企业级实例规格（g5、c5、r5等）、弹性裸金属服务器实例规格（ebmc5s、ebmg5s、ebmr5s等）、突发性能实例规格（t5）等，具有强大的场景适应性，能承载海量热门业务需求，延迟更低。

      - ecs-5：系列V实例规格族，包含常见的企业级实例规格（g6、c6、r6等）、弹性裸金属服务器实例规格（ebmg6、ebmg6e、ebmc6等）、存储增强型实例规格（g6e）等，响应更快，性能更优越。

      - ecs-6：系列VI实例规格族，包含企业级实例规格（hfc7、hfg7、hfr7等）、弹性裸金属服务器实例规格（ebmhfg7等），该系列实例规格族正在邀测中。 */
      Generation?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 由实例规格族InstanceTypeFamily组成的集合。 */
      InstanceTypeFamilies?: Array<{
        /** 实例规格族所属代数。 */
        Generation?: string;
        /** 实例规格族ID。 */
        InstanceTypeFamilyId?: string }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceTypes
   * ## 接口说明
   * 
   * 调用接口前，您需要注意：
   * 
   * - MaxResults（每页最大条目数）参数的最大值为100，对于在2022年调用过本API的用户，MaxResults参数的最大值仍为1600，在2023年11月15日及之后，我们将对所有用户的MaxResults参数的最大值缩小到100，不再支持1600，若您调用该API时未传入NextToken参数进行分页获取，默认只返回规格第一页（不超过100条）数据，若需要更多数据，请您传入NextToken进行分页获取或传入过滤条件来限制返回的数据范围。关于使用DescribeInstanceTypes的最佳实践，请参见[ECS如何对比性能？](https://help.aliyun.com/practice_detail/461278)。
   * - 推荐您设置MaxResults与NextToken参数进行分页查询。具体使用说明：首次调用该接口时，您设置MaxResults参数以限制返回值中实例规格的条目数，如果一次调用只返回了部分被查询到的实例规格的条目数，则会同步返回NextToken参数值。您可以再次调用该接口，设置上次调用该接口返回的NextToken参数值以及MaxResults参数，以实现分页查询实例规格信息。
   * - DescribeInstanceTypes仅查询实例规格的配置和性能信息。如果您需要查询具体地域下可购买的实例规格，请使用[DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html)。
   * - 如果您需要使用非售卖可见的实例规格或特别的规格需求，请[提交工单](https://selfservice.console.aliyun.com/ticket/createIndex.htm)联系阿里云。
   * @summary: 调用DescribeInstanceTypes查询云服务器ECS提供的所有实例规格的信息，也可以查询指定实例规格的信息。
   */
  export namespace DescribeInstanceTypes {
    export type Params = {
      /** 实例规格所属的实例规格族。取值请参见[DescribeInstanceTypeFamilies](https://help.aliyun.com/document_detail/25621.html)。

      关于实例规格族的更多信息，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。 */
      InstanceTypeFamily?: string;
      /** 指定的实例规格。N的取值范围：1~10。当该参数不传值时，默认查询所有实例规格的信息。 */
      InstanceTypes?: Array<string>;
      /** 查询实例规格时，期望最小vCPU内核的数目。取值范围：正整数。

      >查询到实例规格的vCPU内核数目小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumCpuCoreCount?: number;
      /** 查询实例规格时，期望最大vCPU内核的数目。取值范围：正整数。

      >查询到实例规格的vCPU内核数目大于设定值时，系统不会返回其实例规格的信息。 */
      MaximumCpuCoreCount?: number;
      /** 查询实例规格时，期望最小内存。单位：GiB。

      >查询到实例规格的内存大小小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumMemorySize?: number;
      /** 查询实例规格时，期望最大内存。单位：GiB。

      >查询到实例规格的内存大小大于设定值时，系统不会返回其实例规格的信息。 */
      MaximumMemorySize?: number;
      /** 查询实例规格时，期望最小GPU数目。取值范围：正整数。

      >查询到实例规格的GPU数目小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumGPUAmount?: number;
      /** 查询实例规格时，期望最大GPU数目。取值范围：正整数。

      >查询到实例规格的GPU数目大于设定值时，系统不会返回其实例规格的信息。 */
      MaximumGPUAmount?: number;
      /** GPU类型。
      >支持模糊匹配，如某规格的GPU类型为NVIDIA V100，输入NVIDIA也可查询到该规格信息。 */
      GPUSpec?: string;
      /** 实例规格分类。取值范围：

      - General-purpose： 通用型。
      - Compute-optimized：计算型。
      - Memory-optimized：内存型。
      - Big data：大数据型。
      - Local SSDs ：本地SSD型。
      - High Clock Speed ：高主频型。
      - Enhanced ：增强型。
      - Shared：共享型。
      - Compute-optimized with GPU ：GPU计算型。
      - Visual Compute-optimized ：视觉计算型。
      - Heterogeneous Service ：异构服务型。
      - Compute-optimized with FPGA ：FPGA计算型。
      - Compute-optimized with NPU ：NPU计算型。
      - ECS Bare Metal ：弹性裸金属服务器。
      - Super Computing Cluster：超级计算集群。
      - High Performance Compute：高性能计算型。 */
      InstanceCategory?: 'General-purpose' | 'Compute-optimized' | 'Memory-optimized' | 'Big data' | 'Local SSDs' | 'High Clock Speed' | 'Enhanced' | 'Shared' | 'Compute-optimized with GPU' | 'Visual Compute-optimized' | 'Heterogeneous Service' | 'Compute-optimized with FPGA' | 'Compute-optimized with NPU' | 'ECS Bare Metal' | 'Super Computing Cluster';
      /** CPU架构。取值范围：
      - X86。
      - ARM。 */
      CpuArchitecture?: 'X86' | 'ARM';
      /** 查询实例规格时，期望最小主频。

      >查询到实例规格的主频小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumCpuSpeedFrequency?: number;
      /** 查询实例规格时，期望最大主频。

      >查询到实例规格的主频大于设定值时，系统不会返回其实例规格的信息。 */
      MaximumCpuSpeedFrequency?: number;
      /** 查询实例规格时，期望最小睿频。

      >查询到实例规格的睿频小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumCpuTurboFrequency?: number;
      /** 查询实例规格时，期望最大睿频。

      >查询到实例规格的睿频大于设定值时，系统不会返回其实例规格的信息。 */
      MaximumCpuTurboFrequency?: number;
      /** 处理器型号。
      >支持模糊匹配，如某规格的处理器型号为Intel Xeon(Ice Lake) Platinum 8369B，输入Intel也可查询到该规格信息。 */
      PhysicalProcessorModel?: string;
      /** 实例规格族级别。取值范围：
      - EntryLevel：入门级（共享型）。
      - EnterpriseLevel：企业级。
      - CreditEntryLevel：积分入门级。 */
      InstanceFamilyLevel?: 'EntryLevel' | 'EnterpriseLevel' | 'CreditEntryLevel';
      /** 查询实例规格时，期望最小内网入方向网络收发包能力。单位：pps。

      >查询到实例规格的内网入方向网络收发包能力小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumInstancePpsRx?: number;
      /** 查询实例规格时，期望最小内网出方向网络收发包能力。单位：pps。

      >查询到实例规格的内网出方向网络收发包能力小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumInstancePpsTx?: number;
      /** 查询实例规格时，期望最小内网入方向带宽限制，单位：kbit/s。

      >查询到实例规格的内网入方向带宽限制小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumInstanceBandwidthRx?: number;
      /** 查询实例规格时，期望最小内网出方向带宽限制，单位：kbit/s。

      >查询到实例规格的内网出方向带宽限制小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumInstanceBandwidthTx?: number;
      /** 查询实例规格时，期望最小主网卡默认队列数。

      >查询到实例规格的主网卡默认队列数小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumPrimaryEniQueueNumber?: number;
      /** 查询实例规格时，期望最小辅助弹性网卡默认队列数。

      >查询到实例规格的辅助弹性网卡默认队列数小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumSecondaryEniQueueNumber?: number;
      /** 查询实例规格时，期望最小支持挂载的弹性网卡上限。

      >查询到实例规格的支持挂载的弹性网卡上限小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumEniQuantity?: number;
      /** 查询实例规格时，期望最小单块弹性RDMA网卡（ERI）的QP（QueuePair）队列数上限。

      >查询到实例规格的单块弹性RDMA网卡（ERI）的QP（QueuePair）队列数上限小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumQueuePairNumber?: number;
      /** 查询实例规格时，期望最小弹性RDMA网卡（ERI）数量。

      >查询到实例规格的弹性RDMA网卡（ERI）数量小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumEriQuantity?: number;
      /** 查询实例规格时，期望最小单块弹性网卡的IPv4地址上限。

      >查询到实例规格的单块弹性网卡的IPv4地址上限小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumEniPrivateIpAddressQuantity?: number;
      /** 查询实例规格时，期望最小单块弹性网卡的IPv6地址上限。

      >查询到实例规格的单块弹性网卡的IPv6地址上限小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumEniIpv6AddressQuantity?: number;
      /** 查询实例规格时，期望最小实例挂载的本地盘的数量。

      >查询到实例规格的实例挂载的本地盘的数量小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumLocalStorageAmount?: number;
      /** 实例挂载的本地盘的单盘容量。单位：GiB */
      MinimumLocalStorageCapacity?: number;
      /** 查询实例规格时，期望最小支持挂载的云盘数量上限。

      >查询到实例规格的支持挂载的云盘数量上限小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumDiskQuantity?: number;
      /** 本地盘类型。更多信息，请参见[本地盘](https://help.aliyun.com/document_detail/63138.html#section_n2w_8yc_5u1)。取值范围：

      - local\_hdd\_pro：实例规格族d1ne和d1搭载的SATA HDD本地盘。
      - local\_ssd\_pro：实例规格族i2、i2g、i1、ga1和gn5等搭载的NVMe SSD本地盘。 */
      LocalStorageCategory?: 'local_hdd_pro' | 'local_ssd_pro';
      /** 实例规格所挂载的云盘是否支持NVMe。取值范围：

      - required：支持。表示云盘以NVMe的方式挂载。
      - unsupported：不支持。表示云盘不以NVMe的方式挂载。 */
      NvmeSupport?: 'required' | 'unsupported';
      /** 查询实例规格时，期望最小突发性能实例t5、t6的基准vCPU计算性能（所有vCPU之和）。

      >查询到实例规格的突发性能实例t5、t6的基准vCPU计算性能（所有vCPU之和）小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumBaselineCredit?: number;
      /** 查询实例规格时，期望最小突发性能实例t5、t6的初始vCPU积分值。

      >查询到实例规格的突发性能实例t5、t6的初始vCPU积分值小于设定值时，系统不会返回其实例规格的信息。 */
      MinimumInitialCredit?: number;
      /** 分页查询时每页的最大条目数。最大值：1600

      默认值：1600 */
      MaxResults?: number;
      /** 查询凭证（Token）。取值为上一次调用该接口返回的NextToken参数值，初次调用接口时无需设置该参数。 */
      NextToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例规格集合。 */
      InstanceTypes?: Array<{
        /** 突发性能实例t5、t6的基准vCPU计算性能（所有vCPU之和）。 */
        BaselineCredit?: number;
        /** CPU架构，可能值：

        - X86。
        - ARM。 */
        CpuArchitecture?: string;
        /** vCPU内核数目。 */
        CpuCoreCount?: number;
        /** CPU基频，单位GHz。 */
        CpuSpeedFrequency?: number;
        /** CPU睿频，单位GHz。 */
        CpuTurboFrequency?: number;
        /** 支持挂载的云盘数量上限。 */
        DiskQuantity?: number;
        /** 单块弹性网卡的IPv6地址上限。 */
        EniIpv6AddressQuantity?: number;
        /** 单块弹性网卡的IPv4地址上限。 */
        EniPrivateIpAddressQuantity?: number;
        /** 支持挂载的弹性网卡上限。 */
        EniQuantity?: number;
        /** 支持挂载的所有网卡（包括主网卡、弹性网卡、中继网卡等）上限。
        > 该参数正在邀测中，暂未开放使用。 */
        EniTotalQuantity?: number;
        /** 实例规格所挂载的网卡是否支持中继。
        > 该参数正在邀测中，暂未开放使用。 */
        EniTrunkSupported?: boolean;
        /** 弹性RDMA网卡（ERI）数量。

        > 该参数正在邀测中，暂未开放使用。 */
        EriQuantity?: number;
        /** GPU数量。 */
        GPUAmount?: number;
        /** 规格对应的单块GPU显存。单位：GiB。 */
        GPUMemorySize?: number;
        /** GPU类型。
         */
        GPUSpec?: string;
        /** 突发性能实例t5、t6的初始vCPU积分值。 */
        InitialCredit?: number;
        /** 最大内网入方向带宽限制。单位：kbit/s */
        InstanceBandwidthRx?: number;
        /** 最大内网出方向带宽限制。单位：kbit/s */
        InstanceBandwidthTx?: number;
        /** 实例规格分类。可能值：

        - General-purpose： 通用型。
        - Compute-optimized：计算型。
        - Memory-optimized：内存型。
        - Big data：大数据型。
        - Local SSDs ：本地SSD型。
        - High Clock Speed ：高主频型。
        - Enhanced ：增强型。
        - Shared：共享型。
        - Compute-optimized with GPU ：GPU计算型。
        - Visual Compute-optimized ：视觉计算型。
        - Heterogeneous Service ：异构服务型。
        - Compute-optimized with FPGA ：FPGA计算型。
        - Compute-optimized with NPU ：NPU计算型。
        - ECS Bare Metal ：弹性裸金属服务器。
        - Super Computing Cluster：超级计算集群。
        - High Performance Compute：高性能计算型。 */
        InstanceCategory?: string;
        /** 实例规格族级别。可能值：

        - EntryLevel：入门级（共享型）。
        - EnterpriseLevel：企业级。
        - CreditEntryLevel：积分入门级。更多信息，请参见[突发性能实例](https://help.aliyun.com/document_detail/59977.html)。 */
        InstanceFamilyLevel?: string;
        /** 内网入方向网络收发包能力。单位：pps。 */
        InstancePpsRx?: number;
        /** 内网出方向网络收发包能力。单位：pps。 */
        InstancePpsTx?: number;
        /** 实例规格族。 */
        InstanceTypeFamily?: string;
        /** 实例规格ID。 */
        InstanceTypeId?: string;
        /** 实例挂载的本地盘的数量。 */
        LocalStorageAmount?: number;
        /** 实例挂载的本地盘的单盘容量。单位：GiB。 */
        LocalStorageCapacity?: number;
        /** 本地盘类型。更多信息，请参见[本地盘](https://help.aliyun.com/document_detail/63138.html)。可能值：

        - local_hdd_pro：实例规格族d1ne和d1搭载的SATA HDD本地盘。
        - local_ssd_pro：实例规格族i2、i2g、i1、ga1和gn5等搭载的NVMe SSD本地盘。 */
        LocalStorageCategory?: string;
        /** 单块弹性网卡最大队列数。包括主网卡及辅助网卡支持的队列数。 */
        MaximumQueueNumberPerEni?: number;
        /** 内存大小。单位：GiB。 */
        MemorySize?: number;
        /** 实例规格支持的物理网卡数量。 */
        NetworkCardQuantity?: number;
        /** 物理网卡信息列表。 */
        NetworkCards?: Array<{
          /** 物理网卡索引。 */
          NetworkCardIndex?: number }>;
        /** 实例是否支持VPC网络流量加密，可能值：

        - true：支持VPC网络流量加密。
        - false：不支持VPC网络流量加密。 */
        NetworkEncryptionSupport?: boolean;
        /** 实例规格所挂载的云盘是否支持NVMe。可能值：
        - required：支持。表示云盘以NVMe的方式挂载。
        - unsupported：不支持。表示云盘不以NVMe的方式挂载。 */
        NvmeSupport?: string;
        /** 处理器型号。
         */
        PhysicalProcessorModel?: string;
        /** 主网卡默认队列数。 */
        PrimaryEniQueueNumber?: number;
        /** 单块弹性RDMA网卡（ERI）的QP（QueuePair）队列数上限。 */
        QueuePairNumber?: number;
        /** 辅助弹性网卡默认队列数。 */
        SecondaryEniQueueNumber?: number;
        /** 实例规格允许修改的弹性网卡队列数总配额。 */
        TotalEniQueueQuantity?: number }>;
      /** 本次调用返回的查询凭证（Token）。 */
      NextToken?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceVncUrl
   * ## 接口说明
   * 
   * 调用该接口时，您需要注意：
   * 
   * -  管理终端地址的有效期为15秒，调用接口成功后如果15秒内不使用该链接，URL地址自动失效，您需要重新查询。
   * -  单个管理终端链接的**持久链接**（KeepAlive）时间为60秒，60秒内您管理终端窗口没有任何交互操作时，连接自动断开。
   * -  如果连接中断，每分钟内重新连接的次数不能超过30次。
   * -  您需要在链接`https://g.alicdn.com/aliyun/ecs-console-vnc2/0.0.8/index.html?`末尾加上`vncUrl=\*\*\*\*`、`instanceId=\*\*\*\*`、`isWindows=True/False`和`password=\*\*\*\*`，参数之间使用`&`连接。其中：
   *     -  参数`vncUrl`：调用接口成功后会返回的`VncUrl`的值。
   *     -  参数`instanceId`：您的实例ID。
   *     -  参数`isWindows`：该实例的操作系统是否是Windows系统。取值为`true`表示是Windows系统，取值为`false`表示不是Windows系统。
   *     -  （可选）参数`password`：该实例的远程连接密码，由六位数字或大小写字母组成。使用该参数时，在连接管理终端处您不需要再输入密码。
   * 
   *         请求示例如下：
   * 
   *         ```
   * https://g.alicdn.com/aliyun/ecs-console-vnc2/0.0.8/index.html?vncUrl=ws%3A%2F%\*\*\*\*&instanceId=i-wz9hhwq5a6tm\*\*\*\*&isWindows=true
   *         ```
   * 
   *         或者：
   * 
   *         ```
   * https://g.alicdn.com/aliyun/ecs-console-vnc2/0.0.8/index.html?vncUrl=ws%3A%2F%\*\*\*\*&instanceId=i-wz9hhwq5a6tm\*\*\*\*&isWindows=true&password=\*\*\*\*
   *        ```
   * @summary: 调用DescribeInstanceVncUrl查询一台ECS实例的Web管理终端地址。
   */
  export namespace DescribeInstanceVncUrl {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例ID。 */
      InstanceId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 管理终端Url。 */
      VncUrl?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstances
   * ## 接口说明
   * 
   * - 请求参数的作用类似于一个过滤器，过滤器为逻辑与（AND）关系。如果某一参数为空，则过滤器不起作用。但是参数InstanceIds如果是一个空JSON数组，则视为该过滤器有效，且返回空。
   * - 如果您使用的是RAM用户账号或者RAM角色，当用户或者角色缺乏接口权限时，将会返回空列表。您可以在请求中加入`DryRun`参数，判断是否因权限问题导致的空列表现象。
   * - 通过阿里云CLI调用API时，不同数据类型的请求参数取值必须遵循格式要求。更多信息，请参见[CLI参数格式说明](https://help.aliyun.com/document_detail/110340.html)。
   * - 支持以下两种方式查看返回数据：
   *     - 方式一：分页查询首页时，仅需设置`MaxResults`以限制返回信息的条目数，返回结果中的`NextToken`将作为查询后续页的凭证。查询后续页时，将`NextToken`参数设置为上一次返回结果中获取到的`NextToken`作为查询凭证，并设置`MaxResults`限制返回条目数。
   *     - 方式二：通过`PageSize`设置单页返回的条目数，再通过`PageNumber`设置页码。
   * 
   *      以上两种方式只能任选其中之一。当返回的条目数较多时，推荐使用方式一。如果设置了`MaxResults`或`NextToken`参数，则请求参数`PageSize`和`PageNumber`将失效，且返回数据中的`TotalCount`无效。
   * @summary: 调用DescribeInstances查询一台或多台ECS实例的详细信息。
   */
  export namespace DescribeInstances {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 专有网络VPC ID。 */
      VpcId?: string;
      /** 交换机ID。 */
      VSwitchId?: string;
      /** 可用区ID。 */
      ZoneId?: string;
      /** 实例网络类型。取值范围：

      - classic：经典网络。
      - vpc：专有网络VPC。 */
      InstanceNetworkType?: string;
      /** 实例所属的安全组。 */
      SecurityGroupId?: string;
      /** 实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。  */
      InstanceIds?: string;
      /** 实例状态列表的页码。

      起始值：1。

      默认值：1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值为100。

      默认值为10。 */
      PageSize?: number;
      /** 查询凭证（Token），取值为上一次API调用返回的`NextToken`参数值。 */
      NextToken?: string;
      /** 分页查询时每页行数。最大值为100。

      默认值：

      - 当不设置值或设置的值小于10时，默认值为10。
      - 当设置的值大于100时，默认值为100。 */
      MaxResults?: number;
      /** 经典网络类型实例的内网IP列表。当InstanceNetworkType=classic时生效，取值可以由多个IP组成一个JSON数组，最多支持100个IP，IP之间用半角逗号（,）隔开。  */
      InnerIpAddresses?: string;
      /** VPC网络类型实例的私有IP。当InstanceNetworkType=vpc时生效，取值可以由多个IP组成一个JSON数组，最多支持100个IP，IP之间用半角逗号（,）隔开。  */
      PrivateIpAddresses?: string;
      /** 实例的公网IP列表。取值可以由多个IP组成一个JSON数组，最多支持100个IP，IP之间用半角逗号（,）隔开。  */
      PublicIpAddresses?: string;
      /** 实例的弹性公网IP列表。当InstanceNetworkType=vpc时该参数生效，取值可以由多个IP组成一个JSON数组，最多支持100个IP，IP之间用半角逗号（,）隔开。  */
      EipAddresses?: string;
      /** 实例的计费方式。取值范围： 
               
      - PostPaid：按量付费。 
      - PrePaid：包年包月。 */
      InstanceChargeType?: string;
      /** 公网带宽计费方式。取值范围：

      - PayByBandwidth：按固定带宽计费。
      - PayByTraffic：按使用流量计费。

      > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。 */
      InternetChargeType?: string;
      /** 实例名称，支持使用通配符*进行模糊搜索。  */
      InstanceName?: string;
      /** 镜像ID。 */
      ImageId?: string;
      /** 实例状态。取值范围： 

      - Pending：创建中。
      - Running：运行中。
      - Starting：启动中。
      - Stopping：停止中。
      - Stopped：已停止。 */
      Status?: string;
      /** 资源被锁定的原因。取值范围：

      - financial：因欠费被锁定。

      - security：因安全原因被锁定。

      - Recycling：抢占式实例的待释放锁定状态。

      - dedicatedhostfinancial：因为专有宿主机欠费导致ECS实例被锁定。

      - refunded：因退款被锁定。 */
      LockReason?: string;
      /** 查询资源时的筛选键，取值必须为`CreationStartTime`。同时设置`Filter.1.Key`和`Filter.1.Value`可以查询在指定时间点后创建的资源信息。 */
      'Filter.1.Key'?: string;
      /** 查询资源时的筛选键，取值必须为`CreationEndTime`。同时设置`Filter.2.Key`和`Filter.2.Value`可以查询在指定时间点前创建的资源信息。 */
      'Filter.2.Key'?: string;
      /** 查询资源时的筛选键，取值必须为`ExpiredStartTime`。同时设置`Filter.3.Key`和`Filter.3.Value`可以查询在指定时间点后到期的资源信息。 */
      'Filter.3.Key'?: string;
      /** 查询资源时的筛选键，取值必须为`ExpiredEndTime`。同时设置`Filter.4.Key`和`Filter.4.Value`可以查询在指定时间点前到期的资源信息。 */
      'Filter.4.Key'?: string;
      /** 查询资源时的筛选值。指定该参数时必须同时指定`Filter.1.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC +0时区。 */
      'Filter.1.Value'?: string;
      /** 查询资源时的筛选值。指定该参数时必须同时指定`Filter.2.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC +0时区。 */
      'Filter.2.Value'?: string;
      /** 查询资源时的筛选值。指定该参数时必须同时指定`Filter.3.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC +0时区。 */
      'Filter.3.Value'?: string;
      /** 查询资源时的筛选值。指定该参数时必须同时指定`Filter.4.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC +0时区。 */
      'Filter.4.Value'?: string;
      /** >该参数正在邀测中，暂不支持使用。 */
      DeviceAvailable?: boolean;
      /** 是否是I/O优化型实例。取值范围：

      - true：是。
      - false：否。 */
      IoOptimized?: boolean;
      /** >该参数正在邀测中，暂不支持使用。 */
      NeedSaleCycle?: boolean;
      /** 实例的规格。 */
      InstanceType?: string;
      /** 实例的规格族。 */
      InstanceTypeFamily?: string;
      /** 实例使用的SSH密钥对名称。 */
      KeyPairName?: string;
      /** 实例所在的企业资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。

      >不支持默认资源组过滤。 */
      ResourceGroupId?: string;
      /** 实例所在的HPC集群ID。 */
      HpcClusterId?: string;
      /** HPC实例的RDMA网络IP。 */
      RdmaIpAddresses?: string;
      /** 是否只预检此次请求。取值范围：

      - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。  
      - false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。 

      默认值：false。 */
      DryRun?: boolean;
      /** 是否启用实例元数据的访问通道。取值范围：
      - enabled：启用。
      - disabled：禁用。

      默认值：enabled。
      >有关实例元数据的更多信息，请参见[实例元数据概述](https://help.aliyun.com/document_detail/49122.html)。 */
      HttpEndpoint?: string;
      /** 访问实例元数据时是否强制使用加固模式（IMDSv2）。取值范围：
      - optional：不强制使用。
      - required：强制使用。设置该取值后，普通模式无法访问实例元数据。

      默认值：optional。
      >有关访问实例元数据模式的更多信息，请参见[实例元数据访问模式](https://help.aliyun.com/document_detail/150575.html)。 */
      HttpTokens?: string;
      /** >该参数正在邀测中，暂不支持使用。 */
      HttpPutResponseHopLimit?: number;
      /** 为弹性网卡指定的IPv6地址。 */
      Ipv6Address?: Array<string>;
      /** 标签列表。 */
      Tag?: Array<{
        /** 实例的标签键。N的取值范围为1~20。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。 */
        Key?: string;
        /** 实例的标签值。N的取值范围：1~20。 */
        Value?: string;
        /** 标签键。

        > 为提高兼容性，建议您使用另一个`Tag.N.Key`参数。 */
        key?: string;
        /** 标签值。

        > 为提高兼容性，建议您使用另一个`Tag.N.Value`参数。 */
        value?: string }>;
      /** 其他属性值。N的取值范围为1~20。取值范围：

      - META_OPTIONS：实例元数据。
      - DDH_CLUSTER：专有宿主机集群。
      - NETWORK_PRIMARY_ENI_IP ：主网卡辅助IP。 */
      AdditionalAttributes?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 由Instances组成的数组格式，返回实例的信息。 */
      Instances?: Array<{
        /** 按量付费实例的自动释放时间。 */
        AutoReleaseTime?: string;
        /** 实例所在的集群ID。

        >该参数即将被弃用，为提高兼容性，请尽量使用其他参数。 */
        ClusterId?: string;
        /** vCPU数。 */
        Cpu?: number;
        /** CPU配置详情。 */
        CpuOptions?: {
          /** 物理CPU核心数。 */
          CoreCount?: number;
          /** 分配的线程数。可能值：2。 */
          Numa?: string;
          /** CPU线程数。 */
          ThreadsPerCore?: number };
        /** 实例创建时间。以ISO 8601为标准，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mmZ。更多信息，请参见[ISO 8601](https://help.aliyun.com/document_detail/25696.html)。 */
        CreationTime?: string;
        /** 突发性能实例的运行模式。可能值：

        - Standard：标准模式。有关实例性能的更多信息，请参见[什么是突发性能实例](https://help.aliyun.com/document_detail/59977.html)中的性能约束模式章节。
        - Unlimited：无性能约束模式，有关实例性能的更多信息，请参见[什么是突发性能实例](https://help.aliyun.com/document_detail/59977.html)中的无性能约束模式章节。 */
        CreditSpecification?: string;
        /** 由专有宿主机集群ID（DedicatedHostClusterId）、专有宿主机ID（DedicatedHostId）和名称（DedicatedHostName）组成的宿主机属性数组。 */
        DedicatedHostAttribute?: {
          /** 专有宿主机集群ID。 */
          DedicatedHostClusterId?: string;
          /** 专有宿主机ID。 */
          DedicatedHostId?: string;
          /** 专有宿主机名称。 */
          DedicatedHostName?: string };
        /** 专有宿主机实例的属性。 */
        DedicatedInstanceAttribute?: {
          /** 专有宿主机实例是否与专有宿主机关联。可能值：

          - default：专有宿主机实例不与专有宿主机关联。停机不收费实例重启后，可能会放置在自动资源部署池中的其它专有宿主机上。

          - host：专有宿主机实例与专有宿主机关联。停机不收费实例重启后，仍放置在原专有宿主机上。 */
          Affinity?: string;
          /** 实例的宿主机类型是否为专有宿主机。可能值：

          - default：实例的宿主机类型不是专有宿主机。

          - host：实例的宿主机类型为专有宿主机。 */
          Tenancy?: string };
        /** 实例释放保护属性，指定是否支持通过控制台或API（DeleteInstance）释放实例。

        - true：已开启实例释放保护。
        - false：未开启实例释放保护。

        > 该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。 */
        DeletionProtection?: boolean;
        /** ECS实例绑定部署集分散部署时，实例在部署集中的分组位置。 */
        DeploymentSetGroupNo?: number;
        /** 部署集ID。 */
        DeploymentSetId?: string;
        /** 实例描述。 */
        Description?: string;
        /** 实例是否可以挂载数据盘。

        - true：可以挂载数据盘。
        - false：不可以挂载数据盘。 */
        DeviceAvailable?: boolean;
        /** 云服务器ECS的容量预留相关参数。 */
        EcsCapacityReservationAttr?: {
          /** 容量预留ID。 */
          CapacityReservationId?: string;
          /** 容量预留偏好。 */
          CapacityReservationPreference?: string };
        /** 弹性公网IP绑定信息。 */
        EipAddress?: {
          /** 弹性公网IP的ID。 */
          AllocationId?: string;
          /** 弹性公网IP的公网带宽限速，单位为Mbit/s。 */
          Bandwidth?: number;
          /** 弹性公网IP的计费方式。

          - PayByBandwidth：按带宽计费。

          - PayByTraffic：按流量计费。 */
          InternetChargeType?: string;
          /** 弹性公网IP。 */
          IpAddress?: string;
          /** 是否可以解绑弹性公网IP。 */
          IsSupportUnassociate?: boolean };
        /** 过期时间。以ISO 8601为标准，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mmZ。更多信息，请参见[ISO 8601](https://help.aliyun.com/document_detail/25696.html)。 */
        ExpiredTime?: string;
        /** 实例规格附带的GPU数量。 */
        GPUAmount?: number;
        /** 实例规格附带的GPU类型。 */
        GPUSpec?: string;
        /** > 该参数正在邀测中，暂未开放使用。 */
        HibernationOptions?: {
          /** > 该参数正在邀测中，暂未开放使用。 */
          Configured?: boolean };
        /** 实例主机名。 */
        HostName?: string;
        /** 实例所属的HPC集群ID。 */
        HpcClusterId?: string;
        /** > 该参数正在邀测中，暂未开放使用。 */
        ISP?: string;
        /** 实例运行的镜像ID。 */
        ImageId?: string;
        /** 镜像相关属性信息。 */
        ImageOptions?: {
          /** 使用该镜像的实例是否支持使用ecs-user用户登录。可能值：

          - true：是。

          - false：否。 */
          LoginAsNonRoot?: boolean };
        /** 经典网络类型实例的内网IP地址列表。 */
        InnerIpAddress?: Array<string>;
        /** 实例的计费方式。可能值：

        - PrePaid：包年包月。
        - PostPaid：按量付费。 */
        InstanceChargeType?: string;
        /** 实例ID。 */
        InstanceId?: string;
        /** 实例名称。 */
        InstanceName?: string;
        /** 实例网络类型。可能值：

        - classic：经典网络。
        - vpc：专有网络VPC。 */
        InstanceNetworkType?: string;
        /** 实例规格。 */
        InstanceType?: string;
        /** 实例规格族。 */
        InstanceTypeFamily?: string;
        /** 网络计费类型。可能值：

        - PayByBandwidth：按固定带宽计费。
        - PayByTraffic：按使用流量计费。 */
        InternetChargeType?: string;
        /** 公网入带宽最大值，单位：Mbit/s。 */
        InternetMaxBandwidthIn?: number;
        /** 公网出带宽最大值，单位：Mbit/s。 */
        InternetMaxBandwidthOut?: number;
        /** 是否为I/O优化型实例。

        - true：是。
        - false：否。 */
        IoOptimized?: boolean;
        /** 密钥对名称。 */
        KeyPairName?: string;
        /** 实例挂载的本地存储数量。 */
        LocalStorageAmount?: number;
        /** 实例挂载的本地存储容量。单位：GiB。 */
        LocalStorageCapacity?: number;
        /** 内存大小，单位为MiB。 */
        Memory?: number;
        /** 元数据选项集合。 */
        MetadataOptions?: {
          /** 是否启用实例元数据的访问通道。可能值：
          - enabled：启用。
          - disabled：禁用。 */
          HttpEndpoint?: string;
          /** > 该参数暂未开放使用。 */
          HttpPutResponseHopLimit?: number;
          /** 访问实例元数据时是否强制使用加固模式（IMDSv2）。可能值：

          - optional：不强制使用。
          - required：强制使用。 */
          HttpTokens?: string };
        /** 实例包含的弹性网卡集合。 */
        NetworkInterfaces?: Array<{
          /** 弹性网卡已分配的IPv4前缀集合。仅当请求参数`AdditionalAttributes.N`取值为`NETWORK_PRIMARY_ENI_IP`时，才会返回该参数值。 */
          Ipv4PrefixSets?: Array<{
            /** 弹性网卡已分配的IPv4前缀。 */
            Ipv4Prefix?: string }>;
          /** 弹性网卡已分配的IPv6前缀集合。仅当请求参数`AdditionalAttributes.N`取值为`NETWORK_PRIMARY_ENI_IP`时，才会返回该参数值。 */
          Ipv6PrefixSets?: Array<{
            /** 弹性网卡已分配的IPv6前缀。 */
            Ipv6Prefix?: string }>;
          /** 弹性网卡已分配的IPv6地址集合。仅当请求参数`AdditionalAttributes.N`取值为`NETWORK_PRIMARY_ENI_IP`时，才会返回该参数值。 */
          Ipv6Sets?: Array<{
            /** 弹性网卡已分配的IPv6地址。 */
            Ipv6Address?: string }>;
          /** 弹性网卡的MAC地址。 */
          MacAddress?: string;
          /** 弹性网卡的ID。 */
          NetworkInterfaceId?: string;
          /** 弹性网卡主私有IP地址。 */
          PrimaryIpAddress?: string;
          /** PrivateIpSet组成的集合。 */
          PrivateIpSets?: Array<{
            /** 是否是主私网IP地址。

            - true：是。
            - false：否。 */
            Primary?: boolean;
            /** 实例的私网IP地址。 */
            PrivateIpAddress?: string }>;
          /** 弹性网卡类型。可能值：
          - Primary：主网卡。
          - Secondary：辅助弹性网卡。 */
          Type?: string }>;
        /** 实例的操作系统名称。 */
        OSName?: string;
        /** 实例操作系统的英文名称。 */
        OSNameEn?: string;
        /** 实例的操作系统类型，分为Windows Server和Linux两种。可能值：

        - windows。
        - linux。 */
        OSType?: string;
        /** 实例的锁定原因。 */
        OperationLocks?: Array<{
          /** 实例被锁定的描述信息。 */
          LockMsg?: string;
          /** 锁定类型。可能值：

          - financial：因欠费被锁定。
          - security：因安全原因被锁定。
          - Recycling：抢占式实例的待释放锁定状态。
          - dedicatedhostfinancial：因为专有宿主机欠费导致ECS实例被锁定。
          - refunded：因退款被锁定。 */
          LockReason?: string }>;
        /** 实例公网IP地址列表。 */
        PublicIpAddress?: Array<string>;
        /** HPC实例的RDMA网络IP列表。 */
        RdmaIpAddress?: Array<string>;
        /** 实例是否可以回收。 */
        Recyclable?: boolean;
        /** 实例所属地域ID。 */
        RegionId?: string;
        /** 实例所属的企业资源组ID。 */
        ResourceGroupId?: string;
        /** > 该参数已弃用，不再返回有意义的数据。 */
        SaleCycle?: string;
        /** 实例所属安全组ID列表。 */
        SecurityGroupIds?: Array<string>;
        /** 实例序列号。 */
        SerialNumber?: string;
        /** 抢占式实例的保留时长，单位为小时。可能值：0~6。

        - 保留时长2~6正在邀测中，如需开通请提交工单。
        - 值为0，则为无保护期模式。

        >当SpotStrategy值为SpotWithPriceLimit或SpotAsPriceGo时返回该参数。 */
        SpotDuration?: number;
        /** 实例的每小时最高价格。支持最大3位小数，参数SpotStrategy=SpotWithPriceLimit时，该参数生效。 */
        SpotPriceLimit?: number;
        /** 按量实例的竞价策略。可能值：

        - NoSpot：正常按量付费实例。
        - SpotWithPriceLimit：设置上限价格的抢占式实例。
        - SpotAsPriceGo：系统自动出价，最高按量付费价格的抢占式实例。 */
        SpotStrategy?: string;
        /** 实例最近一次的启动时间。以ISO 8601为标准，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mmZ。更多信息，请参见[ISO 8601](https://help.aliyun.com/document_detail/25696.html)。 */
        StartTime?: string;
        /** 实例状态。 */
        Status?: string;
        /** 实例停机后是否继续收费。可能值：

        - KeepCharging：停机后继续收费，为您继续保留库存资源。
        - StopCharging：停机后不收费。停机后，我们释放实例对应的资源，例如vCPU、内存和公网IP等资源。重启是否成功依赖于当前地域中是否仍有资源库存。
        - Not-applicable：本实例不支持停机不收费功能。 */
        StoppedMode?: string;
        /** 实例的标签集合。 */
        Tags?: Array<{
          /** 实例的标签键。 */
          TagKey?: string;
          /** 实例的标签值。 */
          TagValue?: string }>;
        /** 实例的VLAN ID。

        >该参数即将被弃用，为提高兼容性，请尽量使用其他参数。 */
        VlanId?: string;
        /** 专有网络VPC属性。 */
        VpcAttributes?: {
          /** 云产品的IP，用于VPC云产品之间的网络互通。 */
          NatIpAddress?: string;
          /** 私有IP地址列表。 */
          PrivateIpAddress?: Array<string>;
          /** 虚拟交换机ID。 */
          VSwitchId?: string;
          /** 专有网络VPC ID。 */
          VpcId?: string };
        /** 实例所属可用区。 */
        ZoneId?: string }>;
      /** 本次调用返回的查询凭证值。 */
      NextToken?: string;
      /** 实例列表的页码。 */
      PageNumber?: number;
      /** 输入时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 查询到的实例总数。

      > 使用`MaxResults`和`NextToken`参数进行分页查询时，返回的`TotalCount`参数值无意义。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstancesFullStatus
   * ## 接口说明
   * 返回结果包括实例状态和待执行（Scheduled）状态的实例系统事件。
   * 
   * 如果指定一个时间段，则根据时间段筛选事件。
   * @summary: 调用DescribeInstancesFullStatus查询一台或多台ECS实例的全状态信息。全状态信息包括实例状态和实例系统事件状态，其中，实例状态为实例的生命周期状态，实例系统事件为维护事件的健康状态。
   */
  export namespace DescribeInstancesFullStatus {
    export type Params = {
      /** 实例所在地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 指定实例的生命周期状态。取值范围： 
      - Starting：启动中。
      - Running：运行中。
      - Stopped：已停止。 */
      Status?: string;
      /** 指定实例的健康状态。取值范围： 

      - OK：正常。
      - Impaired：服务损坏。 
      - Initializing：初始化中。 
      - InsufficientData：数据不足。 
      - NotApplicable：不适用。

      以上参数取值均区分大小写。 */
      HealthStatus?: string;
      /** 一个事件的类型。EventType参数只在未指定InstanceEventType.N参数时有效。取值范围： 

      - SystemMaintenance.Reboot：因系统维护实例重启。 
      - SystemFailure.Reboot：因系统错误实例重启。
      - InstanceFailure.Reboot：因实例错误实例重启。
      - InstanceExpiration.Stop：因包年包月期限到期，实例停止。
      - InstanceExpiration.Delete：因包年包月期限到期，实例释放。
      - AccountUnbalanced.Stop：因账号欠费，按量付费实例停止。
      - AccountUnbalanced.Delete：因账号欠费，按量付费实例释放。 */
      EventType?: string;
      /** 查询事件计划执行时间的开始时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
      'NotBefore.Start'?: string;
      /** 查询事件计划执行时间的结束时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
      'NotBefore.End'?: string;
      /** 查询事件发布时间的开始时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
      'EventPublishTime.Start'?: string;
      /** 查询事件发布时间的结束时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
      'EventPublishTime.End'?: string;
      /** 查询结果的页码。取值范围：正整数

      默认值：1。 */
      PageNumber?: number;
      /** 查询结果的分页大小。取值范围：1~100。

      默认值：10。 */
      PageSize?: number;
      /** 实例ID列表。可输入最大100个实例ID。 */
      InstanceId?: Array<string>;
      /** 事件ID列表。可输入最多100个事件ID。 */
      EventId?: Array<string>;
      /** 实例事件的类型列表。可输入最大30个实例事件的类型。 */
      InstanceEventType?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例全状态数组。

      > 当实例不存在时该数据为空。 */
      InstanceFullStatusSet?: Array<{
        /** 实例的健康状态。 */
        HealthStatus?: {
          /** 健康状态代码。 */
          Code?: number;
          /** 健康状态名称。 */
          Name?: string };
        /** 实例ID。 */
        InstanceId?: string;
        /** 当前状态为Scheduled或Inquiring的系统事件数组。 */
        ScheduledSystemEventSet?: Array<{
          /** 事件状态。 */
          EventCycleStatus?: {
            /** 事件状态代码。 */
            Code?: number;
            /** 事件状态名称。 */
            Name?: string };
          /** 实例事件ID。 */
          EventId?: string;
          /** 事件的发布时间，使用UTC+0时间。 */
          EventPublishTime?: string;
          /** 事件类型。 */
          EventType?: {
            /** 事件类型代码。 */
            Code?: number;
            /** 事件类型名称。 */
            Name?: string };
          /** 本地盘实例系统事件拓展属性。

          不同事件类型，返回值有所不同。

          当事件类型不在以下列表中时，该数据为空。

          - SystemMaintenance.StopAndRepair
          - SystemMaintenance.CleanInactiveDisks
          - SecurityPunish.Locked
          - SecurityPunish.WebsiteBanned
          - SystemUpgrade.Migrate
          - SystemMaintenance.RebootAndIsolateErrorDisk
          - SystemMaintenance.RebootAndReInitErrorDisk
          - SystemMaintenance.ReInitErrorDisk
          - SystemMaintenance.IsolateErrorDisk
           */
          ExtendedAttribute?: {
            /** 本地盘设备名。 */
            Device?: string;
            /** 本地盘磁盘ID。 */
            DiskId?: string;
            /** 已释放但需要清理的非活跃云盘或本地盘信息。 */
            InactiveDisks?: Array<{
              /** 云盘或本地盘的创建时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
              CreationTime?: string;
              /** 云盘或本地盘种类。可能值：
              - cloud：普通云盘
              - cloud_efficiency：高效云盘
              - cloud_ssd：SSD盘
              - cloud_essd：ESSD云盘
              - local_ssd_pro：I/O密集型本地盘
              - local_hdd_pro：吞吐密集型本地盘
              - ephemeral：（已停售）本地盘
              - ephemeral_ssd：（已停售）本地SSD盘 */
              DeviceCategory?: string;
              /** 云盘或本地盘大小，单位GiB。 */
              DeviceSize?: string;
              /** 云盘或本地盘类型。可能值：
              - system：系统盘
              - data：数据盘 */
              DeviceType?: string;
              /** 云盘或本地盘的释放时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
              ReleaseTime?: string }> };
          /** 影响级别。

          > 不在白名单的用户，该参数为空。 */
          ImpactLevel?: string;
          /** 事件的计划执行时间，使用UTC+0时间。 */
          NotBefore?: string;
          /** 系统事件的计划原因。

          > 当阿里云没有判断出异常原因时，该参数为空。 */
          Reason?: string }>;
        /** 实例生命周期状态。 */
        Status?: {
          /** 实例生命周期状态代码。 */
          Code?: number;
          /** 实例生命周期状态名称。 */
          Name?: string } }>;
      /** 页码。 */
      PageNumber?: number;
      /** 每页大小。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 总条数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInvocationResults
   * ## 接口说明
   * 
   * - 当您执行命令后，不代表命令一定成功执行，并且一定有预期的命令效果。您需要通过本接口查看实际的具体执行结果，以实际输出结果为准。
   * - 您可以查询最近4周的执行信息，执行信息的保留上限为10万条。
   * @summary: 调用DescribeInvocationResults查看一条或多条云助手命令的执行结果，即在ECS实例中的实际执行结果。
   */
  export namespace DescribeInvocationResults {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 命令执行的资源组ID。传入该参数后，需要在执行命令时指定ResourceGroupId，支持筛选出对应的命令执行结果。 */
      ResourceGroupId?: string;
      /** 命令执行ID。您可以通过接口[DescribeInvocations](https://help.aliyun.com/document_detail/64840.html)查询InvokeId。 */
      InvokeId?: string;
      /** 实例ID。 */
      InstanceId?: string;
      /** 命令ID。
       */
      CommandId?: string;
      /** 命令执行状态。取值范围：

      - Running：运行中。
          - 定时执行：未手动停止定时执行命令前，执行状态一直为进行中。
          - 单次执行：一旦有进行中的命令进程，总的执行状态就为进行中。
      - Finished：已完成。
          - 定时执行：命令进程不可能为执行完成。
          - 单次执行：所有实例全部完成执行。或者手动停止部分实例的命令进程，其余实例全部执行完成。
      - Failed：执行失败。
          - 定时执行：命令进程不可能为执行失败。
          - 单次执行：所有实例全部执行失败。
      - PartialFailed：部分执行失败。
          - 定时执行：命令进程不可能为部分失败。
          - 单次执行：部分实例有执行失败的命令进程，则总执行状态为部分失败。
      - Stopped：命令执行已停止。
      - Stopping：正在停止执行的命令。 */
      InvokeRecordStatus?: string;
      /** 是否返回命令定时执行的历史记录。取值范围：

       - true：表示返回命令定时执行的结果。当取值为true时，参数InvokeId的取值不能为空，且必须为定时执行（RepeatMode为Period）或系统每一次启动后执行（RepeatMode为EveryReboot）的命令执行ID。
       - false：表示不返回。

      默认值为false。 */
      IncludeHistory?: boolean;
      /** 设置返回数据中`CommandContent`字段和`Output`字段的编码方式，取值范围：
      - PlainText：返回原始命令内容和输出信息。
      - Base64：返回Base64编码后的命令内容和输出信息。

      默认值为Base64。 */
      ContentEncoding?: string;
      /** 当前页码。

      起始值为1。

      默认值为1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值为50。

      默认值为10。 */
      PageSize?: number;
      /** 标签列表 */
      Tag?: Array<{
        /** 命令执行的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。

        最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** 命令执行的标签值。N的取值范围为1~20。该值可以为空字符串。

        最多支持128个字符，不能包含`http://`或`https://`。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 命令执行结果的集合。 */
      Invocation?: {
        /** 命令执行结果集。 */
        InvocationResults?: Array<{
          /** 命令ID。 */
          CommandId?: string;
          /** 容器ID。 */
          ContainerId?: string;
          /** 容器名称。 */
          ContainerName?: string;
          /** `Output`字段中文字长度超出24 KB后，截断并丢弃的文字长度。 */
          Dropped?: number;
          /** 命令下发失败或执行失败原因的代码，可能值：
          - 空：命令执行正常。
          - InstanceNotExists：指定的实例不存在或已释放。
          - InstanceReleased：执行命令期间，该实例被释放。
          - InstanceNotRunning：命令执行时，该实例不在运行中。
          - CommandNotApplicable：命令不适用于指定的实例。
          - AccountNotExists：指定的账号不存在。
          - DirectoryNotExists：指定的目录不存在。
          - BadCronExpression：指定的执行时间表达式不合法。
          - ClientNotRunning：云助手Agent未运行。
          - ClientNotResponse：云助手Agent无响应。
          - ClientIsUpgrading：云助手Agent正在升级中。
          - ClientNeedUpgrade：云助手Agent需要升级。
          - DeliveryTimeout：发送命令超时。
          - ExecutionTimeout：命令执行超时。
          - ExecutionException：命令执行发生异常。
          - ExecutionInterrupted：命令执行被中断。
          - ExitCodeNonzero：命令执行结束，退出码非0。 */
          ErrorCode?: string;
          /** 命令的下发失败或执行失败原因的详情，可能值：
          - 空：命令执行正常。
          - the specified instance does not exists：指定的实例不存在或已释放。
          - the instance has released when create task：执行命令期间，该实例被释放。
          - the instance is not running when create task：命令执行时，该实例不在运行中。
          - the command is not applicable：命令不适用于指定的实例。
          - the specified account does not exists：指定的账号不存在。
          - the specified directory does not exists：指定的目录不存在。
          - the cron job expression is invalid：指定的执行时间表达式不合法。
          - the aliyun service is not running on the instance：云助手Agent未运行。
          - the aliyun service in the instance does not response：云助手Agent无响应。
          - the aliyun service in the instance is upgrading now：云助手Agent正在升级中。
          - the aliyun service in the instance need upgrade：云助手Agent需要升级。
          - the command delivery has been timeout：发送命令超时。
          - the command execution has been timeout：命令执行超时。
          - the command execution got an exception：命令执行发生异常。
          - the command execution has been interrupted：命令执行被中断。
          - the command execution exit code is not zero：命令执行结束，退出码非0。
          - the specified instance has been released：下发文件期间，该实例被释放。 */
          ErrorInfo?: string;
          /** 命令的退出码。

          - Linux实例为Shell命令的退出码。
          - Windows实例为Bat或者PowerShell命令的退出码。 */
          ExitCode?: number;
          /** 命令执行的完成时间。如果命令执行出现超时情况，命令执行的完成时间以`StartTime`延迟执行命令的超时时间`Timeout`为准。 */
          FinishedTime?: string;
          /** 实例ID。 */
          InstanceId?: string;
          /** 单台实例的命令进度状态，可能值：
          - Pending：系统正在校验或发送命令。
          - Invalid：指定命令类型或参数有误。
          - Aborted：向实例发送命令失败。实例必须在运行中，且命令可以1分钟内发送完成。
          - Running：命令正在实例上执行。
          - Success：
              - 单次执行的命令：命令执行完成，且退出码为0。
              - 定时执行的命令：上一次执行成功且退出码为0，且指定的执行时间已结束。
          - Failed：
              - 单次执行的命令：命令执行完成，且退出码非0。
              - 定时执行的命令：上一次执行成功且退出码非0，且指定的执行时间将中止。
          - Error：命令执行时发生异常无法继续。
          - Timeout：命令执行超时。
          - Cancelled：命令的执行动作已经取消，命令未曾启动。
          - Stopping：正在停止执行的命令。
          - Terminated：命令执行时被终止。
          - Scheduled：
              - 单次执行的命令：不适用，不会出现。
              - 定时执行的命令：等待执行。 */
          InvocationStatus?: string;
          /** 命令执行ID。 */
          InvokeId?: string;
          /** 命令执行状态。可能值：

          - Running：运行中。
              - 定时执行：未手动停止定时执行命令前，执行状态一直为进行中。
              - 单次执行：一旦有进行中的命令进程，总的执行状态就为进行中。
          - Finished：已完成。
              - 定时执行：命令进程不可能为执行完成。
              - 单次执行：所有实例全部完成执行。或者手动停止部分实例的命令进程，其余实例全部执行完成。
          - Failed：执行失败。
              - 定时执行：命令进程不可能为执行失败。
              - 单次执行：所有实例全部执行失败。
          - PartialFailed：部分执行失败。
              - 定时执行：命令进程不可能为部分失败。
              - 单次执行：部分实例有执行失败的命令进程，则总执行状态为部分失败。
          - Stopped：命令执行已停止。
          - Stopping：正在停止执行的命令。 */
          InvokeRecordStatus?: string;
          /** 命令执行后的输出信息。

          - 若ContentEncoding指定PlainText，返回原始输出信息。
          - 若ContentEncoding指定Base64，返回Base64编码后的输出信息。 */
          Output?: string;
          /** 命令在该实例上执行的次数。
          - 若执行方式为立即执行，则值为0或1。
          - 若执行方式为定时执行，则值为执行过多少次。 */
          Repeats?: number;
          /** 命令在实例中开始执行的时间。 */
          StartTime?: string;
          /** 若调用了`StopInvocation`以停止命令执行，表示调用的时间。 */
          StopTime?: string;
          /** 命令执行的标签信息。 */
          Tags?: Array<{
            /** 命令执行的标签键。 */
            TagKey?: string;
            /** 命令执行的标签值。 */
            TagValue?: string }>;
          /** 在ECS实例中执行命令的用户名称。 */
          Username?: string }>;
        /** 当前页码。 */
        PageNumber?: number;
        /** 分页查询时设置的每页行数。 */
        PageSize?: number;
        /** 命令总个数。 */
        TotalCount?: number };
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInvocations
   * ## 接口说明
   * 
   * - 当您执行命令后，不代表命令一定成功运行，并且一定有预期的命令效果。您需要通过接口返回值查看实际执行结果，以实际输出结果为准。
   * 
   * - 您可以查询最近4周的执行信息，执行信息的保留上限为10万条。
   * @summary: 调用DescribeInvocations查询云助手命令的执行列表和状态。
   */
  export namespace DescribeInvocations {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 命令执行的资源组ID。传入该参数后，需要在执行命令时指定ResourceGroupId，支持筛选出对应的命令执行结果。 */
      ResourceGroupId?: string;
      /** 命令执行ID。 */
      InvokeId?: string;
      /** 命令ID。您可以通过接口[DescribeCommands](https://help.aliyun.com/document_detail/64843.html)查询所有可用的CommandId。  */
      CommandId?: string;
      /** 命令名称。如果同时设置了`InstanceId`参数，则该参数不生效。 */
      CommandName?: string;
      /** 命令类型。取值范围：

      - RunBatScript：命令为在Windows实例中运行的Bat脚本。
      - RunPowerShellScript：命令为在Windows实例中运行的PowerShell脚本。
      - RunShellScript：命令为在Linux实例中运行的Shell脚本。 */
      CommandType?: string;
      /** 查询的命令是否在将来会自动执行。取值范围：

      - true：查询在调用`RunCommand`或`InvokeCommand`执行命令时，`RepeatMode`参数取值为`Period`、`NextRebootOnly`或者`EveryReboot`。
      - false：查询以下两种状态的命令。
          - 在调用`RunCommand`或`InvokeCommand`执行命令时，`RepeatMode`参数取值为`Once`。
          - 已被取消、被停止或者已完成执行的命令。

      默认值：false。 */
      Timed?: boolean;
      /** 命令执行的总执行状态。总执行状态取决于创建执行中的一台或多台实例的共同执行状态。取值范围： 
               
      - Running：
          - 定时执行：未手动停止定时执行命令前，执行状态一直为进行中。
          - 单次执行：一旦有进行中的命令进程，总的执行状态就为进行中。
      - Finished：
          - 定时执行：命令进程不可能为执行完成。
          - 单次执行：所有实例全部完成执行。或者手动停止部分实例的命令进程，其余实例全部执行完成。
      - Failed：
          - 定时执行：命令进程不可能为执行失败。
          - 单次执行：所有实例全部执行失败。
      - Stopped：停止命令。
      - Stopping：停止中。
      - PartialFailed：部分失败；如果同时设置了`InstanceId`参数，则不生效。 */
      InvokeStatus?: string;
      /** 实例ID。当您传入了该参数，将查询该实例所有的命令执行记录。 */
      InstanceId?: string;
      /** 设置返回数据中`CommandContent`字段和`Output`字段的编码方式。取值范围：

      - PlainText：返回原始命令内容和输出信息。
      - Base64：返回Base64编码后的命令内容和输出信息。

      默认值：Base64。 */
      ContentEncoding?: string;
      /** 是否在结果中返回命令运行的输出信息。

      - true：返回。此时，您至少指定参数`InvokeId`或`InstanceId`。
      - false：不返回。

      默认值：false。 */
      IncludeOutput?: boolean;
      /** 当前页码。

      起始值：1。

      默认值：1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值：50。

      默认值：10。 */
      PageSize?: number;
      /** 命令执行的方式。如果同时设置了`InstanceId`参数，则不生效。取值范围：

      - Once：立即执行命令。
      - Period：定时执行命令。
      - NextRebootOnly：当实例下一次启动时，自动执行命令。
      - EveryReboot：实例每一次启动都将自动执行命令。

      默认值为空，表示查询全部。 */
      RepeatMode?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 命令执行的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。

        最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。

         */
        Key?: string;
        /** 命令执行的标签值。N的取值范围为1~20。该值可以为空字符串。
        最多支持128个字符，不能包含`http://`或`https://`。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 命令执行记录组成的数组。  */
      Invocations?: Array<{
        /** 命令内容。

        - 若ContentEncoding指定PlainText，返回原始脚本内容。
        - 若ContentEncoding指定Base64，返回Base64编码后的脚本内容。 */
        CommandContent?: string;
        /** 命令描述。 */
        CommandDescription?: string;
        /** 命令ID。 */
        CommandId?: string;
        /** 命令名称。 */
        CommandName?: string;
        /** 命令类型。 */
        CommandType?: string;
        /** 容器ID。 */
        ContainerId?: string;
        /** 容器名称。 */
        ContainerName?: string;
        /** 任务的创建时间。 */
        CreationTime?: string;
        /** 定时执行命令的执行时间。 */
        Frequency?: string;
        /** 命令执行的总执行状态，总执行状态取决于本次调用的全部实例的共同执行状态，可能值：
        - Pending：系统正在校验或发送命令。存在至少一台实例的命令执行状态为Pending，则总执行状态为Pending。
        - Scheduled：定时执行的命令已发送，等待运行。存在至少一台实例的命令执行状态为Scheduled，则总执行状态为Scheduled。
        - Running：命令正在实例上运行。存在至少一台实例的命令执行状态为Running，则总执行状态为Running。
        - Success：各个实例上的命令执行状态均为Stopped或Success，且至少一个实例的命令执行状态是Success，则总执行状态为Success。
            - 立即运行的任务：命令执行完成，且退出码为0。
            - 定时运行的任务：最近一次执行成功且退出码为0，且指定的时间已全部完成。
        - Failed：各个实例上的命令执行状态均为Stopped或Failed，则总执行状态为Failed。实例上的命令执行状态一项或多项为以下状态时，返回值均为Failed状态：
            - 命令校验失败（Invalid）。
            - 命令发送失败（Aborted）。
            - 命令执行完成但退出码非0（Failed）。
            - 命令执行超时（Timeout）。
            - 命令执行异常（Error）。
        - Stopping：正在停止任务。存在至少一台实例的命令执行状态为Stopping，则总执行状态为Stopping。
        - Stopped：任务已停止。所有实例的命令执行状态是Stopped，则总执行状态为Stopped。实例上的命令执行状态为以下状态时，返回值均为Stopped状态：
            - 任务已取消（Cancelled）。
            - 任务已终止（Terminated）。
        - PartialFailed：部分实例执行成功且部分实例执行失败。各个实例的命令执行状态均为Success、Failed或Stopped，则总执行状态为PartialFailed。

        > 返回参数中的`InvokeStatus`与该参数意义相似，但建议您查看该返回值。
         */
        InvocationStatus?: string;
        /** 命令执行ID。 */
        InvokeId?: string;
        /** 执行目标实例集类型。  */
        InvokeInstances?: Array<{
          /** 命令执行的开始时间。 */
          CreationTime?: string;
          /** Output字段中文字长度超出24 KB后，截断丢弃的文字长度。 */
          Dropped?: number;
          /** 命令的下发失败或执行失败原因的代码，可能值：
          - 空：命令运行正常。
          - InstanceNotExists：指定的实例不存在或已释放。
          - InstanceReleased：执行命令期间，该实例被释放。
          - InstanceNotRunning：开始执行命令时，该实例不在运行中。
          - CommandNotApplicable：命令不适用于指定的实例。
          - AccountNotExists：指定的账号不存在。
          - DirectoryNotExists：指定的目录不存在。
          - BadCronExpression：指定的执行时间表达式不合法。 
          - ClientNotRunning：云助手Agent未运行。
          - ClientNotResponse：云助手Agent无响应。
          - ClientIsUpgrading：云助手Agent正在升级中。
          - ClientNeedUpgrade：云助手Agent需要升级。
          - DeliveryTimeout：发送命令超时。
          - ExecutionTimeout：命令执行超时。
          - ExecutionException：命令执行发生异常。
          - ExecutionInterrupted：命令执行任务中断。
          - ExitCodeNonzero：命令执行结束，退出码非0。 */
          ErrorCode?: string;
          /** 命令的下发失败或执行失败原因的详情，可能值：
          - 空：命令运行正常。
          - the specified instance does not exists：指定的实例不存在或已释放。
          - the instance has released when create task：执行命令期间，该实例被释放。
          - the instance is not running when create task：开始执行命令时，该实例不在运行中。
          - the command is not applicable：命令不适用于指定的实例。
          - the specified account does not exists：指定的账号不存在。
          - the specified directory does not exists：指定的目录不存在。
          - the cron job expression is invalid：指定的执行时间表达式不合法。
          - the aliyun service is not running on the instance：云助手Agent未运行。
          - the aliyun service in the instance does not response：云助手Agent无响应。
          - the aliyun service in the instance is upgrading now：云助手Agent正在升级中。
          - the aliyun service in the instance need upgrade：云助手Agent需要升级。
          - the command delivery has been timeout：发送命令超时。
          - the command execution has been timeout：命令执行超时。
          - the command execution got an exception：命令执行发生异常。
          - the command execution has been interrupted：命令执行任务中断。
          - the command execution exit code is not zero：命令执行结束，退出码非0。
          - the specified instance has been released：下发文件期间，该实例被释放。 */
          ErrorInfo?: string;
          /** 命令进程的退出代码。可能值：

          -  Linux实例为Shell进程的退出码。
          -  Windows实例为Bat或者PowerShell进程的退出码。 */
          ExitCode?: number;
          /** 命令进程的结束时间。 */
          FinishTime?: string;
          /** 实例ID。 */
          InstanceId?: string;
          /** 单台实例的命令进度状态。

          > 不推荐查看该返回值，推荐您查看`InvocationStatus`的返回值。 */
          InstanceInvokeStatus?: string;
          /** 单台实例的命令进度状态，可能值：
          - Pending：系统正在校验或发送命令。
          - Invalid：指定命令类型或参数有误。
          - Aborted：向实例发送命令失败。实例必须在运行中，且命令可以1分钟内发送完成。
          - Running：命令正在实例上运行。
          - Success：
              - 单次执行的命令：命令执行完成，且退出码为0。
              - 定时执行的命令：上一次运行成功且退出码为0，且指定的时间已结束。
          - Failed：
              -  单次执行的命令：命令执行完成，且退出码非0。
              -  定时执行的命令：上一次运行成功且退出码非0，且指定的时间将中止。
          - Error：命令执行时发生异常无法继续。
          - Timeout：命令执行超时。
          - Cancelled：命令的执行动作已经取消，命令未曾启动。
          - Stopping：正在停止任务。
          - Terminated：命令运行时被终止。
          - Scheduled：
              - 单次执行的命令：不适用，不会出现。
              - 定时执行的命令：等待运行。 */
          InvocationStatus?: string;
          /** 命令的输出信息。

          - 若ContentEncoding指定PlainText，返回原始输出信息。
          - 若ContentEncoding指定Base64，返回Base64编码后的输出信息。 */
          Output?: string;
          /** 命令在该实例上执行的次数。
          -  若执行方式为单次执行，则值为0或1。
          -  若执行方式为定时执行，则值为执行过多少次。 */
          Repeats?: number;
          /** 命令在实例中开始执行的时间。 */
          StartTime?: string;
          /** 若调用了`StopInvocation`以停止命令执行，表示调用的时间。 */
          StopTime?: string;
          /** 查询的命令是否在将来会自动执行。 */
          Timed?: boolean;
          /** 命令状态的更新时间。 */
          UpdateTime?: string }>;
        /** 命令总的执行状态。
        > 不推荐查看该返回值，推荐您查看`InvocationStatus`的返回值。 */
        InvokeStatus?: string;
        /** 命令中的自定义参数。 */
        Parameters?: string;
        /** 命令执行的方式。可能值：

        - Once：立即执行命令。
        - Period：定时执行命令。
        - NextRebootOnly：当实例下一次启动时，自动执行命令。
        - EveryReboot：实例每一次启动都将自动执行命令。 */
        RepeatMode?: string;
        /** 命令执行的标签信息。 */
        Tags?: Array<{
          /** 命令执行的标签键。 */
          TagKey?: string;
          /** 命令执行的标签值。 */
          TagValue?: string }>;
        /** 查询的命令是否在将来会自动执行。 */
        Timed?: boolean;
        /** 您创建的命令在ECS实例中执行时最大的超时时间，单位：秒。

        当因为某种原因无法运行您创建的命令时，会出现超时现象。超时后，会强制终止命令进程，即取消命令的PID。 */
        Timeout?: number;
        /** ECS实例中执行命令的用户名称。 */
        Username?: string;
        /** 命令执行路径。 */
        WorkingDir?: string }>;
      /** 查询结果的页码。 */
      PageNumber?: number;
      /** 每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 命令总个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeKeyPairs
   * 调用DescribeKeyPairs查询一个或多个密钥对。
   * @summary: 调用DescribeKeyPairs查询一个或多个密钥对。
   */
  export namespace DescribeKeyPairs {
    export type Params = {
      /** 密钥对所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 密钥对名称。支持正则表达式模糊搜索，使用*匹配子表达式，示例：

      - `*SshKey`：查询以SshKey结尾的密钥对名称，包括SshKey。
      - `SshKey*`：查询以SshKey开头的密钥对名称，包括SshKey。
      - `*SshKey*`：查询名称中间有SshKey的密钥对，包括SshKey。
      - `SshKey`：精确匹配SshKey。 */
      KeyPairName?: string;
      /** 密钥对的指纹。根据RFC4716定义的公钥指纹格式，采用MD5信息摘要算法。更多详情，请参见[RFC4716](https://tools.ietf.org/html/rfc4716)。  */
      KeyPairFingerPrint?: string;
      /** 密钥对列表的页码。起始值：1

      默认值：1  */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。最大值：50

      默认值：10  */
      PageSize?: number;
      /** 密钥对所在的企业资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。

      >不支持默认资源组过滤。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 密钥对的标签键。N的取值范围：1~20

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。 */
        Key?: string;
        /** 密钥对的标签值。N的取值范围：1~20 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 密钥对信息集合。 */
      KeyPairs?: Array<{
        /** 密钥对的创建时间。 */
        CreationTime?: string;
        /** 密钥对的指纹。 */
        KeyPairFingerPrint?: string;
        /** 密钥对的名称。 */
        KeyPairName?: string;
        /** 资源组ID。 */
        ResourceGroupId?: string;
        /** 密钥对的标签。 */
        Tags?: Array<{
          /** 密钥对的标签键。 */
          TagKey?: string;
          /** 密钥对的标签值。 */
          TagValue?: string }> }>;
      /** 当前页码。 */
      PageNumber?: number;
      /** 每页行数。 */
      PageSize?: number;
      /** 请求ID。  */
      RequestId?: string;
      /** 密钥对的总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeLaunchTemplateVersions
   * 调用DescribeLaunchTemplateVersions查询ECS实例启动模板版本。
   * @summary: 调用DescribeLaunchTemplateVersions查询ECS实例启动模板版本。
   */
  export namespace DescribeLaunchTemplateVersions {
    export type Params = {
      /** 实例启动模板所属的地域ID。

      您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 一个或多个实例启动模板版本。 */
      LaunchTemplateVersion?: Array<number>;
      /** 实例启动模板ID。

      您必须指定LaunchTemplateId或LaunchTemplateName以确定模板。  */
      LaunchTemplateId?: string;
      /** 实例启动模板名称。 */
      LaunchTemplateName?: string;
      /** 通过范围指定版本时的最小版本号。 */
      MinVersion?: number;
      /** 通过范围指定版本时的最大版本号。 */
      MaxVersion?: number;
      /** 是否查询默认版本。 */
      DefaultVersion?: boolean;
      /** 是否查询模板配置详细信息。取值范围：

      - true：查询模版配置详细信息，在模版基本信息的基础上，还会返回模版配置细节，如镜像ID、系统盘大小等。

      - false：只查询模版基本信息，如模版ID、模版名称、默认版本等。

      默认值：true。 */
      DetailFlag?: boolean;
      /** 实例启动模板列表的页码。

      起始值：1。 

      默认值：1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。 

      默认值：10。 */
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 关于模板版本的信息。 */
      LaunchTemplateVersionSets?: Array<{
        /** 模板创建时间。 */
        CreateTime?: string;
        /** 模板的创建者。 */
        CreatedBy?: string;
        /** 模板是否为默认版本。 */
        DefaultVersion?: boolean;
        /** 模板具体配置。 */
        LaunchTemplateData?: {
          /** 自动释放时间。 */
          AutoReleaseTime?: string;
          /** 突发性能实例的运行模式。可能值：

          - Standard：标准模式，实例性能请参见[什么是突发性能实例](https://help.aliyun.com/document_detail/59977.html)下的性能约束模式章节。
          - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](https://help.aliyun.com/document_detail/59977.html)下的无性能约束模式章节。 */
          CreditSpecification?: string;
          /** 数据盘集合。 */
          DataDisks?: Array<{
            /** 自动快照策略ID。 */
            AutoSnapshotPolicyId?: string;
            /** 是否开启Burst（性能突发）。取值范围：

            - true：是。
            - false：否。 */
            BurstingEnabled?: boolean;
            /** 数据盘的云盘种类。 */
            Category?: string;
            /** 数据盘是否随实例释放而释放。 */
            DeleteWithInstance?: boolean;
            /** 数据盘描述。 */
            Description?: string;
            /** 数据盘的设备名。

            > 该参数即将停止使用，为提高代码兼容性，建议您尽量不要使用该参数。 */
            Device?: string;
            /** 数据盘名称。 */
            DiskName?: string;
            /** 数据盘是否加密。 */
            Encrypted?: string;
            /** 创建ESSD云盘作为数据盘使用时，设置云盘的性能等级。当`Category=cloud_essd`时该参数有返回值。可能值：

            - PL0：单盘最高随机读写IOPS 1万。
            - PL1：单盘最高随机读写IOPS 5万。
            - PL2：单盘最高随机读写IOPS 10万。
            - PL3：单盘最高随机读写IOPS 100万。 */
            PerformanceLevel?: string;
            /** 是否修改ESSD AutoPL云盘预配置读写IOPS。取值范围：0~min{50000, 1000*容量-基准性能}。

            基准性能=min{1,800+50*容量, 50,000}

            > 当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)和[修改ESSD AutoPL云盘预配置信息](https://help.aliyun.com/document_detail/413275.html)。

             */
            ProvisionedIops?: number;
            /** 数据盘大小。 */
            Size?: number;
            /** 数据盘使用的快照ID。 */
            SnapshotId?: string }>;
          /** 实例释放保护属性，指定是否支持通过控制台或API（[DeleteInstance](https://help.aliyun.com/document_detail/25507.html)）释放实例。取值范围：
          - true：开启实例释放保护。

          - false：关闭实例释放保护。

          默认值：false。

          >该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。 */
          DeletionProtection?: boolean;
          /** 部署集ID。 */
          DeploymentSetId?: string;
          /** 实例描述。 */
          Description?: string;
          /** 是否启用实例操作系统配置。 */
          EnableVmOsConfig?: boolean;
          /** 实例主机名。 */
          HostName?: string;
          /** 实例使用的镜像ID。 */
          ImageId?: string;
          /** 镜像来源。可能值：

          - system：阿里云提供的公共镜像。
          - self：您创建的自定义镜像。
          - others：其他阿里云用户共享给您的镜像。
          - marketplace：云市场镜像。 */
          ImageOwnerAlias?: string;
          /** 实例计费类型。可能值：

          - PrePaid：包年包月。
          - PostPaid：按量付费。
           */
          InstanceChargeType?: string;
          /** 实例名称。 */
          InstanceName?: string;
          /** 实例规格。 */
          InstanceType?: string;
          /** 公网带宽计费方式。 */
          InternetChargeType?: string;
          /** 公网入带宽最大值。 */
          InternetMaxBandwidthIn?: number;
          /** 公网出带宽最大值。 */
          InternetMaxBandwidthOut?: number;
          /** 是否为I/O优化实例。 */
          IoOptimized?: string;
          /** 实例的IPv6地址数量。 */
          Ipv6AddressCount?: number;
          /** 密钥对名称。 */
          KeyPairName?: string;
          /** 辅助弹性网卡的属性集合。 */
          NetworkInterfaces?: Array<{
            /** 辅助弹性网卡描述信息。 */
            Description?: string;
            /** 实例的规格。 */
            InstanceType?: string;
            /** 辅助弹性网卡名称。 */
            NetworkInterfaceName?: string;
            /** 主网卡的通讯模式。参数取值范围：

            - Standard：使用TCP通讯模式。
            - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。 */
            NetworkInterfaceTrafficMode?: string;
            /** 辅助弹性网卡的主私有IP地址。 */
            PrimaryIpAddress?: string;
            /** 辅助弹性网卡所属的安全组ID。必须是同一个VPC下的安全组。

            > SecurityGroupId和SecurityGroupIds不会同时返回值。 */
            SecurityGroupId?: string;
            /** 辅助弹性网卡加入的一个或多个安全组。

            > SecurityGroupId和SecurityGroupIds不会同时返回值。 */
            SecurityGroupIds?: Array<string>;
            /** 弹性网卡所属的虚拟交换机ID。 */
            VSwitchId?: string }>;
          /** 网络类型。可能值：

          - classic：经典网络。
          - vpc：专有网络VPC。 */
          NetworkType?: string;
          /** 是否继承原镜像里设置的用户名密码。 */
          PasswordInherit?: boolean;
          /** 购买资源的时长。 */
          Period?: number;
          /** 实例私网IP地址。 */
          PrivateIpAddress?: string;
          /** 实例RAM角色名称。 */
          RamRoleName?: string;
          /** 启动模板所在的企业资源组ID。 */
          ResourceGroupId?: string;
          /** 是否开启安全加固。 */
          SecurityEnhancementStrategy?: string;
          /** 实例的安全组ID。

          > `SecurityGroupId`和`SecurityGroupIds`不会同时返回值。
           */
          SecurityGroupId?: string;
          /** 实例加入的一个或多个安全组。

          > `SecurityGroupId`和`SecurityGroupIds`不会同时返回值。 */
          SecurityGroupIds?: Array<string>;
          /** 抢占式实例的保留时长，单位为小时。可能值：0~6。

          您需要注意：

          - 保留时长2~6正在邀测中，如需开通请提交工单。
          - 取值为0，则为无保护期模式。 */
          SpotDuration?: number;
          /** 设置实例的每小时最高价格。 */
          SpotPriceLimit?: number;
          /** 按量付费实例的竞价策略。可能值：

          - NoSpot：正常按量付费实例。
          - SpotWithPriceLimit：设置上限价格的抢占式实例。
          - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。 */
          SpotStrategy?: string;
          'SystemDisk.AutoSnapshotPolicyId'?: string;
          'SystemDisk.BurstingEnabled'?: boolean;
          'SystemDisk.Category'?: string;
          'SystemDisk.DeleteWithInstance'?: boolean;
          'SystemDisk.Description'?: string;
          'SystemDisk.DiskName'?: string;
          'SystemDisk.Encrypted'?: string;
          'SystemDisk.Iops'?: number;
          'SystemDisk.PerformanceLevel'?: string;
          'SystemDisk.ProvisionedIops'?: number;
          'SystemDisk.Size'?: number;
          /** 实例的标签列表。 */
          Tags?: Array<{
            /** 实例的标签键。 */
            Key?: string;
            /** 实例的标签值。 */
            Value?: string }>;
          /** 实例自定义数据，以Base64方式编码。 */
          UserData?: string;
          /** 实例所属的虚拟交换机ID。 */
          VSwitchId?: string;
          /** 专有网络VPC ID。 */
          VpcId?: string;
          /** 可用区ID。 */
          ZoneId?: string };
        /** 模板ID。 */
        LaunchTemplateId?: string;
        /** 模板名称。 */
        LaunchTemplateName?: string;
        /** 模板修改时间。 */
        ModifiedTime?: string;
        /** 模板版本描述。 */
        VersionDescription?: string;
        /** 模板版本号。 */
        VersionNumber?: number }>;
      /** 当前页码。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 实例启动模板总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeLaunchTemplates
   * 调用DescribeLaunchTemplates查询一个或多个可用的实例启动模板。
   * @summary: 调用DescribeLaunchTemplates查询一个或多个可用的实例启动模板。
   */
  export namespace DescribeLaunchTemplates {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 启动模板的标签列表。 */
      TemplateTag?: Array<{
        /** 启动模板的标签键。N的取值范围：1~20。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。 */
        Key?: string;
        /** 启动模板的标签值。N的取值范围：1~20。 */
        Value?: string }>;
      /** 实例启动模板列表的页码。起始值：1。

      默认值：1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      默认值：10。 */
      PageSize?: number;
      /** 启动模板所在的企业资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。

      >不支持默认资源组过滤。 */
      TemplateResourceGroupId?: string;
      /** 一个或多个实例启动模板ID，最多支持查询100个启动模板。您必须指定LaunchTemplateId或LaunchTemplateName以确定模板。 */
      LaunchTemplateId?: Array<string>;
      /** 一个或多个实例启动模板名称，最多支持查询100个启动模板。 */
      LaunchTemplateName?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例启动模板的信息集合。 */
      LaunchTemplateSets?: Array<{
        /** 实例启动模板创建时间。 */
        CreateTime?: string;
        /** 模板的创建者。 */
        CreatedBy?: string;
        /** 模板默认版本号。 */
        DefaultVersionNumber?: number;
        /** 模板最新版本号。 */
        LatestVersionNumber?: number;
        /** 模板ID。 */
        LaunchTemplateId?: string;
        /** 模板名称。 */
        LaunchTemplateName?: string;
        /** 修改时间。 */
        ModifiedTime?: string;
        /** 启动模板所在的企业资源组ID。 */
        ResourceGroupId?: string;
        /** 启动模板的标签对属性。 */
        Tags?: Array<{
          /** 启动模板的标签键。 */
          TagKey?: string;
          /** 启动模板的标签值。 */
          TagValue?: string }> }>;
      /** 当前页码。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 实例启动模板总个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeLimitation
   * undefined
   * @deprecated
   */
  export namespace DescribeLimitation {
    export type Params = {
      Limitation: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      Limitation?: string;
      RequestId?: string;
      Value?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeManagedInstances
   * 调用DescribeManagedInstances查询托管实例列表。
   * @summary: 调用DescribeManagedInstances查询托管实例列表。
   */
  export namespace DescribeManagedInstances {
    export type Params = {
      /** 地域ID。目前支持的地域：华北1（青岛）、华北2（北京）、华北3（张家口）、华北5（呼和浩特）、华北6（乌兰察布）、华东1（杭州）、华东2（上海）、华南1（深圳）、华南2（河源）、华南3（广州）、西南1（成都）、中国香港、新加坡、日本（东京）、美国（硅谷）、美国（弗吉尼亚）。

      您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看地域对应的ID等信息。 */
      RegionId: string;
      /** 托管实例的操作系统类型，取值范围：

      - windows。
      - linux。
      - FreeBSD。
       */
      OsType?: string;
      /** 托管实例的内网IP或公网IP。 */
      InstanceIp?: string;
      /** 激活码ID。 */
      ActivationId?: string;
      /** 托管实例的名称。 */
      InstanceName?: string;
      /** 托管实例列表的页码。

      起始值为1。

      默认值为1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值为50。

      默认值为10。 */
      PageSize?: number;
      /** 托管实例的ID。N的取值范围为1~50。 */
      InstanceId?: Array<string>;
      /** 标签列表。 */
      Tag?: Array<{
        /** 托管实例的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个。使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。

        最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** 托管实例的标签值。N的取值范围为1~20。该值可以为空字符串。

        最多支持128个字符，不能包含`http://`或`https://`。 */
        Value?: string }>;
      /** 托管实例所属的资源组ID。 */
      ResourceGroupId?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 托管实例列表。 */
      Instances?: Array<{
        /** 激活码ID。 */
        ActivationId?: string;
        /** 云助手Agent的版本号。 */
        AgentVersion?: string;
        /** 托管实例是否已连接。

        - true：托管实例已连接，您可以通过云助手管理托管实例。

        - false：托管实例未连接，服务器可能停机或者云助手Agent未正确安装。 */
        Connected?: boolean;
        /** 托管实例主机名。 */
        Hostname?: string;
        /** 托管实例ID。 */
        InstanceId?: string;
        /** 托管实例名称。 */
        InstanceName?: string;
        /** 托管实例的公网IP。 */
        InternetIp?: string;
        /** 托管实例的内网IP。 */
        IntranetIp?: string;
        /** 托管实例执行云助手任务的次数。 */
        InvocationCount?: number;
        /** 最后一次执行云助手任务的时间。 */
        LastInvokedTime?: string;
        /** 托管实例的机器码。 */
        MachineId?: string;
        /** 托管实例的操作系统。 */
        OsType?: string;
        /** 操作系统的版本信息。 */
        OsVersion?: string;
        /** 托管实例的注册时间。 */
        RegistrationTime?: string;
        /** 托管实例所属的资源组ID。 */
        ResourceGroupId?: string;
        /** 标签列表。 */
        Tags?: Array<{
          /** 托管实例的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。

          使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个。使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。

          最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
          TagKey?: string;
          /** 托管实例的标签值。N的取值范围为1~20。该值可以为空字符串。

          最多支持128个字符，不能包含`http://`或`https://`。 */
          TagValue?: string }> }>;
      /** 托管实例列表的页码。 */
      PageNumber?: number;
      /** 输入时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 查询到的托管实例总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeNatGateways
   * undefined
   * @deprecated
   */
  export namespace DescribeNatGateways {
    export type Params = {
      RegionId: string;
      NatGatewayId?: string;
      VpcId?: string;
      PageNumber?: number;
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      NatGateways?: Array<{
        BandwidthPackageIds?: Array<string>;
        BusinessStatus?: string;
        CreationTime?: string;
        Description?: string;
        ForwardTableIds?: Array<string>;
        InstanceChargeType?: string;
        Name?: string;
        NatGatewayId?: string;
        RegionId?: string;
        Spec?: string;
        Status?: string;
        VpcId?: string }>;
      PageNumber?: number;
      PageSize?: number;
      RequestId?: string;
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeNetworkInterfaceAttribute
   * 调用DescribeNetworkInterfaceAttribute查询指定网卡详细信息。
   * @summary: 调用DescribeNetworkInterfaceAttribute查询指定网卡详细信息。
   */
  export namespace DescribeNetworkInterfaceAttribute {
    export type Params = {
      /** 弹性网卡所在地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** > 该参数暂未开放使用。 */
      Tag?: Array<{
        /** > 该参数暂未开放使用。 */
        Key?: string;
        /** > 该参数暂未开放使用。 */
        Value?: string }>;
      /** 弹性网卡ID。 */
      NetworkInterfaceId: string;
      /** 弹性网卡属性。 */
      Attribute?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 弹性网卡辅助私有IP地址关联的弹性公网IP。 */
      AssociatedPublicIp?: {
        /** 弹性公网IP的ID。 */
        AllocationId?: string;
        /** 弹性公网IP地址。 */
        PublicIpAddress?: string };
      /** > 该参数正在邀测中，暂未开放使用。 */
      Attachment?: {
        /** >该参数正在邀测中，暂未开放使用。 */
        DeviceIndex?: number;
        /** >该参数正在邀测中，暂未开放使用。 */
        InstanceId?: string;
        /** > 该参数正在邀测中，暂未开放使用。 */
        MemberNetworkInterfaceIds?: Array<string>;
        /** 网卡挂载指定的物理网卡索引。
        - 如果网卡是未挂载（Available）状态或者挂载时未指定索引，则不返回此值。
        - 如果网卡是已挂载（InUse）状态且挂载时指定，此值表示网卡挂载指定的物理网卡索引。 */
        NetworkCardIndex?: number;
        /** > 该参数正在邀测中，暂未开放使用。 */
        TrunkNetworkInterfaceId?: string };
      /** >该参数正在邀测中，暂未开放使用。 */
      BondInterfaceSpecification?: {
        /** >该参数正在邀测中，暂未开放使用。 */
        BondMode?: string;
        /** >该参数正在邀测中，暂未开放使用。 */
        SlaveInterfaceSpecification?: Array<{
          /** >该参数正在邀测中，暂未开放使用。 */
          BondNetworkInterfaceId?: string;
          /** >该参数正在邀测中，暂未开放使用。 */
          SlaveNetworkInterfaceId?: string;
          /** >该参数正在邀测中，暂未开放使用。 */
          WorkState?: string }> };
      /** 弹性网卡的创建时间。 */
      CreationTime?: string;
      /** 释放实例时是否保留网卡。可能值：

      - true：不保留。

      - false：保留。 */
      DeleteOnRelease?: boolean;
      /** 弹性网卡描述。 */
      Description?: string;
      /** 弹性网卡附加的实例ID。

      > 由其他阿里云服务管理和控制的弹性网卡不会返回实例ID。
       */
      InstanceId?: string;
      /** 弹性网卡已分配的IPv4前缀集合。 */
      Ipv4PrefixSets?: Array<{
        /** 弹性网卡已分配的IPv4前缀。 */
        Ipv4Prefix?: string }>;
      /** 弹性网卡已分配的IPv6前缀集合。 */
      Ipv6PrefixSets?: Array<{
        /** 弹性网卡已分配的IPv6前缀。 */
        Ipv6Prefix?: string }>;
      /** 弹性网卡已分配的IPv6地址。 */
      Ipv6Sets?: Array<{
        /** 为弹性网卡指定的IPv6地址。 */
        Ipv6Address?: string }>;
      /** 弹性网卡的MAC地址。 */
      MacAddress?: string;
      /** 弹性网卡的ID。 */
      NetworkInterfaceId?: string;
      /** 弹性网卡名称。 */
      NetworkInterfaceName?: string;
      /** 弹性网卡的通讯模式。可能值：

      - Standard：使用TCP通讯模式。
      - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。

      > HighPerformance参数值只支持RDMA增强型实例规格族c7re，目前仅支持在华北2（北京）的可用区K设置该参数值。
       */
      NetworkInterfaceTrafficMode?: string;
      /** 弹性网卡的所属账号ID。 */
      OwnerId?: string;
      /** 弹性网卡的私网IP地址。 */
      PrivateIpAddress?: string;
      /** PrivateIpSet组成的集合。 */
      PrivateIpSets?: Array<{
        /** 弹性网卡辅助私有IP地址关联的弹性公网IP。 */
        AssociatedPublicIp?: {
          /** > 该参数正在邀测中，暂未开放使用。 */
          AllocationId?: string;
          /** 弹性公网IP地址。 */
          PublicIpAddress?: string };
        /** 是否是主私网IP地址。可能值：
        - true：主私网IP。
        - false：辅助私网IP。 */
        Primary?: boolean;
        /** 弹性网卡的私网IP地址。 */
        PrivateIpAddress?: string }>;
      /** 弹性网卡的队列数。
      * 弹性网卡为主网卡：返回实例规格默认的主网卡队列数。

      * 弹性网卡为辅助网卡：
          * 辅助网卡是已附加（InUse）状态：
              * 辅助网卡没有修改过队列数，则返回实例规格默认的辅助网卡队列数。
              * 辅助网卡修改过队列数，则返回修改后的队列数。
          * 辅助网卡是可用（Available）状态：
              * 辅助网卡未修改过队列数，则返回值为空。
              * 辅助网卡修改过队列数，则返回修改后的队列数。 */
      QueueNumber?: number;
      /** > 该参数正在邀测中，暂未开放使用。 */
      QueuePairNumber?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 实例所属的企业资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。

      >不支持默认资源组过滤。 */
      ResourceGroupId?: string;
      /** 弹性网卡所属的安全组集合。 */
      SecurityGroupIds?: Array<string>;
      /** 弹性网卡对应的虚商ID。 */
      ServiceID?: number;
      /** 该弹性网卡的使用者是否为云产品或虚商。 */
      ServiceManaged?: boolean;
      /** >该参数正在邀测中，暂未开放使用。 */
      SlaveInterfaceSpecification?: {
        /** >该参数正在邀测中，暂未开放使用。 */
        BondNetworkInterfaceId?: string;
        /** >该参数正在邀测中，暂未开放使用。 */
        SlaveNetworkInterfaceId?: string;
        /** >该参数正在邀测中，暂未开放使用。 */
        WorkState?: string };
      /** 弹性网卡的状态。可能值：

      * Available：可用。
      * Attaching：附加中。
      * InUse：已附加。
      * Detaching：分离中。
      * Deleting：删除中。

      默认值：空，表示查询所有状态。 */
      Status?: string;
      /** 弹性网卡的标签集合。 */
      Tags?: Array<{
        /** 标签键。 */
        TagKey?: string;
        /** 标签值。 */
        TagValue?: string }>;
      /** 弹性网卡类型。可能值：

      * Primary：主网卡。
      * Secondary：辅助弹性网卡。 */
      Type?: string;
      /** 弹性网卡所属的交换机ID。 */
      VSwitchId?: string;
      /** 弹性网卡所属的专有网络VPC ID。 */
      VpcId?: string;
      /** 可用区ID。 */
      ZoneId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeNetworkInterfacePermissions
   * 调用DescribeNetworkInterfacePermissions查询您授权给阿里云合作伙伴（认证ISV）或者个人用户的弹性网卡权限列表。
   * @summary: 调用DescribeNetworkInterfacePermissions查询您授权给阿里云合作伙伴（认证ISV）或者个人用户的弹性网卡权限列表。
   */
  export namespace DescribeNetworkInterfacePermissions {
    export type Params = {
      /** 弹性网卡权限的地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 弹性网卡ID。您必须指定`NetworkInterfaceId`或`NetworkInterfacePermissionId.N`确定查询范围。 */
      NetworkInterfaceId?: string;
      /** 弹性网卡权限列表的页码。

      起始值：1

      默认值：1 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值：100

      默认值：10 */
      PageSize?: number;
      /** 弹性网卡权限ID列表。列表元素数量：1~100。 */
      NetworkInterfacePermissionId?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 弹性网卡权限列表组成的信息集合。 */
      NetworkInterfacePermissions?: Array<{
        /** 阿里云合作伙伴（认证ISV）账号ID或个人用户ID。 */
        AccountId?: number;
        /** 弹性网卡ID。 */
        NetworkInterfaceId?: string;
        /** 弹性网卡权限ID。 */
        NetworkInterfacePermissionId?: string;
        /** 弹性网卡权限。 */
        Permission?: string;
        /** 弹性网卡权限状态。可能值：

        - Pending：授权中
        - Granted：已授权
        - Revoking：撤销授权中
        - Revoked：已撤销授权 */
        PermissionState?: string;
        /** 阿里云服务名称。 */
        ServiceName?: string }>;
      /** 列表的页码。 */
      PageNumber?: number;
      /** 分页查询时的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 查询到的条目总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeNetworkInterfaces
   * ## 接口说明
   * 
   * `DescribeNetworkInterfaces`接口支持分页查询。具体使用说明：分页查询首页时，仅需设置`MaxResults`以限制返回信息的条目数，返回结果中的`NextToken`将作为查询后续页的凭证。查询后续页时，将`NextToken`参数设置为上一次返回结果中获取到的`NextToken`作为查询凭证，并设置`MaxResults`限制返回条目数。
   * 
   * > 当指定`MaxResults`或`NextToken`参数时，系统会使用上述的分页查询方式返回结果，否则系统会使用`PageNumber`和`PageSize`组成的分页查询方式返回结果。
   * @summary: 调用DescribeNetworkInterfaces查询一个或多个弹性网卡（ENI）的详细信息。
   */
  export namespace DescribeNetworkInterfaces {
    export type Params = {
      /** 所在地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 标签列表 */
      Tag?: Array<{
        /** 弹性网卡的标签键。N的取值范围：1~20 */
        Key?: string;
        /** 弹性网卡的标签值。N的取值范围：1~20

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。 */
        Value?: string }>;
      /** 资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。

      >不支持默认资源组过滤。 */
      ResourceGroupId?: string;
      /** 弹性网卡所属的交换机ID。 */
      VSwitchId?: string;
      /** 弹性网卡所属的专有网络VPC ID。 */
      VpcId?: string;
      /** 弹性网卡主私网IPv4地址。 */
      PrimaryIpAddress?: string;
      /** 辅助网卡对应的安全组ID。

      - 如果您需要通过安全组ID查询辅助网卡的信息，请指定该参数。
      - 如果您需要通过安全组ID查询主网卡信息，请调用[DescribeInstances](https://help.aliyun.com/document_detail/25506.html)指定`SecurityGroupId`参数进行查询。 */
      SecurityGroupId?: string;
      /** 弹性网卡的名称。 */
      NetworkInterfaceName?: string;
      /** 弹性网卡类型。取值范围：

      - Primary：主网卡。
      - Secondary：辅助网卡。

      默认值：空，表示查询所有类型。 */
      Type?: string;
      /** 弹性网卡当前附加的实例ID。 */
      InstanceId?: string;
      /** 该弹性网卡的使用者是否为云产品或虚商。 */
      ServiceManaged?: boolean;
      /** 弹性网卡的状态。取值范围：

      * Available：可用。
      * Attaching：附加中。
      * InUse：已附加。
      * Detaching：分离中。
      * Deleting：删除中。

      默认值：空，表示查询所有状态。 */
      Status?: string;
      /** 查询结果的页码。

      起始值：1。

      默认值：1。

      > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。 */
      PageNumber?: number;
      /** 查询结果的分页大小。

      最大值：1000。

      默认值：10。

      > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。 */
      PageSize?: number;
      /** 查询凭证（Token），取值为上一次API调用返回的`NextToken`参数值。

      有关本接口查看返回数据的设置方式，请参见上文接口说明。 */
      NextToken?: string;
      /** 分页查询时每页的最大条目数。取值范围：10~500。

      默认值：

      - 当不设置值或设置的值小于10时，默认值为10。
      - 当设置的值大于500时，默认值为500。 */
      MaxResults?: number;
      /** 弹性网卡的辅助私网IPv4地址。N的取值范围：1~100。 */
      PrivateIpAddress?: Array<string>;
      /** 弹性网卡ID。N的取值范围：1~100。 */
      NetworkInterfaceId?: Array<string>;
      /** 弹性网卡的IPv6地址。N表示可以设置多个IPv6地址，N的取值范围：1~100。 */
      Ipv6Address?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 弹性网卡信息组成的集合。 */
      NetworkInterfaceSets?: Array<{
        /** 弹性网卡辅助私有IP地址关联的弹性公网IP。 */
        AssociatedPublicIp?: {
          /** > 该参数正在邀测中，暂未开放使用。 */
          AllocationId?: string;
          /** 弹性公网IP地址。 */
          PublicIpAddress?: string };
        /** > 该参数正在邀测中，暂未开放使用。 */
        Attachment?: {
          /** > 该参数正在邀测中，暂未开放使用。 */
          DeviceIndex?: number;
          /** > 该参数正在邀测中，暂未开放使用。 */
          InstanceId?: string;
          /** 网卡挂载指定的物理网卡索引。
          - 如果网卡是未挂载（Available）状态或者挂载时未指定索引，则不返回此值。
          - 如果网卡是已挂载（InUse）状态且挂载时指定，此值表示网卡挂载指定的物理网卡索引。 */
          NetworkCardIndex?: number;
          /** > 该参数正在邀测中，暂未开放使用。 */
          TrunkNetworkInterfaceId?: string };
        /** 创建时间。 */
        CreationTime?: string;
        /** 释放实例时是否保留网卡。可能值：

        - true：不保留。

        - false：保留。 */
        DeleteOnRelease?: boolean;
        /** 描述。 */
        Description?: string;
        /** 弹性网卡附加的实例ID。

        > 由其他阿里云服务管理和控制的弹性网卡不会返回实例ID。 */
        InstanceId?: string;
        /** 弹性网卡已分配的IPv4前缀集合。 */
        Ipv4PrefixSets?: Array<{
          /** 弹性网卡已分配的IPv4前缀。 */
          Ipv4Prefix?: string }>;
        /** 弹性网卡已分配的IPv6前缀集合。 */
        Ipv6PrefixSets?: Array<{
          /** 弹性网卡已分配的IPv6前缀。 */
          Ipv6Prefix?: string }>;
        /** 弹性网卡已分配的IPv6地址集合。 */
        Ipv6Sets?: Array<{
          /** 弹性网卡已分配的IPv6地址。 */
          Ipv6Address?: string }>;
        /** 弹性网卡的MAC地址。 */
        MacAddress?: string;
        /** 弹性网卡ID。 */
        NetworkInterfaceId?: string;
        /** 弹性网卡的名称。 */
        NetworkInterfaceName?: string;
        /** 弹性网卡的通讯模式。可能值：

        - Standard：使用TCP通讯模式。
        - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
        > HighPerformance参数值只支持RDMA增强型实例规格族c7re，目前仅支持在华北2（北京）的可用区K设置该参数值。 */
        NetworkInterfaceTrafficMode?: string;
        /** 弹性网卡的所属账号ID。 */
        OwnerId?: string;
        /** 弹性网卡的私网IP地址。 */
        PrivateIpAddress?: string;
        /** PrivateIpSet组成的集合。 */
        PrivateIpSets?: Array<{
          /** 弹性网卡关联的弹性公网IP。 */
          AssociatedPublicIp?: {
            /** > 该参数正在邀测中，暂未开放使用。 */
            AllocationId?: string;
            /** 弹性公网IP地址。 */
            PublicIpAddress?: string };
          /** 是否是主私网IP地址。可能值：
          - true：主私网IP
          - false：辅助私网IP */
          Primary?: boolean;
          /** 实例的私网IP地址。 */
          PrivateIpAddress?: string }>;
        /** 弹性网卡的队列数。

        - 如果辅助网卡是已挂载（InUse）状态且没有修改过队列数，则返回实例规格默认的辅助网卡队列数。
        - 如果辅助网卡修改过队列数，则返回修改后的队列数。
        - 如果辅助网卡是未挂载（Available）状态且未修改过队列数，则返回值为空。
        - 主网卡返回实例规格默认的主网卡队列数。 */
        QueueNumber?: number;
        /** > 该参数正在邀测中，暂未开放使用。 */
        QueuePairNumber?: number;
        /** 资源组ID。 */
        ResourceGroupId?: string;
        /** 所属的安全组集合。 */
        SecurityGroupIds?: Array<string>;
        /** 弹性网卡对应的虚商ID。 */
        ServiceID?: number;
        /** 该弹性网卡的使用者是否为云产品或虚商。 */
        ServiceManaged?: boolean;
        /** 弹性网卡的状态。 */
        Status?: string;
        /** 标签。 */
        Tags?: Array<{
          /** 标签键。 */
          TagKey?: string;
          /** 标签值。 */
          TagValue?: string }>;
        /** 弹性网卡的类型。 */
        Type?: string;
        /** VPC的交换机ID。 */
        VSwitchId?: string;
        /** 弹性网卡所属的专有网络VPC ID。 */
        VpcId?: string;
        /** 可用区ID。 */
        ZoneId?: string }>;
      /** 本次调用返回的查询凭证值。 */
      NextToken?: string;
      /** 分页查询参数。

      > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。 */
      PageNumber?: number;
      /** 分页查询参数。

      > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 返回的弹性网卡总数。
      > 使用`MaxResults`和`NextToken`参数进行分页查询时，返回的`TotalCount`参数值无意义。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeNewProjectEipMonitorData
   * undefined
   * @deprecated
   */
  export namespace DescribeNewProjectEipMonitorData {
    export type Params = {
      RegionId?: string;
      AllocationId: string;
      StartTime: string;
      EndTime: string;
      Period?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      EipMonitorDatas?: Array<{
        EipBandwidth?: number;
        EipFlow?: number;
        EipPackets?: number;
        EipRX?: number;
        EipTX?: number;
        TimeStamp?: string }>;
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribePhysicalConnections
   * undefined
   * @deprecated
   */
  export namespace DescribePhysicalConnections {
    export type Params = {
      RegionId: string;
      PageNumber?: number;
      PageSize?: number;
      ClientToken?: string;
      UserCidr?: string;
      Filter?: Array<{
        Key?: string;
        Value?: Array<string> }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      PageNumber?: number;
      PageSize?: number;
      PhysicalConnectionSet?: Array<{
        AccessPointId?: string;
        AdLocation?: string;
        Bandwidth?: number;
        BusinessStatus?: string;
        CircuitCode?: string;
        CreationTime?: string;
        Description?: string;
        EnabledTime?: string;
        LineOperator?: string;
        Name?: string;
        PeerLocation?: string;
        PhysicalConnectionId?: string;
        PortNumber?: string;
        PortType?: string;
        RedundantPhysicalConnectionId?: string;
        Spec?: string;
        Status?: string;
        Type?: string }>;
      RequestId?: string;
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribePrefixListAssociations
   * 调用DescribePrefixListAssociations查询指定前缀列表已关联的资源信息。
   * @summary: 调用DescribePrefixListAssociations查询指定前缀列表已关联的资源信息。
   */
  export namespace DescribePrefixListAssociations {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 前缀列表ID。 */
      PrefixListId: string;
      /** 查询凭证（Token）。取值为上一次调用该接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。 */
      NextToken?: string;
      /** 分页查询时每页行数。

      最大值：100。

      默认值：10。 */
      MaxResults?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 本次调用返回的查询凭证（Token）。当该返回值为空时，表示无更多返回的数据信息。 */
      NextToken?: string;
      /** 前缀列表已关联的资源信息组成的数组。 */
      PrefixListAssociations?: Array<{
        /** 资源ID。 */
        ResourceId?: string;
        /** 资源类型。 */
        ResourceType?: string }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribePrefixListAttributes
   * 调用DescribePrefixListAttributes查询指定前缀列表的详细信息，包含前缀列表的名称、地址族、最大条目容量以及条目的详细信息等。
   * @summary: 调用DescribePrefixListAttributes查询指定前缀列表的详细信息，包含前缀列表的名称、地址族、最大条目容量以及条目的详细信息等。
   */
  export namespace DescribePrefixListAttributes {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 前缀列表ID。 */
      PrefixListId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 前缀列表的地址族。可能值：

      - IPv4。
      - IPv6。 */
      AddressFamily?: string;
      /** 前缀列表的创建时间。 */
      CreationTime?: string;
      /** 前缀列表的描述信息。 */
      Description?: string;
      /** 前缀列表中的条目信息组成的数组。 */
      Entries?: Array<{
        /** 前缀列表条目的CIDR地址块信息。 */
        Cidr?: string;
        /** 前缀列表条目的描述信息。 */
        Description?: string }>;
      /** 前缀列表支持的最大条目容量。 */
      MaxEntries?: number;
      /** 前缀列表ID。 */
      PrefixListId?: string;
      /** 前缀列表的名称。 */
      PrefixListName?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribePrefixLists
   * 请求参数`AddressFamily`、`PrefixListId.N`和`PrefixListName`类似于过滤器，为逻辑与（AND）关系。如果某一参数为空，则过滤器不起作用。
   * @summary: 调用DescribePrefixLists查询一个或多个前缀列表的信息。
   */
  export namespace DescribePrefixLists {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 前缀列表的名称。 */
      PrefixListName?: string;
      /** 查询凭证（Token）。取值为上一次调用该接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。 */
      NextToken?: string;
      /** 分页查询时每页行数。

      最大值：100。

      默认值：10。 */
      MaxResults?: number;
      /** 前缀列表的地址族。取值范围：

      - IPv4。
      - IPv6。

      默认值：空，查询所有前缀列表信息。 */
      AddressFamily?: string;
      /** 前缀列表ID。N的取值范围：0~100。 */
      PrefixListId?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 本次调用返回的查询凭证（Token）。当该返回值为空时，表示无更多返回的数据信息。 */
      NextToken?: string;
      /** 前缀列表信息组成的数组。 */
      PrefixLists?: Array<{
        /** 前缀列表的地址族。可能值：

        - IPv4。
        - IPv6。 */
        AddressFamily?: string;
        /** 关联资源的数量。 */
        AssociationCount?: number;
        /** 前缀列表的创建时间。 */
        CreationTime?: string;
        /** 前缀列表的描述信息。 */
        Description?: string;
        /** 前缀列表支持的最大条目容量。 */
        MaxEntries?: number;
        /** 前缀列表ID。 */
        PrefixListId?: string;
        /** 前缀列表的名称。 */
        PrefixListName?: string }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribePrice
   * # 接口说明
   * 
   * - 查询不同类型资源的价格时，必需参数也有所不同，具体说明如下：
   *     - 参数`ResourceType=instance`时，您必须同时指定参数`InstanceType`。
   *     - 参数`ResourceType=disk`时，您必须同时指定参数`DataDisk.1.Category`和`DataDisk.1.Size`。查询`disk`资源的价格时，只返回云盘按量付费的价格，即参数`PriceUnit`只能取值为`Hour`。
   *     - 查询`ResourceType=ddh`时，您必须同时指定参数`DedicatedHostType`。
   *     - 查询`ResourceType=ElasticityAssurance`时，必须同时指定参数`InstanceType`。
   *     - 查询`ResourceType=CapacityReservation`时，必须同时指定参数`InstanceType`。
   * - 查询`ResourceType=bandwidth`时，只返回按流量计费（`PayByTraffic`）的价格。
   * - 参数`ResourceType=instance`时，仅支持查询四块以内数据盘的价格。
   * - 默认查询付费方式（`ChargeType`）为按量付费（`PostPaid`）的价格，您可以通过指定`PriceUnit`参数查询云服务器ECS不同计费周期的价格。
   * @summary: 调用DescribePrice查询云服务器ECS资源的最新价格。
   */
  export namespace DescribePrice {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 目标资源的类型。取值范围：
      - instance：查询ECS实例的最新价格列表。当取值为`instance`时，必须同时指定参数`InstanceType`。
      - disk：查询云盘的最新价格列表。当取值为`disk`时，必须同时指定参数`DataDisk.1.Category`和`DataDisk.1.Size`。
      - bandwidth：查询带宽的最新价格列表。
      - ddh：查询专有宿主机的最新价格列表。
      - ElasticityAssurance：查询弹性保障服务的价格信息。当取值为`ElasticityAssurance`时，必须同时指定参数`InstanceType`。
      - CapacityReservation：查询容量预定服务的价格信息。当取值为`CapacityReservation`时，必须同时指定参数`InstanceType`。

      默认值：instance。
       */
      ResourceType?: string;
      /** 仅当参数ResourceType的值为instance时，该参数生效。

      镜像ID，表示启动实例时希望装载的运行环境。您可以调用[DescribeImages](https://help.aliyun.com/document_detail/25534.html)查询您可用的镜像资源。如果不指定，默认查询Linux系统镜像的价格。 */
      ImageId?: string;
      /** 实例的资源规格。参数`ResourceType`的值为`instance`时，您必须同时指定该参数。更多详情，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)，也可以调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)接口获得最新的规格表。
       */
      InstanceType?: string;
      /** 专有宿主机的规格。您可以调用[DescribeDedicatedHostTypes](https://help.aliyun.com/document_detail/134240.html)接口获得最新的专有宿主机规格表。 */
      DedicatedHostType?: string;
      /** 查询的实例是否为I/O优化实例。取值范围：

      - none：非I/O优化。
      - optimized：I/O优化。

      当InstanceType为[系列I](https://help.aliyun.com/document_detail/55263.html)的规格时，默认值为none。

      当InstanceType为非[系列I](https://help.aliyun.com/document_detail/55263.html)的规格时，默认值为optimized。 */
      IoOptimized?: string;
      /** 实例的网络类型。取值范围：

      - classic：实例的网络类型为经典网络（Classic）。
      - vpc：实例的网络类型为专有网络（VPC）。

      默认值：vpc。 */
      InstanceNetworkType?: string;
      /** 网络带宽计费方式。取值范围：

      - PayByBandwidth：按固定带宽计费。
      - PayByTraffic：按带宽流量计费。

      默认值：PayByTraffic。
       */
      InternetChargeType?: string;
      /** 公网出带宽最大值，单位为Mbit/s（Megabit per second）。取值范围：0~100。

      默认值：0。 */
      InternetMaxBandwidthOut?: number;
      /** 系统盘的云盘种类。取值范围：

      - cloud：普通云盘。
      - cloud_efficiency：高效云盘。
      - cloud_ssd：SSD云盘。
      - ephemeral_ssd：本地SSD盘。
      - cloud_essd：ESSD云盘。
      - cloud_auto：ESSD AutoPL云盘。
      - cloud_essd_entry：ESSD Entry云盘。参数默认值说明：

      - 当InstanceType为已停售的实例规格，且参数`IoOptimized`取值为`none`时，该参数默认值为`cloud`。
      - 其它情况下，该参数默认值为`cloud_efficiency`。

      > 查询系统盘价格时，必须同时指定`ImageId`。 */
      'SystemDisk.Category'?: string;
      /** 系统盘大小，单位为GiB。取值范围：20~500。

      默认值：max{20, 参数ImageId对应的镜像大小}。 */
      'SystemDisk.Size'?: number;
      /** 系统盘类型为ESSD云盘时，区分性能等级。仅当`SystemDiskCategory=cloud_essd时`该参数有效。取值范围：

      PL0。
      PL1（默认）。
      PL2。
      PL3。 */
      'SystemDisk.PerformanceLevel'?: string;
      /** 为提高扩展性，建议您使用`DataDisk.N.Size`参数。 */
      'DataDisk.1.Size'?: number;
      /** 为提高扩展性，建议您使用`DataDisk.N.Category`参数。 */
      'DataDisk.1.Category'?: string;
      /** 为提高扩展性，建议您使用`DataDisk.N.PerformanceLevel`参数。 */
      'DataDisk.1.PerformanceLevel'?: string;
      /** 为提高扩展性，建议您使用`DataDisk.N.Size`参数。 */
      'DataDisk.2.Size'?: number;
      /** 为提高扩展性，建议您使用`DataDisk.N.Category`参数。 */
      'DataDisk.2.Category'?: string;
      /** 为提高扩展性，建议您使用`DataDisk.N.PerformanceLevel`参数。 */
      'DataDisk.2.PerformanceLevel'?: string;
      /** 为提高扩展性，建议您使用`DataDisk.N.Size`参数。 */
      'DataDisk.3.Size'?: number;
      /** 为提高扩展性，建议您使用`DataDisk.N.Category`参数。 */
      'DataDisk.3.Category'?: string;
      /** 为提高扩展性，建议您使用`DataDisk.N.PerformanceLevel`参数。 */
      'DataDisk.3.PerformanceLevel'?: string;
      /** 为提高扩展性，建议您使用`DataDisk.N.Size`参数。 */
      'DataDisk.4.Size'?: number;
      /** 为提高扩展性，建议您使用`DataDisk.N.Category`参数。 */
      'DataDisk.4.Category'?: string;
      /** 为提高扩展性，建议您使用`DataDisk.N.PerformanceLevel`参数。 */
      'DataDisk.4.PerformanceLevel'?: string;
      /** 云服务器ECS的计费时长。取值范围：

      - 当参数PriceUnit取值为Month时：1~9。
      - 当参数PriceUnit取值为Year时：1~5。
      - 当参数PriceUnit取值为Hour时：1。
      - 当参数PriceUnit取值为Week时：1~4。

      默认值：1。


       */
      Period?: number;
      /** 查询云服务器ECS不同计费周期的价格。取值范围：

      - Month：按月计费的价格单位。
      - Year：按年计费的价格单位。
      - Hour（默认）：按小时计费的价格单位。
      - Week：按周计费的价格单位。
       */
      PriceUnit?: string;
      /** 查询批量购买某种配置的云服务器ECS的价格。取值范围：1~1000。

      默认值：1。 */
      Amount?: number;
      /** 预留实例券的付款类型。取值范围：

      - No Upfront：零预付。
      - Partial Upfront：部分预付。
      - All Upfront：全预付。 */
      OfferingType?: string;
      /** 在一个实例规格内，需要预留的实例的总数量。

      取值范围：1~1000。 */
      InstanceAmount?: number;
      /** 预留实例券的范围。取值范围： 
         
      - Region：地域级别。 
      - Zone：可用区级别。

      默认值：Region。 */
      Scope?: string;
      /** 实例使用的镜像的操作系统类型。取值范围： 
      - Windows：Windows Server类型的操作系统。
      - Linux：Linux及类Unix类型的操作系统。 */
      Platform?: string;
      /** 容量大小，单位为GiB。 */
      Capacity?: number;
      /** 弹性保障的总次数。取值：Unlimited，目前仅支持在服务生效期内的无限次模式。

      默认值：Unlimited。 */
      AssuranceTimes?: string;
      /** 弹性保障内支持实例的vCPU总数量。调用API时系统会根据用户指定的InstanceType换算出需要弹性保证内支持实例的数量（向上取整）。

      >当调用API查询弹性保障价格时，参数InstanceCoreCpuCount和InstanceAmount只能指定其中一个。 */
      InstanceCpuCoreCount?: number;
      /** 互联网服务运营商，取值范围： 
      - cmcc：移动。
      - telecom：电信。
      - unicom：联通。
      - multiCarrier：多线。 */
      Isp?: string;
      /** 实例规格。目前仅支持无限次保障服务设置单个实例规格。 */
      InstanceTypeList?: Array<string>;
      /** 按量付费实例的抢占策略。取值范围：
      - NoSpot：正常按量付费实例。
      - SpotWithPriceLimit：设置上限价格的抢占式实例。
      - SpotAsPriceGo：系统自动出价，最高按量付费价格。

      默认值：NoSpot。

      > 当`PriceUnit=Hour`、`Period=1`时，该参数才有效。由于`PriceUnit`默认值为`Hour`，`Period`默认值为`1`，因此您在设置该参数值时，无需设置`PriceUnit`和`Period`参数值。 */
      SpotStrategy?: 'NoSpot' | 'SpotWithPriceLimit' | 'SpotAsPriceGo';
      /** 抢占式实例的保留时长，单位为小时。取值范围：0~6。

      - 保留时长2~6请[提交工单](https://smartservice.console.aliyun.com/service/create-ticket)申请，并填写如下信息。
            - 所需资源规格和数量，如ecs.g6.8xlarge 1000台。
            - 资源使用地域，如华北2（北京）。
            - 每日集中使用时间，如每天集中在1:00~4::00使用。

      - 取值为0，则为无保护期模式。

      默认值：1。 */
      SpotDuration?: number;
      /** 可用区ID。

      > 抢占式实例不同可用区价格可能不同，查询抢占式实例价格时，建议传入ZoneId查询指定可用区的抢占式实例价格。 */
      ZoneId?: string;
      /** 数据盘列表集合。 */
      DataDisk?: Array<{
        /** 第N块数据盘的云盘种类。取值范围：

        - cloud：普通云盘。
        - cloud_efficiency：高效云盘。
        - cloud_ssd：SSD云盘。
        - ephemeral_ssd：本地SSD盘。
        - cloud_essd：ESSD云盘。
        - cloud_auto：ESSD AutoPL云盘。
        - cloud_essd_entry：ESSD Entry云盘。N的取值范围：1~16。 */
        Category?: string;
        /** 第N块数据盘类型为ESSD云盘时，区分性能等级。仅当`DataDisk.N.Category=cloud_essd`时该参数有效。取值范围：

        - PL0。
        - PL1（默认）。
        - PL2。
        - PL3。

        N的取值范围：1~16。 */
        PerformanceLevel?: string;
        /** 第N块数据盘的容量大小，内存单位为GiB。取值范围：

        - cloud：5~2000。
        - cloud_efficiency：20~32768。
        - cloud_ssd：20~32768。
        - cloud_auto：40~32768。
        - cloud_essd_entry：10~32768。- cloud_essd：具体取值范围与`DataDisk.N.PerformanceLevel`的取值有关。	
            - PL0：40~32768。
            - PL1：20~32768。
            - PL2：461~32768。
            - PL3：1261~32768。
        - ephemeral_ssd：5~800。

        N的取值范围：1~16。 */
        Size?: number }>;
      /** 仅当参数ResourceType的值为instance时，该参数生效。

      专有宿主机ID。您可以通过[DescribeDedicatedHosts ](https://help.aliyun.com/document_detail/134242.html)查询专有宿主机ID列表。 */
      'SchedulerOptions.DedicatedHostId'?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 价格信息类型（Price），包括价格和优惠规则。 */
      PriceInfo?: {
        /** 价格。 */
        Price?: {
          /** 货币单位。

          中国站：CNY。

          国际站：USD。 */
          Currency?: string;
          /** 价格的详细信息。

          > 该返回值正在邀测中，暂未开放使用。 */
          DetailInfos?: Array<{
            /** 折扣价。 */
            DiscountPrice?: number;
            /** 原价。 */
            OriginalPrice?: number;
            /** 资源名称。 */
            Resource?: string;
            /** 定价规则子集。 */
            SubRules?: Array<{
              /** 规则子集描述。 */
              Description?: string;
              /** 活动规则ID。 */
              RuleId?: number }>;
            /** 成交价。 */
            TradePrice?: number }>;
          /** 折扣。 */
          DiscountPrice?: number;
          /** 原价。 */
          OriginalPrice?: number;
          /** 0预付或部分预付的预留实例券的小时价。 */
          ReservedInstanceHourPrice?: number;
          /** 最终价，为原价减去折扣。 */
          TradePrice?: number };
        /** 活动规则。 */
        Rules?: Array<{
          /** 活动规则描述。 */
          Description?: string;
          /** 活动规则ID。 */
          RuleId?: number }> };
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeRecommendInstanceType
   * （Beta）调用DescribeRecommendInstanceType根据一个指定的实例规格，查找一个或多个备选的实例规格。针对已经或者即将停售的实例规格，DescribeRecommendInstanceType会罗列出作为替补的所有实例规格。
   * @summary: （Beta）调用DescribeRecommendInstanceType根据一个指定的实例规格，查找一个或多个备选的实例规格。针对已经或者即将停售的实例规格，DescribeRecommendInstanceType会罗列出作为替补的所有实例规格。
   */
  export namespace DescribeRecommendInstanceType {
    export type Params = {
      /** ECS实例vCPU核数。

      >同时指定`Cores`参数和`Memory`参数会匹配所有满足vCPU核数和内存大小的实例规格。 */
      Cores?: number;
      /** ECS实例内存大小，单位为GiB。

      >同时指定`Cores`参数和`Memory`参数会匹配所有满足vCPU核数和内存大小的实例规格。 */
      Memory?: number;
      /** 实例规格族级别。取值范围：

      - EntryLevel：入门级。
      - EnterpriseLevel：企业级。
      - CreditEntryLevel：积分入门级。详情请参见[突发性能实例](https://help.aliyun.com/document_detail/59977.html)。 */
      InstanceFamilyLevel?: string;
      /** 指定的实例规格。更多详情，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)，也可以调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)接口获得最新的规格表。

      > 如果您指定了`InstanceType`，则无法指定`Cores`或者`Memory`。 */
      InstanceType?: string;
      /** ECS实例的网络类型。取值范围：

      - classic：经典网络
      - vpc：专有网络VPC

      默认值：vpc */
      NetworkType: string;
      /** ECS实例的计费方式。更多详情，请参见[计费概述](https://help.aliyun.com/document_detail/25398.html)。取值范围：

      - PrePaid：包年包月
      - PostPaid：按量付费

      默认值：PostPaid */
      InstanceChargeType?: string;
      /** 抢占式实例的竞价策略。取值范围：

      - NoSpot：正常按量付费实例。
      - SpotWithPriceLimit：设置上限价格的抢占式实例。
      - SpotAsPriceGo：系统自动出价，最高按量付费价格。

      > 使用`SpotStrategy`时，`InstanceChargerType`必须设置为`PostPaid`。

      默认值：NoSpot */
      SpotStrategy?: string;
      /** 是否为I/O优化实例。实例规格只支持非I/O优化时，不能设置IoOptimized参数。取值范围：

      - optimized：I/O优化
      - none：非IO优化

      默认值：optimized

      如果您设置的是已停售实例规格。默认值：none */
      IoOptimized?: string;
      /** 优先推荐策略。取值范围：

      - InventoryFirst：库存优先。
      - PriceFirst：价格优先，按每小时vCPU单价从低到高排序。
      - NewProductFirst：最新产品优先。

      默认值：InventoryFirst */
      PriorityStrategy?: string;
      /** 按量付费实例或者抢占式实例可接受的每小时最高价格。

      >设置抢占式实例的最高单价时，`SpotStrategy`必须设置为`SpotWithPriceLimit`。 */
      MaxPrice?: number;
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 可用区ID。您可以调用[DescribeZones](https://help.aliyun.com/document_detail/25610.html)查看最新的阿里云可用区列表。

      建议同时ZoneMatchMode取值为Include（默认值），优先推荐ZoneId指定的可用区中的实例规格，并列出同地域下其他可用区中的实例规格。 */
      ZoneId?: string;
      /** 系统盘的云盘种类。取值范围：

      - cloud_efficiency：高效云盘
      - cloud_ssd：SSD云盘
      - cloud_essd：ESSD云盘
      - cloud：普通云盘

      非I/O优化实例的默认值：cloud

      I/O优化实例的默认值：cloud_efficiency */
      SystemDiskCategory?: string;
      /** 是否仅推荐ZoneId指定的可用区中的实例规格。取值范围：

      - Strict：仅推荐ZoneId指定的可用区中的实例规格。

      - Include：推荐同地域下其他可用区中的实例规格。


      当指定`ZoneId`时，该参数的默认值为Strict，表示仅推荐ZoneId指定的可用区中的实例规格。 */
      ZoneMatchMode?: string;
      /** 在哪种场景下推荐实例规格。取值范围：

      - UPGRADE：升级或降低实例规格。
      - CREATE：创建实例。

      默认值：CREATE */
      Scene?: string;
      /** 设置备选的实例规格族集合，备选的实例规格会从该参数设置的实例规格族中选择。最多可输入10个实例规格族。 */
      InstanceTypeFamily?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 推荐的实例规格集合。 */
      Data?: Array<{
        /** 实例规格的商品编码。 */
        CommodityCode?: string;
        /** 实例的计费方式。 */
        InstanceChargeType?: string;
        /** 实例规格名称。 */
        InstanceType?: {
          /** 实例规格的vCPU核数。 */
          Cores?: number;
          /** 实例规格族系列。 */
          Generation?: string;
          /** 实例规格名称。 */
          InstanceType?: string;
          /** 实例规格族。 */
          InstanceTypeFamily?: string;
          /** 实例规格的内存大小，单位为MB。 */
          Memory?: number;
          /** 实例规格是否支持I/O优化。 */
          SupportIoOptimized?: string };
        /** ECS实例的网络类型。 */
        NetworkType?: string;
        /** 排序优先级。 */
        Priority?: number;
        /** 实例规格所在的地域ID。 */
        RegionId?: string;
        /** 在哪种场景下推荐实例规格。 */
        Scene?: string;
        /** 抢占式实例的抢占策略。 */
        SpotStrategy?: string;
        /** 实例规格所在的可用区ID。 */
        ZoneId?: string;
        /** 实例规格所在的可用区集合。 */
        Zones?: Array<{
          /** 实例规格的网络类型集合。 */
          NetworkTypes?: Array<string>;
          /** 实例规格所在的可用区ID。 */
          ZoneNo?: string }> }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeRegions
   * 调用DescribeRegions查询您可以使用的阿里云地域。
   * @summary: 调用DescribeRegions查询您可以使用的阿里云地域。
   */
  export namespace DescribeRegions {
    export type Params = {
      /** 实例的计费方式，更多详情，请参见[计费概述](https://help.aliyun.com/document_detail/25398.html)。取值范围：

      - PrePaid：包年包月。此时，您必须确认自己的账号支持余额支付或者信用支付，否则将报错InvalidPayMethod。
      - PostPaid：按量付费。

      默认值为PostPaid。 */
      InstanceChargeType?: string;
      /** 资源类型。取值范围：
      -  instance：ECS实例
      -  disk：磁盘
      -  reservedinstance：预留实例券
      -  scu：存储容量单位包

      默认值：instance */
      ResourceType?: string;
      /**  根据汉语、英语和日语筛选返回结果。更多详情，请参见[RFC7231](https://tools.ietf.org/html/rfc7231)。取值范围：  
               
      - zh-CN：中文。
      - en-US：英文。
      - ja：日文。

      默认值为zh-CN。 */
      AcceptLanguage?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 地域信息集合。 */
      Regions?: Array<{
        /** 地域名称。 */
        LocalName?: string;
        /** 地域对应的接入地址（Endpoint）。 */
        RegionEndpoint?: string;
        /** 地域ID。 */
        RegionId?: string;
        /**  集群是否售罄。可能值：

        - available
        - soldOut */
        Status?: string }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeRenewalPrice
   * - 仅支持查询包年包月ECS实例续费时长的价格或者续费至统一到期日的价格。
   * - 参数设置的注意事项如下：
   *     - 只设置必选参数时，默认查询实例续费时长1个月的价格信息。
   *     - 不支持同时查询续费时长价格和续费至统一到期日的价格，即续费时长参数（`Period`、`PeriodUnit`）与续费至统一到期日参数（`ExpectedRenewDay`）不能同时设置。
   * @summary: 调用DescribeRenewalPrice查询云服务器ECS资源的续费价格。仅支持查询包年包月资源的续费价格。
   */
  export namespace DescribeRenewalPrice {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 查询续费价格的资源类型。取值：instance。

      默认值：instance。 */
      ResourceType?: string;
      /** 查询续费价格的资源ID。参数`ResourceType`取值为`instance`时，`ResourceId`可以理解为`InstanceId`。 */
      ResourceId: string;
      /** 指定续费时长。取值范围：

      - 当参数`PriceUnit`取值为`Month`时：1~9。
      - 当参数`PriceUnit`取值为`Year`时：1~3。

      默认值：1。

      > 续费时长参数（`Period`、`PeriodUnit`）与统一到期日参数（`ExpectedRenewDay`）不能同时设置。 */
      Period?: number;
      /** 指定续费周期。取值范围：

      - Month：续费周期为一个月。
      - Year：续费周期为一年。

      默认值：Month。 */
      PriceUnit?: string;
      /** 统一到期日。指定该参数后，将查询实例续费至统一到期日的价格信息。取值范围：1~28。

      关于统一到期日功能的更多信息，请参见[统一实例到期日](https://help.aliyun.com/document_detail/108486.html)。

      > 续费时长参数（`Period`、`PeriodUnit`）与统一到期日参数（`ExpectedRenewDay`）不能同时设置。 */
      ExpectedRenewDay?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 价格信息类型（PriceInfo）组成的数据类型，包括价格和优惠规则信息。 */
      PriceInfo?: {
        /** 价格。 */
        Price?: {
          /** 货币单位。

          中国站：CNY。

          国际站：USD。 */
          Currency?: string;
          /** 资源定价详情。 */
          DetailInfos?: Array<{
            /** 折扣价。 */
            DiscountPrice?: number;
            /** 原价。 */
            OriginalPrice?: number;
            /** 价格对应的资源名称。 */
            Resource?: string;
            /** 定价规则子集。 */
            SubRules?: Array<{
              /** 定价规则描述。 */
              Description?: string;
              /** 定价规则ID。 */
              RuleId?: number }>;
            /** 成交价。 */
            TradePrice?: number }>;
          /** 折扣。 */
          DiscountPrice?: number;
          /** 原价。 */
          OriginalPrice?: number;
          /** 最终价，为原价减去折扣。 */
          TradePrice?: number };
        /** 活动规则。 */
        Rules?: Array<{
          /** 活动规则描述。 */
          Description?: string;
          /** 活动ID。 */
          RuleId?: number }> };
      /** 请求ID。  */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeReservedInstanceAutoRenewAttribute
   * 调用DescribeReservedInstanceAutoRenewAttribute查询一个或多个包年包月预留实例券自动续费状态。
   * @summary: 调用DescribeReservedInstanceAutoRenewAttribute查询一个或多个包年包月预留实例券自动续费状态。
   */
  export namespace DescribeReservedInstanceAutoRenewAttribute {
    export type Params = {
      /** 预留实例券所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 预留实例券ID。 */
      ReservedInstanceId?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 由ReservedInstanceRenewAttribute组成的数组格式，返回预留实例券的自动续费设置信息。

       */
      ReservedInstanceRenewAttributes?: Array<{
        /** 自动续费时长。 */
        Duration?: number;
        /** 续费单位。



        可能值：Year、Month。 */
        PeriodUnit?: string;
        /** 预留实例券自动续费状态。取值范围：

        - AutoRenewal：自动续费。
        - Normal：手动续费。 */
        RenewalStatus?: string;
        /** 预留实例券ID。 */
        ReservedInstanceId?: string }> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeReservedInstances
   * 调用DescribeReservedInstances查询已经购买的预留实例券。
   * @summary: 调用DescribeReservedInstances查询已经购买的预留实例券。
   */
  export namespace DescribeReservedInstances {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 预留实例券列表的页码，起始值：1

      默认值：1 */
      PageNumber?: number;
      /** 分页查询时的每页行数，最大值：100

      默认值：10 */
      PageSize?: number;
      /** 标签列表。 */
      Tag?: Array<{
        /** 预留实例券的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。 */
        Key?: string;
        /** 预留实例券的标签值。N的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或者https://。 */
        Value?: string }>;
      /** 实例所属的可用区编号，当Scope为Zone时必填。更多详情，请参见[DescribeZones](https://help.aliyun.com/document_detail/25610.html)获取可用区列表。  */
      ZoneId?: string;
      /** 预留实例券名称。 */
      ReservedInstanceName?: string;
      /** 锁定类型。取值范围：

      - financial：账号欠费或服务过期
      - security：安全原因 */
      LockReason?: string;
      /** 实例资源的规格。取值请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。  */
      InstanceType?: string;
      /** 实例资源的规格族。取值请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。  */
      InstanceTypeFamily?: string;
      /** 预留实例券的范围。取值范围：
               
      - Region：地域级别
      - Zone：可用区级别

      默认值：Region */
      Scope?: string;
      /** 预留实例券的付款类型。取值范围：

      - No Upfront：零预付
      - Partial Upfront：部分预付
      - All Upfront：全预付 */
      OfferingType?: string;
      /** 分配类型。取值范围：

      - Normal：查询当前账号下的预留实例券。
      - Shared：查询当前账号下已经建立主子账号共享的预留实例券。

      默认值：Normal */
      AllocationType?: string;
      /** 预留实例券ID。N的取值范围：1~100。 */
      ReservedInstanceId?: Array<string>;
      /** 预留实例券的状态，N的取值范围：1~100。状态值取值范围：

      - Creating：正在创建
      - Active：在有效期中
      - Expired：已过期
      - Updating：正在更改预留实例券的属性 */
      Status?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 预留实例券列表的页码。 */
      PageNumber?: number;
      /** 输入时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 由ReservedInstance组成的数组格式，返回预留实例券的详细信息。 */
      ReservedInstances?: Array<{
        /** 当AllocationType值为Shared时，该参数表示预留实例券的分配状态。可能值：

        - allocated：已分配给其他用户的预留实例券。
        - beAllocated：被其他用户分配的预留实例券。
         */
        AllocationStatus?: string;
        /** 创建时间。 */
        CreationTime?: string;
        /** 描述。 */
        Description?: string;
        /** 到期时间。 */
        ExpiredTime?: string;
        /** 可以匹配同规格按量付费实例的数量。 */
        InstanceAmount?: number;
        /** 匹配的按量付费实例的规格。 */
        InstanceType?: string;
        /** 付款类型。 */
        OfferingType?: string;
        /** 是否被锁定。 */
        OperationLocks?: Array<{
          /** 锁定原因。 */
          LockReason?: string }>;
        /** 实例使用的镜像的操作系统类型。可能值：

        - Windows：Windows Server类型的操作系统。

        - Linux：Linux及类Unix类型的操作系统。 */
        Platform?: string;
        /** 地域ID。 */
        RegionId?: string;
        /** 预留实例券ID。 */
        ReservedInstanceId?: string;
        /** 名称。 */
        ReservedInstanceName?: string;
        /** 资源组。 */
        ResourceGroupId?: string;
        /** 范围。 */
        Scope?: string;
        /** 生效时间。 */
        StartTime?: string;
        /** 状态。 */
        Status?: string;
        /** 预留实例券的标签对信息。 */
        Tags?: Array<{
          /** 预留实例券的标签键。 */
          TagKey?: string;
          /** 预留实例券的标签值。 */
          TagValue?: string }>;
        /** 可用区ID。 */
        ZoneId?: string }>;
      /** 预留实例券的总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeResourceByTags
   * 调用DescribeResourceByTags根据标签检索资源。支持根据标签检索，也支持根据资源类型检索。
   * @summary: 调用DescribeResourceByTags根据标签检索资源。支持根据标签检索，也支持根据资源类型检索。
   */
  export namespace DescribeResourceByTags {
    export type Params = {
      /** 查询结果显示的每页的信息条目数。最大值：100。

      默认值：50。 */
      PageSize?: number;
      /** 查询结果显示的页码。起始值：1。

      默认值：1。 */
      PageNumber?: number;
      /** 资源类型。取值范围：

      - instance：ECS实例。
      - disk：磁盘。
      - snapshot：快照。
      - image：镜像。
      - securitygroup：安全组。
      - volume：存储卷。
      - eni：弹性网卡。
      - ddh：专有宿主机。
      - keypair：SSH密钥对。
      - launchtemplate：启动模板。

      以上取值均为小写。 */
      ResourceType?: string;
      /** 资源所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 资源的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符。 */
        Key?: string;
        /** 资源的标签值。N的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持128个字符。 */
        Value?: string;
        /** 资源的标签键。

        >为提高兼容性，建议您尽量使用Tag.N.Key参数。 */
        key?: string;
        /** 资源的标签值。

        >为提高兼容性，建议您尽量使用Tag.N.Value参数。 */
        value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 查询结果显示的页码。 */
      PageNumber?: number;
      /** 查询结果显示的每页的信息条目数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 绑定标签的资源信息集合。 */
      Resources?: Array<{
        /** 地域ID。 */
        RegionId?: string;
        /** 资源ID。 */
        ResourceId?: string;
        /** 资源类型。 */
        ResourceType?: string }>;
      /** 返回的资源总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeResourcesModification
   * 调用DescribeResourcesModification查询升级和降配实例规格或者系统盘时，某一可用区的可用资源信息。
   * @summary: 调用DescribeResourcesModification查询升级和降配实例规格或者系统盘时，某一可用区的可用资源信息。
   */
  export namespace DescribeResourcesModification {
    export type Params = {
      /** 目标地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 资源ID。例如，当待查询的资源为实例时，可以理解为InstanceId。 */
      ResourceId: string;
      /** 是否支持跨集群升级实例规格。取值范围： 
              
      - true：支持。
      - false：不支持。

      默认值：false。

      当参数MigrateAcrossZone取值为true时，一旦您根据返回信息升级了云服务器，请留意以下注意事项： 
               
      - 经典网络类型实例： 
          - 对于[已停售的实例规格](https://help.aliyun.com/document_detail/55263.html)，非I/O优化实例变配到I/O优化实例时，实例私网IP地址、云盘设备名和软件授权码会发生变化。对于Linux实例，普通云盘（cloud）会被识别为xvda或者xvdb等，高效云盘（cloud_efficiency）和SSD云盘（cloud_ssd）会被识别为vda或者vdb等。  
          - 对于[正常售卖的实例规格族](https://help.aliyun.com/document_detail/25378.html)，实例的私网IP地址会发生变化。  
                  
      - 专有网络VPC类型实例：对于[已停售的实例规格](https://help.aliyun.com/document_detail/55263.html)，非I/O优化实例变配到I/O优化实例时，云服务器云盘设备名和软件授权码会发生变化。Linux实例的普通云盘（cloud）会被识别为xvda或者xvdb等，高效云盘（cloud_efficiency）和SSD云盘（cloud_ssd）会被识别为vda或者vdb等。    */
      MigrateAcrossZone?: boolean;
      /** 目标资源类型。取值范围： 
               
      - InstanceType：实例规格。
      - SystemDisk：系统盘类型。 */
      DestinationResource: string;
      /** 更改资源配置的操作类型。

      - 包年包月资源的取值范围： 

          - Upgrade：升级资源。
          - Downgrade：降级资源。
          - RenewDowngrade：续费降配。
          - RenewModify：过期实例的续费变配。

      - 按量付费资源的取值：Upgrade。

      默认值：Upgrade。 */
      OperationType?: string;
      /** 实例规格。更多信息，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)，也可以调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) 接口获得最新的规格表。当参数DestinationResource取值为SystemDisk时，必须同时指定InstanceType参数。  */
      InstanceType?: string;
      /** 实例规格的vCPU内核数目。取值请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。当DestinationResource=InstanceType参数有效，Cores才为有效参数。  */
      Cores?: number;
      /** 实例规格的内存大小，单位为GiB。取值请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。当DestinationResource=InstanceType，Memory才为有效参数。  */
      Memory?: number;
      /** 可用区ID。 */
      ZoneId?: string;
      /** 条件列表。 */
      Conditions?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 数据中心信息AvailableZone组成的集合。 */
      AvailableZones?: Array<{
        /** 可供创建的具体资源组成的数组。 */
        AvailableResources?: Array<{
          /** 有条件支持的可供创建的具体资源列表。满足条件后，可以将当前资源变更到列表中的资源。 */
          ConditionSupportedResources?: Array<{
            /** 条件列表。 */
            Conditions?: Array<{
              /** 条件名。目前可选值：

              DiskCategory：盘类型不满足。 */
              Key?: string }>;
            /** 云盘容量范围的最大值。

            仅当入参DestinationResource取值为SystemDisk时该参数才生效。 */
            Max?: number;
            /** 云盘容量范围的最小值。

            仅当入参DestinationResource取值为SystemDisk时该参数才生效。 */
            Min?: number;
            /** 资源的库存状态。可能值：

            - Available：资源充足。

            - SoldOut：资源已售罄。 */
            Status?: string;
            /** 根据库存详细分类资源类别。可能值：

            - WithStock：库存充足。

            - ClosedWithStock：库存接近水位低线。

            - WithoutStock：库存告罄。 */
            StatusCategory?: string;
            /** 云盘容量的单位。

            仅当入参DestinationResource取值为SystemDisk时该参数才生效。 */
            Unit?: string;
            /** 资源值。 */
            Value?: string }>;
          /** 支持的可供创建的具体资源组成的数组。 */
          SupportedResources?: Array<{
            /** 云盘容量范围的最大值。

            仅当入参DestinationResource取值为SystemDisk时该参数才生效。 */
            Max?: number;
            /** 云盘容量范围的最小值。

            仅当入参DestinationResource取值为SystemDisk时该参数才生效。 */
            Min?: number;
            /** 资源状态。可能值：
                      
            - Available：资源充足。
            - SoldOut：资源已售罄。
                       */
            Status?: string;
            /** 根据库存详细分类资源类别。可能值：

            - WithStock：库存充足。

            - ClosedWithStock：库存接近水位低线。

            - WithoutStock：库存告罄。 */
            StatusCategory?: string;
            /** 云盘容量的单位。
            仅当入参DestinationResource取值为SystemDisk时该参数才生效。 */
            Unit?: string;
            /** 资源值。 */
            Value?: string }>;
          /** 资源类型。可能值： 
                    
          - Zone：可用区。
          - IoOptimized：I/O优化。
          - InstanceType：实例规格。
          - SystemDisk：系统盘类型。
          - DataDisk：数据盘类型。
          - Network：网络类型。
                     */
          Type?: string }>;
        /** 地域ID。 */
        RegionId?: string;
        /** 资源状态。可能值： 
                  
        - Available：资源充足。
        - SoldOut：资源已售罄。
                   */
        Status?: string;
        /** 根据库存详细分类资源类别。可能值：

        - WithStock：库存充足。
        - ClosedWithStock：库存接近水位低线。
        - WithoutStock：库存告罄。 */
        StatusCategory?: string;
        /** 可用区ID。 */
        ZoneId?: string }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeRouteTables
   * undefined
   * @deprecated
   */
  export namespace DescribeRouteTables {
    export type Params = {
      RegionId?: string;
      VRouterId?: string;
      RouteTableId?: string;
      RouterType?: string;
      RouterId?: string;
      RouteTableName?: string;
      PageNumber?: number;
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      PageNumber?: number;
      PageSize?: number;
      RequestId?: string;
      RouteTables?: Array<{
        CreationTime?: string;
        ResourceGroupId?: string;
        RouteEntrys?: Array<{
          DestinationCidrBlock?: string;
          InstanceId?: string;
          NextHopType?: string;
          NextHops?: Array<{
            Enabled?: number;
            NextHopId?: string;
            NextHopType?: string;
            Weight?: number }>;
          RouteTableId?: string;
          Status?: string;
          Type?: string }>;
        RouteTableId?: string;
        RouteTableType?: string;
        VRouterId?: string }>;
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeRouterInterfaces
   * undefined
   * @deprecated
   */
  export namespace DescribeRouterInterfaces {
    export type Params = {
      RegionId: string;
      PageNumber?: number;
      PageSize?: number;
      Filter?: Array<{
        Key?: string;
        Value?: Array<string> }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      PageNumber?: number;
      PageSize?: number;
      RequestId?: string;
      RouterInterfaceSet?: Array<{
        AccessPointId?: string;
        BusinessStatus?: string;
        ChargeType?: string;
        ConnectedTime?: string;
        CreationTime?: string;
        Description?: string;
        EndTime?: string;
        HealthCheckSourceIp?: string;
        HealthCheckTargetIp?: string;
        Name?: string;
        OppositeAccessPointId?: string;
        OppositeInterfaceBusinessStatus?: string;
        OppositeInterfaceId?: string;
        OppositeInterfaceOwnerId?: string;
        OppositeInterfaceSpec?: string;
        OppositeInterfaceStatus?: string;
        OppositeRegionId?: string;
        OppositeRouterId?: string;
        OppositeRouterType?: string;
        Role?: string;
        RouterId?: string;
        RouterInterfaceId?: string;
        RouterType?: string;
        Spec?: string;
        Status?: string }>;
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSecurityGroupAttribute
   * 调用DescribeSecurityGroupAttribute查询一个安全组的安全组规则。
   * @summary: 调用DescribeSecurityGroupAttribute查询一个安全组的安全组规则。
   */
  export namespace DescribeSecurityGroupAttribute {
    export type Params = {
      /** 安全组ID。 */
      SecurityGroupId: string;
      /** 安全组所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 安全组规则的网卡类型。

      - 经典网络类型安全组的取值范围：
          - internet（默认）：公网
          - intranet：内网
          > 单次调用只能查询一种网卡类型的安全组规则，查询全部类型请分两次调用。
      - 专有网络类型安全组的取值只能为：intranet（默认），即内网。
          > 如果传入internet或空值，则会默认转化为intranet。 */
      NicType?: string;
      /** 安全组规则授权方向。取值范围： 
               
      - egress：安全组出方向
      - ingress：安全组入方向
      - all：不区分方向

      默认值：all */
      Direction?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 安全组描述信息。 */
      Description?: string;
      /** 安全组内网络连通策略。可能值： 
               
      - Accept：内网互通
      - Drop：内网隔离 */
      InnerAccessPolicy?: string;
      /** 安全组权限规则集合。 */
      Permissions?: Array<{
        /** 创建时间，UTC时间。 */
        CreateTime?: string;
        /** 安全组描述信息。 */
        Description?: string;
        /** 目的端IP地址段，用于出方向授权。 */
        DestCidrIp?: string;
        /** 目的端安全组，用于出方向授权。 */
        DestGroupId?: string;
        /** 目的端安全组名称。 */
        DestGroupName?: string;
        /** 目的端安全组所属阿里云账户ID。 */
        DestGroupOwnerAccount?: string;
        /** 目的端前缀列表ID，用于出方向授权。 */
        DestPrefixListId?: string;
        /** 目的端前缀列表的名称。 */
        DestPrefixListName?: string;
        /** 授权方向。 */
        Direction?: string;
        /** IP协议。 */
        IpProtocol?: string;
        /** 目的端IPv6地址段。 */
        Ipv6DestCidrIp?: string;
        /** 源端IPv6地址段。 */
        Ipv6SourceCidrIp?: string;
        /** 网络类型。 */
        NicType?: string;
        /** 授权策略。 */
        Policy?: string;
        /** 端口范围。 */
        PortRange?: string;
        /** 规则优先级。 */
        Priority?: string;
        /** 安全组规则ID。 */
        SecurityGroupRuleId?: string;
        /** 源端IP地址段，用于入方向授权。 */
        SourceCidrIp?: string;
        /** 源端安全组，用于入方向授权。 */
        SourceGroupId?: string;
        /** 源端安全组名称。 */
        SourceGroupName?: string;
        /** 源端安全组所属阿里云账户ID。 */
        SourceGroupOwnerAccount?: string;
        /** 源端端口范围。 */
        SourcePortRange?: string;
        /** 源端前缀列表ID，用于入方向授权。 */
        SourcePrefixListId?: string;
        /** 源端前缀列表的名称。 */
        SourcePrefixListName?: string }>;
      /** 地域ID。 */
      RegionId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 目标安全组ID。 */
      SecurityGroupId?: string;
      /** 目标安全组名称。 */
      SecurityGroupName?: string;
      /** VPC ID。如果返回VPC ID，表示该安全组网络类型为VPC。否则，表示是经典网络类型安全组。 */
      VpcId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSecurityGroupReferences
   * 调用该接口时，您需要注意：
   * 
   * -  授权行为包括入方向授权和出方向授权。
   * 
   * -  该接口单次最多返回100条记录。 
   * 
   * -  当您无法删除某一安全组（[DeleteSecurityGroup](https://help.aliyun.com/document_detail/25558.html)）时，可以调用该接口查看指定的安全组是否已被其他安全组授权。如果指定的安全组已被授权，您需要在删除该安全组之前解除授权行为。
   * @summary: 调用DescribeSecurityGroupReferences查询一个安全组和其他哪些安全组有安全组级别的授权行为。
   */
  export namespace DescribeSecurityGroupReferences {
    export type Params = {
      /** 安全组所属地域。 */
      RegionId: string;
      /** 要查询的第N个SecurityGroupId。N的取值范围：1~10 */
      SecurityGroupId: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 所有用户指定的安全组被授权的完整信息。 */
      SecurityGroupReferences?: Array<{
        /** 正在授权给这个安全组的其他安全组信息。 */
        ReferencingSecurityGroups?: Array<{
          /** 这个安全组所属用户ID。 */
          AliUid?: string;
          /** 安全组ID。 */
          SecurityGroupId?: string }>;
        /** 对应用户要查询的一个安全组。 */
        SecurityGroupId?: string }> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSecurityGroups
   * 调用接口前，您需要注意：
   * 
   * - 安全组的基本信息包括安全组ID和安全组描述等。返回参数列表按照安全组ID降序排列。
   * - 在分页查询时，推荐您使用MaxResults与NextToken参数进行查询。具体使用说明：分页查询首页时，仅需设置MaxResults以限制返回信息的条目数，返回结果中的NextToken将作为查询后续页的凭证。查询后续页时，将NextToken参数设置为上一次返回结果中获取到的NextToken作为查询凭证，并设置MaxResults限制返回条目数。当返回结果中的NextToken为空时，表示该页为末页，不再有后续页。
   * - 通过阿里云CLI调用API时，不同数据类型的请求参数取值必须遵循一定的格式要求。更多信息，请参见[CLI参数格式说明](https://help.aliyun.com/document_detail/110340.html)。
   * @summary: 调用DescribeSecurityGroups查询您创建的安全组的基本信息。
   */
  export namespace DescribeSecurityGroups {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 安全组ID列表。一次最多支持100个安全组ID，ID之间用半角逗号（,）隔开，格式为JSON数组。 */
      SecurityGroupIds?: string;
      /** 安全组所在的专有网络ID。 */
      VpcId?: string;
      /** 安全组类型。取值范围：
      - normal：普通安全组。
      - enterprise：企业安全组。

      > 当不为该参数传值时，表示查询所有类型的安全组。 */
      SecurityGroupType?: string;
      /** 查询凭证（Token）。取值为上一次调用该接口返回的NextToken参数值，初次调用接口时无需设置该参数。 */
      NextToken?: string;
      /** 分页查询时每页的最大条目数。一旦设置该参数，即表示使用`MaxResults`与`NextToken`组合参数的查询方式。

      最大值为100。

      默认值为10。 */
      MaxResults?: number;
      /** 安全组的网络类型。取值范围：

      - vpc：专有网络。
      - classic：经典网络。 */
      NetworkType?: string;
      /** 安全组名称。 */
      SecurityGroupName?: string;
      /** 是否查询安全组的容量信息。传True时，返回值中的`EcsCount`和`AvailableInstanceAmount`有效。
      >该参数已废弃。 */
      IsQueryEcsCount?: boolean;
      /** 安全组所在的企业资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。您可以调用[ListResourceGroups](https://help.aliyun.com/document_detail/158855.html)查询资源组列表。

      >不支持默认资源组过滤。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 安全组的标签键。N的取值范围为1~20。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。 */
        Key?: string;
        /** 安全组的标签值。N的取值范围：1~20。 */
        Value?: string;
        /** 安全组的标签键。

        > 为提高兼容性，建议您尽量使用Tag.N.Key参数。 */
        key?: string;
        /** 安全组的标签值。

        > 为提高兼容性，建议您尽量使用Tag.N.Value参数。 */
        value?: string }>;
      /** 是否只预检此次请求。取值范围：
               
      - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
      - false：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。

      默认值为false。 */
      DryRun?: boolean;
      /** 安全组ID。 */
      SecurityGroupId?: string;
      /** >该参数已废弃。 */
      FuzzyQuery?: boolean;
      /** 安全组列表的页码。

      起始值为1。

      默认值为1。

      > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值为50。

      默认值为10。

      > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。 */
      PageSize?: number;
      ServiceManaged?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 本次调用返回的查询凭证（Token）。当使用MaxResults和NextToken方式进行分页查询，且该返回值为空时，表示无更多返回的数据信息。 */
      NextToken?: string;
      /** 当前页码。

      > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。 */
      PageNumber?: number;
      /** 每页行数。

      > 该参数即将下线，推荐您使用NextToken与MaxResults完成分页查询操作。 */
      PageSize?: number;
      /** 安全组所属地域ID。 */
      RegionId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 安全组信息集合。 */
      SecurityGroups?: Array<{
        /** 安全组中还可加入的私网IP数量，参见[安全组容量](https://help.aliyun.com/document_detail/605897.html#section-kj9-e46-6v5)。

        当入参IsQueryEcsCount传入True时，该参数返回值有效。

        > 该参数已废弃。返回值中的数量仅供参考，非实时一致。 */
        AvailableInstanceAmount?: number;
        /** 创建时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC时间。格式为：yyyy-MM-ddThh:mmZ。 */
        CreationTime?: string;
        /** 安全组描述信息。 */
        Description?: string;
        /** 安全组中已经容纳的私网IP数量，参见[安全组容量](https://help.aliyun.com/document_detail/605897.html#section-kj9-e46-6v5)。

        当入参IsQueryEcsCount传入True时，该参数返回值有效。

        > 该参数已废弃。返回值中的数量仅供参考，非实时一致。 */
        EcsCount?: number;
        /** 安全组所在的企业资源组ID。 */
        ResourceGroupId?: string;
        /** 安全组ID。 */
        SecurityGroupId?: string;
        /** 安全组名称。 */
        SecurityGroupName?: string;
        /** 安全组类型。可能值：

        - normal：普通安全组。
        - enterprise：企业安全组。 */
        SecurityGroupType?: string;
        /** 安全组对应的虚商ID。 */
        ServiceID?: number;
        /** 安全组的使用者是否为云产品或虚商。 */
        ServiceManaged?: boolean;
        /** 安全组的标签。 */
        Tags?: Array<{
          /** 安全组的标签键。 */
          TagKey?: string;
          /** 安全组的标签值。 */
          TagValue?: string }>;
        /** 安全组所属的专有网络。 */
        VpcId?: string }>;
      /** 安全组的总数。当您使用`MaxResults`与`NextToken`参数查询时，不会返回该参数值。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSendFileResults
   * ## 接口说明：
   * - 当您下发文件后，不代表文件一定成功下发。您需要通过接口返回值查看实际下发结果，并以实际输出结果为准。
   * - 您可以查询最近6周的下发记录。
   * @summary: 调用DescribeSendFileResults查询云助手下发文件列表及状态。
   */
  export namespace DescribeSendFileResults {
    export type Params = {
      /** ECS实例所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 文件下发的资源组ID。传入该参数后，需要在下发文件时指定ResourceGroupId，支持筛选出对应的文件下发结果。 */
      ResourceGroupId?: string;
      /** 执行ID。 */
      InvokeId?: string;
      /** 文件名称。传入该参数后，将查询该名称文件的所有的下发记录。 */
      Name?: string;
      /** 实例ID。传入该参数后，将查询该实例所有的文件下发记录。 */
      InstanceId?: string;
      /** 当前页码。

      起始值为1。

      默认值为1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值为50。

      默认值为10。 */
      PageSize?: number;
      /** 文件的总下发状态。总状态取决于本次下发的全部实例的共同执行状态，取值范围：

      - Pending：系统正在校验或下发文件。存在至少一台实例的文件下发状态为Pending，则总执行状态为Pending。
      - Running：正在实例上下发文件。存在至少一台实例的文件下发状态为Running，则总执行状态为Running。
      - Success：下发成功。各个实例上的文件下发状态均为Success，则总执行状态为Success。
      - Failed：下发失败。各个实例上的文件下发状态均为Failed，则总执行状态为Failed。
      - PartialFailed：部分实例文件下发成功且部分实例下发失败。各个实例的文件下发状态均为Success或Failed，则总执行状态为PartialFailed。 */
      InvocationStatus?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 文件下发的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个。使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。

        最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** 文件下发的标签值。N的取值范围为1~20。该值可以为空字符串。

        最多支持128个字符，不能包含`http://`或`https://`。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 文件下发记录。 */
      Invocations?: Array<{
        /** 文件内容。 */
        Content?: string;
        /** 文件内容类型。可能值：
        - PlainText：普通文本。
        - Base64：Base64编码。 */
        ContentType?: string;
        /** 文件下发任务创建时间。 */
        CreationTime?: string;
        /** 描述信息。 */
        Description?: string;
        /** 文件的用户组。 */
        FileGroup?: string;
        /** 文件的权限。 */
        FileMode?: string;
        /** 文件的用户。 */
        FileOwner?: string;
        /** 文件的总下发状态。总状态取决于本次下发的全部实例的共同执行状态，可能值：

        - Pending：系统正在校验或下发文件。存在至少一台实例的文件下发状态为Pending，则总执行状态为Pending。
        - Running：正在实例上下发文件。存在至少一台实例的文件下发状态为Running，则总执行状态为Running。
        - Success：各个实例上的文件下发状态均为Success，则总执行状态为Success。
        - Failed：各个实例上的文件下发状态均为Failed，则总执行状态为Failed。实例上的文件下发状态一项或多项为以下状态时，返回值均为Failed状态：
            - 指定文件参数有误，校验失败（Invalid）。
            - 向实例下发文件失败（Aborted）。
            - 文件在实例内创建失败（Failed）。
            - 下发文件超时（Timeout）。
            - 下发文件时发生异常无法继续（Error）。
        - PartialFailed：部分实例文件下发成功且部分实例下发失败。各个实例的文件下发状态均为Success或Failed，则总执行状态为PartialFailed。 */
        InvocationStatus?: string;
        /** 执行ID。 */
        InvokeId?: string;
        /** 下发文件目标实例集类型。 */
        InvokeInstances?: Array<{
          /** 文件下发任务的创建时间。 */
          CreationTime?: string;
          /** 文件下发的失败原因代码。可能值：

          - 空：文件下发正常。
          - InstanceNotExists：指定的实例不存在或已释放。
          - InstanceReleased：下发文件期间，该实例被释放。
          - InstanceNotRunning：创建下发文件任务时，该实例不在运行中。
          - AccountNotExists：指定的账号不存在。
          - ClientNotRunning：云助手Agent未运行。
          - ClientNotResponse：云助手Agent无响应。
          - ClientIsUpgrading：云助手Agent正在升级中。
          - ClientNeedUpgrade：云助手Agent需要升级。
          - DeliveryTimeout：发送文件超时。
          - FileCreateFail：文件创建失败。
          - FileAlreadyExists：相同路径下存在同名文件。
          - FileContentInvalid：文件内容不合法。
          - FileNameInvalid：文件名不合法。
          - FilePathInvalid：文件路径不合法。
          - FileAuthorityInvalid：文件权限不合法。
          - UserGroupNotExists：发送文件时指定的用户组不存在。 */
          ErrorCode?: string;
          /** 文件下发的失败或执行失败原因详情。可能值：

          - 空：文件下发正常。
          - the specified instance does not exists：指定的实例不存在或已释放。
          - the specified instance has been released.：下发文件期间，该实例被释放。
          - the instance is not running when create task：创建下发文件任务时，该实例不在运行中。
          - the specified account does not exists：指定的账号不存在。
          - the aliyun service is not running on the instance：云助手Agent未运行。
          - the aliyun service in the instance does not response：云助手Agent无响应。
          - the aliyun service in the instance is upgrading now：云助手Agent正在升级中。
          - the aliyun service in the instance need upgrade：云助手Agent需要升级。
          - the command delivery has been timeout：下发文件超时。
          - the file creation is failed due to unknown error：文件创建失败。
          - the authority of file is invalid：文件权限不合法。
          - File content is empty：文件内容为空。
          - the content of file is invalid：文件内容不合法。
          - File already exists：相同路径下存在同名文件。
          - File name is invalid：文件名不合法。
          - File path is invalid：文件路径不合法。
          - Owner not exists：用户不存在。
          - Group not exists：用户组不存在。
          - Mode is invalid：文件权限设置不合法。 */
          ErrorInfo?: string;
          /** 下发任务的结束时间。 */
          FinishTime?: string;
          /** 实例ID。 */
          InstanceId?: string;
          /** 单台实例下发任务的状态，可能值：
          - Pending：系统正在校验或下发文件。
          - Invalid：指定文件参数有误，校验失败。
          - Running：正在实例上下发文件。
          - Aborted：向实例下发文件失败。
          - Success：文件下发完成。
          - Failed：文件在实例内创建失败。
          - Error：下发文件时发生异常无法继续。
          - Timeout：下发文件超时。 */
          InvocationStatus?: string;
          /** 下发任务在实例中开始执行的时间。 */
          StartTime?: string;
          /** 任务状态的更新时间。 */
          UpdateTime?: string }>;
        /** 文件名称。 */
        Name?: string;
        /** 是否允许覆盖。 */
        Overwrite?: string;
        /** 文件下发的标签信息。 */
        Tags?: Array<{
          /** 文件下发的标签键。 */
          TagKey?: string;
          /** 文件下发的标签值。 */
          TagValue?: string }>;
        /** 目标路径。 */
        TargetDir?: string;
        /** 下发实例的数量。 */
        VmCount?: number }>;
      /** 查询结果的当前页码。 */
      PageNumber?: number;
      /** 每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 脚本总个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSnapshotGroups
   * ## 接口说明
   * 
   * `InstanceId`、`SnapshotGroupId.N`和`Status.N`不是必需的请求参数，但是可以构建过滤器逻辑，参数之间为逻辑与（And）关系。
   * @summary: 调用DescribeSnapshotGroups查询一个或多个快照一致性组的信息。
   */
  export namespace DescribeSnapshotGroups {
    export type Params = {
      /** 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 指定的实例ID。 */
      InstanceId?: string;
      /** 快照一致性组的名称。 */
      Name?: string;
      /** 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。 */
      NextToken?: string;
      /** 分页查询时每页行数。

      最大值为100。

      默认值为10。 */
      MaxResults?: number;
      /** 指定的快照一致性组ID。N的取值范围为1~10。 */
      SnapshotGroupId?: Array<string>;
      /** 快照一致性组的状态。N的取值范围为1~3。取值如下：

      - progressing：创建中。

      - accomplished：创建成功。

      - failed：创建失败。 */
      Status?: Array<string>;
      /** 该参数暂未开放使用。 */
      AdditionalAttributes?: Array<string>;
      /** 快照一致性组的标签键值对。 */
      Tag?: Array<{
        /** 快照一致性组的标签键。N的取值范围为1~20。 */
        Key?: string;
        /** 快照一致性组的标签值。N的取值范围为1~20。 */
        Value?: string }>;
      /** 快照一致性组所属的资源组ID。 */
      ResourceGroupId?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 下一个查询起始标志。

      > 该返回值为空时，表示无更多返回的数据信息。 */
      NextToken?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 快照一致性组的信息组成的数组。 */
      SnapshotGroups?: Array<{
        /** 创建时间。 */
        CreationTime?: string;
        /** 描述。 */
        Description?: string;
        /** 快照一致性组所属的实例ID。该参数仅当快照一致性组内的所有云盘快照属于同一实例时有返回值。如果您的快照一致性组内的多个云盘快照分别属于不同的ECS实例，则您可以通过返回结果中的`Snapshots.Snapshot.Tags.*`参数，查看组内单个快照所属的实例ID。 */
        InstanceId?: string;
        /** 快照一致性组的名称。 */
        Name?: string;
        /** > 该参数暂未开放使用。 */
        ProgressStatus?: string;
        /** 快照一致性组所属的资源组ID。 */
        ResourceGroupId?: string;
        /** 快照一致性组ID。 */
        SnapshotGroupId?: string;
        /** 快照一致性组中包含的快照信息组成的数组。 */
        Snapshots?: Array<{
          /** 快照是否可用于创建云盘、回滚云盘。可能值：

          - true：可用。
          - false：不可用。 */
          Available?: boolean;
          /** 是否开启了快照极速可用功能。可能值：

          - true：开启。仅ESSD云盘支持开启该功能。
          - false：关闭。即快照为未开启快照极速可用功能的普通快照。 */
          InstantAccess?: boolean;
          /** 快照极速可用功能的保留时间，保留时间到期后快照将自动释放。 */
          InstantAccessRetentionDays?: number;
          /** 快照创建进度，单位为百分比。 */
          Progress?: string;
          /** 快照ID。 */
          SnapshotId?: string;
          /** 源云盘ID。如果快照的源云盘已经被释放，该字段仍旧保留。 */
          SourceDiskId?: string;
          /** 源云盘类型。可能值：

          - system：系统盘。
          - data：数据盘。 */
          SourceDiskType?: string;
          /** 快照一致性组内各个快照的标签键值对。默认包含了快照来源的信息。 */
          Tags?: Array<{
            /** 快照一致性组内各个快照的标签键。Key和Value的默认值中提供了快照来源信息。 */
            Key?: string;
            /** 快照一致性组内各个快照的标签值。Key和Value的默认值中提供了快照来源信息。 */
            Value?: string }> }>;
        /** 快照一致性组的状态。可能值：

        - progressing：创建中。

        - accomplished：创建成功。

        - failed：创建失败。 */
        Status?: string;
        /** 快照一致性组的标签键值对。 */
        Tags?: Array<{
          /** 快照一致性组的标签键。 */
          Key?: string;
          /** 快照一致性组的标签值。 */
          Value?: string }> }> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSnapshotLinks
   * 调用该接口时，您需要注意：
   * 
   * -  请求参数`RegionId`、`DiskIds`和`InstanceId`等充当过滤器功能，参数间是逻辑与关系。  
   * 
   * -  如果不指定任何参数，则过滤器不起作用。当`DiskIds`和`SnapshotLinkIds`都为空数组时，同样视该过滤器有效，但是返回结果为空。
   * @summary: 调用DescribeSnapshotLinks查询云盘快照链。快照链是一块云盘所有快照组成的关系链，一块云盘对应一条快照链。
   */
  export namespace DescribeSnapshotLinks {
    export type Params = {
      /** 云盘所属于的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 实例ID。 */
      InstanceId?: string;
      /** 云盘ID。一次最多指定100个云盘ID。DiskIds参数取值格式为JSON数组，ID之间用半角逗号（,）隔开。  */
      DiskIds?: string;
      /** 快照链ID。一次最多指定100个快照ID。SnapshotLinkIds参数取值格式为JSON数组，ID之间用半角逗号（,）隔开。  */
      SnapshotLinkIds?: string;
      /** 云盘状态列表的页码。起始值：1

      默认值：1  */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。取值范围：1~100

      默认值：10 */
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 快照链列表的页码。 */
      PageNumber?: number;
      /** 输入时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 快照链信息组成的集合。 */
      SnapshotLinks?: Array<{
        /** 快照类型。

        > 该参数即将被弃用，为提高兼容性，建议您尽量使用参数`InstantAccess`。 */
        Category?: string;
        /** 实例ID。 */
        InstanceId?: string;
        /** 实例名称。 */
        InstanceName?: string;
        /** 是否开启了快照极速可用功能。可能值：

        - true：开启。仅ESSD云盘支持开启该功能。
        - false：关闭。即快照为未开启快照极速可用功能的普通快照。 */
        InstantAccess?: boolean;
        /** 快照链源云盘所属地域ID。 */
        RegionId?: string;
        /** 快照链ID。 */
        SnapshotLinkId?: string;
        /** 源云盘ID，如果快照的源云盘已经被删除，该字段仍旧保留。 */
        SourceDiskId?: string;
        /** 源云盘的名称。 */
        SourceDiskName?: string;
        /** 源云盘容量，单位为GiB。 */
        SourceDiskSize?: number;
        /** 源云盘的云盘类型。可能值：

        - system：系统盘
        - data：数据盘 */
        SourceDiskType?: string;
        /** 快照总个数。 */
        TotalCount?: number;
        /** 快照链中所有快照的大小，单位为Byte。 */
        TotalSize?: number }>;
      /** 快照链总个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSnapshotMonitorData
   * 调用该接口时，您需要注意：
   * 
   * - 每次最多返回400条监控数据，如果指定的参数`(EndTime - StartTime)/Period`大于400时，则返回错误。
   * 
   * - 单次最多能查询近30天内的监控信息，如果指定的参数`StartTime`超过30天，则返回错误。
   * @summary: 调用DescribeSnapshotMonitorData查询一个地域下近30天内的快照容量变化监控数据。
   */
  export namespace DescribeSnapshotMonitorData {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 获取快照容量变化数据的起始时间点。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果指定的秒（ss）不是 00，则自动换算为下一分钟。 */
      StartTime: string;
      /** 获取快照容量变化数据的结束时间点。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果指定的秒（ss）不是 00，则自动换算为下一分钟。 */
      EndTime: string;
      /** 获取快照容量变化数据的间隔时间，单位为秒。取值范围：
      - 60
      - 600
      - 3600

      默认值：60 */
      Period?: '60' | '600' | '3600';
      /** 快照类型。取值范围：
      - Standard：普通快照
      - Flash：本地快照

      默认值：Standard */
      Category?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 快照容量变化数据的集合。 */
      MonitorData?: Array<{
        /** 快照总容量，单位：字节（Byte）。 */
        Size?: number;
        /** 某一快照容量数值对应的时间戳。 */
        TimeStamp?: string }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSnapshotPackage
   * 调用DescribeSnapshotPackage查询您在一个阿里云地域下已经购买的OSS存储包。存储包可以用于抵扣普通快照存储容量，但不支持抵扣本地快照。
   * @summary: 调用DescribeSnapshotPackage查询您在一个阿里云地域下已经购买的OSS存储包。存储包可以用于抵扣普通快照存储容量，但不支持抵扣本地快照。
   */
  export namespace DescribeSnapshotPackage {
    export type Params = {
      /** OSS存储包列表的页码。起始值：1

      默认值：1 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。最大值：100

      默认值：10 */
      PageSize?: number;
      /** 快照所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** OSS存储包列表的页码。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 存储包信息组成的集合。 */
      SnapshotPackages?: Array<{
        /** 存储包名称。 */
        DisplayName?: string;
        /** 存储包的过期时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
        EndTime?: string;
        /** 存储包的最大容量。 */
        InitCapacity?: number;
        /** 存储包的购买时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
        StartTime?: string }>;
      /** 返回的OSS存储包总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSnapshots
   * ## 接口说明
   * 
   * `InstanceId`、`DiskId`和`SnapshotIds`不是必需的请求参数，但是可以构建过滤器逻辑，参数之间为逻辑与（And）关系。
   * 
   * 通过阿里云CLI调用API时，不同数据类型的请求参数取值必须遵循一定的格式要求，详情请参见[CLI参数格式说明](https://help.aliyun.com/document_detail/110340.html)。
   * @summary: 调用DescribeSnapshots查询一台ECS实例或一块云盘所有的快照列表。
   */
  export namespace DescribeSnapshots {
    export type Params = {
      /** 指定的实例ID。 */
      InstanceId?: string;
      /** 指定的云盘设备ID。 */
      DiskId?: string;
      /** 快照链ID。 */
      SnapshotLinkId?: string;
      /** 云盘所属于的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 快照标识编码。取值可以由多个快照ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。  */
      SnapshotIds?: string;
      /** 快照列表的页码。起始值：1。

      默认值：1 。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。最大值：100。

      默认值：10 。 */
      PageSize?: number;
      /** 查询起始标志。由上一次的请求结果中获取。 */
      NextToken?: string;
      /** 分页查询时每页行数。最大值：100。

      默认值：10。 */
      MaxResults?: number;
      /** 快照名称。 */
      SnapshotName?: string;
      /** 快照状态。取值范围： 
               
      - progressing：正在创建的快照。
      - accomplished：创建成功的快照。
      - failed：创建失败的快照。
      - all（默认）：所有快照状态。 */
      Status?: string;
      /** 快照创建类型。取值范围： 
               
      - auto：自动创建快照。
      - user：手动创建快照。
      - all（默认）：所有的快照创建类型。 */
      SnapshotType?: string;
      /** 查询资源时的筛选键，取值必须为`CreationStartTime`。同时设置`Filter.1.Key`和`Filter.1.Value`可以查询在指定时间点后创建的资源信息。 */
      'Filter.1.Key'?: string;
      /** 查询资源时的筛选键，取值必须为`CreationEndTime`。同时设置`Filter.2.Key`和`Filter.2.Value`可以查询在指定时间点前创建的资源信息。 */
      'Filter.2.Key'?: string;
      /** 查询资源时的筛选值。指定该参数时必须同时指定`Filter.1.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC +0时区。 */
      'Filter.1.Value'?: string;
      /** 查询资源时的筛选值。指定该参数时必须同时指定`Filter.2.Key`参数，格式为：`yyyy-MM-ddTHH:mmZ`，采用UTC +0时区。 */
      'Filter.2.Value'?: string;
      /** 快照是否被用作创建镜像或云盘。取值范围： 

      - image：使用快照创建了自定义镜像。
      - disk：使用快照创建了云盘。
      - image_disk：使用快照创建了数据盘和自定义镜像。
      - none：暂未使用。 */
      Usage?: string;
      /** 快照源云盘的云盘类型。取值范围： 
           
      - System：系统盘。
      - Data：数据盘。

      > 取值不区分大小写。 */
      SourceDiskType?: string;
      /** 是否过滤加密快照。默认值：false 。 */
      Encrypted?: boolean;
      /** 资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。

      >不支持默认资源组过滤。 */
      ResourceGroupId?: string;
      /** 是否只预检此次请求。

      - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
      - false（默认）：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。 */
      DryRun?: boolean;
      /** 数据盘对应的KMS密钥ID。 */
      KMSKeyId?: string;
      /** 快照类型。取值范围：
      - Standard：普通快照。
      - Flash：本地快照。

      原本地快照更替为快照极速可用功能。该参数说明如下：
      - 如果您在2020年12月14日之前使用过本地快照。您可以正常使用该参数。
      - 如果您在2020年12月14日之前未使用过本地快照。您不能使用该参数。

      更多信息，请参见[12月14日阿里云快照服务升级与新增计费项通知](https://help.aliyun.com/noticelist/articleid/1060755542.html)。> 该参数即将被弃用，为提高兼容性，建议您尽量使用其他参数。 */
      Category?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 快照的标签键。N的取值范围：1~20。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，请使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。 */
        Key?: string;
        /** 快照的标签值。N的取值范围：1~20。 */
        Value?: string;
        /** 资源的标签键。

        >为提高兼容性，建议您尽量使用Tag.N.Key参数。 */
        key?: string;
        /** 资源的标签值。

        >为提高兼容性，建议您尽量使用Tag.N.Value参数。 */
        value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 下一个查询起始标志。 */
      NextToken?: string;
      /** 快照列表的页码。 */
      PageNumber?: number;
      /** 输入时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 快照详情集合。 */
      Snapshots?: Array<{
        /** 快照是否可用于创建云盘、回滚云盘。可能值：

        - true：可用。
        - false：不可用。 */
        Available?: boolean;
        /** 快照类型。

        > 该参数即将被弃用，为提高兼容性，建议您尽量使用参数`InstantAccess`。 */
        Category?: string;
        /** 创建时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
        CreationTime?: string;
        /** 描述信息。 */
        Description?: string;
        /** 该快照是否加密。 */
        Encrypted?: boolean;
        /** 是否开启了快照极速可用功能。可能值：

        - true：开启。仅ESSD云盘支持开启该功能。
        - false：关闭。即快照为未开启快照极速可用功能的普通快照。 */
        InstantAccess?: boolean;
        /** 设置快照极速可用功能的保留时间，保留时间到期后自动关闭快照极速可用功能。

        默认与参数`RetentionDays`的值一致。 */
        InstantAccessRetentionDays?: number;
        /** 数据盘对应的KMS密钥ID。 */
        KMSKeyId?: string;
        /** 快照的最后变更时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
        LastModifiedTime?: string;
        /** 从云市场镜像继承的产品编号。 */
        ProductCode?: string;
        /** 快照创建进度，单位为百分比。 */
        Progress?: string;
        /** 正在创建的快照剩余完成时间，单位为秒。 */
        RemainTime?: number;
        /** 资源组ID。 */
        ResourceGroupId?: string;
        /** 自动快照保留天数。 */
        RetentionDays?: number;
        /** 快照ID。 */
        SnapshotId?: string;
        /** 快照显示名称。如果创建时指定了快照显示名称，则返回。 */
        SnapshotName?: string;
        /** 快照序列号。 */
        SnapshotSN?: string;
        /** 快照创建类型。可能值：

        - auto或者timer：自动创建快照。
        - user：手动创建快照。
        - all：所有的快照创建类型。 */
        SnapshotType?: string;
        /** 源云盘ID。如果快照的源云盘已经被释放，该字段仍旧保留。 */
        SourceDiskId?: string;
        /** 源云盘容量，单位：GiB。 */
        SourceDiskSize?: string;
        /** 源云盘属性。可能值：

        - system
        - data */
        SourceDiskType?: string;
        /** 源快照地域。 */
        SourceRegionId?: string;
        /** 源快照。 */
        SourceSnapshotId?: string;
        /** 原云盘类型。

        >该参数即将被弃用，为提高兼容性，建议您尽量使用其他参数。 */
        SourceStorageType?: string;
        /** 快照状态。可能值：

        - progressing
        - accomplished
        - failed */
        Status?: string;
        /** 标签。 */
        Tags?: Array<{
          /** 快照的标签键。 */
          TagKey?: string;
          /** 快照的标签值。 */
          TagValue?: string }>;
        /** 快照是否被用作创建镜像或云盘。可能值：

        - image
        - disk
        - image_disk
        - none */
        Usage?: string }>;
      /** 快照总个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSnapshotsUsage
   * 如果您想知道当前地域下每块磁盘的快照使用情况，推荐使用[DescribeSnapshotLinks](https://help.aliyun.com/document_detail/55837.html)查询快照链。
   * @summary: 调用DescribeSnapshotsUsage查询您在一个地域下的快照数量以及快照容量。
   */
  export namespace DescribeSnapshotsUsage {
    export type Params = {
      /** 快照所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 当前地域下的快照总数。 */
      SnapshotCount?: number;
      /** 当前地域下已产生的快照容量，单位Byte。 */
      SnapshotSize?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSpotAdvice
   * ## 接口说明
   * 
   * - 您可以通过该接口查询抢占式实例近30天的信息，便于您合理选择抢占式实例的实例规格。支持查询的信息包括：
   *     - 实例平均释放率。
   *     - 实例平均折扣率。
   *     - 通过折扣率计算出的平均价格。
   * - 仅支持查询专有网络VPC、I/O优化的抢占式实例。
   * - 您可以通过以下任一方式查询抢占式实例近30天的信息：
   *     - 设置`Cores`、`Memory`两参数或`MinCores`、`MinMemory`两参数，查询符合vCPU及内存要求的实例规格信息。
   *     - 设置`InstanceTypes.N`查询指定的实例规格信息。
   *     - 设置`Cores`、`Memory`两参数或`MinCores`、`MinMemory`两参数后，再设置`InstanceTypeFamily`或`InstanceFamilyLevel`，查询某一实例规格族或某一级别内，符合vCPU及内存要求的实例规格信息。
   * @summary: 调用DescribeSpotAdvice查询指定地域下，抢占式实例近30天的实例平均释放率、平均折扣率等信息。
   */
  export namespace DescribeSpotAdvice {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例规格的vCPU数量。取值请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。 */
      Cores?: number;
      /** 实例规格的内存大小。单位：GiB。取值请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。 */
      Memory?: number;
      /** 实例规格的vCPU数量的最小值。取值请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。 */
      MinCores?: number;
      /** 实例规格的内存大小的最小值。取值请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。 */
      MinMemory?: number;
      /** 可用区ID。

      默认值：无，即查询指定地域下的所有可用区。 */
      ZoneId?: string;
      /** 实例规格族。取值请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。 */
      InstanceTypeFamily?: string;
      /** 实例规格族级别。取值范围：

      - EntryLevel：入门级。
      - EnterpriseLevel：企业级。
      - CreditEntryLevel：积分入门级。更多信息，请参见[突发性能实例](https://help.aliyun.com/document_detail/59977.html)。

      默认值：无，即查询所有级别。 */
      InstanceFamilyLevel?: string;
      /** GPU计算卡的类型。取值范围：

      - NVIDIA P4
      - NVIDIA T4
      - NVIDIA P100 
      - NVIDIA V100

      默认值：无，即查询所有类型。更多信息，请参见[GPU计算型实例概述](https://help.aliyun.com/document_detail/108496.html)。 */
      GpuSpec?: string;
      /** GPU实例对应的GPU数量。取值请参见[GPU计算型实例概述](https://help.aliyun.com/document_detail/108496.html)。 */
      GpuAmount?: number;
      /** 实例规格列表。最多可输入10个实例规格。 */
      InstanceTypes?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 可用区及其对应的抢占式实例相关信息组成的数组。

      > 返回值的顺序按照实例规格的历史平均折扣率排序。 */
      AvailableSpotZones?: Array<{
        /** 近30天抢占式实例的释放率、折扣率等信息组成的数组。 */
        AvailableSpotResources?: Array<{
          /** 近30天抢占式实例的均价相比按量付费实例价格的折扣率。单位：%。可能值：1~100。

          您可以根据该返回值计算抢占式实例的均价。例如，按量付费实例的价格为1，该返回值为20（即20%），则近30天抢占式实例的均价为0.2。 */
          AverageSpotDiscount?: number;
          /** 实例规格。 */
          InstanceType?: string;
          /** 近30天抢占式实例的释放率的范围，对应`InterruptionRate`返回值。可能值：

          - 0-3%
          - 3-5%
          - 5-10%
          - 10-100% */
          InterruptRateDesc?: string;
          /** 近30天抢占式实例的平均释放率。单位：%。 */
          InterruptionRate?: number }>;
        /** 可用区ID。 */
        ZoneId?: string }>;
      /** 地域ID。 */
      RegionId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSpotPriceHistory
   * 调用DescribeSpotPriceHistory查询抢占式实例近30天内的历史价格。
   * @summary: 调用DescribeSpotPriceHistory查询抢占式实例近30天内的历史价格。
   */
  export namespace DescribeSpotPriceHistory {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 可用区ID。 */
      ZoneId?: string;
      /** 抢占式实例网络类型。取值范围：

      - classic：表示抢占式实例的网络类型为经典网络。

      - vpc：表示抢占式实例的网络类型为专有网络。 */
      NetworkType: string;
      /** 实例规格。 */
      InstanceType: string;
      /** 抢占式实例的保留时长，单位为小时。取值范围：0~6

      - 保留时长2~6正在邀测中，如需开通请提交工单。
      - 取值为0，则为无保护期模式。

      默认值：1。 */
      SpotDuration?: number;
      /** 是否为I/O优化实例。取值范围：

      - optimized：表示抢占式实例为I/O优化实例。

      - none：表示抢占式实例为非I/O优化实例。

      系列I实例默认值：none。

      其余实例规格族默认值：optimized。 */
      IoOptimized?: string;
      /** 查询抢占式实例历史价格的起始时间，最大值不得超过指定的结束时间30天。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。

      默认值：空，空代表结束时间前3小时。 */
      StartTime?: string;
      /** 查询抢占式实例历史价格的结束时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC +0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。

      默认值：空，空表示当前时间。 */
      EndTime?: string;
      /** 操作系统的发行平台类型。取值范围：

      - linux。
      - windows。 */
      OSType?: string;
      /** 查询开始行。

      默认值：0 */
      Offset?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 价格的货币单位。

      中国站：CNY。

      国际站：USD。 */
      Currency?: string;
      /** 下一页开始行，查询下一页的数据。参数`Offset`的指定值为该值。 */
      NextOffset?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 抢占价格详情。 */
      SpotPrices?: Array<{
        /** 抢占式实例的实例规格。 */
        InstanceType?: string;
        /** 抢占式实例是否为I/O优化实例。 */
        IoOptimized?: string;
        /** 抢占式实例的网络类型。 */
        NetworkType?: string;
        /** 按量付费实例部分原价。 */
        OriginPrice?: number;
        /** 抢占式实例价格。 */
        SpotPrice?: number;
        /** 时间格式为`yyyy-MM-ddTHH:mm:ssZ`的价格时间。 */
        Timestamp?: string;
        /** 抢占式实例所属的可用区ID。 */
        ZoneId?: string }> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeStorageCapacityUnits
   * 查询一个或多个存储容量单位包SCU的详细信息。
   * @summary: 查询一个或多个存储容量单位包SCU的详细信息。
   */
  export namespace DescribeStorageCapacityUnits {
    export type Params = {
      /** SCU所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** SCU列表的页码。

      起始值：1。

      默认值：1。 */
      PageNumber?: number;
      /** 分页查询时的每页行数。

      最大值：100。

      默认值：10。 */
      PageSize?: number;
      /** SCU的名称，长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http:/`/或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      Name?: string;
      /** SCU容量大小，单位为GiB。取值范围：{20, 40, 100, 200, 500, 1024, 2048, 5120, 10240, 20480, 51200}。 */
      Capacity?: number;
      /** 分配类型。取值范围：

      - Normal：查询当前阿里云账号下的SCU。
      - Shared：查询已经建立阿里云账号与RAM用户共享的SCU。

      默认值：Normal。 */
      AllocationType?: string;
      /** 一个或多个SCU ID。N的取值范围：1~100。 */
      StorageCapacityUnitId?: Array<string>;
      /** 一个或多个SCU的状态值，N取值范围为1~4。状态的取值范围：

      - Creating：创建中。
      - Active：启用中。
      - Expired：已过期。
      - Pending：待生效。 */
      Status?: Array<string>;
      /** 标签列表 */
      Tag?: Array<{
        /** SCU的标签键。N表示可以设置多个标签键进行查询，N的取值范围：1~20。 */
        Key?: string;
        /** SCU的标签值。N表示可以设置多个标签值进行查询，且与`Tag.N.Key`的N对应，N的取值范围：1~20。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** SCU列表的页码。 */
      PageNumber?: number;
      /** 分页查询时的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 由StorageCapacityUnits组成的数组格式，返回SCU的详细信息。 */
      StorageCapacityUnits?: Array<{
        /** 当AllocationType值为Shared时，该参数表示SCU的分配状态。可能值：
        - allocated：已分配给其他用户的SCU。
        - beAllocated：被其他用户分配的SCU。 */
        AllocationStatus?: string;
        /** SCU的容量。 */
        Capacity?: number;
        /** SCU的创建时间。 */
        CreationTime?: string;
        /** SCU的描述信息。 */
        Description?: string;
        /** SCU的到期时间。 */
        ExpiredTime?: string;
        /** SCU的名称。 */
        Name?: string;
        /** SCU的所属地域ID。 */
        RegionId?: string;
        /** SCU的开始生效时间。
         */
        StartTime?: string;
        /** SCU的状态。 */
        Status?: string;
        /** SCU的ID。 */
        StorageCapacityUnitId?: string;
        /** SCU标签键值对。 */
        Tags?: Array<{
          /** SCU的标签键。 */
          TagKey?: string;
          /** SCU的标签值。 */
          TagValue?: string }> }>;
      /** SCU总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeStorageSetDetails
   * （Beta）调用DescribeStorageSetDetails查询一个存储集内云盘或共享块存储的详细信息。
   * @summary: （Beta）调用DescribeStorageSetDetails查询一个存储集内云盘或共享块存储的详细信息。
   */
  export namespace DescribeStorageSetDetails {
    export type Params = {
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 存储集所属地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 存储集ID。 */
      StorageSetId: string;
      /** 存储集内的最大分区数。 */
      StorageSetPartitionNumber?: number;
      /** 云盘或共享块存储ID列表。取值可以由多块云盘或共享块存储ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。 */
      DiskIds?: string;
      /** 存储集列表的页码。

      起始值：1

      默认值：1 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      最大值：100

      默认值：10 */
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 由Disk组成的数组格式，返回存储集内云盘或共享块存储的详细信息。 */
      Disks?: Array<{
        /** 云盘或共享块存储种类。 */
        Category?: string;
        /** 云盘或共享块存储创建时间。 */
        CreationTime?: string;
        /** 云盘或共享块存储ID。 */
        DiskId?: string;
        /** 云盘或共享块存储名称。 */
        DiskName?: string;
        /** 云盘或共享块存储所属地域。 */
        RegionId?: string;
        /** 存储集ID。 */
        StorageSetId?: string;
        /** 存储集分区数。 */
        StorageSetPartitionNumber?: number;
        /** 云盘或共享块存储所属可用区。 */
        ZoneId?: string }>;
      /** 存储集列表的页数。 */
      PageNumber?: number;
      /** 单页返回的条数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 存储集总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeStorageSets
   * （Beta）调用DescribeStorageSets查询一个或多个存储集信息，包括所属地域、所属可用区、创建时间和最大分区数等信息。
   * @summary: （Beta）调用DescribeStorageSets查询一个或多个存储集信息，包括所属地域、所属可用区、创建时间和最大分区数等信息。
   */
  export namespace DescribeStorageSets {
    export type Params = {
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 存储集所属地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 存储集ID列表。取值可以由多个存储集ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。 */
      StorageSetIds?: string;
      /** 存储集所属可用区。您可以调用[DescribeZones](https://help.aliyun.com/document_detail/25610.html)查询最新的可用区列表。 */
      ZoneId?: string;
      /** 存储集名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。 */
      StorageSetName?: string;
      /** 存储集列表的页码。起始值：1

      默认值：1 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数，最大值：100

      默认值：10 */
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 存储集列表的页码。 */
      PageNumber?: number;
      /** 单页返回的条目数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 由StorageSet组成的数组格式，返回存储集详细信息。 */
      StorageSets?: Array<{
        /** 存储集创建时间。 */
        CreationTime?: string;
        /** 存储集描述信息。 */
        Description?: string;
        /** 存储集所属地域ID。 */
        RegionId?: string;
        /** 存储集ID。 */
        StorageSetId?: string;
        /** 存储集名称。 */
        StorageSetName?: string;
        /** 存储集支持的最大分区数。 */
        StorageSetPartitionNumber?: number;
        /** 存储集所属可用区ID。 */
        ZoneId?: string }>;
      /** 存储集总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeTags
   * 如果您指定了标签键（Tag.N.Key）但没有指定标签值（Tag.N.Value），我们将查询该标签键对应的所有标签键值对。如果您指定了标签键值对，就查询精确匹配该键值对的标签。
   * @summary: 查询可以供您使用的标签。您可以根据资源类型、资源ID、标签键或标签值等条件查询标签，筛选条件之间为逻辑与（&amp;&amp;）关系，返回满足所有筛选条件的标签。
   */
  export namespace DescribeTags {
    export type Params = {
      /**  分页查询时设置的每页行数。

      最大值：100。

      默认值：50 。 */
      PageSize?: number;
      /**  标签列表的页码。

      起始值：1。

      默认值：1 。 */
      PageNumber?: number;
      /** 资源类型定义。取值范围：

      - instance：ECS实例。
      - disk：磁盘。
      - snapshot：快照。
      - image：镜像。
      - securitygroup：安全组。
      - volume：存储卷。
      - eni：弹性网卡。
      - ddh：专有宿主机。
      - keypair：SSH密钥对。
      - launchtemplate：启动模板。
      - reservedinstance：预留实例券。
      - snapshotpolicy：自动快照策略。

      以上取值均为小写。  */
      ResourceType?: string;
      /** 标签绑定的资源ID。例如，当资源类型（ResourceType）为实例（instance）时，资源ID可以理解为实例ID。  */
      ResourceId?: string;
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 
      > 该参数即将被弃用，为提高兼容性，建议您尽量使用其他参数。 */
      Category?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 资源的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以aliyun和acs:开头，不能包含http://或者https://。 */
        Key?: string;
        /** 资源的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。 */
        Value?: string;
        /** 资源的标签键。

        >为提高兼容性，建议您尽量使用Tag.N.Key参数。 */
        key?: string;
        /** 资源的标签值。

        >为提高兼容性，建议您尽量使用Tag.N.Value参数。 */
        value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 标签列表的页码。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 满足所有筛选条件的标签。 */
      Tags?: Array<{
        /** 资源类型计数。 */
        ResourceTypeCount?: {
          /** 该标签标记了多少专有宿主机。 */
          Ddh?: number;
          /** 该标签标记了多少磁盘。 */
          Disk?: number;
          /** 该标签标记了多少弹性网卡。 */
          Eni?: number;
          /** 该标签标记了多少镜像。 */
          Image?: number;
          /** 该标签标记了多少实例。 */
          Instance?: number;
          /** 该标签标记了多少密钥对。 */
          KeyPair?: number;
          /** 该标签标记了多少启动模板。 */
          LaunchTemplate?: number;
          /** 该标签标记了多少预留实例券。 */
          ReservedInstance?: number;
          /** 该标签标记了多少安全组。 */
          Securitygroup?: number;
          /** 该标签标记了多少快照。 */
          Snapshot?: number;
          /** 该标签标记了多少自动快照策略。 */
          SnapshotPolicy?: number;
          /** 该标签标记了多少存储卷。 */
          Volume?: number };
        /** 标签键。 */
        TagKey?: string;
        /** 标签值。 */
        TagValue?: string }>;
      /** 标签总个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeTaskAttribute
   * 调用DescribeTaskAttribute查询异步任务的详细信息。目前，可以查询的异步任务有导入镜像（ImportImage）、导出镜像（ExportImage）及变更云盘类型（ModifyDiskSpec）。
   * @summary: 调用DescribeTaskAttribute查询异步任务的详细信息。目前，可以查询的异步任务有导入镜像（ImportImage）、导出镜像（ExportImage）及变更云盘类型（ModifyDiskSpec）。
   */
  export namespace DescribeTaskAttribute {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 任务ID。您可以调用[DescribeTasks](https://help.aliyun.com/document_detail/25622.html)查看任务ID。  */
      TaskId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 任务创建时间。 */
      CreationTime?: string;
      /** 失败任务数。 */
      FailedCount?: number;
      /** 任务完成时间。 */
      FinishedTime?: string;
      /** 返回任务包含的信息，其中包括每一个子任务的状态和相关信息。 */
      OperationProgressSet?: Array<{
        /** 错误代码。 */
        ErrorCode?: string;
        /** 错误信息。 */
        ErrorMsg?: string;
        /** 操作状态。 */
        OperationStatus?: string;
        /** 资源信息类型。 */
        RelatedItemSet?: Array<{
          /** 相关项名称。 */
          Name?: string;
          /** 相关项值。 */
          Value?: string }> }>;
      /** 地域ID。 */
      RegionId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 成功任务数。 */
      SuccessCount?: number;
      /** 是否可以取消任务（[CancelTask](https://help.aliyun.com/document_detail/25624.html)）。取值范围： 
               
      - true：可以取消 
      - false：无法取消 
                */
      SupportCancel?: string;
      /** 任务操作的接口名称。 */
      TaskAction?: string;
      /** 任务ID。 */
      TaskId?: string;
      /** 任务进程。 */
      TaskProcess?: string;
      /** 任务状态。 */
      TaskStatus?: string;
      /** 任务总数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeTasks
   * 调用DescribeTasks查询一个或多个异步请求的进度。
   * @summary: 调用DescribeTasks查询一个或多个异步请求的进度。
   */
  export namespace DescribeTasks {
    export type Params = {
      /** 查询结果的页码。

      起始值：1。

      默认值：1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页记录数。

      最大值：100。

      默认值：10。 */
      PageSize?: number;
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 任务ID。单次最多支持指定100个，ID之间使用半角逗号（,）分隔。 */
      TaskIds?: string;
      /** 任务操作的接口名称。取值范围：

      - ImportImage：导入镜像。
      - ExportImage：导出镜像。
      - RedeployInstance：重新部署ECS实例。
      - ModifyDiskSpec：变更云盘类型。 */
      TaskAction?: string;
      /** 任务状态。取值范围：

      - Finished：已完成。
      - Processing：运行中。
      - Failed：失败。

      默认值：无。

      > 只支持查询状态为Finished、Processing和Failed的任务，填入其他取值将不会生效。 */
      TaskStatus?: string;
      /** 按创建时间查询，创建时间区间的起始点。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
      StartTime?: string;
      /** 按创建时间查询，创建时间区间的终止点。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
      EndTime?: string;
      /** 资源ID。N的取值范围：1~100。 */
      ResourceIds?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 分页查询的当前页码。 */
      PageNumber?: number;
      /** 当前分页包含多少条目。 */
      PageSize?: number;
      /** 地域ID。 */
      RegionId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 任务集合。 */
      TaskSet?: Array<{
        /** 创建时间。 */
        CreationTime?: string;
        /** 结束时间。 */
        FinishedTime?: string;
        /** 资源ID。 */
        ResourceId?: string;
        /** 是否支持取消任务。 */
        SupportCancel?: string;
        /** 任务名称。 */
        TaskAction?: string;
        /** 任务ID。 */
        TaskId?: string;
        /** 任务状态。 */
        TaskStatus?: string }>;
      /** 返回结果的总条目数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeUserBusinessBehavior
   * undefined
   * @deprecated
   */
  export namespace DescribeUserBusinessBehavior {
    export type Params = {
      RegionId?: string;
      statusKey: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string;
      StatusValue?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeUserData
   * -   返回的实例自定义数据将以Base64编码的方式显示。
   * -   如果实例不存在自定义数据，则返回空值。
   * @summary: 调用DescribeUserData查询一台ECS实例的自定义数据。
   */
  export namespace DescribeUserData {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 要查询的实例ID。 */
      InstanceId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例ID。 */
      InstanceId?: string;
      /** 地域ID。 */
      RegionId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 实例的自定义数据。 */
      UserData?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeVRouters
   * undefined
   * @deprecated
   */
  export namespace DescribeVRouters {
    export type Params = {
      VRouterId?: string;
      RegionId: string;
      PageNumber?: number;
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      PageNumber?: number;
      PageSize?: number;
      RequestId?: string;
      TotalCount?: number;
      VRouters?: Array<{
        CreationTime?: string;
        Description?: string;
        RegionId?: string;
        RouteTableIds?: Array<string>;
        VRouterId?: string;
        VRouterName?: string;
        VpcId?: string }> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeVSwitches
   * undefined
   * @deprecated
   */
  export namespace DescribeVSwitches {
    export type Params = {
      VpcId?: string;
      VSwitchId?: string;
      ZoneId?: string;
      RegionId?: string;
      IsDefault?: boolean;
      PageNumber?: number;
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      PageNumber?: number;
      PageSize?: number;
      RequestId?: string;
      TotalCount?: number;
      VSwitches?: Array<{
        AvailableIpAddressCount?: number;
        CidrBlock?: string;
        CreationTime?: string;
        Description?: string;
        IsDefault?: boolean;
        ResourceGroupId?: string;
        Status?: string;
        VSwitchId?: string;
        VSwitchName?: string;
        VpcId?: string;
        ZoneId?: string }> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeVirtualBorderRouters
   * undefined
   * @deprecated
   */
  export namespace DescribeVirtualBorderRouters {
    export type Params = {
      RegionId: string;
      PageNumber?: number;
      PageSize?: number;
      Filter?: Array<{
        Key?: string;
        Value?: Array<string> }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      PageNumber?: number;
      PageSize?: number;
      RequestId?: string;
      TotalCount?: number;
      VirtualBorderRouterSet?: Array<{
        AccessPointId?: string;
        ActivationTime?: string;
        CircuitCode?: string;
        CreationTime?: string;
        Description?: string;
        LocalGatewayIp?: string;
        Name?: string;
        PeerGatewayIp?: string;
        PeeringSubnetMask?: string;
        PhysicalConnectionBusinessStatus?: string;
        PhysicalConnectionId?: string;
        PhysicalConnectionOwnerUid?: string;
        PhysicalConnectionStatus?: string;
        RecoveryTime?: string;
        RouteTableId?: string;
        Status?: string;
        TerminationTime?: string;
        VbrId?: string;
        VlanId?: number;
        VlanInterfaceId?: string }> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeVirtualBorderRoutersForPhysicalConnection
   * undefined
   * @deprecated
   */
  export namespace DescribeVirtualBorderRoutersForPhysicalConnection {
    export type Params = {
      RegionId: string;
      PhysicalConnectionId: string;
      PageNumber?: number;
      PageSize?: number;
      Filter?: Array<{
        Key?: string;
        Value?: Array<string> }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      PageNumber?: number;
      PageSize?: number;
      RequestId?: string;
      TotalCount?: number;
      VirtualBorderRouterForPhysicalConnectionSet?: Array<{
        ActivationTime?: string;
        CircuitCode?: string;
        CreationTime?: string;
        RecoveryTime?: string;
        TerminationTime?: string;
        VbrId?: string;
        VbrOwnerUid?: number;
        VlanId?: number }> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeVpcs
   * undefined
   * @deprecated
   */
  export namespace DescribeVpcs {
    export type Params = {
      VpcId?: string;
      RegionId: string;
      IsDefault?: boolean;
      PageNumber?: number;
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      PageNumber?: number;
      PageSize?: number;
      RequestId?: string;
      TotalCount?: number;
      Vpcs?: Array<{
        CidrBlock?: string;
        CreationTime?: string;
        Description?: string;
        IsDefault?: boolean;
        RegionId?: string;
        Status?: string;
        UserCidrs?: Array<string>;
        VRouterId?: string;
        VSwitchIds?: Array<string>;
        VpcId?: string;
        VpcName?: string }> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeZones
   * DescribeZones仅查询阿里云提供的可用区列表并返回少量库存信息。如果您需要查询具体可用区下可购买的实例规格和云盘规格，推荐您使用[DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html)。
   * @summary: 调用DescribeZones查询一个阿里云地域下的可用区。
   */
  export namespace DescribeZones {
    export type Params = {
      /** 可用区所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 是否展示详细信息。

      - true：展示。
      - false：不展示。

      默认值：true。 */
      Verbose?: boolean;
      /** 可用区里支持的资源计费方式。更多信息，请参见[计费概述](https://help.aliyun.com/document_detail/25398.html)。取值范围： 

      - PrePaid：包年包月 
      - PostPaid：按量付费

      默认值：PostPaid */
      InstanceChargeType?: string;
      /** 按量付费实例的竞价策略。当`InstanceChargeType=PostPaid`时，您可以传入该参数。更多信息，请参见[抢占式实例](https://help.aliyun.com/document_detail/52088.html)。取值范围：
               
      - NoSpot：正常按量付费实例。
      - SpotWithPriceLimit：设置上限价格的抢占式实例。
      - SpotAsPriceGo：系统自动出价，最高按量付费价格。

      默认值：NoSpot */
      SpotStrategy?: string;
      /**  根据汉语、英语和日语筛选返回结果。更多信息，请参见[RFC7231](https://tools.ietf.org/html/rfc7231)。取值范围：  
               
      - zh-CN 
      - en-US 
      - ja 

      默认值：zh-CN */
      AcceptLanguage?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 可用区及可用区下支持的资源信息集合。 */
      Zones?: Array<{
        /** 支持的专有宿主机规格列表。 */
        AvailableDedicatedHostTypes?: Array<string>;
        /** 允许创建的云盘种类集合。可能值：

        - cloud：普通云盘
        - cloud_ssd：SSD云盘
        - cloud_efficiency：高效云盘
        - cloud_essd：ESSD云盘 */
        AvailableDiskCategories?: Array<string>;
        /** 当前可用区下可创建的所有规格列表。 */
        AvailableInstanceTypes?: Array<string>;
        /** 允许创建的资源类型。可能值：

        - VSwitch：交换机
        - IoOptimized：I/O优化实例
        - Instance：实例
        - DedicatedHost：专有宿主机
        - Disk：云盘 */
        AvailableResourceCreation?: Array<string>;
        /** 可供创建的具体资源组成的数组。 */
        AvailableResources?: Array<{
          /** 允许创建的数据盘类型。 */
          DataDiskCategories?: Array<string>;
          /** 支持的实例规格族代数列表。 */
          InstanceGenerations?: Array<string>;
          /** 允许创建的实例规格族列表。 */
          InstanceTypeFamilies?: Array<string>;
          /** 实例规格列表。 */
          InstanceTypes?: Array<string>;
          /** 是否为I/O优化实例。 */
          IoOptimized?: boolean;
          /** 支持的网络类型列表。 */
          NetworkTypes?: Array<string>;
          /** 系统盘类型列表。 */
          SystemDiskCategories?: Array<string> }>;
        /** 支持的共享存储类型。 */
        AvailableVolumeCategories?: Array<string>;
        /** 支持的专有宿主机代数列表。 */
        DedicatedHostGenerations?: Array<string>;
        /** 可用区本地语言名。 */
        LocalName?: string;
        /** 可用区ID。 */
        ZoneId?: string;
        /** 可用区类型。可能值：

        - AvailabilityZone：公共云可用区。
        - CloudBoxZone：云盒可用区。
         */
        ZoneType?: string }> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DetachClassicLinkVpc
   * 调用DetachClassicLinkVpc取消一台经典网络类型ECS实例与专有网络VPC的连接（ClassicLink）。取消ClassicLink后，经典网络类型实例无法与VPC内的实例互通。
   * @summary: 调用DetachClassicLinkVpc取消一台经典网络类型ECS实例与专有网络VPC的连接（ClassicLink）。取消ClassicLink后，经典网络类型实例无法与VPC内的实例互通。
   */
  export namespace DetachClassicLinkVpc {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 经典网络类型实例ID。 */
      InstanceId: string;
      /** 实例连接的VPC ID。 */
      VpcId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DetachDisk
   * 调用该接口时，请注意：
   * 
   * - 云盘必须已经挂载到实例上，状态为使用中（`In_Use`)。 
   * - 卸载数据盘时，所挂载的实例必须处于**运行中**（`Running`）或者**已停止**（`Stopped`）状态。 
   * - 卸载系统盘时，所挂载的实例必须处于**已停止**（`Stopped`）状态。 
   * - 所挂载的实例被安全控制后，`OperationLocks`中不能标记为`"LockReason" : "security"`的锁定状态。
   * - DetachDisk是异步操作，调用接口成功后等待一分钟左右才能完成卸载。
   * @summary: 调用DetachDisk从一台ECS实例上卸载一块按量付费数据盘，或者卸载一块系统盘。
   */
  export namespace DetachDisk {
    export type Params = {
      /** 待卸载的ECS实例ID。 */
      InstanceId: string;
      /** 待卸载的云盘ID。 */
      DiskId: string;
      /** 卸载系统盘时，设置自动释放属性。表示释放ECS实例时，是否同时释放该系统盘。

      - true：释放。
      - false：不释放。云盘被转换为按量付费数据盘被保留下来。

      默认值：true

      您需要注意：

      - 开启多重挂载特性的云盘，不支持设置该参数。
      - 如果卸载的是数据盘，默认值为`false`。  */
      DeleteWithInstance?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DetachInstanceRamRole
   * 调用DetachInstanceRamRole回收一台或多台ECS实例的实例RAM角色。
   * @summary: 调用DetachInstanceRamRole回收一台或多台ECS实例的实例RAM角色。
   */
  export namespace DetachInstanceRamRole {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 收回赋予了某一实例RAM角色的所有ECS实例。您可以使用RAM API [ListRoles](https://help.aliyun.com/document_detail/28713.html)查询您已创建的实例RAM角色。 */
      RamRoleName?: string;
      /** 指定收回的实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。 */
      InstanceIds: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 由实例RAM角色类型（DetachInstanceRamRoleResult）组成的信息集。 */
      DetachInstanceRamRoleResults?: Array<{
        /** 判断是否成功收回实例RAM角色。返回值为200表示成功收回，返回其他值表示收回失败，失败原因参见错误码。 */
        Code?: string;
        /** 准备收回实例RAM角色的ECS实例。 */
        InstanceId?: string;
        /** 实例的RAM角色集合。 */
        InstanceRamRoleSets?: Array<{
          /** 实例ID。 */
          InstanceId?: string;
          /** 收回实例RAM角色的名称。 */
          RamRoleName?: string }>;
        /** 判断是否成功收回实例RAM角色。返回值为Success表示成功收回，返回其他值表示收回失败，失败原因参见错误码。 */
        Message?: string;
        /** 是否成功回收了指定的实例角色。 */
        Success?: boolean }>;
      /** 收回失败的实例RAM角色的个数。 */
      FailCount?: number;
      /** 收回实例RAM角色的名称。 */
      RamRoleName?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 收回的实例RAM角色的总个数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DetachKeyPair
   * 使用该接口时，请注意：
   * 
   * -  解绑SSH密钥对后，您需要重启实例（[RebootInstance](https://help.aliyun.com/document_detail/25502.html)）使更改生效。  
   * -  解绑SSH密钥对后，实例默认使用用户名和密码的验证方式。
   * @summary: 调用DetachKeyPair为一台或者多台Linux实例解绑SSH密钥对。
   */
  export namespace DetachKeyPair {
    export type Params = {
      /** SSH密钥对所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** SSH密钥对名称。 */
      KeyPairName: string;
      /** 解绑SSH密钥对的实例ID。取值可以是由多台实例ID组成的一个JSON数组，最多支持50个ID，ID之间用半角逗号（,）隔开。  */
      InstanceIds: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 解绑密钥对失败的实例数量。 */
      FailCount?: string;
      /** 密钥对的名称。 */
      KeyPairName?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 解绑密钥对成功或失败的结果集合。 */
      Results?: Array<{
        /** 传递的操作状态码，其中200表示操作成功。 */
        Code?: string;
        /** 实例ID。 */
        InstanceId?: string;
        /** 传递的操作信息。例如，当`Code=200`时，`Message`为`successful`。 */
        Message?: string;
        /** 此次操作是否成功。 */
        Success?: string }>;
      /** 解绑密钥对的实例总数量。 */
      TotalCount?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DetachNetworkInterface
   * ## 接口描述
   * 
   * 调用该接口时，您需要注意：
   * 
   * -  不允许分离实例主网卡。
   * 
   * -  弹性网卡必须处于分离中（Detaching）或者已附加（InUse）状态。 
   * 
   * -  实例必须处于运行中（Running）或者已停止（Stopped）状态。 
   * 
   * -  本接口为异步接口，调用成功后，您可以通过查询弹性网卡状态或监听网卡操作事件来感知操作结果， 弹性网卡状态机如下图所示：
   * ![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/file-manage-files/zh-CN/20221124/mvga/DetachNetworkInterface.jpg)
   * 
   *     - Detaching状态说明分离弹性网卡请求发送成功，弹性网卡正在从ECS实例分离。
   * 
   *     - Available状态说明弹性网卡从ECS实例分离成功。
   * 
   *     - 若弹性网卡长时间为Detaching状态，可能是因为实例内部的操作系统不响应网卡的分离请求等原因导致了分离失败。此时，您可以对该弹性网卡重新发起分离请求，若长时间不成功的话，可以尝试重启实例后重试。   
   * 
   * **调用示例详情参见**[分离弹性网卡](https://help.aliyun.com/document_detail/471551.html)。
   * @summary: 调用DetachNetworkInterface从一台ECS实例上分离一个弹性网卡（ENI）。
   */
  export namespace DetachNetworkInterface {
    export type Params = {
      /** 资源所属地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 弹性网卡ID。 */
      NetworkInterfaceId: string;
      /** 实例ID。 */
      InstanceId: string;
      /** 中继网卡ID。
      >该参数暂未上线，不支持使用。 */
      TrunkNetworkInstanceId?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DisableActivation
   * ## 接口说明
   * 
   * 如果您担心已创建的激活码存在泄露的风险，可以通过该接口禁用激活码。禁用后无法再通过该激活码注册新的托管实例，但不会影响已经注册的托管实例。
   * @summary: 调用DisableActivation手动禁用指定的激活码。
   */
  export namespace DisableActivation {
    export type Params = {
      /** 地域ID。目前支持的地域：华北1（青岛）、华北2（北京）、华北3（张家口）、华北5（呼和浩特）、华北6（乌兰察布）、华东1（杭州）、华东2（上海）、华南1（深圳）、华南2（河源）、华南3（广州）、西南1（成都）、中国香港、新加坡、日本（东京）、美国（硅谷）、美国（弗吉尼亚）。

      您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看地域对应的ID等信息。 */
      RegionId: string;
      /** 激活码ID。 */
      ActivationId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 激活码及使用情况信息组成的集合。 */
      Activation?: {
        /** 激活码ID。 */
        ActivationId?: string;
        /** 创建时间。 */
        CreationTime?: string;
        /** 已注销的实例数。 */
        DeregisteredCount?: number;
        /** 激活码对应的描述。 */
        Description?: string;
        /** 激活码是否被禁用。 */
        Disabled?: boolean;
        /** 激活码用于注册托管实例的使用次数上限。 */
        InstanceCount?: number;
        /** 默认的实例名称前缀。 */
        InstanceName?: string;
        /** 允许使用该激活码的主机IP。 */
        IpAddressRange?: string;
        /** 已注册的实例数。 */
        RegisteredCount?: number;
        /** 激活码的有效时间。单位：小时。 */
        TimeToLiveInHours?: number };
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/EipFillParams
   * undefined
   * @deprecated
   */
  export namespace EipFillParams {
    export type Params = {
      data: string;
      ClientToken?: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      code?: string;
      data?: string;
      message?: string;
      requestId?: string;
      success?: boolean };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/EipFillProduct
   * undefined
   * @deprecated
   */
  export namespace EipFillProduct {
    export type Params = {
      data: string;
      ClientToken?: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      code?: string;
      data?: string;
      message?: string;
      requestId?: string;
      success?: boolean };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/EipNotifyPaid
   * undefined
   * @deprecated
   */
  export namespace EipNotifyPaid {
    export type Params = {
      data: string;
      ClientToken?: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      code?: string;
      data?: string;
      message?: string;
      requestId?: string;
      success?: boolean };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/EnablePhysicalConnection
   * undefined
   * @deprecated
   */
  export namespace EnablePhysicalConnection {
    export type Params = {
      RegionId: string;
      PhysicalConnectionId: string;
      ClientToken: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ExportImage
   * 导出镜像前：
   * 
   * - 您需要先了解前提条件以及注意事项。更多信息，请参见[导出镜像](https://help.aliyun.com/document_detail/58181.html)。
   * 
   * - 您必须通过RAM授权云服务器ECS写入OSS的权限。具体操作说明如下：
   * 
   *     1.  创建角色：`AliyunECSImageExportDefaultRole`（其他任何角色名称无效），为该角色设置以下角色策略：
   * 
   *         ```json
   *          {
   *            "Statement": [
   *              {
   *                "Action": "sts:AssumeRole",
   *                "Effect": "Allow",
   *                "Principal": {
   *                  "Service": [
   *                    "ecs.aliyuncs.com"
   *                  ]
   *                }
   *              }
   *            ],
   *            "Version": "1"
   *          }
   *         ```
   * 
   *     2.  在角色`AliyunECSImageExportDefaultRole`下加入默认的系统权限策略：`AliyunECSImageExportRolePolicy`，该策略是云服务器ECS提供导出镜像的默认策略。更多详情，请参见[云资源访问授权](https://ram.console.aliyun.com/?spm=5176.2020520101.0.0.64c64df5dfpmdY#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunECSImageImportDefaultRole%22,%20%22TemplateId%22:%20%22ECSImportRole%22%7D,%20%22request2%22:%20%7B%22RoleName%22:%20%22AliyunECSImageExportDefaultRole%22,%20%22TemplateId%22:%20%22ECSExportRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fecs.console.aliyun.com%2F%22,%20%22Service%22:%20%22ECS%22%7D)。您也可以创建自定义策略，权限需要包含：
   * 
   *         ```json
   *          {
   *            "Version": "1",
   *            "Statement": [
   *              {
   *                "Action": [
   *                  "oss:GetObject",
   *                  "oss:PutObject",
   *                  "oss:DeleteObject",
   *                  "oss:GetBucketLocation",
   *                  "oss:GetBucketInfo",
   *                  "oss:AbortMultipartUpload",
   *                  "oss:ListMultipartUploads",
   *                  "oss:ListParts"
   *                ],
   *                "Resource": "*",
   *                "Effect": "Allow"
   *              }
   *            ]
   *          }
   *         ```
   * 
   * 导出镜像后：
   * 
   * 自定义镜像将保存在指定的OSS bucket中，您可以下载自定义镜像。具体操作，请参见[下载自定义镜像文件](https://help.aliyun.com/document_detail/31912.html)。
   * @summary: 导出一份自定义镜像到与自定义镜像同一地域的OSS Bucket里。
   */
  export namespace ExportImage {
    export type Params = {
      /** 自定义镜像的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 自定义镜像ID。 */
      ImageId: string;
      /** 保存导出镜像的OSS bucket。 */
      OSSBucket: string;
      /** 您的OSS  Object的前缀。可以由数字或者字母组成，字符长度为1~30。 */
      OSSPrefix?: string;
      /** 镜像文件的导出格式。取值范围：
      - raw。
      - vhd。
      - qcow2。
      - vmdk。
      - vdi。

      默认值：raw。 */
      ImageFormat?: string;
      /** 导出镜像时使用的RAM角色名称。 */
      RoleName?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 地域ID。 */
      RegionId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 导出镜像任务ID。 */
      TaskId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ExportSnapshot
   * undefined
   * @deprecated
   */
  export namespace ExportSnapshot {
    export type Params = {
      SnapshotId: string;
      RegionId: string;
      OssBucket: string;
      RoleName?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string;
      TaskId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/GetInstanceConsoleOutput
   * - 云服务器ECS是虚拟化的云上服务，无法接入显示设备，也无法手动截屏。但是阿里云缓存了实例最近一次启动、重启或者关机时的系统命令行输出，您可以调用GetInstanceConsoleOutput获取。
   * 
   * - [已停售的实例规格](https://help.aliyun.com/document_detail/55263.html)无法获取系统命令行输出。
   * 
   * - Windows实例不支持获取系统命令行输出。
   * @summary: 获取一台实例的系统命令行输出，数据以Base64编码后返回。
   */
  export namespace GetInstanceConsoleOutput {
    export type Params = {
      /** 实例所在地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例ID。 */
      InstanceId: string;
      /** 是否去除返回文本中的排版符号。取值范围：
      - true：去除
      - false：不去除

      默认值：false */
      RemoveSymbols?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例的系统命令行输出，根据Base64编码后输出。 */
      ConsoleOutput?: string;
      /** 实例ID。 */
      InstanceId?: string;
      /** 该字段记录的是Linux内核日志打印最后一条日志时的北京时间，格式为yyyy-MM-dd HH:mm:ss。 */
      LastUpdateTime?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/GetInstanceScreenshot
   * 云服务器ECS返回Base64编码后的JPG图像格式的实例截屏后，您需要自行解码。您可以在排查故障时调用该接口，并请注意：
   * 
   * - 实例必须处于运行中（Running）状态。 
   * 
   * - [已停售的实例规格](https://help.aliyun.com/document_detail/55263.html)无法获取截屏信息。 
   * 
   * - 在同一台实例中多次调用该接口时，调用的间隔时间至少10秒，否则将返回错误码`Throttling`。
   * @summary: 调用GetInstanceScreenshot获取实例的截屏信息。
   */
  export namespace GetInstanceScreenshot {
    export type Params = {
      /** 实例所在地域ID。您可以调用 [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) 查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例ID。 */
      InstanceId: string;
      /** 是否唤醒处于休眠状态的实例。

      默认值：false */
      WakeUp?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例ID。 */
      InstanceId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** JPG图像格式的实例截屏，返回Base64编码后的图像。 */
      Screenshot?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ImportImage
   * ### 接口说明
   * 
   * 调用该接口时，您需要注意：
   * 
   * - 您必须提前上传镜像文件到对象存储OSS。具体操作，请参见[上传文件](https://help.aliyun.com/document_detail/31886.html)。
   * 
   * - 为避免部分服务器、虚拟机或者云主机的操作系统在导入自定义镜像后，创建的ECS实例无法启动，您需要在导入镜像前检查是否需要在源服务器中安装virtio驱动。具体操作，请参见[安装virtio驱动](https://help.aliyun.com/document_detail/62423.html)。
   * 
   * - 首次导入镜像时，您必须提前通过访问控制RAM授权ECS访问您的OSS Bucket，否则会报错`NoSetRoletoECSServiceAcount`。您可以通过RAM管理控制台一键完成授权操作，具体的授权页面，请参见[云资源访问授权](https://ram.console.aliyun.com/?spm=5176.2020520101image.0.0.2ffa4df57kSoHX#/role/authorize?request=%7B%22Requests%22%3A%20%7B%22request1%22%3A%20%7B%22RoleName%22%3A%20%22AliyunECSImageImportDefaultRole%22%2C%20%22TemplateId%22%3A%20%22ECSImportRole%22%7D%2C%20%22request2%22%3A%20%7B%22RoleName%22%3A%20%22AliyunECSImageExportDefaultRole%22%2C%20%22TemplateId%22%3A%20%22ECSExportRole%22%7D%7D%2C%20%22ReturnUrl%22%3A%20%22https%3A//ecs.console.aliyun.com/%22%2C%20%22Service%22%3A%20%22ECS%22%7D)。您也可以手动完成授权操作，部分操作中策略与权限如下所示。具体操作，请参见[账号访问控制](https://help.aliyun.com/document_detail/25481.html)。
   * 
   *     1. 创建角色`AliyunECSImageImportDefaultRole`（必须是这个名称，否则导入镜像会失败），角色的策略为：
   *         ```
   *         {
   * 			"Statement": [
   * 			{
   * 				"Action": "sts:AssumeRole",
   * 				"Effect": "Allow",
   * 				"Principal": {
   * 				"Service": [
   * 					"ecs.aliyuncs.com"
   * 				]
   * 				}
   * 			}
   *         ],
   * 			"Version": "1"
   *         }
   *         ```
   * 
   *     2. 在该角色下，添加系统策略`AliyunECSImageImportRolePolicy`。您也可以创建自定义策略，权限必须包含：
   *         ```
   * 
   *         {
   * 			"Version": "1",
   * 			"Statement": [
   * 			{
   * 				"Action": [
   *         				"oss:GetObject",
   *         				"oss:GetBucketLocation",
   *         				"oss:GetBucketInfo"
   * 			],
   *         			"Resource": "*",
   *         			"Effect": "Allow"
   *         			}
   * 			]
   *         }
   *         
   *         ```
   * 
   * - 不能删除正在导入的镜像，只能调用[CancelTask](https://help.aliyun.com/document_detail/25624.html)取消导入镜像任务。
   * 
   * - 导入镜像的地域必须跟镜像文件上传的OSS Bucket的地域相同。
   * 
   * - 参数`DiskDeviceMapping.N`中N的取值范围为1~17。N为1时表示系统盘，N为2~17时表示数据盘。
   * 
   * - 当参数`Architecture`取值为`arm64`，或者参数`Platform`取值为`CentOS Stream`、`Anolis`、`AlmaLinux`、`UOS`、`Kylin`或`Rocky Linux`时，您需要注意：
   * 
   *     - 为了使导入后的镜像支持配置密码或者支持修改密钥对，镜像必须满足以下条件：
   * 
   *         - 操作系统的内核需要支持`CONFIG_FW_CFG_SYSFS`特性。Linux社区内核4.6版本之后默认支持该特性，CentOS的内核在3.10.0-826.el7版本之后默认支持该特性。您可以在该镜像对应的服务器内运行`grep -nr CONFIG_FW_CFG_SYSFS /boot/config-$(uname -r)`命令，如果回显结果中包含`CONFIG_FW_CFG_SYSFS=y`信息，则说明该镜像中的内核已支持`CONFIG_FW_CFG_SYSFS`特性。
   * 
   * 
   *         - 操作系统中已安装阿里云最新版本cloud-init。其中，19.1版本cloud-init必须在19.1.3版本及以上，部分低版本操作系统中的0.7.6a版本cloud-init必须在0.7.6a15版本及以上。具体操作，请参见[安装cloud-init](https://help.aliyun.com/document_detail/57803.html)。
   * 
   *         - 操作系统需要支持SHA-512加密算法。
   * 
   *     - 为了使导入后的镜像支持扩容云盘与扩容文件系统，镜像必须满足以下条件：
   * 
   *         - 操作系统的内核版本需要高于3.6版本。
   * 
   *         - 支持growpart命令。支持该命令需要安装`cloud-utils-growpart`包，不同操作系统安装方式有所不同。具体操作，请参见[扩展分区和文件系统_Linux系统盘](https://help.aliyun.com/document_detail/111738.html)。
   * 
   *         - 支持resize2fs命令。支持该命令需要安装`e2fsprogs`包，该包在操作系统中默认已安装，如果没有安装您需要自行安装。
   * 
   *         - 操作系统中已安装阿里云最新版本cloud-init。其中，19.1版本cloud-init必须在19.1.3版本及以上，部分低版本操作系统中的0.7.6a版本cloud-init必须在0.7.6a15版本及以上。具体操作，请参见[安装cloud-init](https://help.aliyun.com/document_detail/57803.html)。
   * - 如果您待导入的自定义镜像对应的系统架构为arm64时，您需要设置其RTC时钟使用UTC时间标准。具体操作，请参见[Linux时间和时区说明](https://icms.alibaba-inc.com/content/ecs/image?l=1&m=4656&n=3385033)。
   * @summary: 调用ImportImage导入一份您的本地镜像文件到云服务器ECS，作为自定义镜像出现在相应地域中。您可以使用导入的镜像创建ECS实例（RunInstances），或者更换实例的系统盘（ReplaceSystemDisk）。
   */
  export namespace ImportImage {
    export type Params = {
      /** 源自定义镜像的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 镜像名称。长度为2~128个字符。必须以大小字母或中文开头，不能以`aliyun`或`acs:`开头，不能包含`http://`或者`https://`。可以包含数字、半角句号（.）、半角冒号（:）、下划线（_）或者短划线（-）。 */
      ImageName?: string;
      /** 镜像的描述信息。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
      Description?: string;
      /** 系统架构。取值范围： 

      - i386。
      - x86_64。
      - arm64。

      默认值：x86_64。 */
      Architecture?: string;
      /** 操作系统平台类型。取值范围： 

      - windows。
      - linux。

      默认值：linux。 */
      OSType?: string;
      /** 操作系统发行版。取值范围： 
      - Aliyun
      - Anolis
      - CentOS
      - Ubuntu
      - CoreOS
      - SUSE
      - Debian
      - OpenSUSE
      - FressBSD
      - RedHat
      - Kylin
      - UOS
      - Fedora
      - Fedora CoreOS
      - CentOS Stream
      - AlmaLinux
      - Rocky Linux
      - Gentoo
      - Customized Linux
      - Others Linux
      - Windows Server 2022
      - Windows Server 2019
      - Windows Server 2016
      - Windows Server 2012
      - Windows Server 2008
      - Windows Server 2003

      默认值：Others Linux */
      Platform?: string;
      /** 修改镜像的启动模式。取值范围：

      - BIOS：BIOS启动模式。
      - UEFI：UEFI启动模式。

      默认值：BIOS。如果`Architecture=arm64`，则该参数默认值为UEFI，且只能设置为UEFI。

      > 您需要了解指定的镜像支持的启动模式，当通过该参数修改启动模式后，必须与镜像本身支持的启动模式匹配，实例才能正常启动。 */
      BootMode?: string;
      /** 导入镜像时，使用的RAM角色名称。 */
      RoleName?: string;
      /** 导入镜像后，激活操作系统采用的许可证类型。取值范围：

      - Auto：由阿里云检测源操作系统并分配许可证。自动模式下，系统优先搜索您设置的`Platform`是否有阿里云官方渠道的许可证并分配给导入的镜像，如果缺乏该类许可，会切换成BYOL（Bring Your Own License）方式。
      - Aliyun：根据您设置的`Platform`采用阿里云官方渠道的许可证。
      - BYOL：源操作系统自带的许可证。采用BYOL时，您必须确保您的许可证密钥支持在阿里云使用。

      默认值：Auto。

       */
      LicenseType?: string;
      /** 导入镜像所在的企业资源组ID。 */
      ResourceGroupId?: string;
      /** 创建的自定义镜像信息列表。 */
      DiskDeviceMapping?: Array<{
        /** 指定DiskDeviceMapping.N.Device在自定义镜像中的设备名。

        > 该参数即将停止使用，为提高代码兼容性，建议您尽量不要使用该参数。 */
        Device?: string;
        /** 自定义镜像大小。

        >该参数即将被弃用，为提高兼容性，请尽量使用`DiskDeviceMapping.N.DiskImageSize`参数。 */
        DiskImSize?: number;
        /** 导入镜像后，自定义镜像的空间大小。

        该空间由系统盘和数据盘组成，您必须保证系统盘的空间大小大于等于导入的镜像文件大小。取值范围：

        - N=1时，表示系统盘，取值范围：5 GiB~500 GiB。
        - N=2~17时，表示数据盘。取值范围：5 GiB~2000 GiB。

        当您将源镜像文件上传至OSS后，可以在OSS Bucket中查看镜像文件的大小。 */
        DiskImageSize?: number;
        /** 镜像格式。取值范围：

        - RAW。
        - VHD。
        - QCOW2。

        默认值：无，表示阿里云自动检测镜像格式，以检测格式为准。 */
        Format?: string;
        /** 镜像文件所在的OSS Bucket。

        > 首次导入镜像到该OSS Bucket前，请参见本文档的**接口说明**添加RAM授权策略，否则会报错`NoSetRoletoECSServiceAcount`。 */
        OSSBucket?: string;
        /** 镜像上传至OSS Bucket后，保存在Bucket中的镜像文件的文件名（key）。 */
        OSSObject?: string }>;
      /** 镜像的标签列表。 */
      Tag?: Array<{
        /** 镜像的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https://`。 */
        Key?: string;
        /** 镜像的标签值。N的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。 */
        Value?: string }>;
      /** 镜像检测策略，不配置此参数时不触发检测。当前仅支持检测Linux操作系统镜像，并且仅支持标准（Standard）检测模式。 

      标准检测模式覆盖的检测项如下：
      - Virtio：Virtio驱动是否安装。
      - Fstab：系统挂载文件配置是否正常。
      - Grub：启动引导配置是否正常。
      - SystemImage：否为有效的系统文件，如ISO文件、裸盘等。
      - CloudInit：CloudInit服务是否安装。
      - NVMe：NVMe驱动是否安装。
      - Selinux：Selinux是否打开。
      - OnlineResizeFS：是否支持根分区自动扩容。
      - Dhcp：网卡DHCP配置是否打开。
      - RtcTimeMode：系统硬件时钟时区。
      - Platform：系统平台，如Linux、Windows。  
      - OSVersion：操作系统版本，如Centos 7.9。  
      - Architecture：系统架构，如Arm、x86_64。
      - BootMode：启动模式，如UEFI、Legacy。
      - KernelVersion：内核版本。
      - CloudAssistant：是否安装云助手。
      - SecurityCenterAgent：是否安装云安全中心。 */
      DetectionStrategy?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 镜像ID。 */
      ImageId?: string;
      /** 地域ID。 */
      RegionId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 导入镜像任务ID。 */
      TaskId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ImportKeyPair
   * 调用该接口时，您需要注意：
   * 
   * - 您在每个地域的密钥对数最高为500对。
   * - 导入的密钥对必须支持下列任一种加密方式：
   *     - rsa
   *     - dsa
   *     - ssh-rsa
   *     - ssh-dss
   *     - ecdsa
   *     - ssh-rsa-cert-v00@openssh.com
   *     - ssh-dss-cert-v00@openssh.com
   *     - ssh-rsa-cert-v01@openssh.com
   *     - ssh-dss-cert-v01@openssh.com
   *     - ecdsa-sha2-nistp256-cert-v01@openssh.com
   *     - ecdsa-sha2-nistp384-cert-v01@openssh.com
   *     - ecdsa-sha2-nistp521-cert-v01@openssh.com
   * @summary: 调用ImportKeyPair导入由其他工具产生的RSA密钥对的公钥部分。导入密钥对后，阿里云为您保管公钥部分，您需要自行妥善保存密钥对的私钥部分。
   */
  export namespace ImportKeyPair {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 密钥对名称。必须保持名称唯一性。 长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      KeyPairName: string;
      /** 密钥对的公钥内容。 */
      PublicKeyBody: string;
      /** SSH密钥对所在的企业资源组ID。 */
      ResourceGroupId?: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 密钥对的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。 */
        Key?: string;
        /** 密钥对的标签值。N的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或者https://。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 密钥对的指纹。根据RFC 4716定义的公钥指纹格式，采用MD5信息摘要算法。 */
      KeyPairFingerPrint?: string;
      /** 密钥对名称。 */
      KeyPairName?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/InstallCloudAssistant
   * ## 接口说明
   * 
   * 调用InstallCloudAssistant接口后再调用[RebootInstance](https://help.aliyun.com/document_detail/25502.html)，安装云助手Agent的操作即可生效。
   * @summary: 调用InstallCloudAssistant为一台或多台ECS实例安装云助手Agent。需要重启实例来完成安装云助手Agent的操作。
   */
  export namespace InstallCloudAssistant {
    export type Params = {
      /** 实例所在地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 实例ID列表。列表元素数量为1~50。 */
      InstanceId: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/InvokeCommand
   * ## 接口说明
   * 
   * - 对目标ECS实例有如下限制。选择了多台ECS实例后，若其中某台实例不满足执行条件，您需要重新调用接口。
   * 
   *     - 状态必须为运行中（`Running`），您可以调用[DescribeInstances](https://help.aliyun.com/document_detail/25506.html)查询。
   * 
   *     - 已预先安装[云助手Agent](https://help.aliyun.com/document_detail/64921.html)。 
   * 
   *     - 执行类型为PowerShell的命令时，实例必须已经配置了PowerShell模块。 
   * 
   * - 单次执行：只执行一次命令。
   * - 定时执行：
   *     - 根据参数Frequency指定的时间频率定时执行，上次的执行结果不会对下一次执行产生任何影响。
   *     - 当您基于Cron表达式执行定时任务且指定了时区，时钟定时执行时间设置基准为您指定的时区；当您没有指定时区时，时钟定时执行时间设置基准为ECS实例内的系统时区，且执行时间以实例的系统时间为准。请确保ECS实例的时间或者时区与您预期的时间一致。更多关于时区的详情，Linux实例请参见[设置Linux实例时区和NTP服务](https://help.aliyun.com/document_detail/92803.html)，Windows实例请参见[设置Windows实例NTP服务](https://help.aliyun.com/document_detail/51890.html)。
   * 
   *      云助手Agent版本不低于以下对应的版本才能支持定时任务的新特性（固定时间间隔执行、仅在指定时间执行一次、基于Cron表达式定时执行时指定年份或时区）。如果结果返回ClientNeedUpgrade错误码，请参见[升级或禁止升级云助手Agent](https://help.aliyun.com/document_detail/134383.html)，将客户端更新至最新版本。
   * 
   *     - Linux：2.2.3.282。
   *     - Windows：2.1.3.282。
   * 
   * - 命令可能会因为目标实例的状态异常、网络异常或云助手Agent异常而出现无法执行的情况，无法执行时不会生成执行信息。更多信息，请参见[执行失败常见错误及修复建议](https://help.aliyun.com/document_detail/87029.html)。 
   * 
   * - 当您创建命令时启用了自定义参数功能，需要在执行命令时传入自定义参数（`Parameters`）。
   * 
   * - 建议您先调用[DescribeCloudAssistantStatus](https://help.aliyun.com/document_detail/87346.html)查询实例的云助手状态，当CloudAssistantStatus为true时再执行命令，尤其对于新购实例。
   * @summary: 调用InvokeCommand为一台或多台ECS实例触发一条云助手命令。
   */
  export namespace InvokeCommand {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 命令执行的资源组ID，当指定该参数时：

      - InstanceId对应的ECS实例必须属于该资源组。

      - 支持通过指定该参数筛选出对应的命令执行结果（通过调用[DescribeInvocations](https://help.aliyun.com/document_detail/64840.html)或[DescribeInvocationResults](https://help.aliyun.com/document_detail/64845.html)）。 */
      ResourceGroupId?: string;
      /** 命令ID。您可以通过接口[DescribeCommands](https://help.aliyun.com/document_detail/64843.html)查询所有可用的CommandId。 

      >对于公共命令，可以通过命令名称执行。更多信息，请参见[查看和执行云助手公共命令](https://help.aliyun.com/document_detail/429635.html)。 */
      CommandId: string;
      /** 设置命令执行的方式。取值范围：

      - Once：立即执行命令。
      - Period：定时执行命令。当该参数取值为`Period`时，必须同时指定`Frequency`参数。
      - NextRebootOnly：当实例下一次启动时，自动执行命令。
      - EveryReboot：实例每一次启动都将自动执行命令。

      默认值：

      - 当不指定`Frequency`参数时，默认值为`Once`。
      - 当指定`Frequency`参数时，无论是否已设置了该参数值，都将按照`Period`处理。

      注意事项：

      - 您可以调用[StopInvocation](https://help.aliyun.com/document_detail/64838.html)停止待执行的命令或定时执行的命令。
      - 当该参数取值`Period`或者`EveryReboot`时，您可以调用[DescribeInvocationResults](https://help.aliyun.com/document_detail/64845.html)，然后指定`IncludeHistory=true`查看命令定时执行的历史记录。 */
      RepeatMode?: string;
      /** >该参数已废弃，传入该参数不会生效。 */
      Timed?: boolean;
      /** 定时执行命令的执行时间。目前支持三种定时执行方式：固定时间间隔执行（基于Rate表达式）、仅在指定时间执行一次、基于时钟定时执行（基于Cron表达式）。

      - 固定时间间隔执行：基于Rate表达式，按照设置的时间间隔执行命令。时间间隔支持按秒（s） 、分钟（m） 、小时（h）和天（d）来选择，适用于在固定时间间隔执行任务的场景。格式为`rate(<执行间隔数值><执行间隔单位>)`，例如5分钟执行一次，格式为`rate(5m)`。使用固定时间间隔执行有以下限制：
          - 设置的时间间隔不大于7天、不小于60秒，且需大于定时任务的超时时间。
          - 执行间隔只基于固定频率，与任务实际执行需要的时间无关。例如设置每5分钟执行一次命令，任务需要2分钟执行完成，则在任务完成3分钟后继续执行下一轮。
          - 创建任务时不会立即执行。例如设置每5分钟执行一次命令，创建任务时不会立即执行一次命令，而是在任务创建完成后的5分钟后开始执行。

      - 仅在指定时间执行一次：按照设置的时区和执行时间点执行一次命令。格式为`at(yyyy-MM-dd HH:mm:ss <时区>)`，即`at(年-月-日 时:分:秒 <时区>)`。如果不指定时区，默认为UTC时区。时区支持以下三种形式：
          - 时区全称：  例如`Asia/Shanghai`（中国/上海时间）、`America/Los_Angeles`（美国/洛杉矶时间）等。
          - 时区相对于格林威治时间的偏移量：  例如`GMT+8:00`（东八区）、`GMT-7:00`（西七区）等。使用GMT格式时，小时位不支持添加前导零。
          - 时区缩写：  仅支持UTC（协调世界时间）。

        如果指定在中国/上海时间2022年06月06日13时15分30秒执行一次，格式为：`at(2022-06-06 13:15:30 Asia/Shanghai)`；如果指定在西七区2022年06月06日13时15分30秒执行一次，格式为：`at(2022-06-06 13:15:30 GMT-7:00)`。

      - 基于时钟定时执行（基于Cron表达式）：基于Cron表达式，按照设置的定时任务执行命令。格式为`<秒> <分钟> <小时> <日期> <月份> <星期> <年份（可选）> <时区>`，即`<Cron表达式> <时区>`。在指定的时区下，根据Cron表达式推算定时任务执行时间并执行。若不指定时区，默认为执行定时任务实例的系统内部时区。关于Cron表达式的更多信息，请参见[Cron表达式](https://help.aliyun.com/document_detail/64769.html)。时区支持以下三种形式：
          - 时区全称：  例如`Asia/Shanghai`（中国/上海时间）、`America/Los_Angeles`（美国/洛杉矶时间）等。
          - 时区相对于格林威治时间的偏移量：  例如`GMT+8:00`（东八区）、`GMT-7:00`（西七区）等。使用GMT格式时，小时位不支持添加前导零。
          - 时区缩写：  仅支持UTC（协调世界时间）。
        例如，在中国/上海时间，2022年每天上午10:15执行一次命令，格式为`0 15 10 ? * * 2022 Asia/Shanghai`；在东八区时间，2022年每天上午10:00到11:30每隔半小时执行，格式为`0 0/30 10-11 * * ? 2022 GMT+8:00`；在UTC时间，从2022年开始，每隔两年的10月每天下午14:00到下午14:55时间段内每隔5分钟执行，格式为`0 0/5 14 * 10 ? 2022/2 UTC`。

          >设置的最小时间间隔需大于或等于定时任务的超时时间，且不小于10秒。 */
      Frequency?: string;
      /** 启用自定义参数功能时，执行命令时传入的自定义参数的键值对。自定义参数的个数范围为0~10。

      - Map的键不允许为空字符串，最多支持64个字符。
      - Map的值允许为空字符串。
      - 自定义参数与原始命令内容在Base64编码后，综合长度不能超过18 KB。
      - 设置的自定义参数名集合必须为创建命令时定义的参数集的子集。对于未传入的参数，您可以使用空字符串代替。

      您可以取消设置该参数从而禁用自定义参数。 */
      Parameters?: object;
      /** 在ECS实例中执行命令的用户名称。长度不得超过255个字符。

      - Linux系统的ECS实例，默认以root用户执行命令。
      - Windows系统的ECS实例，默认以System用户执行命令。

      您也可以指定实例中已存在的其他用户执行命令，以普通用户执行云助手命令更加安全。更多信息，请参见[设置普通用户执行云助手命令](https://help.aliyun.com/document_detail/203771.html)。 */
      Username?: string;
      /** 在Windows实例中执行命令的用户的密码名称。长度不得超过255个字符。

      当您希望以非默认用户（System）在Windows实例中执行命令时，需要同时传入`Username`和该参数。为降低密码泄露的风险，需要将密码明文托管在运维编排服务的参数仓库中，此处仅传入密码的名称。更多信息，请参见[加密参数](https://help.aliyun.com/document_detail/186828.html)以及[设置普通用户执行云助手命令](https://help.aliyun.com/document_detail/203771.html)。

      > 当您使用Linux实例的root用户或Windows实例的System用户执行命令时，不需要传递该参数。 */
      WindowsPasswordName?: string;
      /** 需要执行命令的实例列表，最多能指定50台实例ID。N的取值范围为1~50。 */
      InstanceId: Array<string>;
      /** 容器ID。仅支持64位16进制字符串。支持使用`docker://`、`containerd://`或者`cri-o://`前缀来表示指定的容器运行时。

      注意事项：
      - 如果指定了该参数，云助手将在实例的指定容器内执行脚本。
      - 如果指定了该参数，仅支持在云助手Agent版本不低于2.2.3.344的Linux实例内运行。

          - 查看云助手Agent版本的具体操作，请参见[安装云助手Agent](https://help.aliyun.com/document_detail/64921.html)   。
          - 升级云助手Agent版本的具体操作，请参见[升级或禁止升级云助手Agent](https://help.aliyun.com/document_detail/134383.html)。

      - 如果指定了该参数，本接口中已指定的`Username`参数和[CreateCommand](https://help.aliyun.com/document_detail/64844.html)中指定的`WorkingDir`参数将不会生效。仅支持通过容器默认用户在容器的默认工作目录下执行命令。更多信息，请参见[使用云助手在容器内执行命令](https://help.aliyun.com/document_detail/456641.html)。
      - 如果指定了该参数，在Linux容器中只支持执行Shell脚本，不支持在脚本开头使用类似`#!/usr/bin/python`命令的形式指定脚本内容的解释器。更多信息，请参见[使用云助手在容器内执行命令](https://help.aliyun.com/document_detail/456641.html)。
       */
      ContainerId?: string;
      /** 容器名称。

      注意事项：
      - 如果指定了该参数，云助手将在实例的指定容器内执行脚本。
      - 如果指定了该参数，仅支持在云助手Agent版本不低于2.2.3.344的Linux实例内运行。

          - 查看云助手Agent版本的具体操作，请参见[安装云助手Agent](https://help.aliyun.com/document_detail/64921.html)   。
          - 升级云助手Agent版本的具体操作，请参见[升级或禁止升级云助手Agent](https://help.aliyun.com/document_detail/134383.html)。
      - 如果指定了该参数，本接口中已指定的`Username`参数和[CreateCommand](https://help.aliyun.com/document_detail/64844.html)中指定的`WorkingDir`参数将不会生效。仅支持通过容器默认用户在容器的默认工作目录下执行命令。更多信息，请参见[使用云助手在容器内执行命令](https://help.aliyun.com/document_detail/456641.html)。
      - 如果指定了该参数，在Linux容器中只支持执行Shell脚本，不支持在脚本开头使用类似`#!/usr/bin/python`命令的形式指定脚本内容的解释器。更多信息，请参见[使用云助手在容器内执行命令](https://help.aliyun.com/document_detail/456641.html)。

       */
      ContainerName?: string;
      /** 执行命令的超时时间，单位：秒。

      - 该值不能小于10秒。

      - 当因为进程原因、缺失模块、缺失云助手Agent等原因无法运行命令时，会出现超时现象。超时后，会强制终止命令进程。

      - 若不设置该值，会采用创建命令时指定的超时时间。

      - 该值只会作为该次命令执行的超时时间，不会改变命令本身的超时时间。 */
      Timeout?: number;
      /** 标签列表。 */
      Tag?: Array<{
        /** 命令执行的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个。使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。

        最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。

         */
        Key?: string;
        /** 命令执行的标签值。N的取值范围为1~20。该值可以为空字符串。

        最多支持128个字符，不能包含`http://`或`https://`。 */
        Value?: string }>;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 命令执行ID。 */
      InvokeId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/JoinResourceGroup
   * ## 接口说明
   * 
   * 资源是您在阿里云创建的云服务实体，例如，一台ECS实例、一个ECS弹性网卡或者一份ECS镜像等都可以是资源。资源组是项目、环境或者栈的基础设施集合，在资源组里管理资源能集中监控和执行任务，免去了您在多种阿里云服务间反复查看的负担。
   * @summary: 调用JoinResourceGroup将一个ECS资源或者服务加入一个资源组。
   */
  export namespace JoinResourceGroup {
    export type Params = {
      /** ECS资源的类型。取值范围：

      - instance：实例。
      - disk：块存储。
      - snapshot：快照。
      - image：镜像。
      - securitygroup：安全组。
      - ddh：专有宿主机。
      - ddhcluster：专有宿主机集群。
      - eni：弹性网卡。
      - keypair：密钥对。
      - launchtemplate：启动模板。
      - command：云助手命令。
      - activation：云助手托管实例激活码。

      以上参数取值均大小写敏感。  */
      ResourceType?: string;
      /** 资源类型的ID标识符。例如，当ResourceType=instance时，则ResourceId可以理解为InstanceId。  */
      ResourceId?: string;
      /** 资源所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId?: string;
      /** 目标资源组ID。 */
      ResourceGroupId?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/JoinSecurityGroup
   * ## 接口说明
   * 
   * > 该API已不推荐使用。推荐您调用[ModifyInstanceAttribute](https://help.aliyun.com/document_detail/25503.html)接口将ECS实例加入或移除安全组；调用[ModifyNetworkInterfaceAttribute](https://help.aliyun.com/document_detail/58513.html)接口将弹性网卡（ENI）加入或移除安全组。
   * 
   * 调用该接口时，您需要注意：
   * 
   * -  加入安全组之前，实例必须处于**已停止**（Stopped）或者**运行中**（Running）状态。
   * - 一台实例最多可以加入五个安全组。
   * 
   * - 您可以[提交工单](https://selfservice.console.aliyun.com/ticket/createIndex.htm)申请将实例加入更多安全组，最多不能超过16个安全组。
   * 
   * -  每个普通安全组最多能管理2000台实例，企业安全组最多能管理65536台实例。
   * -  您的安全组和实例必须属于同一个阿里云地域。 
   * -  您的安全组和实例的网络类型必须相同。如果网络类型为专有网络VPC，则安全组和实例必须属于同一个VPC。
   * - 不支持同时将实例和弹性网卡加入一个安全组，即参数`InstanceId`和`NetworkInterfaceId`不能同时传值。
   * @summary: 调用JoinSecurityGroup将一台ECS实例或一个弹性网卡加入到指定的安全组。
   */
  export namespace JoinSecurityGroup {
    export type Params = {
      /** 安全组ID。您可以调用[DescribeSecurityGroups](https://help.aliyun.com/document_detail/25556.html)查看您可用的安全组。  */
      SecurityGroupId: string;
      /** 实例ID。

      > 当该参数传入值时，`NetworkInterfaceId`必须为空。 */
      InstanceId?: string;
      /** 弹性网卡ID。

      > 当该参数传入值时，`InstanceId`必须为空。 */
      NetworkInterfaceId?: string;
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。

      - 实例加入安全组的操作可以不指定地域ID。
      - 弹性网卡加入安全组的操作必须指定弹性网卡所在的地域ID。 */
      RegionId?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/LeaveSecurityGroup
   * > 该API已不推荐使用。推荐您调用[ModifyInstanceAttribute](https://help.aliyun.com/document_detail/25503.html)接口将ECS实例加入或移除安全组；调用[ModifyNetworkInterfaceAttribute](https://help.aliyun.com/document_detail/58513.html)接口将弹性网卡（ENI）加入或移除安全组。
   * 
   * 调用该接口时，您需要注意：
   * 
   * -  移出安全组之前，实例必须处于**已停止**（Stopped）或者**运行中**（Running）状态。  
   * 
   * -  一台实例必须至少加入一个安全组，当该实例只加入了一个安全组时，则LeaveSecurityGroup请求会失败。  
   * 
   * - 不支持同时将实例和弹性网卡移出一个安全组，即参数`InstanceId`和`NetworkInterfaceId`不能同时传值。
   * @summary: 调用LeaveSecurityGroup将一台ECS实例或一个弹性网卡移出指定的安全组。
   */
  export namespace LeaveSecurityGroup {
    export type Params = {
      /** 安全组ID。 */
      SecurityGroupId: string;
      /** 实例ID。

      > 当该参数传入值时，`NetworkInterfaceId`必须为空。 */
      InstanceId?: string;
      /** 弹性网卡ID。

      > 当该参数传入值时，`InstanceId`必须为空。 */
      NetworkInterfaceId?: string;
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。

      - 实例移出安全组的操作可以不指定地域ID。
      - 弹性网卡移出安全组的操作必须指定弹性网卡所在的地域ID。 */
      RegionId?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ListPluginStatus
   * ## 接口说明
   * 
   * 实例的云助手Agent版本不低于以下版本，才可以查询到实例内云助手插件状态：
   * - Linux：2.2.3.344。
   * - Windows：2.1.3.344。
   * @summary: 调用ListPluginStatus查询实例中云助手插件的状态。
   */
  export namespace ListPluginStatus {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例ID，单次请求最多支持50台实例，N的取值范围为1~50。 */
      InstanceId?: Array<string>;
      /** 插件名称，支持全字符集。长度不得超过255个字符。

      - 若不指定该参数，会查询实例中已安装插件的状态。

          > 若不指定该参数，只能指定一个实例ID。

      - 若指定该参数，会查询出实例中指定插件的状态。 */
      Name?: string;
      /** 当前页码。

      - 起始值为1。
      - 默认值为1。 */
      PageNumber?: number;
      /** 分页查询时设置的每页行数。

      - 最大值为50。
      - 默认值为10。 */
      PageSize?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例插件状态列表。 */
      InstancePluginStatusSet?: Array<{
        /** 实例ID。 */
        InstanceId?: string;
        /** 插件状态列表。 */
        PluginStatusSet?: Array<{
          /** 云助手第一次上报插件状态的时间。 */
          FirstHeartbeatTime?: string;
          /** 云助手最近一次上报插件状态的时间。 */
          LastHeartbeatTime?: string;
          /** 插件名称。 */
          PluginName?: string;
          /** 插件状态。取值范围：

          - NotInstalled：插件未安装。
          - Installed：一次性插件已安装。
          - Running：常驻插件运行中。
          - Stopped：常驻插件未运行。
          - Crashed：插件状态异常。
          - Removed：插件已卸载。
          - UnKnown：状态未知。 */
          PluginStatus?: string;
          /** 插件版本号。 */
          PluginVersion?: string }> }>;
      /** 查询结果的页码。 */
      PageNumber?: number;
      /** 每页行数。 */
      PageSize?: number;
      /** 请求ID。 */
      RequestId?: string;
      /** 符合查询条件的记录条数。 */
      TotalCount?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ListTagResources
   * 请求中至少指定以下任一参数，以确定查询对象。
   * 
   * - `ResourceId.N`
   * - `Tag.N`（`Tag.N.Key`与`Tag.N.Value`）
   * - `TagFilter.N`
   * 
   * 同时指定下列参数时，返回结果中仅包含同时满足这两个条件的ECS资源。
   * 
   * - `Tag.N`和`ResourceId.N`
   * - `TagFilter.N`和`ResourceId.N`
   * @summary: 查询一个或多个ECS资源已经绑定的标签列表。
   */
  export namespace ListTagResources {
    export type Params = {
      /** 资源所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 下一个查询开始Token。 */
      NextToken?: string;
      /** 资源类型定义。取值范围：

      - instance：ECS实例。
      - disk：磁盘。
      - snapshot：快照。
      - image：镜像。
      - securitygroup：安全组。
      - volume：存储卷。
      - eni：弹性网卡。
      - ddh：专有宿主机。
      - ddhcluster：专有宿主机集群。
      - keypair：SSH密钥对。
      - launchtemplate：启动模板。
      - reservedinstance：预留实例券。
      - snapshotpolicy：自动快照策略。
      - elasticityassurance：弹性保障。
      - capacityreservation：容量预定。
      - command：云助手命令。
      - invocation：云助手命令执行结果。
       */
      ResourceType: string;
      /** ECS资源ID。N的取值范围为1~50。 */
      ResourceId?: Array<string>;
      /** 标签列表。 */
      Tag?: Array<{
        /** 精确查找ECS资源时使用的标签键。标签键长度的取值范围为1~128。N的取值范围为1~20。

        `Tag.N`参数使用说明：

        - 方式一：用于精确查找绑定了指定标签的ECS资源，由一个键值对组成。

            - 仅指定`Tag.N.Key`时，则返回关联该标签键的所有资源。

            - 仅指定`Tag.N.Value`，则报错`InvalidParameter.TagValue`。

            - 同时指定多个标签键值对时，仅同时满足所有标签键值对的ECS资源会被查找到。

        - 方式二：用于查询非默认资源组内的资源信息。`Key`的取值固定为`acs:rm:rgId`，对应的`Value`取值为资源组ID。

            - 如果`Key`取值为`acs:rm:rgId`，则`Value`的取值只能是非默认资源组ID。如果指定的资源组ID为默认资源组，则会返回错误信息。

            - 如果`Key`取值为`acs:rm:rgId`，则不支持再指定其他标签键值对。如果通过多个`Tag.N`参数同时查询资源组和标签对应的资源，则会返回错误信息。

         
         */
        Key?: string;
        /** 精确查找ECS资源时使用的标签值。标签值长度的取值范围为1~128。N的取值范围为1~20。

        > 当`Key=acs:rm:rgId`时，该参数只能传入资源组ID，且资源组ID不能为默认资源组。 */
        Value?: string }>;
      /** Tag过滤规则。 */
      TagFilter?: Array<{
        /** 模糊查找ECS资源时使用的标签键。标签键长度的取值范围为1~128。N的取值范围为1~5。

         `TagFilter.N`用于模糊查找绑定了指定标签的ECS资源，由一个键和一个或多个值组成。模糊查询可能会有2秒延时，仅支持模糊过滤后资源数小于等于5000的情况。

        - 通过标签键（`TagFilter.N.TagKey`）模糊查找ECS资源时，标签值（`TagFilter.N.TagValues.N`）必须为空。例如，模糊搜索标签键为`environment`的ECS资源时，`TagFilter.1.TagKey`可以设置为`env*`（前缀匹配的模糊搜索方式）、`*env*`（两边匹配的模糊搜索方式）或者`env`（精确搜索方式），而`TagFilter.1.TagValues`必须为空。

        - 通过标签值（`TagFilter.N.TagValues.N`）模糊查找ECS资源时，标签键（`TagFilter.N.TagKey`）必须设置为精确值。例如，模糊搜索标签键为`env`，标签值为`product`的ECS资源时，`TagFilter.1.TagKey`必须精确设置为`env`，`TagFilter.1.TagValues.1`可以设置为`proc*`（前缀匹配的模糊搜索方式）、`*proc*`（两边匹配的模糊搜索方式）或者`proc`（精确搜索方式）。同一个`TagKey`下只能用同一种搜索方式，如果设置了多个不同的搜索方式，则以第一个方式为准。

        - 标签键之间为交集关系，即仅同时满足您指定的所有标签键的ECS资源才会被查找到。

        - 同一标签键下的标签值之间为并集关系，即满足您为该标签键指定的任一标签值的ECS资源均会被查找到。

        > `TagFilter.N`与`Tag.N`参数不能同时使用，否则会返回错误信息。 */
        TagKey?: string;
        /** 模糊查找ECS资源时使用的标签值。标签值长度的取值范围为1~128。N的取值范围为1~5。具体的参数说明请参见`TagFilter.N.TagKey`参数描述。 */
        TagValues?: Array<string> }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 下一个查询开始Token。 */
      NextToken?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 由资源及其标签组成的集合，包含了资源ID、资源类型和标签键值等信息。 */
      TagResources?: Array<{
        /** 资源ID。 */
        ResourceId?: string;
        /** 资源类型。可能值：

        - instance：ECS实例。
        - disk：磁盘。
        - snapshot：快照。
        - image：镜像。
        - securitygroup：安全组。
        - volume：存储卷。
        - eni：弹性网卡。
        - ddh：专有宿主机。
        - ddhcluster：专有宿主机集群。
        - keypair：SSH密钥对。
        - launchtemplate：启动模板。
        - reservedinstance：预留实例券。
        - snapshotpolicy：自动快照策略。
        - elasticityassurance：弹性保障。
        - capacityreservation：容量预定。
        - command：云助手命令。
        - invocation：云助手命令执行结果。 */
        ResourceType?: string;
        /** 标签键。 */
        TagKey?: string;
        /** 标签值。 */
        TagValue?: string }> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyAutoProvisioningGroup
   * 修改弹性供应组前，请注意：
   * 
   * - 如果修改了供应组容量或者容量相关设置，供应组会在修改完成后执行一次调度任务。
   * - 如果供应组处于删除中状态，无法修改供应组。
   * @summary: 调用ModifyAutoProvisioningGroup接口修改一个弹性供应组的设置。
   */
  export namespace ModifyAutoProvisioningGroup {
    export type Params = {
      /** 弹性供应组所在地域的ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 弹性供应组的ID。 */
      AutoProvisioningGroupId?: string;
      /** 弹性供应组实时容量超过目标容量并触发缩容时，是否释放缩容的实例。取值范围：

      - termination：释放缩容的实例。
      - no-termination：只将缩容的实例移出弹性供应组。 */
      ExcessCapacityTerminationPolicy?: string;
      /** PayAsYouGoTargetCapacity和SpotTargetCapacity之和小于TotalTargetCapacity时，指定差额容量的计费方式。取值范围：

      - PayAsYouGo：按量付费实例。
      - Spot：抢占式实例。 */
      DefaultTargetCapacityType?: string;
      /** 弹性供应组到期时，是否释放组内实例。取值范围：

      - true：释放组内实例。
      - false：只将组内实例移出弹性供应组。 */
      TerminateInstancesWithExpiration?: boolean;
      /** 弹性供应组内抢占式实例的最高价格。

      > 同时设置了MaxSpotPrice和LaunchTemplateConfig.N.MaxPrice时，以最低值为准。LaunchTemplateConfig.N.MaxPrice在创建弹性供应组时设置，且不可修改。 */
      MaxSpotPrice?: number;
      /** 弹性供应组的目标总容量。取值范围：正整数。

      总容量必须大于等于PayAsYouGoTargetCapacity（指定的按量付费实例目标容量）和SpotTargetCapacity（指定的抢占式实例目标容量）取值之和。 */
      TotalTargetCapacity?: string;
      /** 弹性供应组内，按量付费实例的目标容量。取值范围：小于TotalTargetCapacity的参数取值。 */
      PayAsYouGoTargetCapacity?: string;
      /** 弹性供应组内，抢占式实例的目标容量。取值范围：小于TotalTargetCapacity的参数取值。 */
      SpotTargetCapacity?: string;
      /** 弹性供应组的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。 */
      AutoProvisioningGroupName?: string;
      /** 扩展启动模板列表。 */
      LaunchTemplateConfig?: Array<{
        /** 扩展启动模板对应的实例规格，N的取值范围：1~20。取值范围：请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。 */
        InstanceType?: string;
        /** 扩展启动模板中，抢占式实例的价格上限。 */
        MaxPrice?: number;
        /** 扩展启动模板的优先级，取值为0时优先级最高。取值范围：大于0。 */
        Priority?: number;
        /** 扩展启动模板中，ECS实例加入的虚拟交换机的ID。扩展模板中启动的ECS实例的可用区由虚拟交换机决定。 */
        VSwitchId?: string;
        /** 扩展启动模板中，实例规格的权重。取值越高，单台实例满足计算力需求的能力越大，所需的实例数量越小。取值范围：大于0。

        您可以根据指定实例规格的计算力和集群单节点最低计算力得出权重值。假设单节点最低计算力为8 vCPU、60 GiB，则：

        - 8 vCPU、60 GiB的实例规格权重可以设置为1。
        - 16 vCPU、120 GiB的实例规格权重可以设置为2。 */
        WeightedCapacity?: number }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyAutoSnapshotPolicy
   * undefined
   * @deprecated
   */
  export namespace ModifyAutoSnapshotPolicy {
    export type Params = {
      SystemDiskPolicyEnabled?: boolean;
      SystemDiskPolicyTimePeriod?: number;
      SystemDiskPolicyRetentionDays?: number;
      SystemDiskPolicyRetentionLastWeek?: boolean;
      DataDiskPolicyEnabled?: boolean;
      DataDiskPolicyTimePeriod?: number;
      DataDiskPolicyRetentionDays?: number;
      DataDiskPolicyRetentionLastWeek?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyAutoSnapshotPolicyEx
   * 调用ModifyAutoSnapshotPolicyEx修改一条自动快照策略。修改自动快照策略后，之前已应用该策略的云盘随即执行修改后的自动快照策略。
   * @summary: 调用ModifyAutoSnapshotPolicyEx修改一条自动快照策略。修改自动快照策略后，之前已应用该策略的云盘随即执行修改后的自动快照策略。
   */
  export namespace ModifyAutoSnapshotPolicyEx {
    export type Params = {
      /** 自动快照策略所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      regionId: string;
      /** 目标自动快照策略ID。您可以调用[DescribeAutoSnapshotPolicyEx](https://help.aliyun.com/document_detail/25530.html)查看您可用的自动快照策略。 */
      autoSnapshotPolicyId: string;
      /** 自动快照策略的名称。如果参数为空则代表不修改。 */
      autoSnapshotPolicyName?: string;
      /** 自动快照的创建时间点。使用UTC +8时间，单位为小时。取值范围为0~23，代表00:00至23:00共24个时间点，如1表示01:00。

      当一天内需要创建多次自动快照时，可以传入多个时间点：

      - 最多传入24个时间点。
      - 多个时间点用一个格式类似`"0", "1", … "23"`的JSON数组表示，时间点之间用半角逗号（,）隔开。 */
      timePoints?: string;
      /** 自动快照的重复日期，单位为天，周期为星期。取值范围为1~7，如1表示周一。

      当一星期内需要创建多次自动快照时，可以传入多个时间点：

      - 最多传入7个时间点。
      - 多个时间点用一个格式类似`"1", "2", … "7"`的JSON数组表示，时间点之间用半角逗号（,）隔开。 */
      repeatWeekdays?: string;
      /** 自动快照的保留时间，单位为天。取值范围：

      - -1：永久保存。
      - 1~65536：指定保存天数。

      默认值为-1。 */
      retentionDays?: number;
      /** 是否允许自动跨地域复制。

      - true：允许。
      - false：不允许。 */
      EnableCrossRegionCopy?: boolean;
      /** 跨地域复制快照的目标地域。目前支持设置一个目标地域。 */
      TargetCopyRegions?: string;
      /** 跨地域复制快照的保留时间，单位为天。取值范围：

      - -1：永久保存。
      - 1~65535：指定保存天数。

      默认值为-1。 */
      CopiedSnapshotsRetentionDays?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyBandwidthPackageSpec
   * undefined
   * @deprecated
   */
  export namespace ModifyBandwidthPackageSpec {
    export type Params = {
      RegionId: string;
      BandwidthPackageId: string;
      Bandwidth: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyCapacityReservation
   * 调用ModifyCapacityReservation修改一个容量预定服务的部分信息，包括容量预定服务的名称、描述信息、失效方式以及预留的实例总数量。
   * @summary: 调用ModifyCapacityReservation修改一个容量预定服务的部分信息，包括容量预定服务的名称、描述信息、失效方式以及预留的实例总数量。
   */
  export namespace ModifyCapacityReservation {
    export type Params = {
      /** 容量预定服务所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 容量预定服务ID。 */
      'PrivatePoolOptions.Id': string;
      /** 容量预定服务的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。 */
      'PrivatePoolOptions.Name'?: string;
      /** 容量预定服务的描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。 */
      Description?: string;
      /** 容量预定服务的生效方式。目前仅支持设置为立即生效，且参数无需传值。

      > 该参数不传值即表示设置为立即生效。 */
      StartTime?: string;
      /** 容量预定服务的失效时间，仅`EndTimeType=Limited`时该参数生效。时间格式以ISO8601为标准，并需要使用UTC +0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。更多信息，请参见[ISO8601](https://help.aliyun.com/document_detail/25696.html)。 */
      EndTime?: string;
      /** 容量预定服务的失效方式。取值范围：

      - Limited：指定时间释放。必须同时指定`EndTime`参数。
      - Unlimited：手动释放。不限制时间。 */
      EndTimeType?: string;
      /** 实例使用的镜像的操作系统类型。取值范围：

      - Windows：Windows Server类型的操作系统。
      - Linux：Linux及类Unix类型的操作系统。

      > 该参数暂未开放使用。 */
      Platform?: string;
      /** 容量预定服务需要预留的实例总数量。取值范围：已使用的实例数量~1000

      > 扩充实例总数量时，可能因库存不足导致扩充失败。 */
      InstanceAmount?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyCommand
   * 调用ModifyCommand修改一条云助手命令相关参数。
   * @summary: 调用ModifyCommand修改一条云助手命令相关参数。
   */
  export namespace ModifyCommand {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 命令ID。您可以通过接口[DescribeCommands](https://help.aliyun.com/document_detail/64843.html)查询所有可用的CommandId。 */
      CommandId: string;
      /** 命令名称。支持全字符集，长度不得超过128个字符。 */
      Name?: string;
      /** 命令描述。支持全字符集，长度不得超过512个字符。 */
      Description?: string;
      /** > 该参数已废弃，传入该参数不会生效。 */
      CommandContent?: string;
      /** 执行路径。长度不得超过200个字符。 */
      WorkingDir?: string;
      /** 您创建的命令在ECS实例中执行时最大的超时时间，单位为秒。当无法在配置的时间内运行并完成您创建的命令时，会出现超时现象。超时后，会强制终止命令进程，即取消命令的PID。 */
      Timeout?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDedicatedHostAttribute
   * - 修改CPU超卖比时，专有宿主机上的ECS实例必须为已停止（`Stopped`）状态。
   * - 修改CPU超卖比不会影响DDH的运行状态，但需注意DDH中已分配的vCPU数量不能超过修改后的总vCPU数量，否则超出部分的ECS实例将无法启动。
   * @summary: 调用ModifyDedicatedHostAttribute修改一台专有宿主机的部分信息，包括专有宿主机的名称、描述和服务不可用属性等。
   */
  export namespace ModifyDedicatedHostAttribute {
    export type Params = {
      /** 专有宿主机所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 专有宿主机ID。 */
      DedicatedHostId: string;
      /** 专有宿主机名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      DedicatedHostName?: string;
      /** 专有宿主机的描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
      Description?: string;
      /** 当专有宿主机发生故障或者在线修复时，为其所宿实例设置迁移方案。取值范围：

      - Migrate：迁移实例到其他物理机并重新启动实例。

      - Stop：在当前专有宿主机上停止实例，确认无法修复专有宿主机后，迁移实例到其他物理机并重新启动实例。

      当专有宿主机上挂载的是云盘时，默认值：Migrate。

      当专有宿主机上挂载的是本地盘时，默认值：Stop。 */
      ActionOnMaintenance?: string;
      /** 负载均衡连接的UDP会话超时时间，单位：秒。取值范围：15~310。 */
      'NetworkAttributes.SlbUdpTimeout'?: number;
      /** 为专有宿主机上运行的云服务设置用户访问的UDP会话超时时间，单位：秒。取值范围：15~310。 */
      'NetworkAttributes.UdpTimeout'?: number;
      /** 设置专有宿主机是否加入自动部署资源池。当您在专有宿主机上创建实例，却不指定**DedicatedHostId**时，阿里云自动从资源池中选取专有宿主机放置实例。取值范围：

      - on：加入自动部署资源池。

      - off：不加入自动部署资源池。

      自动部署功能详情，请参见[功能特性](https://help.aliyun.com/document_detail/118938.html)。 */
      AutoPlacement?: string;
      /** 专有宿主机集群ID。 */
      DedicatedHostClusterId?: string;
      /** CPU超卖比。仅自定义规格g6s、c6s、r6s支持设置CPU超卖比。取值范围：1~5

      CPU超卖比影响DDH的可用vCPU数，一台DDH的可用vCPU数=物理CPU核数\*2\*CPU超卖比。例如，g6s的物理CPU核数为52，如果设置CPU超卖比为4，则修改完成后vCPU总数显示为416。针对CPU绝对稳定性要求不严苛或者CPU负载不高的场景，例如开发测试环境，提升超卖比可以提升可用vCPU数，用于部署更多同等规格的ECS实例，降低单位部署成本。

       */
      CpuOverCommitRatio?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDedicatedHostAutoReleaseTime
   * ## 接口说明
   * 到达设置的自动释放时间后，按量付费专有宿主机会被自动释放。请确保您已经不再使用该宿主机，并已按需备份应用数据。
   * @summary: 调用ModifyDedicatedHostAutoReleaseTime为一台按量付费专有宿主机设定自动释放时间，或者取消自动释放一台按量付费专有宿主机。
   */
  export namespace ModifyDedicatedHostAutoReleaseTime {
    export type Params = {
      /** 专有宿主机所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 需要自动释放的专有宿主机ID。 */
      DedicatedHostId: string;
      /** 专有宿主机的自动释放时间。按照ISO 8601标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。

      - 必须晚于当前时间起算的半小时及以后。
      - 必须早于当前时间起算的三年及以前。
      - 如果参数值中的秒（ss）不是00，则自动取为00。
      - 如果不输入`AutoReleaseTime`参数，表示取消自动释放，专有宿主机在预约时间点不再自动释放。 */
      AutoReleaseTime?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDedicatedHostAutoRenewAttribute
   * - 当您的包年包月专有宿主机开启自动续费功能后，到期前九天将自动续费，扣费在08:00:00（UTC +8）时间点自动执行。如果前一日扣费失败，次日继续定时执行。扣费成功或者九天之后专有宿主机到期被锁定后停止自动扣费。期间，您需要保证自己的支付方式使用额度充足即可。
   * - 包年包月的专有宿主机支持跟随宿主机内的包年包月ECS实例自动续费。详细信息，请参见AutoRenewWithEcs参数说明。
   * @summary: 调用ModifyDedicatedHostAutoRenewAttribute为一台或多台包年包月专有宿主机设置自动续费，也可以取消已设定的自动续费。
   */
  export namespace ModifyDedicatedHostAutoRenewAttribute {
    export type Params = {
      /** 专有宿主机ID。最多可以输入100个包年包月专有宿主机ID，ID之间用半角逗号（,）隔开。 */
      DedicatedHostIds: string;
      /** 专有宿主机所属的地域ID。 */
      RegionId: string;
      /** 续费周期。取值范围：

      - PeriodUnit=Week时：1、2、3、4。
      - PeriodUnit=Month时：1、2、3、6、12、24、36、48、60。
      - PeriodUnit=Year时：1、2、3、4、5。 */
      Duration?: number;
      /** 续费时长单位。取值范围：

      - Week
      - Month
      - Year

      默认值：Month。
       */
      PeriodUnit?: string;
      /** 是否自动续费包年包月专有宿主机。取值范围：

      - true：自动续费包年包月专有宿主机。

      - false：不自动续费包年包月专有宿主机。

      默认值：false
       */
      AutoRenew?: boolean;
      /** 是否自动续费包年包月专有宿主机，参数`RenewalStatus`的优先级高于`AutoRenew`。取值范围：

      - AutoRenewal：自动续费。

      - Normal：待续费。

      - NotRenewal：不续费，也不发送到期提醒。到期前第三天系统会自动发送不续费提醒。不续费的专有宿主机可以设置成待续费（Normal），再自行续费（[RenewDedicatedHosts](https://help.aliyun.com/document_detail/134250.html)）或设置为自动续费（AutoRenewal）。 */
      RenewalStatus?: string;
      /** 设置是否跟随专有宿主机内的包年包月ECS实例自动续费。

      如果您的专有宿主机（简称DDH）为包年包月计费方式，且该DDH内包年包月ECS实例开启了自动续费。您可以通过该参数设置DDH跟随ECS实例自动续费。当DDH内ECS实例自动续费时，如果DDH的到期时间比该ECS实例续费后的到期时间短，则DDH也会自动续费。DDH跟随ECS实例自动续费的原则说明：

      DDH会自动判断对应ECS实例续费后的到期时间，然后在自动续费DDH时长时，选择大于ECS实例到期时间，且满足DDH续费周期的最小续费时长进行续费。DDH支持的续费周期详情，请参见`PeriodUnit`和`Duration`参数说明。

      例如：包年包月DDH在当年01月15日到期，DDH内的包年包月ECS实例在自动续费后，将时长延长至当年11月15日到期，则DDH生命周期比ECS实例的生命周期少10个月。此时，DDH在自动续费时，会选择大于10个月，且符合DDH续费周期的最小续费时长12个月（即`PeriodUnit=Month`且`Duration=12`）进行续费。

      取值范围：

      - AutoRenewWithEcs：跟随专有宿主机内包年包月ECS实例自动续费。
      - StopRenewWithEcs：不跟随专有宿主机内包年包月ECS实例自动续费。
      - NoOperation：不改变专有宿主机当前的设置。

      > 如果您设置该参数为AutoRenewWithEcs，需要确保专有宿主机已开启自动续费（即`AutoRenew=true`）。否则，该参数只是改变了参数值，实际的跟随ECS实例自动续费功能并不生效。

      默认值：NoOperation

       */
      AutoRenewWithEcs?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDedicatedHostClusterAttribute
   * 调用ModifyDedicatedHostClusterAttribute修改一台专有宿主机集群的部分信息，包括专有宿主机集群的名称、描述信息、属性等。
   * @summary: 调用ModifyDedicatedHostClusterAttribute修改一台专有宿主机集群的部分信息，包括专有宿主机集群的名称、描述信息、属性等。
   */
  export namespace ModifyDedicatedHostClusterAttribute {
    export type Params = {
      /** 专有宿主机集群所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 专有宿主机集群ID。 */
      DedicatedHostClusterId: string;
      /** 专有宿主机集群的名称。长度为2~128个英文或中文字符，必须以大小字母或中文开头，可包含数字、英文句号（.）、下划线（_）或连字符（-）。不能包含`http://`和`https://`。 */
      DedicatedHostClusterName?: string;
      /** 专有宿主机集群的描述。长度为2~256个字符。不能以`http://`和`https://`开头。 */
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDedicatedHostsChargeType
   * 调用ModifyDedicatedHostsChargeType修改专有宿主机的付费类型。
   * @summary: 调用ModifyDedicatedHostsChargeType修改专有宿主机的付费类型。
   */
  export namespace ModifyDedicatedHostsChargeType {
    export type Params = {
      /** 专有宿主机ID。取值可以由多台专有宿主机ID组成一个JSON数组，最多支持20个ID，ID之间用半角逗号（,）隔开。 */
      DedicatedHostIds: string;
      /** 专有宿主机所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 包年包月续费时长。取值范围：
      - `PeriodUnit=Week`时，`Period`的有效取值：1、2、3、4。
      - `PeriodUnit=Month`时，`Period`的有效取值：1、2、3、4、5、6、7、8、9、12、24、36、48、60。 */
      Period?: number;
      /** 续费时长的时间单位，即参数`Period`的单位。取值范围：
      - Week：周。
      - Month：月。

      默认值为Month。 */
      PeriodUnit?: string;
      /** 是否只预检此次请求。取值范围：
      - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
      - false：发送正常请求，通过检查后返回2XX的HTTP状态码并直接查询资源状况。

      默认值为false。 */
      DryRun?: boolean;
      /** 是否自动支付。取值范围：
      - true：自动支付。您需要确保账户余额充足，如果账户余额不足会生成异常订单，并只能作废订单。
      - false：只生成订单不扣费。

      默认值为true。

      >如果您的支付方式余额不足，可以将参数`AutoPay`置为`false`，此时会生成未支付订单，您可以自行支付。

       */
      AutoPay?: boolean;
      /** 专有宿主机需要修改的目标计费方式。取值范围：
      - PrePaid：将按量付费转换为包年包月。
      - PostPaid：将包年包月转换为按量付费。

      默认值为PrePaid。
       */
      DedicatedHostChargeType?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 包年包月转换为按量付费时，是否返回订单费用详情。

      默认值为false。 */
      DetailFee?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 订单费用详情。 */
      FeeOfInstances?: Array<{
        /** 账单费用货币单位。

        中国站：CNY。

        国际站：USD。 */
        Currency?: string;
        /** 费用数值。 */
        Fee?: string;
        /** 专有宿主机ID。 */
        InstanceId?: string }>;
      /** 生成的订单ID。 */
      OrderId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDemand
   * 您可通过该接口修改实例规格需求信息，阿里云根据您的需求表单供应相关资源。
   * 仅支持报备I/O优化实例规格，以及专有网络VPC类型的ECS实例。
   * 只有在已拒绝状态，才能修改除了`DemandName`，`DemandDescription`的其他参数。
   * 
   * > 该接口正在内测中，尚未正式上线，暂时不建议使用，请您耐心等待。
   * @summary: 调用ModifyDemand修改ECS资源需求报备信息。
   */
  export namespace ModifyDemand {
    export type Params = {
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 报备实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 报备实例所属的可用区ID。更多详情，请参见[DescribeZones](https://help.aliyun.com/document_detail/25610.html)获取可用区列表。

      默认值：空，表示随机选择。 */
      ZoneId?: string;
      /** 需要修改的报备ID。 */
      DemandId: string;
      /** 报备名称。长度为2~128个字符，必须以大小字母或中文开头，不能以http://和https:// 开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、点号（.）或者连字符（-）。

      默认值：实例规格名称。 */
      DemandName?: string;
      /** 报备的描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。 */
      DemandDescription?: string;
      /** 报备实例的资源规格。参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)或调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)查看报备实例规格的性能参数，或者参见[选型配置](https://help.aliyun.com/document_detail/58291.html)了解如何选择实例规格。 */
      InstanceType?: string;
      /** 报备需求规格数量。取值范围：1～100000 */
      Amount?: number;
      /** 报备实例的付费方式。取值范围：

      - PrePaid：包年包月
      - PostPaid（默认）：按量付费 */
      InstanceChargeType?: string;
      /** 购买资源的时长，为必选值，单位为：月。当参数`InstanceChargeType`取值为PrePaid时生效。取值范围：

      - PeriodUnit为Week时，Period取值：{"1", "2", "3", "4"}。

      - PeriodUnit为Month时，Period取值：{"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}。 */
      Period?: number;
      /** 购买资源的时长。取值范围：
      - Day
      - Week
      - Month（默认） */
      PeriodUnit?: string;
      /** 最早开始购买时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，使用UTC +0时间。格式为：yyyy-MM-dd HH:mm:ss。

      如果秒（ss）取值不是00，则自动取为当前分钟（mm）开始时。

      最晚结束购买时间晚于最早购买时间。

      早晚时间跨度一般不允许超过10天。 */
      StartTime?: string;
      /** 最晚结束购买时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，使用UTC +0时间。格式为：yyyy-MM-dd HH:mm:ss。

      如果秒（ss）取值不是00，则自动取为当前分钟（mm）开始时。

      最晚结束购买时间晚于最早购买时间。

      早晚时间长度一般不允许超过10天。
       */
      EndTime?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDeploymentSetAttribute
   * 调用ModifyDeploymentSetAttribute修改一个部署集的名称和描述信息。
   * @summary: 调用ModifyDeploymentSetAttribute修改一个部署集的名称和描述信息。
   */
  export namespace ModifyDeploymentSetAttribute {
    export type Params = {
      /** 部署集ID。 */
      DeploymentSetId: string;
      /** 新的部署集描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。 */
      Description?: string;
      /** 新的部署集名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。 */
      DeploymentSetName?: string;
      /** 部署集所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDiagnosticMetricSet
   * 调用ModifyDiagnosticMetricSet修改资源诊断指标集合。
   * @summary: 调用ModifyDiagnosticMetricSet修改资源诊断指标集合。
   */
  export namespace ModifyDiagnosticMetricSet {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 诊断指标集合ID。 */
      MetricSetId: string;
      /** 诊断指标列表。 */
      MetricIds?: Array<string>;
      /** 资源类型。 */
      ResourceType?: 'instance';
      /** 诊断指标集合的名称。 */
      MetricSetName?: string;
      /** 诊断指标集合的描述信息。 */
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDiskAttribute
   * - 当您调用该接口时设置了不随实例释放（DeleteWithInstance=false）属性，一旦磁盘挂载的ECS实例被安全锁定且OperationLocks中标记了`"LockReason" : "security"`的锁定状态，释放实例时会忽略磁盘的DeleteWithInstance属性而被同时释放。
   * - 您可以调用`DiskIds.N`参数批量修改多个块存储的名称、描述、是否随实例释放等属性。
   * @summary: 调用ModifyDiskAttribute修改一个或多个块存储的名称、描述、是否随实例释放等属性。
   */
  export namespace ModifyDiskAttribute {
    export type Params = {
      /** 待修改明细的磁盘ID。
      > `DiskId`和`DiskIds.N`两个参数不能同时被调用，请您根据需求任选其一传值。 */
      DiskId?: string;
      /** 磁盘名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
                */
      DiskName?: string;
      /** 磁盘描述。 长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
                */
      Description?: string;
      /** 磁盘是否随实例释放。默认值：无，无表示不改变当前的值。

      开启多重挂载特性的云盘，不支持设置该参数。在下列两种情况下，将参数`DeleteWithInstance`设置成`false`时会报错。 
               
      - 磁盘的种类（category）为本地盘（ephemeral）时。  
      - 磁盘的种类（category）为普通云盘（cloud），且不可以卸载（Portable=false）时。  
       */
      DeleteWithInstance?: boolean;
      /** 删除磁盘时，是否同时删除其自动快照。默认值：无，无表示不改变当前的值。 */
      DeleteAutoSnapshot?: boolean;
      /** 云盘是否启用自动快照策略功能。

      - true：启用。
      - false：关闭。

      默认值：无，表示不改变当前的值。

      > 创建后的云盘默认启用自动快照策略功能。您只需要为云盘绑定自动快照策略即可正常使用。 */
      EnableAutoSnapshot?: boolean;
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId?: string;
      /** 待修改明细的多个磁盘ID。N的取值范围为0 ~ 100。
      > `DiskId`和`DiskIds.N`两个参数不能同时被调用，请您根据需求任选其一传值。 */
      DiskIds?: Array<string>;
      /** 是否开启Burst（性能突发）。取值范围：

      - true：是。
      - false：否。 */
      BurstingEnabled?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDiskChargeType
   * 更换计费方式后，默认自动扣费。您需要确保账户余额充足，否则会生成异常订单，此时只能作废订单。如果您的账户余额不足，可以将参数AutoPay置为false，此时会生成正常的未支付订单，您可以登录[ECS管理控制台](https://ecs.console.aliyun.com/)支付。
   * 
   * 使用该接口时，请注意：
   * 
   * - 包年包月云盘转换为按量付费云盘时，适用于包年包月实例上挂载的包年包月云盘。
   * 
   * - 按量付费云盘转换为包年包月云盘时，适用于包年包月实例上挂载的按量付费数据盘，或者按量付费实例上挂载的按量付费数据盘。
   * - 挂载的实例不能为欠费停机状态。
   * - 更换计费方式前后的价格差退款会退还到您的原付费方式中，已使用的代金券不退回。
   * - 每块云盘成功修改计费方式一次，五分钟内不能再次修改。  
   * 
   * - 开启多重挂载特性的云盘，仅支持按量付费的计费方式，不能转换为包年包月的计费方式。
   * @summary: 调用ModifyDiskChargeType修改1台ECS实例上挂载的1块或最多16块云盘的计费方式。
   */
  export namespace ModifyDiskChargeType {
    export type Params = {
      /** 云盘挂载的实例ID。 */
      InstanceId: string;
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 云盘ID列表，一个带有格式的JSON Array，最多支持16个ID，用半角逗号（,）隔开。  */
      DiskIds: string;
      /** 是否自动支付。取值范围： 
               
      - true（默认）：自动支付。您需要确保账户余额充足，如果账户余额不足会生成异常订单，只能作废订单。 
      - false：只生成订单不扣费。如果您的账户余额不足，会生成正常的未支付订单，此订单可登录ECS控制台支付。 
                */
      AutoPay?: boolean;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 云盘计费方式。取值范围： 
               
      - PrePaid（默认）：按量付费数据盘转换为包年包月数据盘。 
      - PostPaid：包年包月数据盘转换为按量付费数据盘。 
                */
      DiskChargeType?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 生成的订单ID。 */
      OrderId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDiskSpec
   * ## 接口说明
   * 请确保在使用该接口前，您已充分了解云盘的计费方式和[价格](https://www.aliyun.com/price/product#/disk/detail)。调用该接口完成以下操作时，您需要注意：
   * 
   * - 修改ESSD云盘性能级别：
   * 
   *     - 包年包月ESSD云盘仅支持升级性能级别。
   * 
   *     - 按量付费ESSD云盘支持升级和降低性能级别，但不支持降配到PL0。
   * 
   *     - ESSD云盘的状态必须是**使用中**（In_Use）状态或者**待挂载**（Available）状态。
   * 
   *     - 若ESSD云盘已挂载到ECS实例上，实例必须处于**运行中**（Running）状态或者**已停止**（Stopped）状态，ECS实例不能处于过期或者账号欠费状态。
   * 
   *     - 由于ESSD云盘性能级别受容量限制，如果您无法升级性能级别，可以扩容（[ResizeDisk](https://help.aliyun.com/document_detail/25522.html)）后重新操作。更多信息，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。
   * 
   * - 变更一块云盘类型的注意事项，请参见[变更云盘类型](https://help.aliyun.com/document_detail/161980.html)中的限制条件章节。
   * 
   * * 开启多重挂载特性的云盘不支持云盘变配。调用接口后，新的云盘类型立即生效，阿里云按照新的云盘类型及云盘性能级别单价计算消费账单。
   * @summary: 调用ModifyDiskSpec变更一块云盘类型，或者修改一块ESSD云盘的性能级别。
   */
  export namespace ModifyDiskSpec {
    export type Params = {
      /** 云盘的ID。 */
      DiskId: string;
      /** 修改一块ESSD云盘的性能级别。取值范围：

      - PL0：单盘最高随机读写IOPS 1万。
      - PL1：单盘最高随机读写IOPS 5万。
      - PL2：单盘最高随机读写IOPS 10万。
      - PL3：单盘最高随机读写IOPS 100万。

      默认值：PL1。 */
      PerformanceLevel?: string;
      /** 变更一块云盘的类型。取值范围：

      - cloud_essd：ESSD云盘。
      - cloud_auto：ESSD AutoPL云盘。
      - cloud_ssd：SSD云盘。
      - cloud_essd_entry：ESSD Entry云盘。- cloud_efficiency：高效云盘。

      默认值：空，表示不变配云盘。

      > - 以上有效取值按云盘性能降序排列。如果指定的云盘是包年包月云盘，则不允许降配云盘。
      - ESSD Entry云盘仅支持变配到ESSD云盘和ESSD AutoPL云盘。更多信息，请参见[变更云盘类型](https://help.aliyun.com/document_detail/161980.html)。 */
      DiskCategory?: string;
      /** 是否只预检此次请求。取值范围：

      * true：发送检查请求。检查项包括是否填写了必需参数、请求格式、业务限制和ECS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。

      * false：发送正常请求，通过检查后返回2XX HTTP状态码并且直接变配云盘或修改ESSD性能等级。

      默认值：false。 */
      DryRun?: boolean;
      /** 是否修改ESSD AutoPL云盘预配置读写IOPS。取值范围：0~min{50000, 1000*容量-基准性能}。

      基准性能=min{1,800+50*容量, 50,000}

      > 当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)和[修改ESSD AutoPL云盘预配置信息](https://help.aliyun.com/document_detail/413275.html)。

       */
      ProvisionedIops?: number;
      /** 磁盘性能控制参数集合 */
      PerformanceControlOptions?: {
        /** 目标云盘IOPS。仅支持修改专属存储集群云盘IOPS。

        取值范围：900~单盘最大IOPS，步长100。


        更多信息，请参见[云盘性能](https://help.aliyun.com/document_detail/25382.html)。 */
        IOPS?: number;
        /** 重置云盘性能，仅支持专属存储集群云盘。

        设置该参数后，PerformanceControlOptions.IOPS和PerformanceControlOptions.Throughput参数不生效。


        目前仅支持设置为All（重置云盘IOPS和吞吐量到初始值）。 */
        Recover?: 'All';
        /** 目标云盘吞吐量，仅支持修改专属存储集群云盘吞吐量，单位MB/s。

        取值范围：60~单盘最大吞吐量。

        更多信息，请参见[云盘性能](https://help.aliyun.com/document_detail/25382.html)。 */
        Throughput?: number };
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 生成的订单ID。

      > 仅在变更或修改包年包月云盘时会返回订单ID。 */
      OrderId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 变配云盘的任务ID。

      > 如果您只修改了一块ESSD云盘的性能级别，则不会返回该参数。 */
      TaskId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyEipAddressAttribute
   * undefined
   * @deprecated
   */
  export namespace ModifyEipAddressAttribute {
    export type Params = {
      RegionId?: string;
      AllocationId: string;
      Bandwidth: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyElasticityAssurance
   * 调用ModifyElasticityAssurance修改一个弹性保障服务的名称与描述信息。
   * @summary: 调用ModifyElasticityAssurance修改一个弹性保障服务的名称与描述信息。
   */
  export namespace ModifyElasticityAssurance {
    export type Params = {
      /** 弹性保障服务所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 弹性保障服务ID。 */
      'PrivatePoolOptions.Id': string;
      /** 弹性保障服务的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。 */
      'PrivatePoolOptions.Name'?: string;
      /** 弹性保障服务的描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。 */
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyForwardEntry
   * undefined
   * @deprecated
   */
  export namespace ModifyForwardEntry {
    export type Params = {
      ForwardTableId: string;
      ForwardEntryId: string;
      ExternalIp?: string;
      ExternalPort?: string;
      InternalIp?: string;
      InternalPort?: string;
      IpProtocol?: string;
      RegionId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyHaVipAttribute
   * undefined
   * @deprecated
   */
  export namespace ModifyHaVipAttribute {
    export type Params = {
      ClientToken?: string;
      RegionId: string;
      HaVipId: string;
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyHpcClusterAttribute
   * 调用ModifyHpcClusterAttribute修改一个HPC集群的描述信息。
   * @summary: 调用ModifyHpcClusterAttribute修改一个HPC集群的描述信息。
   */
  export namespace ModifyHpcClusterAttribute {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** HPC集群ID。 */
      HpcClusterId: string;
      /** HPC集群描述。长度为2~256个英文或中文字符，不能以http://和https://开头。

      默认值：空 */
      Description?: string;
      /** HPC集群名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、下划线（_）或者连字符（-）。

      默认值：空 */
      Name?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyImageAttribute
   * 调用ModifyImageAttribute修改一份自定义镜像的名称、描述信息、状态或镜像族系。
   * @summary: 调用ModifyImageAttribute修改一份自定义镜像的名称、描述信息、状态或镜像族系。
   */
  export namespace ModifyImageAttribute {
    export type Params = {
      /** 自定义镜像所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 自定义镜像的ID。 */
      ImageId: string;
      /** 自定义镜像的名称。长度为2~128个字符。必须以大小字母或中文开头，不能以aliyun或acs:开头，不能包含http://或者https://。可以包含数字、半角句号（.）、半角冒号（:）、下划线（_）或者短划线（-）。

      默认值：空，表示保持原有名称不变。 */
      ImageName?: string;
      /** 镜像状态，取值范围：

      - Deprecated：将镜像设置为弃用状态。如果您已经共享的自定义镜像，必须先取消共享才能修改为弃用状态。对处于弃用状态镜像，不能共享和复制镜像。但是可以使用镜像创建实例或更换系统盘。
      - Available：将镜像设置为可用状态。您可以将弃用状态的镜像恢复可用。

      > 如果您需要回滚镜像族系中的自定义镜像至上一个版本，可以将最新可用的自定义镜像设置为弃用状态，但如果该镜像为镜像族系中唯一一个可用状态的自定义镜像，则弃用镜像以后该镜像族系将无可用状态自定义镜像用来创建实例，因此请谨慎操作。
       */
      Status?: string;
      /** 镜像族系名称。长度为2~128个字符。必须以大小字母或中文开头，不能以aliyun或acs:开头，不能包含http://或者https://。可以包含数字、半角句号（.）、半角冒号（:）、下划线（_）或者短划线（-）。

      默认值：空。 */
      ImageFamily?: string;
      /** 修改镜像的启动模式。取值范围：
      - BIOS：BIOS启动模式。
      - UEFI：UEFI启动模式。

      > 您需要了解指定的镜像支持的启动模式，当通过该参数修改启动模式后，必须与镜像本身支持的启动模式匹配，实例才能正常启动。 */
      BootMode?: string;
      /** 导入镜像后，激活操作系统采用的许可证类型。当前仅支持BYOL。

      BYOL：源操作系统自带的许可证。采用BYOL时，您必须确保您的许可证密钥支持在阿里云使用。


       */
      LicenseType?: string;
      /** 自定义镜像的描述信息。长度为2~256个字符。不能以http://或https://开头。

      默认值：空，表示保持原有描述信息不变。 */
      Description?: string;
      /** 镜像特性相关属性。 */
      Features?: {
        /** 镜像是否支持NVMe。可能值：

        - supported：支持。表示以该镜像创建的实例支持NVMe协议。
        - unsupported：不支持。表示以该镜像创建的实例不支持NVMe协议。 */
        NvmeSupport?: string };
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyImageShareGroupPermission
   * undefined
   * @deprecated
   */
  export namespace ModifyImageShareGroupPermission {
    export type Params = {
      RegionId: string;
      ImageId: string;
      'AddGroup.1'?: string;
      'RemoveGroup.1'?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyImageSharePermission
   * 调用该接口时，您需要注意：
   * 
   * - 您只能共享自己的自定义镜像给其他阿里云用户。
   * - 每份自定义镜像一次最多共享给10个阿里云账号。所以，参数AddAccount.n或者参数RemoveAccount.n单次最多可以传入10个阿里云账号，超过10个账号系统会忽略该参数。
   * - 每份自定义镜像最多可以共享给50个阿里云账号。
   * - 使用共享镜像创建ECS实例（[RunInstances](https://help.aliyun.com/document_detail/63440.html)）后，一旦自定义镜像拥有者解除了镜像共享关系，或者删除了自定义镜像（[DeleteImage](https://help.aliyun.com/document_detail/25537.html)），该实例将无法初始化系统盘（[ReInitDisk](https://help.aliyun.com/document_detail/25519.html)）。
   * 
   * 发布或下架社区镜像，您需要注意：
   * - 社区镜像的所有者需要为对应的社区镜像的质量与迭代负责，阿里云仅提供平台支撑。请确保您已知晓社区镜像协议内容，并已签订协议，否则不允许发布社区镜像。更多信息，请参见[发布社区镜像](https://help.aliyun.com/document_detail/208370.html)。
   * - 加密镜像不允许发布为社区镜像。
   * - 社区镜像完全公开，在镜像所属地域下，所有阿里云账号均可使用。
   * - 社区镜像不支持共享、导出与复制。
   * - 已发布的社区镜像一旦下架，将不再对其他所有的阿里云账号公开。如果该自定义镜像已共享至其它阿里云账号，共享关系会继续保持。
   * @summary: 调用ModifyImageSharePermission管理镜像共享权限。您可以将自己的自定义镜像共享给其他阿里云账号，也可以发布为社区镜像供他人使用。
   */
  export namespace ModifyImageSharePermission {
    export type Params = {
      /** 自定义镜像所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 被共享的自定义镜像ID。 */
      ImageId: string;
      /** >该参数正在邀测中，暂不支持使用。 */
      LaunchPermission?: string;
      /** 授权共享镜像的阿里云账号ID。N的取值范围：1~10，超过10系统会忽略该参数。 */
      AddAccount?: Array<string>;
      /** 删除镜像共享的阿里云账号ID。N的取值范围：1~10，超过10系统会忽略该参数。 */
      RemoveAccount?: Array<string>;
      /** 是否发布或下架社区镜像。取值范围：

      - true：发布该镜像为社区镜像。
      - false：下架该镜像为普通镜像，若该镜像本身是普通镜像，则不做改变。

      默认值：false。 */
      IsPublic?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceAttachmentAttributes
   * 私有池是弹性保障服务或容量预定服务在创建后生成的，关联了与私有池匹配的实例信息。您可以在创建实例时设置是否使用私有池启动，实例将会与弹性保障服务或容量预定服务进行匹配。
   * 
   * - 调用该接口修改实例的私有池的属性后，实例不需要重启。
   * - 当您调用以下接口时，系统会重新匹配实例的私有池。如果实例已匹配了指定的私有池，可能因私有池容量已用完或私有池失效等原因造成调用失败的问题。如果出现调用失败的问题，请先调用ModifyInstanceAttachmentAttributes接口将私有池的匹配模式修改为`Open`。
   *     - StartInstance重启启用节省停机模式的实例
   *     - ReActivateInstances
   *     - ModifyInstanceChargeType
   *     - ModifyPrepayInstanceSpec
   *     - ReplaceSystemDisk
   * @summary: 调用ModifyInstanceAttachmentAttributes修改实例的私有池的属性。
   */
  export namespace ModifyInstanceAttachmentAttributes {
    export type Params = {
      /** 私有池所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 需要修改私有池匹配属性的实例ID。 */
      InstanceId: string;
      /** 修改实例的私有池匹配模式。取值范围：

      - Open：开放模式。该模式下系统自动为实例匹配开放的私有池。
      - Target：指定模式。该模式下必须同时指定`PrivatePoolOptions.Id`参数，设置指定的私有池ID。
      - None：不使用。该模式下实例正常启动，不使用私有池。 */
      'PrivatePoolOptions.MatchCriteria': string;
      /** 私有池ID，即弹性保障服务ID或者容量预定服务ID。

      - 当`PrivatePoolOptions.MatchCriteria`取值为`Target`时，该参数为必填项。
      - 当`PrivatePoolOptions.MatchCriteria`取值为`Open`或`None`时，该参数不传值。 */
      'PrivatePoolOptions.Id'?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceAttribute
   * ## 接口说明
   * 查询ECS实例信息时，如果返回数据中包含`{"OperationLocks": {"LockReason" : "security"}}`，则禁止一切操作。
   * 
   * 调用该接口完成以下操作时，您需要注意：
   * 
   * - 修改主机名（`HostName`）：重启实例后，修改生效，且必须是在ECS控制台重启（具体操作，请参见[重启实例](https://help.aliyun.com/document_detail/25440.html)）或者调用[RebootInstance](https://help.aliyun.com/document_detail/25502.html)重启，新主机名才能生效。在操作系统内部重启不保证能生效。
   * - 重置密码（`Password`）：
   *     - 实例状态不能为**启动中**（`Starting`）。
   *     - 重启实例后，重置生效，且必须是在ECS控制台重启（具体操作，请参见[重启实例](https://help.aliyun.com/document_detail/25440.html)）或者调用[RebootInstance](https://help.aliyun.com/document_detail/25502.html)重启，新密码才能生效。在操作系统内部重启不能生效。
   * - 修改自定义数据（`UserData`）：
   *     - 实例状态必须为**已停止**（`Stopped`）。
   *     - 实例必须满足自定义数据使用限制。更多信息，请参见[生成实例自定义数据](https://help.aliyun.com/document_detail/49121.html)。
   * 
   *     > 重启实例后，实例上将展示新的用户数据，但不会运行用户数据脚本。
   * 
   * - 更换实例安全组（`SecurityGroupIds.N`）：
   *     - 支持切换安全组类型。
   *       当ECS实例跨类型切换安全组时，您需要充分了解两种安全组规则的配置区别，避免影响实例网络。
   *     - 不支持经典网络类型实例。
   *       其他注意事项请参见`SecurityGroupIds.N`的参数说明。
   * - 修改主网卡队列数（`NetworkInterfaceQueueNumber`）：
   *     - 实例必须为已停止（`Stopped`）状态。
   *     - 不能超过实例规格允许的单块网卡最大队列数。
   *     - 实例的所有网卡累加队列数不能超过实例规格允许的队列数总配额。实例规格的单块网卡最大队列数和总配额可以通过[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)查询`MaximumQueueNumberPerEni`、`TotalEniQueueQuantity`字段。
   *     - 当取值为-1时，将重置主网卡队列数为对应实例规格的默认值。实例规格的弹性网卡默认队列数可以通过[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)查询`PrimaryEniQueueNumber`字段。
   * - 实例开启/关闭 Jumbo frame特性（`EnableJumboFrame`）。更多信息，请参见[ECS实例MTU](https://help.aliyun.com/document_detail/200512.html)。
   *     - 实例必须为运行中（`Running`）或者已停止（`Stopped`）状态。
   *     - 实例必须为虚拟专有网络（Virtual Private Cloud, VPC）下的ECS实例。
   *     - 开启Jumbo Frame特性后，实例的MTU值将变为8500，关闭后则回退为1500 。
   * @summary: 调用ModifyInstanceAttribute修改一台ECS实例的部分信息，包括密码、名称、描述、主机名、所属安全组、实例的MTU以及自定义数据等。如果是突发性能实例，还可以切换性能突发模式。
   */
  export namespace ModifyInstanceAttribute {
    export type Params = {
      /** 实例ID。 */
      InstanceId: string;
      /** 实例的密码。支持长度为8~30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：

      ```
      ()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
      ```

      其中，Windows实例不能以斜线号（/）为密码首字符。

      > 如果传入`Password`参数，建议您使用HTTPS协议发送请求，避免密码泄露。 */
      Password?: string;
      /** 操作系统的主机名。您需要注意：

      - 修改主机名时，实例不能处于创建中（`Pending`）或启动中（`Starting`）的状态，否则可能出现主机名以及`/etc/hosts`配置失效等情况。您可以调用[DescribeInstances](https://help.aliyun.com/document_detail/25506.html)查询实例当前的状态信息。

      - 修改主机名后，请调用[RebootInstance](https://help.aliyun.com/document_detail/25502.html)重启实例，使修改生效。


      不同操作系统主机名存在以下限制：

      - Windows Server系统：长度为2-15个字符，允许使用大小写字母、数字或短划线（-）。不能以短划线（-）开头或结尾，不能连续使用短划线（-），也不能仅使用数字。

      - 其他类型实例（Linux等）：长度为2-64个字符，允许使用半角句号（.）分隔字符成多段，每段允许使用大小写字母、数字或连字符（-），但不能连续使用半角句号（.）或短划线（-）。不能以半角句号（.）或短划线（-）开头或结尾。 */
      HostName?: string;
      /** 实例名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      InstanceName?: string;
      /** 实例描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
      Description?: string;
      /** 实例自定义数据，需要以Base64编码。

      编码前，原始数据不能超过16KB。建议不要明文传入敏感信息，例如密码和私钥等。如果必须传入敏感信息，建议您加密后再以Base64编码传入，在实例内部以同样的方式解密。 */
      UserData?: string;
      /** >该参数正在邀测中，暂不开放使用。 */
      Recyclable?: boolean;
      /** 修改突发性能实例的运行模式。取值范围：

      - Standard：标准模式。
      - Unlimited：无性能约束模式。

      关于突发性能实例运行模式的更多信息，请参见[什么是突发性能实例](https://help.aliyun.com/document_detail/59977.html)。 */
      CreditSpecification?: string;
      /** 实例释放保护属性。指定是否支持通过控制台或API（[DeleteInstance](https://help.aliyun.com/document_detail/25507.html)）释放实例。

      > 该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。 */
      DeletionProtection?: boolean;
      /** 主网卡队列数。
       */
      NetworkInterfaceQueueNumber?: number;
      /** 实例重新加入的安全组列表。

      - 安全组ID不能重复。
      - 实例会离开当前的安全组，如需保留设置，您需要在列表中添加当前的安全组ID。
      - 支持切换安全组类型，但设置的安全组列表中不能同时包含普通安全组和企业安全组。
      - 安全组必须和实例属于同一个VPC。
      - N的取值范围与实例能够加入安全组配额有关。更多信息，请参见[使用限制](https://help.aliyun.com/document_detail/25412.html#SecurityGroupQuota1)。
      - 修改安全组后很快会生效于对应的实例，但可能有较小的延迟。 */
      SecurityGroupIds?: Array<string>;
      /** >该参数正在邀测中，暂不开放使用。 */
      RemoteConnectionOptions?: {
        /** >该参数正在邀测中，暂不开放使用。 */
        Password?: string;
        /** >该参数正在邀测中，暂不开放使用。 */
        Type?: string };
      /** 实例MTU是否开启Jumbo frame通信模式，取值范围：

      -true：开启。

      -false：不开启。

      目前仅部分规格支持开启Jumbo frame。更多信息，请参见[ECS实例MTU](https://help.aliyun.com/document_detail/200512.html)。 */
      EnableJumboFrame?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceAutoReleaseTime
   * 调用ModifyInstanceAutoReleaseTime为一台按量付费ECS实例设定或者取消自动释放时间。设置自动释放时请谨慎操作，配置的时间到期后将自动释放ECS实例。
   * @summary: 调用ModifyInstanceAutoReleaseTime为一台按量付费ECS实例设定或者取消自动释放时间。设置自动释放时请谨慎操作，配置的时间到期后将自动释放ECS实例。
   */
  export namespace ModifyInstanceAutoReleaseTime {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId?: string;
      /** 需要自动释放的ECS实例ID。 */
      InstanceId: string;
      /** 自动释放时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。

      - 如果秒（`ss`）取值不是`00`，则自动取为当前分钟（`mm`）开始时。

      - 最短释放时间为当前时间半小时之后。

      - 最长释放时间不能超过当前时间三年。

      如果不传入参数`AutoReleaseTime`，表示自动释放功能已取消，ECS实例不再自动释放。 */
      AutoReleaseTime?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceAutoRenewAttribute
   * 请确保在使用该接口前，您已充分了解[云服务器ECS](https://www.aliyun.com/price/product#/ecs/detail)的计费方式和产品定价。
   * - 自动续费扣款日为实例到期前第9天，扣费在北京时间（UTC +8）08:00:00开始执行。
   * - 如果新建实例的购买时长为一周，则会在创建成功的第一天自动扣款续费。- 如果前一日执行自动扣费失败，将会继续下一日定时继续执行，直到扣费成功或者9天之后实例到期锁定。您只需要保证自己的账号的余额或者信用额度充足即可。
   * @summary: 调用ModifyInstanceAutoRenewAttribute设置一台或多台包年包月实例的自动续费状态。为了减少您的资源到期维护成本，包年包月ECS实例可以设置自动续费。
   */
  export namespace ModifyInstanceAutoRenewAttribute {
    export type Params = {
      /** 实例ID。支持批量设置最多100个包年包月实例，多个实例ID以英文逗号分隔。 */
      InstanceId: string;
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 设置实例自动续费时长。

      - `PeriodUnit`为`Year`（年）时，`Duration`的取值范围为：{"1", "2", "3", "4", "5"}
      - `PeriodUnit`为`Month`（月）时，`Duration`的取值范围为：{"1", "2", "3", "6", "12", "24", "36", "48", "60"}
      - `PeriodUnit`为`Week`（周）时，`Duration`的取值范围为：{"1", "2", "3", "4"}

       */
      Duration?: number;
      /** 实例到期前是否自动续费。

      默认值：false */
      AutoRenew?: boolean;
      /** 实例的自动续费状态。取值范围：

      - AutoRenewal：设置为自动续费。

      - Normal：取消自动续费。

      - NotRenewal：不再续费。传入该值后，系统不再发送到期提醒，只在到期前第三天发送不续费提醒。不再续费的ECS实例可以更改成待续费（`Normal`）后，再自行续费或设置为自动续费。

      > 参数`RenewalStatus`的优先级高于参数`AutoRenew`。如果不传入参数`RenewalStatus`，则默认以参数`AutoRenew`为准。 */
      RenewalStatus?: string;
      /** 续费时长的时间单位，即参数`Duration`的单位。取值范围：

      - Week
      - Month（默认）
      - Year

       */
      PeriodUnit?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceChargeType
   * 请确保在使用该接口前，您已充分了解[云服务器ECS](https://www.aliyun.com/price/product#/ecs/detail)的计费方式和产品定价。</props>
   * 
   * 调用该接口时，您需要注意：
   * 
   * - 目标实例的状态必须为**运行中**（`Running`）或者**已停止**（`Stopped`），并且无欠费的情况下才能修改计费方式。
   * - 更换计费方式后，默认自动扣费。您需要确保账户余额充足，否则会生成异常订单，此时只能作废订单。如果您的账户余额不足，可以将参数`AutoPay`置为`false`，此时会生成正常的未支付订单，您可以登录[ECS管理控制台](https://ecs.console.aliyun.com/)支付。
   * - **包年包月转按量付费**：
   *     - 是否支持包年包月转按量付费功能，是根据您的云服务器使用情况而定的。
   *     - 包年包月实例转按量实例的时候，新计费方式将覆盖实例的整个生命周期。您会收到修改前后的实例计费的价格差退款，退还到您的原付款渠道中，已使用的代金券将不退回。更多信息，请参见[退款规则](https://help.aliyun.com/document_detail/116043.html)。
   *     - **退款规则**：您在一个月内能自由操作的退款额度有限且不累计，消耗完退款额度后，只能等待次月转换计费方式。一次转换计费消耗的退款额度公式为**vCPU数 \*（退款天数*24±浮动小时数）**。
   * - **按量付费转包年包月**：
   *     - 支持将实例挂载的所有按量付费数据盘同时转换为包年包月数据盘。
   *     - 如果按量付费实例已经设置了释放时间，则不能调用该接口。
   * @summary: 调用ModifyInstanceChargeType更换一台或者多台ECS实例的计费方式。支持在按量付费实例和包年包月实例间相互转换，同时可以将实例挂载的所有按量付费云盘转换为包年包月云盘。
   */
  export namespace ModifyInstanceChargeType {
    export type Params = {
      /** 实例ID。取值可以由多台实例ID组成一个JSON数组，最多支持20个ID，ID之间用半角逗号（,）隔开。 */
      InstanceIds: string;
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 包年包月续费时长。如果ECS实例的宿主机为专有宿主机DDH，则取值范围不能超过专有宿主机的订阅时长。取值范围：

      - `PeriodUnit=Week`时，`Period`取值：1、2、3、4。
      - `PeriodUnit=Month`时，`Period`取值：1、2、3、4、5、6、7、8、9、12、24、36、48、60。
       */
      Period?: number;
      /** 续费时长的时间单位，即参数`Period`的单位。取值范围：

      - Week：周。
      - Month：月。

      默认值为Month。 */
      PeriodUnit?: string;
      /** 是否将实例挂载的所有按量付费数据盘一起转换为包年包月数据盘。

      默认值为false。 */
      IncludeDataDisks?: boolean;
      /** 是否只预检此次请求。取值范围：

      - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。

      - false：发送正常请求，通过检查后返回2XX的HTTP状态码并直接查询资源状况。

      默认值为false。 */
      DryRun?: boolean;
      /** 是否自动支付。取值范围：

      - true：自动支付。您需要确保账户余额充足，如果账户余额不足会生成异常订单，只能作废订单。

      - false：只生成订单不扣费。

      默认值为true。

      > 如果您的支付方式余额不足，可以将参数AutoPay设置为false，此时会生成未支付订单，您可以登录ECS管理控制台自行支付。 */
      AutoPay?: boolean;
      /** 实例需要修改的目标计费方式。取值范围：

      - PrePaid：将按量付费实例转换为包年包月实例。

      - PostPaid：将包年包月实例转换为按量付费实例。

      默认值为PrePaid。 */
      InstanceChargeType?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 包年包月转换为按量计费时，是否返回订单费用详情。

      默认值为false。 */
      IsDetailFee?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 订单费用详情。 */
      FeeOfInstances?: Array<{
        /** 账单费用货币单位。

        中国站：CNY。

        国际站：USD。 */
        Currency?: string;
        /** 费用数值。 */
        Fee?: string;
        /** 实例ID。 */
        InstanceId?: string }>;
      /** 生成的订单ID。 */
      OrderId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceDeployment
   * 迁移ECS实例至专有宿主机，或在迁移实例同时变更ECS实例规格时，必须满足以下条件：
   * 
   * - ECS实例必须处于**已停止**（Stopped）状态，迁移后实例自动重启。
   * - 只支持专有网络VPC类型的ECS实例。
   * - ECS实例与专有宿主机必须属于同一账号、同一地域和可用区。
   * - 按量付费ECS实例可以迁移到包年包月专有宿主机上。包年包月ECS实例只能在包年包月专有宿主机之间迁移，且实例到期时间不能超过目标专有宿主机的到期时间。
   * - 将ECS实例从共享宿主机迁移至专有宿主机时，实例的计费方式只能是按量付费，不支持包年包月实例和抢占式实例。
   * - ECS实例可以指定专有宿主机集群重新部署。
   * @summary: 调用ModifyInstanceDeployment修改ECS实例的部署集，或迁移ECS实例至专有宿主机。支持在迁移ECS实例的同时变更实例规格。
   */
  export namespace ModifyInstanceDeployment {
    export type Params = {
      /** 实例所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例ID。 */
      InstanceId: string;
      /** 专有宿主机ID。调用[DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html)查看可以使用的专有宿主机。

      修改ECS实例宿主机（即将ECS实例从共享宿主机迁移至专有宿主机，或在不同专有宿主机间迁移ECS实例）时：
      - 若将实例迁移至指定专有宿主机上，必须设置该参数。
      - 若将实例迁移至系统自动为您选择的专有宿主机上，必须将该参数设置为空，并将参数`Tenancy`设置为host。

      自动部署功能详情，请参见[专有宿主机功能特性](https://help.aliyun.com/document_detail/118938.html)。 */
      DedicatedHostId?: string;
      /** 部署集ID。

      将ECS实例加入一个部署集，或调整ECS实例的部署集时，该参数为必填参数。

      > 修改专有宿主机的相关参数（`Tenancy`、`Affinity`和`DedicatedHostId`）时，不可同时修改部署集。 */
      DeploymentSetId?: string;
      /** 当ECS实例要加入或调整的部署集策略为部署集组高可用策略（AvailabilityGroup）时，可以通过该参数指定实例在部署集中的分组号。取值范围：1~7。

      > 如果您为ECS实例调整部署集，且部署集策略为部署集组高可用策略（`AvailablilityGroup`），当不指定该参数时，系统会自动在各组之间均衡分配ECS实例。如果您为ECS实例指定的仍是当前实例所属的部署集，系统也会重新在各组之间均衡分配ECS实例。 */
      DeploymentSetGroupNo?: number;
      /** 实例在调整部署集时，是否强制更换实例宿主机。取值范围：
               
      - true：允许。允许重启运行中（Running）、已停止（Stopped）状态的ECS实例。已停止状态的实例不包括启用节省停机模式的按量付费ECS实例。
          > 如果您指定的ECS实例搭载了本地盘，则本地盘也会允许强制更换，这可能导致在更换宿主机时本地盘数据丢失，请谨慎操作。

      - false：不允许。只在当前宿主机上加入部署集。这可能导致更换部署集失败。

      默认值：false。 */
      Force?: boolean;
      /** 实例是否与专有宿主机关联。取值范围：

      - host：关联。已启用节省停机模式的实例停机后再次启动时，仍部署在原专有宿主机上。

      - default：不关联。已启用节省停机模式的实例停机后再次启动时，若原专有宿主机资源不足，可迁移至自动部署资源池中的其它专有宿主机上。

      实例从共享宿主机迁移至专有宿主机时，默认值为default。 */
      Affinity?: string;
      /** 实例是否在专有宿主机上部署。取值：host，仅支持实例在专有宿主机上部署。 */
      Tenancy?: string;
      /** 是否先停止实例，再迁移到目标专有宿主机。取值范围：

      - reboot：先停止实例再迁移。

      - live：不停止实例，直接迁移。此时，您必须指定参数DedicatedHostId。该取值不支持在迁移ECS实例的同时变更实例规格。

      默认值：reboot。 */
      MigrationType?: string;
      /** ECS实例要变更的目标实例规格。调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)接口可获取最新实例规格列表。

      修改ECS实例宿主机时，可同时变更ECS实例规格。目标实例规格必须与指定专有宿主机的规格相匹配，详情请参见[宿主机规格](https://help.aliyun.com/document_detail/68564.html)。
      - 变更实例规格时，必须指定专有宿主机ID，即设置参数`DedicatedHostId`的值。
      - 使用自动部署功能迁移ECS实例时，不能变更实例规格。



       */
      InstanceType?: string;
      /** 专有宿主机集群ID。 */
      DedicatedHostClusterId?: string;
      /** 是否将所选实例移出所选部署集。取值范围：

      - true：是。

      - false：否。

      默认值：false。

      > 当该参数为true时，必须指定具有所属关系的InstanceId和DeploymentSetId。 */
      RemoveFromDeploymentSet?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceMaintenanceAttributes
   * 修改实例的维护策略，策略中包含两个维护属性。
   * 
   * - 维护时间窗口：您指定的一段时间，运维只会在该时间内进行。
   * - 维护动作：您指定的实例宕机处理策略。
   * @summary: 调用ModifyInstanceMaintenanceAttributes修改实例的维护属性。
   */
  export namespace ModifyInstanceMaintenanceAttributes {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 维护动作。取值范围：

      - Stop：停止状态（即宕机）。
      - AutoRecover：自动恢复。
      - AutoRedeploy：宕机迁移，数据盘有损。 */
      ActionOnMaintenance?: string;
      /** 实例宕机运维前是否发送事件通知。取值范围：

      - true：发送事件通知。
      - false：不发送事件通知。

      默认值：false */
      NotifyOnMaintenance?: boolean;
      /** 实例ID。N的取值范围为：1~100。 */
      InstanceId?: Array<string>;
      /** 维护时间窗口列表。 */
      MaintenanceWindow?: Array<{
        /** 维护时间窗口结束时间。必须为整小时，不允许设置分、秒。开始时间和结束时间必须同时设置，并且结束时间与开始时间需要间隔1~23个整小时。采用UTC +8时区，格式为`HH:mm:ss`。N的取值为1，只支持设置1个时间窗口。 */
        EndTime?: string;
        /** 维护时间窗口开始时间。必须为整小时，不允许设置分、秒。开始时间和结束时间必须同时设置，并且结束时间与开始时间需要间隔1~23个整小时。采用UTC +8时区，格式为`HH:mm:ss`。N的取值为1，只支持设置1个时间窗口。 */
        StartTime?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceMetadataOptions
   * 调用ModifyInstanceMetadataOptions修改一台实例的元数据信息。
   * @summary: 调用ModifyInstanceMetadataOptions修改一台实例的元数据信息。
   */
  export namespace ModifyInstanceMetadataOptions {
    export type Params = {
      /** 实例所在地域的ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 指定的实例ID。 */
      InstanceId?: string;
      /** 是否启用实例元数据的访问通道。取值范围：
      - enabled：启用。
      - disabled：禁用。

      默认值：enabled。
      > 有关实例元数据的信息，请参见[实例元数据概述](https://help.aliyun.com/document_detail/49122.html)。 */
      HttpEndpoint: string;
      /** 访问实例元数据时是否强制使用加固模式（IMDSv2）。取值范围：
      - optional：不强制使用。
      - required：强制使用。设置该取值后，普通模式无法访问实例元数据。

      默认值：optional。
      > 有关访问实例元数据的模式，请参见[实例元数据访问模式](https://help.aliyun.com/document_detail/150575.html)。 */
      HttpTokens?: string;
      /** >该参数正在邀测中，暂未开放使用。 */
      HttpPutResponseHopLimit?: number;
      /** >该参数正在邀测中，暂未开放使用。 */
      InstanceMetadataTags?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceNetworkSpec
   * 调用该接口时，您需要注意：
   * 
   * - 自2020年11月27日起，创建和变配ECS实例时带宽峰值受账户限速策略影响。如需更大带宽峰值，请提交工单。具体限速策略如下：
   *     - 单个地域下，所有按使用流量计费ECS实例的实际运行带宽峰值总和不大于5 Gbit/s。
   *     - 单个地域下，所有按固定带宽计费ECS实例的实际运行带宽峰值总和不大于50 Gbit/s。
   * 
   * -  修改包年包月（PrePaid）实例的带宽配置时，公网出带宽（InternetMaxBandwidthOut）从0 Mbit/s升级到一个非零值时会自动分配一个公网IP。
   * 
   * -  修改按量付费（PostPaid）实例的带宽配置时，公网出带宽（InternetMaxBandwidthOut）从0 Mbit/s升级到一个非零值时不会自动分配公网IP。您需要调用[AllocatePublicIpAddress](https://help.aliyun.com/document_detail/25544.html)为实例分配公网IP。
   * 
   * -  对于经典网络（Classic）类型实例，当公网出带宽（InternetMaxBandwidthOut）从0 Mbit/s升级到一个非零值时，实例必须处于已停止（Stopped）状态。
   *   
   * - 升级带宽后，默认自动扣费。您需要确保支付方式余额充足，否则会生成异常订单，此时只能作废订单。如果您的账户余额不足，可以将参数AutoPay置为false，此时会生成正常的未支付订单，您可以登录ECS管理控制台支付。
   * 
   * -  修改带宽配置前后的价格差退款会退还到您的原付费方式中，已使用的代金券不退回。
   * @summary: 调用ModifyInstanceNetworkSpec修改ECS实例的带宽配置。当实例现有网络规格不满足要求时，可以通过修改实例的带宽配置提高网络性能。
   */
  export namespace ModifyInstanceNetworkSpec {
    export type Params = {
      /** 需要修改网络配置的实例ID。 */
      InstanceId: string;
      /** 公网出带宽最大值，单位：Mbit/s（Megabit per second）。取值范围：0~100。 */
      InternetMaxBandwidthOut?: number;
      /** 设置公网入带宽最大值，单位：Mbit/s（Megabit per second）。取值范围：

      - 当所购公网出带宽小于等于10 Mbit/s时：1~10，默认为10。
      - 当所购公网出带宽大于10 Mbit/s时：1~`InternetMaxBandwidthOut`的取值，默认为`InternetMaxBandwidthOut`的取值。 */
      InternetMaxBandwidthIn?: number;
      /** > 该参数正在邀测中，暂未开放使用。 */
      ISP?: string;
      /** 转换网络计费方式。取值范围：

      - PayByBandwidth：按固定带宽计费。
      - PayByTraffic：按使用流量计费。

      > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。

       */
      NetworkChargeType?: string;
      /** 是否分配公网IP地址。

      默认值：false */
      AllocatePublicIp?: boolean;
      /** 临时带宽升级开始时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddThh:mmZ。精确到**分钟**（mm）。 */
      StartTime?: string;
      /** 临时带宽升级结束时间。按照[ISO8601](https://help.aliyun.com/document_detail/25696.html)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddThhZ。精确到**小时**（hh）。

      > 临时升级带宽的结束时间和开始时间的间隔必须大于或等于3小时。 */
      EndTime?: string;
      /** 是否自动支付。取值范围： 

      - true：变更带宽配置后，自动扣费。当您将参数Autopay置为true时，您需要确保账户余额充足，如果账户余额不足会生成异常订单，此订单暂时不支持通过ECS控制台支付，只能作废。  

      - false：变更带宽配置后，只生成订单不扣费。如果您的支付方式余额不足，可以将参数Autopay置为false，即取消自动支付，此时调用该接口会生成正常的未支付订单，此订单可登录[ECS管理控制台](https://ecs.console.aliyun.com)支付。

      默认值：true */
      AutoPay?: boolean;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 生成的订单ID。 */
      OrderId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceSpec
   * 请确保在使用该接口前，您已充分了解[云服务器ECS](https://www.aliyun.com/price/product#/ecs/detail)的计费方式和产品定价。更多有关资源变配的Python SDK示例信息，请参见[查询可用的变配资源](https://help.aliyun.com/document_detail/109517.html)。
   * 
   * 调用该接口时，您需要注意：
   * 
   * - 账号必须处于无欠费状态。
   * - 实例状态必须为**运行中**（`Running`）或者**已停止**（`Stopped`）时才能调节公网带宽大小。
   * - 升级或者降低按量付费实例规格前，您可以通过[DescribeResourcesModification](https://help.aliyun.com/document_detail/66187.html)查询当前实例支持变配的实例规格。
   * - 实例状态必须为**已停止**（`Stopped`）时才能变更实例规格。
   * - 单次只能升级单项配置，即单次只能修改实例规格，或者只能调整公网带宽大小。
   * - 自2020年11月27日起，创建和变配ECS实例时带宽峰值受账户限速策略影响。如需更大带宽峰值，请提交工单。具体限速策略如下：
   *     - 单个地域下，所有按使用流量计费ECS实例的实际运行带宽峰值总和不大于5 Gbit/s。
   *     - 单个地域下，所有按固定带宽计费ECS实例的实际运行带宽峰值总和不大于50 Gbit/s。
   * @summary: 调用ModifyInstanceSpec调整一台按量付费ECS实例的实例规格和公网带宽大小。
   */
  export namespace ModifyInstanceSpec {
    export type Params = {
      /** 指定的实例ID。 */
      InstanceId: string;
      /** 实例的目标规格。更多详情，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)，也可以调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)接口获得最新的规格表。 */
      InstanceType?: string;
      /** 公网出带宽最大值，单位为Mbit/s（Megabit per second）。取值范围：0~100。

      > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。

       */
      InternetMaxBandwidthOut?: number;
      /** 公网入带宽最大值，单位为Mbit/s（Megabit per second）。取值范围：

      - 当所购公网出带宽小于等于10 Mbit/s时：1~10，默认为10。
      - 当所购公网出带宽大于10 Mbit/s时：1~`InternetMaxBandwidthOut`的取值，默认为`InternetMaxBandwidthOut`的取值。

      > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。
       */
      InternetMaxBandwidthIn?: number;
      /** >该参数正在邀测中，暂未开放使用。 */
      'Temporary.StartTime'?: string;
      /** >该参数正在邀测中，暂未开放使用。 */
      'Temporary.EndTime'?: string;
      /** >该参数正在邀测中，暂未开放使用。 */
      'Temporary.InternetMaxBandwidthOut'?: number;
      /** 是否提交异步请求。

      默认值：false */
      Async?: boolean;
      /** 是否支持跨集群升级实例规格。

      默认值：false

      当参数`AllowMigrateAcrossZone`取值为true时，一旦您根据返回信息升级了云服务器，请留意以下注意事项：

      经典网络类型实例：
          
      * 对于[已停售的实例规格](https://help.aliyun.com/document_detail/55263.html)，非I/O优化实例变配到I/O优化实例时，实例私网IP地址、磁盘设备名和软件授权码会发生变化。对于Linux实例，普通云盘（`cloud`）会被识别为**xvda**或者**xvdb**等，高效云盘（`cloud_efficiency`）和SSD云盘（`cloud_ssd`）会被识别为**vda**或者**vdb**等。
          
      * 对于[正常售卖的实例规格族](https://help.aliyun.com/document_detail/25378.html)，实例的私网IP地址会发生变化。

      专有网络VPC类型实例：对于[已停售的实例规格](https://help.aliyun.com/document_detail/55263.html)，非I/O优化实例变配到I/O优化实例时，云服务器磁盘设备名和软件授权码会发生变化。Linux实例的普通云盘（`cloud`）会被识别为**xvda**或者**xvdb**等，高效云盘（`cloud_efficiency`）和SSD云盘（`cloud_ssd`）会被识别为**vda**或者**vdb**等。 */
      AllowMigrateAcrossZone?: boolean;
      /** 更换系统盘类型。该参数只有在从[已停售的实例规格](https://help.aliyun.com/document_detail/55263.html)升级到[正常售卖的实例规格族](https://help.aliyun.com/document_detail/25378.html)，并将非I/O优化实例规格升级为I/O优化实例规格时有效。取值范围：

      - cloud_efficiency：高效云盘

      - cloud_ssd：SSD云盘 */
      'SystemDisk.Category'?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** >该参数暂未开放使用。 */
      ModifyMode?: 'Online' | 'Offline';
      /** >该参数暂未开放使用。 */
      Disk?: Array<{
        /** >该参数暂未开放使用。 */
        Category?: string;
        /** >该参数暂未开放使用。 */
        DiskId?: string;
        /** >该参数暂未开放使用。 */
        PerformanceLevel?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceVncPasswd
   * - 密码长度必须是六位字符，必须且仅能包含大写、小写英文字母及阿拉伯数字三种字符。
   * - 修改密码后：
   *     - I/O优化的实例，立刻生效，无需重启实例。
   *     - 非I/O优化的实例，需要在控制台[重启实例](https://help.aliyun.com/document_detail/25440.html)或者调用API [RebootInstance](https://help.aliyun.com/document_detail/25502.html)才能生效。
   * @summary: 调用ModifyInstanceVncPasswd修改一台ECS实例的Web管理终端密码。
   */
  export namespace ModifyInstanceVncPasswd {
    export type Params = {
      /** ECS实例。 */
      InstanceId: string;
      /** ECS实例所在的地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 新的ECS实例管理终端连接密码。 */
      VncPassword: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceVpcAttribute
   * 调用接口时，ECS实例的状态必须是**已停止**（`Stopped`）。
   * 
   * - 当您使用该接口修改实例的私网IP地址或虚拟交换机时，请注意：
   * 
   *     - 新建的ECS实例必须经过重启才能调用该接口。
   *     - 成功修改一次后，ECS实例必须经过重启才能继续调用该接口。
   * 
   * - 当您使用该接口修改实例的专有网络VPC时，请注意：
   * 
   *     - **实例：**
   *         - 不支持已关联负载均衡实例的ECS实例。
   *         - 实例的状态不能为已锁定、等待释放、已过期、过期回收中、欠费回收中。更多信息，请参见[实例生命周期介绍](https://help.aliyun.com/document_detail/25380.html)。
   *         - 实例不能在其它云服务中被使用。例如，实例不能在迁移中、不能已在更换VPC或实例内部署的数据库不能被DTS服务管理等。
   *     
   *     - **网络：**
   *         - 不支持配置了EIP网卡可见模式或多EIP网卡可见模式的实例。
   *         - 不支持绑定高可用虚拟IP（HaVip）的实例。
   *         - 不支持交换机绑定了自定义路由表的实例。
   *         - 不支持开通了全球加速（GA）的实例。
   *         - 不支持绑定辅助网卡的实例。
   *         - 不支持已分配IPv6地址的实例。
   *         - 不支持主网卡有多IP的实例。
   *         - 传入的虚拟交换机必须属于目标VPC。
   *         - 修改前后虚拟交换机可用区必须一致。
   *         - 如果指定主网卡私网IP，则IP必须在虚拟交换机地址段内且可用。如果不指定则随机分配，且目标虚拟交换机的可用IP数充足。
   *         - 如果目标VPC开启了高级网络特性，则需要注意部分实例规格族不支持该特性。更多信息，请参见[不支持VPC高阶特性的实例规格族](https://help.aliyun.com/document_detail/163466.html)。
   *         - 目标VPC的所有者账号（资源所有者），不能将该目标VPC共享给其他账号（资源使用者）使用。
   *     
   *     - **安全组（SecurityGroupId.N）：**
   *         - 安全组列表必须属于同一种类型。
   *         - 安全组的配额与实例能够加入安全组的限制有关。更多信息，请参见[使用限制](https://help.aliyun.com/document_detail/25412.html)。
   *         - 安全组所属的VPC必须与目标VPC一致。
   *         - 支持切换安全组的类型。
   *           当ECS实例跨类型切换安全组时，您需要充分了解两种安全组规则的配置区别，避免影响实例网络。更多信息，请参见[安全组概述](https://help.aliyun.com/document_detail/25387.html)。
   * @summary: 调用ModifyInstanceVpcAttribute修改一台专有网络类型ECS实例的专有网络VPC、私网IP地址或虚拟交换机。
   */
  export namespace ModifyInstanceVpcAttribute {
    export type Params = {
      /** 实例ID。 */
      InstanceId: string;
      /** 虚拟交换机ID。

      - 传入的ID为实例的当前虚拟交换机时，表明实例不变更虚拟交换机。
      - 传入的ID为一台新的虚拟交换机，并且参数`VpcId`为空时，新旧虚拟交换机必须属于同一个可用区、同一个专有网络VPC。
      - 当参数`VpcId`不为空时，该参数传入的虚拟交换机ID必须属于VpcId，并且和原虚拟交换机属于同一个可用区。 */
      VSwitchId: string;
      /** 新的私网IP地址。

      >`PrivateIpAddress`依赖于`VSwitchId`，指定的IP地址必须在虚拟交换机子网网段中。

      默认值：当不传该值时，从虚拟交换机子网网段中随机分配。 */
      PrivateIpAddress?: string;
      /** 目标VPC ID。 */
      VpcId?: string;
      /** 实例修改VPC后加入的安全组ID列表。当且仅当传入`VpcId`参数时，需要同时传入该参数。

      - 安全组类型必须一致。
      - 指定实例修改后加入的安全组列表，可以是一个或者多个。参数中N的取值范围与实例能够加入安全组的限制有关。更多信息，请参见[使用限制](https://help.aliyun.com/document_detail/25412.html)。
      - 专有网络类型ECS实例的安全组必须属于`VpcId`所在的VPC。 */
      SecurityGroupId?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyLaunchTemplateDefaultVersion
   * 调用ModifyLaunchTemplateDefaultVersion切换启动模板的某个版本为该模板的默认版本。如果您在创建实例（RunInstances）时不指定模板版本号，会采用默认版本。
   * @summary: 调用ModifyLaunchTemplateDefaultVersion切换启动模板的某个版本为该模板的默认版本。如果您在创建实例（RunInstances）时不指定模板版本号，会采用默认版本。
   */
  export namespace ModifyLaunchTemplateDefaultVersion {
    export type Params = {
      /** 模板所属的地域ID。您可以调用 [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) 查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 启动模板ID。您必须指定LaunchTemplateId或LaunchTemplateName以确定模板。  */
      LaunchTemplateId?: string;
      /** 启动模板名称。您必须指定LaunchTemplateId或LaunchTemplateName以确定模板。  */
      LaunchTemplateName?: string;
      /** 设置为默认版本的启动模板版本号。 */
      DefaultVersionNumber: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 启动模板ID。更多信息，请参见[DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html)。

      使用启动模板创建实例时，您必须指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板。 */
      LaunchTemplateId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyManagedInstance
   * ## 接口说明
   * 
   * 目前调用ModifyManagedInstance接口仅支持修改一台托管实例的名称。
   * @summary: 调用ModifyManagedInstance修改一台托管实例的相关信息。
   */
  export namespace ModifyManagedInstance {
    export type Params = {
      /** 地域ID。目前支持的地域：华北1（青岛）、华北2（北京）、华北3（张家口）、华北5（呼和浩特）、华北6（乌兰察布）、华东1（杭州）、华东2（上海）、华南1（深圳）、华南2（河源）、华南3（广州）、西南1（成都）、中国香港、新加坡、日本（东京）、美国（硅谷）、美国（弗吉尼亚）。

      您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看地域对应的ID等信息。 */
      RegionId: string;
      /** 托管实例的ID。 */
      InstanceId: string;
      /** 托管实例的名称。支持2~128个字符，且必须以字母开头，不能以特殊字符及数字开头。只可包含特殊字符中的半角句号（.）、下划线（_）、短划线（-）和半角冒号（:），不可以使用`http://`或`https://`开头。 */
      InstanceName: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 托管实例信息组成的集合。 */
      Instance?: {
        /** 托管实例的ID。 */
        InstanceId?: string;
        /** 托管实例的名称。 */
        InstanceName?: string };
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute
   * 调用ModifyNetworkInterfaceAttribute修改一个弹性网卡（ENI）的名称、描述以及所属安全组等。
   * @summary: 调用ModifyNetworkInterfaceAttribute修改一个弹性网卡（ENI）的名称、描述以及所属安全组等。
   */
  export namespace ModifyNetworkInterfaceAttribute {
    export type Params = {
      /** 弹性网卡所在地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 弹性网卡的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。

      默认值：空。 */
      NetworkInterfaceName?: string;
      /** 弹性网卡ID。 */
      NetworkInterfaceId: string;
      /** 网卡队列数。取值范围：1~2048。

      - 只允许修改辅助网卡队列数。

      - 允许修改处于可用状态（`Available`）的辅助网卡队列数，或者已附加（`InUse`）至实例但实例为已停止（`Stopped`）状态的辅助网卡队列数。

      - 辅助网卡队列数不能超过实例规格允许的单块网卡最大队列数，同时实例的所有网卡累加队列数不能超过实例规格允许的队列数总配额。实例规格的单块网卡最大队列数和总配额可以通过[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)接口查询`MaximumQueueNumberPerEni`、`TotalEniQueueQuantity`字段。 */
      QueueNumber?: number;
      /** 弹性网卡的描述信息。长度为2~255个英文或中文字符，不能以http://和https://开头。

      默认值：空。 */
      Description?: string;
      /** SecurityGroupId列表，辅助弹性网卡最终加入的安全组，并会移出已有的安全组。

      - N的取值范围与每张弹性网卡能够加入的安全组数量配额有关，更多信息，请参见[使用限制](https://help.aliyun.com/document_detail/25412.html#SecurityGroupQuota)。

      - 修改安全组后很快会生效，但可能有较小的延迟。 */
      SecurityGroupId?: Array<string>;
      /** 释放实例时是否保留网卡。取值范围：

      - true：不保留。

      - false：保留。 */
      DeleteOnRelease?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyPhysicalConnectionAttribute
   * undefined
   * @deprecated
   */
  export namespace ModifyPhysicalConnectionAttribute {
    export type Params = {
      RegionId: string;
      PhysicalConnectionId: string;
      LineOperator?: string;
      bandwidth?: number;
      PeerLocation?: string;
      PortType?: string;
      RedundantPhysicalConnectionId?: string;
      Description?: string;
      Name?: string;
      ClientToken?: string;
      UserCidr?: string;
      CircuitCode?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyPrefixList
   * - 指定的CIDR地址块应当为标准形式。例如，10.0.0.0/8是正确形式的CIDR地址块，而10.0.0.1/8是错误形式。更多信息，请参见[什么是CIDR](https://help.aliyun.com/document_detail/40637.html#section-jua-0tj-q5m)。
   * - 新增或删除条目时，不能指定重复的CIDR地址块。例如：
   *     - 对于IPv4 CIDR地址块：不能同时指定两个CIDR地址块均为10.0.0.0/8的条目；不能同时指定两个CIDR地址块分别为10.0.0.1/32和10.0.0.1的条目，这两个地址块重复。
   *     - 对于IPv6 CIDR地址块：不能同时指定两个条目的CIDR地址块分别为2001:fd01:0:0:0:0:0:0/32和2001:fd01::/32，这两个地址块重复。
   * - 新增条目的CIDR地址块不能与删除条目的CIDR地址块重复。例如，在您新增CIDR地址块为10.0.0.0/8的条目时，不能在待删除的条目中包含CIDR地址块10.0.0.0/8。
   * - 若您需要修改条目的描述，需要指定条目的CIDR地址块（`AddEntry.N.Cidr`）和新的描述信息（`AddEntry.N.Description`）。
   * @summary: 调用ModifyPrefixList修改指定前缀列表的名称、描述和条目。
   */
  export namespace ModifyPrefixList {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 前缀列表ID。 */
      PrefixListId: string;
      /** 前缀列表的名称。长度为2~128个字符，必须以大小字母或中文开头，不能以`http://`、`https://`、`com.aliyun`和`com.alibabacloud`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。 */
      PrefixListName?: string;
      /** 前缀列表的描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。 */
      Description?: string;
      /** 添加的前缀列表信息。 */
      AddEntry?: Array<{
        /** 添加的前缀列表条目的CIDR地址块信息。N的取值范围：0~200。

        添加时请您注意：
        - 前缀列表的条目数量，不能大于前缀列表支持的最大条目容量。您可以调用[DescribePrefixListAttributes](https://help.aliyun.com/document_detail/205872.html)查询指定前缀列表的最大条目容量信息。
        - 不允许设置重复的CIDR地址块信息。
        - 不允许与`RemoveEntry.N.Cidr`参数值重复。 */
        Cidr: string;
        /** 前缀列表条目的描述信息。长度为2~32个英文或中文字符，不能以`http://`和`https://`开头。N的取值范围：0~200。 */
        Description?: string }>;
      /** 删除的前缀列表信息。 */
      RemoveEntry?: Array<{
        /** 删除的前缀列表条目的CIDR地址块信息。N的取值范围：0~200。

        删除时请您注意：
        - 不允许设置重复的CIDR地址块信息。
        - 不允许与`AddEntry.N.Cidr`参数值重复。 */
        Cidr: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyPrepayInstanceSpec
   * ## 接口说明
   * 请确保在使用该接口前，您已充分了解[云服务器ECS](https://www.aliyun.com/price/product#/ecs/detail)的计费方式、产品定价以及[降配退款规则](https://help.aliyun.com/document_detail/201955.html)。
   * 
   * 升级或者降低包年包月实例规格前，您可以通过[DescribeResourcesModification](https://help.aliyun.com/document_detail/66187.html)查询当前实例支持变配的实例规格。详情请参见Python SDK示例[查询ECS变配的可用资源实践](https://help.aliyun.com/document_detail/109517.html)。
   * 
   * 调用该接口时，您需要注意：
   * 
   * -   已过期实例无法修改实例规格，您可以续费后重新操作。
   * -   降低实例规格时，您需要注意：
   * 
   *     -   实例必须处于**已停止**（`Stopped`）状态。
   *     -   降低前后的实例规格价格差退款会退还到您的原付费方式中，已使用的代金券不退回。
   * 
   * -   本接口属于异步操作，等待约5~10秒后配置变更完成。随后，您必须调用API或者在控制台重启一次实例，否则规格变更不会生效，重启操作系统无效。
   * 
   *     - 若实例处于**已停止**状态，仅需启动实例，无需重启。
   *     - 若实例设置了`RebootWhenFinished=true`，则无需单独重启。
   * @summary: 调用ModifyPrepayInstanceSpec升级或者降低一台包年包月ECS实例的实例规格，新实例规格将会覆盖实例的整个生命周期。
   */
  export namespace ModifyPrepayInstanceSpec {
    export type Params = {
      /** 实例ID。 */
      InstanceId: string;
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 需要变配的目标实例规格。取值请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)或者调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)。 */
      InstanceType: string;
      /** 操作类型。取值范围：
      >该参数可无需上传，系统可自动判断升配还是降配；如要上传，请按照下面的逻辑规则操作。

      - upgrade：升级实例规格。请确保您的账户支付方式余额充足。

      - downgrade：降配实例规格。当`InstanceType`设置的实例规格低于当前实例规格时，设置`OperatorType=downgrade`。

      >升级或降低实例规格的注意事项请参见上文接口说明章节。 */
      OperatorType?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 升级实例规格时，是否自动支付。取值范围：

      - true：自动支付。
          > 自动支付时，您需要确保支付方式余额充足，否则会生成异常订单，只能作废订单。如果您的支付方式余额不足，可以将参数`AutoPay`置为`false`，此时会生成未支付订单，您可以登录ECS管理控制台自行支付。

      - false：只生成订单不扣费。

      默认值：true。

      当参数`OperatorType`被置为`downgrade`时，将忽略参数`AutoPay`。 */
      AutoPay?: boolean;
      /** 是否支持跨集群升级实例规格。取值范围：
      - true：是。
      - false：否。

      默认值：false。

      当参数`MigrateAcrossZone`取值为`true`时，一旦您根据返回信息升级了云服务器，请留意以下注意事项：

      经典网络类型实例：
      - 对于[已停售的实例规格](https://help.aliyun.com/document_detail/55263.html)，非I/O优化实例变配到I/O优化实例时，实例私网IP地址、磁盘设备名和软件授权码会发生变化。对于Linux实例，普通云盘（cloud）会被识别为xvda或者xvdb等，高效云盘（cloud_efficiency）和SSD云盘（cloud_ssd）会被识别为vda或者vdb等。
      - 对于[正常售卖的实例规格族](https://help.aliyun.com/document_detail/25378.html)，实例的私网IP地址会发生变化。

      专有网络VPC类型实例：对于已停售的实例规格，非I/O优化实例变配到I/O优化实例时，云服务器磁盘设备名和软件授权码会发生变化。Linux实例的普通云盘（cloud）会被识别为xvda或者xvdb等，高效云盘（cloud_efficiency）和SSD云盘（cloud_ssd）会被识别为vda或者vdb等。 */
      MigrateAcrossZone?: boolean;
      /** 更换系统盘类型。取值范围：

      - cloud_efficiency：高效云盘。
      - cloud_ssd：SSD云盘。
      >该参数仅支持从[已停售的实例规格](https://help.aliyun.com/document_detail/55263.html)升级到[正常售卖的实例规格族](https://help.aliyun.com/document_detail/25378.html)，并将非I/O优化实例规格升级为I/O优化实例规格时有效。 */
      'SystemDisk.Category'?: string;
      /** 实例的重启时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，使用UTC+0时间。格式为：yyyy-MM-ddTHH:mmZ。 */
      RebootTime?: string;
      /** 临时变更的终止时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，使用UTC+0时间。格式为：yyyy-MM-ddTHH:mmZ。 */
      EndTime?: string;
      /** 实例变配结束后是否立即重启。取值范围：

      - true：是。
      - false：否。

      默认值为false。

      > 若实例处于**停止中**状态，即使您设置了`RebootWhenFinished=true`，也会保持原状态不变，并不会执行任何操作。 */
      RebootWhenFinished?: boolean;
      /** >该参数暂未开放使用。 */
      ModifyMode?: 'Online' | 'Offline';
      /** >该参数暂未开放使用。 */
      Disk?: Array<{
        /** >该参数暂未开放使用。 */
        Category?: string;
        /** >该参数暂未开放使用。 */
        DiskId?: string;
        /** >该参数暂未开放使用。 */
        PerformanceLevel?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 生成的订单ID。 */
      OrderId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyReservedInstanceAttribute
   * 调用ModifyReservedInstanceAttribute修改预留实例券的属性，包括名称和描述信息。
   * @summary: 调用ModifyReservedInstanceAttribute修改预留实例券的属性，包括名称和描述信息。
   */
  export namespace ModifyReservedInstanceAttribute {
    export type Params = {
      /** 资源所在的地域ID。 */
      RegionId: string;
      /** 预留实例券ID。 */
      ReservedInstanceId: string;
      /** 预留实例券的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      ReservedInstanceName?: string;
      /** 预留实例券的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。

      默认值：空。 */
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 返回错误码。 */
      Code?: string;
      /** HTTP状态码。 */
      HttpStatusCode?: number;
      /** 实例操作返回错误信息。返回值Success为成功，更多请参见下文错误码列表。 */
      Message?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyReservedInstanceAutoRenewAttribute
   * 调用ModifyReservedInstanceAutoRenewAttribute为一个或多个包年包月预留实例券设置自动续费，也可以取消已设定的自动续费。
   * @summary: 调用ModifyReservedInstanceAutoRenewAttribute为一个或多个包年包月预留实例券设置自动续费，也可以取消已设定的自动续费。
   */
  export namespace ModifyReservedInstanceAutoRenewAttribute {
    export type Params = {
      /** 预留实例券所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 自动续费周期。取值范围：



      - 当`PeriodUnit`为`Year`时，取值范围：1、3、5。

      - 当`PeriodUnit`为`Month`时，取值范围：1。 */
      Period?: number;
      /** 自动续费时长单位。



      取值范围：Month、Year。默认值：Month。 */
      PeriodUnit?: string;
      /** 是否自动续费包年包月预留实例券。取值范围：

      - AutoRenewal：自动续费。
      - Normal：手动续费。
       */
      RenewalStatus?: string;
      /** 预留实例券ID。 */
      ReservedInstanceId?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyReservedInstances
   * ## 接口描述
   *     
   * 调用该接口前，请阅读以下注意事项： 
   * - 预留实例券的使用限制，请参见[预留实例券概述](https://help.aliyun.com/document_detail/100370.html)中使用限制章节。
   * - 如果您需要拆分预留实例券，请先了解拆分预留实例券功能存在的限制，详情请参见[拆分预留实例券](https://help.aliyun.com/document_detail/100375.html)。
   * - 如果您需要合并预留实例券，请先了解合并预留实例券功能存在的限制，详情请参见[合并预留实例券](https://help.aliyun.com/document_detail/132229.html)。
   * - 如果您需要修改预留实例券，请先了解修改预留实例券功能的限制与方式，详情请参见[修改预留实例券](https://help.aliyun.com/document_detail/132230.html)。
   * @summary: 调用ModifyReservedInstances拆分、合并或修改预留实例券。
   */
  export namespace ModifyReservedInstances {
    export type Params = {
      /** 预留实例券所属的地域ID。

      您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 预留实例券ID。N的取值范围：1~20。 */
      ReservedInstanceId: Array<string>;
      /** 预留实例券的配置信息列表。 */
      Configuration?: Array<{
        /** 预留实例券可以同时匹配同规格按量付费实例的数量。取值范围：≥1。N的取值范围：1~100。 */
        InstanceAmount: number;
        /** 预留实例券可以同时匹配的实例规格。N的取值范围：1~100。

        > 适用的实例规格持续更新，详情请参见[预留实例券概述](https://help.aliyun.com/document_detail/100370.html)的预留实例券属性章节。 */
        InstanceType: string;
        /** 预留实例券的名称。N的取值范围：1~100。

        长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
        ReservedInstanceName?: string;
        /** 预留实例券的范围。取值范围： 

        - Region：地域级别
        - Zone：可用区级别

        N的取值范围：1~100。

        默认值：Region。 */
        Scope: string;
        /** 预留实例券所属的可用区编号。N的取值范围：1~100

        `Scope`参数值为`Zone`时，该参数为必填参数。

        您可以调用[DescribeZones](https://help.aliyun.com/document_detail/25609.html)获取可用区列表。  */
        ZoneId?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 预留实例券ID列表。

       */
      ReservedInstanceIdSets?: Array<string> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyRouterInterfaceAttribute
   * undefined
   * @deprecated
   */
  export namespace ModifyRouterInterfaceAttribute {
    export type Params = {
      RegionId: string;
      RouterInterfaceId: string;
      Name?: string;
      Description?: string;
      OppositeInterfaceId?: string;
      OppositeRouterId?: string;
      OppositeRouterType?: string;
      OppositeInterfaceOwnerId?: number;
      HealthCheckSourceIp?: string;
      HealthCheckTargetIp?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyRouterInterfaceSpec
   * undefined
   * @deprecated
   */
  export namespace ModifyRouterInterfaceSpec {
    export type Params = {
      RegionId: string;
      RouterInterfaceId: string;
      Spec: string;
      ClientToken?: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string;
      Spec?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifySecurityGroupAttribute
   * 调用ModifySecurityGroupAttribute修改一个安全组的名称或者描述。
   * @summary: 调用ModifySecurityGroupAttribute修改一个安全组的名称或者描述。
   */
  export namespace ModifySecurityGroupAttribute {
    export type Params = {
      /** 安全组ID。 */
      SecurityGroupId: string;
      /** 安全组描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。

      默认值：空 */
      Description?: string;
      /** 安全组名称。 长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。

      默认值：空 */
      SecurityGroupName?: string;
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifySecurityGroupEgressRule
   * 安全组相关的API文档中，入方向流量的发起端为源端（Source），数据传输的接收端为目的端（Dest）。
   * 
   * 在您指定安全组规则ID修改安全组规则时，您需要注意以下使用限制：
   * 
   * - 安全组规则的授权对象分为CIDR地址块（或IP地址）、安全组、前缀列表三种类型。您不能通过该接口修改已有安全组规则的授权对象类型。如原来授权对象类型为IP地址，您可以更改为另一个IP地址或CIDR地址块，但不能修改为安全组或前缀列表。
   * - 安全组规则授权对象的IP地址族不支持修改。如原安全组规则授权对象CIDR地址块为IPv4，您不能将其修改为IPv6的CIDR地址块。又如规则的授权对象为一个IPv4地址族的前缀列表，您不能将其修改为一个IPv6地址族的前缀列表。
   * - 修改后的安全组规则不能与已有其它规则相同。
   * - 字段不支持从非空修改为空，如果需要修改建议先增加一条新规则，再删除当前规则。
   * @summary: 调用ModifySecurityGroupEgressRule修改出方向安全组规则。
   */
  export namespace ModifySecurityGroupEgressRule {
    export type Params = {
      /** 源端安全组所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 安全组ID。 */
      SecurityGroupId: string;
      /** 安全组规则ID。   
      根据安全组规则ID修改规则时，该参数必填。 */
      SecurityGroupRuleId?: string;
      /** 访问权限。取值范围：

      - accept：接受访问。
      - drop：拒绝访问，不发回拒绝信息。

      默认值：accept */
      Policy?: string;
      /** 安全组规则优先级。取值范围：1~100

      默认值：1 */
      Priority?: string;
      /** 传输层协议。不区分大小写。取值范围：

      - ICMP
      - GRE
      - TCP
      - UDP
      - ALL：支持所有协议 */
      IpProtocol?: string;
      /** 目的端IPv4 CIDR地址块。支持CIDR格式和IPv4格式的IP地址范围。

      默认值：无 */
      DestCidrIp?: string;
      /** 目的端IPv6 CIDR地址块。支持CIDR格式和IPv6格式的IP地址范围。

      > 仅支持VPC类型的IP地址，且该参数与`DestCidrIp`参数不可同时设置。

      默认值：无 */
      Ipv6DestCidrIp?: string;
      /** 需要设置访问权限的目的端安全组ID。至少设置一项`DestGroupId`或者`DestCidrIp`参数。

      - 至少设置DestGroupId、DestCidrIp、Ipv6DestCidrIp或DestPrefixListId参数中的一项。
      - 如果指定了DestGroupId没有指定参数DestCidrIp，则参数NicType取值只能为intranet。
      - 如果同时指定了DestGroupId和DestCidrIp，则默认以DestCidrIp为准。 */
      DestGroupId?: string;
      /** 目的端前缀列表ID。您可以调用[DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html)查询可以使用的前缀列表ID。

      当您指定了`DestCidrIp`、`Ipv6DestCidrIp`或者`DestGroupId`参数中的一个时，将忽略该参数。 */
      DestPrefixListId?: string;
      /** 目的端安全组开放的传输层协议相关的端口范围。取值范围：

      - TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。例如：1/200
      - ICMP协议：-1/-1
      - GRE协议：-1/-1
      - ALL：-1/-1 */
      PortRange?: string;
      /** 源端IPv4 CIDR地址块。支持CIDR格式和IPv4格式的IP地址范围。

      默认值：无 */
      SourceCidrIp?: string;
      /** 源端IPv6 CIDR地址块。支持CIDR格式和IPv6格式的IP地址范围。

      > 仅支持VPC类型的IP地址，且该参数与`SourceCidrIp`参数不可同时设置。

      默认值：无 */
      Ipv6SourceCidrIp?: string;
      /** 源端安全组开放的传输层协议相关的端口范围。取值范围：

      - TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。例如：1/200
      - ICMP协议：-1/-1
      - GRE协议：-1/-1
      - ALL：-1/-1 */
      SourcePortRange?: string;
      /** 跨账户设置安全组规则时，目的端安全组所属的阿里云账户。 */
      DestGroupOwnerAccount?: string;
      /** 跨账户设置安全组规则时，目的端安全组所属的阿里云账户ID。 */
      DestGroupOwnerId?: number;
      /** 根据安全组规则ID修改规则时，不支持修改该参数。   
      如果需要修改，建议先增加一条新规则，再删除当前规则。 */
      NicType?: string;
      /** 安全组规则的描述信息。长度为1~512个字符。 */
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifySecurityGroupPolicy
   * 调用该接口时，您需要注意：
   * 
   * -  参数InnerAccessPolicy的值为Accept时，安全组内的实例之间的网络是互通的。此时，遵循Accept优先原则，即，安全组内的实例之间的网络一直保持互通，不受用户自定义安全组规则影响。  
   * 
   * -  参数InnerAccessPolicy的值为Drop时，安全组内的实例之间的网络是隔离的。此时，遵循用户自定义安全组规则优先原则，即，安全组内的实例之间的网络虽然是隔离的，但您可以自定义安全组规则改变内网状态，例如，您可以通过[AuthorizeSecurityGroup](https://help.aliyun.com/document_detail/25554.html)使安全组内的两台ECS实例网络互通。  
   * 
   * -  您可以通过[DescribeSecurityGroupAttribute](https://help.aliyun.com/document_detail/25555.html)查询当前安全组内网连通策略。
   * @summary: 调用ModifySecurityGroupPolicy修改普通安全组内网连通策略，企业安全组不支持修改组内内网连通策略。
   */
  export namespace ModifySecurityGroupPolicy {
    export type Params = {
      /** 安全组的ID。 */
      SecurityGroupId: string;
      /** 安全组所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 安全组内的ECS实例之间的内网连通策略。取值范围：

      - Accept：互通
      - Drop：隔离

      取值不区分大小写。 */
      InnerAccessPolicy: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifySecurityGroupRule
   * 安全组相关的API文档中，入方向流量的发起端为源端（Source），数据传输的接收端为目的端（Dest）。
   * 
   * 在您指定安全组规则ID修改安全组规则时，您需要注意以下使用限制：
   * 
   * - 安全组规则的授权对象分为CIDR地址块（或IP地址）、安全组、前缀列表三种类型。您不能通过该接口修改已有安全组规则的授权对象类型。如原来授权对象类型为IP地址，您可以更改为另一个IP地址或CIDR地址块，但不能修改为安全组或前缀列表。
   * - 安全组规则授权对象的IP地址族不支持修改。如原安全组规则授权对象CIDR地址块为IPv4，您不能将其修改为IPv6的CIDR地址块。又如规则的授权对象为一个IPv4地址族的前缀列表，您不能将其修改为一个IPv6地址族的前缀列表。
   * - 修改后的安全组规则不能与已有其它规则相同。
   * - 字段不支持从非空修改为空，如果需要修改建议先增加一条新规则，再删除当前规则。
   * @summary: 调用ModifySecurityGroupRule修改入方向安全组规则。
   */
  export namespace ModifySecurityGroupRule {
    export type Params = {
      /** 目标安全组所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 安全组ID。 */
      SecurityGroupId: string;
      /** 安全组规则ID。   
      根据安全组规则ID修改规则时，该参数必填。 */
      SecurityGroupRuleId?: string;
      /** 访问权限。取值范围： 
               
      - accept：接受访问。
      - drop：拒绝访问，不返回拒绝信息。

      默认值：accept */
      Policy?: string;
      /** 安全组规则优先级。取值范围：1~100

      默认值：1 */
      Priority?: string;
      /** 传输层协议。不区分大小写。取值范围： 
               
      - ICMP
      - GRE
      - TCP
      - UDP
      - ALL：支持所有协议 */
      IpProtocol?: string;
      /** 设置访问权限的源端IPv4 CIDR地址块。支持CIDR格式和IPv4格式的IP地址范围。

      默认值：无 */
      SourceCidrIp?: string;
      /** 设置访问权限的源端IPv6 CIDR地址块。支持CIDR格式和IPv6格式的IP地址范围。

      > 仅支持VPC类型的IP地址，且该参数与`SourceCidrIp`参数不可同时设置。

      默认值：无 */
      Ipv6SourceCidrIp?: string;
      /** 设置访问权限的源端安全组ID。至少设置一项`SourceGroupId`或者`SourceCidrIp`参数。

      - 如果指定了`SourceGroupId`没有指定参数`SourceCidrIp`，则参数`NicType`取值只能为intranet。
      - 如果同时指定了`SourceGroupId`和`SourceCidrIp`，则默认以`SourceCidrIp`为准。 */
      SourceGroupId?: string;
      /** 设置访问权限的源端前缀列表ID。您可以调用[DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html)查询可以使用的前缀列表ID。

      当您指定了`SourceCidrIp`、`Ipv6SourceCidrIp`或`SourceGroupId`参数中的一个时，将忽略该参数。 */
      SourcePrefixListId?: string;
      /** 目的端安全组开放的传输层协议相关的端口范围。取值范围： 
               
      - TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。例如：1/200
      - ICMP协议：-1/-1
      - GRE协议：-1/-1
      - ALL：-1/-1 */
      PortRange?: string;
      /** 目的端IPv4 CIDR地址块。支持CIDR格式和IPv4格式的IP地址范围。

      默认值：无 */
      DestCidrIp?: string;
      /** 目的端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。

      >仅支持VPC类型的IP地址，且该参数与`DestCidrIp`参数不可同时设置。

      默认值：无 */
      Ipv6DestCidrIp?: string;
      /** 源端安全组开放的传输层协议相关的端口范围。取值范围： 
               
      - TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。例如：1/200
      - ICMP协议：-1/-1
      - GRE协议：-1/-1
      - ALL：-1/-1 */
      SourcePortRange?: string;
      /** 跨账户设置安全组规则时，源端安全组所属的阿里云账户。 
               
      - 如果`SourceGroupOwnerAccount`及`SourceGroupOwnerID`均未设置，则认为是设置您其他安全组的访问权限。
      - 如果已经设置参数`SourceCidrIp`，则参数`SourceGroupOwnerAccount`无效。 */
      SourceGroupOwnerAccount?: string;
      /** 跨账户设置安全组规则时，源端安全组所属的阿里云账户。 
               
      - 如果`SourceGroupOwnerId`及`SourceGroupOwnerAccount`均未设置，则认为是设置您其他安全组的访问权限。
      - 如果您已经设置参数`SourceCidrIp`，则参数`SourceGroupOwnerId`无效。 */
      SourceGroupOwnerId?: number;
      /** 根据安全组规则ID修改规则时，不支持修改该参数。   
      如果需要修改，建议先增加一条新规则，再删除当前规则。
       */
      NicType?: string;
      /** 安全组规则的描述信息。长度为1~512个字符。 */
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifySnapshotAttribute
   * 调用ModifySnapshotAttribute修改一份快照的名称、描述或关闭快照极速可用功能。
   * @summary: 调用ModifySnapshotAttribute修改一份快照的名称、描述或关闭快照极速可用功能。
   */
  export namespace ModifySnapshotAttribute {
    export type Params = {
      /** 快照ID。 */
      SnapshotId: string;
      /** 快照的显示名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。

      为防止和自动快照的名称冲突，不能以auto开头。 */
      SnapshotName?: string;
      /** 快照的描述。长度为2~256个英文或中文字符，不能以http://和https://开头。 */
      Description?: string;
      /** 关闭快照极速可用功能。取值范围：

      - true：关闭快照极速可用。
      - false：不关闭快照极速可用。

      默认值：false。 */
      DisableInstantAccess?: boolean;
      /** 快照保留天数。设置该值时，快照保留时间会从快照**创建时间**(按照ISO 8601标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ)开始计算。取值范围：1~65536。

      >快照保留时间仅支持延长，不支持缩短快照已有保留时间。 */
      RetentionDays?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifySnapshotGroup
   * 调用ModifySnapshotGroup修改指定实例快照的名称与描述信息。
   * @summary: 调用ModifySnapshotGroup修改指定实例快照的名称与描述信息。
   */
  export namespace ModifySnapshotGroup {
    export type Params = {
      /** 实例快照所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 快照一致性组ID。您可以调用[DescribeSnapshotGroups](https://help.aliyun.com/document_detail/210940.html)查询快照一致性组ID。 */
      SnapshotGroupId: string;
      /** 修改后的实例快照名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头，可以包含数字、英文句号（.）、下划线（_）、短划线（-）或者半角冒号（:）。 */
      Name?: string;
      /** 修改后的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。 */
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyStorageCapacityUnitAttribute
   * 调用ModifyStorageCapacityUnitAttribute修改一个存储容量单位包SCU的名称或者描述信息。
   * @summary: 调用ModifyStorageCapacityUnitAttribute修改一个存储容量单位包SCU的名称或者描述信息。
   */
  export namespace ModifyStorageCapacityUnitAttribute {
    export type Params = {
      /** SCU所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** SCU ID。 */
      StorageCapacityUnitId: string;
      /** SCU的新名称，长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。 */
      Name?: string;
      /** SCU的新描述信息，长度为2~256个英文或中文字符，不能以http://和https://开头。 */
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyStorageSetAttribute
   * （Beta）调用ModifyStorageSetAttribute修改一个存储集的名称或描述信息。
   * @summary: （Beta）调用ModifyStorageSetAttribute修改一个存储集的名称或描述信息。
   */
  export namespace ModifyStorageSetAttribute {
    export type Params = {
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 存储集所属地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 存储集ID。 */
      StorageSetId: string;
      /** 存储集名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。 */
      StorageSetName?: string;
      /** 存储集描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。 */
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyUserBusinessBehavior
   * undefined
   * @deprecated
   */
  export namespace ModifyUserBusinessBehavior {
    export type Params = {
      RegionId?: string;
      statusKey: string;
      statusValue: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyVRouterAttribute
   * undefined
   * @deprecated
   */
  export namespace ModifyVRouterAttribute {
    export type Params = {
      RegionId?: string;
      VRouterId: string;
      VRouterName?: string;
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyVSwitchAttribute
   * undefined
   * @deprecated
   */
  export namespace ModifyVSwitchAttribute {
    export type Params = {
      VSwitchId: string;
      VSwitchName?: string;
      RegionId?: string;
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyVirtualBorderRouterAttribute
   * undefined
   * @deprecated
   */
  export namespace ModifyVirtualBorderRouterAttribute {
    export type Params = {
      RegionId: string;
      VbrId: string;
      VlanId?: number;
      CircuitCode?: string;
      LocalGatewayIp?: string;
      PeerGatewayIp?: string;
      PeeringSubnetMask?: string;
      Description?: string;
      Name?: string;
      ClientToken?: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyVpcAttribute
   * undefined
   * @deprecated
   */
  export namespace ModifyVpcAttribute {
    export type Params = {
      VpcId: string;
      Description?: string;
      VpcName?: string;
      CidrBlock?: string;
      RegionId?: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/PurchaseReservedInstancesOffering
   * ## 接口说明
   * 
   * - 请确保在使用该接口前，您已充分了解预留实例券的计费方式。详情请参见[预留实例券计费方式](https://help.aliyun.com/document_detail/100371.html)。
   * - 购买预留实例券前，您可以调用[DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html)查询可用实例资源。
   * @summary: 调用PurchaseReservedInstancesOffering购买一张预留实例券。预留实例券可以自动匹配对应的ECS实例，抵扣按量付费实例账单。
   */
  export namespace PurchaseReservedInstancesOffering {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 预留实例券的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http:/`/或者`https://`。 */
        Key?: string;
        /** 预留实例券的标签值。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http:/`/或者`https://`。 */
        Value?: string }>;
      /** 资源组ID。 */
      ResourceGroupId?: string;
      /** 实例所属的可用区编号，当`Scope`为`Zone`时必填。更多信息，请参见[DescribeZones](https://help.aliyun.com/document_detail/25610.html)获取可用区列表。  */
      ZoneId?: string;
      /** 预留实例券的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。 */
      ReservedInstanceName?: string;
      /** 实例的资源规格。更多信息，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。  */
      InstanceType: string;
      /** 预留实例券的范围。取值范围： 
         
      - Region：地域级别。 
      - Zone：可用区级别。

      默认值：Region。 */
      Scope?: string;
      /** 预留实例券可以同时匹配同规格按量付费实例的数量。取值范围：1~50。

      例如，实例规格设置为ecs.g5.large，预留实例数量设置为3时，该预留实例券就可以同时匹配3台规格为ecs.g5.large的按量付费实例。 */
      InstanceAmount?: number;
      /** 预留实例券的付款类型。取值范围： 
               
      - No Upfront：零预付。
      - Partial Upfront：部分预付。
      - All Upfront：全预付。

      默认值：All Upfront。 */
      OfferingType?: string;
      /** 预留实例券的描述。长度为2~256个英文或中文字符，不能以http://和https://开头。

      默认值：空。 */
      Description?: string;
      /** 实例使用的镜像的操作系统类型。取值范围：

      - Windows：Windows Server类型的操作系统。
      - Linux：Linux及类Unix类型的操作系统。

      默认值：Linux。 */
      Platform?: string;
      /** 购买预留实例券的时长。




      - 当`PeriodUnit`为`Year`时，取值范围：1、3、5。

      - 当`PeriodUnit`为`Month`时，取值范围：1。默认值：1。

       */
      Period?: number;
      /** 购买预留实例券的时长单位。





      取值范围：Year、Month。默认值：Month。 */
      PeriodUnit?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 是否要自动续费。

      true：自动续费。 false（默认）：不自动续费。 */
      AutoRenew?: boolean;
      /** 每次自动续费的时长，单位为月。当参数AutoRenew取值True时，该参数才生效。

      AutoRenewPeriod取值范围：1，12，36，60。当PeriodUnit=Month， 默认值为1。

      当PeriodUnit=Year，默认值为12。
       */
      AutoRenewPeriod?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 预留实例券ID列表。 */
      ReservedInstanceIdSets?: Array<string> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/PurchaseStorageCapacityUnit
   * 请确保在使用该接口前，已充分了解存储容量单位包SCU的收费方式和价格。更多信息，请参见[存储容量单位包计费方式](https://help.aliyun.com/document_detail/137897.html)。
   * @summary: 调用PurchaseStorageCapacityUnit购买一个或多个存储容量单位包SCU（Storage Capacity Unit）。
   */
  export namespace PurchaseStorageCapacityUnit {
    export type Params = {
      /** SCU所属的地域ID。确定地域后，SCU只能抵扣该地域下云盘的按量付费账单。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** SCU的名称，长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
       */
      Name?: string;
      /** SCU容量大小，单位为GiB。取值范围：20、40、100、200、500、1024、2048、5210、10240、20480、52100。 */
      Capacity: number;
      /** SCU的描述信息，长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。 */
      Description?: string;
      /** SCU的生效时间。生效时间不能超过创建时间六个月。按照ISO8601标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。

      默认值：无，表示从创建时间开始生效。 */
      StartTime?: string;
      /** SCU的有效期时长。取值范围：

      - 当PeriodUnit=Month时，Period参数的有效取值为1、2、3、6。
      - 当PeriodUnit=Year时，Period参数的有效取值为1、3、5。

      默认值：1 */
      Period?: number;
      /** SCU的有效期时长单位。取值范围：

      - Month：月
      - Year：年

      默认值：Month */
      PeriodUnit?: string;
      /** 用于备注请求来源，默认值为OpenAPI，无需手动设置。 */
      FromApp?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 购买的SCU的数量。取值范围：1~20

      默认值：1 */
      Amount?: number;
      /** 标签列表。 */
      Tag?: Array<{
        /** SCU的标签键。N表示可以设置的标签键数量，取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** SCU的标签值。N表示可以设置的标签值数量，且与`Tag.N.Key`的N对应。取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或`https://`。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 订单ID。 */
      OrderId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** SCU ID。 */
      StorageCapacityUnitIds?: Array<string> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ReActivateInstances
   * 调用该接口时，您需要注意：
   * 
   * - 实例必须处于**已过期**（`Stopped`）或者**欠费回收中**（`Stopped`）的状态。
   * - 您必须在实例欠费停机后15天内结清账单并重开机实例。结清欠费账单后如果没有重开机，实例在欠费之日起15天后自动释放，数据无法恢复。当重开机VPC类型的按量付费实例时，可能会重开机失败。请间隔一段时间后再试。
   * - 结清欠费后，您的阿里云账户余额（即现金余额）和代金券的总值不得小于100.00元人民币，否则无法重新启动实例。更多业务限制，请参见[重开机实例](https://help.aliyun.com/document_detail/34374.html)。-  接口调用成功后实例进入**启动中**（`Starting`）状态。
   * -  被安全锁定的ECS实例的`OperationLocks`参数包含`"LockReason": "security"`时，不支持调用该接口。详情请参见[安全锁定时的API行为](https://help.aliyun.com/document_detail/25695.html)。
   * @summary: 调用ReActivateInstances重新启动一台已过期或欠费回收的按量付费ECS实例。
   */
  export namespace ReActivateInstances {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId?: string;
      /** 需要重开机的实例ID。 */
      InstanceId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。
       */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ReInitDisk
   * 调用该接口时，您需要注意：
   * 
   * - 云盘的状态必须为**使用中**（In_use），云盘挂载的ECS实例的状态必须为**已停止**（Stopped）。
   * - 实例首次启动前，不能重新初始化挂载在其上的云盘。
   * - 已存在本地快照的云盘，不能重新初始化。
   * - 开启多重挂载特性的云盘，不能重新初始化。- 对于系统盘，初始化到镜像的最初状态。若创建云盘的源镜像被删除，则无法初始化。
   * - 对于直接创建的数据盘，初始化到空盘状态。
   * - 对于通过快照创建的数据盘，初始化到快照状态。
   * 
   * > 对于通过快照创建的数据盘，若源快照已被删除，则无法初始化并返回错误。
   * @summary: 调用ReInitDisk重新初始化一块云盘到创建时的初始状态。
   */
  export namespace ReInitDisk {
    export type Params = {
      /** 指定的云盘ID。 */
      DiskId: string;
      /** 重新初始化系统盘时，是否重置ECS实例的用户名密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：

      ```
      ()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
      ```

      其中，Windows实例不能以斜线号（/）为密码首字符。

      > 如果传入`Password`参数，建议您使用HTTPS协议发送请求，避免密码泄露。 */
      Password?: string;
      /** 密钥对名称。

      > 该参数仅适用于Linux实例。重新初始化系统盘时，您可以为ECS实例绑定一个SSH密钥对，作为登录凭证。使用了SSH密钥对后，用户名密码的登录凭证方式将被禁用。 */
      KeyPairName?: string;
      /** 重新初始化云盘后，是否自动启动实例。

      默认值：false */
      AutoStartInstance?: boolean;
      /** 当指定的云盘为系统盘时，重新初始化云盘后是否免费使用云安全中心服务。取值范围： 
               
      - Active：使用。该值仅支持公共镜像。  

      - Deactive：不使用。该值支持所有镜像。  

      默认值：Deactive */
      SecurityEnhancementStrategy?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RebootInstance
   * - 您只能重启状态为**运行中**（`Running`）的ECS实例。
   * - 重启ECS实例后进入**启动中**（`Starting`）状态。
   * - 支持强制重启（`ForceStop`），强制重启等同于传统服务器的断电重启，可能丢失实例操作系统中未写入磁盘的数据。
   * - 被安全锁定的ECS实例的`OperationLocks`参数包含"LockReason": "security"时，不能重启实例。更多信息，请参见[安全锁定时的API行为](https://help.aliyun.com/document_detail/25695.html)。
   * @summary: 当一台ECS实例处于运行中（Running）状态时，调用RebootInstance可以重启这台实例。
   */
  export namespace RebootInstance {
    export type Params = {
      /** 指定实例的ID。 */
      InstanceId: string;
      /** 重启ECS实例前，是否强制关机。取值范围：

      -   true：强制关机。相当于典型的断电操作，所有未写入存储设备的缓存数据会丢失。

      -   false（默认）：正常关机。 */
      ForceStop?: boolean;
      /** 是否只预检此次请求。取值范围：

      - true：发送检查请求，不会重启实例。检查项包括是否填写了必选参数、请求格式、业务限制和ECS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
      - false：发送正常请求，通过检查后直接重启实例。

      默认值：false */
      DryRun?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RebootInstances
   * ## 接口说明
   * 
   * - ECS实例的状态必须为**运行中**（`Running`）。
   * - 支持批量操作，可以通过参数`BatchOptimization`设置批量操作模式。
   * - 支持强制重启（`ForceReboot`），强制重启等同于传统服务器的断电重启，可能丢失实例操作系统中未写入块存储的数据。
   * - 查询ECS实例信息时，如果返回数据中包含`{"OperationLocks": {"LockReason" : "security"}}`，则禁止一切操作。
   * @summary: 调用RebootInstances重启一台或多台处于运行中（Running）状态的ECS实例。接口调用成功后，ECS实例先进入停止中（Stopping）状态，最终进入运行中（Running）状态。
   */
  export namespace RebootInstances {
    export type Params = {
      /** 是否只预检此次请求。取值范围：

      - true：发送检查请求，不会重启实例。检查项包括是否填写了必需参数、请求格式、实例状态。如果检查不通过，则返回对应错误。如果检查通过，则返回`DRYRUN.SUCCESS`。
      > 如果参数`BatchOptimization`被设置为`SuccessFirst`，对应的`DryRun=true`的预检结果只会返回`DRYRUN.SUCCESS`。

      - false：发送正常请求，通过检查后直接重启实例。

      默认值：false。 */
      DryRun?: boolean;
      /** 实例所在的地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 是否强制重启。取值范围：

      -   true：强制重启。相当于典型的断电操作，所有未写入存储设备的缓存数据会丢失。

      -   false：正常重启。

      默认值：false。 */
      ForceReboot?: boolean;
      /** 设置批量操作模式。取值范围：

      - AllTogether：该模式下，如果实例全部重启成功，则返回成功信息；如果任意一个实例校验不通过，则所有实例重启失败，并返回失败信息。

      - SuccessFirst：该模式下，分别重启每个实例，返回结果包含每个实例的操作结果信息。

      默认值：AllTogether。 */
      BatchOptimization?: string;
      /** 实例ID列表。最多100个实例ID。 */
      InstanceId: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 由InstanceResponse组成的数组格式，返回每个实例操作的前后状态及操作结果。 */
      InstanceResponses?: Array<{
        /** 实例操作结果错误码。返回值为200表示操作成功。更多信息，请参见下文错误码列表。 */
        Code?: string;
        /** 实例当前状态。 */
        CurrentStatus?: string;
        /** 实例ID。 */
        InstanceId?: string;
        /** 实例操作返回错误信息。返回值为Success表示操作成功。更多信息，请参见下文错误码列表。 */
        Message?: string;
        /** 实例操作前状态。 */
        PreviousStatus?: string }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RecoverVirtualBorderRouter
   * undefined
   * @deprecated
   */
  export namespace RecoverVirtualBorderRouter {
    export type Params = {
      RegionId: string;
      VbrId: string;
      ClientToken?: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RedeployDedicatedHost
   * DDH状态为报警状态（UnderAssessment），即故障潜伏期时，建议您调用该接口执行DDH的故障迁移，避免DDH产生永久性故障。您可以调用API [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html)查询专有宿主机的状态信息。
   * @summary: 调用RedeployDedicatedHost执行专有宿主机的故障迁移。
   */
  export namespace RedeployDedicatedHost {
    export type Params = {
      /** 专有宿主机所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 专有宿主机ID。 */
      DedicatedHostId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RedeployInstance
   * RedeployInstance为异步调用接口，会重启并迁移实例。重新部署成功后，实例进入运行中（`Running`）状态。重新部署失败时，实例返回原有的物理服务器，并恢复到重新部署前的状态。
   * 
   * 调用该接口时，您需要注意：
   * 
   * - 目标实例必须处于运行中或者已停止状态，调用接口后的实例状态变化：
   *     - 处于运行中（`Running`）的实例会进入停止中（`Stopping`）状态。
   *     - 处于已停止（`Stopped`）的实例会进入启动中（`Starting`）状态。
   * - 不支持重新部署专有宿主机上的实例。
   * - 被安全控制的实例的`OperationLocks`中标记了`"LockReason": "security"`时，不支持重新部署。
   * - 不支持响应通过CreateSimulatedSystemEvent创建的模拟事件。
   * - 在隔离本地盘的系统事件流程中，受损本地盘已隔离但尚未发出**因系统维护计划重启并重新初始化坏盘**事件（SystemMaintenance.RebootAndReInitErrorDisk）时，也可以调用RedeployInstance。更多详情，请参见[本地盘实例系统事件概述](https://help.aliyun.com/document_detail/107693.html)。
   * 
   * RedeployInstance能响应系统事件类型及事件状态请参见下表。
   * 
   * | 事件名称及参数 | 事件状态 |
   * | --- | --- |
   * | 因系统维护实例重启（SystemMaintenance.Reboot）| Inquiring、Scheduled|
   * | 因系统维护实例重新部署（SystemMaintenance.Redeploy）| Inquiring、Scheduled |
   * | 因系统维护重启并更换坏盘（SystemMaintenance.RebootAndIsolateErrorDisk）| Inquiring |
   * | 因系统维护重启并重新初始化坏盘（SystemMaintenance.RebootAndReInitErrorDisk）| Inquiring |
   * | 因系统错误实例重新部署（SystemFailure.Redeploy）| Inquiring、Scheduled |
   * | 仅限使用了本地盘的ECS实例：因系统错误实例重新启动（SystemFailure.Reboot）| Executing |
   * | 因系统维护隔离坏盘（SystemMaintenance.IsolateErrorDisk） | Inquiring |
   * | 因系统维护重新初始化坏盘（SystemMaintenance.ReInitErrorDisk） | Inquiring |
   * 
   * > 重新部署本地盘实例会重新初始化本地盘，存储设备的数据被清空。
   * @summary: 当ECS实例收到系统事件通知时，调用RedeployInstance可以重新部署这台ECS实例。
   */
  export namespace RedeployInstance {
    export type Params = {
      /** 处于运行中或者已停止状态的实例ID。 */
      InstanceId: string;
      /** 是否强制停止运行中（Running）的实例。

      默认值：false

      > 强制停止等同于典型的服务器断电关机，实例操作系统中暂未写入存储设备的数据会丢失。建议您尽量对已停止实例做重新部署操作。 */
      ForceStop?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 重新部署的任务ID。

      您可以使用[DescribeTasks](https://help.aliyun.com/document_detail/25622.html)接口查询迁移结果。
       */
      TaskId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ReleaseCapacityReservation
   * 立即生效的容量预定服务，当释放方式为手动释放时，调用该接口可直接释放容量预定服务。
   * @summary: 调用ReleaseCapacityReservation释放容量预定服务。
   */
  export namespace ReleaseCapacityReservation {
    export type Params = {
      /** 容量预定服务所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 容量预定服务ID。 */
      'PrivatePoolOptions.Id': string;
      /** 是否对此次请求进行检索。取值：false，目前仅支持不检索本次请求，直接释放容量预定服务。 */
      DryRun?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ReleaseDedicatedHost
   * 释放按量付费专有宿主机之前，请确保该宿主机上不存在任何ECS实例。
   * @summary: 调用ReleaseDedicatedHost释放一台按量付费专有宿主机。
   */
  export namespace ReleaseDedicatedHost {
    export type Params = {
      /** 专有宿主机所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 专有宿主机ID。 */
      DedicatedHostId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ReleaseEipAddress
   * undefined
   * @deprecated
   */
  export namespace ReleaseEipAddress {
    export type Params = {
      RegionId?: string;
      AllocationId: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ReleasePublicIpAddress
   * 释放公网IP。
   * @summary: 释放公网IP。
   */
  export namespace ReleasePublicIpAddress {
    export type Params = {
      /** 实例所属地域ID。 */
      RegionId?: string;
      /** 指定的实例ID。 */
      InstanceId?: string;
      /** 实例公网IP地址。 */
      PublicIpAddress: string;
      /** >该参数暂未开放使用。 */
      DryRun?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** >该参数暂未开放使用。 */
      RemainTimes?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RemoveBandwidthPackageIps
   * undefined
   * @deprecated
   */
  export namespace RemoveBandwidthPackageIps {
    export type Params = {
      RegionId: string;
      BandwidthPackageId: string;
      ClientToken?: string;
      RemovedIpAddresses: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RemoveTags
   * 调用RemoveTags从实例、磁盘、快照、镜像或者安全组等解绑一个或多个标签。
   * @summary: 调用RemoveTags从实例、磁盘、快照、镜像或者安全组等解绑一个或多个标签。
   */
  export namespace RemoveTags {
    export type Params = {
      /** 资源所属地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 资源类型定义。取值范围：

      - instance：ECS实例。
      - disk：磁盘。
      - snapshot：快照。
      - image：镜像。
      - securitygroup：安全组。
      - volume：存储卷。
      - eni：弹性网卡。
      - ddh：专有宿主机。
      - keypair：SSH密钥对。
      - launchtemplate：启动模板。
      - reservedinstance：预留实例券。
      - snapshotpolicy：自动快照策略。

      以上取值均为小写。  */
      ResourceType: string;
      /** 要解绑标签的资源ID。例如，当资源类型（ResourceType）为实例（instance）时，资源ID可以理解为实例ID。  */
      ResourceId: string;
      /** 标签列表。 */
      Tag?: Array<{
        /** 资源的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以aliyun和acs:开头，不能包含http://或者https://。 */
        Key?: string;
        /** 资源的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。 */
        Value?: string;
        /** 资源的标签键。

        >为提高兼容性，建议您尽量使用Tag.N.Key参数。 */
        key?: string;
        /** 资源的标签值。

        >为提高兼容性，建议您尽量使用Tag.N.Value参数。 */
        value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RenewDedicatedHosts
   * ## 接口说明
   * 
   * 续费付款时，优先使用可抵扣的代金券，且您的账号必须支持账号余额支付或信用支付。
   * @summary: 调用RenewDedicatedHosts续费一台或者多台包年包月专有宿主机。
   */
  export namespace RenewDedicatedHosts {
    export type Params = {
      /** 专有宿主机的编号列表。最多可以输入100个预付费专有宿主机ID。多个专有宿主机ID用一个格式类似`["dh-xxxxxxxxx", "dh-yyyyyyyyy", … "dh-zzzzzzzzz"]`的JSON数组表示，ID之间用半角逗号（,）隔开。 */
      DedicatedHostIds: string;
      /** 专有宿主机所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 续费周期。取值范围：

      - PeriodUnit=Week时：1、2、3、4。
      - PeriodUnit=Month时：1、2、3、4、5、6、7、8、9、12、24、36、48、60。
      - PeriodUnit=Year时：1、2、3、4、5。 */
      Period: number;
      /** 续费时长单位。取值范围：

      - Week
      - Month
      - Year

      默认值：Month。
       */
      PeriodUnit?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RenewInstance
   * - 请确保在使用该接口前，您已充分了解[云服务器ECS](https://www.aliyun.com/price/product#/ecs/detail)的计费方式和产品定价。
   * - 仅支持为包年包月ECS实例续费时长或者续费至统一到期日。
   * - 续费实例的时长和续费实例至统一到期日的操作不能同步执行，即续费时长参数（`Period`、`PeriodUnit`）与统一到期日参数（`ExpectedRenewDay`）必须指定其中之一，但不能同时设置。
   * - 您的账号必须支持账号余额支付或信用支付。
   * @summary: 调用RenewInstance续费一台包年包月ECS实例。
   */
  export namespace RenewInstance {
    export type Params = {
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 需要续费的实例ID。 */
      InstanceId: string;
      /** 包年包月续费时长。一旦指定了`DedicatedHostId`，则取值范围不能超过专有宿主机的订阅时长。取值范围：

      - PeriodUnit=Week时，Period取值：1、2、3、4。
      - PeriodUnit=Month时，Period取值：1、2、3、4、5、6、7、8、9、12、24、36、48、60。

      > 您必须指定续费时长参数（`Period`、`PeriodUnit`）或统一到期日参数（`ExpectedRenewDay`）的其中一个，但不能同时设置。 */
      Period?: number;
      /** 续费时长的时间单位，即参数Period的单位。取值范围：

      - Week。
      - Month。

      默认值：Month。 */
      PeriodUnit?: string;
      /** 统一到期日。该参数值必须与您已设置的统一到期日保持一致，否则将调用失败。指定该参数后，您的实例将续费至统一到期日。取值范围：1~28。

      关于统一到期日功能的限制说明，请参见[统一实例到期日](https://help.aliyun.com/document_detail/108486.html)。

      > 您必须指定续费时长参数（`Period`、`PeriodUnit`）或统一到期日参数（`ExpectedRenewDay`）的其中一个，但不能同时设置。 */
      ExpectedRenewDay?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 订单ID。 */
      OrderId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RenewReservedInstances
   * ## 接口说明
   * - 请确保在使用该接口前，您已充分了解预留实例券的计费方式。详情请参见[预留实例券计费方式](https://help.aliyun.com/document_detail/100371.html)。
   * - 您可以调用[DescribeReservedInstances](https://help.aliyun.com/document_detail/100065.html)查询已购买的预留实例券。
   * @summary: 调用RenewReservedInstances对已购买的一张或多张预留实例券进行续费。
   */
  export namespace RenewReservedInstances {
    export type Params = {
      /** 预留实例券ID。 */
      ReservedInstanceId: Array<string>;
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 购买预留实例券的时长。




      - 当`PeriodUnit`为`Year`时，取值范围：1、3、5。

      - 当`PeriodUnit`为`Month`时，取值范围：1。默认值：1。 */
      Period?: number;
      /** 购买预留实例券的时长单位。





      取值范围：Year、Month。默认值：Month。 */
      PeriodUnit?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 是否要自动续费。

      - true：自动续费。
      - false：不自动续费。

      默认值：false。 */
      AutoRenew?: boolean;
      /** 每次自动续费的时长，单位为月。当参数AutoRenew取值为true时，该参数才生效。



      - PeriodUnit=Month， 取值范围：1，12，36，60。默认值为1。

      - PeriodUnit=Year，取值范围：12，36，60。默认值为12。 */
      AutoRenewPeriod?: number;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 订单ID。 */
      OrderId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 预留实例券ID列表。 */
      ReservedInstanceIdSets?: Array<string> };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ReplaceSystemDisk
   * ## 接口说明
   * 
   * 更换系统盘时，您需要注意：
   * 
   * - 不支持更换系统盘的云盘类型。
   * 
   * - 不支持变更系统盘计费方式。
   *  
   * - 实例的状态必须为已停止（`Stopped`）状态。
   * 
   *     > 仅适用于专有网络VPC类型实例。如果ECS实例为按量付费计费模式，且开启默认启用节省停机模式，为防止地域范围内的ECS实例库存不足，引起的更换系统盘后无法重启实例。您需要在停止该实例时设置为普通停机模式。具体操作，请参见[StopInstance](https://help.aliyun.com/document_detail/25501.html)。  
   * 
   * - ECS实例不能被安全锁定，即实例的`OperationLocks`参数值包含`"LockReason": "security"`。更多信息，请参见[安全锁定时的API行为](https://help.aliyun.com/document_detail/25695.html)。
   * 
   * - 系统盘挂载的ECS实例不能有未支付的订单。 
   * 
   * - 您可以通过参数`SystemDisk.Size`重新指定系统盘的容量大小。
   * 
   * 更换系统盘后，建议您通过以下任一方式验证是否更换成功：
   * 
   * - 通过[DescribeDisks](https://help.aliyun.com/document_detail/25514.html)接口查询新系统盘的状态。如果已挂载实例，则表示更换系统盘的操作已完成。
   * 
   * - 通过[DescribeInstances](https://help.aliyun.com/document_detail/25506.html)接口查询更换系统盘的实例的状态。如果返回值`OperationLocks`为空，则表示更换系统盘的操作已完成。
   * @summary: 调用ReplaceSystemDisk更换一台ECS实例的操作系统。系统盘的云盘ID会发生变化，原云盘会被释放。
   */
  export namespace ReplaceSystemDisk {
    export type Params = {
      /** 指定实例的ID。 */
      InstanceId: string;
      /** 重置系统时使用的镜像ID。

      未设置`DiskId`参数时，该参数为必选参数。 */
      ImageId?: string;
      /** 新的系统盘容量，单位为GiB。取值范围：

      - 普通云盘：Max{20, 参数ImageId对应的镜像大小}~500。
      - 其他云盘：Max{20, 参数ImageId对应的镜像大小}~2048。

      默认值：Max{40, 参数ImageId对应的镜像大小}

      > 超过`Max{20, 更换前的系统盘容量}`的云盘容量部分，将收取额外费用。   */
      'SystemDisk.Size'?: number;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 是否使用阿里云提供的虚拟机系统配置（Windows：NTP、KMS；Linux：NTP、YUM）。

      > 挂载系统盘时（即设备名为/dev/xvda）有效。 */
      UseAdditionalService?: boolean;
      /** 是否重置ECS实例的用户名密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：

      ```
      ()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
      ```

      其中，Windows实例不能以斜线号（/）为密码首字符。

      默认值：保持不变。

      > 如果传入`Password`参数，建议您使用HTTPS协议发送请求，避免密码泄露。 */
      Password?: string;
      /** 是否使用镜像预设的密码。

      默认值：false。

      > 使用该参数时，Password参数必须为空。同时您需要确保使用的镜像已经设置了密码。 

       */
      PasswordInherit?: boolean;
      /** 密钥对名称。 

      > 该参数仅对Linux系统ECS实例生效。您可以为ECS实例绑定一个SSH密钥对，作为登录凭证。使用了SSH密钥对后，用户名密码的登录凭证方式将被禁用。 */
      KeyPairName?: string;
      /** > 该参数已废弃，为提高兼容性，建议您使用 `ImageId`。 */
      DiskId?: string;
      /** > 已弃用。 */
      Platform?: string;
      /** > 已弃用。 */
      Architecture?: string;
      /** 更换系统盘后，是否免费使用云安全中心服务。取值范围： 

      - Active：使用。该值仅支持公共镜像。

      - Deactive：不使用。该值支持所有镜像。

      默认值：Deactive。 */
      SecurityEnhancementStrategy?: string;
      /** 是否加密云盘。取值范围：

      - true：是。

      - false：否。


      默认值：false。 */
      Encrypted?: boolean;
      /** 系统盘对应的KMS密钥ID。 */
      KMSKeyId?: string;
      /** >该参数暂未开放使用。 */
      EncryptAlgorithm?: string;
      /** 该参数暂未开放使用。 */
      Arn?: Array<{
        /** >该参数暂未开放使用。 */
        AssumeRoleFor?: number;
        /** >该参数暂未开放使用。 */
        RoleType?: string;
        /** >该参数暂未开放使用。 */
        Rolearn?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 新系统盘的云盘ID。 */
      DiskId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ReportInstancesStatus
   * 调用ReportInstancesStatus反馈一台或者多台ECS实例的异常问题。您可以反馈多台ECS实例发生的相同问题，也可以反馈一台ECS实例的多块磁盘发生的相同问题。
   * @summary: 调用ReportInstancesStatus反馈一台或者多台ECS实例的异常问题。您可以反馈多台ECS实例发生的相同问题，也可以反馈一台ECS实例的多块磁盘发生的相同问题。
   */
  export namespace ReportInstancesStatus {
    export type Params = {
      /** 实例所在地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 异常问题对ECS实例造成的影响。取值范围：

      - instance-hang：ECS实例不可用，或无法连接。
      - instance-stuck-in-status：ECS实例长时间停留在某一个状态，如Starting或Stopping状态。
      - abnormal-network：ECS实例发生网络异常。
      - abnormal-local-disk：ECS实例挂载的本地盘出现异常。
      - abnormal-cloud-disk：ECS实例挂载的云盘或共享块存储出现异常。
      - others：其他异常类型。当以上影响类型不符合条件时，您可以设置`Reason=others`并在`Description`中描述更多信息。 */
      Reason?: string;
      /** 异常问题的详细描述。 */
      Description: string;
      /** 实例异常问题开始时间。按照ISO8601标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
      StartTime?: string;
      /** 实例异常问题结束时间。按照ISO8601标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
      EndTime?: string;
      /** 异常问题的类别。该参数仅适用于弹性裸金属服务器实例。取值范围：
      - hardware-cpu-error：CPU故障
      - hardware-motherboard-error：主板故障
      - hardware-mem-error：内存故障
      - hardware-power-error：电源故障
      - hardware-disk-error：磁盘故障
      - hardware-networkcard-error：网卡故障
      - hardware-raidcard-error：SAS/RAID卡故障
      - hardware-fan-error：风扇故障
      - others：其他 */
      IssueCategory?: string;
      /** ECS实例ID列表。最多可输入100个实例ID。 */
      InstanceId: Array<string>;
      /** 发生相同异常问题的磁盘ID列表。可输入最多100个磁盘ID。如果您使用的是弹性裸金属服务器实例，请填写磁盘设备对应的SN列表。

      > 当参数`Reason`值为`abnormal-local-disk`或`abnormal-cloud-disk`，或者参数`IssueCategory`值为`hardware-disk-error`时，该参数为必填参数。 */
      DiskId?: Array<string>;
      /** 发生相同异常问题的磁盘的挂载的设备名列表。可输入最多100个设备名。

      如果您使用的是弹性裸金属服务器实例，请填写磁盘设备对应SLOT槽位信息列表。

      > 对于弹性裸金属服务器实例，当参数`Reason`值为`abnormal-local-disk`或`abnormal-cloud-disk`，或者参数`IssueCategory`值为`hardware-disk-error`时，该参数为必填参数。 */
      Device?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ResetDisk
   * 调用该接口时，您需要注意：
   * 
   * - 云盘的状态必须为使用中（In_Use）或空闲（Available）的状态。  
   * - 云盘挂载的实例的状态必须为已停止（Stopped）。您可以调用[StopInstances](https://help.aliyun.com/document_detail/155372.html)停止实例。  
   * - 指定的参数SnapshotId必须是由DiskId创建的历史快照。  
   * - 通过[DescribeInstances](https://help.aliyun.com/document_detail/25506.html)查询ECS实例信息时，如果返回数据中包含`{"OperationLocks": {"LockReason" : "security"}}`，则禁止一切操作。
   * @summary: 调用ResetDisk使用云盘的历史快照回滚至某一阶段的云盘状态。
   */
  export namespace ResetDisk {
    export type Params = {
      /** 待回滚数据的云盘ID。 */
      DiskId: string;
      /** 需要恢复到某一云盘阶段的历史快照ID。 */
      SnapshotId: string;
      /** 是否预检本次请求。取值范围：

      - true：发送检查请求，不会直接回滚云盘。检查项包括是否填写了必选参数、请求格式和资源状态限制。如果检查不通过，则返回对应错误信息。如果检查通过，则返回错误码`DryRunOperation`。
      - false：发送正常请求，通过检查后直接发起云盘回滚操作。

      默认值：false。 */
      DryRun?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ResetDisks
   * 该接口即将废弃，建议您使用[ResetDisk](https://help.aliyun.com/document_detail/25520.html)回滚云盘。
   * @summary: 调用ResetDisks通过实例快照回滚一个或多个云盘。
   */
  export namespace ResetDisks {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 是否预检本次请求。取值范围：

      - true：发送检查请求，不会直接回滚云盘。检查项包括是否填写了必选参数、请求格式和资源状态限制。如果检查不通过，则返回对应错误信息。如果检查通过，则返回错误码`DryRunOperation`。
      - false：发送正常请求，通过检查后直接发起云盘回滚操作。

      默认值：false。 */
      DryRun?: boolean;
      /** 云盘列表。 */
      Disk: Array<{
        /** 指定待回滚的云盘ID。N的取值范围为1~10。 */
        DiskId?: string;
        /** 实例快照中，指定云盘对应的快照ID。N的取值范围为1~10。 */
        SnapshotId?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 回滚一个或多个云盘时的操作状态信息合集。 */
      OperationProgressSet?: Array<{
        /** 错误码。回滚成功时返回空值。




        错误码和错误信息，请参见[错误中心](https://error-center.aliyun.com/status/product/Ecs)。 */
        ErrorCode?: string;
        /** 错误信息。回滚成功时返回空值。



        错误码和错误信息，请参见[错误中心](https://error-center.aliyun.com/status/product/Ecs)。 */
        ErrorMsg?: string;
        /** 操作是否成功。
        成功返回Success，失败返回ErrorCode和ErrorMsg信息。 */
        OperationStatus?: string;
        /** 资源信息。 */
        RelatedItemSet?: Array<{
          /** 资源名称。 */
          Name?: string;
          /** 资源ID。 */
          Value?: string }> }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ResizeDisk
   * ## 接口说明
   * 
   * > 扩容前，请务必查询云盘采用的分区格式。如果是MBR格式，不支持扩容到2TiB以上，否则会造成数据丢失。对于MBR分区扩容，建议您重新创建并挂载一块数据盘，采用GPT分区格式后，再将已有数据拷贝至新的数据盘上。更多详情，请参见[扩容云盘容量](https://help.aliyun.com/document_detail/44986.html)。
   * 
   * - 支持扩容的云盘类型包括普通云盘（`cloud`）、高效云盘（`cloud_efficiency`）、SSD云盘（`cloud_ssd`）、ESSD云盘（`cloud_essd`）<ph>、ESSD Entry云盘（cloud_essd_entry）</ph>和ESSD AutoPL云盘（cloud_auto）。
   * - 当云盘正在创建快照时，不允许扩容。
   * -  云盘挂载的实例的状态必须为**运行中**（`Running`）或者**已停止**（`Stopped`）。
   * 
   * -  扩容时，不会修改云盘分区和文件系统，您需要在扩容后自行分配存储空间。
   * 
   * - 开启多重挂载特性的云盘支持在线扩容和离线扩容。离线扩容前，您需要确保所挂载的全部实例均为**已停止**（`Stopped`）状态。
   * @summary: 调用ResizeDisk扩容一块云盘，支持扩容系统盘和数据盘。
   */
  export namespace ResizeDisk {
    export type Params = {
      /** 云盘ID。您可以调用[DescribeDisks](https://help.aliyun.com/document_detail/25514.html)查询云盘ID。 */
      DiskId: string;
      /** 扩容云盘的方式。取值范围：

      - offline（默认）：离线扩容。扩容后，您必须在控制台[重启实例](https://help.aliyun.com/document_detail/25440.html)或者调用API [RebootInstance](https://help.aliyun.com/document_detail/25502.html)使操作生效。
       
      - online：在线扩容，无需重启实例即可完成扩容。云盘类型支持高效云盘、SSD云盘和ESSD云盘。 */
      Type?: string;
      /** 希望扩容到的云盘容量大小。单位为GiB。取值范围如下：
      - 系统盘：
          - 普通云盘：20~500。
          - 其他类型云盘：20~2048。
      - 数据盘：
          - 高效云盘（cloud_efficiency）：20~32768。
          - SSD云盘（cloud_ssd）：20~32768。
          - ESSD云盘（cloud_essd）：具体取值范围与`PerformanceLevel`的取值有关。可以调用[DescribeDisks](https://help.aliyun.com/document_detail/25514.html)查询云盘信息，再根据查询结果中的`PerformanceLevel`参数查看取值。
              - PL0：40~32768。
              - PL1：20~32768。
              - PL2：461~32768。
              - PL3：1261~32768。
          - 普通云盘（cloud）：5~2000。
          - ESSD AutoPL云盘（cloud_auto）：40~32768。
          - ESSD Entry云盘（cloud_essd_entry）：10~32768。指定的新云盘容量必须比原云盘容量大。 */
      NewSize: number;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 生成的订单ID。

      > 仅在扩容包年包月云盘时会返回订单ID。 */
      OrderId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RevokeSecurityGroup
   * 安全组的API文档中，流量的发起端为源端（Source），数据传输的接收端为目的端（Dest）。
   * 
   * 当前接口存在两种传参方式来删除规则，您可以选择其中一种。
   * - 通过指定安全组规则ID参数方式删除规则（推荐）。
   *        - 如果指定的安全组规则ID不存在，会报异常。
   *        - 不支持同时设置Permissions.N前缀和标识已废弃的参数。
   *        - 请求示例：
   * 
   *      ```
   *     http(s)://ecs.aliyuncs.com/?Action=RevokeSecurityGroup
   *     &SecurityGroupId=sg-bp67acfmxazb4p****
   *     &SecurityGroupRuleId.1=sgr-bpdfmk****
   *     &SecurityGroupRuleId.2=sgr-bpdfmg****
   *     &<公共请求参数>
   *     ```
   * 
   * - 通过指定Permissions.N前缀参数来删除规则。
   * 
   *     - 如果匹配的安全组规则不存在，此次调用成功，但不会删除规则。
   *     - 不支持设置安全组规则ID和其它不带Permissions.N前缀的参数。
   *     - 以下任意一组参数可以匹配一条安全组入方向规则，只指定一个参数无法确定一条安全组规则。
   * 
   *     - 撤销指定IP地址段的访问权限。如以下请求示例：IpProtocol、PortRange、（可选）SourcePortRange、NicType、Policy、（可选）DestCidrIp和SourceCidrIp。
   * 
   *         ```
   *      http(s)://ecs.aliyuncs.com/?Action=RevokeSecurityGroup
   *     &SecurityGroupId=sg-bp67acfmxazb4p****
   *     &Permissions.1.SourceCidrIp=10.0.0.0/8
   *     &Permissions.1.IpProtocol=TCP
   *     &Permissions.1.PortRange=80/80
   *     &Permissions.1.NicType=intranet
   *     &Permissions.1.Policy=accept
   *     &<公共请求参数>
   *         ```
   * 
   *     - 撤销其他安全组的访问权限。如以下请求示例：IpProtocol、PortRange、（可选）SourcePortRange、NicType、Policy、（可选）DestCidrIp、SourceGroupId。
   * 
   *         ```
   *     http(s)://ecs.aliyuncs.com/?Action=RevokeSecurityGroup
   *     &SecurityGroupId=sg-bp67acfmxazb4p****
   *     &Permissions.1.SourceGroupId=sg-bp67acfmxa123b****
   *     &Permissions.1.IpProtocol=TCP
   *     &Permissions.1.PortRange=80/80
   *     &Permissions.1.NicType=intranet
   *     &Permissions.1.Policy=accept
   *     &<公共请求参数>
   *         ```
   *     - 撤销指定前缀列表的访问权限。如以下请求示例：IpProtocol、PortRange、（可选）SourcePortRange、NicType、Policy、（可选）DestCidrIp和SourcePrefixListId。
   * 
   *         ```
   *     http(s)://ecs.aliyuncs.com/?Action=RevokeSecurityGroup
   *     &SecurityGroupId=sg-bp67acfmxazb4p****
   *     &Permissions.1.SourcePrefixListId=pl-x1j1k5ykzqlixdcy****
   *     &Permissions.1.IpProtocol=TCP
   *     &Permissions.1.PortRange=80/80
   *     &Permissions.1.NicType=intranet
   *     &Permissions.1.Policy=accept
   *     &<公共请求参数>
   *         ```
   * @summary: 调用RevokeSecurityGroup删除一条或多条入方向安全组规则。
   */
  export namespace RevokeSecurityGroup {
    export type Params = {
      /** 安全组所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 安全组ID。 */
      SecurityGroupId: string;
      /** 安全组规则ID列表。N的取值范围：1~100。 */
      SecurityGroupRuleId?: Array<string>;
      /** 安全组规则列表。N的取值范围：1~100。 */
      Permissions?: Array<{
        /** 安全组规则描述。长度为1~512个字符。

        N的取值范围：1~100。 */
        Description?: string;
        /** 目的端IPv4 CIDR地址段。支持CIDR格式和IPv4格式的IP地址范围。

        用于支持五元组规则，请参见[安全组五元组规则](https://help.aliyun.com/document_detail/97439.html)。

        N的取值范围：1~100。 */
        DestCidrIp?: string;
        /** 传输层协议。取值不区分大小写。取值范围： 
                 
        - TCP。
        - UDP。
        - ICMP。
        - ICMPv6。
        - GRE。
        - ALL：支持所有协议。

        N的取值范围：1~100。 */
        IpProtocol?: string;
        /** 目的端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。 

        用于支持五元组规则，请参见[安全组五元组规则](https://help.aliyun.com/document_detail/97439.html)。

        N的取值范围：1~100。
                 
        > 仅在支持IPv6的VPC类型ECS实例上有效，且该参数与`DestCidrIp`参数不可同时设置。 */
        Ipv6DestCidrIp?: string;
        /** 需要撤销访问权限的源端IPv6 CIDR地址块。支持CIDR格式和IPv6格式的IP地址范围。

        N的取值范围：1~100。

        > 仅在支持IPv6的VPC类型ECS实例上有效，且该参数与`SourceCidrIp`参数不可同时设置。 */
        Ipv6SourceCidrIp?: string;
        /** 经典网络类型安全组规则的网卡类型。取值范围：

        - internet：公网网卡。
        - intranet：内网网卡。

        专有网络VPC类型安全组规则无需设置网卡类型，默认为intranet，只能为intranet。

        撤销安全组之间授权规则，即指定了`SourceGroupId`参数时，只能为intranet。

        默认值：internet。

        N的取值范围：1~100。

         */
        NicType?: string;
        /** 访问权限。取值范围： 
                 
        - accept：接受访问。
        - drop：拒绝访问，不返回拒绝信息，表现为发起端请求超时或者无法建立连接的类似信息。

        默认值：accept。

        N的取值范围：1~100。 */
        Policy?: string;
        /** 目的端安全组开放的传输层协议相关的端口范围。取值范围： 
                 
        - TCP/UDP协议：取值范围为1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200
        - ICMP协议：-1/-1。
        - GRE协议：-1/-1。
        - ALL：-1/-1。

        N的取值范围：1~100。 */
        PortRange?: string;
        /** 安全组规则优先级，数字越小，代表优先级越高。取值范围：1~100。

        默认值：1。

        N的取值范围：1~100。 */
        Priority?: string;
        /** 需要撤销访问权限的源端IPv4 CIDR地址块。支持CIDR格式和IPv4格式的IP地址范围。

        N的取值范围：1~100。 */
        SourceCidrIp?: string;
        /** 需要撤销访问权限的源端安全组ID。

        - 至少设置`SourceGroupId`、`SourceCidrIp`、`Ipv6SourceCidrIp`或`SourcePrefixListId`参数中的一项。

        - 如果指定了`SourceGroupId`，没有指定参数`SourceCidrIp`或`Ipv6SourceCidrIp`，则参数NicType取值只能为intranet。

        - 如果同时指定了`SourceGroupId`和`SourceCidrIp`，则默认以`SourceCidrIp`为准。

        您需要注意：

        - 企业安全组不支持授权安全组访问。

        - 普通安全组支持授权的安全组数量最多为20个。

        N的取值范围：1~100。 */
        SourceGroupId?: string;
        /** 撤销跨账户授权的安全组规则时，源端安全组所属的阿里云账户。

        - 如果`SourceGroupOwnerAccount`及`SourceGroupOwnerId`均未设置，则认为是撤销您其他安全组的访问权限。
        - 如果已经设置参数`SourceCidrIp`，则参数`SourceGroupOwnerAccount`无效。

        N的取值范围：1~100。 */
        SourceGroupOwnerAccount?: string;
        /** 撤销跨账户授权的安全组规则时，源端安全组所属的阿里云账户ID。

        - 如果`SourceGroupOwnerId`及`SourceGroupOwnerAccount`均未设置，则认为是撤销您其他安全组的访问权限。
        - 如果您已经设置参数`SourceCidrIp`，则参数`SourceGroupOwnerId`无效。

        N的取值范围：1~100。 */
        SourceGroupOwnerId?: number;
        /** 安全组开放的传输层协议相关的端口范围。取值范围： 
                 
        - TCP/UDP协议：取值范围为1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
        - ICMP协议：-1/-1。
        - GRE协议：-1/-1。
        - ALL：-1/-1。

        用于支持五元组规则，请参见[安全组五元组规则](https://help.aliyun.com/document_detail/97439.html)。

        N的取值范围：1~100。 */
        SourcePortRange?: string;
        /** 需要撤销访问权限的源端前缀列表ID。您可以调用[DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html)查询可以使用的前缀列表ID。

        注意事项：

        - 安全组的网络类型为经典网络时，不支持设置前缀列表。关于安全组以及前缀列表使用限制的更多信息，请参见[安全组使用限制](https://help.aliyun.com/document_detail/25412.html#SecurityGroupQuota1)。
        - 当您指定了`SourceCidrIp`、`Ipv6SourceCidrIp`或`SourceGroupId`参数中的一个时，将忽略该参数。

        N的取值范围：1~100。 */
        SourcePrefixListId?: string }>;
      /** 已废弃。请使用`Permissions.N.Policy`来设置访问权限。 */
      Policy?: string;
      /** 已废弃。请使用`Permissions.N.Priority`来指定规则优先级。 */
      Priority?: string;
      /** 已废弃。请使用`Permissions.N.IpProtocol`来指定传输层协议。 */
      IpProtocol?: string;
      /** 已废弃。请使用`Permissions.N.SourceCidrIp`来指定源端IPv4 CIDR地址块。 */
      SourceCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.Ipv6SourceCidrIp`来指定源端IPv6 CIDR地址块。 */
      Ipv6SourceCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.SourceGroupId`来指定源端安全组ID。 */
      SourceGroupId?: string;
      /** 已废弃。请使用`Permissions.N.SourcePrefixListId`来指定源端前缀列表ID。 */
      SourcePrefixListId?: string;
      /** 已废弃。请使用`Permissions.N.PortRange`来指定端口范围。 */
      PortRange?: string;
      /** 已废弃。请使用`Permissions.N.DestCidrIp`来指定目的端IPv4 CIDR地址段。 */
      DestCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.Ipv6DestCidrIp`来指定目的端IPv6 CIDR地址段。 */
      Ipv6DestCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.SourcePortRange`来指定源端端口范围。 */
      SourcePortRange?: string;
      /** 已废弃。请使用`Permissions.N.SourceGroupOwnerAccount`来指定源端安全组所属的阿里云账户。 */
      SourceGroupOwnerAccount?: string;
      /** 已废弃。请使用`Permissions.N.SourceGroupOwnerId`来指定源端安全组所属的阿里云账户ID。 */
      SourceGroupOwnerId?: number;
      /** 已废弃。请使用`Permissions.N.NicType`来指定网卡类型。 */
      NicType?: string;
      /** 已废弃。请使用`Permissions.N.Description`来指定规则的描述。 */
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RevokeSecurityGroupEgress
   * 安全组的API文档中，流量的发起端为源端（Source），数据传输的接收端为目的端（Dest）。
   * 
   * 当前接口存在两种传参方式来删除规则，您可以选择其中一种。
   * - 您可以通过指定安全组规则ID参数方式删除规则（推荐）。
   *        - 如果指定的安全组规则ID不存在，会报异常。
   *        - 不支持同时设置Permissions.N前缀和标识已废弃的参数。
   *        - 请求示例：
   * 
   *      ```
   *     http(s)://ecs.aliyuncs.com/?Action=RevokeSecurityGroupEgress
   *     &SecurityGroupId=sg-bp67acfmxazb4p****
   *     &SecurityGroupRuleId.1=sgr-bpdfmk****
   *     &SecurityGroupRuleId.2=sgr-bpdfmg****
   *     &<公共请求参数>
   *     ```
   * - 您可以通过指定Permissions.N前缀参数来删除规则。
   *     - 如果匹配的安全组规则不存在，此次调用成功，但不会删除规则。
   *     - 不支持设置安全组规则ID和其它不带Permissions.N前缀的参数。
   *     - 以下任意一组参数可以确定一条安全组规则，只指定一个参数无法确定一条安全组规则。
   * 
   *         - 撤销对指定IP地址段的访问权限，如以下请求示例：IpProtocol、PortRange、（可选）SourcePortRange、NicType、Policy、（可选）SourceCidrIp和DestCidrIp。
   *     
   *             ```
   *         http(s)://ecs.aliyuncs.com/?Action=RevokeSecurityGroupEgress
   *         &SecurityGroupId=sg-bp67acfmxazb4ph***
   *         &Permissions.1.IpProtocol=TCP
   *         &Permissions.1.DestCidrIp=10.0.0.0/8
   *         &Permissions.1.PortRange=-22/22
   *         &Permissions.1.NicType=intranet
   *         &Permissions.1.Policy=accept
   *         &<公共请求参数>
   *             ```
   *     
   *         - 撤销其他安全组的访问权限。如以下请求示例：IpProtocol、PortRange、（可选）SourcePortRange、NicType、Policy、（可选）SourceCidrIp和DestGroupId。
   *     
   *             ```
   *         http(s)://ecs.aliyuncs.com/?Action=RevokeSecurityGroupEgress
   *         &SecurityGroupId=sg-bp67acfmxazb4ph***
   *         &Permissions.1.DestGroupId=sg-bp67acfmxa123b****
   *         &Permissions.1.IpProtocol=TCP
   *         &Permissions.1.PortRange=22/22
   *         &Permissions.1.NicType=intranet
   *         &Permissions.1.Policy=accept
   *         &<公共请求参数>
   *             ```
   *         - 撤销指定前缀列表的访问权限。如以下请求示例：IpProtocol、PortRange、（可选）SourcePortRange、NicType、Policy、（可选）SourceCidrIp和DestPrefixListId。
   *     
   *             ```
   *         http(s)://ecs.aliyuncs.com/?Action=RevokeSecurityGroupEgress
   *         &SecurityGroupId=sg-bp67acfmxazb4ph***
   *         &Permissions.1.IpProtocol=TCP
   *         &Permissions.1.DestPrefixListId=pl-x1j1k5ykzqlixdcy****
   *         &Permissions.1.PortRange=-22/22
   *         &Permissions.1.NicType=intranet
   *         &Permissions.1.Policy=accept
   *         &<公共请求参数>
   *             ```
   * @summary: 调用RevokeSecurityGroupEgress删除一条或多条出方向安全组规则。
   */
  export namespace RevokeSecurityGroupEgress {
    export type Params = {
      /** 安全组所属地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 安全组ID。 */
      SecurityGroupId: string;
      /** 安全组规则ID列表。N的取值范围：1~100。 */
      SecurityGroupRuleId?: Array<string>;
      /** 安全组规则列表。N的取值范围：1~100。 */
      Permissions?: Array<{
        /** 安全组规则的描述。长度为1~512个字符。

        N的取值范围：1~100。 */
        Description?: string;
        /** 需要撤销访问权限的目的端IPv4 CIDR地址块。支持CIDR格式和IPv4格式的IP地址范围。

        N的取值范围：1~100。 */
        DestCidrIp?: string;
        /** 需要撤销访问权限的目的端安全组ID。

        - 至少设置一项`DestGroupId`或者`DestCidrIp`、`Ipv6DestCidrIp`或`DestPrefixListId`参数中的一项。
        - 如果指定了`DestGroupId`没有指定参数`DestCidrIp`，则参数`NicType`取值只能为intranet。
        - 如果同时指定了`DestGroupId`和`DestCidrIp`，则默认以`DestCidrIp`为准。

        您需要注意：

        - 企业安全组不支持授权安全组访问。
        - 普通安全组支持授权的安全组数量最多为20个。

        N的取值范围：1~100。 */
        DestGroupId?: string;
        /** 撤销跨账户授权的安全组规则时，目的端安全组所属的阿里云账户。

        - 如果`DestGroupOwnerAccount`及`DestGroupOwnerId`均未设置，则认为是撤销您其他安全组的访问权限。 
        - 如果已经设置参数`DestCidrIp`，则参数`DestGroupOwnerAccount`无效。  

        N的取值范围：1~100。
                  */
        DestGroupOwnerAccount?: string;
        /** 撤销跨账户授权的安全组规则时，目的端安全组所属的阿里云账户。

        - 如果`DestGroupOwnerId`及`DestGroupOwnerAccount`均未设置，则认为是撤销您其他安全组的访问权限。  
        - 如果您已经设置参数`DestCidrIp`，则参数`DestGroupOwnerId`无效。 

        N的取值范围：1~100。  */
        DestGroupOwnerId?: string;
        /** 需要撤销访问权限的目的端前缀列表。您可以调用[DescribePrefixLists](https://help.aliyun.com/document_detail/205046.html)查询可以使用的前缀列表ID。

        注意事项：

        - 安全组的网络类型为经典网络时，不支持设置前缀列表。关于安全组以及前缀列表使用限制的更多信息，请参见[安全组使用限制](https://help.aliyun.com/document_detail/25412.html#SecurityGroupQuota1)。
        - 当您指定了`DestCidrIp`、`Ipv6DestCidrIp`、`DestGroupId`参数中的一个时，将忽略该参数。

        N的取值范围：1~100。 */
        DestPrefixListId?: string;
        /** 传输层协议。取值不区分大小写。取值范围： 
                 
        - TCP。
        - UDP。
        - ICMP。
        - ICMPv6。
        - GRE。
        - ALL：支持所有协议。

        N的取值范围：1~100。 */
        IpProtocol?: string;
        /** 需要撤销访问权限的目的端IPv6 CIDR地址块。支持CIDR格式和IPv6格式的IP地址范围。

        N的取值范围：1~100。

        > 仅在支持IPv6的VPC类型ECS实例上有效，且该参数与`DestCidrIp`参数不可同时设置。 */
        Ipv6DestCidrIp?: string;
        /** 源端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。

        用于支持五元组规则，请参见[安全组五元组规则](https://help.aliyun.com/document_detail/97439.html)。 

        N的取值范围：1~100。

        > 仅在支持IPv6的VPC类型ECS实例上有效，且该参数与`DestCidrIp`参数不可同时设置。 */
        Ipv6SourceCidrIp?: string;
        /** 经典网络类型安全组规则的网卡类型。取值范围：

        - internet：公网网卡。
        - intranet：内网网卡。

        专有网络VPC类型安全组规则无需设置网卡类型，默认为intranet，只能为intranet。

        撤销安全组之间授权规则，即指定了`SourceGroupId`参数时，只能为intranet。

        默认值：internet。

        N的取值范围：1~100。

         */
        NicType?: string;
        /** 访问权限。取值范围： 
                 
        - accept：接受访问。
        - drop：拒绝访问，不返回拒绝信息，表现为发起端请求超时或者无法建立连接的类似信息。

        默认值：accept。

        N的取值范围：1~100。 */
        Policy?: string;
        /** 安全组开放的传输层协议相关的端口范围。取值范围： 
                 
        - TCP/UDP协议：取值范围为1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
        - ICMP协议：-1/-1。
        - GRE协议：-1/-1。
        - ALL：-1/-1。

        N的取值范围：1~100。 */
        PortRange?: string;
        /** 安全组规则优先级。数字越小，代表优先级越高。取值范围：1~100。

        默认值：1。

        N的取值范围：1~100。 */
        Priority?: string;
        /** 源端IPv4 CIDR地址段。支持CIDR格式和IPv4格式的IP地址范围。

        用于支持五元组规则，请参见[安全组五元组规则](https://help.aliyun.com/document_detail/97439.html)。

        N的取值范围：1~100。 */
        SourceCidrIp?: string;
        /** 安全组开放的传输层协议相关的源端端口范围。取值范围：
                 
        - TCP/UDP协议：取值范围为1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
        - ICMP协议：-1/-1。
        - GRE协议：-1/-1。
        - ALL：-1/-1。

        用于支持五元组规则，请参见[安全组五元组规则](https://help.aliyun.com/document_detail/97439.html)。

        N的取值范围：1~100。 */
        SourcePortRange?: string }>;
      /** 已废弃。请使用`Permissions.N.Policy`来设置访问权限。 */
      Policy?: string;
      /** 已废弃。请使用`Permissions.N.Priority`来指定规则优先级。 */
      Priority?: string;
      /** 已废弃。请使用`Permissions.N.IpProtocol`来指定传输层协议。 */
      IpProtocol?: string;
      /** 已废弃。请使用`Permissions.N.DestCidrIp`来指定目的端IPv4 CIDR地址块。 */
      DestCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.Ipv6DestCidrIp`来指定目的端IPv6 CIDR地址块。 */
      Ipv6DestCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.DestGroupId`来指定目的端安全组ID。 */
      DestGroupId?: string;
      /** 已废弃。请使用`Permissions.N.DestPrefixListId`来指定源端前缀列表ID。 */
      DestPrefixListId?: string;
      /** 已废弃。请使用`Permissions.N.PortRange`来指定端口范围。 */
      PortRange?: string;
      /** 已废弃。请使用`Permissions.N.SourceCidrIp`来指定源端IPv4 CIDR地址段。 */
      SourceCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.Ipv6SourceCidrIp`来指定源端IPv6 CIDR地址段。 */
      Ipv6SourceCidrIp?: string;
      /** 已废弃。请使用`Permissions.N.SourcePortRange`来指定源端端口范围。 */
      SourcePortRange?: string;
      /** 已废弃。请使用`Permissions.N.DestGroupOwnerAccount`来指定目的端安全组所属的阿里云账户。 */
      DestGroupOwnerAccount?: string;
      /** 已废弃。请使用`Permissions.N.DestGroupOwnerId`来指定目的端安全组所属的阿里云账户ID。 */
      DestGroupOwnerId?: number;
      /** 已废弃。请使用`Permissions.N.NicType`来指定网卡类型。 */
      NicType?: string;
      /** 已废弃。请使用`Permissions.N.Description`来指定规则的描述。 */
      Description?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RunCommand
   * ## 接口说明
   * 
   * 不同于通过[CreateCommand](https://help.aliyun.com/document_detail/64844.html)和[InvokeCommand](https://help.aliyun.com/document_detail/64841.html)执行命令，RunCommand只需一次调用即可完成命令的创建与执行。
   * 
   * 调用该接口时，您需要注意：
   * 
   * - 目标实例的状态必须为运行中（`Running`），您可以调用[DescribeInstances](https://help.aliyun.com/document_detail/25506.html)查询。
   * 
   * - 目标实例必须预先安装[云助手Agent](https://help.aliyun.com/document_detail/64921.html)。
   * 
   * - 执行PowerShell类型的命令时，您需要确保目标ECS Windows实例已经配置了PowerShell模块。
   * 
   * - 当您基于Cron表达式执行定时任务且指定了时区，时钟定时执行时间设置基准为您指定的时区；当您没有指定时区时，时钟定时执行时间设置基准为ECS实例内的系统时区，且执行时间以实例的系统时间为准。请确保ECS实例的时间或者时区与您预期的时间一致。关于时区的更多信息，请参见[设置Linux实例时区和NTP服务](https://help.aliyun.com/document_detail/92803.html)或[设置Windows实例NTP服务](https://help.aliyun.com/document_detail/51890.html)。
   * 
   * - 您可以通过指定参数`Timeout`为命令设置在ECS实例中执行时最大的超时时间，命令执行超时后，云助手Agent会强制终止进程。
   *     - 单次执行超时后，命令的执行状态（[InvokeRecordStatus](https://help.aliyun.com/document_detail/64845.html)）变为执行失败（Failed）。
   *     - 定时执行的超时时间对每一次执行记录均有效，上次执行超时不影响下一次执行。某次执行超时后，执行状态（[InvokeRecordStatus](https://help.aliyun.com/document_detail/64845.html)）变为执行失败（Failed）。
   * 
   *      云助手Agent版本需要不低于以下对应的版本才能支持定时任务的新特性（固定时间间隔执行、仅在指定时间执行一次、基于Cron表达式定时执行时指定年份或时区）。如果结果返回`ClientNeedUpgrade`错误码，请参见[升级或禁止升级云助手Agent](https://help.aliyun.com/document_detail/134383.html)，将客户端更新至最新版本。
   * 
   *         - Linux：2.2.3.282。
   *         - Windows：2.1.3.282。
   * 
   * - 命令可能会因为目标实例的状态异常、网络异常或云助手Agent异常而出现无法执行的情况，无法执行时不会生成执行信息。更多信息，请参见[执行失败常见错误及修复建议](https://help.aliyun.com/document_detail/87029.html)。
   * 
   * - `EnableParameter=true`时会启用自定义参数功能。在设置`CommandContent`时可以通过`{{parameter}}`的形式表示自定义参数，并在运行命令时，传入自定义参数键值对。
   * 
   * - 在一个地域下，根据您的使用情况，最多可以保有500～10000条云助手命令，您可以通过查看[资源配额](https://help.aliyun.com/document_detail/184115.html)或调用[DescribeAccountAttribute](https://help.aliyun.com/document_detail/73772.html)查询配额情况。
   * 
   * - 建议您先调用[DescribeCloudAssistantStatus](https://help.aliyun.com/document_detail/87346.html)查询实例的云助手状态，当CloudAssistantStatus为true时再执行命令，尤其对于新购实例。
   * @summary: 调用RunCommand在一台或多台ECS实例中执行一段Shell、PowerShell或者Bat类型的脚本。
   */
  export namespace RunCommand {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 命令执行的资源组ID，当指定该参数时：

      - InstanceId对应的ECS实例必须属于该资源组。

      - 支持通过指定该参数筛选出对应的命令执行结果（通过调用[DescribeInvocations](https://help.aliyun.com/document_detail/64840.html)或[DescribeInvocationResults](https://help.aliyun.com/document_detail/64845.html)）。 */
      ResourceGroupId?: string;
      /** 命令名称。支持全字符集，长度不得超过128个字符。 */
      Name?: string;
      /** 命令描述。支持全字符集，长度不得超过512个字符。 */
      Description?: string;
      /** 运维命令的语言类型。取值范围：

      - RunBatScript：适用于Windows实例的Bat命令。
      - RunPowerShellScript：适用于Windows实例的PowerShell命令。
      - RunShellScript：适用于Linux实例的Shell命令。 */
      Type: string;
      /** 命令内容。命令内容可以是明文内容或Base64编码后的内容。您需要注意：

      - 若保存命令，命令内容在Base64编码后的大小不能超过18 KB；若不保存命令，命令内容在Base64编码后的大小不能超过24 KB。您可通过`KeepCommand`设置是否保留命令。
      - 如果您的命令内容是Base64编码后的内容，则必须设置`ContentEncoding=Base64`。
      - 指定参数`EnableParameter=true`可在命令内容中启用自定义参数功能：
          - 用`{{}}`包含的方式定义自定义参数，在`{{}}`内参数名前后的空格以及换行符会被忽略。
          - 自定义参数个数不能超过20个。
          - 自定义参数名允许a-zA-Z0-9-_的组合，不支持acs::前缀指定非内置环境参数，不支持其余字符，参数名不区分大小写。
          - 单个自定义参数名不能超过64字节。

      - 您可以指定内置环境参数作为自定义参数，执行命令时无需手动对参数赋值，云助手将为您自动替换为环境中对应的值。支持指定以下内置环境参数：
          - `{{ACS::RegionId}}`：地域ID。
          - `{{ACS::AccountId}}`：阿里云主账号UID。
          - `{{ACS::InstanceId}}`：实例ID。命令下发到多个实例时，如需指定`{{ACS::InstanceId}}`作为内置环境参数，需确保云助手Agent不低于以下版本：
              - Linux：2.2.3.309
              - Windows：2.1.3.309
          - `{{ACS::InstanceName}}`：实例名称。命令下发到多个实例时，如需指定`{{ACS::InstanceName}}`作为内置环境参数，需确保云助手Agent不低于以下版本：
              - Linux：2.2.3.344
              - Windows：2.1.3.344
          - `{{ACS::InvokeId}}`：命令执行ID。如需指定`{{ACS::InvokeId}}`作为内置环境参数，需确保云助手Agent不低于以下版本：
              - Linux：2.2.3.309
              - Windows：2.1.3.309
          - `{{ACS::CommandId}}`：命令ID。通过调用本接口执行命令时，如需指定`{{ACS::CommandId}}`作为内置环境参数，需确保云助手Agent不低于以下版本： 
              - Linux：2.2.3.309
              - Windows：2.1.3.309
       */
      CommandContent: string;
      /** 命令在ECS实例中的运行目录。长度不得超过200个字符。

      默认值：

      - Linux系统实例默认在管理员（root用户）的home目录下，即`/root`。
      - Windows系统实例默认在云助手Agent进程所在目录，例如`C:\Windows\System32`。 */
      WorkingDir?: string;
      /** 执行命令的超时时间，单位：秒。

      当因为进程原因、缺失模块、缺失云助手Agent等原因无法运行命令时，会出现超时现象。超时后，会强制终止命令进程。

      默认值：60。 */
      Timeout?: number;
      /** 命令中是否包含自定义参数。

      默认值：false。 */
      EnableParameter?: boolean;
      /** 设置命令执行的方式。取值范围：

      - Once：立即执行命令。
      - Period：定时执行命令。当该参数取值为`Period`时，必须同时指定`Frequency`参数。
      - NextRebootOnly：当实例下一次启动时，自动执行命令。
      - EveryReboot：实例每一次启动都将自动执行命令。

      默认值：
      - 当不指定`Frequency`参数时，默认值为`Once`。
      - 当指定`Frequency`参数时，无论是否已设置了该参数值，都将按照`Period`处理。

      注意事项：
      - 您可以调用[StopInvocation](https://help.aliyun.com/document_detail/64838.html)停止待执行的命令或定时执行的命令。
      - 当该参数取值`Period`或者`EveryReboot`时，您可以调用[DescribeInvocationResults](https://help.aliyun.com/document_detail/64845.html)，然后指定`IncludeHistory=true`查看命令定时执行的历史记录。 */
      RepeatMode?: string;
      /** >该参数已废弃，传入该参数不会生效。 */
      Timed?: boolean;
      /** 定时执行命令的执行时间。目前支持三种定时执行方式：固定时间间隔执行（基于Rate表达式）、仅在指定时间执行一次、基于时钟定时执行（基于Cron表达式）。

      - 固定时间间隔执行：基于Rate表达式，按照设置的时间间隔执行命令。时间间隔支持按秒（s） 、分钟（m） 、小时（h）和天（d）来选择，适用于在固定时间间隔执行任务的场景。格式为`rate(<执行间隔数值><执行间隔单位>)`，如5分钟执行一次，格式为`rate(5m)`。使用固定时间间隔执行有以下限制：
          - 设置的时间间隔不大于7天、不小于60秒，且需大于定时任务的超时时间。
          - 执行间隔只基于固定频率，与任务实际执行需要的时间无关。例如设置每5分钟执行一次命令，任务需要2分钟执行完成，则在任务完成3分钟后继续执行下一轮。
          - 创建任务时不会立即执行。例如设置每5分钟执行一次命令，创建任务时不会立即执行一次命令，而是在任务创建完成后的5分钟后开始执行。

      - 仅在指定时间执行一次：按照设置的时区和执行时间点执行一次命令。格式为`at(yyyy-MM-dd HH:mm:ss <时区>)`，即`at(年-月-日 时:分:秒 <时区>)`。如果不指定时区，默认为UTC时区。时区支持以下三种形式：
          - 时区全称：  如`Asia/Shanghai`（中国/上海时间）、`America/Los_Angeles`（美国/洛杉矶时间）等。
          - 时区相对于格林威治时间的偏移量：  如`GMT+8:00`（东八区）、`GMT-7:00`（西七区）等。使用GMT格式时，小时位不支持添加前导零。
          - 时区缩写：  仅支持UTC（协调世界时间）。

        如果指定在中国/上海时间2022年06月06日13时15分30秒执行一次，格式为：`at(2022-06-06 13:15:30 Asia/Shanghai)`；如果指定在西七区2022年06月06日13时15分30秒执行一次，格式为：`at(2022-06-06 13:15:30 GMT-7:00)`。

      - 基于时钟定时执行（基于Cron表达式）：基于Cron表达式，按照设置的定时任务执行命令。格式为`<秒> <分钟> <小时> <日期> <月份> <星期> <年份（可选）> <时区>`，即`<Cron表达式> <时区>`。在指定的时区下，根据Cron表达式推算定时任务执行时间并执行。若不指定时区，默认为执行定时任务实例的系统内部时区。关于Cron表达式的更多信息，请参见[Cron表达式](https://help.aliyun.com/document_detail/64769.html)。时区支持以下三种形式：
          - 时区全称：  如`Asia/Shanghai`（中国/上海时间）、`America/Los_Angeles`（美国/洛杉矶时间）等。
          - 时区相对于格林威治时间的偏移量：  如`GMT+8:00`（东八区）、`GMT-7:00`（西七区）等。使用GMT格式时，小时位不支持添加前导零。
          - 时区缩写：  仅支持UTC（协调世界时间）。
        例如，在中国/上海时间，2022年每天上午10:15执行一次命令，格式为`0 15 10 ? * * 2022 Asia/Shanghai`；在东八区时间，2022年每天上午10:00到11:30每隔半小时执行，格式为`0 0/30 10-11 * * ? 2022 GMT+8:00`；在UTC时间，从2022年开始，每隔两年的10月每天下午14:00到下午14:55时间段内每隔5分钟执行，格式为`0 0/5 14 * 10 ? 2022/2 UTC`。

          >设置的最小时间间隔需大于或等于定时任务的超时时间，且不小于10 秒。 */
      Frequency?: string;
      /** 命令中包含自定义参数时，执行命令时传入的自定义参数的键值对。例如，命令内容为`echo {{name}}`，则可以通过`Parameter`参数传入键值对`{"name":"Jack"}`。自定义参数将自动替换变量值`name`，得到一条新的命令，实际执行的是`echo Jack`。

      自定义参数的个数范围为0~10，且您需要注意：

      - 键不允许为空字符串，最多支持64个字符。
      - 值允许为空字符串。
      - 自定义参数与原始命令内容在Base64编码后，若保存命令，命令内容在Base64编码后的大小不能超过18 KB；若不保存命令，命令内容在Base64编码后的大小不能超过24 KB。您可通过`KeepCommand`设置是否保留命令。
      - 设置的自定义参数名集合必须为创建命令时定义的参数集的子集。对于未传入的参数，您可以使用空字符串代替。

      默认值为空，表示取消设置该参数从而禁用自定义参数。 */
      Parameters?: object;
      /** 执行完该命令后，是否保留下来。取值范围：

      - true：保留。可以通过InvokeCommand再次执行。会占用云助手命令的保有量配额。
      - false：不保留。执行完成后自动删除，不占用云助手命令的保有量配额。

      默认值：false。 */
      KeepCommand?: boolean;
      /** 命令内容（`CommandContent`）的编码方式。取值范围（不区分大小写）：

      - PlainText：不编码，采用明文传输。
      - Base64：Base64编码。

      默认值：PlainText，乱填或错填该取值会当作PlainText处理。 */
      ContentEncoding?: string;
      /** 在ECS实例中执行命令的用户名称。长度不得超过255个字符。

      - Linux系统的ECS实例，默认以root用户执行命令。
      - Windows系统的ECS实例，默认以System用户执行命令。

      您也可以指定实例中已存在的其他用户执行命令，以普通用户执行云助手命令更加安全。更多信息，请参见[设置普通用户执行云助手命令](https://help.aliyun.com/document_detail/203771.html)。 */
      Username?: string;
      /** 在Windows实例中执行命令的用户的密码名称。长度不得超过255个字符。

      当您希望以非默认用户（System）在Windows实例中执行命令时，需要同时传入`Username`和该参数。为降低密码泄露的风险，需要将密码明文托管在运维编排服务的参数仓库中，此处仅传入密码的名称。更多信息，请参见[加密参数](https://help.aliyun.com/document_detail/186828.html)以及[设置普通用户执行云助手命令](https://help.aliyun.com/document_detail/203771.html)。

      > 当您使用Linux实例的root用户或Windows实例的System用户执行命令时，不需要传递该参数。 */
      WindowsPasswordName?: string;
      /** ECS实例ID。N表示您可以同时设置多个实例ID，N的取值范围：1~50。

      若指定了多台实例后，其中某台实例不满足执行条件时，您都需要重新选择。 */
      InstanceId: Array<string>;
      /** 标签列表。 */
      Tag?: Array<{
        /** 命令执行的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个。使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。

        最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。

         */
        Key?: string;
        /** 命令执行的标签值。N的取值范围为1~20。该值可以为空字符串。

        最多支持128个字符，不能包含`http://`或`https://`。 */
        Value?: string }>;
      /** 容器ID。仅支持64位16进制字符串，允许存在`docker://`、`containerd://`或者`cri-o://`前缀来明确指定的容器运行时。

      注意事项：
      - 如果指定了该参数，云助手将在实例的指定容器内执行脚本。
      - 如果指定了该参数，仅支持在云助手Agent版本不低于2.2.3.344的Linux实例内运行。
      - 如果指定了该参数，已指定的`Username`参数和`WorkingDir`参数将不会生效。仅支持通过容器默认用户在容器的默认工作目录下执行命令。详细信息，请参见[使用云助手在容器内执行命令](https://help.aliyun.com/document_detail/456641.html)。
      - 如果指定了该参数，在Linux容器中只支持执行Shell脚本，不支持在脚本开头使用类似`#!/usr/bin/python`命令的形式指定脚本内容的解释器。详细信息，请参见[使用云助手在容器内执行命令](https://help.aliyun.com/document_detail/456641.html)。
       */
      ContainerId?: string;
      /** 容器名称。

      注意事项：
      - 如果指定了该参数，云助手将在实例的指定容器内执行脚本。
      - 如果指定了该参数，仅支持在云助手Agent版本不低于2.2.3.344的Linux实例内运行。
      - 如果指定了该参数，已指定的`Username`参数和`WorkingDir`参数将不会生效。仅支持通过容器默认用户在容器的默认工作目录下执行命令。详细信息，请参见[使用云助手在容器内执行命令](https://help.aliyun.com/document_detail/456641.html)。
      - 如果指定了该参数，在Linux容器中只支持执行Shell脚本，不支持在脚本开头使用类似`#!/usr/bin/python`命令的形式指定脚本内容的解释器。详细信息，请参见[使用云助手在容器内执行命令](https://help.aliyun.com/document_detail/456641.html)。
       */
      ContainerName?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 命令ID。 */
      CommandId?: string;
      /** 命令执行ID。 */
      InvokeId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RunInstances
   * ## 接口说明
   * 
   * - **准备工作**：
   *   - 通过实名认证。更多信息，请参见[账号实名认证相关文档](https://help.aliyun.com/document_detail/48263.html)。 
   *   - 成本估算：了解云服务器ECS的计费方式。更多信息，请参见[计费概述](https://help.aliyun.com/document_detail/25398.html)。
   *   - 产品选型：调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)查看目标实例规格的性能数据，或者参见[选型配置](https://help.aliyun.com/document_detail/58291.html)了解如何选择实例规格。
   *   - 查询库存：调用[DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html)查看指定地域或者可用区内的资源供给情况。
   *   - 网络规划：您需要确保您已经有可用的安全组。更多信息，请参见[CreateSecurityGroup](https://help.aliyun.com/document_detail/25553.html)。创建专有网络VPC类型实例前，您需要预先在相应的阿里云地域[创建VPC](https://help.aliyun.com/document_detail/65430.html)。
   * 
   * - **与CreateInstance对比差异**：
   * 
   *     和CreateInstance接口相比，RunInstances接口有以下优点：
   *  
   *   - 单次最多可以创建100台实例，避免重复多次调用CreateInstance。
   *   - 实例创建之后，实例会自动变成`Starting`状态，然后变成`Running`状态，不需要再调用[StartInstance](https://help.aliyun.com/document_detail/25500.html)启动实例。
   *   - 创建实例时可以指定`InternetMaxBandwidthOut`为ECS实例分配公网IP，不需要您再调用[AllocatePublicIpAddress](https://help.aliyun.com/document_detail/25544.html)分配公网IP。
   *   - 您可以指定`AutoReleaseTime`参数来设定自动释放时间，不需要再调用[ModifyInstanceAutoReleaseTime](https://help.aliyun.com/document_detail/47576.html)设置自动释放时间。
   *   - 您可以指定`LaunchTemplateId`和`LaunchTemplateVersion`使用启动模板，可以免除您每次创建实例时都需要填入大量配置参数。
   *   - 可以指定`UniqueSuffix`参数批量设置有序的实例名称或主机名称，方便管理与检索。
   *   - 使用RunInstances创建实例时支持设置Enclave机密计算模式和可信系统模式。
   *   - 可以指定 `NetworkOptions.EnableJumboFrame`参数为true在创建时开启Jumbo frame特性。 更多信息，请参见 [ECS实例MTU](https://help.aliyun.com/document_detail/200512.html)。
   * 
   * - **注意事项**：
   * 
   *   - 单次最多能创建100台实例。
   *   - 您可以指定参数`AutoReleaseTime`设置实例自动释放时间。
   *   - 创建成功后会返回实例ID列表，您可以通过[DescribeInstances](https://help.aliyun.com/document_detail/25506.html)查询新建实例状态。
   *   - 创建实例时，默认自动启动实例，直到实例状态变成运行中（`Running`）。
   *   - 自2020年11月27日起，创建和变配ECS实例时带宽峰值受账户限速策略影响。如需更大带宽峰值，请提交工单。具体限速策略：单个地域下，所有按使用流量计费ECS实例的实际运行带宽峰值总和不大于5 Gbit/s；所有按固定带宽计费ECS实例的实际运行带宽峰值总和不大于50 Gbit/s。
   *   - 与[CreateInstance](https://help.aliyun.com/document_detail/25499.html)相比，通过`RunInstances`创建的实例如果参数`InternetMaxBandwidthOut`的值大于0，则自动为实例分配公网IP。
   *   - RunInstances支持以下任一方式绑定主网卡，但需要注意一次调用只能选用一种方式配置主网卡，同时使用两种方式将会调用失败并返回错误信息。
   *            - 通过`SecurityGroupId`、`VSwitchId`、`PrivateIpAddress`、`NetworkInterfaceQueueNumber`与`Ipv6AddressCount`等参数直接设置主网卡的相关配置信息。
   *            - 通过`NetworkInterface.N.*`设置主网卡以及辅助网卡的配置信息。当`NetworkInterface.N.InstanceType`取值为`Primary`时，表示设置主网卡；当`NetworkInterface.N.InstanceType`取值为`Secondary`或空值时，表示设置辅助网卡。
   *   - 提交创建任务后，参数不合法或者库存不足的情况下会报错，具体的报错原因参见错误码。
   * 
   *            - 如果创建实例时返回`QuotaExceed.ElasticQuota`错误，表示您在当前地域选择的实例规格所要创建的台数超出系统限额，或者全实例规格vCPU配额超出系统限额，您可以前往[ECS管理控制台](https://ecs.console.aliyun.com/?spm=a2c8b.12215451.favorites.decs.5e3a336aMGTtzy#/privileges/quota)或[配额中心](https://quotas.console.aliyun.com/products/ecs/quotas)申请提高限额。
   * 
   *            - 如果创建实例时返回`QuotaExceed.DiskCapacity`错误，表示您当前选择的磁盘类型所要创建的总容量超出指定可用区的系统限额，您可以前往[配额中心](https://quotas.console.aliyun.com/products/disk/quotas)查询和申请提高磁盘容量配额。
   * 
   * - **最佳实践**：
   * 
   *   - 单次大批量创建ECS实例（大于100台）遇到库存不足的场景；对实例规格或可用区等资源配置无指定要求，更关注如何快速创建实例的场景；对ECS实例数量无指定要求，更关注总算力vCPU个数等场景下，阿里云推荐您使用弹性供应组。您可以通过[CreateAutoProvisioningGroup](https://help.aliyun.com/document_detail/122738.html)创建弹性供应组，一键式地部署跨计费方式、跨可用区、跨实例规格族的实例集群。更多信息，请参见[使用弹性供应组API批量创建ECS实例](https://help.aliyun.com/document_detail/200772.html)。
   * 
   *   - `RunInstances`可以执行批量创建任务，为便于管理与检索，建议您为每批次启动的实例指定标签（`Tag.N.Key`和`Tag.N.Value`），并且为主机名（`HostName`）和实例名称（`InstanceName`）添加有序后缀（`UniqueSuffix`）。
   * 
   *   - 实例启动模板能免除您每次创建实例时都需要填入大量配置参数，您可以创建实例启动模板（[CreateLaunchTemplate](https://help.aliyun.com/document_detail/74686.html)）后，在`RunInstances`请求中指定`LaunchTemplateId`和`LaunchTemplateVersion`使用启动模板。
   * 
   *   - 您可以在[ECS管理控制台](https://ecs.console.aliyun.com/)创建ECS实例时获取`RunInstances`的最佳实践建议。确认订单时，左侧**API 工作流**罗列出`RunInstances`能使用的关联API以及请求参数的值。右侧提供面向编程语言的SDK示例，目前支持**Java**和**Python**示例。
   * 
   * ### 示例1：创建包年包月实例
   * 
   * 实例所在地域为华东1（杭州），计费方式为包年包月，购买时长一个月，到期自动续费一个月，镜像ID为：aliyun_3_x64_20G_alibase_20221102.vhd，实例规格为：ecs.g7.large，40 GiB ESSD云盘，挂载100 GiB  ESSD云数据盘，公网出带宽为10 Mbit/s，自动分配私网IP和公网IP，实例名称为ECS-test，登录密码为ECS@test1234，数量为1台。
   * 
   * ```
   * http(s)://ecs.aliyuncs.com/?Action=RunInstances
   * &RegionId=cn-hangzhou
   * &ImageId=aliyun_3_x64_20G_alibase_20221102.vhd
   * &InstanceType=ecs.g7.large
   * &SecurityGroupId=sg-bp150uqocpf9jj70****
   * &VSwitchId=vsw-bp1qo7s91cbch5i4l****
   * &InstanceChargeType=PrePaid
   * &SystemDisk.Size=40
   * &DataDisk.1.Size=100
   * &DataDisk.1.Category=cloud_essd
   * &SystemDisk.Category=cloud_essd
   * &Amount=1
   * &Period=1
   * &PeriodUnit=Month
   * &AutoRenew=true
   * &AutoRenewPeriod=1
   * &HostName=ECS-test
   * &Password=ECS@test1234
   * &InternetMaxBandwidthOut=10
   * &公共请求参数
   * ```
   * 
   * ### 示例2：创建按量付费实例
   * 
   * 实例所在地域为华东1（杭州），计费方式为按量付费，镜像ID为：aliyun_3_x64_20G_alibase_20221102.vhd，实例规格为：ecs.g7.large，40 GiB ESSD云盘，挂载100 GiB  ESSD云数据盘，公网出带宽为10 Mbit/s，自动分配私网IP和公网IP，实例名称为ECS-test，登录密码为ECS@test1234，数量为1台。
   * 
   * ```
   * http(s)://ecs.aliyuncs.com/?Action=RunInstances
   * &RegionId=cn-hangzhou
   * &ImageId=aliyun_3_x64_20G_alibase_20221102.vhd
   * &InstanceType=ecs.g7.large
   * &SecurityGroupId=sg-bp150uqocpf9jj70****
   * &VSwitchId=vsw-bp1qo7s91cbch5i4l****
   * &InstanceChargeType=PostPaid
   * &SystemDisk.Size=40
   * &DataDisk.1.Size=100
   * &DataDisk.1.Category=cloud_essd
   * &SystemDisk.Category=cloud_essd
   * &HostName=ECS-test
   * &Password=ECS@test1234
   * &InternetMaxBandwidthOut=10
   * &公共请求参数
   * ```
   * 
   * ### 示例3：创建抢占式实例
   * 
   * 实例所在地域为华东1（杭州），计费方式为抢占式实例，竞价策略为系统自动出价，跟随当前市场实际价格，实例保留时长为1小时，镜像ID为：aliyun_3_x64_20G_alibase_20221102.vhd，实例规格为：ecs.g7.large，40 GiB ESSD云盘，挂载100 GiB  ESSD云数据盘，公网出带宽为10 Mbit/s，自动分配私网IP和公网IP，实例名称为ECS-test，登录密码为ECS@test1234，数量为1台。
   * 
   * ```
   * http(s)://ecs.aliyuncs.com/?Action=RunInstances
   * &RegionId=cn-hangzhou
   * &ImageId=aliyun_3_x64_20G_alibase_20221102.vhd
   * &InstanceType=ecs.g7.large
   * &SecurityGroupId=sg-bp150uqocpf9jj70****
   * &VSwitchId=vsw-bp1qo7s91cbch5i4l****
   * &InstanceChargeType=PostPaid
   * &SystemDisk.Size=40
   * &DataDisk.1.Size=100
   * &DataDisk.1.Category=cloud_essd
   * &SystemDisk.Category=cloud_essd
   * &HostName=ECS-test
   * &Password=ECS@test1234
   * &InternetMaxBandwidthOut=10
   * &SpotStrategy=SpotAsPriceGo
   * &SpotDuration=1
   * &公共请求参数
   * ```
   * 
   * ### 示例4：在专有宿主机上创建包年包月实例
   * 
   * 实例所在地域为华东1（杭州），专有宿主机为dh-bp12w10wll9xcjq2****，计费方式包年包月，购买时长一个月，镜像ID为：aliyun_3_x64_20G_alibase_20221102.vhd，实例规格为：ecs.g7.large，40 GiB ESSD云盘，挂载100 GiB  ESSD云数据盘，公网出带宽为10 Mbit/s，自动分配私网IP和公网IP，实例名称为ECS-test，登录密码为ECS@test1234，购买数量为1台。
   * 
   * ```
   * http(s)://ecs.aliyuncs.com/?Action=RunInstances
   * &RegionId=cn-hangzhou
   * &ImageId=aliyun_3_x64_20G_alibase_20221102.vhd
   * &InstanceType=ecs.g7.large
   * &SecurityGroupId=sg-bp150uqocpf9jj70****
   * &VSwitchId=vsw-bp1qo7s91cbch5i4l****
   * &InstanceChargeType=PrePaid
   * &Amount=1
   * &Period=1
   * &PeriodUnit=Month
   * &SystemDisk.Size=40
   * &DataDisk.1.Size=100
   * &DataDisk.1.Category=cloud_essd
   * &SystemDisk.Category=cloud_essd
   * &HostName=ECS-test
   * &Password=ECS@test1234
   * &InternetMaxBandwidthOut=10
   * &DedicatedHostId=dh-bp12w10wll9xcjq2****
   * &公共请求参数
   * ```
   * @summary: 创建一台或多台按量付费或者包年包月ECS实例。
   */
  export namespace RunInstances {
    export type Params = {
      /** 实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 镜像ID，启动实例时选择的镜像资源。您可以通过[DescribeImages](https://help.aliyun.com/document_detail/25534.html)查询您可以使用的镜像资源。如果您不指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板，也不通过指定`ImageFamily`选用镜像族系最新可用镜像，则`ImageId`为必选参数。 */
      ImageId?: string;
      /** 镜像族系名称，通过设置该参数来获取当前镜像族系内最新可用镜像来创建实例。
      - 设置了参数`ImageId`，则不能设置该参数。
      - 未设置参数`ImageId`，但指定的`LaunchTemplateId`或`LaunchTemplateName`对应的启动模板设置了`ImageId`，则不能设置该参数。
      - 未设置`ImageId`，且指定的`LaunchTemplateId`或`LaunchTemplateName`对应的启动模板未设置`ImageId`，则可以设置该参数。
      - 未设置`ImageId`，且未设置`LaunchTemplateId`、`LaunchTemplateName`参数，则可以设置该参数。
      > 阿里云官方镜像关联的镜像族系信息请参见[公共镜像概述](https://help.aliyun.com/document_detail/108393.html)。 */
      ImageFamily?: string;
      /** 实例的资源规格。如果您不指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板，`InstanceType`为必选参数。  

      - 产品选型：参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)或调用[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)查看目标实例规格的性能数据，或者参见[选型配置](https://help.aliyun.com/document_detail/58291.html)了解如何选择实例规格。
      - 查询库存：调用[DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html)查看指定地域或者可用区内的资源供给情况。 */
      InstanceType?: string;
      /** 新创建实例所属于的安全组ID。同一个安全组内的实例之间可以互相访问，一个安全组能容纳的实例数量视安全组类型而定，具体请参见[使用限制](https://help.aliyun.com/document_detail/25412.html#SecurityGroupQuota)的安全组章节。

      > `SecurityGroupId`决定了实例的网络类型，例如，如果设置的安全组的网络类型为专有网络VPC，实例则为VPC类型，并同时需要指定参数`VSwitchId`。

      如果您不设置`LaunchTemplateId`或`LaunchTemplateName`以确定实例启动模板，则安全组ID为必选参数。您需要注意：

      - 您可以通过`SecurityGroupId`设置一个安全组，也可以通过`SecurityGroupIds.N`设置一个或多个安全组，但不支持同时设置`SecurityGroupId`和`SecurityGroupIds.N`。

      - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则不能设置`SecurityGroupId`或`SecurityGroupIds.N`，只能设置`NetworkInterface.N.SecurityGroupId`或`NetworkInterface.N.SecurityGroupIds.N`。 */
      SecurityGroupId?: string;
      /** 虚拟交换机ID。如果您创建的是VPC类型ECS实例，必须指定虚拟交换机ID，且安全组和虚拟交换机在同一个专有网络VPC中。您可以调用[DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html)查询已创建的交换机的相关信息。

      您需要注意：

      - 如果您设置了`VSwitchId`参数，则设置的`ZoneId`参数必须和交换机所在的可用区保持一致。您也可以不设置`ZoneId`参数，系统将自动选择指定交换机所在的可用区。

      - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则不能设置`VSwitchId`，只能设置`NetworkInterface.N.VSwitchId`。 */
      VSwitchId?: string;
      /** 实例名称。长度为2~128个字符，必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。默认值为实例的`InstanceId`。

      创建多台ECS实例时，您可以批量设置有序的实例名称。具体操作，请参见[批量设置有序的实例名称或主机名称](https://help.aliyun.com/document_detail/196048.html)。 */
      InstanceName?: string;
      /** 实例的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。 */
      Description?: string;
      /** 公网入带宽最大值，单位为Mbit/s。取值范围：

      - 当所购公网出带宽小于等于10 Mbit/s时：1~10，默认为10。
      - 当所购公网出带宽大于10 Mbit/s时：1~`InternetMaxBandwidthOut`的取值，默认为`InternetMaxBandwidthOut`的取值。 */
      InternetMaxBandwidthIn?: number;
      /** 公网出带宽最大值，单位为Mbit/s。取值范围：0~100。

      默认值：0。 */
      InternetMaxBandwidthOut?: number;
      /** 实例主机名称。限制说明如下：

      - 半角句号（.）和短划线（-）不能作为首尾字符，更不能连续使用。
      - Windows实例：字符长度为2~15，不支持半角句号（.），不能全是数字。允许包含大小写英文字母、数字和短划线（-）。
      - 其他类型实例（Linux等）：
          - 字符长度为2~64，支持多个半角句号（.），点之间为一段，每段允许包含大小写英文字母、数字和短划线（-）。
          - 支持通过占位符`${instance_id}`将实例ID写入`HostName`参数。例如：`HostName=k8s-${instance_id}`，并且创建的ECS实例ID为`i-123abc****`，则该实例的主机名为`k8s-i-123abc****`。

      创建多台ECS实例时，您可以：

      - 批量设置有序的主机名。具体操作，请参见[批量设置有序的实例名称或主机名称](https://help.aliyun.com/document_detail/196048.html)。
      - 通过`HostNames.N`参数，为多台实例分别设置主机名。需要注意`HostName`参数和`HostNames.N`参数不能同时设置。 */
      HostName?: string;
      /** 当创建多台实例时，是否为`HostName`和`InstanceName`自动添加有序后缀。有序后缀从001开始递增，最大不能超过999。取值范围：
      - true：添加。
      - false：不添加。

      默认值：false。

      当`HostName`或`InstanceName`按照指定排序格式设置，未设置命名后缀`name_suffix`，即命名格式为`name_prefix[begin_number,bits]`时，`UniqueSuffix`不生效，名称仅按照指定顺序排序。

      更多信息，请参见[批量设置有序的实例名称或主机名称](https://help.aliyun.com/document_detail/196048.html)。 */
      UniqueSuffix?: boolean;
      /** 实例的密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：

      ```
      ()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
      ```

      其中，Windows实例不能以正斜线（/）为密码首字符。

      > 如果传入`Password`参数，建议您使用HTTPS协议发送请求，避免密码泄露。 */
      Password?: string;
      /** 是否使用镜像预设的密码。取值范围：

      - true：使用。
      - false：不使用。

      默认值：false。

      > 使用该参数时，Password参数必须为空，同时您需要确保使用的镜像已经设置了密码。 */
      PasswordInherit?: boolean;
      /** 实例所属的可用区ID，您可以调用[DescribeZones](https://help.aliyun.com/document_detail/25610.html)获取可用区列表。

      > 如果您指定了`VSwitchId`参数，则指定的`ZoneId`参数必须和交换机所在的可用区保持一致。您也可以不指定`ZoneId`参数，系统将自动选择指定的交换机所在的可用区。

      默认值：系统自动选择。 */
      ZoneId?: string;
      /** 网络计费类型。取值范围：

      - PayByBandwidth：按固定带宽计费。
      - PayByTraffic：按使用流量计费。

      默认值：PayByTraffic。

      > **按使用流量计费**模式下的出入带宽峰值都是带宽上限，不作为业务承诺指标。当出现资源争抢时，带宽峰值可能会受到限制。如果您的业务需要有带宽的保障，请使用**按固定带宽计费**模式。
       */
      InternetChargeType?: string;
      /** 系统盘大小，单位为GiB。取值范围：

      - 普通云盘：20~500

      - 其他类型云盘：20~2048

      该参数的取值必须大于或者等于max{20, ImageSize}。

      默认值：max{40, 参数ImageId对应的镜像大小}。 */
      'SystemDisk.Size'?: string;
      /** 系统盘的云盘种类。取值范围：

      - cloud_efficiency：高效云盘。
      - cloud_ssd：SSD云盘。
      - cloud_essd：ESSD云盘。
      - cloud：普通云盘。
      - cloud_auto：ESSD AutoPL云盘。
      - cloud_essd_entry：ESSD Entry云盘。
      >仅当`InstanceType`设置为`ecs.u1`或`ecs.e`规格族时，该参数支持`cloud_essd_entry`。已停售的实例规格且非I/O优化实例默认值为cloud，否则默认值为cloud_efficiency。
       */
      'SystemDisk.Category'?: string;
      /** 系统盘名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角句号（.）、半角冒号（:）、下划线（_）或者短划线（-）。 */
      'SystemDisk.DiskName'?: string;
      /** 系统盘的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。 */
      'SystemDisk.Description'?: string;
      /** 创建ESSD云盘作为系统盘使用时，设置云盘的性能等级。取值范围：

      - PL0：单盘最高随机读写IOPS 1万。
      - PL1（默认）：单盘最高随机读写IOPS 5万。
      - PL2：单盘最高随机读写IOPS 10万。
      - PL3：单盘最高随机读写IOPS 100万。

      有关如何选择ESSD性能等级，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。 */
      'SystemDisk.PerformanceLevel'?: string;
      /** 系统盘采用的自动快照策略ID。 */
      'SystemDisk.AutoSnapshotPolicyId'?: string;
      /** 是否为I/O优化实例。[已停售的实例规格](https://help.aliyun.com/document_detail/55263.html)实例默认值是none，其他实例规格默认值是optimized。取值范围：

      - none：非I/O优化。
      - optimized：I/O优化。 */
      IoOptimized?: string;
      /** 实例自定义数据。需要以Base64方式编码，原始数据最多为16 KB。

      > 若实例满足[实例自定义数据](https://help.aliyun.com/document_detail/49121.html)的限制，您可传入UserData信息。因为传输API请求时，不会加密您设置的UserData，建议不要以明文方式传入机密的信息，例如密码和私钥等。如果必须传入，建议加密后，然后以Base64的方式编码后再传入，在实例内部以同样的方式反解密。 */
      UserData?: string;
      /** 密钥对名称。
      >Windows实例，忽略该参数。默认为空。即使填写了该参数，仍旧只执行`Password`的内容。 */
      KeyPairName?: string;
      /** 实例RAM角色名称。您可以使用RAM API [ListRoles](https://help.aliyun.com/document_detail/28713.html)查询您已创建的实例RAM角色。 */
      RamRoleName?: string;
      /** 指定创建ECS实例的数量。取值范围：1~100。

      默认值：1。 */
      Amount?: number;
      /** 指定ECS实例最小购买数量。取值范围：1~100。

      - 当ECS库存数量小于最小购买数量，会创建失败。
      - 当ECS库存数量大于等于最小购买数量，按照库存数量创建。 */
      MinAmount?: number;
      /** 按量付费实例的自动释放时间。按照[ISO 8601](https://help.aliyun.com/document_detail/25696.html)标准表示，使用UTC+0时间。格式为：`yyyy-MM-ddTHH:mm:ssZ`。

      - 如果秒（`ss`）取值不是`00`，则自动取为当前分钟（`mm`）开始时。

      - 最短释放时间为当前时间半小时之后。

      - 最长释放时间不能超过当前时间三年。 */
      AutoReleaseTime?: string;
      /** 按量付费实例的竞价策略。当参数`InstanceChargeType`取值为`PostPaid`时生效。取值范围：

      - NoSpot：正常按量付费实例。
      - SpotWithPriceLimit：设置上限价格的抢占式实例。
      - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。

      默认值：NoSpot。 */
      SpotStrategy?: string;
      /** 抢占式实例的保留时长，单位为小时。取值范围：0~6。

      - 保留时长2~6正在邀测中，如需开通请提交工单。
      - 取值为0，则为无保护期模式。

      默认值：1。 */
      SpotDuration?: number;
      /** 设置实例的每小时最高价格。支持最大3位小数，参数`SpotStrategy`取值为`SpotWithPriceLimit`时生效。 */
      SpotPriceLimit?: number;
      /** 抢占实例中断模式。目前仅支持Terminate（默认）直接释放实例。 */
      SpotInterruptionBehavior?: string;
      /** 是否开启安全加固。取值范围：

      - Active：启用安全加固，只对公共镜像生效。
      - Deactive：不启用安全加固，对所有镜像类型生效。 */
      SecurityEnhancementStrategy?: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
      /** 实例所属的HPC集群ID。 

      创建SCC实例时，该参数为必选参数。您可以参考[CreateHpcCluster](https://help.aliyun.com/document_detail/109138.html)创建HPC集群。
       */
      HpcClusterId?: string;
      /** 是否只预检此次请求。取值范围：

      -  true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数、请求格式、业务限制和ECS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
      -  false（默认）：发送正常请求，通过检查后直接创建实例。 */
      DryRun?: boolean;
      /** 是否在专有宿主机上创建ECS实例。由于专有宿主机不支持创建抢占式实例，指定`DedicatedHostId`参数后，会自动忽略请求中的`SpotStrategy`和`SpotPriceLimit`设置。

      您可以通过[DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html)查询专有宿主机ID列表。
       */
      DedicatedHostId?: string;
      /** 启动模板ID。更多信息，请调用[DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html)。

      使用启动模板创建实例时，您必须指定`LaunchTemplateId`或`LaunchTemplateName`确定启动模板。 */
      LaunchTemplateId?: string;
      /** 启动模板名称。

      使用启动模板创建实例时，您必须指定`LaunchTemplateId`或`LaunchTemplateName`确定启动模板。 */
      LaunchTemplateName?: string;
      /** 启动模板版本。如果您指定了`LaunchTemplateId`或`LaunchTemplateName`而不指定启动模板版本号，则采用默认版本。  */
      LaunchTemplateVersion?: number;
      /** 实例所在的企业资源组ID。 */
      ResourceGroupId?: string;
      /** 购买资源的时长，单位由`PeriodUnit`指定。当参数`InstanceChargeType`取值为`PrePaid`时才生效且为必选值。一旦指定了`DedicatedHostId`，则取值范围不能超过专有宿主机的订阅时长。取值范围：

      - PeriodUnit=Week时，Period取值：1、2、3、4。
      - PeriodUnit=Month时，Period取值：1、2、3、4、5、6、7、8、9、12、24、36、48、60。 */
      Period?: number;
      /** 包年包月计费方式的时长单位。取值范围： 

      - Week。
      - Month（默认）。
       */
      PeriodUnit?: string;
      /** 是否要自动续费。当参数`InstanceChargeType`取值`PrePaid`时才生效。取值范围：

      - true：自动续费。
      - false：不自动续费。

      默认值：false。 */
      AutoRenew?: boolean;
      /** 单次自动续费的续费时长。取值范围： 
               
      - PeriodUnit=Week时：1、2、3。
      - PeriodUnit=Month时：1、2、3、6、12、24、36、48、60。

      默认值：1。 */
      AutoRenewPeriod?: number;
      /** 实例的付费方式。取值范围：

      -  PrePaid：包年包月。
      -  PostPaid：按量付费。

      默认值：PostPaid。

      选择包年包月时，您必须确认自己的账号支持余额支付或者信用支付，否则将返回`InvalidPayMethod`的错误提示。 */
      InstanceChargeType?: string;
      /** 部署集ID。 */
      DeploymentSetId?: string;
      /** 如果您设置的部署集对应的策略为部署集组高可用策略（AvailabilityGroup），可以通过该参数指定实例在部署集中的分组号。取值范围：1~7。 */
      DeploymentSetGroupNo?: number;
      /** 实例私网IP地址。专有网络VPC类型ECS实例设置私网IP地址时，必须从虚拟交换机（`VSwitchId`）的空闲网段中选择。

      您需要注意：

      - 设置`PrivateIpAddress`后：
          - 如果`Amount`参数取值为1，则表示为创建的一台ECS实例分配私网IP地址。
          - 如果`Amount`参数取值大于1，则表示在批量创建ECS实例时，以指定的私网IP地址为起始地址，依次为多台ECS实例分配连续的私网IP地址，但需要注意，此时不支持再为实例绑定辅助网卡（即不支持再设置`NetworkInterface.N.*`这类参数）。

      -  如果`NetworkInterface.N.InstanceType`取值为`Primary`，则不能设置`PrivateIpAddress`，只能设置`NetworkInterface.N.PrimaryIpAddress`。 */
      PrivateIpAddress?: string;
      /** 设置突发性能实例的运行模式。取值范围：

      - Standard：标准模式，实例性能请参见[什么是突发性能实例](https://help.aliyun.com/document_detail/59977.html)下的性能约束模式章节。
      - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](https://help.aliyun.com/document_detail/59977.html)下的无性能约束模式章节。 */
      CreditSpecification?: string;
      /** 为主网卡指定随机生成的IPv6地址数量。取值范围：1~10。
               
      您需要注意：

      - 您不能同时设置`Ipv6Address.N`和`Ipv6AddressCount`。

      - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则不能设置`Ipv6Address.N`或`Ipv6AddressCount`，只能设置`NetworkInterface.N.Ipv6Address.N`或`NetworkInterface.N.Ipv6AddressCount`。 */
      Ipv6AddressCount?: number;
      /** 主网卡队列数。您需要注意：

      - 不能超过实例规格允许的单块网卡最大队列数。

      - 实例的所有网卡累加队列数不能超过实例规格允许的队列数总配额。实例规格的单块网卡最大队列数和总配额可以通过[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)接口查询`MaximumQueueNumberPerEni`、`TotalEniQueueQuantity`字段。

      - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则不能设置`NetworkInterfaceQueueNumber`，只能设置`NetworkInterface.N.QueueNumber`。 */
      NetworkInterfaceQueueNumber?: number;
      /** 实例释放保护属性，指定是否支持通过控制台或API（[DeleteInstance](https://help.aliyun.com/document_detail/25507.html)）释放实例。取值范围： 

      -  true：开启实例释放保护。
      -  false：关闭实例释放保护。

      默认值：false。

      > 该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。 */
      DeletionProtection?: boolean;
      /** >该参数正在邀测中，暂未开放使用。 */
      'HibernationOptions.Configured'?: boolean;
      /** 专有宿主机实例是否与专有宿主机关联。取值范围：

      - default：实例不与专有宿主机关联。已启用节省停机模式的实例，停机后再次启动时，若原专有宿主机可用资源不足，则实例被放置在自动部署资源池的其它专有宿主机上。

      - host：实例与专有宿主机关联。已启用节省停机模式的实例，停机后再次启动时，仍放置在原专有宿主机上。若原专有宿主机可用资源不足，则实例重启失败。

      默认值：default。 */
      Affinity?: string;
      /** 是否在专有宿主机上创建实例。取值范围：

      - default：创建非专有宿主机实例。

      - host：创建专有宿主机实例。若您不指定`DedicatedHostId`，则由阿里云自动选择专有宿主机放置实例。

      默认值：default。 */
      Tenancy?: string;
      /** 存储集ID。 */
      StorageSetId?: string;
      /** 存储集中的最大分区数量。取值范围：大于等于2。 */
      StorageSetPartitionNumber?: number;
      /** CPU核心数。该参数不支持自定义设置，只能采用默认值。

      默认值：请参见[自定义CPU选项](https://help.aliyun.com/document_detail/145895.html)。 */
      'CpuOptions.Core'?: number;
      /** CPU线程数。ECS实例的vCPU数=`CpuOptions.Core`取值*`CpuOptions.ThreadsPerCore`取值。

      - `CpuOptions.ThreadsPerCore=1`表示关闭CPU超线程。

      - 仅部分实例规格支持设置CPU线程数。

      取值范围和默认值：请参见[自定义CPU选项](https://help.aliyun.com/document_detail/145895.html)。 */
      'CpuOptions.ThreadsPerCore'?: number;
      /** 该参数已弃用。 */
      'CpuOptions.Numa'?: string;
      /** 可信系统模式。取值：vTPM。

      目前，可信系统模式支持的实例规格族：
      - g7、c7、r7。
      - 安全增强型（g7t、c7t、r7t）。

      当您创建以上实例规格族的ECS实例时，需要设置该参数。具体说明如下：

      - 如果您使用阿里云可信系统，请将该参数值设置为vTPM，在实例启动时即可通过阿里云可信系统完成可信校验。
      - 如果您不使用阿里云可信系统，可以不设置该参数值，但您需要注意，如果您所创建的ECS实例使用了Enclave机密计算模式（`SecurityOptions.ConfidentialComputingMode=Enclave`），则该ECS实例也会启用可信系统。
      - 通过OpenAPI创建可信系统的ECS实例时，只能调用`RunInstances`实现，`CreateInstance`目前不支持设置`SecurityOptions.TrustedSystemMode`参数。
      >如果您在创建实例的时候指定其为可信实例，那么当您更换系统盘时只能使用支持可信系统的镜像。

      关于可信系统的更多信息，请参见[安全增强型实例可信功能概述](https://help.aliyun.com/document_detail/201394.html)。 */
      'SecurityOptions.TrustedSystemMode'?: string;
      /** 机密计算模式。取值：Enclave。

      该参数取值为Enclave时，表示ECS实例使用Enclave构建机密计算环境。目前仅实例规格族c7、g7、r7，支持调用`RunInstances`时指定该参数使用Enclave机密计算。您需要注意：

      - 机密计算功能正在邀测中。

      - 通过OpenAPI创建Enclave机密计算的ECS实例时，只能调用`RunInstances`实现，`CreateInstance`目前不支持设置`SecurityOptions.ConfidentialComputingMode`参数。

      - Enclave机密计算依托可信系统（vTPM）实现，当您指定ECS实例使用Enclave构建机密计算环境时，该实例同时也会启用可信系统。因此，调用该接口时，如果设置了`SecurityOptions.ConfidentialComputingMode=Enclave`，则无论您是否设置了`SecurityOptions.TrustedSystemMode=vTPM`，最终创建的ECS实例均会启用Enclave机密计算模式以及可信系统。

      关于机密计算的更多信息，请参见[使用Enclave构建机密计算环境](https://help.aliyun.com/document_detail/203433.html)。
       */
      'SecurityOptions.ConfidentialComputingMode'?: string;
      /** 是否启用实例元数据的访问通道。取值范围：
      - enabled：启用。
      - disabled：禁用。

      默认值：enabled。
      >有关实例元数据的信息，请参见[实例元数据概述](https://help.aliyun.com/document_detail/49122.html)。 */
      HttpEndpoint?: string;
      /** 访问实例元数据时是否强制使用加固模式（IMDSv2）。取值范围：
      - optional：不强制使用。
      - required：强制使用。设置该取值后，普通模式无法访问实例元数据。

      默认值：optional。
      >有关访问实例元数据的模式，请参见[实例元数据访问模式](https://help.aliyun.com/document_detail/150575.html)。 */
      HttpTokens?: string;
      /** 实例元数据请求所需的HTTP PUT响应跃点限制。取值范围：1~64。
       
      默认值：1。
       */
      HttpPutResponseHopLimit?: number;
      /** 实例启动的私有池容量选项。弹性保障服务或容量预定服务在生效后会生成私有池容量，供实例启动时选择。取值范围：

      - Open：开放模式。将自动匹配开放类型的私有池容量。如果没有符合条件的私有池容量，则使用公共池资源启动。该模式下无需设置`PrivatePoolOptions.Id`参数。
      - Target：指定模式。使用指定的私有池容量启动实例，如果该私有池容量不可用，则实例会启动失败。该模式下必须指定私有池ID，即`PrivatePoolOptions.Id`参数为必填项。
      - None：不使用模式。实例启动将不使用私有池容量。

      默认值：None。

      以下任一场景，实例启动的私有池容量选项只能取值`None`或不传值。
      - 创建抢占式实例。
      - 创建经典网络类型的ECS实例。
      - 在专有宿主机DDH上创建ECS实例。 */
      'PrivatePoolOptions.MatchCriteria'?: string;
      /** 私有池ID。即弹性保障服务ID或容量预定服务ID。 */
      'PrivatePoolOptions.Id'?: string;
      /** >该参数正在邀测中，暂未开放使用。 */
      Isp?: string;
      /** 指定ECS实例所属的专有宿主机集群，系统会自动选择该专有宿主机集群中的一台专有宿主机部署ECS实例。

      > 仅在`Tenancy`设置为`host`时生效。

      在您同时指定了专有宿主机（`DedicatedHostId`）和专有宿主机集群（`SchedulerOptions.DedicatedHostClusterId`）时：
      - 如果专有宿主机属于专有宿主机集群，则优先将ECS实例部署在指定的专有宿主机上。
      - 如果专有宿主机不属于专有宿主机集群，则ECS实例创建失败。

      您可以通过[DescribeDedicatedHostClusters](https://help.aliyun.com/document_detail/184145.html)查询专有宿主机集群ID列表。

       */
      'SchedulerOptions.DedicatedHostClusterId'?: string;
      /** 将实例同时加入多个安全组。N的取值范围与实例能够加入安全组配额有关。更多信息，请参见[安全组限制](https://help.aliyun.com/document_detail/101348.html)。

      您需要注意：

      - 不支持同时设置`SecurityGroupId`和`SecurityGroupIds.N`。
      - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则不能设置`SecurityGroupId`或`SecurityGroupIds.N`，只能设置`NetworkInterface.N.SecurityGroupId`或`NetworkInterface.N.SecurityGroupIds.N`。 */
      SecurityGroupIds?: Array<string>;
      /** 创建多台实例时，为每台实例指定不同的主机名。 */
      HostNames?: Array<string>;
      /** 数据盘信息集合。 */
      DataDisk?: Array<{
        /** 数据盘采用的自动快照策略ID。 */
        AutoSnapshotPolicyId?: string;
        /** 是否开启Burst（性能突发）。取值范围：

        - true：是。
        - false：否。

        >当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)。 */
        BurstingEnabled?: boolean;
        /** 数据盘N的云盘种类。取值范围：

        - cloud_efficiency：高效云盘。
        - cloud_ssd：SSD云盘。
        - cloud_essd：ESSD云盘。
        - cloud：普通云盘。
        - cloud_auto：ESSD AutoPL云盘。
        - cloud_essd_entry：ESSD Entry云盘。
        >仅当`InstanceType`设置为`ecs.u1`或`ecs.e`规格族时，该参数支持`cloud_essd_entry`。对于I/O优化实例，默认值为cloud_efficiency。对于非I/O优化实例，默认值为cloud。 */
        Category?: string;
        /** 表示数据盘是否随实例释放。取值范围：
        - true：数据盘随实例释放。
        - false：数据盘不随实例释放。

        默认值为true。 */
        DeleteWithInstance?: boolean;
        /** 数据盘的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。 */
        Description?: string;
        /** 数据盘的挂载点。挂载的数据盘数量不同，挂载点的命名不同：

        - 1~25块数据盘：/dev/xvd`[b-z]`

        - 大于25块数据盘：/dev/xvd`[aa-zz]`，例如第26块数据盘会被命名为/dev/xvdaa，第27块数据盘为/dev/xvdab，以此类推。

        >该参数仅用于全镜像（整机镜像）场景。您可以通过将此参数设置为全镜像中数据盘对应的挂载点，并修改对应的`DataDisk.N.Size`和`DataDisk.N.Category`参数，达到修改全镜像中数据盘磁盘种类和大小的目的。 */
        Device?: string;
        /** 数据盘名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角句号（.）、半角冒号（:）、下划线（_）或者短划线（-）。 */
        DiskName?: string;
        /** >该参数暂未开放使用。 */
        EncryptAlgorithm?: string;
        /** 数据盘N是否加密。取值范围：
        - true：加密。
        - false：不加密。

        默认值：false。 */
        Encrypted?: string;
        /** 数据盘对应的KMS密钥ID。 */
        KMSKeyId?: string;
        /** 创建ESSD云盘作为数据盘使用时，设置云盘的性能等级。N的取值必须和`DataDisk.N.Category=cloud_essd`中的N保持一致。取值范围：

        - PL0：单盘最高随机读写IOPS 1万。
        - PL1（默认）：单盘最高随机读写IOPS 5万。
        - PL2：单盘最高随机读写IOPS 10万。
        - PL3：单盘最高随机读写IOPS 100万。

        有关如何选择ESSD性能等级，请参见[ESSD云盘](https://help.aliyun.com/document_detail/122389.html)。 */
        PerformanceLevel?: string;
        /** ESSD AutoPL云盘预配置的读写IOPS。可能值：0~min{50,000, 1000*容量-基准性能}。

        基准性能=min{1,800+50*容量, 50000}。

        >当DiskCategory取值为cloud_auto时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)。 */
        ProvisionedIops?: number;
        /** 第n个数据盘的容量大小，N的取值范围为1~16，内存单位为GiB。取值范围：

        - cloud_efficiency：20~32768。
        - cloud_ssd：20~32768。
        - cloud_essd：具体取值范围与`DataDisk.N.PerformanceLevel`的取值有关。 
            - PL0：40~32768。
            - PL1：20~32768。
            - PL2：461~32768。
            - PL3：1261~32768。
        - cloud：5~2000。
        - cloud_auto：40~32768。
        - cloud_essd_entry：10~32768。该参数的取值必须大于等于参数`SnapshotId`指定的快照的大小。
         */
        Size?: number;
        /** 创建数据盘N使用的快照。N的取值范围为1~16。

        指定参数`DataDisk.N.SnapshotId`后，参数`DataDisk.N.Size`会被忽略，实际创建的云盘大小为指定的快照的大小。不能使用早于2013年7月15日（含）创建的快照，请求会报错被拒绝。 */
        SnapshotId?: string;
        /** 专属块存储集群ID。如果您在创建ECS实例时，需要使用专属块存储集群中的云盘资源作为数据盘，请设置该参数。 */
        StorageClusterId?: string }>;
      /** 该参数暂未开放使用。 */
      Arn?: Array<{
        /** 该参数暂未开放使用。 */
        AssumeRoleFor?: number;
        /** 该参数暂未开放使用。 */
        RoleType?: string;
        /** 该参数暂未开放使用。 */
        Rolearn?: string }>;
      /** 弹性网卡信息。 */
      NetworkInterface?: Array<{
        /** 释放实例时是否保留网卡。取值范围：

        - true：不保留。

        - false：保留。

        默认值：true。

        >该参数只对辅助网卡生效。 */
        DeleteOnRelease?: boolean;
        /** 弹性网卡的描述。

        您需要注意：

        - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。
        - 长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
        - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则无需设置该参数。 */
        Description?: string;
        /** 弹性网卡类型。N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。

        参数取值范围：

        - Primary：主网卡。
        - Secondary：辅助网卡。

        默认值：Secondary。 */
        InstanceType?: string;
        /** 为主网卡指定一个或多个IPv6地址。支持设置最多10个IPv6地址，即第二个N的取值范围：1~10。

        取值示例：`Ipv6Address.1=2001:db8:1234:1a00::***`

        您需要注意：

        - `NetworkInterface.N.InstanceType`取值为`Primary`时，设置该参数才会生效。如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则不能设置该参数。

        - 设置该参数后，`Amount`取值只能为1，且不能再设置`Ipv6AddressCount`、`Ipv6Address.N`或`NetworkInterface.N.Ipv6AddressCount`。 */
        Ipv6Address?: Array<string>;
        /** 为主网卡指定随机生成的IPv6地址数量。取值范围：1~10

        您需要注意：

        - `NetworkInterface.N.InstanceType`取值为`Primary`时，设置该参数才会生效。如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则不能设置该参数。

        - 设置该参数后，您不能再设置`Ipv6AddressCount`、`Ipv6Address.N`或`NetworkInterface.N.Ipv6Address.N`。 */
        Ipv6AddressCount?: number;
        /** 网卡指定的物理网卡索引。

        您需要注意：
        - 只有特定实例规格支持指定物理网卡索引。
        - NetworkInterface.N.InstanceType取值为Primary时，对于支持物理网卡的实例规格，如果设置此参数，只能设置为0。
        - NetworkInterface.N.InstanceType取值为Secondary或者空值，对于支持物理网卡的实例规格，此参数可以依据实例规格设置。更多信息，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。 */
        NetworkCardIndex?: number;
        /** 随实例附加的弹性网卡ID。

        >该参数只对辅助网卡生效。 */
        NetworkInterfaceId?: string;
        /** 弹性网卡名称。

        您需要注意：

        - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。

        - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则无需设置该参数。 */
        NetworkInterfaceName?: string;
        /** 网卡的通讯模式。参数取值范围：

        - Standard：使用TCP通讯模式。
        - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。

        默认值：Standard。

        >RDMA模式的弹性网卡数量不能超过该实例规格族的限制。更多信息，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。 */
        NetworkInterfaceTrafficMode?: string;
        /** 添加一张弹性网卡并设置主IP地址。

        您需要注意：

        - N的取值范围为1~2：
            - 设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡。如果`Amount`参数取值大于1，且设置了主网卡并设置了该参数，则表示在批量创建ECS实例时，以指定的主IP地址为起始地址，依次为多台ECS实例分配连续的主IP地址，但需要注意，此时不支持再为实例绑定辅助网卡。
            - 设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡，但需要注意，如果`Amount`参数取值大于1且已为主网卡设置了该参数，则不支持再设置辅助网卡（即不支持再设置`NetworkInterface.2.InstanceType=Secondary`）。

        - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则该参数的作用等同于`PrivateIpAddress`，但需要注意不能同时设置`PrivateIpAddress`参数。

        - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，表示为辅助网卡设置主IP地址。默认从网卡所属的交换机网段中随机选择一个IP地址。

        > 创建ECS实例时，您最多能添加一张辅助网卡。实例创建成功后，您可以调用[CreateNetworkInterface](https://help.aliyun.com/document_detail/58504.html)和[AttachNetworkInterface](https://help.aliyun.com/document_detail/58515.html)添加更多的辅助网卡。 */
        PrimaryIpAddress?: string;
        /** 弹性网卡队列数。

        您需要注意：

        - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。

        - 不能超过实例规格允许的单块网卡最大队列数。

        - 实例的所有网卡累加队列数不能超过实例规格允许的队列数总配额。实例规格的单块网卡最大队列数和总配额可以通过[DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html)接口查询`MaximumQueueNumberPerEni`、`TotalEniQueueQuantity`字段。

        - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，且设置了该参数取值，则不能再设置`NetworkInterfaceQueueNumber`参数。 */
        QueueNumber?: number;
        /** RDMA网卡队列数。 */
        QueuePairNumber?: number;
        /** 弹性网卡所属的安全组ID。

        您需要注意：

        - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。

        - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则必须设置该参数。此时该参数的作用等同于`SecurityGroupId`，但需要注意不能再设置`SecurityGroupId`、`SecurityGroupIds.N`或`NetworkInterface.N.SecurityGroupIds.N`。

        - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则该参数为非必填参数。默认值为ECS实例所属的安全组。 */
        SecurityGroupId?: string;
        /** 弹性网卡所属的一个或多个安全组ID。

        - 第一个N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。
        - 第二个N表示可以指定一个或多个安全组ID。N的取值范围与实例能够加入安全组配额有关。更多信息，请参见[安全组限制](https://help.aliyun.com/document_detail/25412.html#SecurityGroupQuota1)。

        您需要注意：

        - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则必须设置该参数或`NetworkInterface.N.SecurityGroupId`。此时该参数的作用等同于`SecurityGroupIds.N`，但需要注意不能再设置`SecurityGroupId`、`SecurityGroupIds.N`或`NetworkInterface.N.SecurityGroupId`。

        - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则该参数为非必填参数。默认值为ECS实例所属的安全组。 */
        SecurityGroupIds?: Array<string>;
        /** 弹性网卡所属的虚拟交换机ID。

        您需要注意：

        - N的取值范围为1~2，设置1个弹性网卡时，支持设置1个主网卡或1个辅助网卡；设置2个弹性网卡时，仅支持同时设置1个主网卡和1个辅助网卡。

        - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则必须设置该参数。此时该参数的作用等同于`VSwitchId`，但需要注意不能同时设置`VSwitchId`参数。

        - 如果`NetworkInterface.N.InstanceType`取值为`Secondary`或空值，则该参数为非必填参数。默认值为ECS实例所属的虚拟交换机。 */
        VSwitchId?: string }>;
      /** 实例、云盘和主网卡的标签信息。 */
      Tag?: Array<{
        /** 实例、云盘和主网卡的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或 https://。 */
        Key?: string;
        /** 实例、云盘和主网卡的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或者https://。 */
        Value?: string }>;
      /** 为主网卡指定一个或多个IPv6地址。支持设置最多10个IPv6地址，即N的取值范围：1~10。

      取值示例：`Ipv6Address.1=2001:db8:1234:1a00::***`。

      您需要注意：

      - 设置了`Ipv6Address.N`时，`Amount`参数取值只能为1，且不能同时设置`Ipv6AddressCount`。

      - 如果`NetworkInterface.N.InstanceType`取值为`Primary`，则不能设置`Ipv6Addresses.N`或`Ipv6AddressCount`，而是需要设置`NetworkInterface.N.Ipv6Addresses.N`或`NetworkInterface.N.Ipv6AddressCount`。 */
      Ipv6Address?: Array<string>;
      /** 系统盘相关参数，目前专属块存储集群ID（`StorageClusterId`）需要通过该参数设置参数值。 */
      SystemDisk?: {
        /** 是否开启Burst（性能突发）。取值范围：

        - true：是。
        - false：否。

        >当`SystemDisk.Category`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)。 */
        BurstingEnabled?: boolean;
        /** >该参数暂未开放使用。 */
        EncryptAlgorithm?: string;
        /** 系统盘是否加密。取值范围：

        - true：加密。

        - false：不加密。

        默认值：false。

        >中国（香港）D可用区、新加坡A可用区暂不支持在创建实例时加密系统盘。 */
        Encrypted?: string;
        /** 系统盘对应的KMS密钥ID。 */
        KMSKeyId?: string;
        /** ESSD AutoPL云盘预配置的读写IOPS。可能值：0~min{50,000, 1000*容量-基准性能}。

        基准性能=min{1,800+50*容量, 50,000}。

        >当`SystemDisk.Category`取值为`cloud_auto`时才支持设置该参数。更多信息，请参见[ESSD AutoPL云盘](https://help.aliyun.com/document_detail/368372.html)。 */
        ProvisionedIops?: number;
        /** 专属块存储集群ID。如果您在创建ECS实例时，需要使用专属块存储集群中的云盘资源作为系统盘，请设置该参数。 */
        StorageClusterId?: string };
      /** 镜像相关属性信息。 */
      ImageOptions?: {
        /** 使用该镜像的实例是否支持使用ecs-user用户登录。可能值：

        - true：是

        - false：否 */
        LoginAsNonRoot?: boolean };
      /** 网络相关属性参数。 */
      NetworkOptions?: {
        /** 实例是否开启Jumbo frame特性。参数取值范围：

        - false：不开启Jumbo frame, 该实例下的所有网卡（包括主网卡及辅助网卡）MTU取值为1500。

        - true：开启Jumbo frame, 该实例下的所有网卡（包括主网卡及辅助网卡）的MTU取值为8500。

        默认值：true。

        >只有八代以上部分实例规格支持开启Jumbo frame特性。更多信息，请参见[ECS实例MTU](https://help.aliyun.com/document_detail/200512.html)。 */
        EnableJumboFrame?: boolean };
      /** 创建实例时，是否自动支付。取值范围：

      - true：自动支付。

          > 自动支付时，请确保支付方式余额充足，否则会生成异常订单，只能作废订单。如果您的支付方式余额不足，可以将参数`AutoPay`置为`false`，此时会生成未支付订单，您可以登录ECS管理控制台自行支付。

      - false：只生成订单不扣费。

          > 当`InstanceChargeType` 取值为`PostPaid`时，`AutoPay`不能设置为`false`。

      默认值：true。

       */
      AutoPay?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 实例ID（`InstanceIdSet`）列表。 */
      InstanceIdSets?: Array<string>;
      /** 订单ID。该参数只有创建包年包月ECS实例（请求参数`InstanceChargeType=PrePaid`）时有返回值。 */
      OrderId?: string;
      /** 请求ID。 */
      RequestId?: string;
      /** 订单成交价。 */
      TradePrice?: number };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/SendFile
   * ## 接口说明
   * 
   * - 目标ECS实例的状态必须为运行中（`Running`）。
   * - 目标ECS实例必须预先安装[云助手Agent](https://help.aliyun.com/document_detail/64921.html)。
   * - 云助手Agent版本需要高于以下对应的版本才能支持下发文件。如果结果返回`ClientNeedUpgrade`错误码，请将客户端更新至最新版本。
   *     - Linux：1.0.2.569
   *     - Windows：1.0.0.149
   * - 文件内容在进行Base64编码后，大小不能超过32 KB。
   * - 文件下发可能会因为目标ECS实例的状态异常、网络异常或云助手Agent异常而出现失败的情况。请调用[DescribeSendFileResults](https://help.aliyun.com/document_detail/184117.html)，或参考[执行失败常见错误及修复建议](https://help.aliyun.com/document_detail/87029.html)进行问题排查。
   * @summary: 调用SendFile向一台或多台ECS实例下发远程文件。
   */
  export namespace SendFile {
    export type Params = {
      /** 目标ECS实例所在的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 文件下发的资源组ID，当指定该参数时：

      - InstanceId对应的ECS实例必须属于该资源组。

      - 支持通过指定该参数筛选出对应的文件下发结果（通过调用[DescribeSendFileResults](https://help.aliyun.com/document_detail/184117.html)）。 */
      ResourceGroupId?: string;
      /** 文件名称。支持全字符集，长度不得超过255个字符。 */
      Name: string;
      /** 描述信息。支持全字符集，长度不得超过512个字符。 */
      Description?: string;
      /** 下发文件的超时时间。单位：秒。

      - 当因为进程原因、缺失模块、缺失云助手Agent等原因无法下发文件时，会出现超时现象。
      - 当设置的超时时间小于10秒时，为确保下发成功，系统会将超时时间自动设置为10秒。

      默认值为60。 */
      Timeout?: number;
      /** 文件下发目标ECS实例中的目录。如不存在则会自动创建。长度不得超过255个字符。 */
      TargetDir: string;
      /** 文件内容类型。
      - PlainText：普通文本。
      - Base64：Base64编码。

      默认值为PlainText。 */
      ContentType?: string;
      /** 文件内容。文件内容在Base64编码后，大小不能超过32 KB。

      - 当`ContentType`参数为`PlainText`时，该字段为明文格式的普通文本。
      - 当`ContentType`参数为`Base64`时，该字段为Base64编码的文本。 */
      Content: string;
      /** 文件的用户。只对Linux实例生效，默认为root。长度不得超过64个字符。

      >使用其他用户时，请确保实例中存在该用户。 */
      FileOwner?: string;
      /** 文件的用户组。只对Linux实例生效，默认为root。长度不得超过64个字符。

      >使用其他用户组时，请确保实例中存在该用户组。 */
      FileGroup?: string;
      /** 文件的权限。只对Linux实例生效，设置方式与chmod命令相同。

      默认值为0644，表示用户具有读写权限，用户组和其它用户具有只读权限。 */
      FileMode?: string;
      /** 如果同名文件在目标目录已存在，是否覆盖文件。
      - true：覆盖。
      - false：不覆盖。

      默认值为false。 */
      Overwrite?: boolean;
      /** 需要执行命令的ECS实例列表。最多能指定50台ECS实例ID。N的取值范围为1~50。 */
      InstanceId: Array<string>;
      /** 标签列表。 */
      Tag?: Array<{
        /** 文件下发的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。

        使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个。使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](https://help.aliyun.com/document_detail/110425.html)接口进行查询。

        最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。 */
        Key?: string;
        /** 文件下发的标签值。N的取值范围为1~20。该值可以为空字符串。

        最多支持128个字符，不能包含`http://`或`https://`。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 命令执行ID。 */
      InvokeId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/StartElasticityAssurance
   * undefined
   * @deprecated
   */
  export namespace StartElasticityAssurance {
    export type Params = {
      RegionId: string;
      'PrivatePoolOptions.Id': string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/StartImagePipelineExecution
   * - 镜像模板创建好之后，需要通过该接口执行构建镜像的任务，系统将根据镜像模板设置好的参数进行构建、分发、共享镜像。
   * - 同一个镜像模板，同一时间只能执行一个构建镜像任务。取消构建镜像任务（CancelImagePipelineExecution）可同时执行多次，并且取消构建镜像任务和构建镜像任务之间互不干扰。
   * @summary: 调用StartImagePipelineExecution通过一个镜像模板执行构建镜像的任务。
   */
  export namespace StartImagePipelineExecution {
    export type Params = {
      /** 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** >该参数已废弃。 */
      TemplateTag?: Array<{
        /** >该参数已废弃。 */
        Key?: string;
        /** >该参数已废弃。 */
        Value?: string }>;
      /** 镜像模板ID。 */
      ImagePipelineId: string;
      /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。 */
      ClientToken?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 构建任务ID。 */
      ExecutionId?: string;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/StartInstance
   * ## 接口说明
   * 
   * 调用该接口时，您需要注意：
   * 
   * -   ECS实例状态必须为**已停止**（`Stopped`）。
   * -   被[安全控制](https://help.aliyun.com/document_detail/25695.html)的实例`OperationLocks`中标记了`"LockReason" : "security"`的锁定状态时，不能启动实例。
   * @summary: 调用StartInstance启动一台ECS实例，接口调用成功后实例进入启动中状态。
   */
  export namespace StartInstance {
    export type Params = {
      /** 指定启动的实例ID。 */
      InstanceId: string;
      /** 适用于实例规格族d1、i1或者i2等包含本地盘的实例。当d1、i1或者i2的本地盘出现故障时，可通过此参数指定启动实例时，是否将实例恢复到最初的健康状态。取值范围：

      - true：将实例恢复到最初的健康状态，实例原有本地盘中的数据将会丢失。
      - false：不做任何处理，维持现状。

      默认值为false。 */
      InitLocalDisk?: boolean;
      /** 是否只预检查此次请求。取值范围：

      - true：仅检查此次请求，不会启动实例。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
      - false：发送正常请求，请求通过检查后，返回2XX的HTTP状态码并直接启动实例。

      默认值为false。 */
      DryRun?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/StartInstances
   * ## 接口说明
   * 
   * 调用该接口时，您需要注意：
   * 
   * - ECS实例状态必须为**已停止**（`Stopped`）。
   * - 查询ECS实例信息时，如果返回数据中包含`{"OperationLocks": {"LockReason" : "security"}}`，则禁止一切操作。
   * - 支持批量操作，可以通过参数`BatchOptimization`设置批量操作模式。
   * @summary: 调用StartInstances启动一台或多台处于已停止（Stopped）状态的ECS实例，接口调用成功后实例进入启动中（Starting）状态。
   */
  export namespace StartInstances {
    export type Params = {
      /** 是否只预检此次请求。取值范围：

      - true：发送检查请求，不会启动实例。检查项包括是否填写了必需参数、请求格式、实例状态。如果检查不通过，则返回对应错误。如果检查通过，则返回`DRYRUN.SUCCESS`。
      > 如果参数`BatchOptimization`被设置为`SuccessFirst`，对应的`DryRun=true`的预检结果只会返回`DRYRUN.SUCCESS`。

      - false：发送正常请求，通过检查后直接启动实例。

      默认值：false。 */
      DryRun?: boolean;
      /** 实例所在的地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 设置批量操作模式。取值范围：

      - AllTogether：该模式下，如果实例全部启动成功，则返回成功信息；如果任意一个实例校验不通过，则所有实例启动失败，并返回失败信息。

      - SuccessFirst：该模式下，分别启动每个实例，返回结果包含每个实例的操作结果信息。

      默认值：AllTogether。 */
      BatchOptimization?: string;
      /** 实例ID。N的取值范围：1~100。 */
      InstanceId: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 由InstanceResponse组成的数组格式，返回每个实例操作的前后状态及操作结果。 */
      InstanceResponses?: Array<{
        /** 实例操作结果错误码。返回值200为成功，更多请参见下文错误码列表。 */
        Code?: string;
        /** 实例当前状态。 */
        CurrentStatus?: string;
        /** 实例ID。 */
        InstanceId?: string;
        /** 实例操作返回错误信息。返回值success为成功，更多请参见下文错误码列表。 */
        Message?: string;
        /** 操作前实例的状态。 */
        PreviousStatus?: string }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/StartTerminalSession
   * ## 接口说明
   * 
   * 当您通过代码定制化远程连接客户端时，可以调用该接口获取远程连接ECS实例的WebSocketUrl。调用该接口时您需要注意：
   * 
   * - 指定的ECS实例必须处于运行中（Running）状态。
   * - 指定的ECS实例必须安装了云助手Agent。您可以调用[DescribeCloudAssistantStatus](https://help.aliyun.com/document_detail/87346.html)查询ECS实例是否已安装云助手Agent，并可以查询云助手Agent的版本号。
   *     - 如果您的ECS实例没有安装云助手Agent，请调用[InstallCloudAssistant](https://help.aliyun.com/document_detail/85916.html)安装。
   *     - 云助手Agent的版本需要高于以下版本才支持会话管理功能。如果您需要升级云助手Agent版本，请参见[升级或禁止升级云助手Agent](https://help.aliyun.com/document_detail/134383.html)。
   *         - Linux操作系统：2.2.3.256
   *         - Windows操作系统：2.1.3.256
   * - 成功调用该接口后，WebSocketUrl有效时长为10分钟。
   * - 同一地域下，已创建并可用的会话不能超过1000个，单台ECS实例处于连接状态的会话不能超过20个。
   * @summary: 调用StartTerminalSession基于会话管理功能创建一个会话。您可以通过指定ECS实例ID与该实例建立一个WebSocket会话，通过接口返回的WebSocketUrl可以远程连接到ECS实例。
   */
  export namespace StartTerminalSession {
    export type Params = {
      /** 实例所在地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 实例ID列表。 */
      InstanceId: Array<string>;
      /** 指定ECS实例的端口号，用于数据转发。一旦设置该参数，云助手Agent的数据转发会传到指定的端口号，用于端口转发。例如，SSH使用22端口。

      默认值为空，表示不设置数据转发的端口号。 */
      PortNumber?: number;
      /** 发起会话后，指定执行的命令内容。长度不能超过512个字符。

      > 指定了`CommandLine`后，不能再指定`PortNumber`和`TargetServer`。 */
      CommandLine?: string;
      /** 指定通过实例访问VPC内目标服务地址。

      >当该参数不为空时，`PortNumber`表示通过托管实例访问VPC内目标服务的端口号。 */
      TargetServer?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string;
      /** 附加在WebSocket的请求头部，用于系统校验本次请求。 */
      SecurityToken?: string;
      /** 会话ID。 */
      SessionId?: string;
      /** 远程连接ECS实例的WebSocket会话对应的URL。包含了会话ID（`SessionId`）以及用于系统校验的`SecurityToken`。 */
      WebSocketUrl?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/StopInstance
   * - 被安全锁定的ECS实例的`OperationLocks`参数包含`"LockReason": "security"`时，不能停止实例。更多信息，请参见[安全锁定时的API行为](https://help.aliyun.com/document_detail/25695.html)。
   * - 开启VPC内实例节省停机模式后，您可以通过设置`StoppedMode=KeepCharging`开启普通停机模式，ECS实例停止后会继续计费，并为您保留ECS实例规格库存和公网IP地址。
   * @summary: 调用StopInstance停止一台运行中（Running）的ECS实例。成功调用接口后，实例从停止中（Stopping）变成已停止（Stopped）状态。
   */
  export namespace StopInstance {
    export type Params = {
      /** 指定的实例ID。 */
      InstanceId: string;
      /** 该参数即将被弃用，为提高兼容性暂作保留。您在调用该接口时请忽略该参数。 */
      ConfirmStop?: boolean;
      /** 停止实例时的是否强制关机策略。取值范围：

      - true：强制关机。
      - false：正常关机流程。

      默认值为false。
       */
      ForceStop?: boolean;
      /** 停止按量付费ECS实例时，设置的停止模式。取值：

      - StopCharging：节省停机模式。有关`StopCharging`生效的条件，请参见[按量付费实例节省停机模式](https://help.aliyun.com/document_detail/63353.html)的启用条件章节。
      - KeepCharging：普通停机模式。实例停止后仍继续收费。

      默认值：如果您在ECS控制台上开启VPC内实例节省停机模式（更多信息，请参见[打开默认启用节省停机模式](https://help.aliyun.com/document_detail/63353.html#default)），并符合开启条件，则默认值为`StopCharging`。否则，默认值为`KeepCharging`。 */
      StoppedMode?: string;
      /** 是否只预检此次请求。取值范围：

      - true：发送检查请求，不会停止实例。检查项包括是否填写了必选参数、请求格式、业务限制和ECS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
      - false：发送正常请求，通过检查后直接停止实例。

      默认值为false。 */
      DryRun?: boolean;
      /** >该参数正在邀测中，暂不支持使用。
       */
      Hibernate?: boolean;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/StopInstances
   * ## 接口说明
   * - 查询ECS实例信息时，如果返回数据中包含`{"OperationLocks": {"LockReason" : "security"}}`，则禁止一切操作。
   * - 按量付费实例开启VPC内实例节省停机模式后，您可以通过设置`StoppedMode=KeepCharging`开启普通停机模式，ECS实例停止后会继续计费，并为您保留ECS实例规格库存和公网IP地址。
   * - 支持批量操作，可以通过参数`BatchOptimization`设置批量操作模式。
   * @summary: 调用StopInstances停止一台或多台运行中（Running）的ECS实例。调用接口成功后，ECS实例先进入停止中（Stopping）状态，最终进入已停止（Stopped）状态。
   */
  export namespace StopInstances {
    export type Params = {
      /** 是否只预检此次请求。取值范围：

      - true：发送检查请求，不会停止实例。检查项包括是否填写了必需参数、请求格式、实例状态。如果检查不通过，则返回对应错误。如果检查通过，则返回`DRYRUN.SUCCESS`。
      > 如果参数`BatchOptimization`被设置为`SuccessFirst`，对应的`DryRun=true`的预检结果只会返回`DRYRUN.SUCCESS`。

      - false：发送正常请求，通过检查后直接停止实例。

      默认值：false。 */
      DryRun?: boolean;
      /** 实例所在的地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 是否强制关机。取值范围：

      - true：强制关机。相当于典型的断电操作，所有未写入存储设备的缓存数据会丢失。
      - false：正常关机。

      默认值：false。 */
      ForceStop?: boolean;
      /** 停止按量付费ECS实例时，设置的停止模式。取值：

      - StopCharging：节省停机模式。有关`StopCharging`生效的条件，请参见[按量付费实例节省停机模式](https://help.aliyun.com/document_detail/63353.html)的启用条件章节。
      - KeepCharging：普通停机模式。实例停止后仍继续收费。

      默认值：如果您在ECS控制台上开启VPC内实例节省停机模式（更多信息，请参见[打开默认启用节省停机模式](https://help.aliyun.com/document_detail/63353.html#default)），并符合开启条件，则默认值为`StopCharging`。否则，默认值为`KeepCharging`。 */
      StoppedMode?: string;
      /** 设置批量操作模式。取值范围：

      - AllTogether：该模式下，如果实例全部停止成功，则返回成功信息；如果任意一个实例校验不通过，则所有实例停止失败，并返回失败信息。

      - SuccessFirst：该模式下，分别停止每个实例，返回结果包含每个实例的操作结果信息。

      默认值：AllTogether。 */
      BatchOptimization?: string;
      /** 实例ID列表。 */
      InstanceId: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 由InstanceResponse组成的数组格式，返回每个实例操作的前后状态及操作结果。 */
      InstanceResponses?: Array<{
        /** 实例操作结果错误码。返回值为200表示操作成功。更多信息，请参见下文错误码列表。 */
        Code?: string;
        /** 实例当前状态。 */
        CurrentStatus?: string;
        /** 实例ID。 */
        InstanceId?: string;
        /** 实例操作返回错误信息。返回值为Success表示操作成功。更多信息，请参见下文错误码列表。 */
        Message?: string;
        /** 实例操作前状态。 */
        PreviousStatus?: string }>;
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/StopInvocation
   * ## 接口说明
   * 
   * - 停止单次命令进程后，已经开始执行的实例会继续执行，未开始执行的实例将不再执行。
   * - 停止周期命令进程后，已经开始执行的命令将继续执行，但后续将不会再进行下一次的执行。
   * @summary: 调用StopInvocation停止一台或多台ECS实例中一条正在进行中（Running）的云助手命令进程。
   */
  export namespace StopInvocation {
    export type Params = {
      /** 地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 命令执行ID。您可以通过接口[DescribeInvocations](https://help.aliyun.com/document_detail/64840.html)查询所有的InvokeId。  */
      InvokeId: string;
      /** 要停止执行命令的实例列表，最多能指定50台实例ID。N的取值范围为1~50。 */
      InstanceId?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/TagResources
   * 绑定标签前，阿里云会校验资源已有标签数量。超过限制值后返回报错信息。更多详情，请参见[使用限制](https://help.aliyun.com/document_detail/25412.html)。
   * @summary: 调用TagResources为指定的ECS资源列表统一创建并绑定标签。
   */
  export namespace TagResources {
    export type Params = {
      /** 资源所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 资源类型定义。取值范围：

      - instance：ECS实例。
      - disk：磁盘。
      - snapshot：快照。
      - image：镜像。
      - securitygroup：安全组。
      - volume：存储卷。
      - eni：弹性网卡。
      - ddh：专有宿主机。
      - ddhcluster：专有宿主机集群。
      - keypair：SSH密钥对。
      - launchtemplate：启动模板。
      - reservedinstance：预留实例券。
      - snapshotpolicy：自动快照策略。
      - elasticityassurance：弹性保障。
      - capacityreservation：容量预定。
      - command：云助手命令。
      - invocation：云助手命令执行结果。 */
      ResourceType: string;
      /** 资源ID。N的取值范围为：1~50 */
      ResourceId: Array<string>;
      /** 标签列表。 */
      Tag: Array<{
        /** 资源的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。 */
        Key?: string;
        /** 资源的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。 */
        Value?: string }>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/TerminatePhysicalConnection
   * undefined
   * @deprecated
   */
  export namespace TerminatePhysicalConnection {
    export type Params = {
      RegionId: string;
      PhysicalConnectionId: string;
      ClientToken?: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/TerminateVirtualBorderRouter
   * undefined
   * @deprecated
   */
  export namespace TerminateVirtualBorderRouter {
    export type Params = {
      RegionId: string;
      VbrId: string;
      ClientToken?: string;
      UserCidr?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/UnassignIpv6Addresses
   * ## 接口说明
   * 调用该接口时，您需要注意：
   * 
   * - 弹性网卡必须处于**可用**（Available）或**已附加**（InUse）状态。
   * - 操作主网卡时，网卡附加的ECS实例必须处于**运行中**（Running）或**已停止**（Stopped）状态。
   * @summary: 调用UnassignIpv6Addresses回收一个或多个弹性网卡IPv6地址。
   */
  export namespace UnassignIpv6Addresses {
    export type Params = {
      /** 弹性网卡所在地域的ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。  */
      RegionId: string;
      /** 弹性网卡ID。 */
      NetworkInterfaceId: string;
      /** 一个或多个需要删除的IPv6地址。N的取值范围为1~10。 */
      Ipv6Address?: Array<string>;
      /** 一个或多个需要回收的IPv4前缀。N的取值范围为1~10。 */
      Ipv6Prefix?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/UnassignPrivateIpAddresses
   * ## 接口说明
   * 
   * - 只支持**可用**（Available）或者**已附加**（InUse）状态下的弹性网卡。
   * 
   * - 操作主网卡时，网卡附加的实例必须处于**运行中**（Running）或者**已停止**（Stopped）状态。
   * @summary: 调用UnassignPrivateIpAddresses从一块弹性网卡删除一个或多个辅助私有IP地址。
   */
  export namespace UnassignPrivateIpAddresses {
    export type Params = {
      /** 资源所属地域。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 弹性网卡ID。 */
      NetworkInterfaceId: string;
      /** 一个或多个需要删除的辅助私有IP地址。 */
      PrivateIpAddress?: Array<string>;
      /** 一个或多个需要删除的IPv4前缀。 */
      Ipv4Prefix?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/UnassociateEipAddress
   * undefined
   * @deprecated
   */
  export namespace UnassociateEipAddress {
    export type Params = {
      RegionId?: string;
      AllocationId: string;
      InstanceId: string;
      InstanceType?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/UnassociateHaVip
   * undefined
   * @deprecated
   */
  export namespace UnassociateHaVip {
    export type Params = {
      ClientToken?: string;
      RegionId: string;
      HaVipId: string;
      InstanceId: string;
      Force?: string;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      RequestId?: string };
  };

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/UntagResources
   * 调用UntagResources为指定的ECS资源列表统一解绑标签。解绑后，如果该标签没有绑定其他任何资源，会被自动删除。
   * @summary: 调用UntagResources为指定的ECS资源列表统一解绑标签。解绑后，如果该标签没有绑定其他任何资源，会被自动删除。
   */
  export namespace UntagResources {
    export type Params = {
      /** 资源所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。 */
      RegionId: string;
      /** 资源类型定义。取值范围：

      - instance：ECS实例。
      - disk：磁盘。
      - snapshot：快照。
      - image：镜像。
      - securitygroup：安全组。
      - volume：存储卷。
      - eni：弹性网卡。
      - ddh：专有宿主机。
      - ddhcluster：专有宿主机集群。
      - keypair：SSH密钥对。
      - launchtemplate：启动模板。
      - reservedinstance：预留实例券。
      - snapshotpolicy：自动快照策略。
      - elasticityassurance：弹性保障。
      - capacityreservation：容量预定。
      - command：云助手命令。
      - invocation：云助手命令执行结果。 */
      ResourceType: string;
      /** 是否解绑资源上全部的标签。当请求中未设置TagKey.N时，该参数才有效。取值范围：
      - true
      - false

      默认值：false */
      All?: boolean;
      /** 资源ID列表。可输入最多50个资源ID。 */
      ResourceId: Array<string>;
      /** 资源的标签键列表。可输入最多20个标签键。 */
      TagKey?: Array<string>;
    };
    export type bodyParams = undefined;
    export type APIReponse = {
      /** 请求ID。 */
      RequestId?: string };
  };
}
