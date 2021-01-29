// HANDLERS
import fieldsHandler from '../fields'
// TYPES
import { INodes } from '../../types/index';

/**
 * This functions handle all nodes
 * @param nodes 
 */
const nodesHandler = (nodes: INodes[], defaultRequiredMessage?: string) => {
    return nodes.map(({ name, fields }) => {
        const fieldsYup = fieldsHandler(fields, defaultRequiredMessage)
        return `export const ${name}Schema = yup.object().shape({\n${fieldsYup}\n})`
    }).join(';\n\n')
}

export default nodesHandler