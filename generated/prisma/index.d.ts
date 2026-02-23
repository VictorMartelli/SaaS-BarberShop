
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Barbershop
 * 
 */
export type Barbershop = $Result.DefaultSelection<Prisma.$BarbershopPayload>
/**
 * Model BarbershopService
 * 
 */
export type BarbershopService = $Result.DefaultSelection<Prisma.$BarbershopServicePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Barbershops
 * const barbershops = await prisma.barbershop.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Barbershops
   * const barbershops = await prisma.barbershop.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.barbershop`: Exposes CRUD operations for the **Barbershop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barbershops
    * const barbershops = await prisma.barbershop.findMany()
    * ```
    */
  get barbershop(): Prisma.BarbershopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barbershopService`: Exposes CRUD operations for the **BarbershopService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarbershopServices
    * const barbershopServices = await prisma.barbershopService.findMany()
    * ```
    */
  get barbershopService(): Prisma.BarbershopServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Barbershop: 'Barbershop',
    BarbershopService: 'BarbershopService',
    Booking: 'Booking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "barbershop" | "barbershopService" | "booking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Barbershop: {
        payload: Prisma.$BarbershopPayload<ExtArgs>
        fields: Prisma.BarbershopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarbershopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarbershopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          findFirst: {
            args: Prisma.BarbershopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarbershopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          findMany: {
            args: Prisma.BarbershopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>[]
          }
          create: {
            args: Prisma.BarbershopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          createMany: {
            args: Prisma.BarbershopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarbershopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>[]
          }
          delete: {
            args: Prisma.BarbershopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          update: {
            args: Prisma.BarbershopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          deleteMany: {
            args: Prisma.BarbershopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarbershopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarbershopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>[]
          }
          upsert: {
            args: Prisma.BarbershopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          aggregate: {
            args: Prisma.BarbershopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarbershop>
          }
          groupBy: {
            args: Prisma.BarbershopGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarbershopGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarbershopCountArgs<ExtArgs>
            result: $Utils.Optional<BarbershopCountAggregateOutputType> | number
          }
        }
      }
      BarbershopService: {
        payload: Prisma.$BarbershopServicePayload<ExtArgs>
        fields: Prisma.BarbershopServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarbershopServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarbershopServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>
          }
          findFirst: {
            args: Prisma.BarbershopServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarbershopServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>
          }
          findMany: {
            args: Prisma.BarbershopServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>[]
          }
          create: {
            args: Prisma.BarbershopServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>
          }
          createMany: {
            args: Prisma.BarbershopServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarbershopServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>[]
          }
          delete: {
            args: Prisma.BarbershopServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>
          }
          update: {
            args: Prisma.BarbershopServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>
          }
          deleteMany: {
            args: Prisma.BarbershopServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarbershopServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarbershopServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>[]
          }
          upsert: {
            args: Prisma.BarbershopServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>
          }
          aggregate: {
            args: Prisma.BarbershopServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarbershopService>
          }
          groupBy: {
            args: Prisma.BarbershopServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarbershopServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarbershopServiceCountArgs<ExtArgs>
            result: $Utils.Optional<BarbershopServiceCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    barbershop?: BarbershopOmit
    barbershopService?: BarbershopServiceOmit
    booking?: BookingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BarbershopCountOutputType
   */

  export type BarbershopCountOutputType = {
    services: number
    bookings: number
  }

  export type BarbershopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | BarbershopCountOutputTypeCountServicesArgs
    bookings?: boolean | BarbershopCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * BarbershopCountOutputType without action
   */
  export type BarbershopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopCountOutputType
     */
    select?: BarbershopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarbershopCountOutputType without action
   */
  export type BarbershopCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarbershopServiceWhereInput
  }

  /**
   * BarbershopCountOutputType without action
   */
  export type BarbershopCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BarbershopServiceCountOutputType
   */

  export type BarbershopServiceCountOutputType = {
    bookings: number
  }

  export type BarbershopServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | BarbershopServiceCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * BarbershopServiceCountOutputType without action
   */
  export type BarbershopServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopServiceCountOutputType
     */
    select?: BarbershopServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarbershopServiceCountOutputType without action
   */
  export type BarbershopServiceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Barbershop
   */

  export type AggregateBarbershop = {
    _count: BarbershopCountAggregateOutputType | null
    _min: BarbershopMinAggregateOutputType | null
    _max: BarbershopMaxAggregateOutputType | null
  }

  export type BarbershopMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    description: string | null
    imageUrl: string | null
  }

  export type BarbershopMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    description: string | null
    imageUrl: string | null
  }

  export type BarbershopCountAggregateOutputType = {
    id: number
    name: number
    address: number
    description: number
    imageUrl: number
    phones: number
    _all: number
  }


  export type BarbershopMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    imageUrl?: true
  }

  export type BarbershopMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    imageUrl?: true
  }

  export type BarbershopCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    imageUrl?: true
    phones?: true
    _all?: true
  }

  export type BarbershopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barbershop to aggregate.
     */
    where?: BarbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbershops to fetch.
     */
    orderBy?: BarbershopOrderByWithRelationInput | BarbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbershops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Barbershops
    **/
    _count?: true | BarbershopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarbershopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarbershopMaxAggregateInputType
  }

  export type GetBarbershopAggregateType<T extends BarbershopAggregateArgs> = {
        [P in keyof T & keyof AggregateBarbershop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarbershop[P]>
      : GetScalarType<T[P], AggregateBarbershop[P]>
  }




  export type BarbershopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarbershopWhereInput
    orderBy?: BarbershopOrderByWithAggregationInput | BarbershopOrderByWithAggregationInput[]
    by: BarbershopScalarFieldEnum[] | BarbershopScalarFieldEnum
    having?: BarbershopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarbershopCountAggregateInputType | true
    _min?: BarbershopMinAggregateInputType
    _max?: BarbershopMaxAggregateInputType
  }

  export type BarbershopGroupByOutputType = {
    id: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones: string[]
    _count: BarbershopCountAggregateOutputType | null
    _min: BarbershopMinAggregateOutputType | null
    _max: BarbershopMaxAggregateOutputType | null
  }

  type GetBarbershopGroupByPayload<T extends BarbershopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarbershopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarbershopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarbershopGroupByOutputType[P]>
            : GetScalarType<T[P], BarbershopGroupByOutputType[P]>
        }
      >
    >


  export type BarbershopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    imageUrl?: boolean
    phones?: boolean
    services?: boolean | Barbershop$servicesArgs<ExtArgs>
    bookings?: boolean | Barbershop$bookingsArgs<ExtArgs>
    _count?: boolean | BarbershopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbershop"]>

  export type BarbershopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    imageUrl?: boolean
    phones?: boolean
  }, ExtArgs["result"]["barbershop"]>

  export type BarbershopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    imageUrl?: boolean
    phones?: boolean
  }, ExtArgs["result"]["barbershop"]>

  export type BarbershopSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    imageUrl?: boolean
    phones?: boolean
  }

  export type BarbershopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "description" | "imageUrl" | "phones", ExtArgs["result"]["barbershop"]>
  export type BarbershopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Barbershop$servicesArgs<ExtArgs>
    bookings?: boolean | Barbershop$bookingsArgs<ExtArgs>
    _count?: boolean | BarbershopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarbershopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BarbershopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BarbershopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Barbershop"
    objects: {
      services: Prisma.$BarbershopServicePayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      description: string
      imageUrl: string
      phones: string[]
    }, ExtArgs["result"]["barbershop"]>
    composites: {}
  }

  type BarbershopGetPayload<S extends boolean | null | undefined | BarbershopDefaultArgs> = $Result.GetResult<Prisma.$BarbershopPayload, S>

  type BarbershopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarbershopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarbershopCountAggregateInputType | true
    }

  export interface BarbershopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Barbershop'], meta: { name: 'Barbershop' } }
    /**
     * Find zero or one Barbershop that matches the filter.
     * @param {BarbershopFindUniqueArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarbershopFindUniqueArgs>(args: SelectSubset<T, BarbershopFindUniqueArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Barbershop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarbershopFindUniqueOrThrowArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarbershopFindUniqueOrThrowArgs>(args: SelectSubset<T, BarbershopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barbershop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopFindFirstArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarbershopFindFirstArgs>(args?: SelectSubset<T, BarbershopFindFirstArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barbershop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopFindFirstOrThrowArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarbershopFindFirstOrThrowArgs>(args?: SelectSubset<T, BarbershopFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Barbershops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barbershops
     * const barbershops = await prisma.barbershop.findMany()
     * 
     * // Get first 10 Barbershops
     * const barbershops = await prisma.barbershop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barbershopWithIdOnly = await prisma.barbershop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarbershopFindManyArgs>(args?: SelectSubset<T, BarbershopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Barbershop.
     * @param {BarbershopCreateArgs} args - Arguments to create a Barbershop.
     * @example
     * // Create one Barbershop
     * const Barbershop = await prisma.barbershop.create({
     *   data: {
     *     // ... data to create a Barbershop
     *   }
     * })
     * 
     */
    create<T extends BarbershopCreateArgs>(args: SelectSubset<T, BarbershopCreateArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Barbershops.
     * @param {BarbershopCreateManyArgs} args - Arguments to create many Barbershops.
     * @example
     * // Create many Barbershops
     * const barbershop = await prisma.barbershop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarbershopCreateManyArgs>(args?: SelectSubset<T, BarbershopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Barbershops and returns the data saved in the database.
     * @param {BarbershopCreateManyAndReturnArgs} args - Arguments to create many Barbershops.
     * @example
     * // Create many Barbershops
     * const barbershop = await prisma.barbershop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Barbershops and only return the `id`
     * const barbershopWithIdOnly = await prisma.barbershop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarbershopCreateManyAndReturnArgs>(args?: SelectSubset<T, BarbershopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Barbershop.
     * @param {BarbershopDeleteArgs} args - Arguments to delete one Barbershop.
     * @example
     * // Delete one Barbershop
     * const Barbershop = await prisma.barbershop.delete({
     *   where: {
     *     // ... filter to delete one Barbershop
     *   }
     * })
     * 
     */
    delete<T extends BarbershopDeleteArgs>(args: SelectSubset<T, BarbershopDeleteArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Barbershop.
     * @param {BarbershopUpdateArgs} args - Arguments to update one Barbershop.
     * @example
     * // Update one Barbershop
     * const barbershop = await prisma.barbershop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarbershopUpdateArgs>(args: SelectSubset<T, BarbershopUpdateArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Barbershops.
     * @param {BarbershopDeleteManyArgs} args - Arguments to filter Barbershops to delete.
     * @example
     * // Delete a few Barbershops
     * const { count } = await prisma.barbershop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarbershopDeleteManyArgs>(args?: SelectSubset<T, BarbershopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barbershops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barbershops
     * const barbershop = await prisma.barbershop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarbershopUpdateManyArgs>(args: SelectSubset<T, BarbershopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barbershops and returns the data updated in the database.
     * @param {BarbershopUpdateManyAndReturnArgs} args - Arguments to update many Barbershops.
     * @example
     * // Update many Barbershops
     * const barbershop = await prisma.barbershop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Barbershops and only return the `id`
     * const barbershopWithIdOnly = await prisma.barbershop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BarbershopUpdateManyAndReturnArgs>(args: SelectSubset<T, BarbershopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Barbershop.
     * @param {BarbershopUpsertArgs} args - Arguments to update or create a Barbershop.
     * @example
     * // Update or create a Barbershop
     * const barbershop = await prisma.barbershop.upsert({
     *   create: {
     *     // ... data to create a Barbershop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barbershop we want to update
     *   }
     * })
     */
    upsert<T extends BarbershopUpsertArgs>(args: SelectSubset<T, BarbershopUpsertArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Barbershops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopCountArgs} args - Arguments to filter Barbershops to count.
     * @example
     * // Count the number of Barbershops
     * const count = await prisma.barbershop.count({
     *   where: {
     *     // ... the filter for the Barbershops we want to count
     *   }
     * })
    **/
    count<T extends BarbershopCountArgs>(
      args?: Subset<T, BarbershopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarbershopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barbershop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarbershopAggregateArgs>(args: Subset<T, BarbershopAggregateArgs>): Prisma.PrismaPromise<GetBarbershopAggregateType<T>>

    /**
     * Group by Barbershop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BarbershopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarbershopGroupByArgs['orderBy'] }
        : { orderBy?: BarbershopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BarbershopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarbershopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Barbershop model
   */
  readonly fields: BarbershopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Barbershop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarbershopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Barbershop$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Barbershop$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Barbershop$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Barbershop$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Barbershop model
   */
  interface BarbershopFieldRefs {
    readonly id: FieldRef<"Barbershop", 'String'>
    readonly name: FieldRef<"Barbershop", 'String'>
    readonly address: FieldRef<"Barbershop", 'String'>
    readonly description: FieldRef<"Barbershop", 'String'>
    readonly imageUrl: FieldRef<"Barbershop", 'String'>
    readonly phones: FieldRef<"Barbershop", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Barbershop findUnique
   */
  export type BarbershopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter, which Barbershop to fetch.
     */
    where: BarbershopWhereUniqueInput
  }

  /**
   * Barbershop findUniqueOrThrow
   */
  export type BarbershopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter, which Barbershop to fetch.
     */
    where: BarbershopWhereUniqueInput
  }

  /**
   * Barbershop findFirst
   */
  export type BarbershopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter, which Barbershop to fetch.
     */
    where?: BarbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbershops to fetch.
     */
    orderBy?: BarbershopOrderByWithRelationInput | BarbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barbershops.
     */
    cursor?: BarbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbershops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barbershops.
     */
    distinct?: BarbershopScalarFieldEnum | BarbershopScalarFieldEnum[]
  }

  /**
   * Barbershop findFirstOrThrow
   */
  export type BarbershopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter, which Barbershop to fetch.
     */
    where?: BarbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbershops to fetch.
     */
    orderBy?: BarbershopOrderByWithRelationInput | BarbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barbershops.
     */
    cursor?: BarbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbershops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barbershops.
     */
    distinct?: BarbershopScalarFieldEnum | BarbershopScalarFieldEnum[]
  }

  /**
   * Barbershop findMany
   */
  export type BarbershopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter, which Barbershops to fetch.
     */
    where?: BarbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbershops to fetch.
     */
    orderBy?: BarbershopOrderByWithRelationInput | BarbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Barbershops.
     */
    cursor?: BarbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbershops.
     */
    skip?: number
    distinct?: BarbershopScalarFieldEnum | BarbershopScalarFieldEnum[]
  }

  /**
   * Barbershop create
   */
  export type BarbershopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * The data needed to create a Barbershop.
     */
    data: XOR<BarbershopCreateInput, BarbershopUncheckedCreateInput>
  }

  /**
   * Barbershop createMany
   */
  export type BarbershopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Barbershops.
     */
    data: BarbershopCreateManyInput | BarbershopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barbershop createManyAndReturn
   */
  export type BarbershopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * The data used to create many Barbershops.
     */
    data: BarbershopCreateManyInput | BarbershopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barbershop update
   */
  export type BarbershopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * The data needed to update a Barbershop.
     */
    data: XOR<BarbershopUpdateInput, BarbershopUncheckedUpdateInput>
    /**
     * Choose, which Barbershop to update.
     */
    where: BarbershopWhereUniqueInput
  }

  /**
   * Barbershop updateMany
   */
  export type BarbershopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Barbershops.
     */
    data: XOR<BarbershopUpdateManyMutationInput, BarbershopUncheckedUpdateManyInput>
    /**
     * Filter which Barbershops to update
     */
    where?: BarbershopWhereInput
    /**
     * Limit how many Barbershops to update.
     */
    limit?: number
  }

  /**
   * Barbershop updateManyAndReturn
   */
  export type BarbershopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * The data used to update Barbershops.
     */
    data: XOR<BarbershopUpdateManyMutationInput, BarbershopUncheckedUpdateManyInput>
    /**
     * Filter which Barbershops to update
     */
    where?: BarbershopWhereInput
    /**
     * Limit how many Barbershops to update.
     */
    limit?: number
  }

  /**
   * Barbershop upsert
   */
  export type BarbershopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * The filter to search for the Barbershop to update in case it exists.
     */
    where: BarbershopWhereUniqueInput
    /**
     * In case the Barbershop found by the `where` argument doesn't exist, create a new Barbershop with this data.
     */
    create: XOR<BarbershopCreateInput, BarbershopUncheckedCreateInput>
    /**
     * In case the Barbershop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarbershopUpdateInput, BarbershopUncheckedUpdateInput>
  }

  /**
   * Barbershop delete
   */
  export type BarbershopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter which Barbershop to delete.
     */
    where: BarbershopWhereUniqueInput
  }

  /**
   * Barbershop deleteMany
   */
  export type BarbershopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barbershops to delete
     */
    where?: BarbershopWhereInput
    /**
     * Limit how many Barbershops to delete.
     */
    limit?: number
  }

  /**
   * Barbershop.services
   */
  export type Barbershop$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    where?: BarbershopServiceWhereInput
    orderBy?: BarbershopServiceOrderByWithRelationInput | BarbershopServiceOrderByWithRelationInput[]
    cursor?: BarbershopServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarbershopServiceScalarFieldEnum | BarbershopServiceScalarFieldEnum[]
  }

  /**
   * Barbershop.bookings
   */
  export type Barbershop$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Barbershop without action
   */
  export type BarbershopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
  }


  /**
   * Model BarbershopService
   */

  export type AggregateBarbershopService = {
    _count: BarbershopServiceCountAggregateOutputType | null
    _avg: BarbershopServiceAvgAggregateOutputType | null
    _sum: BarbershopServiceSumAggregateOutputType | null
    _min: BarbershopServiceMinAggregateOutputType | null
    _max: BarbershopServiceMaxAggregateOutputType | null
  }

  export type BarbershopServiceAvgAggregateOutputType = {
    priceInCents: number | null
  }

  export type BarbershopServiceSumAggregateOutputType = {
    priceInCents: number | null
  }

  export type BarbershopServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    barbershopId: string | null
    priceInCents: number | null
  }

  export type BarbershopServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageUrl: string | null
    barbershopId: string | null
    priceInCents: number | null
  }

  export type BarbershopServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageUrl: number
    barbershopId: number
    priceInCents: number
    _all: number
  }


  export type BarbershopServiceAvgAggregateInputType = {
    priceInCents?: true
  }

  export type BarbershopServiceSumAggregateInputType = {
    priceInCents?: true
  }

  export type BarbershopServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    barbershopId?: true
    priceInCents?: true
  }

  export type BarbershopServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    barbershopId?: true
    priceInCents?: true
  }

  export type BarbershopServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageUrl?: true
    barbershopId?: true
    priceInCents?: true
    _all?: true
  }

  export type BarbershopServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarbershopService to aggregate.
     */
    where?: BarbershopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarbershopServices to fetch.
     */
    orderBy?: BarbershopServiceOrderByWithRelationInput | BarbershopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarbershopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarbershopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarbershopServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BarbershopServices
    **/
    _count?: true | BarbershopServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarbershopServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarbershopServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarbershopServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarbershopServiceMaxAggregateInputType
  }

  export type GetBarbershopServiceAggregateType<T extends BarbershopServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateBarbershopService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarbershopService[P]>
      : GetScalarType<T[P], AggregateBarbershopService[P]>
  }




  export type BarbershopServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarbershopServiceWhereInput
    orderBy?: BarbershopServiceOrderByWithAggregationInput | BarbershopServiceOrderByWithAggregationInput[]
    by: BarbershopServiceScalarFieldEnum[] | BarbershopServiceScalarFieldEnum
    having?: BarbershopServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarbershopServiceCountAggregateInputType | true
    _avg?: BarbershopServiceAvgAggregateInputType
    _sum?: BarbershopServiceSumAggregateInputType
    _min?: BarbershopServiceMinAggregateInputType
    _max?: BarbershopServiceMaxAggregateInputType
  }

  export type BarbershopServiceGroupByOutputType = {
    id: string
    name: string
    description: string
    imageUrl: string
    barbershopId: string
    priceInCents: number
    _count: BarbershopServiceCountAggregateOutputType | null
    _avg: BarbershopServiceAvgAggregateOutputType | null
    _sum: BarbershopServiceSumAggregateOutputType | null
    _min: BarbershopServiceMinAggregateOutputType | null
    _max: BarbershopServiceMaxAggregateOutputType | null
  }

  type GetBarbershopServiceGroupByPayload<T extends BarbershopServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarbershopServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarbershopServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarbershopServiceGroupByOutputType[P]>
            : GetScalarType<T[P], BarbershopServiceGroupByOutputType[P]>
        }
      >
    >


  export type BarbershopServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    barbershopId?: boolean
    priceInCents?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
    bookings?: boolean | BarbershopService$bookingsArgs<ExtArgs>
    _count?: boolean | BarbershopServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbershopService"]>

  export type BarbershopServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    barbershopId?: boolean
    priceInCents?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbershopService"]>

  export type BarbershopServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    barbershopId?: boolean
    priceInCents?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbershopService"]>

  export type BarbershopServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageUrl?: boolean
    barbershopId?: boolean
    priceInCents?: boolean
  }

  export type BarbershopServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imageUrl" | "barbershopId" | "priceInCents", ExtArgs["result"]["barbershopService"]>
  export type BarbershopServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
    bookings?: boolean | BarbershopService$bookingsArgs<ExtArgs>
    _count?: boolean | BarbershopServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarbershopServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }
  export type BarbershopServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }

  export type $BarbershopServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BarbershopService"
    objects: {
      barbershop: Prisma.$BarbershopPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      imageUrl: string
      barbershopId: string
      priceInCents: number
    }, ExtArgs["result"]["barbershopService"]>
    composites: {}
  }

  type BarbershopServiceGetPayload<S extends boolean | null | undefined | BarbershopServiceDefaultArgs> = $Result.GetResult<Prisma.$BarbershopServicePayload, S>

  type BarbershopServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarbershopServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarbershopServiceCountAggregateInputType | true
    }

  export interface BarbershopServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BarbershopService'], meta: { name: 'BarbershopService' } }
    /**
     * Find zero or one BarbershopService that matches the filter.
     * @param {BarbershopServiceFindUniqueArgs} args - Arguments to find a BarbershopService
     * @example
     * // Get one BarbershopService
     * const barbershopService = await prisma.barbershopService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarbershopServiceFindUniqueArgs>(args: SelectSubset<T, BarbershopServiceFindUniqueArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BarbershopService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarbershopServiceFindUniqueOrThrowArgs} args - Arguments to find a BarbershopService
     * @example
     * // Get one BarbershopService
     * const barbershopService = await prisma.barbershopService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarbershopServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, BarbershopServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarbershopService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopServiceFindFirstArgs} args - Arguments to find a BarbershopService
     * @example
     * // Get one BarbershopService
     * const barbershopService = await prisma.barbershopService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarbershopServiceFindFirstArgs>(args?: SelectSubset<T, BarbershopServiceFindFirstArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarbershopService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopServiceFindFirstOrThrowArgs} args - Arguments to find a BarbershopService
     * @example
     * // Get one BarbershopService
     * const barbershopService = await prisma.barbershopService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarbershopServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, BarbershopServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BarbershopServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarbershopServices
     * const barbershopServices = await prisma.barbershopService.findMany()
     * 
     * // Get first 10 BarbershopServices
     * const barbershopServices = await prisma.barbershopService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barbershopServiceWithIdOnly = await prisma.barbershopService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarbershopServiceFindManyArgs>(args?: SelectSubset<T, BarbershopServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BarbershopService.
     * @param {BarbershopServiceCreateArgs} args - Arguments to create a BarbershopService.
     * @example
     * // Create one BarbershopService
     * const BarbershopService = await prisma.barbershopService.create({
     *   data: {
     *     // ... data to create a BarbershopService
     *   }
     * })
     * 
     */
    create<T extends BarbershopServiceCreateArgs>(args: SelectSubset<T, BarbershopServiceCreateArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BarbershopServices.
     * @param {BarbershopServiceCreateManyArgs} args - Arguments to create many BarbershopServices.
     * @example
     * // Create many BarbershopServices
     * const barbershopService = await prisma.barbershopService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarbershopServiceCreateManyArgs>(args?: SelectSubset<T, BarbershopServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BarbershopServices and returns the data saved in the database.
     * @param {BarbershopServiceCreateManyAndReturnArgs} args - Arguments to create many BarbershopServices.
     * @example
     * // Create many BarbershopServices
     * const barbershopService = await prisma.barbershopService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BarbershopServices and only return the `id`
     * const barbershopServiceWithIdOnly = await prisma.barbershopService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarbershopServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, BarbershopServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BarbershopService.
     * @param {BarbershopServiceDeleteArgs} args - Arguments to delete one BarbershopService.
     * @example
     * // Delete one BarbershopService
     * const BarbershopService = await prisma.barbershopService.delete({
     *   where: {
     *     // ... filter to delete one BarbershopService
     *   }
     * })
     * 
     */
    delete<T extends BarbershopServiceDeleteArgs>(args: SelectSubset<T, BarbershopServiceDeleteArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BarbershopService.
     * @param {BarbershopServiceUpdateArgs} args - Arguments to update one BarbershopService.
     * @example
     * // Update one BarbershopService
     * const barbershopService = await prisma.barbershopService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarbershopServiceUpdateArgs>(args: SelectSubset<T, BarbershopServiceUpdateArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BarbershopServices.
     * @param {BarbershopServiceDeleteManyArgs} args - Arguments to filter BarbershopServices to delete.
     * @example
     * // Delete a few BarbershopServices
     * const { count } = await prisma.barbershopService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarbershopServiceDeleteManyArgs>(args?: SelectSubset<T, BarbershopServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarbershopServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarbershopServices
     * const barbershopService = await prisma.barbershopService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarbershopServiceUpdateManyArgs>(args: SelectSubset<T, BarbershopServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarbershopServices and returns the data updated in the database.
     * @param {BarbershopServiceUpdateManyAndReturnArgs} args - Arguments to update many BarbershopServices.
     * @example
     * // Update many BarbershopServices
     * const barbershopService = await prisma.barbershopService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BarbershopServices and only return the `id`
     * const barbershopServiceWithIdOnly = await prisma.barbershopService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BarbershopServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, BarbershopServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BarbershopService.
     * @param {BarbershopServiceUpsertArgs} args - Arguments to update or create a BarbershopService.
     * @example
     * // Update or create a BarbershopService
     * const barbershopService = await prisma.barbershopService.upsert({
     *   create: {
     *     // ... data to create a BarbershopService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarbershopService we want to update
     *   }
     * })
     */
    upsert<T extends BarbershopServiceUpsertArgs>(args: SelectSubset<T, BarbershopServiceUpsertArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BarbershopServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopServiceCountArgs} args - Arguments to filter BarbershopServices to count.
     * @example
     * // Count the number of BarbershopServices
     * const count = await prisma.barbershopService.count({
     *   where: {
     *     // ... the filter for the BarbershopServices we want to count
     *   }
     * })
    **/
    count<T extends BarbershopServiceCountArgs>(
      args?: Subset<T, BarbershopServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarbershopServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarbershopService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarbershopServiceAggregateArgs>(args: Subset<T, BarbershopServiceAggregateArgs>): Prisma.PrismaPromise<GetBarbershopServiceAggregateType<T>>

    /**
     * Group by BarbershopService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BarbershopServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarbershopServiceGroupByArgs['orderBy'] }
        : { orderBy?: BarbershopServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BarbershopServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarbershopServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BarbershopService model
   */
  readonly fields: BarbershopServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BarbershopService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarbershopServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barbershop<T extends BarbershopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarbershopDefaultArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends BarbershopService$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, BarbershopService$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BarbershopService model
   */
  interface BarbershopServiceFieldRefs {
    readonly id: FieldRef<"BarbershopService", 'String'>
    readonly name: FieldRef<"BarbershopService", 'String'>
    readonly description: FieldRef<"BarbershopService", 'String'>
    readonly imageUrl: FieldRef<"BarbershopService", 'String'>
    readonly barbershopId: FieldRef<"BarbershopService", 'String'>
    readonly priceInCents: FieldRef<"BarbershopService", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BarbershopService findUnique
   */
  export type BarbershopServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarbershopService to fetch.
     */
    where: BarbershopServiceWhereUniqueInput
  }

  /**
   * BarbershopService findUniqueOrThrow
   */
  export type BarbershopServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarbershopService to fetch.
     */
    where: BarbershopServiceWhereUniqueInput
  }

  /**
   * BarbershopService findFirst
   */
  export type BarbershopServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarbershopService to fetch.
     */
    where?: BarbershopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarbershopServices to fetch.
     */
    orderBy?: BarbershopServiceOrderByWithRelationInput | BarbershopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarbershopServices.
     */
    cursor?: BarbershopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarbershopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarbershopServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarbershopServices.
     */
    distinct?: BarbershopServiceScalarFieldEnum | BarbershopServiceScalarFieldEnum[]
  }

  /**
   * BarbershopService findFirstOrThrow
   */
  export type BarbershopServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarbershopService to fetch.
     */
    where?: BarbershopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarbershopServices to fetch.
     */
    orderBy?: BarbershopServiceOrderByWithRelationInput | BarbershopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarbershopServices.
     */
    cursor?: BarbershopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarbershopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarbershopServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarbershopServices.
     */
    distinct?: BarbershopServiceScalarFieldEnum | BarbershopServiceScalarFieldEnum[]
  }

  /**
   * BarbershopService findMany
   */
  export type BarbershopServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarbershopServices to fetch.
     */
    where?: BarbershopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarbershopServices to fetch.
     */
    orderBy?: BarbershopServiceOrderByWithRelationInput | BarbershopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BarbershopServices.
     */
    cursor?: BarbershopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarbershopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarbershopServices.
     */
    skip?: number
    distinct?: BarbershopServiceScalarFieldEnum | BarbershopServiceScalarFieldEnum[]
  }

  /**
   * BarbershopService create
   */
  export type BarbershopServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a BarbershopService.
     */
    data: XOR<BarbershopServiceCreateInput, BarbershopServiceUncheckedCreateInput>
  }

  /**
   * BarbershopService createMany
   */
  export type BarbershopServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BarbershopServices.
     */
    data: BarbershopServiceCreateManyInput | BarbershopServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BarbershopService createManyAndReturn
   */
  export type BarbershopServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * The data used to create many BarbershopServices.
     */
    data: BarbershopServiceCreateManyInput | BarbershopServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarbershopService update
   */
  export type BarbershopServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a BarbershopService.
     */
    data: XOR<BarbershopServiceUpdateInput, BarbershopServiceUncheckedUpdateInput>
    /**
     * Choose, which BarbershopService to update.
     */
    where: BarbershopServiceWhereUniqueInput
  }

  /**
   * BarbershopService updateMany
   */
  export type BarbershopServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BarbershopServices.
     */
    data: XOR<BarbershopServiceUpdateManyMutationInput, BarbershopServiceUncheckedUpdateManyInput>
    /**
     * Filter which BarbershopServices to update
     */
    where?: BarbershopServiceWhereInput
    /**
     * Limit how many BarbershopServices to update.
     */
    limit?: number
  }

  /**
   * BarbershopService updateManyAndReturn
   */
  export type BarbershopServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * The data used to update BarbershopServices.
     */
    data: XOR<BarbershopServiceUpdateManyMutationInput, BarbershopServiceUncheckedUpdateManyInput>
    /**
     * Filter which BarbershopServices to update
     */
    where?: BarbershopServiceWhereInput
    /**
     * Limit how many BarbershopServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarbershopService upsert
   */
  export type BarbershopServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the BarbershopService to update in case it exists.
     */
    where: BarbershopServiceWhereUniqueInput
    /**
     * In case the BarbershopService found by the `where` argument doesn't exist, create a new BarbershopService with this data.
     */
    create: XOR<BarbershopServiceCreateInput, BarbershopServiceUncheckedCreateInput>
    /**
     * In case the BarbershopService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarbershopServiceUpdateInput, BarbershopServiceUncheckedUpdateInput>
  }

  /**
   * BarbershopService delete
   */
  export type BarbershopServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * Filter which BarbershopService to delete.
     */
    where: BarbershopServiceWhereUniqueInput
  }

  /**
   * BarbershopService deleteMany
   */
  export type BarbershopServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarbershopServices to delete
     */
    where?: BarbershopServiceWhereInput
    /**
     * Limit how many BarbershopServices to delete.
     */
    limit?: number
  }

  /**
   * BarbershopService.bookings
   */
  export type BarbershopService$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * BarbershopService without action
   */
  export type BarbershopServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    serviceId: string | null
    barbershopId: string | null
    date: Date | null
    cancelled: boolean | null
    cancelledAt: Date | null
    barbershopServiceId: string | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    serviceId: string | null
    barbershopId: string | null
    date: Date | null
    cancelled: boolean | null
    cancelledAt: Date | null
    barbershopServiceId: string | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    serviceId: number
    barbershopId: number
    date: number
    cancelled: number
    cancelledAt: number
    barbershopServiceId: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    serviceId?: true
    barbershopId?: true
    date?: true
    cancelled?: true
    cancelledAt?: true
    barbershopServiceId?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    serviceId?: true
    barbershopId?: true
    date?: true
    cancelled?: true
    cancelledAt?: true
    barbershopServiceId?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    serviceId?: true
    barbershopId?: true
    date?: true
    cancelled?: true
    cancelledAt?: true
    barbershopServiceId?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    serviceId: string
    barbershopId: string
    date: Date
    cancelled: boolean | null
    cancelledAt: Date | null
    barbershopServiceId: string | null
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    barbershopId?: boolean
    date?: boolean
    cancelled?: boolean
    cancelledAt?: boolean
    barbershopServiceId?: boolean
    Barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
    BarbershopService?: boolean | Booking$BarbershopServiceArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    barbershopId?: boolean
    date?: boolean
    cancelled?: boolean
    cancelledAt?: boolean
    barbershopServiceId?: boolean
    Barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
    BarbershopService?: boolean | Booking$BarbershopServiceArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    barbershopId?: boolean
    date?: boolean
    cancelled?: boolean
    cancelledAt?: boolean
    barbershopServiceId?: boolean
    Barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
    BarbershopService?: boolean | Booking$BarbershopServiceArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    serviceId?: boolean
    barbershopId?: boolean
    date?: boolean
    cancelled?: boolean
    cancelledAt?: boolean
    barbershopServiceId?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "barbershopId" | "date" | "cancelled" | "cancelledAt" | "barbershopServiceId", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
    BarbershopService?: boolean | Booking$BarbershopServiceArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
    BarbershopService?: boolean | Booking$BarbershopServiceArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
    BarbershopService?: boolean | Booking$BarbershopServiceArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      Barbershop: Prisma.$BarbershopPayload<ExtArgs>
      BarbershopService: Prisma.$BarbershopServicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceId: string
      barbershopId: string
      date: Date
      cancelled: boolean | null
      cancelledAt: Date | null
      barbershopServiceId: string | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Barbershop<T extends BarbershopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarbershopDefaultArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    BarbershopService<T extends Booking$BarbershopServiceArgs<ExtArgs> = {}>(args?: Subset<T, Booking$BarbershopServiceArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly serviceId: FieldRef<"Booking", 'String'>
    readonly barbershopId: FieldRef<"Booking", 'String'>
    readonly date: FieldRef<"Booking", 'DateTime'>
    readonly cancelled: FieldRef<"Booking", 'Boolean'>
    readonly cancelledAt: FieldRef<"Booking", 'DateTime'>
    readonly barbershopServiceId: FieldRef<"Booking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.BarbershopService
   */
  export type Booking$BarbershopServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    where?: BarbershopServiceWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BarbershopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    description: 'description',
    imageUrl: 'imageUrl',
    phones: 'phones'
  };

  export type BarbershopScalarFieldEnum = (typeof BarbershopScalarFieldEnum)[keyof typeof BarbershopScalarFieldEnum]


  export const BarbershopServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    barbershopId: 'barbershopId',
    priceInCents: 'priceInCents'
  };

  export type BarbershopServiceScalarFieldEnum = (typeof BarbershopServiceScalarFieldEnum)[keyof typeof BarbershopServiceScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    barbershopId: 'barbershopId',
    date: 'date',
    cancelled: 'cancelled',
    cancelledAt: 'cancelledAt',
    barbershopServiceId: 'barbershopServiceId'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BarbershopWhereInput = {
    AND?: BarbershopWhereInput | BarbershopWhereInput[]
    OR?: BarbershopWhereInput[]
    NOT?: BarbershopWhereInput | BarbershopWhereInput[]
    id?: StringFilter<"Barbershop"> | string
    name?: StringFilter<"Barbershop"> | string
    address?: StringFilter<"Barbershop"> | string
    description?: StringFilter<"Barbershop"> | string
    imageUrl?: StringFilter<"Barbershop"> | string
    phones?: StringNullableListFilter<"Barbershop">
    services?: BarbershopServiceListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type BarbershopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    phones?: SortOrder
    services?: BarbershopServiceOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type BarbershopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BarbershopWhereInput | BarbershopWhereInput[]
    OR?: BarbershopWhereInput[]
    NOT?: BarbershopWhereInput | BarbershopWhereInput[]
    name?: StringFilter<"Barbershop"> | string
    address?: StringFilter<"Barbershop"> | string
    description?: StringFilter<"Barbershop"> | string
    imageUrl?: StringFilter<"Barbershop"> | string
    phones?: StringNullableListFilter<"Barbershop">
    services?: BarbershopServiceListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id">

  export type BarbershopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    phones?: SortOrder
    _count?: BarbershopCountOrderByAggregateInput
    _max?: BarbershopMaxOrderByAggregateInput
    _min?: BarbershopMinOrderByAggregateInput
  }

  export type BarbershopScalarWhereWithAggregatesInput = {
    AND?: BarbershopScalarWhereWithAggregatesInput | BarbershopScalarWhereWithAggregatesInput[]
    OR?: BarbershopScalarWhereWithAggregatesInput[]
    NOT?: BarbershopScalarWhereWithAggregatesInput | BarbershopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Barbershop"> | string
    name?: StringWithAggregatesFilter<"Barbershop"> | string
    address?: StringWithAggregatesFilter<"Barbershop"> | string
    description?: StringWithAggregatesFilter<"Barbershop"> | string
    imageUrl?: StringWithAggregatesFilter<"Barbershop"> | string
    phones?: StringNullableListFilter<"Barbershop">
  }

  export type BarbershopServiceWhereInput = {
    AND?: BarbershopServiceWhereInput | BarbershopServiceWhereInput[]
    OR?: BarbershopServiceWhereInput[]
    NOT?: BarbershopServiceWhereInput | BarbershopServiceWhereInput[]
    id?: StringFilter<"BarbershopService"> | string
    name?: StringFilter<"BarbershopService"> | string
    description?: StringFilter<"BarbershopService"> | string
    imageUrl?: StringFilter<"BarbershopService"> | string
    barbershopId?: StringFilter<"BarbershopService"> | string
    priceInCents?: IntFilter<"BarbershopService"> | number
    barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type BarbershopServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    barbershopId?: SortOrder
    priceInCents?: SortOrder
    barbershop?: BarbershopOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type BarbershopServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BarbershopServiceWhereInput | BarbershopServiceWhereInput[]
    OR?: BarbershopServiceWhereInput[]
    NOT?: BarbershopServiceWhereInput | BarbershopServiceWhereInput[]
    name?: StringFilter<"BarbershopService"> | string
    description?: StringFilter<"BarbershopService"> | string
    imageUrl?: StringFilter<"BarbershopService"> | string
    barbershopId?: StringFilter<"BarbershopService"> | string
    priceInCents?: IntFilter<"BarbershopService"> | number
    barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
    bookings?: BookingListRelationFilter
  }, "id">

  export type BarbershopServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    barbershopId?: SortOrder
    priceInCents?: SortOrder
    _count?: BarbershopServiceCountOrderByAggregateInput
    _avg?: BarbershopServiceAvgOrderByAggregateInput
    _max?: BarbershopServiceMaxOrderByAggregateInput
    _min?: BarbershopServiceMinOrderByAggregateInput
    _sum?: BarbershopServiceSumOrderByAggregateInput
  }

  export type BarbershopServiceScalarWhereWithAggregatesInput = {
    AND?: BarbershopServiceScalarWhereWithAggregatesInput | BarbershopServiceScalarWhereWithAggregatesInput[]
    OR?: BarbershopServiceScalarWhereWithAggregatesInput[]
    NOT?: BarbershopServiceScalarWhereWithAggregatesInput | BarbershopServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BarbershopService"> | string
    name?: StringWithAggregatesFilter<"BarbershopService"> | string
    description?: StringWithAggregatesFilter<"BarbershopService"> | string
    imageUrl?: StringWithAggregatesFilter<"BarbershopService"> | string
    barbershopId?: StringWithAggregatesFilter<"BarbershopService"> | string
    priceInCents?: IntWithAggregatesFilter<"BarbershopService"> | number
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    serviceId?: StringFilter<"Booking"> | string
    barbershopId?: StringFilter<"Booking"> | string
    date?: DateTimeFilter<"Booking"> | Date | string
    cancelled?: BoolNullableFilter<"Booking"> | boolean | null
    cancelledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    barbershopServiceId?: StringNullableFilter<"Booking"> | string | null
    Barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
    BarbershopService?: XOR<BarbershopServiceNullableScalarRelationFilter, BarbershopServiceWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    barbershopId?: SortOrder
    date?: SortOrder
    cancelled?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    barbershopServiceId?: SortOrderInput | SortOrder
    Barbershop?: BarbershopOrderByWithRelationInput
    BarbershopService?: BarbershopServiceOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    serviceId?: StringFilter<"Booking"> | string
    barbershopId?: StringFilter<"Booking"> | string
    date?: DateTimeFilter<"Booking"> | Date | string
    cancelled?: BoolNullableFilter<"Booking"> | boolean | null
    cancelledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    barbershopServiceId?: StringNullableFilter<"Booking"> | string | null
    Barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
    BarbershopService?: XOR<BarbershopServiceNullableScalarRelationFilter, BarbershopServiceWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    barbershopId?: SortOrder
    date?: SortOrder
    cancelled?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    barbershopServiceId?: SortOrderInput | SortOrder
    _count?: BookingCountOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    serviceId?: StringWithAggregatesFilter<"Booking"> | string
    barbershopId?: StringWithAggregatesFilter<"Booking"> | string
    date?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    cancelled?: BoolNullableWithAggregatesFilter<"Booking"> | boolean | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    barbershopServiceId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
  }

  export type BarbershopCreateInput = {
    id?: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones?: BarbershopCreatephonesInput | string[]
    services?: BarbershopServiceCreateNestedManyWithoutBarbershopInput
    bookings?: BookingCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones?: BarbershopCreatephonesInput | string[]
    services?: BarbershopServiceUncheckedCreateNestedManyWithoutBarbershopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarbershopUpdatephonesInput | string[]
    services?: BarbershopServiceUpdateManyWithoutBarbershopNestedInput
    bookings?: BookingUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarbershopUpdatephonesInput | string[]
    services?: BarbershopServiceUncheckedUpdateManyWithoutBarbershopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopCreateManyInput = {
    id?: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones?: BarbershopCreatephonesInput | string[]
  }

  export type BarbershopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarbershopUpdatephonesInput | string[]
  }

  export type BarbershopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarbershopUpdatephonesInput | string[]
  }

  export type BarbershopServiceCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    priceInCents: number
    barbershop: BarbershopCreateNestedOneWithoutServicesInput
    bookings?: BookingCreateNestedManyWithoutBarbershopServiceInput
  }

  export type BarbershopServiceUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    barbershopId: string
    priceInCents: number
    bookings?: BookingUncheckedCreateNestedManyWithoutBarbershopServiceInput
  }

  export type BarbershopServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    barbershop?: BarbershopUpdateOneRequiredWithoutServicesNestedInput
    bookings?: BookingUpdateManyWithoutBarbershopServiceNestedInput
  }

  export type BarbershopServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    barbershopId?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutBarbershopServiceNestedInput
  }

  export type BarbershopServiceCreateManyInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    barbershopId: string
    priceInCents: number
  }

  export type BarbershopServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
  }

  export type BarbershopServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    barbershopId?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateInput = {
    id?: string
    serviceId: string
    date: Date | string
    cancelled?: boolean | null
    cancelledAt?: Date | string | null
    Barbershop: BarbershopCreateNestedOneWithoutBookingsInput
    BarbershopService?: BarbershopServiceCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    serviceId: string
    barbershopId: string
    date: Date | string
    cancelled?: boolean | null
    cancelledAt?: Date | string | null
    barbershopServiceId?: string | null
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Barbershop?: BarbershopUpdateOneRequiredWithoutBookingsNestedInput
    BarbershopService?: BarbershopServiceUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    barbershopId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    barbershopServiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingCreateManyInput = {
    id?: string
    serviceId: string
    barbershopId: string
    date: Date | string
    cancelled?: boolean | null
    cancelledAt?: Date | string | null
    barbershopServiceId?: string | null
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    barbershopId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    barbershopServiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BarbershopServiceListRelationFilter = {
    every?: BarbershopServiceWhereInput
    some?: BarbershopServiceWhereInput
    none?: BarbershopServiceWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BarbershopServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarbershopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    phones?: SortOrder
  }

  export type BarbershopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
  }

  export type BarbershopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BarbershopScalarRelationFilter = {
    is?: BarbershopWhereInput
    isNot?: BarbershopWhereInput
  }

  export type BarbershopServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    barbershopId?: SortOrder
    priceInCents?: SortOrder
  }

  export type BarbershopServiceAvgOrderByAggregateInput = {
    priceInCents?: SortOrder
  }

  export type BarbershopServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    barbershopId?: SortOrder
    priceInCents?: SortOrder
  }

  export type BarbershopServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    barbershopId?: SortOrder
    priceInCents?: SortOrder
  }

  export type BarbershopServiceSumOrderByAggregateInput = {
    priceInCents?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BarbershopServiceNullableScalarRelationFilter = {
    is?: BarbershopServiceWhereInput | null
    isNot?: BarbershopServiceWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    barbershopId?: SortOrder
    date?: SortOrder
    cancelled?: SortOrder
    cancelledAt?: SortOrder
    barbershopServiceId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    barbershopId?: SortOrder
    date?: SortOrder
    cancelled?: SortOrder
    cancelledAt?: SortOrder
    barbershopServiceId?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    barbershopId?: SortOrder
    date?: SortOrder
    cancelled?: SortOrder
    cancelledAt?: SortOrder
    barbershopServiceId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BarbershopCreatephonesInput = {
    set: string[]
  }

  export type BarbershopServiceCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<BarbershopServiceCreateWithoutBarbershopInput, BarbershopServiceUncheckedCreateWithoutBarbershopInput> | BarbershopServiceCreateWithoutBarbershopInput[] | BarbershopServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarbershopServiceCreateOrConnectWithoutBarbershopInput | BarbershopServiceCreateOrConnectWithoutBarbershopInput[]
    createMany?: BarbershopServiceCreateManyBarbershopInputEnvelope
    connect?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<BookingCreateWithoutBarbershopInput, BookingUncheckedCreateWithoutBarbershopInput> | BookingCreateWithoutBarbershopInput[] | BookingUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarbershopInput | BookingCreateOrConnectWithoutBarbershopInput[]
    createMany?: BookingCreateManyBarbershopInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BarbershopServiceUncheckedCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<BarbershopServiceCreateWithoutBarbershopInput, BarbershopServiceUncheckedCreateWithoutBarbershopInput> | BarbershopServiceCreateWithoutBarbershopInput[] | BarbershopServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarbershopServiceCreateOrConnectWithoutBarbershopInput | BarbershopServiceCreateOrConnectWithoutBarbershopInput[]
    createMany?: BarbershopServiceCreateManyBarbershopInputEnvelope
    connect?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<BookingCreateWithoutBarbershopInput, BookingUncheckedCreateWithoutBarbershopInput> | BookingCreateWithoutBarbershopInput[] | BookingUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarbershopInput | BookingCreateOrConnectWithoutBarbershopInput[]
    createMany?: BookingCreateManyBarbershopInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BarbershopUpdatephonesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BarbershopServiceUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<BarbershopServiceCreateWithoutBarbershopInput, BarbershopServiceUncheckedCreateWithoutBarbershopInput> | BarbershopServiceCreateWithoutBarbershopInput[] | BarbershopServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarbershopServiceCreateOrConnectWithoutBarbershopInput | BarbershopServiceCreateOrConnectWithoutBarbershopInput[]
    upsert?: BarbershopServiceUpsertWithWhereUniqueWithoutBarbershopInput | BarbershopServiceUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: BarbershopServiceCreateManyBarbershopInputEnvelope
    set?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    disconnect?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    delete?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    connect?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    update?: BarbershopServiceUpdateWithWhereUniqueWithoutBarbershopInput | BarbershopServiceUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: BarbershopServiceUpdateManyWithWhereWithoutBarbershopInput | BarbershopServiceUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: BarbershopServiceScalarWhereInput | BarbershopServiceScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<BookingCreateWithoutBarbershopInput, BookingUncheckedCreateWithoutBarbershopInput> | BookingCreateWithoutBarbershopInput[] | BookingUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarbershopInput | BookingCreateOrConnectWithoutBarbershopInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutBarbershopInput | BookingUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: BookingCreateManyBarbershopInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutBarbershopInput | BookingUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutBarbershopInput | BookingUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BarbershopServiceUncheckedUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<BarbershopServiceCreateWithoutBarbershopInput, BarbershopServiceUncheckedCreateWithoutBarbershopInput> | BarbershopServiceCreateWithoutBarbershopInput[] | BarbershopServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarbershopServiceCreateOrConnectWithoutBarbershopInput | BarbershopServiceCreateOrConnectWithoutBarbershopInput[]
    upsert?: BarbershopServiceUpsertWithWhereUniqueWithoutBarbershopInput | BarbershopServiceUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: BarbershopServiceCreateManyBarbershopInputEnvelope
    set?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    disconnect?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    delete?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    connect?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    update?: BarbershopServiceUpdateWithWhereUniqueWithoutBarbershopInput | BarbershopServiceUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: BarbershopServiceUpdateManyWithWhereWithoutBarbershopInput | BarbershopServiceUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: BarbershopServiceScalarWhereInput | BarbershopServiceScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<BookingCreateWithoutBarbershopInput, BookingUncheckedCreateWithoutBarbershopInput> | BookingCreateWithoutBarbershopInput[] | BookingUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarbershopInput | BookingCreateOrConnectWithoutBarbershopInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutBarbershopInput | BookingUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: BookingCreateManyBarbershopInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutBarbershopInput | BookingUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutBarbershopInput | BookingUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BarbershopCreateNestedOneWithoutServicesInput = {
    create?: XOR<BarbershopCreateWithoutServicesInput, BarbershopUncheckedCreateWithoutServicesInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutServicesInput
    connect?: BarbershopWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutBarbershopServiceInput = {
    create?: XOR<BookingCreateWithoutBarbershopServiceInput, BookingUncheckedCreateWithoutBarbershopServiceInput> | BookingCreateWithoutBarbershopServiceInput[] | BookingUncheckedCreateWithoutBarbershopServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarbershopServiceInput | BookingCreateOrConnectWithoutBarbershopServiceInput[]
    createMany?: BookingCreateManyBarbershopServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutBarbershopServiceInput = {
    create?: XOR<BookingCreateWithoutBarbershopServiceInput, BookingUncheckedCreateWithoutBarbershopServiceInput> | BookingCreateWithoutBarbershopServiceInput[] | BookingUncheckedCreateWithoutBarbershopServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarbershopServiceInput | BookingCreateOrConnectWithoutBarbershopServiceInput[]
    createMany?: BookingCreateManyBarbershopServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BarbershopUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<BarbershopCreateWithoutServicesInput, BarbershopUncheckedCreateWithoutServicesInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutServicesInput
    upsert?: BarbershopUpsertWithoutServicesInput
    connect?: BarbershopWhereUniqueInput
    update?: XOR<XOR<BarbershopUpdateToOneWithWhereWithoutServicesInput, BarbershopUpdateWithoutServicesInput>, BarbershopUncheckedUpdateWithoutServicesInput>
  }

  export type BookingUpdateManyWithoutBarbershopServiceNestedInput = {
    create?: XOR<BookingCreateWithoutBarbershopServiceInput, BookingUncheckedCreateWithoutBarbershopServiceInput> | BookingCreateWithoutBarbershopServiceInput[] | BookingUncheckedCreateWithoutBarbershopServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarbershopServiceInput | BookingCreateOrConnectWithoutBarbershopServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutBarbershopServiceInput | BookingUpsertWithWhereUniqueWithoutBarbershopServiceInput[]
    createMany?: BookingCreateManyBarbershopServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutBarbershopServiceInput | BookingUpdateWithWhereUniqueWithoutBarbershopServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutBarbershopServiceInput | BookingUpdateManyWithWhereWithoutBarbershopServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutBarbershopServiceNestedInput = {
    create?: XOR<BookingCreateWithoutBarbershopServiceInput, BookingUncheckedCreateWithoutBarbershopServiceInput> | BookingCreateWithoutBarbershopServiceInput[] | BookingUncheckedCreateWithoutBarbershopServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBarbershopServiceInput | BookingCreateOrConnectWithoutBarbershopServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutBarbershopServiceInput | BookingUpsertWithWhereUniqueWithoutBarbershopServiceInput[]
    createMany?: BookingCreateManyBarbershopServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutBarbershopServiceInput | BookingUpdateWithWhereUniqueWithoutBarbershopServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutBarbershopServiceInput | BookingUpdateManyWithWhereWithoutBarbershopServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BarbershopCreateNestedOneWithoutBookingsInput = {
    create?: XOR<BarbershopCreateWithoutBookingsInput, BarbershopUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutBookingsInput
    connect?: BarbershopWhereUniqueInput
  }

  export type BarbershopServiceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<BarbershopServiceCreateWithoutBookingsInput, BarbershopServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BarbershopServiceCreateOrConnectWithoutBookingsInput
    connect?: BarbershopServiceWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BarbershopUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<BarbershopCreateWithoutBookingsInput, BarbershopUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutBookingsInput
    upsert?: BarbershopUpsertWithoutBookingsInput
    connect?: BarbershopWhereUniqueInput
    update?: XOR<XOR<BarbershopUpdateToOneWithWhereWithoutBookingsInput, BarbershopUpdateWithoutBookingsInput>, BarbershopUncheckedUpdateWithoutBookingsInput>
  }

  export type BarbershopServiceUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<BarbershopServiceCreateWithoutBookingsInput, BarbershopServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BarbershopServiceCreateOrConnectWithoutBookingsInput
    upsert?: BarbershopServiceUpsertWithoutBookingsInput
    disconnect?: BarbershopServiceWhereInput | boolean
    delete?: BarbershopServiceWhereInput | boolean
    connect?: BarbershopServiceWhereUniqueInput
    update?: XOR<XOR<BarbershopServiceUpdateToOneWithWhereWithoutBookingsInput, BarbershopServiceUpdateWithoutBookingsInput>, BarbershopServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BarbershopServiceCreateWithoutBarbershopInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    priceInCents: number
    bookings?: BookingCreateNestedManyWithoutBarbershopServiceInput
  }

  export type BarbershopServiceUncheckedCreateWithoutBarbershopInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    priceInCents: number
    bookings?: BookingUncheckedCreateNestedManyWithoutBarbershopServiceInput
  }

  export type BarbershopServiceCreateOrConnectWithoutBarbershopInput = {
    where: BarbershopServiceWhereUniqueInput
    create: XOR<BarbershopServiceCreateWithoutBarbershopInput, BarbershopServiceUncheckedCreateWithoutBarbershopInput>
  }

  export type BarbershopServiceCreateManyBarbershopInputEnvelope = {
    data: BarbershopServiceCreateManyBarbershopInput | BarbershopServiceCreateManyBarbershopInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutBarbershopInput = {
    id?: string
    serviceId: string
    date: Date | string
    cancelled?: boolean | null
    cancelledAt?: Date | string | null
    BarbershopService?: BarbershopServiceCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutBarbershopInput = {
    id?: string
    serviceId: string
    date: Date | string
    cancelled?: boolean | null
    cancelledAt?: Date | string | null
    barbershopServiceId?: string | null
  }

  export type BookingCreateOrConnectWithoutBarbershopInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutBarbershopInput, BookingUncheckedCreateWithoutBarbershopInput>
  }

  export type BookingCreateManyBarbershopInputEnvelope = {
    data: BookingCreateManyBarbershopInput | BookingCreateManyBarbershopInput[]
    skipDuplicates?: boolean
  }

  export type BarbershopServiceUpsertWithWhereUniqueWithoutBarbershopInput = {
    where: BarbershopServiceWhereUniqueInput
    update: XOR<BarbershopServiceUpdateWithoutBarbershopInput, BarbershopServiceUncheckedUpdateWithoutBarbershopInput>
    create: XOR<BarbershopServiceCreateWithoutBarbershopInput, BarbershopServiceUncheckedCreateWithoutBarbershopInput>
  }

  export type BarbershopServiceUpdateWithWhereUniqueWithoutBarbershopInput = {
    where: BarbershopServiceWhereUniqueInput
    data: XOR<BarbershopServiceUpdateWithoutBarbershopInput, BarbershopServiceUncheckedUpdateWithoutBarbershopInput>
  }

  export type BarbershopServiceUpdateManyWithWhereWithoutBarbershopInput = {
    where: BarbershopServiceScalarWhereInput
    data: XOR<BarbershopServiceUpdateManyMutationInput, BarbershopServiceUncheckedUpdateManyWithoutBarbershopInput>
  }

  export type BarbershopServiceScalarWhereInput = {
    AND?: BarbershopServiceScalarWhereInput | BarbershopServiceScalarWhereInput[]
    OR?: BarbershopServiceScalarWhereInput[]
    NOT?: BarbershopServiceScalarWhereInput | BarbershopServiceScalarWhereInput[]
    id?: StringFilter<"BarbershopService"> | string
    name?: StringFilter<"BarbershopService"> | string
    description?: StringFilter<"BarbershopService"> | string
    imageUrl?: StringFilter<"BarbershopService"> | string
    barbershopId?: StringFilter<"BarbershopService"> | string
    priceInCents?: IntFilter<"BarbershopService"> | number
  }

  export type BookingUpsertWithWhereUniqueWithoutBarbershopInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutBarbershopInput, BookingUncheckedUpdateWithoutBarbershopInput>
    create: XOR<BookingCreateWithoutBarbershopInput, BookingUncheckedCreateWithoutBarbershopInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutBarbershopInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutBarbershopInput, BookingUncheckedUpdateWithoutBarbershopInput>
  }

  export type BookingUpdateManyWithWhereWithoutBarbershopInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutBarbershopInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    serviceId?: StringFilter<"Booking"> | string
    barbershopId?: StringFilter<"Booking"> | string
    date?: DateTimeFilter<"Booking"> | Date | string
    cancelled?: BoolNullableFilter<"Booking"> | boolean | null
    cancelledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    barbershopServiceId?: StringNullableFilter<"Booking"> | string | null
  }

  export type BarbershopCreateWithoutServicesInput = {
    id?: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones?: BarbershopCreatephonesInput | string[]
    bookings?: BookingCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones?: BarbershopCreatephonesInput | string[]
    bookings?: BookingUncheckedCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopCreateOrConnectWithoutServicesInput = {
    where: BarbershopWhereUniqueInput
    create: XOR<BarbershopCreateWithoutServicesInput, BarbershopUncheckedCreateWithoutServicesInput>
  }

  export type BookingCreateWithoutBarbershopServiceInput = {
    id?: string
    serviceId: string
    date: Date | string
    cancelled?: boolean | null
    cancelledAt?: Date | string | null
    Barbershop: BarbershopCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutBarbershopServiceInput = {
    id?: string
    serviceId: string
    barbershopId: string
    date: Date | string
    cancelled?: boolean | null
    cancelledAt?: Date | string | null
  }

  export type BookingCreateOrConnectWithoutBarbershopServiceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutBarbershopServiceInput, BookingUncheckedCreateWithoutBarbershopServiceInput>
  }

  export type BookingCreateManyBarbershopServiceInputEnvelope = {
    data: BookingCreateManyBarbershopServiceInput | BookingCreateManyBarbershopServiceInput[]
    skipDuplicates?: boolean
  }

  export type BarbershopUpsertWithoutServicesInput = {
    update: XOR<BarbershopUpdateWithoutServicesInput, BarbershopUncheckedUpdateWithoutServicesInput>
    create: XOR<BarbershopCreateWithoutServicesInput, BarbershopUncheckedCreateWithoutServicesInput>
    where?: BarbershopWhereInput
  }

  export type BarbershopUpdateToOneWithWhereWithoutServicesInput = {
    where?: BarbershopWhereInput
    data: XOR<BarbershopUpdateWithoutServicesInput, BarbershopUncheckedUpdateWithoutServicesInput>
  }

  export type BarbershopUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarbershopUpdatephonesInput | string[]
    bookings?: BookingUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarbershopUpdatephonesInput | string[]
    bookings?: BookingUncheckedUpdateManyWithoutBarbershopNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutBarbershopServiceInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutBarbershopServiceInput, BookingUncheckedUpdateWithoutBarbershopServiceInput>
    create: XOR<BookingCreateWithoutBarbershopServiceInput, BookingUncheckedCreateWithoutBarbershopServiceInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutBarbershopServiceInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutBarbershopServiceInput, BookingUncheckedUpdateWithoutBarbershopServiceInput>
  }

  export type BookingUpdateManyWithWhereWithoutBarbershopServiceInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutBarbershopServiceInput>
  }

  export type BarbershopCreateWithoutBookingsInput = {
    id?: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones?: BarbershopCreatephonesInput | string[]
    services?: BarbershopServiceCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    address: string
    description: string
    imageUrl: string
    phones?: BarbershopCreatephonesInput | string[]
    services?: BarbershopServiceUncheckedCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopCreateOrConnectWithoutBookingsInput = {
    where: BarbershopWhereUniqueInput
    create: XOR<BarbershopCreateWithoutBookingsInput, BarbershopUncheckedCreateWithoutBookingsInput>
  }

  export type BarbershopServiceCreateWithoutBookingsInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    priceInCents: number
    barbershop: BarbershopCreateNestedOneWithoutServicesInput
  }

  export type BarbershopServiceUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    barbershopId: string
    priceInCents: number
  }

  export type BarbershopServiceCreateOrConnectWithoutBookingsInput = {
    where: BarbershopServiceWhereUniqueInput
    create: XOR<BarbershopServiceCreateWithoutBookingsInput, BarbershopServiceUncheckedCreateWithoutBookingsInput>
  }

  export type BarbershopUpsertWithoutBookingsInput = {
    update: XOR<BarbershopUpdateWithoutBookingsInput, BarbershopUncheckedUpdateWithoutBookingsInput>
    create: XOR<BarbershopCreateWithoutBookingsInput, BarbershopUncheckedCreateWithoutBookingsInput>
    where?: BarbershopWhereInput
  }

  export type BarbershopUpdateToOneWithWhereWithoutBookingsInput = {
    where?: BarbershopWhereInput
    data: XOR<BarbershopUpdateWithoutBookingsInput, BarbershopUncheckedUpdateWithoutBookingsInput>
  }

  export type BarbershopUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarbershopUpdatephonesInput | string[]
    services?: BarbershopServiceUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    phones?: BarbershopUpdatephonesInput | string[]
    services?: BarbershopServiceUncheckedUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopServiceUpsertWithoutBookingsInput = {
    update: XOR<BarbershopServiceUpdateWithoutBookingsInput, BarbershopServiceUncheckedUpdateWithoutBookingsInput>
    create: XOR<BarbershopServiceCreateWithoutBookingsInput, BarbershopServiceUncheckedCreateWithoutBookingsInput>
    where?: BarbershopServiceWhereInput
  }

  export type BarbershopServiceUpdateToOneWithWhereWithoutBookingsInput = {
    where?: BarbershopServiceWhereInput
    data: XOR<BarbershopServiceUpdateWithoutBookingsInput, BarbershopServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type BarbershopServiceUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    barbershop?: BarbershopUpdateOneRequiredWithoutServicesNestedInput
  }

  export type BarbershopServiceUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    barbershopId?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
  }

  export type BarbershopServiceCreateManyBarbershopInput = {
    id?: string
    name: string
    description: string
    imageUrl: string
    priceInCents: number
  }

  export type BookingCreateManyBarbershopInput = {
    id?: string
    serviceId: string
    date: Date | string
    cancelled?: boolean | null
    cancelledAt?: Date | string | null
    barbershopServiceId?: string | null
  }

  export type BarbershopServiceUpdateWithoutBarbershopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUpdateManyWithoutBarbershopServiceNestedInput
  }

  export type BarbershopServiceUncheckedUpdateWithoutBarbershopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
    bookings?: BookingUncheckedUpdateManyWithoutBarbershopServiceNestedInput
  }

  export type BarbershopServiceUncheckedUpdateManyWithoutBarbershopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    priceInCents?: IntFieldUpdateOperationsInput | number
  }

  export type BookingUpdateWithoutBarbershopInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BarbershopService?: BarbershopServiceUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutBarbershopInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    barbershopServiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingUncheckedUpdateManyWithoutBarbershopInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    barbershopServiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingCreateManyBarbershopServiceInput = {
    id?: string
    serviceId: string
    barbershopId: string
    date: Date | string
    cancelled?: boolean | null
    cancelledAt?: Date | string | null
  }

  export type BookingUpdateWithoutBarbershopServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Barbershop?: BarbershopUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutBarbershopServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    barbershopId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingUncheckedUpdateManyWithoutBarbershopServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    barbershopId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}