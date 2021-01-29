// TYPE
import { isNamed } from '../../types/index';
import { NamedTypeNode, TypeNode } from "graphql"
// UTILS
import { isArray, isRequired, isType } from '../../utils/typesCheckers';
// HANDLERS
import fieldNamedTypeHandler from './namedTypesHandlers';

/**
 * This function diference the type of the field and do the magic in nested types
 * @param type 
 * @param defaultRequiredMessage 
 */

const fieldKindHandler = (type: NamedTypeNode | TypeNode, defaultRequiredMessage: string) => {
    let result = ''
    if (isArray(type.kind)) {
        result = `yup.array().of(${fieldKindHandler(type.type, defaultRequiredMessage)})`
    }

    if (isRequired(type.kind)) {
        result = `${fieldKindHandler(type.type, defaultRequiredMessage)}.required('${defaultRequiredMessage}')`
    }


    if (isType(type.kind) && isNamed(type)) {
        result = fieldNamedTypeHandler(type.name.value)
    }

    return result
}

export default fieldKindHandler;

