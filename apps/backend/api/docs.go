// Package api Code generated by swaggo/swag. DO NOT EDIT
package api

import "github.com/swaggo/swag"

const docTemplate = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{escape .Description}}",
        "title": "{{.Title}}",
        "contact": {
            "name": "Alex Meuer",
            "email": "alex@alexmeuer.com"
        },
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/ping": {
            "get": {
                "consumes": [
                    "text/plain; charset=utf-8"
                ],
                "produces": [
                    "text/plain; charset=utf-8"
                ],
                "summary": "Send Ping, get Pong",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "/quests": {
            "get": {
                "description": "Gets a page of quests with basic relations",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "quests"
                ],
                "summary": "List quests",
                "parameters": [
                    {
                        "maximum": 100,
                        "minimum": 1,
                        "type": "integer",
                        "format": "int",
                        "default": 10,
                        "description": "limit",
                        "name": "limit",
                        "in": "query"
                    },
                    {
                        "type": "integer",
                        "format": "int",
                        "default": 0,
                        "description": "offset",
                        "name": "offset",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/storage.QuestWithLinkedCharacters"
                            }
                        }
                    }
                }
            }
        },
        "/quests/:id": {
            "get": {
                "description": "Gets details of a quest",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "quests"
                ],
                "summary": "Quest details",
                "parameters": [
                    {
                        "type": "string",
                        "description": "quest id",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/storage.QuestDetail"
                            }
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "storage.Avatar": {
            "type": "object",
            "properties": {
                "md": {
                    "type": "string"
                },
                "raw": {
                    "type": "string"
                },
                "sm": {
                    "type": "string"
                }
            }
        },
        "storage.CharacterWithRelationInfo": {
            "type": "object",
            "properties": {
                "_id": {
                    "type": "string"
                },
                "aliases": {
                    "type": "string"
                },
                "avatar": {
                    "$ref": "#/definitions/storage.Avatar"
                },
                "bio": {
                    "type": "string"
                },
                "class": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "race": {
                    "type": "string"
                },
                "relation": {
                    "type": "object",
                    "properties": {
                        "objective_type": {
                            "type": "string"
                        },
                        "role": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "storage.ChildQuest": {
            "type": "object",
            "properties": {
                "_id": {
                    "type": "string"
                },
                "_key": {
                    "type": "string"
                },
                "body": {
                    "type": "string"
                },
                "images": {
                    "$ref": "#/definitions/storage.QuestImages"
                },
                "title": {
                    "type": "string"
                }
            }
        },
        "storage.Note": {
            "type": "object",
            "properties": {
                "_id": {
                    "type": "string"
                },
                "body": {
                    "type": "string"
                },
                "relation": {
                    "type": "object",
                    "additionalProperties": true
                },
                "title": {
                    "type": "string"
                }
            }
        },
        "storage.QuestDetail": {
            "type": "object",
            "properties": {
                "_id": {
                    "type": "string"
                },
                "_key": {
                    "type": "string"
                },
                "_rev": {
                    "type": "string"
                },
                "body": {
                    "type": "string"
                },
                "characters": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/storage.CharacterWithRelationInfo"
                    }
                },
                "children": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/storage.ChildQuest"
                    }
                },
                "images": {
                    "$ref": "#/definitions/storage.QuestImages"
                },
                "notes": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/storage.Note"
                    }
                },
                "title": {
                    "type": "string"
                }
            }
        },
        "storage.QuestImages": {
            "type": "object",
            "properties": {
                "banner": {
                    "type": "string"
                }
            }
        },
        "storage.QuestWithLinkedCharacters": {
            "type": "object",
            "properties": {
                "_id": {
                    "type": "string"
                },
                "_key": {
                    "type": "string"
                },
                "body": {
                    "type": "string"
                },
                "characters": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "avatar": {
                                "$ref": "#/definitions/storage.Avatar"
                            },
                            "name": {
                                "type": "string"
                            },
                            "objective_type": {
                                "type": "string"
                            },
                            "role": {
                                "type": "string"
                            }
                        }
                    }
                },
                "images": {
                    "$ref": "#/definitions/storage.QuestImages"
                },
                "title": {
                    "type": "string"
                }
            }
        }
    }
}`

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = &swag.Spec{
	Version:          "1.0",
	Host:             "localhost:8080",
	BasePath:         "/",
	Schemes:          []string{},
	Title:            "Simply-the-Quest HTTP API",
	Description:      "This relies on an ArangoDB database for most operations.",
	InfoInstanceName: "swagger",
	SwaggerTemplate:  docTemplate,
	LeftDelim:        "{{",
	RightDelim:       "}}",
}

func init() {
	swag.Register(SwaggerInfo.InstanceName(), SwaggerInfo)
}