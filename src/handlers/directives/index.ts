// TYPE
import { DirectiveNode } from "graphql"
// CONSTANTS
import { DIRECTIVE_NAME } from '../../utils/constants';

/**
 * This function find the directive and if it field has it 
 * obtain the arguments
 * 
 * Important thing, if you want to add another type of argument like objets or null
 * you have to handle that case here
 */
const directiveHandler = (directives: readonly DirectiveNode[] = []): { requiredMessage: string | undefined, extraValidations: Record<string, any> } => {
    let result: any = {}
    const directive = directives.find(directive => directive.name.value === DIRECTIVE_NAME)

    if (directive) {
        directive.arguments?.forEach(item => {
            let value = (item.value as any).value

            if (item.value.kind === 'IntValue') {
                value = parseInt(value)
            }

            if (item.value.kind === 'FloatValue') {
                value = parseFloat(value)
            }

            result[item.name.value] = value
        })
    }

    if ('requiredMessage' in result) {
        const { requiredMessage, ...extraValidations } = result
        result = { requiredMessage, extraValidations }
    } else {
        result = { extraValidations: result }
    }

    return result
}

export default directiveHandler