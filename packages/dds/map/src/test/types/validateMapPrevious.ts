/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-validator in @fluidframework/build-tools.
 */
/* eslint-disable max-lines */
import * as old from "@fluidframework/map-previous";
import * as current from "../../index";

type TypeOnly<T> = {
    [P in keyof T]: TypeOnly<T[P]>;
};

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "ClassDeclaration_DirectoryFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_DirectoryFactory():
    TypeOnly<old.DirectoryFactory>;
declare function use_current_ClassDeclaration_DirectoryFactory(
    use: TypeOnly<current.DirectoryFactory>);
use_current_ClassDeclaration_DirectoryFactory(
    get_old_ClassDeclaration_DirectoryFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "ClassDeclaration_DirectoryFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_DirectoryFactory():
    TypeOnly<current.DirectoryFactory>;
declare function use_old_ClassDeclaration_DirectoryFactory(
    use: TypeOnly<old.DirectoryFactory>);
use_old_ClassDeclaration_DirectoryFactory(
    get_current_ClassDeclaration_DirectoryFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_IDirectory": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDirectory():
    TypeOnly<old.IDirectory>;
declare function use_current_InterfaceDeclaration_IDirectory(
    use: TypeOnly<current.IDirectory>);
use_current_InterfaceDeclaration_IDirectory(
    get_old_InterfaceDeclaration_IDirectory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_IDirectory": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDirectory():
    TypeOnly<current.IDirectory>;
declare function use_old_InterfaceDeclaration_IDirectory(
    use: TypeOnly<old.IDirectory>);
use_old_InterfaceDeclaration_IDirectory(
    get_current_InterfaceDeclaration_IDirectory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_IDirectoryDataObject": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDirectoryDataObject():
    TypeOnly<old.IDirectoryDataObject>;
declare function use_current_InterfaceDeclaration_IDirectoryDataObject(
    use: TypeOnly<current.IDirectoryDataObject>);
use_current_InterfaceDeclaration_IDirectoryDataObject(
    get_old_InterfaceDeclaration_IDirectoryDataObject());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_IDirectoryDataObject": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDirectoryDataObject():
    TypeOnly<current.IDirectoryDataObject>;
declare function use_old_InterfaceDeclaration_IDirectoryDataObject(
    use: TypeOnly<old.IDirectoryDataObject>);
use_old_InterfaceDeclaration_IDirectoryDataObject(
    get_current_InterfaceDeclaration_IDirectoryDataObject());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_IDirectoryEvents": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDirectoryEvents():
    TypeOnly<old.IDirectoryEvents>;
declare function use_current_InterfaceDeclaration_IDirectoryEvents(
    use: TypeOnly<current.IDirectoryEvents>);
use_current_InterfaceDeclaration_IDirectoryEvents(
    get_old_InterfaceDeclaration_IDirectoryEvents());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_IDirectoryEvents": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDirectoryEvents():
    TypeOnly<current.IDirectoryEvents>;
declare function use_old_InterfaceDeclaration_IDirectoryEvents(
    use: TypeOnly<old.IDirectoryEvents>);
use_old_InterfaceDeclaration_IDirectoryEvents(
    get_current_InterfaceDeclaration_IDirectoryEvents());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_IDirectoryNewStorageFormat": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDirectoryNewStorageFormat():
    TypeOnly<old.IDirectoryNewStorageFormat>;
declare function use_current_InterfaceDeclaration_IDirectoryNewStorageFormat(
    use: TypeOnly<current.IDirectoryNewStorageFormat>);
use_current_InterfaceDeclaration_IDirectoryNewStorageFormat(
    get_old_InterfaceDeclaration_IDirectoryNewStorageFormat());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_IDirectoryNewStorageFormat": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDirectoryNewStorageFormat():
    TypeOnly<current.IDirectoryNewStorageFormat>;
declare function use_old_InterfaceDeclaration_IDirectoryNewStorageFormat(
    use: TypeOnly<old.IDirectoryNewStorageFormat>);
use_old_InterfaceDeclaration_IDirectoryNewStorageFormat(
    get_current_InterfaceDeclaration_IDirectoryNewStorageFormat());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "TypeAliasDeclaration_IDirectoryOperation": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_IDirectoryOperation():
    TypeOnly<old.IDirectoryOperation>;
declare function use_current_TypeAliasDeclaration_IDirectoryOperation(
    use: TypeOnly<current.IDirectoryOperation>);
use_current_TypeAliasDeclaration_IDirectoryOperation(
    get_old_TypeAliasDeclaration_IDirectoryOperation());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "TypeAliasDeclaration_IDirectoryOperation": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_IDirectoryOperation():
    TypeOnly<current.IDirectoryOperation>;
declare function use_old_TypeAliasDeclaration_IDirectoryOperation(
    use: TypeOnly<old.IDirectoryOperation>);
use_old_TypeAliasDeclaration_IDirectoryOperation(
    get_current_TypeAliasDeclaration_IDirectoryOperation());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_IDirectoryValueChanged": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDirectoryValueChanged():
    TypeOnly<old.IDirectoryValueChanged>;
declare function use_current_InterfaceDeclaration_IDirectoryValueChanged(
    use: TypeOnly<current.IDirectoryValueChanged>);
use_current_InterfaceDeclaration_IDirectoryValueChanged(
    get_old_InterfaceDeclaration_IDirectoryValueChanged());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_IDirectoryValueChanged": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDirectoryValueChanged():
    TypeOnly<current.IDirectoryValueChanged>;
declare function use_old_InterfaceDeclaration_IDirectoryValueChanged(
    use: TypeOnly<old.IDirectoryValueChanged>);
use_old_InterfaceDeclaration_IDirectoryValueChanged(
    get_current_InterfaceDeclaration_IDirectoryValueChanged());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_ISerializableValue": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ISerializableValue():
    TypeOnly<old.ISerializableValue>;
declare function use_current_InterfaceDeclaration_ISerializableValue(
    use: TypeOnly<current.ISerializableValue>);
use_current_InterfaceDeclaration_ISerializableValue(
    get_old_InterfaceDeclaration_ISerializableValue());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_ISerializableValue": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ISerializableValue():
    TypeOnly<current.ISerializableValue>;
declare function use_old_InterfaceDeclaration_ISerializableValue(
    use: TypeOnly<old.ISerializableValue>);
use_old_InterfaceDeclaration_ISerializableValue(
    get_current_InterfaceDeclaration_ISerializableValue());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_ISerializedValue": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ISerializedValue():
    TypeOnly<old.ISerializedValue>;
declare function use_current_InterfaceDeclaration_ISerializedValue(
    use: TypeOnly<current.ISerializedValue>);
use_current_InterfaceDeclaration_ISerializedValue(
    get_old_InterfaceDeclaration_ISerializedValue());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_ISerializedValue": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ISerializedValue():
    TypeOnly<current.ISerializedValue>;
declare function use_old_InterfaceDeclaration_ISerializedValue(
    use: TypeOnly<old.ISerializedValue>);
use_old_InterfaceDeclaration_ISerializedValue(
    get_current_InterfaceDeclaration_ISerializedValue());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_ISharedDirectory": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ISharedDirectory():
    TypeOnly<old.ISharedDirectory>;
declare function use_current_InterfaceDeclaration_ISharedDirectory(
    use: TypeOnly<current.ISharedDirectory>);
use_current_InterfaceDeclaration_ISharedDirectory(
    get_old_InterfaceDeclaration_ISharedDirectory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_ISharedDirectory": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ISharedDirectory():
    TypeOnly<current.ISharedDirectory>;
declare function use_old_InterfaceDeclaration_ISharedDirectory(
    use: TypeOnly<old.ISharedDirectory>);
use_old_InterfaceDeclaration_ISharedDirectory(
    get_current_InterfaceDeclaration_ISharedDirectory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_ISharedDirectoryEvents": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ISharedDirectoryEvents():
    TypeOnly<old.ISharedDirectoryEvents>;
declare function use_current_InterfaceDeclaration_ISharedDirectoryEvents(
    use: TypeOnly<current.ISharedDirectoryEvents>);
use_current_InterfaceDeclaration_ISharedDirectoryEvents(
    get_old_InterfaceDeclaration_ISharedDirectoryEvents());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_ISharedDirectoryEvents": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ISharedDirectoryEvents():
    TypeOnly<current.ISharedDirectoryEvents>;
declare function use_old_InterfaceDeclaration_ISharedDirectoryEvents(
    use: TypeOnly<old.ISharedDirectoryEvents>);
use_old_InterfaceDeclaration_ISharedDirectoryEvents(
    get_current_InterfaceDeclaration_ISharedDirectoryEvents());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_ISharedMap": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ISharedMap():
    TypeOnly<old.ISharedMap>;
declare function use_current_InterfaceDeclaration_ISharedMap(
    use: TypeOnly<current.ISharedMap>);
use_current_InterfaceDeclaration_ISharedMap(
    get_old_InterfaceDeclaration_ISharedMap());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_ISharedMap": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ISharedMap():
    TypeOnly<current.ISharedMap>;
declare function use_old_InterfaceDeclaration_ISharedMap(
    use: TypeOnly<old.ISharedMap>);
use_old_InterfaceDeclaration_ISharedMap(
    get_current_InterfaceDeclaration_ISharedMap());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_ISharedMapEvents": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ISharedMapEvents():
    TypeOnly<old.ISharedMapEvents>;
declare function use_current_InterfaceDeclaration_ISharedMapEvents(
    use: TypeOnly<current.ISharedMapEvents>);
use_current_InterfaceDeclaration_ISharedMapEvents(
    get_old_InterfaceDeclaration_ISharedMapEvents());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_ISharedMapEvents": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ISharedMapEvents():
    TypeOnly<current.ISharedMapEvents>;
declare function use_old_InterfaceDeclaration_ISharedMapEvents(
    use: TypeOnly<old.ISharedMapEvents>);
use_old_InterfaceDeclaration_ISharedMapEvents(
    get_current_InterfaceDeclaration_ISharedMapEvents());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_IValueChanged": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IValueChanged():
    TypeOnly<old.IValueChanged>;
declare function use_current_InterfaceDeclaration_IValueChanged(
    use: TypeOnly<current.IValueChanged>);
use_current_InterfaceDeclaration_IValueChanged(
    get_old_InterfaceDeclaration_IValueChanged());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "InterfaceDeclaration_IValueChanged": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IValueChanged():
    TypeOnly<current.IValueChanged>;
declare function use_old_InterfaceDeclaration_IValueChanged(
    use: TypeOnly<old.IValueChanged>);
use_old_InterfaceDeclaration_IValueChanged(
    get_current_InterfaceDeclaration_IValueChanged());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "ClassDeclaration_LocalValueMaker": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_LocalValueMaker():
    TypeOnly<old.LocalValueMaker>;
declare function use_current_ClassDeclaration_LocalValueMaker(
    use: TypeOnly<current.LocalValueMaker>);
use_current_ClassDeclaration_LocalValueMaker(
    get_old_ClassDeclaration_LocalValueMaker());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "ClassDeclaration_LocalValueMaker": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_LocalValueMaker():
    TypeOnly<current.LocalValueMaker>;
declare function use_old_ClassDeclaration_LocalValueMaker(
    use: TypeOnly<old.LocalValueMaker>);
use_old_ClassDeclaration_LocalValueMaker(
    get_current_ClassDeclaration_LocalValueMaker());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "ClassDeclaration_MapFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_MapFactory():
    TypeOnly<old.MapFactory>;
declare function use_current_ClassDeclaration_MapFactory(
    use: TypeOnly<current.MapFactory>);
use_current_ClassDeclaration_MapFactory(
    get_old_ClassDeclaration_MapFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "ClassDeclaration_MapFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_MapFactory():
    TypeOnly<current.MapFactory>;
declare function use_old_ClassDeclaration_MapFactory(
    use: TypeOnly<old.MapFactory>);
use_old_ClassDeclaration_MapFactory(
    get_current_ClassDeclaration_MapFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "ClassDeclaration_SharedDirectory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_SharedDirectory():
    TypeOnly<old.SharedDirectory>;
declare function use_current_ClassDeclaration_SharedDirectory(
    use: TypeOnly<current.SharedDirectory>);
use_current_ClassDeclaration_SharedDirectory(
    // @ts-expect-error compatibility expected to be broken
    get_old_ClassDeclaration_SharedDirectory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "ClassDeclaration_SharedDirectory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_SharedDirectory():
    TypeOnly<current.SharedDirectory>;
declare function use_old_ClassDeclaration_SharedDirectory(
    use: TypeOnly<old.SharedDirectory>);
use_old_ClassDeclaration_SharedDirectory(
    get_current_ClassDeclaration_SharedDirectory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "ClassDeclaration_SharedMap": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_SharedMap():
    TypeOnly<old.SharedMap>;
declare function use_current_ClassDeclaration_SharedMap(
    use: TypeOnly<current.SharedMap>);
use_current_ClassDeclaration_SharedMap(
    get_old_ClassDeclaration_SharedMap());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken.0.58.2002:
* "ClassDeclaration_SharedMap": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_SharedMap():
    TypeOnly<current.SharedMap>;
declare function use_old_ClassDeclaration_SharedMap(
    use: TypeOnly<old.SharedMap>);
use_old_ClassDeclaration_SharedMap(
    get_current_ClassDeclaration_SharedMap());