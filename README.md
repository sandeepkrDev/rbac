An Authentication-Authorization-API

# What are the Prerequisites?

Binaries       | Version
-------------- | -------------
NodeJS         | >= LTS
NPM            | >= 6.14.13
PostgreSQL     | >= 14.5
Docker         | >= LTS
Docker Compose | >= LTS

# What is the Structure?

```bash
├── auth
│   ├── action
│   │   ├── products
│   │   │   ├── addProducts.js
│   │   │   ├── getProducts.js
│   │   ├── addRoleToUser.js
│   │   ├── attachPermissionToRole.js
│   │   ├── checkPermission.js
│   │   ├── createToken.js
│   │   ├── deletePermission.js
│   │   ├── deleteRole.js
│   │   ├── detachPermissionToRole.js
│   │   ├── detachRoleToUser.js
│   │   ├── getPermissions.js
│   │   ├── getPermissionsByRole.js
│   │   ├── getRoles.js
│   │   ├── getRolesByUserID.js
│   │   ├── getUsers.js
│   │   ├── insertPermission.js
│   │   └── insertRole.js
│   ├── methods
│   │   └── checkAccess.js
│   ├── operations
│   │   ├── products
│   │   │   ├── mutations.js
│   │   │   └── queries.js
│   │   ├── execute.js
│   │   ├── mutations.ts
│   │   └── queries.json
│   ├── public
│   │   ├── index.html
│   │   └── main.css
│   ├── services
│   │   ├── api.services.js
│   │   ├── authentication.services.js
│   │   ├── authorization.services.js
│   │   └── products.services.js
│   ├── utils
│   │   ├── env.js
│   │   └── onError.js
│   ├── .dockerignore
│   ├── .editorconfig
│   ├── .env.example
│   ├── docker-compose.env
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── k8s.yaml
│   ├── moleculer.config.js
│   ├── package-lock.json
│   ├── package.json
├── hasura
│   ├── metadata
│   │   ├── databases
│   │   │   ├── auth
│   │   │   │   ├── tables
│   │   │   │   │   ├── ecom_products.yaml
│   │   │   │   │   ├── public_permissions.yaml
│   │   │   │   │   ├── public_role_permissions.yaml
│   │   │   │   │   ├── public_roles.yaml
│   │   │   │   │   ├── public_user_roles.yaml
│   │   │   │   │   ├── public_users.yaml
│   │   │   │   │   └── tables.yaml
│   │   │   └── databases.yaml
│   │   ├── actions.graphql
│   │   ├── actions.yaml
│   │   ├── allow_list.yaml
│   │   ├── api_limits.yaml
│   │   ├── cron_triggers.yaml
│   │   ├── graphql_schema_introspection.yaml
│   │   ├── inherited_roles.yaml
│   │   ├── network.yaml
│   │   ├── query_collections.yaml
│   │   ├── remote_schemas.yaml
│   │   ├── rest_endpoints.yaml
│   │   └── version.yaml
│   ├── migrations
│   │   ├── 1660820244013_create_table_public_users
│   │   ├── 1660820312064_create_table_public_roles
│   │   ├── 1660820360727_create_table_public_permissions
│   │   ├── 1660820508245_create_table_public_user_roles
│   │   ├── 1660820657903_create_table_public_role_permissions
│   │   ├── 1660820827275_create_schema_ecom
│   │   └── 1660821037852_create_table_ecom_products
│   ├── seeds
│   │   ├── auth
│   │   │   └── seeds.sql
│   ├── config.yaml
│   ├── docker-compose.yml
│   ├── package.json
├── .gitignore
└── README.md
```

# How to SetUp & Install?

```sh
# Clone the repository
git clone 

# Goto the hasura folder to start docker and the hasura-console
cd hasura;
npm run start:docker;
npm run start:console;

# Apply the migrations and metadata
npm run apply:migrate
npm run apply:metadata

# Now run the seeders
npm run apply:seeds

#Goto the auth folder & create the config file from the .env.example file
cd ../auth;
cp .env.example .env
  
# Install all the dependencies
npm install;
```

# How to Run?

```sh
npm run dev;
```

# How to access the API?

- Hit the http://localhost:8080/v1/graphql in postman.