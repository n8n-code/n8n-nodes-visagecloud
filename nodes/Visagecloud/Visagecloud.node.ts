import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class Visagecloud implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'visagecloud',
		name: 'N8nDevVisagecloud',
		icon: { light: 'file:./visagecloud.svg', dark: 'file:./visagecloud.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Face search, recognition & classification API. Just make a call to our REST API each time your app needs to access face recognition and classification capabilities',
		defaults: { name: 'visagecloud' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVisagecloudApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
