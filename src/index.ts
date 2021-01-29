// VENDOR
import { GraphQLSchema } from 'graphql';
// HANDLERS
import nodesHandler from './handlers/node/index';
import schemaHandler from './handlers/schema/index';
// TYPES
import { IConfig } from './types/index';


export const plugin = (schema: GraphQLSchema, documents: any, config: IConfig) => {
    // Cada nodo pasa a ser un schema de yup
    const nodes = schemaHandler(schema, config.onlyWithConstrain)
    const parsedNodes = nodesHandler(nodes, config.defaultRequiredMessage)
    return `import * as yup from 'yup'\n\n ${parsedNodes}`;
}

