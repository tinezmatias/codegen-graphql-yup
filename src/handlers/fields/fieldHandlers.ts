// TYPES
import { InputValueDefinitionNode } from 'graphql';
// HANDLER
import fieldKindHandler from './kindsHandler';
import directiveHandler from '../directives/index';

/**
 * This function has to parse the fields to string, and add the arguments from directives
 * 
 * From schema
 * @param field 
 * From config user config
 * @param defaultRequiredMessage 
 */
const fieldHandler = (field: InputValueDefinitionNode, defaultRequiredMessage?: string) => {
    const fieldName = field.name.value
    const fieldType = field.type

    const { extraValidations, requiredMessage } = directiveHandler(field.directives)

    const reqMessage = requiredMessage || defaultRequiredMessage || ''
    let arg = fieldKindHandler(fieldType, reqMessage)


    for (const key in extraValidations) {
        if (Object.prototype.hasOwnProperty.call(extraValidations, key)) {
            const value = extraValidations[key];
            if (typeof value === 'string') {
                arg = `${arg}.${key}('${value}')`
            } else {
                arg = `${arg}.${key}(${value})`
            }
        }
    }
    return `${fieldName}: ${arg}`
}

export default fieldHandler





