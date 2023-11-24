import {
	createAlicloudSDKClient,
	AlicloudSDKConfig,
} from "pontx-alicloud-sdk-core";

import type { APIs as EcsAPITypes } from "./services/sdk/Ecs/spec";
import EcsSpecJSON from "./services/sdk/Ecs/api-lock.json";

import type { APIs as CSAPITypes } from "./services/sdk/CS/spec";
import CSSpecJSON from "./services/sdk/Ecs/api-lock.json";

const config = {
	accessKeyId: "",
	accessKeySecret: "",
	endpoint: "",
} as AlicloudSDKConfig;

export const EcsAPIs =
	createAlicloudSDKClient<EcsAPITypes>(EcsSpecJSON)(config);

export const CSAPIs = createAlicloudSDKClient<CSAPITypes>(CSSpecJSON)(config);

EcsAPIs.DescribeRegions.request({
	ResourceType: "instance",
}).then((res) => {
	console.log(res.Regions[0]?.RegionId);
});

CSAPIs.ListTagResources.request({
	resource_ids: [],
	region_id: "cn-hangzhou",
	resource_type: "instance",
}).then((res) => {
	console.log(res.tag_resources?.tag_resource?.[0]?.tag_key);
});
