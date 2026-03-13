import e, { application, request, response } from "express";

const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API ordem de serviços',
        description: 'Documentação da API de ordem_servico',
        version: '1.0.0'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'local host'
        }
    ],
    tags: [
        { name: 'Usuários', description: 'Operações relacionadas aos usuários' },
        { name: 'Departamentos', description: 'Operações relacionadas aos departamentos' },
        { name: 'ordem_servico', description: 'Operações relacionadas às ordem_servico' }

    ],
    paths: {
        '/usuarios': {
            get: {
                tags: ['Usuários'],
                summary: 'Listar usuários',
                responses: {
                    '200': {
                        description: 'dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        type: { $ref: "#/components/schemas/Lista_Usuarios" },
                                    }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Usuários'],
                summary: 'Cadastrar usuário',
                description: 'Recebe nome, email e senha do usuário para cadastro',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Cadastro_Usuarios'
                            }
                        }
                    }
                },
                responses: {
                    '201': {
                        description: 'Usuário cadastrado com sucesso',
                    },
                    '400': {
                        description: 'Erro na requisição(preencha todos os campos)'
                    },
                    '500': {
                        description: 'Erro interno do servidor'
                    }
                }
            }
        },
        '/usuarios/{id_usuario}': {
            put: {
                tags: ["Usuários"],
                summary: "atualizar usuario completo",
                description: `Atualizar todos os campos de um usuario existente, sen necessario
                enviar todos os campos(nome, email, senha)`,
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        require: true,
                        description: "ID do usuario a ser atualizado",
                        schema: { type: "integer" },
                        example: 1
                    }
                ],
                requestbody: {
                    require: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/shemas/atualização_Usuario" }
                        }
                    }

                },
                responses: {
                    200: {
                        description: "usuario atualizado com sucesso",
                        content: { "aplication/json": { example: "usuario nao encontrado" } }

                    },
                    404: {},
                    500: {
                        description: "error no servidor"
                    }
                }

            }
        },
        '/departamentos': {
            get: {
                tags: ['Departamentos'],
                summary: 'Listar departamentos',
                responses: {
                    '200': {
                        description: 'dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        type: { $ref: "#/components/schemas/Lista_Usuarios" },
                                    }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Departamentos'],
                summary: 'Cadastrar departamento',
                description: 'Recebe nome e descrição do departamento para cadastro',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Cadastro_Departamentos'
                            }
                        }
                    }
                },
                responses: {
                    '201': {
                        description: 'Departamento cadastrado com sucesso',
                    },
                    '400': {
                        description: 'Erro na requisição(preencha todos os campos)'
                    },
                    '500': {
                        description: 'Erro interno do servidor'
                    }
                }
            },
            put: {
                tags: ["Departamentos"],
                summary: "atualizar departamento completo",
                description: `Atualizar todos os campos de um departamento existente, sendo necessario
                enviar todos os campos(nome, descricao)`,
                parameters: [
                    {
                        name: "id_departamento",
                        in: "path",
                        require: true,
                        description: "ID do departamento a ser atualizado",
                        schema: { type: "integer" },
                        example: 1
                    }
                ],
                requestbody: {
                    require: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/shemas/atualização_Departamento" }
                        }
                    }

                },
                responses: {
                    200: {
                        description: "departamento atualizado com sucesso",
                        content: { "aplication/json": { example: "departamento nao encontrado" } }

                    },
                    404: {},
                    500: {
                        description: "error no servidor"
                    }
                }

            }
        },
        '/ordem_servico': {
            get: {
                tags: ['ordem_servico'],
                summary: 'Listar ordem_servico',
                responses: {
                    '200': {
                        description: 'dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        type: { $ref: "#/components/schemas/Lista_Ordem_Servico" },
                                    }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['ordem_servico'],
                summary: 'Cadastrar ordem de serviço',
                description: 'Recebe nome e descrição do departamento para cadastro',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Cadastro_Ordem_Servico'
                            }
                        }
                    }
                },
                responses: {
                    '201': {
                        description: 'Departamento cadastrado com sucesso',
                    },
                    '400': {
                        description: 'Erro na requisição(preencha todos os campos)'
                    },
                    '500': {
                        description: 'Erro interno do servidor'
                    }
                }
            },
            put: {
                tags: ["ordem_servico"],
                summary: "atualizar ordem de servico completo",
                description: `Atualizar todos os campos de uma ordem existente, sendo necessario
                enviar todos os campos(numero_ordem, titulo, descricao, id_usuario, id_departamento)`,
                parameters: [
                    {
                        name: "id_ordem",
                        in: "path",
                        require: true,
                        description: "ID da ordem a ser atualizado",
                        schema: { type: "integer" },
                        example: 1
                    }
                ],
                requestbody: {
                    require: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/shemas/atualização_Ordem_Servico" }
                        }
                    }

                },
                responses: {
                    200: {
                        description: "ordem e servico atualizado com sucesso",
                        content: { "aplication/json": { example: "ordem nao encontrada" } }

                    },
                    404: {},
                    500: {
                        description: "error no servidor"
                    }
                }

            }
        }
    },
    components: {
        schemas: {
            Lista_Usuarios: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 1
                    },
                    nome: {
                        type: 'string',
                        example: 'Ricardo'
                    },
                    email: {
                        type: 'string',
                        example: 'Ricardo@gmail.com'
                    }
                }
            },
            Cadastro_Usuarios: {
                type: 'object',
                properties: {
                    nome: {
                        type: 'string',
                        example: 'Ricardo'
                    },
                    email: {
                        type: 'string',
                        example: 'Ricardo@gmail.com'
                    },
                    senha: {
                        type: 'string',
                        example: '123456'
                    }
                }
            },
            atualização_usuarios: {
                type: 'object',
                properties: {
                    nome: {
                        type: 'string',
                        example: 'Ricardo'
                    },
                    email: {
                        type: 'string',
                        example: 'Ricardo@gmail.com'
                    },
                    senha: {
                        type: 'string',
                        example: '123456'
                    }
                }
            },

            Lista_Departamentos: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 1
                    },
                    nome: {
                        type: 'string',
                        example: 'TI'
                    },
                    descricao: {
                        type: 'string',
                        example: 'Departamento de tecnologia da informação'
                    }
                }
            },
            Cadastro_Departamentos: {
                type: 'object',
                properties: {
                    nome: {
                        type: 'string',
                        example: 'Ricardo'
                    },
                    descricao: {
                        type: 'string',
                        example: 'Departamento de tecnologia da informação'
                    },
                }
            },
            Atualização_Departamentos: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 1
                    },
                    nome: {
                        type: 'string',
                        example: 'TI'
                    },
                    descricao: {
                        type: 'string',
                        example: 'Departamento de tecnologia da informação'
                    }
                }
            },

            Lista_Ordem_Servico: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 1
                    },
                    descricao: {
                        type: 'string',
                        example: 'Instalação de software'
                    },
                    status: {
                        type: 'string',
                        example: 'Aberto'
                    }
                }
            },
            Cadastro_Ordem_Servico: {
                type: 'object',
                properties: {
                    descricao: {
                        type: 'string',
                        example: 'Instalação de software'
                    },
                    id_usuario: {
                        type: 'integer',
                        example: 1
                    },
                    id_departamento: {
                        type: 'integer',
                        example: 1
                    }
                }
            },
            Atualização_Ordem_Servico: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 1
                    },
                    descricao: {
                        type: 'string',
                        example: 'Instalação de software'
                    },
                    status: {
                        type: 'string',
                        example: 'Aberto'
                    }
                }
            }

        }
    }
}

export default documentacao;