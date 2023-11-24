import type { API, defs } from './type.d.ts';

type OptionalBodyRequest<Params, BodyParams, Response> = BodyParams extends null | undefined
  ? (params: Params, options?: RequestInit) => Promise<Response>
  : (params: Params, options?: { body: BodyParams } & Omit<RequestInit, "body" | "params">) => Promise<Response>;

type RequestMethods<Params = any, BodyParams = any, Response = any> = {
  request: OptionalBodyRequest<Params, BodyParams, Response>;
};

export type APIs = {
  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AcceptInquiredSystemEvent
   * 调用AcceptInquiredSystemEvent接受并授权执行系统事件操作。对问询中（Inquiring）状态的系统事件，接受系统事件的默认操作，授权系统执行默认操作。
   * @summary: 调用AcceptInquiredSystemEvent接受并授权执行系统事件操作。对问询中（Inquiring）状态的系统事件，接受系统事件的默认操作，授权系统执行默认操作。
   */
  AcceptInquiredSystemEvent: RequestMethods<API.AcceptInquiredSystemEvent.Params, API.AcceptInquiredSystemEvent.bodyParams, API.AcceptInquiredSystemEvent.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ActivateRouterInterface
   * undefined
   * @deprecated
   */
  ActivateRouterInterface: RequestMethods<API.ActivateRouterInterface.Params, API.ActivateRouterInterface.bodyParams, API.ActivateRouterInterface.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AddBandwidthPackageIps
   * undefined
   * @deprecated
   */
  AddBandwidthPackageIps: RequestMethods<API.AddBandwidthPackageIps.Params, API.AddBandwidthPackageIps.bodyParams, API.AddBandwidthPackageIps.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AddTags
   * 调用该接口时，您需要注意：
   * 
   * -   单项云服务器ECS资源最多可以添加20个标签。
   * -   标签键（`Tag.N.Key`）与标签值（`Tag.N.Value`）必须键值匹配。
   * -   如果标签键（`Tag.N.Key`）在指定的资源上已经存在，则使用新的标签值（`Tag.N.Value`）自动覆盖原标签值。
   * @summary: 添加或者覆盖一个或者多个标签到云服务器ECS的各项资源上。您可以添加标签到实例、磁盘、快照、镜像、安全组等，便于管理资源。
   */
  AddTags: RequestMethods<API.AddTags.Params, API.AddTags.bodyParams, API.AddTags.APIReponse>;

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
  AllocateDedicatedHosts: RequestMethods<API.AllocateDedicatedHosts.Params, API.AllocateDedicatedHosts.bodyParams, API.AllocateDedicatedHosts.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AllocateEipAddress
   * > 该接口已升级，不建议继续使用。新版接口的使用说明，请参见[AllocateEipAddress](https://help.aliyun.com/document_detail/120192.html)。
   * @title: 申请弹性公网IP（EIP）
   * @deprecated
   */
  AllocateEipAddress: RequestMethods<API.AllocateEipAddress.Params, API.AllocateEipAddress.bodyParams, API.AllocateEipAddress.APIReponse>;

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
  AllocatePublicIpAddress: RequestMethods<API.AllocatePublicIpAddress.Params, API.AllocatePublicIpAddress.bodyParams, API.AllocatePublicIpAddress.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ApplyAutoSnapshotPolicy
   * -  一块云盘只能应用一条自动快照策略。
   * -  一条自动快照策略能应用到多块云盘。
   * @summary: 调用ApplyAutoSnapshotPolicy为一块或者多块云盘应用自动快照策略。目标云盘已经应用了自动快照策略时，调用ApplyAutoSnapshotPolicy可以更换云盘当前应用的自动快照策略。
   */
  ApplyAutoSnapshotPolicy: RequestMethods<API.ApplyAutoSnapshotPolicy.Params, API.ApplyAutoSnapshotPolicy.bodyParams, API.ApplyAutoSnapshotPolicy.APIReponse>;

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
  AssignIpv6Addresses: RequestMethods<API.AssignIpv6Addresses.Params, API.AssignIpv6Addresses.bodyParams, API.AssignIpv6Addresses.APIReponse>;

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
  AssignPrivateIpAddresses: RequestMethods<API.AssignPrivateIpAddresses.Params, API.AssignPrivateIpAddresses.bodyParams, API.AssignPrivateIpAddresses.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AssociateEipAddress
   * undefined
   * @deprecated
   */
  AssociateEipAddress: RequestMethods<API.AssociateEipAddress.Params, API.AssociateEipAddress.bodyParams, API.AssociateEipAddress.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AssociateHaVip
   * undefined
   * @deprecated
   */
  AssociateHaVip: RequestMethods<API.AssociateHaVip.Params, API.AssociateHaVip.bodyParams, API.AssociateHaVip.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AttachClassicLinkVpc
   * 调用该接口时，您需要注意：
   * 
   * -  连接经典网络类型实例前，实例必须处于**运行中**（Running）或者**已停止**（Stopped）状态。 
   * -  目标VPC必须已开启ClassicLink功能。具体操作，请参见[开启ClassicLink功能](https://help.aliyun.com/document_detail/65413.html)。 
   * -  经典网络类型实例和VPC必须在同一个阿里云地域。
   * @summary: 调用AttachClassicLinkVpc将一台经典网络类型实例连接到专有网络VPC中，使经典网络类型实例可以和VPC中的云资源私网互通。
   */
  AttachClassicLinkVpc: RequestMethods<API.AttachClassicLinkVpc.Params, API.AttachClassicLinkVpc.bodyParams, API.AttachClassicLinkVpc.APIReponse>;

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
  AttachDisk: RequestMethods<API.AttachDisk.Params, API.AttachDisk.bodyParams, API.AttachDisk.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/AttachInstanceRamRole
   * 调用AttachInstanceRamRole为一台或多台ECS实例授予实例RAM角色。如果实例已有RAM角色，则报错提示您不能附加新的角色。
   * @summary: 调用AttachInstanceRamRole为一台或多台ECS实例授予实例RAM角色。如果实例已有RAM角色，则报错提示您不能附加新的角色。
   */
  AttachInstanceRamRole: RequestMethods<API.AttachInstanceRamRole.Params, API.AttachInstanceRamRole.bodyParams, API.AttachInstanceRamRole.APIReponse>;

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
  AttachKeyPair: RequestMethods<API.AttachKeyPair.Params, API.AttachKeyPair.bodyParams, API.AttachKeyPair.APIReponse>;

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
  AttachNetworkInterface: RequestMethods<API.AttachNetworkInterface.Params, API.AttachNetworkInterface.bodyParams, API.AttachNetworkInterface.APIReponse>;

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
  AuthorizeSecurityGroup: RequestMethods<API.AuthorizeSecurityGroup.Params, API.AuthorizeSecurityGroup.bodyParams, API.AuthorizeSecurityGroup.APIReponse>;

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
  AuthorizeSecurityGroupEgress: RequestMethods<API.AuthorizeSecurityGroupEgress.Params, API.AuthorizeSecurityGroupEgress.bodyParams, API.AuthorizeSecurityGroupEgress.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CancelAutoSnapshotPolicy
   * 调用CancelAutoSnapshotPolicy取消一块或者多块云盘的自动快照策略。
   * @summary: 调用CancelAutoSnapshotPolicy取消一块或者多块云盘的自动快照策略。
   */
  CancelAutoSnapshotPolicy: RequestMethods<API.CancelAutoSnapshotPolicy.Params, API.CancelAutoSnapshotPolicy.bodyParams, API.CancelAutoSnapshotPolicy.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CancelCopyImage
   * 调用该接口时，您需要注意：
   * 
   * - 取消复制镜像后，目标地域中新建的镜像会被自动删除，源镜像保持不变。
   * - 若复制镜像已完成，则操作失败并返回错误提示。
   * @summary: 调用CancelCopyImage取消正在进行中的复制镜像（CopyImage）任务。
   */
  CancelCopyImage: RequestMethods<API.CancelCopyImage.Params, API.CancelCopyImage.bodyParams, API.CancelCopyImage.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CancelImagePipelineExecution
   * 调用该接口前，请确认需要取消的镜像构建任务处于构建中（BUILDING）、分发中（DISTRIBUTING）或资源回收中（RELEASING）的状态。
   * @summary: 调用CancelImagePipelineExecution取消一个镜像构建任务。
   */
  CancelImagePipelineExecution: RequestMethods<API.CancelImagePipelineExecution.Params, API.CancelImagePipelineExecution.bodyParams, API.CancelImagePipelineExecution.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CancelPhysicalConnection
   * undefined
   * @deprecated
   */
  CancelPhysicalConnection: RequestMethods<API.CancelPhysicalConnection.Params, API.CancelPhysicalConnection.bodyParams, API.CancelPhysicalConnection.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CancelSimulatedSystemEvents
   * 调用CancelSimulatedSystemEvents取消一件或多件处于Scheduled（计划中）或Executing（执行中）状态的模拟系统事件。取消系统事件后，模拟事件变为Canceled（已取消）状态。
   * @summary: 调用CancelSimulatedSystemEvents取消一件或多件处于Scheduled（计划中）或Executing（执行中）状态的模拟系统事件。取消系统事件后，模拟事件变为Canceled（已取消）状态。
   */
  CancelSimulatedSystemEvents: RequestMethods<API.CancelSimulatedSystemEvents.Params, API.CancelSimulatedSystemEvents.bodyParams, API.CancelSimulatedSystemEvents.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CancelTask
   * 调用CancelTask取消一件正在运行的任务。目前，您能取消正在运行的导入镜像任务（ImportImage）和导出镜像任务（ExportImage）。
   * @summary: 调用CancelTask取消一件正在运行的任务。目前，您能取消正在运行的导入镜像任务（ImportImage）和导出镜像任务（ExportImage）。
   */
  CancelTask: RequestMethods<API.CancelTask.Params, API.CancelTask.bodyParams, API.CancelTask.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ConnectRouterInterface
   * undefined
   * @deprecated
   */
  ConnectRouterInterface: RequestMethods<API.ConnectRouterInterface.Params, API.ConnectRouterInterface.bodyParams, API.ConnectRouterInterface.APIReponse>;

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
  ConvertNatPublicIpToEip: RequestMethods<API.ConvertNatPublicIpToEip.Params, API.ConvertNatPublicIpToEip.bodyParams, API.ConvertNatPublicIpToEip.APIReponse>;

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
  CopyImage: RequestMethods<API.CopyImage.Params, API.CopyImage.bodyParams, API.CopyImage.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CopySnapshot
   * ## 接口说明
   * 调用该接口时，您需要注意：
   * 
   * - 复制后的新快照不能回滚源快照对应的云盘。
   * - 不支持复制本地快照。
   * @summary: 调用CopySnapshot将一份普通快照或加密快照从一个地域复制到另一个地域。
   */
  CopySnapshot: RequestMethods<API.CopySnapshot.Params, API.CopySnapshot.bodyParams, API.CopySnapshot.APIReponse>;

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
  CreateActivation: RequestMethods<API.CreateActivation.Params, API.CreateActivation.bodyParams, API.CreateActivation.APIReponse>;

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
  CreateAutoProvisioningGroup: RequestMethods<API.CreateAutoProvisioningGroup.Params, API.CreateAutoProvisioningGroup.bodyParams, API.CreateAutoProvisioningGroup.APIReponse>;

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
  CreateAutoSnapshotPolicy: RequestMethods<API.CreateAutoSnapshotPolicy.Params, API.CreateAutoSnapshotPolicy.bodyParams, API.CreateAutoSnapshotPolicy.APIReponse>;

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
  CreateCapacityReservation: RequestMethods<API.CreateCapacityReservation.Params, API.CreateCapacityReservation.bodyParams, API.CreateCapacityReservation.APIReponse>;

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
  CreateCommand: RequestMethods<API.CreateCommand.Params, API.CreateCommand.bodyParams, API.CreateCommand.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateDedicatedHostCluster
   * 调用CreateDedicatedHostCluster创建一个专有宿主机集群。
   * @summary: 调用CreateDedicatedHostCluster创建一个专有宿主机集群。
   */
  CreateDedicatedHostCluster: RequestMethods<API.CreateDedicatedHostCluster.Params, API.CreateDedicatedHostCluster.bodyParams, API.CreateDedicatedHostCluster.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateDemand
   * 您可通过该接口提交实例规格需求信息，阿里云根据您的需求表单供应相关资源。
   * 
   * 仅支持报备I/O优化实例规格，以及专有网络VPC类型的ECS实例。
   * 
   * > 该接口正在内测使用，尚未正式上线，暂时不建议使用，请您耐心等待。
   * @summary: 调用CreateDemand创建ECS资源需求报备信息。
   */
  CreateDemand: RequestMethods<API.CreateDemand.Params, API.CreateDemand.bodyParams, API.CreateDemand.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateDeploymentSet
   * 调用CreateDeploymentSet在指定的地域内创建一个部署集。
   * @summary: 调用CreateDeploymentSet在指定的地域内创建一个部署集。
   */
  CreateDeploymentSet: RequestMethods<API.CreateDeploymentSet.Params, API.CreateDeploymentSet.bodyParams, API.CreateDeploymentSet.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateDiagnosticMetricSet
   * 调用CreateDiagnosticMetricSet创建资源诊断指标集合。您可以根据需要，灵活组合诊断指标。
   * @summary: 调用CreateDiagnosticMetricSet创建资源诊断指标集合。您可以根据需要，灵活组合诊断指标。
   */
  CreateDiagnosticMetricSet: RequestMethods<API.CreateDiagnosticMetricSet.Params, API.CreateDiagnosticMetricSet.bodyParams, API.CreateDiagnosticMetricSet.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateDiagnosticReport
   * 调用CreateDiagnosticReport创建资源诊断报告。根据您传入诊断指标集合ID，生成多个诊断指标的诊断报告。您可以根据返回的诊断报告ID，调用DescribeDiagnosticReportAttributes查询资源诊断详情。
   * @summary: 调用CreateDiagnosticReport创建资源诊断报告。根据您传入诊断指标集合ID，生成多个诊断指标的诊断报告。您可以根据返回的诊断报告ID，调用DescribeDiagnosticReportAttributes查询资源诊断详情。
   */
  CreateDiagnosticReport: RequestMethods<API.CreateDiagnosticReport.Params, API.CreateDiagnosticReport.bodyParams, API.CreateDiagnosticReport.APIReponse>;

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
  CreateDisk: RequestMethods<API.CreateDisk.Params, API.CreateDisk.bodyParams, API.CreateDisk.APIReponse>;

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
  CreateElasticityAssurance: RequestMethods<API.CreateElasticityAssurance.Params, API.CreateElasticityAssurance.bodyParams, API.CreateElasticityAssurance.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateForwardEntry
   * undefined
   * @deprecated
   */
  CreateForwardEntry: RequestMethods<API.CreateForwardEntry.Params, API.CreateForwardEntry.bodyParams, API.CreateForwardEntry.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateHaVip
   * undefined
   * @deprecated
   */
  CreateHaVip: RequestMethods<API.CreateHaVip.Params, API.CreateHaVip.bodyParams, API.CreateHaVip.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateHpcCluster
   * 调用CreateHpcCluster创建一个HPC集群。
   * @summary: 调用CreateHpcCluster创建一个HPC集群。
   */
  CreateHpcCluster: RequestMethods<API.CreateHpcCluster.Params, API.CreateHpcCluster.bodyParams, API.CreateHpcCluster.APIReponse>;

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
  CreateImage: RequestMethods<API.CreateImage.Params, API.CreateImage.bodyParams, API.CreateImage.APIReponse>;

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
  CreateImageComponent: RequestMethods<API.CreateImageComponent.Params, API.CreateImageComponent.bodyParams, API.CreateImageComponent.APIReponse>;

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
  CreateImagePipeline: RequestMethods<API.CreateImagePipeline.Params, API.CreateImagePipeline.bodyParams, API.CreateImagePipeline.APIReponse>;

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
  CreateInstance: RequestMethods<API.CreateInstance.Params, API.CreateInstance.bodyParams, API.CreateInstance.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateKeyPair
   * 除了调用CreateKeyPair创建密钥对之外，您还可以使用第三方工具创建密钥对，然后上传（[ImportKeyPair](https://help.aliyun.com/document_detail/51774.html)）到某一阿里云地域，其使用方法和系统为您创建的密钥对是一致的。
   * 
   * 您在每个地域的密钥对数最高为500对。更多信息，请参见[使用限制](https://help.aliyun.com/document_detail/25412.html)。
   * @summary: 调用CreateKeyPair创建一对SSH密钥对。系统会为您保管密钥的公钥部分，并返回未加密的PEM编码的PKCS#8格式私钥。您需要自行妥善保管私钥部分。
   */
  CreateKeyPair: RequestMethods<API.CreateKeyPair.Params, API.CreateKeyPair.bodyParams, API.CreateKeyPair.APIReponse>;

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
  CreateLaunchTemplate: RequestMethods<API.CreateLaunchTemplate.Params, API.CreateLaunchTemplate.bodyParams, API.CreateLaunchTemplate.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateLaunchTemplateVersion
   * ## 接口说明
   * 当您想修改某个版本的参数时，能通过新建模板版本的方式修改。每个实例启动模板最多创建30个版本。
   * @summary: 调用CreateLaunchTemplateVersion根据指定的ECS实例启动模板创建一个版本。
   */
  CreateLaunchTemplateVersion: RequestMethods<API.CreateLaunchTemplateVersion.Params, API.CreateLaunchTemplateVersion.bodyParams, API.CreateLaunchTemplateVersion.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateNatGateway
   * undefined
   * @deprecated
   */
  CreateNatGateway: RequestMethods<API.CreateNatGateway.Params, API.CreateNatGateway.bodyParams, API.CreateNatGateway.APIReponse>;

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
  CreateNetworkInterface: RequestMethods<API.CreateNetworkInterface.Params, API.CreateNetworkInterface.bodyParams, API.CreateNetworkInterface.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateNetworkInterfacePermission
   * 调用CreateNetworkInterfacePermission为阿里云合作伙伴（认证ISV）或者个人用户授权弹性网卡权限。
   * @summary: 调用CreateNetworkInterfacePermission为阿里云合作伙伴（认证ISV）或者个人用户授权弹性网卡权限。
   */
  CreateNetworkInterfacePermission: RequestMethods<API.CreateNetworkInterfacePermission.Params, API.CreateNetworkInterfacePermission.bodyParams, API.CreateNetworkInterfacePermission.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreatePhysicalConnection
   * undefined
   * @deprecated
   */
  CreatePhysicalConnection: RequestMethods<API.CreatePhysicalConnection.Params, API.CreatePhysicalConnection.bodyParams, API.CreatePhysicalConnection.APIReponse>;

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
  CreatePrefixList: RequestMethods<API.CreatePrefixList.Params, API.CreatePrefixList.bodyParams, API.CreatePrefixList.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateRouteEntry
   * undefined
   * @deprecated
   */
  CreateRouteEntry: RequestMethods<API.CreateRouteEntry.Params, API.CreateRouteEntry.bodyParams, API.CreateRouteEntry.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateRouterInterface
   * undefined
   * @deprecated
   */
  CreateRouterInterface: RequestMethods<API.CreateRouterInterface.Params, API.CreateRouterInterface.bodyParams, API.CreateRouterInterface.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateSecurityGroup
   * 调用该接口时，您需要注意：
   * 
   * -  在一个阿里云地域下，您最多可以创建100个安全组。 
   * -  创建专有网络VPC类型的安全组时，您必须指定参数VpcId。
   * @summary: 调用CreateSecurityGroup新建一个安全组。新建的安全组，默认只允许安全组内的实例互相访问，安全组外的一切通信请求会被拒绝。若您想允许其他安全组实例的通信请求，或者来自互联网的访问请求，需要授权安全组权限（AuthorizeSecurityGroup）。
   */
  CreateSecurityGroup: RequestMethods<API.CreateSecurityGroup.Params, API.CreateSecurityGroup.bodyParams, API.CreateSecurityGroup.APIReponse>;

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
  CreateSimulatedSystemEvents: RequestMethods<API.CreateSimulatedSystemEvents.Params, API.CreateSimulatedSystemEvents.bodyParams, API.CreateSimulatedSystemEvents.APIReponse>;

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
  CreateSnapshot: RequestMethods<API.CreateSnapshot.Params, API.CreateSnapshot.bodyParams, API.CreateSnapshot.APIReponse>;

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
  CreateSnapshotGroup: RequestMethods<API.CreateSnapshotGroup.Params, API.CreateSnapshotGroup.bodyParams, API.CreateSnapshotGroup.APIReponse>;

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
  CreateStorageSet: RequestMethods<API.CreateStorageSet.Params, API.CreateStorageSet.bodyParams, API.CreateStorageSet.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateVSwitch
   * undefined
   * @deprecated
   */
  CreateVSwitch: RequestMethods<API.CreateVSwitch.Params, API.CreateVSwitch.bodyParams, API.CreateVSwitch.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateVirtualBorderRouter
   * undefined
   * @deprecated
   */
  CreateVirtualBorderRouter: RequestMethods<API.CreateVirtualBorderRouter.Params, API.CreateVirtualBorderRouter.bodyParams, API.CreateVirtualBorderRouter.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/CreateVpc
   * undefined
   * @deprecated
   */
  CreateVpc: RequestMethods<API.CreateVpc.Params, API.CreateVpc.bodyParams, API.CreateVpc.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeactivateRouterInterface
   * undefined
   * @deprecated
   */
  DeactivateRouterInterface: RequestMethods<API.DeactivateRouterInterface.Params, API.DeactivateRouterInterface.bodyParams, API.DeactivateRouterInterface.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteActivation
   * ## 接口说明
   * 
   * 激活码必须未被使用，即激活码对应注册的托管实例数量为0。
   * @summary: 调用DeleteActivation删除一个未被使用的激活码。
   */
  DeleteActivation: RequestMethods<API.DeleteActivation.Params, API.DeleteActivation.bodyParams, API.DeleteActivation.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteAutoProvisioningGroup
   * 调用DeleteAutoProvisioningGroup删除一个弹性供应组。
   * @summary: 调用DeleteAutoProvisioningGroup删除一个弹性供应组。
   */
  DeleteAutoProvisioningGroup: RequestMethods<API.DeleteAutoProvisioningGroup.Params, API.DeleteAutoProvisioningGroup.bodyParams, API.DeleteAutoProvisioningGroup.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteAutoSnapshotPolicy
   * 删除一条自动快照策略。如果目标自动快照策略已经被应用到磁盘上，删除自动快照策略后，这些磁盘不再执行该策略。
   * @summary: 删除一条自动快照策略。如果目标自动快照策略已经被应用到磁盘上，删除自动快照策略后，这些磁盘不再执行该策略。
   */
  DeleteAutoSnapshotPolicy: RequestMethods<API.DeleteAutoSnapshotPolicy.Params, API.DeleteAutoSnapshotPolicy.bodyParams, API.DeleteAutoSnapshotPolicy.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteBandwidthPackage
   * undefined
   * @deprecated
   */
  DeleteBandwidthPackage: RequestMethods<API.DeleteBandwidthPackage.Params, API.DeleteBandwidthPackage.bodyParams, API.DeleteBandwidthPackage.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteCommand
   * ## 接口说明
   * 
   * 无法删除正在执行中的命令。
   * @summary: 调用DeleteCommand删除一条云助手命令。
   */
  DeleteCommand: RequestMethods<API.DeleteCommand.Params, API.DeleteCommand.bodyParams, API.DeleteCommand.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteDedicatedHostCluster
   * 调用DeleteDedicatedHostCluster删除一个专有宿主机集群。
   * @summary: 调用DeleteDedicatedHostCluster删除一个专有宿主机集群。
   */
  DeleteDedicatedHostCluster: RequestMethods<API.DeleteDedicatedHostCluster.Params, API.DeleteDedicatedHostCluster.bodyParams, API.DeleteDedicatedHostCluster.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteDemand
   * > 该接口正在内测中，尚未正式上线，暂时不建议使用，请您耐心等待。
   * @summary: 调用DeleteDemand删除ECS资源需求报备信息。您可通过该接口自助删除提交的资源需求信息。
   */
  DeleteDemand: RequestMethods<API.DeleteDemand.Params, API.DeleteDemand.bodyParams, API.DeleteDemand.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteDeploymentSet
   * 调用DeleteDeploymentSet删除一个部署集。
   * @summary: 调用DeleteDeploymentSet删除一个部署集。
   */
  DeleteDeploymentSet: RequestMethods<API.DeleteDeploymentSet.Params, API.DeleteDeploymentSet.bodyParams, API.DeleteDeploymentSet.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteDiagnosticMetricSets
   * 调用DeleteDiagnosticMetricSets删除资源诊断指标集合。
   * @summary: 调用DeleteDiagnosticMetricSets删除资源诊断指标集合。
   */
  DeleteDiagnosticMetricSets: RequestMethods<API.DeleteDiagnosticMetricSets.Params, API.DeleteDiagnosticMetricSets.bodyParams, API.DeleteDiagnosticMetricSets.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteDiagnosticReports
   * 不支持删除诊断中的报告。
   * @summary: 调用DeleteDiagnosticReports删除资源诊断报告。
   */
  DeleteDiagnosticReports: RequestMethods<API.DeleteDiagnosticReports.Params, API.DeleteDiagnosticReports.bodyParams, API.DeleteDiagnosticReports.APIReponse>;

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
  DeleteDisk: RequestMethods<API.DeleteDisk.Params, API.DeleteDisk.bodyParams, API.DeleteDisk.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteForwardEntry
   * undefined
   * @deprecated
   */
  DeleteForwardEntry: RequestMethods<API.DeleteForwardEntry.Params, API.DeleteForwardEntry.bodyParams, API.DeleteForwardEntry.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteHaVip
   * undefined
   * @deprecated
   */
  DeleteHaVip: RequestMethods<API.DeleteHaVip.Params, API.DeleteHaVip.bodyParams, API.DeleteHaVip.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteHpcCluster
   * 调用DeleteHpcCluster删除一个HPC集群。
   * @summary: 调用DeleteHpcCluster删除一个HPC集群。
   */
  DeleteHpcCluster: RequestMethods<API.DeleteHpcCluster.Params, API.DeleteHpcCluster.bodyParams, API.DeleteHpcCluster.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteImage
   * 调用DeleteImage删除一份自定义镜像。
   * @summary: 调用DeleteImage删除一份自定义镜像。
   */
  DeleteImage: RequestMethods<API.DeleteImage.Params, API.DeleteImage.bodyParams, API.DeleteImage.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteImageComponent
   * 目前仅支持删除您已创建的自定义镜像组件。
   * @summary: 调用DeleteImageComponent删除一个镜像组件。
   */
  DeleteImageComponent: RequestMethods<API.DeleteImageComponent.Params, API.DeleteImageComponent.bodyParams, API.DeleteImageComponent.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteImagePipeline
   * 如果存在构建中（BUILDING）、分发中（DISTRIBUTING）、资源回收中（RELEASING）或取消中（CANCELLING）的构建任务，则不允许直接删除模板，需要等待构建任务成功（SUCCESS）、失败（FAILED）或已取消（CANCELLED）。构建任务的详细信息可以通过DescribeImagePipelineExecutions查询。
   * @summary: 调用DeleteImagePipeline删除一个镜像模板。
   */
  DeleteImagePipeline: RequestMethods<API.DeleteImagePipeline.Params, API.DeleteImagePipeline.bodyParams, API.DeleteImagePipeline.APIReponse>;

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
  DeleteInstance: RequestMethods<API.DeleteInstance.Params, API.DeleteInstance.bodyParams, API.DeleteInstance.APIReponse>;

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
  DeleteInstances: RequestMethods<API.DeleteInstances.Params, API.DeleteInstances.bodyParams, API.DeleteInstances.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteKeyPairs
   * 删除SSH密钥对后，您需要注意：
   * 
   * - 无法通过[DescribeKeyPairs](https://help.aliyun.com/document_detail/51773.html)查询该SSH密钥对。  
   * - 若已有ECS实例绑定了该SSH密钥对，则该SSH密钥对不支持被删除。
   * @summary: 调用DeleteKeyPairs删除一对或者多对SSH密钥对。
   */
  DeleteKeyPairs: RequestMethods<API.DeleteKeyPairs.Params, API.DeleteKeyPairs.bodyParams, API.DeleteKeyPairs.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteLaunchTemplate
   * 调用DeleteLaunchTemplate删除一个实例启动模板。
   * @summary: 调用DeleteLaunchTemplate删除一个实例启动模板。
   */
  DeleteLaunchTemplate: RequestMethods<API.DeleteLaunchTemplate.Params, API.DeleteLaunchTemplate.bodyParams, API.DeleteLaunchTemplate.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteLaunchTemplateVersion
   * 调用DeleteLaunchTemplateVersion删除指定实例启动模板的一个版本。不支持删除默认版本，您必须通过DeleteLaunchTemplate删除整个实例启动模板才能删除默认版本。
   * @summary: 调用DeleteLaunchTemplateVersion删除指定实例启动模板的一个版本。不支持删除默认版本，您必须通过DeleteLaunchTemplate删除整个实例启动模板才能删除默认版本。
   */
  DeleteLaunchTemplateVersion: RequestMethods<API.DeleteLaunchTemplateVersion.Params, API.DeleteLaunchTemplateVersion.bodyParams, API.DeleteLaunchTemplateVersion.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteNatGateway
   * undefined
   * @deprecated
   */
  DeleteNatGateway: RequestMethods<API.DeleteNatGateway.Params, API.DeleteNatGateway.bodyParams, API.DeleteNatGateway.APIReponse>;

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
  DeleteNetworkInterface: RequestMethods<API.DeleteNetworkInterface.Params, API.DeleteNetworkInterface.bodyParams, API.DeleteNetworkInterface.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteNetworkInterfacePermission
   * undefined
   * @deprecated
   */
  DeleteNetworkInterfacePermission: RequestMethods<API.DeleteNetworkInterfacePermission.Params, API.DeleteNetworkInterfacePermission.bodyParams, API.DeleteNetworkInterfacePermission.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeletePhysicalConnection
   * undefined
   * @deprecated
   */
  DeletePhysicalConnection: RequestMethods<API.DeletePhysicalConnection.Params, API.DeletePhysicalConnection.bodyParams, API.DeletePhysicalConnection.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeletePrefixList
   * 前缀列表与其他资源存在关联时，不能直接删除，需要先在其他资源中解除对该前缀列表的关联，再执行删除操作。您可以调用[DescribePrefixListAssociations](https://help.aliyun.com/document_detail/204724.html)查询指定前缀列表的已关联资源。
   * @summary: 调用DeletePrefixList删除指定的前缀列表，同时删除前缀列表中的所有条目。
   */
  DeletePrefixList: RequestMethods<API.DeletePrefixList.Params, API.DeletePrefixList.bodyParams, API.DeletePrefixList.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteRouteEntry
   * undefined
   * @deprecated
   */
  DeleteRouteEntry: RequestMethods<API.DeleteRouteEntry.Params, API.DeleteRouteEntry.bodyParams, API.DeleteRouteEntry.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteRouterInterface
   * undefined
   * @deprecated
   */
  DeleteRouterInterface: RequestMethods<API.DeleteRouterInterface.Params, API.DeleteRouterInterface.bodyParams, API.DeleteRouterInterface.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteSecurityGroup
   * ## 接口说明
   * 
   * 调用该接口时，您需要注意：
   * -  删除安全组之前，请确保安全组内不存在实例，并且没有其他安全组与该安全组有授权行为（[DescribeSecurityGroupReferences](https://help.aliyun.com/document_detail/57320.html)），否则DeleteSecurityGroup请求失败。   
   * -  在您使用该接口删除安全组时返回错误码InvalidOperation.DeletionProtection，或使用控制台删除安全组看到类似删除保护的提示时，说明该安全组开启了删除保护功能。在您创建ACK集群时，关联的安全组会开启删除保护功能，来防止误删除。删除保护功能无法手动关闭，只有在删除了关联的ACK集群后，才能够自动关闭。更多信息，请参见[关闭安全组删除保护](https://help.aliyun.com/document_detail/2579528.html)。
   * @summary: 调用DeleteSecurityGroup删除一个安全组。
   */
  DeleteSecurityGroup: RequestMethods<API.DeleteSecurityGroup.Params, API.DeleteSecurityGroup.bodyParams, API.DeleteSecurityGroup.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteSnapshot
   * 调用该接口时，您需要注意：
   * 
   * - 如果指定的快照ID不存在，请求将被忽略。 
   * - 如果快照已经被用于创建自定义镜像，将不能执行删除操作。您需要先删除已创建的自定义镜像（[DeleteImage](https://help.aliyun.com/document_detail/25537.html)），才能继续删除快照。
   * - 如果快照已经被用于创建云盘，且未设置`Force`参数或`Force=false`时，不能直接删除快照。如果您确定要删除快照，请设置`Force=true`进行强制删除，快照被强制删除后对应的云盘将不能执行重新初始化。
   * @summary: 调用DeleteSnapshot删除指定的快照。如果需要取消正在创建的快照，也可以调用该接口删除快照，即取消创建快照任务。
   */
  DeleteSnapshot: RequestMethods<API.DeleteSnapshot.Params, API.DeleteSnapshot.bodyParams, API.DeleteSnapshot.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteSnapshotGroup
   * 如果实例快照中的云盘快照已经用于创建自定义镜像，则实例快照删除时相关的云盘快照不会被删除。您如果需要删除相关的云盘快照，请先删除已创建的自定义镜像（[DeleteImage](https://help.aliyun.com/document_detail/25537.html)），再删除相关的云盘快照（[DeleteSnapshot](https://help.aliyun.com/document_detail/25525.html)）。
   * @summary: 调用DeleteSnapshotGroup删除指定的实例快照。
   */
  DeleteSnapshotGroup: RequestMethods<API.DeleteSnapshotGroup.Params, API.DeleteSnapshotGroup.bodyParams, API.DeleteSnapshotGroup.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteStorageSet
   * （Beta）调用DeleteStorageSet删除一个空的存储集。待删除的存储集必须为空，不能包含云盘或者共享块存储。
   * @summary: （Beta）调用DeleteStorageSet删除一个空的存储集。待删除的存储集必须为空，不能包含云盘或者共享块存储。
   */
  DeleteStorageSet: RequestMethods<API.DeleteStorageSet.Params, API.DeleteStorageSet.bodyParams, API.DeleteStorageSet.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteVSwitch
   * undefined
   * @deprecated
   */
  DeleteVSwitch: RequestMethods<API.DeleteVSwitch.Params, API.DeleteVSwitch.bodyParams, API.DeleteVSwitch.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteVirtualBorderRouter
   * undefined
   * @deprecated
   */
  DeleteVirtualBorderRouter: RequestMethods<API.DeleteVirtualBorderRouter.Params, API.DeleteVirtualBorderRouter.bodyParams, API.DeleteVirtualBorderRouter.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeleteVpc
   * undefined
   * @deprecated
   */
  DeleteVpc: RequestMethods<API.DeleteVpc.Params, API.DeleteVpc.bodyParams, API.DeleteVpc.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DeregisterManagedInstance
   * 调用DeregisterManagedInstance注销一个托管实例。注销后您将无法再使用云助手向实例发送命令或文件。
   * @summary: 调用DeregisterManagedInstance注销一个托管实例。注销后您将无法再使用云助手向实例发送命令或文件。
   */
  DeregisterManagedInstance: RequestMethods<API.DeregisterManagedInstance.Params, API.DeregisterManagedInstance.bodyParams, API.DeregisterManagedInstance.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeAccessPoints
   * undefined
   * @deprecated
   */
  DescribeAccessPoints: RequestMethods<API.DescribeAccessPoints.Params, API.DescribeAccessPoints.bodyParams, API.DescribeAccessPoints.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeAccountAttributes
   * [注册](https://account.aliyun.com/register/register.htm)了阿里云账号后，您可以在不同的阿里云地域中创建一定数量的ECS资源，更多信息，请参见[使用限制](https://help.aliyun.com/document_detail/25412.html)。
   * 
   * 您也可以根据自己的需求，在[配额中心](https://ecs.console.aliyun.com/?#/privilegeQuotaV2/region/cn-hangzhou?subTab=userQuota)申请提高资源使用配额。
   * @summary: 调用DescribeAccountAttributes查询您在一个阿里云地域下能创建的ECS资源配额。包括您能创建的安全组数量、弹性网卡数量、按量付费vCPU核数、抢占式实例vCPU核数、按量付费云盘总容量配额、专用宿主机数量、网络类型以及账号是否已完成实名认证。
   */
  DescribeAccountAttributes: RequestMethods<API.DescribeAccountAttributes.Params, API.DescribeAccountAttributes.bodyParams, API.DescribeAccountAttributes.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeActivations
   * 调用DescribeActivations查询已创建的激活码以及激活码的使用情况。
   * @summary: 调用DescribeActivations查询已创建的激活码以及激活码的使用情况。
   */
  DescribeActivations: RequestMethods<API.DescribeActivations.Params, API.DescribeActivations.bodyParams, API.DescribeActivations.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeAutoProvisioningGroupHistory
   * 调用DescribeAutoProvisioningGroupHistory查询弹性供应组的调度任务信息。
   * @summary: 调用DescribeAutoProvisioningGroupHistory查询弹性供应组的调度任务信息。
   */
  DescribeAutoProvisioningGroupHistory: RequestMethods<API.DescribeAutoProvisioningGroupHistory.Params, API.DescribeAutoProvisioningGroupHistory.bodyParams, API.DescribeAutoProvisioningGroupHistory.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeAutoProvisioningGroupInstances
   * 调用DescribeAutoProvisioningGroupInstances查询一个弹性供应组内的实例。
   * @summary: 调用DescribeAutoProvisioningGroupInstances查询一个弹性供应组内的实例。
   */
  DescribeAutoProvisioningGroupInstances: RequestMethods<API.DescribeAutoProvisioningGroupInstances.Params, API.DescribeAutoProvisioningGroupInstances.bodyParams, API.DescribeAutoProvisioningGroupInstances.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeAutoProvisioningGroups
   * 调用DescribeAutoProvisioningGroups查询一个或多个弹性供应组。
   * @summary: 调用DescribeAutoProvisioningGroups查询一个或多个弹性供应组。
   */
  DescribeAutoProvisioningGroups: RequestMethods<API.DescribeAutoProvisioningGroups.Params, API.DescribeAutoProvisioningGroups.bodyParams, API.DescribeAutoProvisioningGroups.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeAutoSnapshotPolicyEx
   * 调用DescribeAutoSnapshotPolicyEX查询您在某个地域下，所有已创建的符合查询条件的自动快照策略。
   * @summary: 调用DescribeAutoSnapshotPolicyEX查询您在某个地域下，所有已创建的符合查询条件的自动快照策略。
   */
  DescribeAutoSnapshotPolicyEx: RequestMethods<API.DescribeAutoSnapshotPolicyEx.Params, API.DescribeAutoSnapshotPolicyEx.bodyParams, API.DescribeAutoSnapshotPolicyEx.APIReponse>;

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
  DescribeAvailableResource: RequestMethods<API.DescribeAvailableResource.Params, API.DescribeAvailableResource.bodyParams, API.DescribeAvailableResource.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeBandwidthLimitation
   * 调用DescribeBandwidthLimitation查询不同实例规格可以购买、升级或降配的公网带宽上限。
   * @summary: 调用DescribeBandwidthLimitation查询不同实例规格可以购买、升级或降配的公网带宽上限。
   */
  DescribeBandwidthLimitation: RequestMethods<API.DescribeBandwidthLimitation.Params, API.DescribeBandwidthLimitation.bodyParams, API.DescribeBandwidthLimitation.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeBandwidthPackages
   * undefined
   * @deprecated
   */
  DescribeBandwidthPackages: RequestMethods<API.DescribeBandwidthPackages.Params, API.DescribeBandwidthPackages.bodyParams, API.DescribeBandwidthPackages.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeCapacityReservationInstances
   * 调用DescribeCapacityReservationInstances查询容量预定服务已匹配的实例列表。
   * @summary: 调用DescribeCapacityReservationInstances查询容量预定服务已匹配的实例列表。
   */
  DescribeCapacityReservationInstances: RequestMethods<API.DescribeCapacityReservationInstances.Params, API.DescribeCapacityReservationInstances.bodyParams, API.DescribeCapacityReservationInstances.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeCapacityReservations
   * 调用DescribeCapacityReservations查询一个或多个容量预定服务的详细信息。
   * @summary: 调用DescribeCapacityReservations查询一个或多个容量预定服务的详细信息。
   */
  DescribeCapacityReservations: RequestMethods<API.DescribeCapacityReservations.Params, API.DescribeCapacityReservations.bodyParams, API.DescribeCapacityReservations.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeClassicLinkInstances
   * 调用该接口时，您需要注意：
   * 
   * -  该接口仅支持经典网络类型实例。
   * -  单次最多只能查询100台经典网络类型实例。
   * -  参数`VpcId`和`InstanceId`不能同时为空。
   * @summary: 调用DescribeClassicLinkInstances查询一台或多台与专有网络VPC建立了连接的经典网络类型实例。
   */
  DescribeClassicLinkInstances: RequestMethods<API.DescribeClassicLinkInstances.Params, API.DescribeClassicLinkInstances.bodyParams, API.DescribeClassicLinkInstances.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeCloudAssistantStatus
   * ## 接口说明
   * 
   * 建议您先调用该接口查询实例的云助手状态，当CloudAssistantStatus为true时再执行命令或下发文件，尤其对于新购实例。
   * @summary: 调用DescribeCloudAssistantStatus查询一台或者多台实例是否安装了云助手Agent。如果已安装了云助手，还将查询云助手命令执行的总数量、正在执行的数量以及最近一次命令执行的时间。
   */
  DescribeCloudAssistantStatus: RequestMethods<API.DescribeCloudAssistantStatus.Params, API.DescribeCloudAssistantStatus.bodyParams, API.DescribeCloudAssistantStatus.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeClusters
   * undefined
   * @deprecated
   */
  DescribeClusters: RequestMethods<API.DescribeClusters.Params, API.DescribeClusters.bodyParams, API.DescribeClusters.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeCommands
   * ## 接口说明
   * 
   * 只输入参数`Action`和`RegionId`，不输入其他任何请求参数，则默认查询您手动创建的所有可用的命令（`CommandId`）。
   * @summary: 调用DescribeCommands查询您手动创建的云助手命令或者阿里云提供的公共命令。
   */
  DescribeCommands: RequestMethods<API.DescribeCommands.Params, API.DescribeCommands.bodyParams, API.DescribeCommands.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDedicatedHostAutoRenew
   * 调用DescribeDedicatedHostAutoRenew查询一台或多台包年包月专有宿主机自动续费状态。
   * @summary: 调用DescribeDedicatedHostAutoRenew查询一台或多台包年包月专有宿主机自动续费状态。
   */
  DescribeDedicatedHostAutoRenew: RequestMethods<API.DescribeDedicatedHostAutoRenew.Params, API.DescribeDedicatedHostAutoRenew.bodyParams, API.DescribeDedicatedHostAutoRenew.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDedicatedHostClusters
   * ## 接口说明
   * 
   * 请求参数的作用类似于一个过滤器，过滤器为逻辑与（AND）关系。如果某一参数为空，则过滤器不起作用。但是参数`DedicatedHostClusterIds`的值如果是一个空JSON数组，即`[]`，则视为该过滤器有效，且返回值为空。
   * @summary: 调用DescribeDedicatedHostClusters查询一个或多个专有宿主机集群的详细信息。
   */
  DescribeDedicatedHostClusters: RequestMethods<API.DescribeDedicatedHostClusters.Params, API.DescribeDedicatedHostClusters.bodyParams, API.DescribeDedicatedHostClusters.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDedicatedHostTypes
   * 调用DescribeDedicatedHostTypes查询指定地域下支持的专有宿主机规格详细参数，或者查询专有宿主机支持的ECS实例规格族。
   * @summary: 调用DescribeDedicatedHostTypes查询指定地域下支持的专有宿主机规格详细参数，或者查询专有宿主机支持的ECS实例规格族。
   */
  DescribeDedicatedHostTypes: RequestMethods<API.DescribeDedicatedHostTypes.Params, API.DescribeDedicatedHostTypes.bodyParams, API.DescribeDedicatedHostTypes.APIReponse>;

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
  DescribeDedicatedHosts: RequestMethods<API.DescribeDedicatedHosts.Params, API.DescribeDedicatedHosts.bodyParams, API.DescribeDedicatedHosts.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDemands
   * 您可通过该接口查询阿里云为您报备的资源详情，包括报备资源类型、资源的交付情况以及资源的消费情况。
   * 
   * 默认查询I/O优化实例规格，以及专有网络VPC类型的ECS实例的报备表单状态。
   * 
   * 如果您需要获取关于创建ECS资源需求报备信息（CreateDemand）、修改ECS资源需求报备信息（ModifyDemand）及删除ECS资源需求报备信息（DeleteDemand）的相关信息，请联系您对应的客户经理。
   * @summary: 调用DescribeDemands查询报备资源的交付及使用状态。
   */
  DescribeDemands: RequestMethods<API.DescribeDemands.Params, API.DescribeDemands.bodyParams, API.DescribeDemands.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDeploymentSetSupportedInstanceTypeFamily
   * ## 接口说明
   * 
   * 更多实例规格族的详情，请参见[实例规格族](https://help.aliyun.com/document_detail/25378.html)。
   * @summary: 调用DescribeDeploymentSetSupportedInstanceTypeFamily查询支持部署集的实例规格族。
   */
  DescribeDeploymentSetSupportedInstanceTypeFamily: RequestMethods<API.DescribeDeploymentSetSupportedInstanceTypeFamily.Params, API.DescribeDeploymentSetSupportedInstanceTypeFamily.bodyParams, API.DescribeDeploymentSetSupportedInstanceTypeFamily.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDeploymentSets
   * 调用DescribeDeploymentSets查询一个或多个部署集的属性列表。
   * @summary: 调用DescribeDeploymentSets查询一个或多个部署集的属性列表。
   */
  DescribeDeploymentSets: RequestMethods<API.DescribeDeploymentSets.Params, API.DescribeDeploymentSets.bodyParams, API.DescribeDeploymentSets.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDiagnosticMetricSets
   * 调用DescribeDiagnosticMetricSets查询资源诊断集合列表。
   * @summary: 调用DescribeDiagnosticMetricSets查询资源诊断集合列表。
   */
  DescribeDiagnosticMetricSets: RequestMethods<API.DescribeDiagnosticMetricSets.Params, API.DescribeDiagnosticMetricSets.bodyParams, API.DescribeDiagnosticMetricSets.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDiagnosticMetrics
   * 调用DescribeDiagnosticMetrics查询诊断指标列表。
   * @summary: 调用DescribeDiagnosticMetrics查询诊断指标列表。
   */
  DescribeDiagnosticMetrics: RequestMethods<API.DescribeDiagnosticMetrics.Params, API.DescribeDiagnosticMetrics.bodyParams, API.DescribeDiagnosticMetrics.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDiagnosticReportAttributes
   * 调用DescribeDiagnosticReportAttributes查询资源诊断详情。
   * @summary: 调用DescribeDiagnosticReportAttributes查询资源诊断详情。
   */
  DescribeDiagnosticReportAttributes: RequestMethods<API.DescribeDiagnosticReportAttributes.Params, API.DescribeDiagnosticReportAttributes.bodyParams, API.DescribeDiagnosticReportAttributes.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDiagnosticReports
   * 调用DescribeDiagnosticReports查询资源诊断报告列表。
   * @summary: 调用DescribeDiagnosticReports查询资源诊断报告列表。
   */
  DescribeDiagnosticReports: RequestMethods<API.DescribeDiagnosticReports.Params, API.DescribeDiagnosticReports.bodyParams, API.DescribeDiagnosticReports.APIReponse>;

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
  DescribeDiskMonitorData: RequestMethods<API.DescribeDiskMonitorData.Params, API.DescribeDiskMonitorData.bodyParams, API.DescribeDiskMonitorData.APIReponse>;

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
  DescribeDisks: RequestMethods<API.DescribeDisks.Params, API.DescribeDisks.bodyParams, API.DescribeDisks.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeDisksFullStatus
   * -  块存储的全部状态信息包含块存储生命周期（`Status`）、块存储健康状态（`HealthStatus`）和块存储事件类型（`EventType`）。  
   * 
   * -  由于块存储相关事件的发布时间、事件的计划执行时间以及事件的实际执行时间相同，如果指定一段时间（`EventTime.Start`~`EventTime.End`），则可以查询这段时间中发生过的所有历史事件。目前，您最多可以查询最近一周的历史事件。
   * @summary: 调用DescribeDisksFullStatus查询一块或多块块存储的全部状态信息。
   */
  DescribeDisksFullStatus: RequestMethods<API.DescribeDisksFullStatus.Params, API.DescribeDisksFullStatus.bodyParams, API.DescribeDisksFullStatus.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeEipAddresses
   * undefined
   * @deprecated
   */
  DescribeEipAddresses: RequestMethods<API.DescribeEipAddresses.Params, API.DescribeEipAddresses.bodyParams, API.DescribeEipAddresses.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeEipMonitorData
   * undefined
   * @deprecated
   */
  DescribeEipMonitorData: RequestMethods<API.DescribeEipMonitorData.Params, API.DescribeEipMonitorData.bodyParams, API.DescribeEipMonitorData.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeElasticityAssuranceInstances
   * 当弹性保障服务失效后，实例与弹性保障服务对应的私有池的匹配关联数据也会失效。此时调用该接口查询已失效的服务，返回值为空。
   * @summary: 调用DescribeElasticityAssuranceInstances查询弹性保障服务已匹配的运行状态的实例列表。
   */
  DescribeElasticityAssuranceInstances: RequestMethods<API.DescribeElasticityAssuranceInstances.Params, API.DescribeElasticityAssuranceInstances.bodyParams, API.DescribeElasticityAssuranceInstances.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeElasticityAssurances
   * 调用DescribeElasticityAssurances查询弹性保障服务的详细信息。
   * @summary: 调用DescribeElasticityAssurances查询弹性保障服务的详细信息。
   */
  DescribeElasticityAssurances: RequestMethods<API.DescribeElasticityAssurances.Params, API.DescribeElasticityAssurances.bodyParams, API.DescribeElasticityAssurances.APIReponse>;

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
  DescribeEniMonitorData: RequestMethods<API.DescribeEniMonitorData.Params, API.DescribeEniMonitorData.bodyParams, API.DescribeEniMonitorData.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeForwardTableEntries
   * undefined
   * @deprecated
   */
  DescribeForwardTableEntries: RequestMethods<API.DescribeForwardTableEntries.Params, API.DescribeForwardTableEntries.bodyParams, API.DescribeForwardTableEntries.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeHaVips
   * undefined
   * @deprecated
   */
  DescribeHaVips: RequestMethods<API.DescribeHaVips.Params, API.DescribeHaVips.bodyParams, API.DescribeHaVips.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeHpcClusters
   * 调用DescribeHpcClusters查询您可用的HPC集群。请求参数作为筛选器（Filter）使用，筛选关系为逻辑与关系，参数之间无依赖关系。
   * @summary: 调用DescribeHpcClusters查询您可用的HPC集群。请求参数作为筛选器（Filter）使用，筛选关系为逻辑与关系，参数之间无依赖关系。
   */
  DescribeHpcClusters: RequestMethods<API.DescribeHpcClusters.Params, API.DescribeHpcClusters.bodyParams, API.DescribeHpcClusters.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeImageComponents
   * 您可以设置`NextToken`查询凭证（Token），其取值是上一次调用DescribeImageComponents返回的`NextToken`参数值，再通过`MaxResults`设置单页查询的最大条目数进行查询。
   * @summary: 调用DescribeImageComponents查询一个或多个镜像组件的详细信息。
   */
  DescribeImageComponents: RequestMethods<API.DescribeImageComponents.Params, API.DescribeImageComponents.bodyParams, API.DescribeImageComponents.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeImageFromFamily
   * ## 接口说明
   * 
   * 指定查询的镜像族系如果不存在可用的镜像，则返回结果为空。
   * @summary: 调用DescribeImageFromFamily查询指定镜像族系内最新创建的可用自定义镜像。
   */
  DescribeImageFromFamily: RequestMethods<API.DescribeImageFromFamily.Params, API.DescribeImageFromFamily.bodyParams, API.DescribeImageFromFamily.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeImagePipelineExecutions
   * - 指定的镜像模板ID`ImagePipelineId`不能是已删除的镜像模板，已删除的镜像模板会同步删除对应的构建任务。
   * - 镜像模板ID`ImagePipelineId`和构建任务ID`ExecutionId`不能同时为空。
   * - 您可以设置`NextToken`查询凭证（Token），其取值是上一次调用`DescribeImagePipelineExecutions`返回的`NextToken`参数值，再通过`MaxResults`设置单页查询的最大条目数进行查询。
   * @summary: 调用DescribeImagePipelineExecutions查询一个镜像构建任务的详细信息。
   */
  DescribeImagePipelineExecutions: RequestMethods<API.DescribeImagePipelineExecutions.Params, API.DescribeImagePipelineExecutions.bodyParams, API.DescribeImagePipelineExecutions.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeImagePipelines
   * 您可以设置`NextToken`查询凭证（Token），其取值是上一次调用`DescribeImagePipelines`返回的`NextToken`参数值，再通过`MaxResults`设置单页查询的最大条目数进行查询。
   * @summary: 调用DescribeImagePipelines查询一个或多个镜像模板的详细信息。
   */
  DescribeImagePipelines: RequestMethods<API.DescribeImagePipelines.Params, API.DescribeImagePipelines.bodyParams, API.DescribeImagePipelines.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeImageSharePermission
   * 查询自定义镜像已经共享的所有用户。返回结果支持分页显示，每页的信息条目默认为10条。
   * @summary: 查询自定义镜像已经共享的所有用户。返回结果支持分页显示，每页的信息条目默认为10条。
   */
  DescribeImageSharePermission: RequestMethods<API.DescribeImageSharePermission.Params, API.DescribeImageSharePermission.bodyParams, API.DescribeImageSharePermission.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeImageSupportInstanceTypes
   * 调用DescribeImageSupportInstanceTypes查询指定镜像支持的实例规格。
   * @summary: 调用DescribeImageSupportInstanceTypes查询指定镜像支持的实例规格。
   */
  DescribeImageSupportInstanceTypes: RequestMethods<API.DescribeImageSupportInstanceTypes.Params, API.DescribeImageSupportInstanceTypes.bodyParams, API.DescribeImageSupportInstanceTypes.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeImages
   * - 您可以查询的镜像资源包括您的自定义镜像、阿里云提供的公共镜像、云市场镜像以及其他阿里云用户主动共享给您的共享镜像。
   * - 支持分页查询，查询结果包括可使用的镜像资源的总数和当前页的镜像资源。每页的数量默认为10条。
   * - 通过阿里云CLI调用API时，不同数据类型的请求参数取值必须遵循格式要求。更多信息，请参见[CLI参数格式说明](https://help.aliyun.com/document_detail/110340.html)。
   * @summary: 调用DescribeImages查询您可以使用的镜像资源。
   */
  DescribeImages: RequestMethods<API.DescribeImages.Params, API.DescribeImages.bodyParams, API.DescribeImages.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceAttachmentAttributes
   * 私有池是弹性保障服务或容量预定服务在创建后生成的，关联了与私有池匹配的实例信息。您可以在创建实例时设置私有池，实例将会与弹性保障服务或容量预定服务进行匹配。
   * 
   * 当私有池失效后，实例与私有池的匹配关联数据也会失效。此时调用该接口，返回值的私有池信息将为空。
   * @summary: 调用DescribeInstanceAttachmentAttributes查询实例匹配的私有池信息。
   */
  DescribeInstanceAttachmentAttributes: RequestMethods<API.DescribeInstanceAttachmentAttributes.Params, API.DescribeInstanceAttachmentAttributes.bodyParams, API.DescribeInstanceAttachmentAttributes.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceAttribute
   * 调用DescribeInstanceAttribute查询单个ECS实例详情。
   * @summary: 调用DescribeInstanceAttribute查询单个ECS实例详情。
   */
  DescribeInstanceAttribute: RequestMethods<API.DescribeInstanceAttribute.Params, API.DescribeInstanceAttribute.bodyParams, API.DescribeInstanceAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceAutoRenewAttribute
   * - 在设置自动续费或者手动续费前，查询实例续费状态能使您了解实例是否已为自动续费状态。
   * - 只支持包年包月的实例，按量付费的实例调用该接口会报错。
   * @summary: 调用DescribeInstanceAutoRenewAttribute查询一台或多台包年包月ECS实例的自动续费状态。
   */
  DescribeInstanceAutoRenewAttribute: RequestMethods<API.DescribeInstanceAutoRenewAttribute.Params, API.DescribeInstanceAutoRenewAttribute.bodyParams, API.DescribeInstanceAutoRenewAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceHistoryEvents
   * - 您最多可以查询最近30天的已完结历史系统事件。对于未完结的系统事件无查询时间限制。
   * 
   * - 通过指定InstanceEventCycleStatus参数，还可以查询处于Scheduled（等待执行事件）、Executing（事件执行中）和Inquiring（事件问询中）状态的系统事件。
   * @summary: 查询指定实例系统事件信息，默认查询处于非活跃状态的历史系统事件。
   */
  DescribeInstanceHistoryEvents: RequestMethods<API.DescribeInstanceHistoryEvents.Params, API.DescribeInstanceHistoryEvents.bodyParams, API.DescribeInstanceHistoryEvents.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceMaintenanceAttributes
   * 查询已设定的维护策略，策略中主要包括两个维护属性。
   * 
   * - 维护时间窗口：您指定的一个时间段，运维只会在该时间内进行。
   * - 维护动作：您指定的实例宕机处理策略。
   * @summary: 调用DescribeInstanceMaintenanceAttributes查询实例的维护属性。
   */
  DescribeInstanceMaintenanceAttributes: RequestMethods<API.DescribeInstanceMaintenanceAttributes.Params, API.DescribeInstanceMaintenanceAttributes.bodyParams, API.DescribeInstanceMaintenanceAttributes.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceModificationPrice
   * - 仅支持查询未到期的包年包月ECS实例升配的价格信息，暂不支持查询实例降配的价格信息。
   * - 不支持查询按量付费ECS实例变配时的价格信息。由于按量付费ECS实例变配后的价格与新购实例的价格一致，因此您可以直接调用[DescribePrice](https://help.aliyun.com/document_detail/107829.html)查询ECS实例的最新价格。
   * - 实例升配前，建议您先调用[DescribeResourcesModification](https://help.aliyun.com/document_detail/66187.html)查询指定可用区内可升配的实例规格信息。
   * @summary: 调用DescribeInstanceModificationPrice查询未到期的包年包月ECS实例升配时目标实例规格的价格信息、新增包年包月数据盘的价格信息。
   */
  DescribeInstanceModificationPrice: RequestMethods<API.DescribeInstanceModificationPrice.Params, API.DescribeInstanceModificationPrice.bodyParams, API.DescribeInstanceModificationPrice.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceMonitorData
   * 调用该接口时，您需要注意：
   * 
   * -  每次最多返回400条监控数据，如果指定的参数`(EndTime - StartTime)/Period`大于400时，则返回错误信息。
   * -  单次最多能查询近30天内的监控信息，如果指定的参数`StartTime`超过30天，则返回错误信息。
   * -  当返回信息中缺少部分内容时，可能是系统没有获取到相应的信息。例如，当时实例处于已停止（Stopped）状态。
   * @summary: 调用DescribeInstanceMonitorData查询一台ECS实例的监控信息。可查询的指标包括ECS实例的vCPU使用率、突发性能实例积分、接收的数据流量、发送的数据流量、平均带宽等。
   */
  DescribeInstanceMonitorData: RequestMethods<API.DescribeInstanceMonitorData.Params, API.DescribeInstanceMonitorData.bodyParams, API.DescribeInstanceMonitorData.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceRamRole
   * 通过阿里云CLI调用API时，不同数据类型的请求参数取值必须遵循格式要求，详情请参见[CLI参数格式说明](https://help.aliyun.com/document_detail/110340.html)。
   * @summary: 调用DescribeInstanceRamRole查询一台或者多台ECS实例上的已赋予的实例RAM角色。
   */
  DescribeInstanceRamRole: RequestMethods<API.DescribeInstanceRamRole.Params, API.DescribeInstanceRamRole.bodyParams, API.DescribeInstanceRamRole.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceStatus
   * - ECS实例的生命周期状态请参见[实例状态表](https://help.aliyun.com/document_detail/25687.html)。 
   * - 该接口同时可用于获取实例列表。
   * @summary: 调用DescribeInstanceStatus获取多台ECS实例的状态信息。
   */
  DescribeInstanceStatus: RequestMethods<API.DescribeInstanceStatus.Params, API.DescribeInstanceStatus.bodyParams, API.DescribeInstanceStatus.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceTopology
   * > DescribeInstanceTopology正处于邀测阶段，请您耐心等待。感谢您的支持！
   * @summary: （Beta）调用DescribeInstanceTopology查询实例所在宿主机的拓扑结构。
   */
  DescribeInstanceTopology: RequestMethods<API.DescribeInstanceTopology.Params, API.DescribeInstanceTopology.bodyParams, API.DescribeInstanceTopology.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstanceTypeFamilies
   * 调用DescribeInstanceTypeFamilies查询云服务器ECS提供的实例规格族列表。
   * @summary: 调用DescribeInstanceTypeFamilies查询云服务器ECS提供的实例规格族列表。
   */
  DescribeInstanceTypeFamilies: RequestMethods<API.DescribeInstanceTypeFamilies.Params, API.DescribeInstanceTypeFamilies.bodyParams, API.DescribeInstanceTypeFamilies.APIReponse>;

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
  DescribeInstanceTypes: RequestMethods<API.DescribeInstanceTypes.Params, API.DescribeInstanceTypes.bodyParams, API.DescribeInstanceTypes.APIReponse>;

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
  DescribeInstanceVncUrl: RequestMethods<API.DescribeInstanceVncUrl.Params, API.DescribeInstanceVncUrl.bodyParams, API.DescribeInstanceVncUrl.APIReponse>;

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
  DescribeInstances: RequestMethods<API.DescribeInstances.Params, API.DescribeInstances.bodyParams, API.DescribeInstances.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInstancesFullStatus
   * ## 接口说明
   * 返回结果包括实例状态和待执行（Scheduled）状态的实例系统事件。
   * 
   * 如果指定一个时间段，则根据时间段筛选事件。
   * @summary: 调用DescribeInstancesFullStatus查询一台或多台ECS实例的全状态信息。全状态信息包括实例状态和实例系统事件状态，其中，实例状态为实例的生命周期状态，实例系统事件为维护事件的健康状态。
   */
  DescribeInstancesFullStatus: RequestMethods<API.DescribeInstancesFullStatus.Params, API.DescribeInstancesFullStatus.bodyParams, API.DescribeInstancesFullStatus.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInvocationResults
   * ## 接口说明
   * 
   * - 当您执行命令后，不代表命令一定成功执行，并且一定有预期的命令效果。您需要通过本接口查看实际的具体执行结果，以实际输出结果为准。
   * - 您可以查询最近4周的执行信息，执行信息的保留上限为10万条。
   * @summary: 调用DescribeInvocationResults查看一条或多条云助手命令的执行结果，即在ECS实例中的实际执行结果。
   */
  DescribeInvocationResults: RequestMethods<API.DescribeInvocationResults.Params, API.DescribeInvocationResults.bodyParams, API.DescribeInvocationResults.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeInvocations
   * ## 接口说明
   * 
   * - 当您执行命令后，不代表命令一定成功运行，并且一定有预期的命令效果。您需要通过接口返回值查看实际执行结果，以实际输出结果为准。
   * 
   * - 您可以查询最近4周的执行信息，执行信息的保留上限为10万条。
   * @summary: 调用DescribeInvocations查询云助手命令的执行列表和状态。
   */
  DescribeInvocations: RequestMethods<API.DescribeInvocations.Params, API.DescribeInvocations.bodyParams, API.DescribeInvocations.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeKeyPairs
   * 调用DescribeKeyPairs查询一个或多个密钥对。
   * @summary: 调用DescribeKeyPairs查询一个或多个密钥对。
   */
  DescribeKeyPairs: RequestMethods<API.DescribeKeyPairs.Params, API.DescribeKeyPairs.bodyParams, API.DescribeKeyPairs.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeLaunchTemplateVersions
   * 调用DescribeLaunchTemplateVersions查询ECS实例启动模板版本。
   * @summary: 调用DescribeLaunchTemplateVersions查询ECS实例启动模板版本。
   */
  DescribeLaunchTemplateVersions: RequestMethods<API.DescribeLaunchTemplateVersions.Params, API.DescribeLaunchTemplateVersions.bodyParams, API.DescribeLaunchTemplateVersions.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeLaunchTemplates
   * 调用DescribeLaunchTemplates查询一个或多个可用的实例启动模板。
   * @summary: 调用DescribeLaunchTemplates查询一个或多个可用的实例启动模板。
   */
  DescribeLaunchTemplates: RequestMethods<API.DescribeLaunchTemplates.Params, API.DescribeLaunchTemplates.bodyParams, API.DescribeLaunchTemplates.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeLimitation
   * undefined
   * @deprecated
   */
  DescribeLimitation: RequestMethods<API.DescribeLimitation.Params, API.DescribeLimitation.bodyParams, API.DescribeLimitation.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeManagedInstances
   * 调用DescribeManagedInstances查询托管实例列表。
   * @summary: 调用DescribeManagedInstances查询托管实例列表。
   */
  DescribeManagedInstances: RequestMethods<API.DescribeManagedInstances.Params, API.DescribeManagedInstances.bodyParams, API.DescribeManagedInstances.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeNatGateways
   * undefined
   * @deprecated
   */
  DescribeNatGateways: RequestMethods<API.DescribeNatGateways.Params, API.DescribeNatGateways.bodyParams, API.DescribeNatGateways.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeNetworkInterfaceAttribute
   * 调用DescribeNetworkInterfaceAttribute查询指定网卡详细信息。
   * @summary: 调用DescribeNetworkInterfaceAttribute查询指定网卡详细信息。
   */
  DescribeNetworkInterfaceAttribute: RequestMethods<API.DescribeNetworkInterfaceAttribute.Params, API.DescribeNetworkInterfaceAttribute.bodyParams, API.DescribeNetworkInterfaceAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeNetworkInterfacePermissions
   * 调用DescribeNetworkInterfacePermissions查询您授权给阿里云合作伙伴（认证ISV）或者个人用户的弹性网卡权限列表。
   * @summary: 调用DescribeNetworkInterfacePermissions查询您授权给阿里云合作伙伴（认证ISV）或者个人用户的弹性网卡权限列表。
   */
  DescribeNetworkInterfacePermissions: RequestMethods<API.DescribeNetworkInterfacePermissions.Params, API.DescribeNetworkInterfacePermissions.bodyParams, API.DescribeNetworkInterfacePermissions.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeNetworkInterfaces
   * ## 接口说明
   * 
   * `DescribeNetworkInterfaces`接口支持分页查询。具体使用说明：分页查询首页时，仅需设置`MaxResults`以限制返回信息的条目数，返回结果中的`NextToken`将作为查询后续页的凭证。查询后续页时，将`NextToken`参数设置为上一次返回结果中获取到的`NextToken`作为查询凭证，并设置`MaxResults`限制返回条目数。
   * 
   * > 当指定`MaxResults`或`NextToken`参数时，系统会使用上述的分页查询方式返回结果，否则系统会使用`PageNumber`和`PageSize`组成的分页查询方式返回结果。
   * @summary: 调用DescribeNetworkInterfaces查询一个或多个弹性网卡（ENI）的详细信息。
   */
  DescribeNetworkInterfaces: RequestMethods<API.DescribeNetworkInterfaces.Params, API.DescribeNetworkInterfaces.bodyParams, API.DescribeNetworkInterfaces.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeNewProjectEipMonitorData
   * undefined
   * @deprecated
   */
  DescribeNewProjectEipMonitorData: RequestMethods<API.DescribeNewProjectEipMonitorData.Params, API.DescribeNewProjectEipMonitorData.bodyParams, API.DescribeNewProjectEipMonitorData.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribePhysicalConnections
   * undefined
   * @deprecated
   */
  DescribePhysicalConnections: RequestMethods<API.DescribePhysicalConnections.Params, API.DescribePhysicalConnections.bodyParams, API.DescribePhysicalConnections.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribePrefixListAssociations
   * 调用DescribePrefixListAssociations查询指定前缀列表已关联的资源信息。
   * @summary: 调用DescribePrefixListAssociations查询指定前缀列表已关联的资源信息。
   */
  DescribePrefixListAssociations: RequestMethods<API.DescribePrefixListAssociations.Params, API.DescribePrefixListAssociations.bodyParams, API.DescribePrefixListAssociations.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribePrefixListAttributes
   * 调用DescribePrefixListAttributes查询指定前缀列表的详细信息，包含前缀列表的名称、地址族、最大条目容量以及条目的详细信息等。
   * @summary: 调用DescribePrefixListAttributes查询指定前缀列表的详细信息，包含前缀列表的名称、地址族、最大条目容量以及条目的详细信息等。
   */
  DescribePrefixListAttributes: RequestMethods<API.DescribePrefixListAttributes.Params, API.DescribePrefixListAttributes.bodyParams, API.DescribePrefixListAttributes.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribePrefixLists
   * 请求参数`AddressFamily`、`PrefixListId.N`和`PrefixListName`类似于过滤器，为逻辑与（AND）关系。如果某一参数为空，则过滤器不起作用。
   * @summary: 调用DescribePrefixLists查询一个或多个前缀列表的信息。
   */
  DescribePrefixLists: RequestMethods<API.DescribePrefixLists.Params, API.DescribePrefixLists.bodyParams, API.DescribePrefixLists.APIReponse>;

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
  DescribePrice: RequestMethods<API.DescribePrice.Params, API.DescribePrice.bodyParams, API.DescribePrice.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeRecommendInstanceType
   * （Beta）调用DescribeRecommendInstanceType根据一个指定的实例规格，查找一个或多个备选的实例规格。针对已经或者即将停售的实例规格，DescribeRecommendInstanceType会罗列出作为替补的所有实例规格。
   * @summary: （Beta）调用DescribeRecommendInstanceType根据一个指定的实例规格，查找一个或多个备选的实例规格。针对已经或者即将停售的实例规格，DescribeRecommendInstanceType会罗列出作为替补的所有实例规格。
   */
  DescribeRecommendInstanceType: RequestMethods<API.DescribeRecommendInstanceType.Params, API.DescribeRecommendInstanceType.bodyParams, API.DescribeRecommendInstanceType.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeRegions
   * 调用DescribeRegions查询您可以使用的阿里云地域。
   * @summary: 调用DescribeRegions查询您可以使用的阿里云地域。
   */
  DescribeRegions: RequestMethods<API.DescribeRegions.Params, API.DescribeRegions.bodyParams, API.DescribeRegions.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeRenewalPrice
   * - 仅支持查询包年包月ECS实例续费时长的价格或者续费至统一到期日的价格。
   * - 参数设置的注意事项如下：
   *     - 只设置必选参数时，默认查询实例续费时长1个月的价格信息。
   *     - 不支持同时查询续费时长价格和续费至统一到期日的价格，即续费时长参数（`Period`、`PeriodUnit`）与续费至统一到期日参数（`ExpectedRenewDay`）不能同时设置。
   * @summary: 调用DescribeRenewalPrice查询云服务器ECS资源的续费价格。仅支持查询包年包月资源的续费价格。
   */
  DescribeRenewalPrice: RequestMethods<API.DescribeRenewalPrice.Params, API.DescribeRenewalPrice.bodyParams, API.DescribeRenewalPrice.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeReservedInstanceAutoRenewAttribute
   * 调用DescribeReservedInstanceAutoRenewAttribute查询一个或多个包年包月预留实例券自动续费状态。
   * @summary: 调用DescribeReservedInstanceAutoRenewAttribute查询一个或多个包年包月预留实例券自动续费状态。
   */
  DescribeReservedInstanceAutoRenewAttribute: RequestMethods<API.DescribeReservedInstanceAutoRenewAttribute.Params, API.DescribeReservedInstanceAutoRenewAttribute.bodyParams, API.DescribeReservedInstanceAutoRenewAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeReservedInstances
   * 调用DescribeReservedInstances查询已经购买的预留实例券。
   * @summary: 调用DescribeReservedInstances查询已经购买的预留实例券。
   */
  DescribeReservedInstances: RequestMethods<API.DescribeReservedInstances.Params, API.DescribeReservedInstances.bodyParams, API.DescribeReservedInstances.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeResourceByTags
   * 调用DescribeResourceByTags根据标签检索资源。支持根据标签检索，也支持根据资源类型检索。
   * @summary: 调用DescribeResourceByTags根据标签检索资源。支持根据标签检索，也支持根据资源类型检索。
   */
  DescribeResourceByTags: RequestMethods<API.DescribeResourceByTags.Params, API.DescribeResourceByTags.bodyParams, API.DescribeResourceByTags.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeResourcesModification
   * 调用DescribeResourcesModification查询升级和降配实例规格或者系统盘时，某一可用区的可用资源信息。
   * @summary: 调用DescribeResourcesModification查询升级和降配实例规格或者系统盘时，某一可用区的可用资源信息。
   */
  DescribeResourcesModification: RequestMethods<API.DescribeResourcesModification.Params, API.DescribeResourcesModification.bodyParams, API.DescribeResourcesModification.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeRouteTables
   * undefined
   * @deprecated
   */
  DescribeRouteTables: RequestMethods<API.DescribeRouteTables.Params, API.DescribeRouteTables.bodyParams, API.DescribeRouteTables.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeRouterInterfaces
   * undefined
   * @deprecated
   */
  DescribeRouterInterfaces: RequestMethods<API.DescribeRouterInterfaces.Params, API.DescribeRouterInterfaces.bodyParams, API.DescribeRouterInterfaces.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSecurityGroupAttribute
   * 调用DescribeSecurityGroupAttribute查询一个安全组的安全组规则。
   * @summary: 调用DescribeSecurityGroupAttribute查询一个安全组的安全组规则。
   */
  DescribeSecurityGroupAttribute: RequestMethods<API.DescribeSecurityGroupAttribute.Params, API.DescribeSecurityGroupAttribute.bodyParams, API.DescribeSecurityGroupAttribute.APIReponse>;

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
  DescribeSecurityGroupReferences: RequestMethods<API.DescribeSecurityGroupReferences.Params, API.DescribeSecurityGroupReferences.bodyParams, API.DescribeSecurityGroupReferences.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSecurityGroups
   * 调用接口前，您需要注意：
   * 
   * - 安全组的基本信息包括安全组ID和安全组描述等。返回参数列表按照安全组ID降序排列。
   * - 在分页查询时，推荐您使用MaxResults与NextToken参数进行查询。具体使用说明：分页查询首页时，仅需设置MaxResults以限制返回信息的条目数，返回结果中的NextToken将作为查询后续页的凭证。查询后续页时，将NextToken参数设置为上一次返回结果中获取到的NextToken作为查询凭证，并设置MaxResults限制返回条目数。当返回结果中的NextToken为空时，表示该页为末页，不再有后续页。
   * - 通过阿里云CLI调用API时，不同数据类型的请求参数取值必须遵循一定的格式要求。更多信息，请参见[CLI参数格式说明](https://help.aliyun.com/document_detail/110340.html)。
   * @summary: 调用DescribeSecurityGroups查询您创建的安全组的基本信息。
   */
  DescribeSecurityGroups: RequestMethods<API.DescribeSecurityGroups.Params, API.DescribeSecurityGroups.bodyParams, API.DescribeSecurityGroups.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSendFileResults
   * ## 接口说明：
   * - 当您下发文件后，不代表文件一定成功下发。您需要通过接口返回值查看实际下发结果，并以实际输出结果为准。
   * - 您可以查询最近6周的下发记录。
   * @summary: 调用DescribeSendFileResults查询云助手下发文件列表及状态。
   */
  DescribeSendFileResults: RequestMethods<API.DescribeSendFileResults.Params, API.DescribeSendFileResults.bodyParams, API.DescribeSendFileResults.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSnapshotGroups
   * ## 接口说明
   * 
   * `InstanceId`、`SnapshotGroupId.N`和`Status.N`不是必需的请求参数，但是可以构建过滤器逻辑，参数之间为逻辑与（And）关系。
   * @summary: 调用DescribeSnapshotGroups查询一个或多个快照一致性组的信息。
   */
  DescribeSnapshotGroups: RequestMethods<API.DescribeSnapshotGroups.Params, API.DescribeSnapshotGroups.bodyParams, API.DescribeSnapshotGroups.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSnapshotLinks
   * 调用该接口时，您需要注意：
   * 
   * -  请求参数`RegionId`、`DiskIds`和`InstanceId`等充当过滤器功能，参数间是逻辑与关系。  
   * 
   * -  如果不指定任何参数，则过滤器不起作用。当`DiskIds`和`SnapshotLinkIds`都为空数组时，同样视该过滤器有效，但是返回结果为空。
   * @summary: 调用DescribeSnapshotLinks查询云盘快照链。快照链是一块云盘所有快照组成的关系链，一块云盘对应一条快照链。
   */
  DescribeSnapshotLinks: RequestMethods<API.DescribeSnapshotLinks.Params, API.DescribeSnapshotLinks.bodyParams, API.DescribeSnapshotLinks.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSnapshotMonitorData
   * 调用该接口时，您需要注意：
   * 
   * - 每次最多返回400条监控数据，如果指定的参数`(EndTime - StartTime)/Period`大于400时，则返回错误。
   * 
   * - 单次最多能查询近30天内的监控信息，如果指定的参数`StartTime`超过30天，则返回错误。
   * @summary: 调用DescribeSnapshotMonitorData查询一个地域下近30天内的快照容量变化监控数据。
   */
  DescribeSnapshotMonitorData: RequestMethods<API.DescribeSnapshotMonitorData.Params, API.DescribeSnapshotMonitorData.bodyParams, API.DescribeSnapshotMonitorData.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSnapshotPackage
   * 调用DescribeSnapshotPackage查询您在一个阿里云地域下已经购买的OSS存储包。存储包可以用于抵扣普通快照存储容量，但不支持抵扣本地快照。
   * @summary: 调用DescribeSnapshotPackage查询您在一个阿里云地域下已经购买的OSS存储包。存储包可以用于抵扣普通快照存储容量，但不支持抵扣本地快照。
   */
  DescribeSnapshotPackage: RequestMethods<API.DescribeSnapshotPackage.Params, API.DescribeSnapshotPackage.bodyParams, API.DescribeSnapshotPackage.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSnapshots
   * ## 接口说明
   * 
   * `InstanceId`、`DiskId`和`SnapshotIds`不是必需的请求参数，但是可以构建过滤器逻辑，参数之间为逻辑与（And）关系。
   * 
   * 通过阿里云CLI调用API时，不同数据类型的请求参数取值必须遵循一定的格式要求，详情请参见[CLI参数格式说明](https://help.aliyun.com/document_detail/110340.html)。
   * @summary: 调用DescribeSnapshots查询一台ECS实例或一块云盘所有的快照列表。
   */
  DescribeSnapshots: RequestMethods<API.DescribeSnapshots.Params, API.DescribeSnapshots.bodyParams, API.DescribeSnapshots.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSnapshotsUsage
   * 如果您想知道当前地域下每块磁盘的快照使用情况，推荐使用[DescribeSnapshotLinks](https://help.aliyun.com/document_detail/55837.html)查询快照链。
   * @summary: 调用DescribeSnapshotsUsage查询您在一个地域下的快照数量以及快照容量。
   */
  DescribeSnapshotsUsage: RequestMethods<API.DescribeSnapshotsUsage.Params, API.DescribeSnapshotsUsage.bodyParams, API.DescribeSnapshotsUsage.APIReponse>;

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
  DescribeSpotAdvice: RequestMethods<API.DescribeSpotAdvice.Params, API.DescribeSpotAdvice.bodyParams, API.DescribeSpotAdvice.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeSpotPriceHistory
   * 调用DescribeSpotPriceHistory查询抢占式实例近30天内的历史价格。
   * @summary: 调用DescribeSpotPriceHistory查询抢占式实例近30天内的历史价格。
   */
  DescribeSpotPriceHistory: RequestMethods<API.DescribeSpotPriceHistory.Params, API.DescribeSpotPriceHistory.bodyParams, API.DescribeSpotPriceHistory.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeStorageCapacityUnits
   * 查询一个或多个存储容量单位包SCU的详细信息。
   * @summary: 查询一个或多个存储容量单位包SCU的详细信息。
   */
  DescribeStorageCapacityUnits: RequestMethods<API.DescribeStorageCapacityUnits.Params, API.DescribeStorageCapacityUnits.bodyParams, API.DescribeStorageCapacityUnits.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeStorageSetDetails
   * （Beta）调用DescribeStorageSetDetails查询一个存储集内云盘或共享块存储的详细信息。
   * @summary: （Beta）调用DescribeStorageSetDetails查询一个存储集内云盘或共享块存储的详细信息。
   */
  DescribeStorageSetDetails: RequestMethods<API.DescribeStorageSetDetails.Params, API.DescribeStorageSetDetails.bodyParams, API.DescribeStorageSetDetails.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeStorageSets
   * （Beta）调用DescribeStorageSets查询一个或多个存储集信息，包括所属地域、所属可用区、创建时间和最大分区数等信息。
   * @summary: （Beta）调用DescribeStorageSets查询一个或多个存储集信息，包括所属地域、所属可用区、创建时间和最大分区数等信息。
   */
  DescribeStorageSets: RequestMethods<API.DescribeStorageSets.Params, API.DescribeStorageSets.bodyParams, API.DescribeStorageSets.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeTags
   * 如果您指定了标签键（Tag.N.Key）但没有指定标签值（Tag.N.Value），我们将查询该标签键对应的所有标签键值对。如果您指定了标签键值对，就查询精确匹配该键值对的标签。
   * @summary: 查询可以供您使用的标签。您可以根据资源类型、资源ID、标签键或标签值等条件查询标签，筛选条件之间为逻辑与（&amp;&amp;）关系，返回满足所有筛选条件的标签。
   */
  DescribeTags: RequestMethods<API.DescribeTags.Params, API.DescribeTags.bodyParams, API.DescribeTags.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeTaskAttribute
   * 调用DescribeTaskAttribute查询异步任务的详细信息。目前，可以查询的异步任务有导入镜像（ImportImage）、导出镜像（ExportImage）及变更云盘类型（ModifyDiskSpec）。
   * @summary: 调用DescribeTaskAttribute查询异步任务的详细信息。目前，可以查询的异步任务有导入镜像（ImportImage）、导出镜像（ExportImage）及变更云盘类型（ModifyDiskSpec）。
   */
  DescribeTaskAttribute: RequestMethods<API.DescribeTaskAttribute.Params, API.DescribeTaskAttribute.bodyParams, API.DescribeTaskAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeTasks
   * 调用DescribeTasks查询一个或多个异步请求的进度。
   * @summary: 调用DescribeTasks查询一个或多个异步请求的进度。
   */
  DescribeTasks: RequestMethods<API.DescribeTasks.Params, API.DescribeTasks.bodyParams, API.DescribeTasks.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeUserBusinessBehavior
   * undefined
   * @deprecated
   */
  DescribeUserBusinessBehavior: RequestMethods<API.DescribeUserBusinessBehavior.Params, API.DescribeUserBusinessBehavior.bodyParams, API.DescribeUserBusinessBehavior.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeUserData
   * -   返回的实例自定义数据将以Base64编码的方式显示。
   * -   如果实例不存在自定义数据，则返回空值。
   * @summary: 调用DescribeUserData查询一台ECS实例的自定义数据。
   */
  DescribeUserData: RequestMethods<API.DescribeUserData.Params, API.DescribeUserData.bodyParams, API.DescribeUserData.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeVRouters
   * undefined
   * @deprecated
   */
  DescribeVRouters: RequestMethods<API.DescribeVRouters.Params, API.DescribeVRouters.bodyParams, API.DescribeVRouters.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeVSwitches
   * undefined
   * @deprecated
   */
  DescribeVSwitches: RequestMethods<API.DescribeVSwitches.Params, API.DescribeVSwitches.bodyParams, API.DescribeVSwitches.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeVirtualBorderRouters
   * undefined
   * @deprecated
   */
  DescribeVirtualBorderRouters: RequestMethods<API.DescribeVirtualBorderRouters.Params, API.DescribeVirtualBorderRouters.bodyParams, API.DescribeVirtualBorderRouters.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeVirtualBorderRoutersForPhysicalConnection
   * undefined
   * @deprecated
   */
  DescribeVirtualBorderRoutersForPhysicalConnection: RequestMethods<API.DescribeVirtualBorderRoutersForPhysicalConnection.Params, API.DescribeVirtualBorderRoutersForPhysicalConnection.bodyParams, API.DescribeVirtualBorderRoutersForPhysicalConnection.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeVpcs
   * undefined
   * @deprecated
   */
  DescribeVpcs: RequestMethods<API.DescribeVpcs.Params, API.DescribeVpcs.bodyParams, API.DescribeVpcs.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DescribeZones
   * DescribeZones仅查询阿里云提供的可用区列表并返回少量库存信息。如果您需要查询具体可用区下可购买的实例规格和云盘规格，推荐您使用[DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html)。
   * @summary: 调用DescribeZones查询一个阿里云地域下的可用区。
   */
  DescribeZones: RequestMethods<API.DescribeZones.Params, API.DescribeZones.bodyParams, API.DescribeZones.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DetachClassicLinkVpc
   * 调用DetachClassicLinkVpc取消一台经典网络类型ECS实例与专有网络VPC的连接（ClassicLink）。取消ClassicLink后，经典网络类型实例无法与VPC内的实例互通。
   * @summary: 调用DetachClassicLinkVpc取消一台经典网络类型ECS实例与专有网络VPC的连接（ClassicLink）。取消ClassicLink后，经典网络类型实例无法与VPC内的实例互通。
   */
  DetachClassicLinkVpc: RequestMethods<API.DetachClassicLinkVpc.Params, API.DetachClassicLinkVpc.bodyParams, API.DetachClassicLinkVpc.APIReponse>;

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
  DetachDisk: RequestMethods<API.DetachDisk.Params, API.DetachDisk.bodyParams, API.DetachDisk.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DetachInstanceRamRole
   * 调用DetachInstanceRamRole回收一台或多台ECS实例的实例RAM角色。
   * @summary: 调用DetachInstanceRamRole回收一台或多台ECS实例的实例RAM角色。
   */
  DetachInstanceRamRole: RequestMethods<API.DetachInstanceRamRole.Params, API.DetachInstanceRamRole.bodyParams, API.DetachInstanceRamRole.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DetachKeyPair
   * 使用该接口时，请注意：
   * 
   * -  解绑SSH密钥对后，您需要重启实例（[RebootInstance](https://help.aliyun.com/document_detail/25502.html)）使更改生效。  
   * -  解绑SSH密钥对后，实例默认使用用户名和密码的验证方式。
   * @summary: 调用DetachKeyPair为一台或者多台Linux实例解绑SSH密钥对。
   */
  DetachKeyPair: RequestMethods<API.DetachKeyPair.Params, API.DetachKeyPair.bodyParams, API.DetachKeyPair.APIReponse>;

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
  DetachNetworkInterface: RequestMethods<API.DetachNetworkInterface.Params, API.DetachNetworkInterface.bodyParams, API.DetachNetworkInterface.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/DisableActivation
   * ## 接口说明
   * 
   * 如果您担心已创建的激活码存在泄露的风险，可以通过该接口禁用激活码。禁用后无法再通过该激活码注册新的托管实例，但不会影响已经注册的托管实例。
   * @summary: 调用DisableActivation手动禁用指定的激活码。
   */
  DisableActivation: RequestMethods<API.DisableActivation.Params, API.DisableActivation.bodyParams, API.DisableActivation.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/EipFillParams
   * undefined
   * @deprecated
   */
  EipFillParams: RequestMethods<API.EipFillParams.Params, API.EipFillParams.bodyParams, API.EipFillParams.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/EipFillProduct
   * undefined
   * @deprecated
   */
  EipFillProduct: RequestMethods<API.EipFillProduct.Params, API.EipFillProduct.bodyParams, API.EipFillProduct.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/EipNotifyPaid
   * undefined
   * @deprecated
   */
  EipNotifyPaid: RequestMethods<API.EipNotifyPaid.Params, API.EipNotifyPaid.bodyParams, API.EipNotifyPaid.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/EnablePhysicalConnection
   * undefined
   * @deprecated
   */
  EnablePhysicalConnection: RequestMethods<API.EnablePhysicalConnection.Params, API.EnablePhysicalConnection.bodyParams, API.EnablePhysicalConnection.APIReponse>;

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
  ExportImage: RequestMethods<API.ExportImage.Params, API.ExportImage.bodyParams, API.ExportImage.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ExportSnapshot
   * undefined
   * @deprecated
   */
  ExportSnapshot: RequestMethods<API.ExportSnapshot.Params, API.ExportSnapshot.bodyParams, API.ExportSnapshot.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/GetInstanceConsoleOutput
   * - 云服务器ECS是虚拟化的云上服务，无法接入显示设备，也无法手动截屏。但是阿里云缓存了实例最近一次启动、重启或者关机时的系统命令行输出，您可以调用GetInstanceConsoleOutput获取。
   * 
   * - [已停售的实例规格](https://help.aliyun.com/document_detail/55263.html)无法获取系统命令行输出。
   * 
   * - Windows实例不支持获取系统命令行输出。
   * @summary: 获取一台实例的系统命令行输出，数据以Base64编码后返回。
   */
  GetInstanceConsoleOutput: RequestMethods<API.GetInstanceConsoleOutput.Params, API.GetInstanceConsoleOutput.bodyParams, API.GetInstanceConsoleOutput.APIReponse>;

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
  GetInstanceScreenshot: RequestMethods<API.GetInstanceScreenshot.Params, API.GetInstanceScreenshot.bodyParams, API.GetInstanceScreenshot.APIReponse>;

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
  ImportImage: RequestMethods<API.ImportImage.Params, API.ImportImage.bodyParams, API.ImportImage.APIReponse>;

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
  ImportKeyPair: RequestMethods<API.ImportKeyPair.Params, API.ImportKeyPair.bodyParams, API.ImportKeyPair.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/InstallCloudAssistant
   * ## 接口说明
   * 
   * 调用InstallCloudAssistant接口后再调用[RebootInstance](https://help.aliyun.com/document_detail/25502.html)，安装云助手Agent的操作即可生效。
   * @summary: 调用InstallCloudAssistant为一台或多台ECS实例安装云助手Agent。需要重启实例来完成安装云助手Agent的操作。
   */
  InstallCloudAssistant: RequestMethods<API.InstallCloudAssistant.Params, API.InstallCloudAssistant.bodyParams, API.InstallCloudAssistant.APIReponse>;

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
  InvokeCommand: RequestMethods<API.InvokeCommand.Params, API.InvokeCommand.bodyParams, API.InvokeCommand.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/JoinResourceGroup
   * ## 接口说明
   * 
   * 资源是您在阿里云创建的云服务实体，例如，一台ECS实例、一个ECS弹性网卡或者一份ECS镜像等都可以是资源。资源组是项目、环境或者栈的基础设施集合，在资源组里管理资源能集中监控和执行任务，免去了您在多种阿里云服务间反复查看的负担。
   * @summary: 调用JoinResourceGroup将一个ECS资源或者服务加入一个资源组。
   */
  JoinResourceGroup: RequestMethods<API.JoinResourceGroup.Params, API.JoinResourceGroup.bodyParams, API.JoinResourceGroup.APIReponse>;

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
  JoinSecurityGroup: RequestMethods<API.JoinSecurityGroup.Params, API.JoinSecurityGroup.bodyParams, API.JoinSecurityGroup.APIReponse>;

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
  LeaveSecurityGroup: RequestMethods<API.LeaveSecurityGroup.Params, API.LeaveSecurityGroup.bodyParams, API.LeaveSecurityGroup.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ListPluginStatus
   * ## 接口说明
   * 
   * 实例的云助手Agent版本不低于以下版本，才可以查询到实例内云助手插件状态：
   * - Linux：2.2.3.344。
   * - Windows：2.1.3.344。
   * @summary: 调用ListPluginStatus查询实例中云助手插件的状态。
   */
  ListPluginStatus: RequestMethods<API.ListPluginStatus.Params, API.ListPluginStatus.bodyParams, API.ListPluginStatus.APIReponse>;

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
  ListTagResources: RequestMethods<API.ListTagResources.Params, API.ListTagResources.bodyParams, API.ListTagResources.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyAutoProvisioningGroup
   * 修改弹性供应组前，请注意：
   * 
   * - 如果修改了供应组容量或者容量相关设置，供应组会在修改完成后执行一次调度任务。
   * - 如果供应组处于删除中状态，无法修改供应组。
   * @summary: 调用ModifyAutoProvisioningGroup接口修改一个弹性供应组的设置。
   */
  ModifyAutoProvisioningGroup: RequestMethods<API.ModifyAutoProvisioningGroup.Params, API.ModifyAutoProvisioningGroup.bodyParams, API.ModifyAutoProvisioningGroup.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyAutoSnapshotPolicy
   * undefined
   * @deprecated
   */
  ModifyAutoSnapshotPolicy: RequestMethods<API.ModifyAutoSnapshotPolicy.Params, API.ModifyAutoSnapshotPolicy.bodyParams, API.ModifyAutoSnapshotPolicy.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyAutoSnapshotPolicyEx
   * 调用ModifyAutoSnapshotPolicyEx修改一条自动快照策略。修改自动快照策略后，之前已应用该策略的云盘随即执行修改后的自动快照策略。
   * @summary: 调用ModifyAutoSnapshotPolicyEx修改一条自动快照策略。修改自动快照策略后，之前已应用该策略的云盘随即执行修改后的自动快照策略。
   */
  ModifyAutoSnapshotPolicyEx: RequestMethods<API.ModifyAutoSnapshotPolicyEx.Params, API.ModifyAutoSnapshotPolicyEx.bodyParams, API.ModifyAutoSnapshotPolicyEx.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyBandwidthPackageSpec
   * undefined
   * @deprecated
   */
  ModifyBandwidthPackageSpec: RequestMethods<API.ModifyBandwidthPackageSpec.Params, API.ModifyBandwidthPackageSpec.bodyParams, API.ModifyBandwidthPackageSpec.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyCapacityReservation
   * 调用ModifyCapacityReservation修改一个容量预定服务的部分信息，包括容量预定服务的名称、描述信息、失效方式以及预留的实例总数量。
   * @summary: 调用ModifyCapacityReservation修改一个容量预定服务的部分信息，包括容量预定服务的名称、描述信息、失效方式以及预留的实例总数量。
   */
  ModifyCapacityReservation: RequestMethods<API.ModifyCapacityReservation.Params, API.ModifyCapacityReservation.bodyParams, API.ModifyCapacityReservation.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyCommand
   * 调用ModifyCommand修改一条云助手命令相关参数。
   * @summary: 调用ModifyCommand修改一条云助手命令相关参数。
   */
  ModifyCommand: RequestMethods<API.ModifyCommand.Params, API.ModifyCommand.bodyParams, API.ModifyCommand.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDedicatedHostAttribute
   * - 修改CPU超卖比时，专有宿主机上的ECS实例必须为已停止（`Stopped`）状态。
   * - 修改CPU超卖比不会影响DDH的运行状态，但需注意DDH中已分配的vCPU数量不能超过修改后的总vCPU数量，否则超出部分的ECS实例将无法启动。
   * @summary: 调用ModifyDedicatedHostAttribute修改一台专有宿主机的部分信息，包括专有宿主机的名称、描述和服务不可用属性等。
   */
  ModifyDedicatedHostAttribute: RequestMethods<API.ModifyDedicatedHostAttribute.Params, API.ModifyDedicatedHostAttribute.bodyParams, API.ModifyDedicatedHostAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDedicatedHostAutoReleaseTime
   * ## 接口说明
   * 到达设置的自动释放时间后，按量付费专有宿主机会被自动释放。请确保您已经不再使用该宿主机，并已按需备份应用数据。
   * @summary: 调用ModifyDedicatedHostAutoReleaseTime为一台按量付费专有宿主机设定自动释放时间，或者取消自动释放一台按量付费专有宿主机。
   */
  ModifyDedicatedHostAutoReleaseTime: RequestMethods<API.ModifyDedicatedHostAutoReleaseTime.Params, API.ModifyDedicatedHostAutoReleaseTime.bodyParams, API.ModifyDedicatedHostAutoReleaseTime.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDedicatedHostAutoRenewAttribute
   * - 当您的包年包月专有宿主机开启自动续费功能后，到期前九天将自动续费，扣费在08:00:00（UTC +8）时间点自动执行。如果前一日扣费失败，次日继续定时执行。扣费成功或者九天之后专有宿主机到期被锁定后停止自动扣费。期间，您需要保证自己的支付方式使用额度充足即可。
   * - 包年包月的专有宿主机支持跟随宿主机内的包年包月ECS实例自动续费。详细信息，请参见AutoRenewWithEcs参数说明。
   * @summary: 调用ModifyDedicatedHostAutoRenewAttribute为一台或多台包年包月专有宿主机设置自动续费，也可以取消已设定的自动续费。
   */
  ModifyDedicatedHostAutoRenewAttribute: RequestMethods<API.ModifyDedicatedHostAutoRenewAttribute.Params, API.ModifyDedicatedHostAutoRenewAttribute.bodyParams, API.ModifyDedicatedHostAutoRenewAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDedicatedHostClusterAttribute
   * 调用ModifyDedicatedHostClusterAttribute修改一台专有宿主机集群的部分信息，包括专有宿主机集群的名称、描述信息、属性等。
   * @summary: 调用ModifyDedicatedHostClusterAttribute修改一台专有宿主机集群的部分信息，包括专有宿主机集群的名称、描述信息、属性等。
   */
  ModifyDedicatedHostClusterAttribute: RequestMethods<API.ModifyDedicatedHostClusterAttribute.Params, API.ModifyDedicatedHostClusterAttribute.bodyParams, API.ModifyDedicatedHostClusterAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDedicatedHostsChargeType
   * 调用ModifyDedicatedHostsChargeType修改专有宿主机的付费类型。
   * @summary: 调用ModifyDedicatedHostsChargeType修改专有宿主机的付费类型。
   */
  ModifyDedicatedHostsChargeType: RequestMethods<API.ModifyDedicatedHostsChargeType.Params, API.ModifyDedicatedHostsChargeType.bodyParams, API.ModifyDedicatedHostsChargeType.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDemand
   * 您可通过该接口修改实例规格需求信息，阿里云根据您的需求表单供应相关资源。
   * 仅支持报备I/O优化实例规格，以及专有网络VPC类型的ECS实例。
   * 只有在已拒绝状态，才能修改除了`DemandName`，`DemandDescription`的其他参数。
   * 
   * > 该接口正在内测中，尚未正式上线，暂时不建议使用，请您耐心等待。
   * @summary: 调用ModifyDemand修改ECS资源需求报备信息。
   */
  ModifyDemand: RequestMethods<API.ModifyDemand.Params, API.ModifyDemand.bodyParams, API.ModifyDemand.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDeploymentSetAttribute
   * 调用ModifyDeploymentSetAttribute修改一个部署集的名称和描述信息。
   * @summary: 调用ModifyDeploymentSetAttribute修改一个部署集的名称和描述信息。
   */
  ModifyDeploymentSetAttribute: RequestMethods<API.ModifyDeploymentSetAttribute.Params, API.ModifyDeploymentSetAttribute.bodyParams, API.ModifyDeploymentSetAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDiagnosticMetricSet
   * 调用ModifyDiagnosticMetricSet修改资源诊断指标集合。
   * @summary: 调用ModifyDiagnosticMetricSet修改资源诊断指标集合。
   */
  ModifyDiagnosticMetricSet: RequestMethods<API.ModifyDiagnosticMetricSet.Params, API.ModifyDiagnosticMetricSet.bodyParams, API.ModifyDiagnosticMetricSet.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyDiskAttribute
   * - 当您调用该接口时设置了不随实例释放（DeleteWithInstance=false）属性，一旦磁盘挂载的ECS实例被安全锁定且OperationLocks中标记了`"LockReason" : "security"`的锁定状态，释放实例时会忽略磁盘的DeleteWithInstance属性而被同时释放。
   * - 您可以调用`DiskIds.N`参数批量修改多个块存储的名称、描述、是否随实例释放等属性。
   * @summary: 调用ModifyDiskAttribute修改一个或多个块存储的名称、描述、是否随实例释放等属性。
   */
  ModifyDiskAttribute: RequestMethods<API.ModifyDiskAttribute.Params, API.ModifyDiskAttribute.bodyParams, API.ModifyDiskAttribute.APIReponse>;

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
  ModifyDiskChargeType: RequestMethods<API.ModifyDiskChargeType.Params, API.ModifyDiskChargeType.bodyParams, API.ModifyDiskChargeType.APIReponse>;

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
  ModifyDiskSpec: RequestMethods<API.ModifyDiskSpec.Params, API.ModifyDiskSpec.bodyParams, API.ModifyDiskSpec.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyEipAddressAttribute
   * undefined
   * @deprecated
   */
  ModifyEipAddressAttribute: RequestMethods<API.ModifyEipAddressAttribute.Params, API.ModifyEipAddressAttribute.bodyParams, API.ModifyEipAddressAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyElasticityAssurance
   * 调用ModifyElasticityAssurance修改一个弹性保障服务的名称与描述信息。
   * @summary: 调用ModifyElasticityAssurance修改一个弹性保障服务的名称与描述信息。
   */
  ModifyElasticityAssurance: RequestMethods<API.ModifyElasticityAssurance.Params, API.ModifyElasticityAssurance.bodyParams, API.ModifyElasticityAssurance.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyForwardEntry
   * undefined
   * @deprecated
   */
  ModifyForwardEntry: RequestMethods<API.ModifyForwardEntry.Params, API.ModifyForwardEntry.bodyParams, API.ModifyForwardEntry.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyHaVipAttribute
   * undefined
   * @deprecated
   */
  ModifyHaVipAttribute: RequestMethods<API.ModifyHaVipAttribute.Params, API.ModifyHaVipAttribute.bodyParams, API.ModifyHaVipAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyHpcClusterAttribute
   * 调用ModifyHpcClusterAttribute修改一个HPC集群的描述信息。
   * @summary: 调用ModifyHpcClusterAttribute修改一个HPC集群的描述信息。
   */
  ModifyHpcClusterAttribute: RequestMethods<API.ModifyHpcClusterAttribute.Params, API.ModifyHpcClusterAttribute.bodyParams, API.ModifyHpcClusterAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyImageAttribute
   * 调用ModifyImageAttribute修改一份自定义镜像的名称、描述信息、状态或镜像族系。
   * @summary: 调用ModifyImageAttribute修改一份自定义镜像的名称、描述信息、状态或镜像族系。
   */
  ModifyImageAttribute: RequestMethods<API.ModifyImageAttribute.Params, API.ModifyImageAttribute.bodyParams, API.ModifyImageAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyImageShareGroupPermission
   * undefined
   * @deprecated
   */
  ModifyImageShareGroupPermission: RequestMethods<API.ModifyImageShareGroupPermission.Params, API.ModifyImageShareGroupPermission.bodyParams, API.ModifyImageShareGroupPermission.APIReponse>;

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
  ModifyImageSharePermission: RequestMethods<API.ModifyImageSharePermission.Params, API.ModifyImageSharePermission.bodyParams, API.ModifyImageSharePermission.APIReponse>;

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
  ModifyInstanceAttachmentAttributes: RequestMethods<API.ModifyInstanceAttachmentAttributes.Params, API.ModifyInstanceAttachmentAttributes.bodyParams, API.ModifyInstanceAttachmentAttributes.APIReponse>;

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
  ModifyInstanceAttribute: RequestMethods<API.ModifyInstanceAttribute.Params, API.ModifyInstanceAttribute.bodyParams, API.ModifyInstanceAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceAutoReleaseTime
   * 调用ModifyInstanceAutoReleaseTime为一台按量付费ECS实例设定或者取消自动释放时间。设置自动释放时请谨慎操作，配置的时间到期后将自动释放ECS实例。
   * @summary: 调用ModifyInstanceAutoReleaseTime为一台按量付费ECS实例设定或者取消自动释放时间。设置自动释放时请谨慎操作，配置的时间到期后将自动释放ECS实例。
   */
  ModifyInstanceAutoReleaseTime: RequestMethods<API.ModifyInstanceAutoReleaseTime.Params, API.ModifyInstanceAutoReleaseTime.bodyParams, API.ModifyInstanceAutoReleaseTime.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceAutoRenewAttribute
   * 请确保在使用该接口前，您已充分了解[云服务器ECS](https://www.aliyun.com/price/product#/ecs/detail)的计费方式和产品定价。
   * - 自动续费扣款日为实例到期前第9天，扣费在北京时间（UTC +8）08:00:00开始执行。
   * - 如果新建实例的购买时长为一周，则会在创建成功的第一天自动扣款续费。- 如果前一日执行自动扣费失败，将会继续下一日定时继续执行，直到扣费成功或者9天之后实例到期锁定。您只需要保证自己的账号的余额或者信用额度充足即可。
   * @summary: 调用ModifyInstanceAutoRenewAttribute设置一台或多台包年包月实例的自动续费状态。为了减少您的资源到期维护成本，包年包月ECS实例可以设置自动续费。
   */
  ModifyInstanceAutoRenewAttribute: RequestMethods<API.ModifyInstanceAutoRenewAttribute.Params, API.ModifyInstanceAutoRenewAttribute.bodyParams, API.ModifyInstanceAutoRenewAttribute.APIReponse>;

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
  ModifyInstanceChargeType: RequestMethods<API.ModifyInstanceChargeType.Params, API.ModifyInstanceChargeType.bodyParams, API.ModifyInstanceChargeType.APIReponse>;

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
  ModifyInstanceDeployment: RequestMethods<API.ModifyInstanceDeployment.Params, API.ModifyInstanceDeployment.bodyParams, API.ModifyInstanceDeployment.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceMaintenanceAttributes
   * 修改实例的维护策略，策略中包含两个维护属性。
   * 
   * - 维护时间窗口：您指定的一段时间，运维只会在该时间内进行。
   * - 维护动作：您指定的实例宕机处理策略。
   * @summary: 调用ModifyInstanceMaintenanceAttributes修改实例的维护属性。
   */
  ModifyInstanceMaintenanceAttributes: RequestMethods<API.ModifyInstanceMaintenanceAttributes.Params, API.ModifyInstanceMaintenanceAttributes.bodyParams, API.ModifyInstanceMaintenanceAttributes.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceMetadataOptions
   * 调用ModifyInstanceMetadataOptions修改一台实例的元数据信息。
   * @summary: 调用ModifyInstanceMetadataOptions修改一台实例的元数据信息。
   */
  ModifyInstanceMetadataOptions: RequestMethods<API.ModifyInstanceMetadataOptions.Params, API.ModifyInstanceMetadataOptions.bodyParams, API.ModifyInstanceMetadataOptions.APIReponse>;

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
  ModifyInstanceNetworkSpec: RequestMethods<API.ModifyInstanceNetworkSpec.Params, API.ModifyInstanceNetworkSpec.bodyParams, API.ModifyInstanceNetworkSpec.APIReponse>;

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
  ModifyInstanceSpec: RequestMethods<API.ModifyInstanceSpec.Params, API.ModifyInstanceSpec.bodyParams, API.ModifyInstanceSpec.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyInstanceVncPasswd
   * - 密码长度必须是六位字符，必须且仅能包含大写、小写英文字母及阿拉伯数字三种字符。
   * - 修改密码后：
   *     - I/O优化的实例，立刻生效，无需重启实例。
   *     - 非I/O优化的实例，需要在控制台[重启实例](https://help.aliyun.com/document_detail/25440.html)或者调用API [RebootInstance](https://help.aliyun.com/document_detail/25502.html)才能生效。
   * @summary: 调用ModifyInstanceVncPasswd修改一台ECS实例的Web管理终端密码。
   */
  ModifyInstanceVncPasswd: RequestMethods<API.ModifyInstanceVncPasswd.Params, API.ModifyInstanceVncPasswd.bodyParams, API.ModifyInstanceVncPasswd.APIReponse>;

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
  ModifyInstanceVpcAttribute: RequestMethods<API.ModifyInstanceVpcAttribute.Params, API.ModifyInstanceVpcAttribute.bodyParams, API.ModifyInstanceVpcAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyLaunchTemplateDefaultVersion
   * 调用ModifyLaunchTemplateDefaultVersion切换启动模板的某个版本为该模板的默认版本。如果您在创建实例（RunInstances）时不指定模板版本号，会采用默认版本。
   * @summary: 调用ModifyLaunchTemplateDefaultVersion切换启动模板的某个版本为该模板的默认版本。如果您在创建实例（RunInstances）时不指定模板版本号，会采用默认版本。
   */
  ModifyLaunchTemplateDefaultVersion: RequestMethods<API.ModifyLaunchTemplateDefaultVersion.Params, API.ModifyLaunchTemplateDefaultVersion.bodyParams, API.ModifyLaunchTemplateDefaultVersion.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyManagedInstance
   * ## 接口说明
   * 
   * 目前调用ModifyManagedInstance接口仅支持修改一台托管实例的名称。
   * @summary: 调用ModifyManagedInstance修改一台托管实例的相关信息。
   */
  ModifyManagedInstance: RequestMethods<API.ModifyManagedInstance.Params, API.ModifyManagedInstance.bodyParams, API.ModifyManagedInstance.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyNetworkInterfaceAttribute
   * 调用ModifyNetworkInterfaceAttribute修改一个弹性网卡（ENI）的名称、描述以及所属安全组等。
   * @summary: 调用ModifyNetworkInterfaceAttribute修改一个弹性网卡（ENI）的名称、描述以及所属安全组等。
   */
  ModifyNetworkInterfaceAttribute: RequestMethods<API.ModifyNetworkInterfaceAttribute.Params, API.ModifyNetworkInterfaceAttribute.bodyParams, API.ModifyNetworkInterfaceAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyPhysicalConnectionAttribute
   * undefined
   * @deprecated
   */
  ModifyPhysicalConnectionAttribute: RequestMethods<API.ModifyPhysicalConnectionAttribute.Params, API.ModifyPhysicalConnectionAttribute.bodyParams, API.ModifyPhysicalConnectionAttribute.APIReponse>;

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
  ModifyPrefixList: RequestMethods<API.ModifyPrefixList.Params, API.ModifyPrefixList.bodyParams, API.ModifyPrefixList.APIReponse>;

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
  ModifyPrepayInstanceSpec: RequestMethods<API.ModifyPrepayInstanceSpec.Params, API.ModifyPrepayInstanceSpec.bodyParams, API.ModifyPrepayInstanceSpec.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyReservedInstanceAttribute
   * 调用ModifyReservedInstanceAttribute修改预留实例券的属性，包括名称和描述信息。
   * @summary: 调用ModifyReservedInstanceAttribute修改预留实例券的属性，包括名称和描述信息。
   */
  ModifyReservedInstanceAttribute: RequestMethods<API.ModifyReservedInstanceAttribute.Params, API.ModifyReservedInstanceAttribute.bodyParams, API.ModifyReservedInstanceAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyReservedInstanceAutoRenewAttribute
   * 调用ModifyReservedInstanceAutoRenewAttribute为一个或多个包年包月预留实例券设置自动续费，也可以取消已设定的自动续费。
   * @summary: 调用ModifyReservedInstanceAutoRenewAttribute为一个或多个包年包月预留实例券设置自动续费，也可以取消已设定的自动续费。
   */
  ModifyReservedInstanceAutoRenewAttribute: RequestMethods<API.ModifyReservedInstanceAutoRenewAttribute.Params, API.ModifyReservedInstanceAutoRenewAttribute.bodyParams, API.ModifyReservedInstanceAutoRenewAttribute.APIReponse>;

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
  ModifyReservedInstances: RequestMethods<API.ModifyReservedInstances.Params, API.ModifyReservedInstances.bodyParams, API.ModifyReservedInstances.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyRouterInterfaceAttribute
   * undefined
   * @deprecated
   */
  ModifyRouterInterfaceAttribute: RequestMethods<API.ModifyRouterInterfaceAttribute.Params, API.ModifyRouterInterfaceAttribute.bodyParams, API.ModifyRouterInterfaceAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyRouterInterfaceSpec
   * undefined
   * @deprecated
   */
  ModifyRouterInterfaceSpec: RequestMethods<API.ModifyRouterInterfaceSpec.Params, API.ModifyRouterInterfaceSpec.bodyParams, API.ModifyRouterInterfaceSpec.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifySecurityGroupAttribute
   * 调用ModifySecurityGroupAttribute修改一个安全组的名称或者描述。
   * @summary: 调用ModifySecurityGroupAttribute修改一个安全组的名称或者描述。
   */
  ModifySecurityGroupAttribute: RequestMethods<API.ModifySecurityGroupAttribute.Params, API.ModifySecurityGroupAttribute.bodyParams, API.ModifySecurityGroupAttribute.APIReponse>;

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
  ModifySecurityGroupEgressRule: RequestMethods<API.ModifySecurityGroupEgressRule.Params, API.ModifySecurityGroupEgressRule.bodyParams, API.ModifySecurityGroupEgressRule.APIReponse>;

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
  ModifySecurityGroupPolicy: RequestMethods<API.ModifySecurityGroupPolicy.Params, API.ModifySecurityGroupPolicy.bodyParams, API.ModifySecurityGroupPolicy.APIReponse>;

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
  ModifySecurityGroupRule: RequestMethods<API.ModifySecurityGroupRule.Params, API.ModifySecurityGroupRule.bodyParams, API.ModifySecurityGroupRule.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifySnapshotAttribute
   * 调用ModifySnapshotAttribute修改一份快照的名称、描述或关闭快照极速可用功能。
   * @summary: 调用ModifySnapshotAttribute修改一份快照的名称、描述或关闭快照极速可用功能。
   */
  ModifySnapshotAttribute: RequestMethods<API.ModifySnapshotAttribute.Params, API.ModifySnapshotAttribute.bodyParams, API.ModifySnapshotAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifySnapshotGroup
   * 调用ModifySnapshotGroup修改指定实例快照的名称与描述信息。
   * @summary: 调用ModifySnapshotGroup修改指定实例快照的名称与描述信息。
   */
  ModifySnapshotGroup: RequestMethods<API.ModifySnapshotGroup.Params, API.ModifySnapshotGroup.bodyParams, API.ModifySnapshotGroup.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyStorageCapacityUnitAttribute
   * 调用ModifyStorageCapacityUnitAttribute修改一个存储容量单位包SCU的名称或者描述信息。
   * @summary: 调用ModifyStorageCapacityUnitAttribute修改一个存储容量单位包SCU的名称或者描述信息。
   */
  ModifyStorageCapacityUnitAttribute: RequestMethods<API.ModifyStorageCapacityUnitAttribute.Params, API.ModifyStorageCapacityUnitAttribute.bodyParams, API.ModifyStorageCapacityUnitAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyStorageSetAttribute
   * （Beta）调用ModifyStorageSetAttribute修改一个存储集的名称或描述信息。
   * @summary: （Beta）调用ModifyStorageSetAttribute修改一个存储集的名称或描述信息。
   */
  ModifyStorageSetAttribute: RequestMethods<API.ModifyStorageSetAttribute.Params, API.ModifyStorageSetAttribute.bodyParams, API.ModifyStorageSetAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyUserBusinessBehavior
   * undefined
   * @deprecated
   */
  ModifyUserBusinessBehavior: RequestMethods<API.ModifyUserBusinessBehavior.Params, API.ModifyUserBusinessBehavior.bodyParams, API.ModifyUserBusinessBehavior.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyVRouterAttribute
   * undefined
   * @deprecated
   */
  ModifyVRouterAttribute: RequestMethods<API.ModifyVRouterAttribute.Params, API.ModifyVRouterAttribute.bodyParams, API.ModifyVRouterAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyVSwitchAttribute
   * undefined
   * @deprecated
   */
  ModifyVSwitchAttribute: RequestMethods<API.ModifyVSwitchAttribute.Params, API.ModifyVSwitchAttribute.bodyParams, API.ModifyVSwitchAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyVirtualBorderRouterAttribute
   * undefined
   * @deprecated
   */
  ModifyVirtualBorderRouterAttribute: RequestMethods<API.ModifyVirtualBorderRouterAttribute.Params, API.ModifyVirtualBorderRouterAttribute.bodyParams, API.ModifyVirtualBorderRouterAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ModifyVpcAttribute
   * undefined
   * @deprecated
   */
  ModifyVpcAttribute: RequestMethods<API.ModifyVpcAttribute.Params, API.ModifyVpcAttribute.bodyParams, API.ModifyVpcAttribute.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/PurchaseReservedInstancesOffering
   * ## 接口说明
   * 
   * - 请确保在使用该接口前，您已充分了解预留实例券的计费方式。详情请参见[预留实例券计费方式](https://help.aliyun.com/document_detail/100371.html)。
   * - 购买预留实例券前，您可以调用[DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html)查询可用实例资源。
   * @summary: 调用PurchaseReservedInstancesOffering购买一张预留实例券。预留实例券可以自动匹配对应的ECS实例，抵扣按量付费实例账单。
   */
  PurchaseReservedInstancesOffering: RequestMethods<API.PurchaseReservedInstancesOffering.Params, API.PurchaseReservedInstancesOffering.bodyParams, API.PurchaseReservedInstancesOffering.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/PurchaseStorageCapacityUnit
   * 请确保在使用该接口前，已充分了解存储容量单位包SCU的收费方式和价格。更多信息，请参见[存储容量单位包计费方式](https://help.aliyun.com/document_detail/137897.html)。
   * @summary: 调用PurchaseStorageCapacityUnit购买一个或多个存储容量单位包SCU（Storage Capacity Unit）。
   */
  PurchaseStorageCapacityUnit: RequestMethods<API.PurchaseStorageCapacityUnit.Params, API.PurchaseStorageCapacityUnit.bodyParams, API.PurchaseStorageCapacityUnit.APIReponse>;

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
  ReActivateInstances: RequestMethods<API.ReActivateInstances.Params, API.ReActivateInstances.bodyParams, API.ReActivateInstances.APIReponse>;

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
  ReInitDisk: RequestMethods<API.ReInitDisk.Params, API.ReInitDisk.bodyParams, API.ReInitDisk.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RebootInstance
   * - 您只能重启状态为**运行中**（`Running`）的ECS实例。
   * - 重启ECS实例后进入**启动中**（`Starting`）状态。
   * - 支持强制重启（`ForceStop`），强制重启等同于传统服务器的断电重启，可能丢失实例操作系统中未写入磁盘的数据。
   * - 被安全锁定的ECS实例的`OperationLocks`参数包含"LockReason": "security"时，不能重启实例。更多信息，请参见[安全锁定时的API行为](https://help.aliyun.com/document_detail/25695.html)。
   * @summary: 当一台ECS实例处于运行中（Running）状态时，调用RebootInstance可以重启这台实例。
   */
  RebootInstance: RequestMethods<API.RebootInstance.Params, API.RebootInstance.bodyParams, API.RebootInstance.APIReponse>;

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
  RebootInstances: RequestMethods<API.RebootInstances.Params, API.RebootInstances.bodyParams, API.RebootInstances.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RecoverVirtualBorderRouter
   * undefined
   * @deprecated
   */
  RecoverVirtualBorderRouter: RequestMethods<API.RecoverVirtualBorderRouter.Params, API.RecoverVirtualBorderRouter.bodyParams, API.RecoverVirtualBorderRouter.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RedeployDedicatedHost
   * DDH状态为报警状态（UnderAssessment），即故障潜伏期时，建议您调用该接口执行DDH的故障迁移，避免DDH产生永久性故障。您可以调用API [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html)查询专有宿主机的状态信息。
   * @summary: 调用RedeployDedicatedHost执行专有宿主机的故障迁移。
   */
  RedeployDedicatedHost: RequestMethods<API.RedeployDedicatedHost.Params, API.RedeployDedicatedHost.bodyParams, API.RedeployDedicatedHost.APIReponse>;

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
  RedeployInstance: RequestMethods<API.RedeployInstance.Params, API.RedeployInstance.bodyParams, API.RedeployInstance.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ReleaseCapacityReservation
   * 立即生效的容量预定服务，当释放方式为手动释放时，调用该接口可直接释放容量预定服务。
   * @summary: 调用ReleaseCapacityReservation释放容量预定服务。
   */
  ReleaseCapacityReservation: RequestMethods<API.ReleaseCapacityReservation.Params, API.ReleaseCapacityReservation.bodyParams, API.ReleaseCapacityReservation.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ReleaseDedicatedHost
   * 释放按量付费专有宿主机之前，请确保该宿主机上不存在任何ECS实例。
   * @summary: 调用ReleaseDedicatedHost释放一台按量付费专有宿主机。
   */
  ReleaseDedicatedHost: RequestMethods<API.ReleaseDedicatedHost.Params, API.ReleaseDedicatedHost.bodyParams, API.ReleaseDedicatedHost.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ReleaseEipAddress
   * undefined
   * @deprecated
   */
  ReleaseEipAddress: RequestMethods<API.ReleaseEipAddress.Params, API.ReleaseEipAddress.bodyParams, API.ReleaseEipAddress.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ReleasePublicIpAddress
   * 释放公网IP。
   * @summary: 释放公网IP。
   */
  ReleasePublicIpAddress: RequestMethods<API.ReleasePublicIpAddress.Params, API.ReleasePublicIpAddress.bodyParams, API.ReleasePublicIpAddress.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RemoveBandwidthPackageIps
   * undefined
   * @deprecated
   */
  RemoveBandwidthPackageIps: RequestMethods<API.RemoveBandwidthPackageIps.Params, API.RemoveBandwidthPackageIps.bodyParams, API.RemoveBandwidthPackageIps.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RemoveTags
   * 调用RemoveTags从实例、磁盘、快照、镜像或者安全组等解绑一个或多个标签。
   * @summary: 调用RemoveTags从实例、磁盘、快照、镜像或者安全组等解绑一个或多个标签。
   */
  RemoveTags: RequestMethods<API.RemoveTags.Params, API.RemoveTags.bodyParams, API.RemoveTags.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RenewDedicatedHosts
   * ## 接口说明
   * 
   * 续费付款时，优先使用可抵扣的代金券，且您的账号必须支持账号余额支付或信用支付。
   * @summary: 调用RenewDedicatedHosts续费一台或者多台包年包月专有宿主机。
   */
  RenewDedicatedHosts: RequestMethods<API.RenewDedicatedHosts.Params, API.RenewDedicatedHosts.bodyParams, API.RenewDedicatedHosts.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RenewInstance
   * - 请确保在使用该接口前，您已充分了解[云服务器ECS](https://www.aliyun.com/price/product#/ecs/detail)的计费方式和产品定价。
   * - 仅支持为包年包月ECS实例续费时长或者续费至统一到期日。
   * - 续费实例的时长和续费实例至统一到期日的操作不能同步执行，即续费时长参数（`Period`、`PeriodUnit`）与统一到期日参数（`ExpectedRenewDay`）必须指定其中之一，但不能同时设置。
   * - 您的账号必须支持账号余额支付或信用支付。
   * @summary: 调用RenewInstance续费一台包年包月ECS实例。
   */
  RenewInstance: RequestMethods<API.RenewInstance.Params, API.RenewInstance.bodyParams, API.RenewInstance.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/RenewReservedInstances
   * ## 接口说明
   * - 请确保在使用该接口前，您已充分了解预留实例券的计费方式。详情请参见[预留实例券计费方式](https://help.aliyun.com/document_detail/100371.html)。
   * - 您可以调用[DescribeReservedInstances](https://help.aliyun.com/document_detail/100065.html)查询已购买的预留实例券。
   * @summary: 调用RenewReservedInstances对已购买的一张或多张预留实例券进行续费。
   */
  RenewReservedInstances: RequestMethods<API.RenewReservedInstances.Params, API.RenewReservedInstances.bodyParams, API.RenewReservedInstances.APIReponse>;

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
  ReplaceSystemDisk: RequestMethods<API.ReplaceSystemDisk.Params, API.ReplaceSystemDisk.bodyParams, API.ReplaceSystemDisk.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ReportInstancesStatus
   * 调用ReportInstancesStatus反馈一台或者多台ECS实例的异常问题。您可以反馈多台ECS实例发生的相同问题，也可以反馈一台ECS实例的多块磁盘发生的相同问题。
   * @summary: 调用ReportInstancesStatus反馈一台或者多台ECS实例的异常问题。您可以反馈多台ECS实例发生的相同问题，也可以反馈一台ECS实例的多块磁盘发生的相同问题。
   */
  ReportInstancesStatus: RequestMethods<API.ReportInstancesStatus.Params, API.ReportInstancesStatus.bodyParams, API.ReportInstancesStatus.APIReponse>;

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
  ResetDisk: RequestMethods<API.ResetDisk.Params, API.ResetDisk.bodyParams, API.ResetDisk.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/ResetDisks
   * 该接口即将废弃，建议您使用[ResetDisk](https://help.aliyun.com/document_detail/25520.html)回滚云盘。
   * @summary: 调用ResetDisks通过实例快照回滚一个或多个云盘。
   */
  ResetDisks: RequestMethods<API.ResetDisks.Params, API.ResetDisks.bodyParams, API.ResetDisks.APIReponse>;

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
  ResizeDisk: RequestMethods<API.ResizeDisk.Params, API.ResizeDisk.bodyParams, API.ResizeDisk.APIReponse>;

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
  RevokeSecurityGroup: RequestMethods<API.RevokeSecurityGroup.Params, API.RevokeSecurityGroup.bodyParams, API.RevokeSecurityGroup.APIReponse>;

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
  RevokeSecurityGroupEgress: RequestMethods<API.RevokeSecurityGroupEgress.Params, API.RevokeSecurityGroupEgress.bodyParams, API.RevokeSecurityGroupEgress.APIReponse>;

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
  RunCommand: RequestMethods<API.RunCommand.Params, API.RunCommand.bodyParams, API.RunCommand.APIReponse>;

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
  RunInstances: RequestMethods<API.RunInstances.Params, API.RunInstances.bodyParams, API.RunInstances.APIReponse>;

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
  SendFile: RequestMethods<API.SendFile.Params, API.SendFile.bodyParams, API.SendFile.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/StartElasticityAssurance
   * undefined
   * @deprecated
   */
  StartElasticityAssurance: RequestMethods<API.StartElasticityAssurance.Params, API.StartElasticityAssurance.bodyParams, API.StartElasticityAssurance.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/StartImagePipelineExecution
   * - 镜像模板创建好之后，需要通过该接口执行构建镜像的任务，系统将根据镜像模板设置好的参数进行构建、分发、共享镜像。
   * - 同一个镜像模板，同一时间只能执行一个构建镜像任务。取消构建镜像任务（CancelImagePipelineExecution）可同时执行多次，并且取消构建镜像任务和构建镜像任务之间互不干扰。
   * @summary: 调用StartImagePipelineExecution通过一个镜像模板执行构建镜像的任务。
   */
  StartImagePipelineExecution: RequestMethods<API.StartImagePipelineExecution.Params, API.StartImagePipelineExecution.bodyParams, API.StartImagePipelineExecution.APIReponse>;

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
  StartInstance: RequestMethods<API.StartInstance.Params, API.StartInstance.bodyParams, API.StartInstance.APIReponse>;

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
  StartInstances: RequestMethods<API.StartInstances.Params, API.StartInstances.bodyParams, API.StartInstances.APIReponse>;

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
  StartTerminalSession: RequestMethods<API.StartTerminalSession.Params, API.StartTerminalSession.bodyParams, API.StartTerminalSession.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/StopInstance
   * - 被安全锁定的ECS实例的`OperationLocks`参数包含`"LockReason": "security"`时，不能停止实例。更多信息，请参见[安全锁定时的API行为](https://help.aliyun.com/document_detail/25695.html)。
   * - 开启VPC内实例节省停机模式后，您可以通过设置`StoppedMode=KeepCharging`开启普通停机模式，ECS实例停止后会继续计费，并为您保留ECS实例规格库存和公网IP地址。
   * @summary: 调用StopInstance停止一台运行中（Running）的ECS实例。成功调用接口后，实例从停止中（Stopping）变成已停止（Stopped）状态。
   */
  StopInstance: RequestMethods<API.StopInstance.Params, API.StopInstance.bodyParams, API.StopInstance.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/StopInstances
   * ## 接口说明
   * - 查询ECS实例信息时，如果返回数据中包含`{"OperationLocks": {"LockReason" : "security"}}`，则禁止一切操作。
   * - 按量付费实例开启VPC内实例节省停机模式后，您可以通过设置`StoppedMode=KeepCharging`开启普通停机模式，ECS实例停止后会继续计费，并为您保留ECS实例规格库存和公网IP地址。
   * - 支持批量操作，可以通过参数`BatchOptimization`设置批量操作模式。
   * @summary: 调用StopInstances停止一台或多台运行中（Running）的ECS实例。调用接口成功后，ECS实例先进入停止中（Stopping）状态，最终进入已停止（Stopped）状态。
   */
  StopInstances: RequestMethods<API.StopInstances.Params, API.StopInstances.bodyParams, API.StopInstances.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/StopInvocation
   * ## 接口说明
   * 
   * - 停止单次命令进程后，已经开始执行的实例会继续执行，未开始执行的实例将不再执行。
   * - 停止周期命令进程后，已经开始执行的命令将继续执行，但后续将不会再进行下一次的执行。
   * @summary: 调用StopInvocation停止一台或多台ECS实例中一条正在进行中（Running）的云助手命令进程。
   */
  StopInvocation: RequestMethods<API.StopInvocation.Params, API.StopInvocation.bodyParams, API.StopInvocation.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/TagResources
   * 绑定标签前，阿里云会校验资源已有标签数量。超过限制值后返回报错信息。更多详情，请参见[使用限制](https://help.aliyun.com/document_detail/25412.html)。
   * @summary: 调用TagResources为指定的ECS资源列表统一创建并绑定标签。
   */
  TagResources: RequestMethods<API.TagResources.Params, API.TagResources.bodyParams, API.TagResources.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/TerminatePhysicalConnection
   * undefined
   * @deprecated
   */
  TerminatePhysicalConnection: RequestMethods<API.TerminatePhysicalConnection.Params, API.TerminatePhysicalConnection.bodyParams, API.TerminatePhysicalConnection.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/TerminateVirtualBorderRouter
   * undefined
   * @deprecated
   */
  TerminateVirtualBorderRouter: RequestMethods<API.TerminateVirtualBorderRouter.Params, API.TerminateVirtualBorderRouter.bodyParams, API.TerminateVirtualBorderRouter.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/UnassignIpv6Addresses
   * ## 接口说明
   * 调用该接口时，您需要注意：
   * 
   * - 弹性网卡必须处于**可用**（Available）或**已附加**（InUse）状态。
   * - 操作主网卡时，网卡附加的ECS实例必须处于**运行中**（Running）或**已停止**（Stopped）状态。
   * @summary: 调用UnassignIpv6Addresses回收一个或多个弹性网卡IPv6地址。
   */
  UnassignIpv6Addresses: RequestMethods<API.UnassignIpv6Addresses.Params, API.UnassignIpv6Addresses.bodyParams, API.UnassignIpv6Addresses.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/UnassignPrivateIpAddresses
   * ## 接口说明
   * 
   * - 只支持**可用**（Available）或者**已附加**（InUse）状态下的弹性网卡。
   * 
   * - 操作主网卡时，网卡附加的实例必须处于**运行中**（Running）或者**已停止**（Stopped）状态。
   * @summary: 调用UnassignPrivateIpAddresses从一块弹性网卡删除一个或多个辅助私有IP地址。
   */
  UnassignPrivateIpAddresses: RequestMethods<API.UnassignPrivateIpAddresses.Params, API.UnassignPrivateIpAddresses.bodyParams, API.UnassignPrivateIpAddresses.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/UnassociateEipAddress
   * undefined
   * @deprecated
   */
  UnassociateEipAddress: RequestMethods<API.UnassociateEipAddress.Params, API.UnassociateEipAddress.bodyParams, API.UnassociateEipAddress.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/UnassociateHaVip
   * undefined
   * @deprecated
   */
  UnassociateHaVip: RequestMethods<API.UnassociateHaVip.Params, API.UnassociateHaVip.bodyParams, API.UnassociateHaVip.APIReponse>;

  /**
   * @link 调试链接: https://api.aliyun.com/api/Ecs/2014-05-26/UntagResources
   * 调用UntagResources为指定的ECS资源列表统一解绑标签。解绑后，如果该标签没有绑定其他任何资源，会被自动删除。
   * @summary: 调用UntagResources为指定的ECS资源列表统一解绑标签。解绑后，如果该标签没有绑定其他任何资源，会被自动删除。
   */
  UntagResources: RequestMethods<API.UntagResources.Params, API.UntagResources.bodyParams, API.UntagResources.APIReponse>;
}