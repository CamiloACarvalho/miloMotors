import { DataTypes, ModelDefined, Optional } from 'sequelize';

import { AddressType } from '../types/address';

export type AddressInputTabelFields = Optional<AddressType, 'addressId'>;

type AddressSequelizeModelCreator = ModelDefined<AddressType, AddressInputTabelFields>;

const AddressModel: AddressSequelizeModelCreator = 