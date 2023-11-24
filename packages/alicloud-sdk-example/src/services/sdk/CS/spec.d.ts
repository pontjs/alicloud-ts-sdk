import type { API, defs } from './type.d.ts';

type OptionalBodyRequest<Params, BodyParams, Response> = BodyParams extends null | undefined
  ? (params: Params, options?: RequestInit) => Promise<Response>
  : (params: Params, options?: { body: BodyParams } & Omit<RequestInit, "body" | "params">) => Promise<Response>;

type RequestMethods<Params = any, BodyParams = any, Response = any> = {
  request: OptionalBodyRequest<Params, BodyParams, Response>;
};

export type APIs = {
  /**
   * @path: /clusters/{ClusterId}/attach
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/AttachInstances
   * 添加已有ECS实例到ACK集群。
   * @summary: 添加已有ECS实例到ACK集群。
   */
  AttachInstances: RequestMethods<API.AttachInstances.Params, API.AttachInstances.bodyParams, API.AttachInstances.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}/attach
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/AttachInstancesToNodePool
   * 添加已有节点到节点池。
   * @summary: 添加已有节点到节点池。
   */
  AttachInstancesToNodePool: RequestMethods<API.AttachInstancesToNodePool.Params, API.AttachInstancesToNodePool.bodyParams, API.AttachInstancesToNodePool.APIReponse>;

  /**
   * @path: /api/v2/clusters/{ClusterId}/upgrade/cancel
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CancelClusterUpgrade
   * 取消处于升级状态的ACK集群。
   * @summary: 取消处于升级状态的ACK集群。
   */
  CancelClusterUpgrade: RequestMethods<API.CancelClusterUpgrade.Params, API.CancelClusterUpgrade.bodyParams, API.CancelClusterUpgrade.APIReponse>;

  /**
   * @path: /clusters/{clusterId}/components/{componentId}/cancel
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CancelComponentUpgrade
   * 取消集群组件升级。
   * @summary: 取消集群组件升级。
   */
  CancelComponentUpgrade: RequestMethods<API.CancelComponentUpgrade.Params, API.CancelComponentUpgrade.bodyParams, API.CancelComponentUpgrade.APIReponse>;

  /**
   * @path: /tasks/{task_id}/cancel
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CancelTask
   * 取消集群任务执行。
   * @summary: 取消集群任务执行。
   */
  CancelTask: RequestMethods<API.CancelTask.Params, API.CancelTask.bodyParams, API.CancelTask.APIReponse>;

  /**
   * @path: /gs/workflow/{workflowName}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CancelWorkflow
   * 调用CancelWorkflow取消正在运行中的工作流。
   * @summary: 调用CancelWorkflow取消正在运行中的工作流。
   */
  CancelWorkflow: RequestMethods<API.CancelWorkflow.Params, API.CancelWorkflow.bodyParams, API.CancelWorkflow.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/controlplanelog
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CheckControlPlaneLogEnable
   * 调用CheckControlPlaneLogEnable查询ACK托管集群控制平面组件日志当前配置状态。
   * @summary: 调用CheckControlPlaneLogEnable查询ACK托管集群控制平面组件日志当前配置状态。
   */
  CheckControlPlaneLogEnable: RequestMethods<API.CheckControlPlaneLogEnable.Params, API.CheckControlPlaneLogEnable.bodyParams, API.CheckControlPlaneLogEnable.APIReponse>;

  /**
   * @path: /cluster/{ClusterId}/autoscale/config/
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CreateAutoscalingConfig
   * 调用CreateAutoscalingConfig创建自动伸缩配置。
   * @summary: 调用CreateAutoscalingConfig创建自动伸缩配置。
   */
  CreateAutoscalingConfig: RequestMethods<API.CreateAutoscalingConfig.Params, API.CreateAutoscalingConfig.bodyParams, API.CreateAutoscalingConfig.APIReponse>;

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
  CreateCluster: RequestMethods<API.CreateCluster.Params, API.CreateCluster.bodyParams, API.CreateCluster.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/nodepools
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CreateClusterNodePool
   * 调用CreateClusterNodePool为集群创建节点池。
   * @summary: 调用CreateClusterNodePool为集群创建节点池。
   */
  CreateClusterNodePool: RequestMethods<API.CreateClusterNodePool.Params, API.CreateClusterNodePool.bodyParams, API.CreateClusterNodePool.APIReponse>;

  /**
   * @path: /triggers
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CreateKubernetesTrigger
   * 为应用创建触发器。
   * @summary: 为应用创建触发器。
   */
  CreateKubernetesTrigger: RequestMethods<API.CreateKubernetesTrigger.Params, API.CreateKubernetesTrigger.bodyParams, API.CreateKubernetesTrigger.APIReponse>;

  /**
   * @path: /templates
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CreateTemplate
   * 创建一个编排模板。
   * @summary: 创建一个编排模板。
   */
  CreateTemplate: RequestMethods<API.CreateTemplate.Params, API.CreateTemplate.bodyParams, API.CreateTemplate.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/triggers
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/CreateTrigger
   * > 创建触发器仅支持Pod的重新部署。
   * @summary: 为应用创建触发器。
   */
  CreateTrigger: RequestMethods<API.CreateTrigger.Params, API.CreateTrigger.bodyParams, API.CreateTrigger.APIReponse>;

  /**
   * @path: /alert/contacts
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteAlertContact
   * undefined
   * @title: 删除报警联系人
   */
  DeleteAlertContact: RequestMethods<API.DeleteAlertContact.Params, API.DeleteAlertContact.bodyParams, API.DeleteAlertContact.APIReponse>;

  /**
   * @path: /alert/contact_groups
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteAlertContactGroup
   * undefined
   * @title: 删除报警联系人分组
   */
  DeleteAlertContactGroup: RequestMethods<API.DeleteAlertContactGroup.Params, API.DeleteAlertContactGroup.bodyParams, API.DeleteAlertContactGroup.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteCluster
   * 根据集群 ID 删除集群实例，并释放集群所有节点资源。
   * @summary: 根据集群 ID 删除集群实例，并释放集群所有节点资源。
   */
  DeleteCluster: RequestMethods<API.DeleteCluster.Params, API.DeleteCluster.bodyParams, API.DeleteCluster.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteClusterNodepool
   * 根据节点池ID，删除集群节点池。
   * @summary: 根据节点池ID，删除集群节点池。
   */
  DeleteClusterNodepool: RequestMethods<API.DeleteClusterNodepool.Params, API.DeleteClusterNodepool.bodyParams, API.DeleteClusterNodepool.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/nodes
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteClusterNodes
   * > - 移除节点会涉及Pod迁移，可能会影响业务，请在业务低峰期操作。- 操作过程中可能存在非预期风险，请提前做好相关的数据备份。- 操作过程中，后台会把当前节点设置为不可调度状态。- 移除节点仅移除Worker节点，不会移除Master节点。
   * @summary: 根据节点名称，移除集群中指定节点。
   */
  DeleteClusterNodes: RequestMethods<API.DeleteClusterNodes.Params, API.DeleteClusterNodes.bodyParams, API.DeleteClusterNodes.APIReponse>;

  /**
   * @path: /triggers/revoke/{Id}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteKubernetesTrigger
   * 根据应用触发器ID，删除应用触发器。
   * @summary: 根据应用触发器ID，删除应用触发器。
   */
  DeleteKubernetesTrigger: RequestMethods<API.DeleteKubernetesTrigger.Params, API.DeleteKubernetesTrigger.bodyParams, API.DeleteKubernetesTrigger.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/policies/{policy_name}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeletePolicyInstance
   * 调用DeletePolicyInstance在指定集群中删除策略规则实例。
   * @summary: 调用DeletePolicyInstance在指定集群中删除策略规则实例。
   */
  DeletePolicyInstance: RequestMethods<API.DeletePolicyInstance.Params, API.DeletePolicyInstance.bodyParams, API.DeletePolicyInstance.APIReponse>;

  /**
   * @path: /templates/{TemplateId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteTemplate
   * 根据编排模板ID，删除指定编排模板。
   * @summary: 根据编排模板ID，删除指定编排模板。
   */
  DeleteTemplate: RequestMethods<API.DeleteTemplate.Params, API.DeleteTemplate.bodyParams, API.DeleteTemplate.APIReponse>;

  /**
   * @path: /clusters/[cluster_id]/triggers/[Id]
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeleteTrigger
   * 删除应用触发器。
   * @summary: 删除应用触发器。
   */
  DeleteTrigger: RequestMethods<API.DeleteTrigger.Params, API.DeleteTrigger.bodyParams, API.DeleteTrigger.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/policies/{policy_name}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DeployPolicyInstance
   * 调用DeployPolicyInstance在指定集群中部署策略规则实例。
   * @summary: 调用DeployPolicyInstance在指定集群中部署策略规则实例。
   */
  DeployPolicyInstance: RequestMethods<API.DeployPolicyInstance.Params, API.DeployPolicyInstance.bodyParams, API.DeployPolicyInstance.APIReponse>;

  /**
   * @path: /gs/workflow/{workflowName}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescirbeWorkflow
   * 调用DescribeWorkflow查询单个工作流的详细信息。
   * @summary: 调用DescribeWorkflow查询单个工作流的详细信息。
   */
  DescirbeWorkflow: RequestMethods<API.DescirbeWorkflow.Params, API.DescirbeWorkflow.bodyParams, API.DescirbeWorkflow.APIReponse>;

  /**
   * @path: /clusters/components/metadata
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeAddons
   * 查询平台支持的所有组件的详情。
   * @summary: 查询平台支持的所有组件的详情。
   */
  DescribeAddons: RequestMethods<API.DescribeAddons.Params, API.DescribeAddons.bodyParams, API.DescribeAddons.APIReponse>;

  /**
   * @path: /clusters/{ClusterID}/components/{AddonName}/instance
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterAddonInstance
   * 调用DescribeClusterAddonInstance查询已安装的集群组件的版本、状态和配置等信息。
   * @summary: 调用DescribeClusterAddonInstance查询已安装的集群组件的版本、状态和配置等信息。
   */
  DescribeClusterAddonInstance: RequestMethods<API.DescribeClusterAddonInstance.Params, API.DescribeClusterAddonInstance.bodyParams, API.DescribeClusterAddonInstance.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/components/{component_id}/metadata
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterAddonMetadata
   * 调用DescribeClusterAddonMetadata查询特定集群可使用的指定组件版本信息，包括组件版本、可配置参数等。
   * @summary: 调用DescribeClusterAddonMetadata查询特定集群可使用的指定组件版本信息，包括组件版本、可配置参数等。
   */
  DescribeClusterAddonMetadata: RequestMethods<API.DescribeClusterAddonMetadata.Params, API.DescribeClusterAddonMetadata.bodyParams, API.DescribeClusterAddonMetadata.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/components/{ComponentId}/upgradestatus
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterAddonUpgradeStatus
   * 调用DescribeClusterAddonUpgradeStatus查询集群组件升级状态。
   * @summary: 调用DescribeClusterAddonUpgradeStatus查询集群组件升级状态。
   * @deprecated
   */
  DescribeClusterAddonUpgradeStatus: RequestMethods<API.DescribeClusterAddonUpgradeStatus.Params, API.DescribeClusterAddonUpgradeStatus.bodyParams, API.DescribeClusterAddonUpgradeStatus.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/components/upgradestatus
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterAddonsUpgradeStatus
   * 根据组件名称查询该组件升级状态。
   * @summary: 根据组件名称查询该组件升级状态。
   */
  DescribeClusterAddonsUpgradeStatus: RequestMethods<API.DescribeClusterAddonsUpgradeStatus.Params, API.DescribeClusterAddonsUpgradeStatus.bodyParams, API.DescribeClusterAddonsUpgradeStatus.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/components/version
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterAddonsVersion
   * 根据集群ID，查询集群中已安装的所有组件的详情。
   * @summary: 根据集群ID，查询集群中已安装的所有组件的详情。
   */
  DescribeClusterAddonsVersion: RequestMethods<API.DescribeClusterAddonsVersion.Params, API.DescribeClusterAddonsVersion.bodyParams, API.DescribeClusterAddonsVersion.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/attachscript
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterAttachScripts
   * 查询手动添加实例到集群的脚本。
   * @summary: 查询手动添加实例到集群的脚本。
   */
  DescribeClusterAttachScripts: RequestMethods<API.DescribeClusterAttachScripts.Params, API.DescribeClusterAttachScripts.bodyParams, API.DescribeClusterAttachScripts.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterDetail
   * 根据集群ID查询该集群的详情。
   * @summary: 根据集群ID查询该集群的详情。
   */
  DescribeClusterDetail: RequestMethods<API.DescribeClusterDetail.Params, API.DescribeClusterDetail.bodyParams, API.DescribeClusterDetail.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/events
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterEvents
   * 查询指定集群的事件列表。
   * @summary: 查询指定集群的事件列表。
   */
  DescribeClusterEvents: RequestMethods<API.DescribeClusterEvents.Params, API.DescribeClusterEvents.bodyParams, API.DescribeClusterEvents.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/logs
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterLogs
   * 根据集群ID，查询集群日志。
   * @summary: 根据集群ID，查询集群日志。
   */
  DescribeClusterLogs: RequestMethods<API.DescribeClusterLogs.Params, API.DescribeClusterLogs.bodyParams, API.DescribeClusterLogs.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterNodePoolDetail
   * 根据节点池ID，查询集群中该节点池的详情。
   * @summary: 根据节点池ID，查询集群中该节点池的详情。
   */
  DescribeClusterNodePoolDetail: RequestMethods<API.DescribeClusterNodePoolDetail.Params, API.DescribeClusterNodePoolDetail.bodyParams, API.DescribeClusterNodePoolDetail.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/nodepools
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterNodePools
   * 调用DescribeClusterNodePools查询集群内所有节点池详情。
   * @summary: 调用DescribeClusterNodePools查询集群内所有节点池详情。
   */
  DescribeClusterNodePools: RequestMethods<API.DescribeClusterNodePools.Params, API.DescribeClusterNodePools.bodyParams, API.DescribeClusterNodePools.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/nodes
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterNodes
   * 根据集群ID，查询该集群中的所有节点的详情。
   * @summary: 根据集群ID，查询该集群中的所有节点的详情。
   */
  DescribeClusterNodes: RequestMethods<API.DescribeClusterNodes.Params, API.DescribeClusterNodes.bodyParams, API.DescribeClusterNodes.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/resources
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterResources
   * 根据集群ID查询该集群的所有资源。
   * @summary: 根据集群ID查询该集群的所有资源。
   */
  DescribeClusterResources: RequestMethods<API.DescribeClusterResources.Params, API.DescribeClusterResources.bodyParams, API.DescribeClusterResources.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/tasks
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterTasks
   * 根据集群ID查询集群任务列表。
   * @summary: 根据集群ID查询集群任务列表。
   */
  DescribeClusterTasks: RequestMethods<API.DescribeClusterTasks.Params, API.DescribeClusterTasks.bodyParams, API.DescribeClusterTasks.APIReponse>;

  /**
   * @path: /k8s/{ClusterId}/user_config
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterUserKubeconfig
   * > KubeConfig签发证书的默认有效期为3年。在临近过期两个月内，您可以通过容器服务管理控制台或获取集群KubeConfig接口获取轮转后刷新的KubeConfig，新KubeConfig证书的有效期仍为3年，老的KubeConfig凭据在证书过期前仍然有效，请您根据控制台显示或接口返回的KubeConfig过期时间及时获取轮转凭据。
   * @summary: 根据集群ID查询访问该集群的kubeconfig配置。
   */
  DescribeClusterUserKubeconfig: RequestMethods<API.DescribeClusterUserKubeconfig.Params, API.DescribeClusterUserKubeconfig.bodyParams, API.DescribeClusterUserKubeconfig.APIReponse>;

  /**
   * @path: /api/v2/k8s/{ClusterId}/user_config
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterV2UserKubeconfig
   * 获取集群kubeconfig接口
   * @summary: 获取集群kubeconfig接口
   * @deprecated
   */
  DescribeClusterV2UserKubeconfig: RequestMethods<API.DescribeClusterV2UserKubeconfig.Params, API.DescribeClusterV2UserKubeconfig.bodyParams, API.DescribeClusterV2UserKubeconfig.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/vuls
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusterVuls
   * 查询集群安全漏洞信息。
   * @summary: 查询集群安全漏洞信息。
   */
  DescribeClusterVuls: RequestMethods<API.DescribeClusterVuls.Params, API.DescribeClusterVuls.bodyParams, API.DescribeClusterVuls.APIReponse>;

  /**
   * @path: /clusters
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClusters
   * 查看容器服务中创建的所有集群（包括Swarm和Kubernetes集群）。
   * @summary: 查看容器服务中创建的所有集群（包括Swarm和Kubernetes集群）。
   * @deprecated
   */
  DescribeClusters: RequestMethods<API.DescribeClusters.Params, API.DescribeClusters.bodyParams, API.DescribeClusters.APIReponse>;

  /**
   * @path: /api/v1/clusters
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeClustersV1
   * 查询已创建的所有ACK集群的详情。
   * @summary: 查询已创建的所有ACK集群的详情。
   */
  DescribeClustersV1: RequestMethods<API.DescribeClustersV1.Params, API.DescribeClustersV1.bodyParams, API.DescribeClustersV1.APIReponse>;

  /**
   * @path: /events
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeEvents
   * 查询用户操作事件。
   * @summary: 查询用户操作事件。
   */
  DescribeEvents: RequestMethods<API.DescribeEvents.Params, API.DescribeEvents.bodyParams, API.DescribeEvents.APIReponse>;

  /**
   * @path: /k8s/{ClusterId}/external/agent/deployment
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeExternalAgent
   * 关于集群接入的更多信息，请参见[注册外部Kubernetes集群](https://help.aliyun.com/document_detail/121053.html)。
   * @summary: 根据集群ID查询集群中部署注册集群的代理配置。
   */
  DescribeExternalAgent: RequestMethods<API.DescribeExternalAgent.Params, API.DescribeExternalAgent.bodyParams, API.DescribeExternalAgent.APIReponse>;

  /**
   * @path: /api/v1/metadata/versions
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeKubernetesVersionMetadata
   * 查询ACK支持的Kubernetes版本详情。
   * @summary: 查询ACK支持的Kubernetes版本详情。
   */
  DescribeKubernetesVersionMetadata: RequestMethods<API.DescribeKubernetesVersionMetadata.Params, API.DescribeKubernetesVersionMetadata.bodyParams, API.DescribeKubernetesVersionMetadata.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/nodepools/{nodepool_id}/vuls
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeNodePoolVuls
   * 查询指定集群节点池的漏洞列表。
   * @summary: 查询指定集群节点池的漏洞列表。
   */
  DescribeNodePoolVuls: RequestMethods<API.DescribeNodePoolVuls.Params, API.DescribeNodePoolVuls.bodyParams, API.DescribeNodePoolVuls.APIReponse>;

  /**
   * @path: /policies
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribePolicies
   * 调用DescribePolicies列举策略治理规则库列表。
   * @summary: 调用DescribePolicies列举策略治理规则库列表。
   */
  DescribePolicies: RequestMethods<API.DescribePolicies.Params, API.DescribePolicies.bodyParams, API.DescribePolicies.APIReponse>;

  /**
   * @path: /policies/{policy_name}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribePolicyDetails
   * 获取策略规则模板详情。
   * @summary: 获取策略规则模板详情。
   */
  DescribePolicyDetails: RequestMethods<API.DescribePolicyDetails.Params, API.DescribePolicyDetails.bodyParams, API.DescribePolicyDetails.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/policygovernance
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribePolicyGovernanceInCluster
   * 调用DescribePolicyGovernanceInCluster获取集群策略治理详情。
   * @summary: 调用DescribePolicyGovernanceInCluster获取集群策略治理详情。
   */
  DescribePolicyGovernanceInCluster: RequestMethods<API.DescribePolicyGovernanceInCluster.Params, API.DescribePolicyGovernanceInCluster.bodyParams, API.DescribePolicyGovernanceInCluster.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/policies
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribePolicyInstances
   * 调用DescribePolicyInstances获取集群中当前部署的策略实例。
   * @summary: 调用DescribePolicyInstances获取集群中当前部署的策略实例。
   */
  DescribePolicyInstances: RequestMethods<API.DescribePolicyInstances.Params, API.DescribePolicyInstances.bodyParams, API.DescribePolicyInstances.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/policies/status
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribePolicyInstancesStatus
   * 获取集群当前不同策略类型对应的实例部署状态，包括每种策略规则对应开启的实例计数，以及不同治理等级下开启的策略种类计数。
   * @summary: 获取集群当前不同策略类型对应的实例部署状态，包括每种策略规则对应开启的实例计数，以及不同治理等级下开启的策略种类计数。
   */
  DescribePolicyInstancesStatus: RequestMethods<API.DescribePolicyInstancesStatus.Params, API.DescribePolicyInstancesStatus.bodyParams, API.DescribePolicyInstancesStatus.APIReponse>;

  /**
   * @path: /k8s/{ClusterId}/users/{Uid}/user_config
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeSubaccountK8sClusterUserConfig
   * > 该接口只允许被阿里云账号调用。
   * @summary: 使用主账号调用DescribeSubaccountK8sClusterUserConfig，获取包含账号内指定RAM用户或角色身份信息的Kubernetes集群的KubeConfig凭证。
   */
  DescribeSubaccountK8sClusterUserConfig: RequestMethods<API.DescribeSubaccountK8sClusterUserConfig.Params, API.DescribeSubaccountK8sClusterUserConfig.bodyParams, API.DescribeSubaccountK8sClusterUserConfig.APIReponse>;

  /**
   * @path: /tasks/{task_id}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeTaskInfo
   * 根据任务ID，查询该任务执行详情。
   * @summary: 根据任务ID，查询该任务执行详情。
   */
  DescribeTaskInfo: RequestMethods<API.DescribeTaskInfo.Params, API.DescribeTaskInfo.bodyParams, API.DescribeTaskInfo.APIReponse>;

  /**
   * @path: /templates/{TemplateId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeTemplateAttribute
   * 根据编排模板ID，查询该编排模板的详情。
   * @summary: 根据编排模板ID，查询该编排模板的详情。
   */
  DescribeTemplateAttribute: RequestMethods<API.DescribeTemplateAttribute.Params, API.DescribeTemplateAttribute.bodyParams, API.DescribeTemplateAttribute.APIReponse>;

  /**
   * @path: /templates
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeTemplates
   * 查询已创建的所有编排模板详情。
   * @summary: 查询已创建的所有编排模板详情。
   */
  DescribeTemplates: RequestMethods<API.DescribeTemplates.Params, API.DescribeTemplates.bodyParams, API.DescribeTemplates.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/triggers
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeTrigger
   * 查询指定的触发器。
   * @summary: 查询指定的触发器。
   */
  DescribeTrigger: RequestMethods<API.DescribeTrigger.Params, API.DescribeTrigger.bodyParams, API.DescribeTrigger.APIReponse>;

  /**
   * @path: /api/v2/k8s/{ClusterId}/namespaces
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeUserClusterNamespaces
   * 列举用户集群命名空间
   * @summary: 列举用户集群命名空间
   */
  DescribeUserClusterNamespaces: RequestMethods<API.DescribeUserClusterNamespaces.Params, API.DescribeUserClusterNamespaces.bodyParams, API.DescribeUserClusterNamespaces.APIReponse>;

  /**
   * @path: /permissions/users/{uid}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeUserPermission
   * 查询指定RAM用户的集群授权信息。
   * @summary: 查询指定RAM用户的集群授权信息。
   */
  DescribeUserPermission: RequestMethods<API.DescribeUserPermission.Params, API.DescribeUserPermission.bodyParams, API.DescribeUserPermission.APIReponse>;

  /**
   * @path: /quota
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeUserQuota
   * 查询集群及节点配额。
   * @summary: 查询集群及节点配额。
   */
  DescribeUserQuota: RequestMethods<API.DescribeUserQuota.Params, API.DescribeUserQuota.bodyParams, API.DescribeUserQuota.APIReponse>;

  /**
   * @path: /gs/workflows
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/DescribeWorkflows
   * 调用DescribeWorkflows查询已创建的所有工作流。
   * @summary: 调用DescribeWorkflows查询已创建的所有工作流。
   */
  DescribeWorkflows: RequestMethods<API.DescribeWorkflows.Params, API.DescribeWorkflows.bodyParams, API.DescribeWorkflows.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/nodepools/{nodepool_id}/vuls/fix
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/FixNodePoolVuls
   * 1. 节点池CVE修复基于云安全中心提供，您需要购买云安全中心旗舰版（容器版）才能正常使用。
   * 2. 部分CVE修复需要重启您的节点，容器服务会在您的节点重启前执行本节点的排水工作，请确保集群有足够的节点空余资源用于排水，例如提前扩容节点池。
   * 3. CVE的兼容性由云安全中心保证，您需要关注您的应用与CVE的兼容性，您可以在修复过程中随时暂停或者取消修复。
   * 4. CVE修复是分批次进行的，点击暂停或者取消CVE修复后，已经下发了修复任务的批次会继续执行直到完成，未下发的批次会被暂停任务下发或取消任务下发。
   * @summary: 自动修复指定集群节点池的漏洞。
   */
  FixNodePoolVuls: RequestMethods<API.FixNodePoolVuls.Params, API.FixNodePoolVuls.bodyParams, API.FixNodePoolVuls.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/checks/{check_id}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/GetClusterCheck
   * 使用GetClusterCheck查询指定的集群检查状态和结果。
   * @summary: 使用GetClusterCheck查询指定的集群检查状态和结果。
   */
  GetClusterCheck: RequestMethods<API.GetClusterCheck.Params, API.GetClusterCheck.bodyParams, API.GetClusterCheck.APIReponse>;

  /**
   * @path: /triggers/{ClusterId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/GetKubernetesTrigger
   * 根据应用名称查询该应用的触发器。
   * @summary: 根据应用名称查询该应用的触发器。
   */
  GetKubernetesTrigger: RequestMethods<API.GetKubernetesTrigger.Params, API.GetKubernetesTrigger.bodyParams, API.GetKubernetesTrigger.APIReponse>;

  /**
   * @path: /api/v2/clusters/{ClusterId}/upgrade/status
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/GetUpgradeStatus
   * 根据集群ID，查询该集群的升级状态。
   * @summary: 根据集群ID，查询该集群的升级状态。
   */
  GetUpgradeStatus: RequestMethods<API.GetUpgradeStatus.Params, API.GetUpgradeStatus.bodyParams, API.GetUpgradeStatus.APIReponse>;

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
  GrantPermissions: RequestMethods<API.GrantPermissions.Params, API.GrantPermissions.bodyParams, API.GrantPermissions.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/components/install
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/InstallClusterAddons
   * 为集群安装组件。
   * @summary: 为集群安装组件。
   */
  InstallClusterAddons: RequestMethods<API.InstallClusterAddons.Params, API.InstallClusterAddons.bodyParams, API.InstallClusterAddons.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/checks
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ListClusterChecks
   * 使用ListClusterChecks查询指定集群的全部集群检查。
   * @summary: 使用ListClusterChecks查询指定集群的全部集群检查。
   */
  ListClusterChecks: RequestMethods<API.ListClusterChecks.Params, API.ListClusterChecks.bodyParams, API.ListClusterChecks.APIReponse>;

  /**
   * @path: /tags
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ListTagResources
   * 根据集群ID，查询指定集群资源的标签。
   * @summary: 根据集群ID，查询指定集群资源的标签。
   */
  ListTagResources: RequestMethods<API.ListTagResources.Params, API.ListTagResources.bodyParams, API.ListTagResources.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/migrate
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/MigrateCluster
   * 调用MigrateCluster将集群从标准托管版迁移至Pro托管版。
   * @summary: 调用MigrateCluster将集群从标准托管版迁移至Pro托管版。
   */
  MigrateCluster: RequestMethods<API.MigrateCluster.Params, API.MigrateCluster.bodyParams, API.MigrateCluster.APIReponse>;

  /**
   * @path: /api/v2/clusters/{ClusterId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ModifyCluster
   * 根据集群ID修改该集群配置。
   * @summary: 根据集群ID修改该集群配置。
   */
  ModifyCluster: RequestMethods<API.ModifyCluster.Params, API.ModifyCluster.bodyParams, API.ModifyCluster.APIReponse>;

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
  ModifyClusterAddon: RequestMethods<API.ModifyClusterAddon.Params, API.ModifyClusterAddon.bodyParams, API.ModifyClusterAddon.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ModifyClusterNodePool
   * 调用ModifyClusterNodePool更新节点配置。
   * @summary: 调用ModifyClusterNodePool更新节点配置。
   */
  ModifyClusterNodePool: RequestMethods<API.ModifyClusterNodePool.Params, API.ModifyClusterNodePool.bodyParams, API.ModifyClusterNodePool.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/tags
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ModifyClusterTags
   * 根据集群ID修改该集群的集群标签。
   * @summary: 根据集群ID修改该集群的集群标签。
   */
  ModifyClusterTags: RequestMethods<API.ModifyClusterTags.Params, API.ModifyClusterTags.bodyParams, API.ModifyClusterTags.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}/node_config
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ModifyNodePoolNodeConfig
   * > ACK支持修改节点池内节点的kubelet配置。修改完成后，节点池的节点会自动生效，节点池新增节点也将使用新的配置。
   * @summary: 修改节点池节点配置信息。
   */
  ModifyNodePoolNodeConfig: RequestMethods<API.ModifyNodePoolNodeConfig.Params, API.ModifyNodePoolNodeConfig.bodyParams, API.ModifyNodePoolNodeConfig.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/policies/{policy_name}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ModifyPolicyInstance
   * 调用ModifyPolicyInstance在指定集群中更新策略规则实例。
   * @summary: 调用ModifyPolicyInstance在指定集群中更新策略规则实例。
   */
  ModifyPolicyInstance: RequestMethods<API.ModifyPolicyInstance.Params, API.ModifyPolicyInstance.bodyParams, API.ModifyPolicyInstance.APIReponse>;

  /**
   * @path: /service/open
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/OpenAckService
   * - 阿里云账号（主账号）可以开通容器服务ACK。
   * - RAM用户（子账号）有AdministratorAccess权限的子账号可以开通服务。
   * @summary: 调用OpenAckService接口开通容器服务ACK。
   */
  OpenAckService: RequestMethods<API.OpenAckService.Params, API.OpenAckService.bodyParams, API.OpenAckService.APIReponse>;

  /**
   * @path: /api/v2/clusters/{ClusterId}/upgrade/pause
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/PauseClusterUpgrade
   * 暂停用户集群升级。
   * @summary: 暂停用户集群升级。
   */
  PauseClusterUpgrade: RequestMethods<API.PauseClusterUpgrade.Params, API.PauseClusterUpgrade.bodyParams, API.PauseClusterUpgrade.APIReponse>;

  /**
   * @path: /clusters/{clusterid}/components/{componentid}/pause
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/PauseComponentUpgrade
   * 调用PauseComponentUpgrade暂停组件升级。
   * @summary: 调用PauseComponentUpgrade暂停组件升级。
   */
  PauseComponentUpgrade: RequestMethods<API.PauseComponentUpgrade.Params, API.PauseComponentUpgrade.bodyParams, API.PauseComponentUpgrade.APIReponse>;

  /**
   * @path: /tasks/{task_id}/pause
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/PauseTask
   * 暂停执行中的集群任务。
   * @summary: 暂停执行中的集群任务。
   */
  PauseTask: RequestMethods<API.PauseTask.Params, API.PauseTask.bodyParams, API.PauseTask.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}/nodes
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/RemoveNodePoolNodes
   * > - 移除节点会涉及Pod迁移，可能会影响业务，请在业务低峰期操作。- 操作过程中可能存在非预期风险，请提前做好相关的数据备份。- 操作过程中，后台会把当前节点设置为不可调度状态。- 移除节点仅移除Worker节点，不会移除Master节点。
   * @summary: 移除节点池内的节点。
   */
  RemoveNodePoolNodes: RequestMethods<API.RemoveNodePoolNodes.Params, API.RemoveNodePoolNodes.bodyParams, API.RemoveNodePoolNodes.APIReponse>;

  /**
   * @path: /gs/workflow/{workflowName}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/RemoveWorkflow
   * 调用RemoveWorkflow删除某个指定工作流。
   * @summary: 调用RemoveWorkflow删除某个指定工作流。
   */
  RemoveWorkflow: RequestMethods<API.RemoveWorkflow.Params, API.RemoveWorkflow.bodyParams, API.RemoveWorkflow.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/nodepools/{nodepool_id}/repair
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/RepairClusterNodePool
   * 调用RepairClusterNodePool修复指定的托管节点池内指定节点存在的问题。
   * @summary: 调用RepairClusterNodePool修复指定的托管节点池内指定节点存在的问题。
   */
  RepairClusterNodePool: RequestMethods<API.RepairClusterNodePool.Params, API.RepairClusterNodePool.bodyParams, API.RepairClusterNodePool.APIReponse>;

  /**
   * @path: /clusters/{clusterid}/components/{componentid}/resume
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ResumeComponentUpgrade
   * 调用ResumeComponentUpgrade重新启动被暂停的组件升级任务。
   * @summary: 调用ResumeComponentUpgrade重新启动被暂停的组件升级任务。
   */
  ResumeComponentUpgrade: RequestMethods<API.ResumeComponentUpgrade.Params, API.ResumeComponentUpgrade.bodyParams, API.ResumeComponentUpgrade.APIReponse>;

  /**
   * @path: /tasks/{task_id}/resume
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ResumeTask
   * 恢复已暂停的集群任务。
   * @summary: 恢复已暂停的集群任务。
   */
  ResumeTask: RequestMethods<API.ResumeTask.Params, API.ResumeTask.bodyParams, API.ResumeTask.APIReponse>;

  /**
   * @path: /api/v2/clusters/{ClusterId}/upgrade/resume
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ResumeUpgradeCluster
   * 根据集群ID，恢复升级处于升级暂停状态的集群。
   * @summary: 根据集群ID，恢复升级处于升级暂停状态的集群。
   */
  ResumeUpgradeCluster: RequestMethods<API.ResumeUpgradeCluster.Params, API.ResumeUpgradeCluster.bodyParams, API.ResumeUpgradeCluster.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/checks
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/RunClusterCheck
   * 使用RunClusterCheck发起集群检查，例如集群升级检查等
   * @summary: 使用RunClusterCheck发起集群检查，例如集群升级检查等
   */
  RunClusterCheck: RequestMethods<API.RunClusterCheck.Params, API.RunClusterCheck.bodyParams, API.RunClusterCheck.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ScaleClusterNodePool
   * 根据节点池ID，扩容节点池节点。
   * @summary: 根据节点池ID，扩容节点池节点。
   */
  ScaleClusterNodePool: RequestMethods<API.ScaleClusterNodePool.Params, API.ScaleClusterNodePool.bodyParams, API.ScaleClusterNodePool.APIReponse>;

  /**
   * @path: /clusters/{cluster_id}/vuls/scan
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/ScanClusterVuls
   * 扫描集群安全漏洞。
   * @summary: 扫描集群安全漏洞。
   */
  ScanClusterVuls: RequestMethods<API.ScanClusterVuls.Params, API.ScanClusterVuls.bodyParams, API.ScanClusterVuls.APIReponse>;

  /**
   * @path: /alert/{ClusterId}/alert_rule/start
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/StartAlert
   * undefined
   * @title: 启动报警规则
   */
  StartAlert: RequestMethods<API.StartAlert.Params, API.StartAlert.bodyParams, API.StartAlert.APIReponse>;

  /**
   * @path: /gs/workflow
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/StartWorkflow
   * 调用StartWorkflow创建一个新的基因工作流。
   * @summary: 调用StartWorkflow创建一个新的基因工作流。
   */
  StartWorkflow: RequestMethods<API.StartWorkflow.Params, API.StartWorkflow.bodyParams, API.StartWorkflow.APIReponse>;

  /**
   * @path: /alert/{ClusterId}/alert_rule/stop
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/StopAlert
   * 停止ACK报警中心中报警规则，停止整个报警规则集分组、单个报警规则。
   * @summary: 停止ACK报警中心中报警规则，停止整个报警规则集分组、单个报警规则。
   */
  StopAlert: RequestMethods<API.StopAlert.Params, API.StopAlert.bodyParams, API.StopAlert.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/sync_nodepools
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/SyncClusterNodePool
   * 同步节点池，包含节点池元数据、节点池内节点信息等。
   * @summary: 同步节点池，包含节点池元数据、节点池内节点信息等。
   */
  SyncClusterNodePool: RequestMethods<API.SyncClusterNodePool.Params, API.SyncClusterNodePool.bodyParams, API.SyncClusterNodePool.APIReponse>;

  /**
   * @path: /tags
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/TagResources
   * 调用TagResources为指定的集群绑定特定标签。
   * @summary: 调用TagResources为指定的集群绑定特定标签。
   */
  TagResources: RequestMethods<API.TagResources.Params, API.TagResources.bodyParams, API.TagResources.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/components/uninstall
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UnInstallClusterAddons
   * 根据组件名称，卸载指定集群的组件。
   * @summary: 根据组件名称，卸载指定集群的组件。
   */
  UnInstallClusterAddons: RequestMethods<API.UnInstallClusterAddons.Params, API.UnInstallClusterAddons.bodyParams, API.UnInstallClusterAddons.APIReponse>;

  /**
   * @path: /tags
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UntagResources
   * 调用UntagResources为指定的集群解绑标签。
   * @summary: 调用UntagResources为指定的集群解绑标签。
   */
  UntagResources: RequestMethods<API.UntagResources.Params, API.UntagResources.bodyParams, API.UntagResources.APIReponse>;

  /**
   * @path: /alert/{ClusterId}/alert_rule/contact_groups
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UpdateContactGroupForAlert
   * undefined
   * @title: 更新报警项联系人分组
   */
  UpdateContactGroupForAlert: RequestMethods<API.UpdateContactGroupForAlert.Params, API.UpdateContactGroupForAlert.bodyParams, API.UpdateContactGroupForAlert.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/controlplanelog
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UpdateControlPlaneLog
   * 调用UpdateControlPlaneLog修改ACK托管集群控制平面组件日志配置。
   * @summary: 调用UpdateControlPlaneLog修改ACK托管集群控制平面组件日志配置。
   */
  UpdateControlPlaneLog: RequestMethods<API.UpdateControlPlaneLog.Params, API.UpdateControlPlaneLog.bodyParams, API.UpdateControlPlaneLog.APIReponse>;

  /**
   * @path: /k8s/{ClusterId}/user_config/expire
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UpdateK8sClusterUserConfigExpire
   * > - 该接口只允许被主账号调用。- 如果吊销了您在该集群上使用的KubeConfig凭证，设置在该集群KubeConfig自定义过期时间也会被重置，您需要调用该接口重新设置。
   * 
   * 
   * @summary: 调用UpdateK8sClusterUserConfigExpire更新用户证书过期时间。
   */
  UpdateK8sClusterUserConfigExpire: RequestMethods<API.UpdateK8sClusterUserConfigExpire.Params, API.UpdateK8sClusterUserConfigExpire.bodyParams, API.UpdateK8sClusterUserConfigExpire.APIReponse>;

  /**
   * @path: /templates/{TemplateId}
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UpdateTemplate
   * 根据编排模板ID，更新编排模板。
   * @summary: 根据编排模板ID，更新编排模板。
   */
  UpdateTemplate: RequestMethods<API.UpdateTemplate.Params, API.UpdateTemplate.bodyParams, API.UpdateTemplate.APIReponse>;

  /**
   * @path: /api/v2/clusters/{ClusterId}/upgrade
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UpgradeCluster
   * 根据集群ID，升级指定集群。
   * @summary: 根据集群ID，升级指定集群。
   */
  UpgradeCluster: RequestMethods<API.UpgradeCluster.Params, API.UpgradeCluster.bodyParams, API.UpgradeCluster.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/components/upgrade
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UpgradeClusterAddons
   * 根据组件名称，将指定组件升级到指定版本。
   * @summary: 根据组件名称，将指定组件升级到指定版本。
   */
  UpgradeClusterAddons: RequestMethods<API.UpgradeClusterAddons.Params, API.UpgradeClusterAddons.bodyParams, API.UpgradeClusterAddons.APIReponse>;

  /**
   * @path: /clusters/{ClusterId}/nodepools/{NodepoolId}/upgrade
   * @link 调试链接: https://api.aliyun.com/api/CS/2015-12-15/UpgradeClusterNodepool
   * 通过UpgradeClusterNodepool可升级指定集群节点池内节点的Kubernetes版本、操作系统版本或容器运行时版本。
   * @summary: 升级指定集群节点池的Kubernetes版本、操作系统版本或容器运行时版本。
   */
  UpgradeClusterNodepool: RequestMethods<API.UpgradeClusterNodepool.Params, API.UpgradeClusterNodepool.bodyParams, API.UpgradeClusterNodepool.APIReponse>;
}