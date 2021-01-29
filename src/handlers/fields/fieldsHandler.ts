// TYPES
import { InputValueDefinitionNode } from 'graphql';
// HANDLERS
import fieldHandler from './fieldHandlers';

/**
 * This functions handle all fields by node
 * @param nodes 
 */
const fieldsHandler = (fields: InputValueDefinitionNode[], defaultRequiredMessage?: string) => {
    return fields.map((field) => fieldHandler(field, defaultRequiredMessage)).join(',\n')
}

export default fieldsHandler