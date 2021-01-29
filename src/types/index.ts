// TYPES
import { NamedTypeNode, TypeNode } from 'graphql';
import type { InputValueDefinitionNode } from 'graphql';

export interface INodes { name: string, fields: InputValueDefinitionNode[] }

export interface IConfig {
    defaultRequiredMessage?: string
    onlyWithConstrain?: Boolean
}

export const isNamed = (type: NamedTypeNode | TypeNode): type is NamedTypeNode => {
    return (type as NamedTypeNode).name !== undefined;
}