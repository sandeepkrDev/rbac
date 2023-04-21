SET check_function_bodies = false;

TRUNCATE TABLE user_roles, role_permissions, users, roles, permissions;

/* ============================================================================================== */
/* insert default super_admin                                                                     */
/* ============================================================================================== */
SELECT insert_user('sandeep', 'sandeep@gmail.com', '12345678');

/* ============================================================================================== */
/* insert roles                                                                                   */
/* ============================================================================================== */
SELECT insert_role('user');
SELECT insert_role('super_admin');
SELECT insert_role('doctor');
SELECT insert_role('nurse');
SELECT insert_role('patient');

/* ============================================================================================== */
/* insert permissions                                                                             */
/* ============================================================================================== */
SELECT insert_permission('insertRole', 'Create Role');
SELECT insert_permission('deleteRole', 'Delete Role');

SELECT insert_permission('insertPermission', 'Create Permission');
SELECT insert_permission('deletePermission', 'Delete Permission');

SELECT insert_permission('getUsersByRole', 'Get Users By Role');
SELECT insert_permission('getRolesByUserID', 'Get Roles By User ID');
SELECT insert_permission('getPermissionsByRole', 'Get Permissions By Role');

SELECT insert_permission('attachRoleToUser', 'Attach Role To User');
SELECT insert_permission('detachRoleToUser', 'Detach Role To User');

SELECT insert_permission('attachPermissionToRole', 'Attach Permission To Role');
SELECT insert_permission('detachPermissionToRole', 'Detach Permission To Role');

SELECT insert_permission('getUsers', 'Get Users');
SELECT insert_permission('getRoles', 'Get Roles');
SELECT insert_permission('getPermissions', 'Get Permissions');

SELECT insert_permission('createDoctor', 'Create Doctor');
SELECT insert_permission('getDoctorById', 'Get Doctor By Id');
SELECT insert_permission('getDoctors', 'Get Doctors');

SELECT insert_permission('createNurse', 'Create Nurse');
SELECT insert_permission('getNurseById', 'Get Nurse By Id');
SELECT insert_permission('getNurses', 'Get Nurses');

SELECT insert_permission('createPatient', 'Create Patient');
SELECT insert_permission('getPatientById', 'Get Patient By Id');
SELECT insert_permission('getPatients', 'Get Patients');

/* ============================================================================================== */
/* attach role and permissions                                                                    */
/* ============================================================================================== */
SELECT attach_permission_to_role('super_admin', 'insertRole');
SELECT attach_permission_to_role('super_admin', 'deleteRole');
SELECT attach_permission_to_role('super_admin', 'insertPermission');
SELECT attach_permission_to_role('super_admin', 'deletePermission');
SELECT attach_permission_to_role('super_admin', 'getUsersByRole');
SELECT attach_permission_to_role('super_admin', 'getRolesByUserID');
SELECT attach_permission_to_role('super_admin', 'getPermissionsByRole');
SELECT attach_permission_to_role('super_admin', 'attachRoleToUser');
SELECT attach_permission_to_role('super_admin', 'detachRoleToUser');
SELECT attach_permission_to_role('super_admin', 'attachPermissionToRole');
SELECT attach_permission_to_role('super_admin', 'detachPermissionToRole');
SELECT attach_permission_to_role('super_admin', 'getUsers');
SELECT attach_permission_to_role('super_admin', 'getRoles');
SELECT attach_permission_to_role('super_admin', 'getPermissions');

SELECT attach_permission_to_role('super_admin', 'createDoctor');
SELECT attach_permission_to_role('super_admin', 'getDoctorById');
SELECT attach_permission_to_role('super_admin', 'getDoctors');

SELECT attach_permission_to_role('super_admin', 'createNurse');
SELECT attach_permission_to_role('super_admin', 'getNurseById');
SELECT attach_permission_to_role('super_admin', 'getNurses');

SELECT attach_permission_to_role('super_admin', 'createPatient');
SELECT attach_permission_to_role('super_admin', 'getPatientById');
SELECT attach_permission_to_role('super_admin', 'getPatients');

SELECT attach_permission_to_role('doctor', 'createNurse');
SELECT attach_permission_to_role('doctor', 'getNurseById');
SELECT attach_permission_to_role('doctor', 'getNurses');

SELECT attach_permission_to_role('doctor', 'createPatient');
SELECT attach_permission_to_role('doctor', 'getPatientById');
SELECT attach_permission_to_role('doctor', 'getPatients');

SELECT attach_permission_to_role('nurse', 'getPatientById');
SELECT attach_permission_to_role('nurse', 'getPatients');

/* ============================================================================================== */
/* attach [user, super_admin] roles to default user                                               */
/* ============================================================================================== */
SELECT attach_role_to_user((SELECT id from get_user_by_email('sandeep@gmail.com')), 'user');
SELECT attach_role_to_user((SELECT id from get_user_by_email('sandeep@gmail.com')), 'super_admin');