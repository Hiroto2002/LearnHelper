
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = {
  id: number
  email: string
  password: string
  createdAt: Date
}

/**
 * Model Post
 * 
 */
export type Post = {
  id: number
  title: string
  priority: number
  content: string
  getContent: string
  createdAt: Date
  authorId: number
}

/**
 * Model Tech
 * 
 */
export type Tech = {
  id: number
  title: string
  priority: number
  whyWant: string
  createdAt: Date
  authorId: number
}

/**
 * Model NeedContent
 * 
 */
export type NeedContent = {
  id: number
  title: string
  authorId: number
  createdAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.tech`: Exposes CRUD operations for the **Tech** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teches
    * const teches = await prisma.tech.findMany()
    * ```
    */
  get tech(): Prisma.TechDelegate<GlobalReject>;

  /**
   * `prisma.needContent`: Exposes CRUD operations for the **NeedContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NeedContents
    * const needContents = await prisma.needContent.findMany()
    * ```
    */
  get needContent(): Prisma.NeedContentDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Post: 'Post',
    Tech: 'Tech',
    NeedContent: 'NeedContent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    posts: number
    techs: number
  }

  export type UserCountOutputTypeSelect = {
    posts?: boolean
    techs?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type PostCountOutputType
   */


  export type PostCountOutputType = {
    techs: number
    needContent: number
  }

  export type PostCountOutputTypeSelect = {
    techs?: boolean
    needContent?: boolean
  }

  export type PostCountOutputTypeGetPayload<S extends boolean | null | undefined | PostCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PostCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PostCountOutputTypeArgs)
    ? PostCountOutputType 
    : S extends { select: any } & (PostCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PostCountOutputType ? PostCountOutputType[P] : never
  } 
      : PostCountOutputType




  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect | null
  }



  /**
   * Count Type TechCountOutputType
   */


  export type TechCountOutputType = {
    posts: number
  }

  export type TechCountOutputTypeSelect = {
    posts?: boolean
  }

  export type TechCountOutputTypeGetPayload<S extends boolean | null | undefined | TechCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TechCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TechCountOutputTypeArgs)
    ? TechCountOutputType 
    : S extends { select: any } & (TechCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TechCountOutputType ? TechCountOutputType[P] : never
  } 
      : TechCountOutputType




  // Custom InputTypes

  /**
   * TechCountOutputType without action
   */
  export type TechCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TechCountOutputType
     */
    select?: TechCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    posts?: boolean | User$postsArgs
    techs?: boolean | User$techsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    posts?: boolean | User$postsArgs
    techs?: boolean | User$techsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'posts' ? Array < PostGetPayload<S['include'][P]>>  :
        P extends 'techs' ? Array < TechGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'posts' ? Array < PostGetPayload<S['select'][P]>>  :
        P extends 'techs' ? Array < TechGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    posts<T extends User$postsArgs= {}>(args?: Subset<T, User$postsArgs>): Prisma.PrismaPromise<Array<PostGetPayload<T>>| Null>;

    techs<T extends User$techsArgs= {}>(args?: Subset<T, User$techsArgs>): Prisma.PrismaPromise<Array<TechGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.posts
   */
  export type User$postsArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * User.techs
   */
  export type User$techsArgs = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechInclude | null
    where?: TechWhereInput
    orderBy?: Enumerable<TechOrderByWithRelationInput>
    cursor?: TechWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TechScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    priority: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    priority: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    priority: number | null
    content: string | null
    getContent: string | null
    createdAt: Date | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    priority: number | null
    content: string | null
    getContent: string | null
    createdAt: Date | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    priority: number
    content: number
    getContent: number
    createdAt: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    priority?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    priority?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    priority?: true
    content?: true
    getContent?: true
    createdAt?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    priority?: true
    content?: true
    getContent?: true
    createdAt?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    priority?: true
    content?: true
    getContent?: true
    createdAt?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs = {
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithAggregationInput>
    by: PostScalarFieldEnum[]
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    id: number
    title: string
    priority: number
    content: string
    getContent: string
    createdAt: Date
    authorId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect = {
    id?: boolean
    title?: boolean
    priority?: boolean
    content?: boolean
    getContent?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | UserArgs
    techs?: boolean | Post$techsArgs
    needContent?: boolean | Post$needContentArgs
    _count?: boolean | PostCountOutputTypeArgs
  }


  export type PostInclude = {
    author?: boolean | UserArgs
    techs?: boolean | Post$techsArgs
    needContent?: boolean | Post$needContentArgs
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type PostGetPayload<S extends boolean | null | undefined | PostArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Post :
    S extends undefined ? never :
    S extends { include: any } & (PostArgs | PostFindManyArgs)
    ? Post  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? UserGetPayload<S['include'][P]> :
        P extends 'techs' ? Array < TechGetPayload<S['include'][P]>>  :
        P extends 'needContent' ? Array < NeedContentGetPayload<S['include'][P]>>  :
        P extends '_count' ? PostCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PostArgs | PostFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? UserGetPayload<S['select'][P]> :
        P extends 'techs' ? Array < TechGetPayload<S['select'][P]>>  :
        P extends 'needContent' ? Array < NeedContentGetPayload<S['select'][P]>>  :
        P extends '_count' ? PostCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Post ? Post[P] : never
  } 
      : Post


  type PostCountArgs = 
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Post'> extends True ? Prisma__PostClient<PostGetPayload<T>> : Prisma__PostClient<PostGetPayload<T> | null, null>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Post'> extends True ? Prisma__PostClient<PostGetPayload<T>> : Prisma__PostClient<PostGetPayload<T> | null, null>

    /**
     * Find the first Post that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): Prisma.PrismaPromise<Array<PostGetPayload<T>>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    author<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    techs<T extends Post$techsArgs= {}>(args?: Subset<T, Post$techsArgs>): Prisma.PrismaPromise<Array<TechGetPayload<T>>| Null>;

    needContent<T extends Post$needContentArgs= {}>(args?: Subset<T, Post$needContentArgs>): Prisma.PrismaPromise<Array<NeedContentGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Post base type for findUnique actions
   */
  export type PostFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUnique
   */
  export interface PostFindUniqueArgs extends PostFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post base type for findFirst actions
   */
  export type PostFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: Enumerable<PostScalarFieldEnum>
  }

  /**
   * Post findFirst
   */
  export interface PostFindFirstArgs extends PostFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    /**
     * The data used to create many Posts.
     */
    data: Enumerable<PostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post.techs
   */
  export type Post$techsArgs = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechInclude | null
    where?: TechWhereInput
    orderBy?: Enumerable<TechOrderByWithRelationInput>
    cursor?: TechWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TechScalarFieldEnum>
  }


  /**
   * Post.needContent
   */
  export type Post$needContentArgs = {
    /**
     * Select specific fields to fetch from the NeedContent
     */
    select?: NeedContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NeedContentInclude | null
    where?: NeedContentWhereInput
    orderBy?: Enumerable<NeedContentOrderByWithRelationInput>
    cursor?: NeedContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<NeedContentScalarFieldEnum>
  }


  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
  }



  /**
   * Model Tech
   */


  export type AggregateTech = {
    _count: TechCountAggregateOutputType | null
    _avg: TechAvgAggregateOutputType | null
    _sum: TechSumAggregateOutputType | null
    _min: TechMinAggregateOutputType | null
    _max: TechMaxAggregateOutputType | null
  }

  export type TechAvgAggregateOutputType = {
    id: number | null
    priority: number | null
    authorId: number | null
  }

  export type TechSumAggregateOutputType = {
    id: number | null
    priority: number | null
    authorId: number | null
  }

  export type TechMinAggregateOutputType = {
    id: number | null
    title: string | null
    priority: number | null
    whyWant: string | null
    createdAt: Date | null
    authorId: number | null
  }

  export type TechMaxAggregateOutputType = {
    id: number | null
    title: string | null
    priority: number | null
    whyWant: string | null
    createdAt: Date | null
    authorId: number | null
  }

  export type TechCountAggregateOutputType = {
    id: number
    title: number
    priority: number
    whyWant: number
    createdAt: number
    authorId: number
    _all: number
  }


  export type TechAvgAggregateInputType = {
    id?: true
    priority?: true
    authorId?: true
  }

  export type TechSumAggregateInputType = {
    id?: true
    priority?: true
    authorId?: true
  }

  export type TechMinAggregateInputType = {
    id?: true
    title?: true
    priority?: true
    whyWant?: true
    createdAt?: true
    authorId?: true
  }

  export type TechMaxAggregateInputType = {
    id?: true
    title?: true
    priority?: true
    whyWant?: true
    createdAt?: true
    authorId?: true
  }

  export type TechCountAggregateInputType = {
    id?: true
    title?: true
    priority?: true
    whyWant?: true
    createdAt?: true
    authorId?: true
    _all?: true
  }

  export type TechAggregateArgs = {
    /**
     * Filter which Tech to aggregate.
     */
    where?: TechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teches to fetch.
     */
    orderBy?: Enumerable<TechOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teches
    **/
    _count?: true | TechCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechMaxAggregateInputType
  }

  export type GetTechAggregateType<T extends TechAggregateArgs> = {
        [P in keyof T & keyof AggregateTech]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTech[P]>
      : GetScalarType<T[P], AggregateTech[P]>
  }




  export type TechGroupByArgs = {
    where?: TechWhereInput
    orderBy?: Enumerable<TechOrderByWithAggregationInput>
    by: TechScalarFieldEnum[]
    having?: TechScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechCountAggregateInputType | true
    _avg?: TechAvgAggregateInputType
    _sum?: TechSumAggregateInputType
    _min?: TechMinAggregateInputType
    _max?: TechMaxAggregateInputType
  }


  export type TechGroupByOutputType = {
    id: number
    title: string
    priority: number
    whyWant: string
    createdAt: Date
    authorId: number
    _count: TechCountAggregateOutputType | null
    _avg: TechAvgAggregateOutputType | null
    _sum: TechSumAggregateOutputType | null
    _min: TechMinAggregateOutputType | null
    _max: TechMaxAggregateOutputType | null
  }

  type GetTechGroupByPayload<T extends TechGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TechGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechGroupByOutputType[P]>
            : GetScalarType<T[P], TechGroupByOutputType[P]>
        }
      >
    >


  export type TechSelect = {
    id?: boolean
    title?: boolean
    priority?: boolean
    whyWant?: boolean
    createdAt?: boolean
    authorId?: boolean
    author?: boolean | UserArgs
    posts?: boolean | Tech$postsArgs
    _count?: boolean | TechCountOutputTypeArgs
  }


  export type TechInclude = {
    author?: boolean | UserArgs
    posts?: boolean | Tech$postsArgs
    _count?: boolean | TechCountOutputTypeArgs
  }

  export type TechGetPayload<S extends boolean | null | undefined | TechArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Tech :
    S extends undefined ? never :
    S extends { include: any } & (TechArgs | TechFindManyArgs)
    ? Tech  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? UserGetPayload<S['include'][P]> :
        P extends 'posts' ? Array < PostGetPayload<S['include'][P]>>  :
        P extends '_count' ? TechCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TechArgs | TechFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? UserGetPayload<S['select'][P]> :
        P extends 'posts' ? Array < PostGetPayload<S['select'][P]>>  :
        P extends '_count' ? TechCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Tech ? Tech[P] : never
  } 
      : Tech


  type TechCountArgs = 
    Omit<TechFindManyArgs, 'select' | 'include'> & {
      select?: TechCountAggregateInputType | true
    }

  export interface TechDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tech that matches the filter.
     * @param {TechFindUniqueArgs} args - Arguments to find a Tech
     * @example
     * // Get one Tech
     * const tech = await prisma.tech.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TechFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TechFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tech'> extends True ? Prisma__TechClient<TechGetPayload<T>> : Prisma__TechClient<TechGetPayload<T> | null, null>

    /**
     * Find one Tech that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TechFindUniqueOrThrowArgs} args - Arguments to find a Tech
     * @example
     * // Get one Tech
     * const tech = await prisma.tech.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TechFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TechFindUniqueOrThrowArgs>
    ): Prisma__TechClient<TechGetPayload<T>>

    /**
     * Find the first Tech that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechFindFirstArgs} args - Arguments to find a Tech
     * @example
     * // Get one Tech
     * const tech = await prisma.tech.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TechFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TechFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tech'> extends True ? Prisma__TechClient<TechGetPayload<T>> : Prisma__TechClient<TechGetPayload<T> | null, null>

    /**
     * Find the first Tech that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechFindFirstOrThrowArgs} args - Arguments to find a Tech
     * @example
     * // Get one Tech
     * const tech = await prisma.tech.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TechFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TechFindFirstOrThrowArgs>
    ): Prisma__TechClient<TechGetPayload<T>>

    /**
     * Find zero or more Teches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teches
     * const teches = await prisma.tech.findMany()
     * 
     * // Get first 10 Teches
     * const teches = await prisma.tech.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const techWithIdOnly = await prisma.tech.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TechFindManyArgs>(
      args?: SelectSubset<T, TechFindManyArgs>
    ): Prisma.PrismaPromise<Array<TechGetPayload<T>>>

    /**
     * Create a Tech.
     * @param {TechCreateArgs} args - Arguments to create a Tech.
     * @example
     * // Create one Tech
     * const Tech = await prisma.tech.create({
     *   data: {
     *     // ... data to create a Tech
     *   }
     * })
     * 
    **/
    create<T extends TechCreateArgs>(
      args: SelectSubset<T, TechCreateArgs>
    ): Prisma__TechClient<TechGetPayload<T>>

    /**
     * Create many Teches.
     *     @param {TechCreateManyArgs} args - Arguments to create many Teches.
     *     @example
     *     // Create many Teches
     *     const tech = await prisma.tech.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TechCreateManyArgs>(
      args?: SelectSubset<T, TechCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tech.
     * @param {TechDeleteArgs} args - Arguments to delete one Tech.
     * @example
     * // Delete one Tech
     * const Tech = await prisma.tech.delete({
     *   where: {
     *     // ... filter to delete one Tech
     *   }
     * })
     * 
    **/
    delete<T extends TechDeleteArgs>(
      args: SelectSubset<T, TechDeleteArgs>
    ): Prisma__TechClient<TechGetPayload<T>>

    /**
     * Update one Tech.
     * @param {TechUpdateArgs} args - Arguments to update one Tech.
     * @example
     * // Update one Tech
     * const tech = await prisma.tech.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TechUpdateArgs>(
      args: SelectSubset<T, TechUpdateArgs>
    ): Prisma__TechClient<TechGetPayload<T>>

    /**
     * Delete zero or more Teches.
     * @param {TechDeleteManyArgs} args - Arguments to filter Teches to delete.
     * @example
     * // Delete a few Teches
     * const { count } = await prisma.tech.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TechDeleteManyArgs>(
      args?: SelectSubset<T, TechDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teches
     * const tech = await prisma.tech.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TechUpdateManyArgs>(
      args: SelectSubset<T, TechUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tech.
     * @param {TechUpsertArgs} args - Arguments to update or create a Tech.
     * @example
     * // Update or create a Tech
     * const tech = await prisma.tech.upsert({
     *   create: {
     *     // ... data to create a Tech
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tech we want to update
     *   }
     * })
    **/
    upsert<T extends TechUpsertArgs>(
      args: SelectSubset<T, TechUpsertArgs>
    ): Prisma__TechClient<TechGetPayload<T>>

    /**
     * Count the number of Teches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechCountArgs} args - Arguments to filter Teches to count.
     * @example
     * // Count the number of Teches
     * const count = await prisma.tech.count({
     *   where: {
     *     // ... the filter for the Teches we want to count
     *   }
     * })
    **/
    count<T extends TechCountArgs>(
      args?: Subset<T, TechCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tech.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TechAggregateArgs>(args: Subset<T, TechAggregateArgs>): Prisma.PrismaPromise<GetTechAggregateType<T>>

    /**
     * Group by Tech.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechGroupByArgs} args - Group by arguments.
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
      T extends TechGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechGroupByArgs['orderBy'] }
        : { orderBy?: TechGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TechGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Tech.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TechClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    author<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    posts<T extends Tech$postsArgs= {}>(args?: Subset<T, Tech$postsArgs>): Prisma.PrismaPromise<Array<PostGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Tech base type for findUnique actions
   */
  export type TechFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechInclude | null
    /**
     * Filter, which Tech to fetch.
     */
    where: TechWhereUniqueInput
  }

  /**
   * Tech findUnique
   */
  export interface TechFindUniqueArgs extends TechFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tech findUniqueOrThrow
   */
  export type TechFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechInclude | null
    /**
     * Filter, which Tech to fetch.
     */
    where: TechWhereUniqueInput
  }


  /**
   * Tech base type for findFirst actions
   */
  export type TechFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechInclude | null
    /**
     * Filter, which Tech to fetch.
     */
    where?: TechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teches to fetch.
     */
    orderBy?: Enumerable<TechOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teches.
     */
    cursor?: TechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teches.
     */
    distinct?: Enumerable<TechScalarFieldEnum>
  }

  /**
   * Tech findFirst
   */
  export interface TechFindFirstArgs extends TechFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tech findFirstOrThrow
   */
  export type TechFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechInclude | null
    /**
     * Filter, which Tech to fetch.
     */
    where?: TechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teches to fetch.
     */
    orderBy?: Enumerable<TechOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teches.
     */
    cursor?: TechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teches.
     */
    distinct?: Enumerable<TechScalarFieldEnum>
  }


  /**
   * Tech findMany
   */
  export type TechFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechInclude | null
    /**
     * Filter, which Teches to fetch.
     */
    where?: TechWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teches to fetch.
     */
    orderBy?: Enumerable<TechOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teches.
     */
    cursor?: TechWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teches.
     */
    skip?: number
    distinct?: Enumerable<TechScalarFieldEnum>
  }


  /**
   * Tech create
   */
  export type TechCreateArgs = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechInclude | null
    /**
     * The data needed to create a Tech.
     */
    data: XOR<TechCreateInput, TechUncheckedCreateInput>
  }


  /**
   * Tech createMany
   */
  export type TechCreateManyArgs = {
    /**
     * The data used to create many Teches.
     */
    data: Enumerable<TechCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tech update
   */
  export type TechUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechInclude | null
    /**
     * The data needed to update a Tech.
     */
    data: XOR<TechUpdateInput, TechUncheckedUpdateInput>
    /**
     * Choose, which Tech to update.
     */
    where: TechWhereUniqueInput
  }


  /**
   * Tech updateMany
   */
  export type TechUpdateManyArgs = {
    /**
     * The data used to update Teches.
     */
    data: XOR<TechUpdateManyMutationInput, TechUncheckedUpdateManyInput>
    /**
     * Filter which Teches to update
     */
    where?: TechWhereInput
  }


  /**
   * Tech upsert
   */
  export type TechUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechInclude | null
    /**
     * The filter to search for the Tech to update in case it exists.
     */
    where: TechWhereUniqueInput
    /**
     * In case the Tech found by the `where` argument doesn't exist, create a new Tech with this data.
     */
    create: XOR<TechCreateInput, TechUncheckedCreateInput>
    /**
     * In case the Tech was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechUpdateInput, TechUncheckedUpdateInput>
  }


  /**
   * Tech delete
   */
  export type TechDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechInclude | null
    /**
     * Filter which Tech to delete.
     */
    where: TechWhereUniqueInput
  }


  /**
   * Tech deleteMany
   */
  export type TechDeleteManyArgs = {
    /**
     * Filter which Teches to delete
     */
    where?: TechWhereInput
  }


  /**
   * Tech.posts
   */
  export type Tech$postsArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Tech without action
   */
  export type TechArgs = {
    /**
     * Select specific fields to fetch from the Tech
     */
    select?: TechSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TechInclude | null
  }



  /**
   * Model NeedContent
   */


  export type AggregateNeedContent = {
    _count: NeedContentCountAggregateOutputType | null
    _avg: NeedContentAvgAggregateOutputType | null
    _sum: NeedContentSumAggregateOutputType | null
    _min: NeedContentMinAggregateOutputType | null
    _max: NeedContentMaxAggregateOutputType | null
  }

  export type NeedContentAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type NeedContentSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type NeedContentMinAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: number | null
    createdAt: Date | null
  }

  export type NeedContentMaxAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: number | null
    createdAt: Date | null
  }

  export type NeedContentCountAggregateOutputType = {
    id: number
    title: number
    authorId: number
    createdAt: number
    _all: number
  }


  export type NeedContentAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type NeedContentSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type NeedContentMinAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    createdAt?: true
  }

  export type NeedContentMaxAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    createdAt?: true
  }

  export type NeedContentCountAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    createdAt?: true
    _all?: true
  }

  export type NeedContentAggregateArgs = {
    /**
     * Filter which NeedContent to aggregate.
     */
    where?: NeedContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NeedContents to fetch.
     */
    orderBy?: Enumerable<NeedContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NeedContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NeedContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NeedContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NeedContents
    **/
    _count?: true | NeedContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NeedContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NeedContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NeedContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NeedContentMaxAggregateInputType
  }

  export type GetNeedContentAggregateType<T extends NeedContentAggregateArgs> = {
        [P in keyof T & keyof AggregateNeedContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNeedContent[P]>
      : GetScalarType<T[P], AggregateNeedContent[P]>
  }




  export type NeedContentGroupByArgs = {
    where?: NeedContentWhereInput
    orderBy?: Enumerable<NeedContentOrderByWithAggregationInput>
    by: NeedContentScalarFieldEnum[]
    having?: NeedContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NeedContentCountAggregateInputType | true
    _avg?: NeedContentAvgAggregateInputType
    _sum?: NeedContentSumAggregateInputType
    _min?: NeedContentMinAggregateInputType
    _max?: NeedContentMaxAggregateInputType
  }


  export type NeedContentGroupByOutputType = {
    id: number
    title: string
    authorId: number
    createdAt: Date
    _count: NeedContentCountAggregateOutputType | null
    _avg: NeedContentAvgAggregateOutputType | null
    _sum: NeedContentSumAggregateOutputType | null
    _min: NeedContentMinAggregateOutputType | null
    _max: NeedContentMaxAggregateOutputType | null
  }

  type GetNeedContentGroupByPayload<T extends NeedContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<NeedContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NeedContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NeedContentGroupByOutputType[P]>
            : GetScalarType<T[P], NeedContentGroupByOutputType[P]>
        }
      >
    >


  export type NeedContentSelect = {
    id?: boolean
    title?: boolean
    authorId?: boolean
    createdAt?: boolean
    author?: boolean | PostArgs
  }


  export type NeedContentInclude = {
    author?: boolean | PostArgs
  }

  export type NeedContentGetPayload<S extends boolean | null | undefined | NeedContentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? NeedContent :
    S extends undefined ? never :
    S extends { include: any } & (NeedContentArgs | NeedContentFindManyArgs)
    ? NeedContent  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? PostGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (NeedContentArgs | NeedContentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? PostGetPayload<S['select'][P]> :  P extends keyof NeedContent ? NeedContent[P] : never
  } 
      : NeedContent


  type NeedContentCountArgs = 
    Omit<NeedContentFindManyArgs, 'select' | 'include'> & {
      select?: NeedContentCountAggregateInputType | true
    }

  export interface NeedContentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one NeedContent that matches the filter.
     * @param {NeedContentFindUniqueArgs} args - Arguments to find a NeedContent
     * @example
     * // Get one NeedContent
     * const needContent = await prisma.needContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NeedContentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NeedContentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'NeedContent'> extends True ? Prisma__NeedContentClient<NeedContentGetPayload<T>> : Prisma__NeedContentClient<NeedContentGetPayload<T> | null, null>

    /**
     * Find one NeedContent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NeedContentFindUniqueOrThrowArgs} args - Arguments to find a NeedContent
     * @example
     * // Get one NeedContent
     * const needContent = await prisma.needContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NeedContentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, NeedContentFindUniqueOrThrowArgs>
    ): Prisma__NeedContentClient<NeedContentGetPayload<T>>

    /**
     * Find the first NeedContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeedContentFindFirstArgs} args - Arguments to find a NeedContent
     * @example
     * // Get one NeedContent
     * const needContent = await prisma.needContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NeedContentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NeedContentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'NeedContent'> extends True ? Prisma__NeedContentClient<NeedContentGetPayload<T>> : Prisma__NeedContentClient<NeedContentGetPayload<T> | null, null>

    /**
     * Find the first NeedContent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeedContentFindFirstOrThrowArgs} args - Arguments to find a NeedContent
     * @example
     * // Get one NeedContent
     * const needContent = await prisma.needContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NeedContentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NeedContentFindFirstOrThrowArgs>
    ): Prisma__NeedContentClient<NeedContentGetPayload<T>>

    /**
     * Find zero or more NeedContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeedContentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NeedContents
     * const needContents = await prisma.needContent.findMany()
     * 
     * // Get first 10 NeedContents
     * const needContents = await prisma.needContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const needContentWithIdOnly = await prisma.needContent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NeedContentFindManyArgs>(
      args?: SelectSubset<T, NeedContentFindManyArgs>
    ): Prisma.PrismaPromise<Array<NeedContentGetPayload<T>>>

    /**
     * Create a NeedContent.
     * @param {NeedContentCreateArgs} args - Arguments to create a NeedContent.
     * @example
     * // Create one NeedContent
     * const NeedContent = await prisma.needContent.create({
     *   data: {
     *     // ... data to create a NeedContent
     *   }
     * })
     * 
    **/
    create<T extends NeedContentCreateArgs>(
      args: SelectSubset<T, NeedContentCreateArgs>
    ): Prisma__NeedContentClient<NeedContentGetPayload<T>>

    /**
     * Create many NeedContents.
     *     @param {NeedContentCreateManyArgs} args - Arguments to create many NeedContents.
     *     @example
     *     // Create many NeedContents
     *     const needContent = await prisma.needContent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NeedContentCreateManyArgs>(
      args?: SelectSubset<T, NeedContentCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NeedContent.
     * @param {NeedContentDeleteArgs} args - Arguments to delete one NeedContent.
     * @example
     * // Delete one NeedContent
     * const NeedContent = await prisma.needContent.delete({
     *   where: {
     *     // ... filter to delete one NeedContent
     *   }
     * })
     * 
    **/
    delete<T extends NeedContentDeleteArgs>(
      args: SelectSubset<T, NeedContentDeleteArgs>
    ): Prisma__NeedContentClient<NeedContentGetPayload<T>>

    /**
     * Update one NeedContent.
     * @param {NeedContentUpdateArgs} args - Arguments to update one NeedContent.
     * @example
     * // Update one NeedContent
     * const needContent = await prisma.needContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NeedContentUpdateArgs>(
      args: SelectSubset<T, NeedContentUpdateArgs>
    ): Prisma__NeedContentClient<NeedContentGetPayload<T>>

    /**
     * Delete zero or more NeedContents.
     * @param {NeedContentDeleteManyArgs} args - Arguments to filter NeedContents to delete.
     * @example
     * // Delete a few NeedContents
     * const { count } = await prisma.needContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NeedContentDeleteManyArgs>(
      args?: SelectSubset<T, NeedContentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NeedContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeedContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NeedContents
     * const needContent = await prisma.needContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NeedContentUpdateManyArgs>(
      args: SelectSubset<T, NeedContentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NeedContent.
     * @param {NeedContentUpsertArgs} args - Arguments to update or create a NeedContent.
     * @example
     * // Update or create a NeedContent
     * const needContent = await prisma.needContent.upsert({
     *   create: {
     *     // ... data to create a NeedContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NeedContent we want to update
     *   }
     * })
    **/
    upsert<T extends NeedContentUpsertArgs>(
      args: SelectSubset<T, NeedContentUpsertArgs>
    ): Prisma__NeedContentClient<NeedContentGetPayload<T>>

    /**
     * Count the number of NeedContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeedContentCountArgs} args - Arguments to filter NeedContents to count.
     * @example
     * // Count the number of NeedContents
     * const count = await prisma.needContent.count({
     *   where: {
     *     // ... the filter for the NeedContents we want to count
     *   }
     * })
    **/
    count<T extends NeedContentCountArgs>(
      args?: Subset<T, NeedContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NeedContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NeedContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeedContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NeedContentAggregateArgs>(args: Subset<T, NeedContentAggregateArgs>): Prisma.PrismaPromise<GetNeedContentAggregateType<T>>

    /**
     * Group by NeedContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeedContentGroupByArgs} args - Group by arguments.
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
      T extends NeedContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NeedContentGroupByArgs['orderBy'] }
        : { orderBy?: NeedContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NeedContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNeedContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for NeedContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NeedContentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    author<T extends PostArgs= {}>(args?: Subset<T, PostArgs>): Prisma__PostClient<PostGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * NeedContent base type for findUnique actions
   */
  export type NeedContentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the NeedContent
     */
    select?: NeedContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NeedContentInclude | null
    /**
     * Filter, which NeedContent to fetch.
     */
    where: NeedContentWhereUniqueInput
  }

  /**
   * NeedContent findUnique
   */
  export interface NeedContentFindUniqueArgs extends NeedContentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * NeedContent findUniqueOrThrow
   */
  export type NeedContentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the NeedContent
     */
    select?: NeedContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NeedContentInclude | null
    /**
     * Filter, which NeedContent to fetch.
     */
    where: NeedContentWhereUniqueInput
  }


  /**
   * NeedContent base type for findFirst actions
   */
  export type NeedContentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the NeedContent
     */
    select?: NeedContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NeedContentInclude | null
    /**
     * Filter, which NeedContent to fetch.
     */
    where?: NeedContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NeedContents to fetch.
     */
    orderBy?: Enumerable<NeedContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NeedContents.
     */
    cursor?: NeedContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NeedContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NeedContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NeedContents.
     */
    distinct?: Enumerable<NeedContentScalarFieldEnum>
  }

  /**
   * NeedContent findFirst
   */
  export interface NeedContentFindFirstArgs extends NeedContentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * NeedContent findFirstOrThrow
   */
  export type NeedContentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the NeedContent
     */
    select?: NeedContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NeedContentInclude | null
    /**
     * Filter, which NeedContent to fetch.
     */
    where?: NeedContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NeedContents to fetch.
     */
    orderBy?: Enumerable<NeedContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NeedContents.
     */
    cursor?: NeedContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NeedContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NeedContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NeedContents.
     */
    distinct?: Enumerable<NeedContentScalarFieldEnum>
  }


  /**
   * NeedContent findMany
   */
  export type NeedContentFindManyArgs = {
    /**
     * Select specific fields to fetch from the NeedContent
     */
    select?: NeedContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NeedContentInclude | null
    /**
     * Filter, which NeedContents to fetch.
     */
    where?: NeedContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NeedContents to fetch.
     */
    orderBy?: Enumerable<NeedContentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NeedContents.
     */
    cursor?: NeedContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NeedContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NeedContents.
     */
    skip?: number
    distinct?: Enumerable<NeedContentScalarFieldEnum>
  }


  /**
   * NeedContent create
   */
  export type NeedContentCreateArgs = {
    /**
     * Select specific fields to fetch from the NeedContent
     */
    select?: NeedContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NeedContentInclude | null
    /**
     * The data needed to create a NeedContent.
     */
    data: XOR<NeedContentCreateInput, NeedContentUncheckedCreateInput>
  }


  /**
   * NeedContent createMany
   */
  export type NeedContentCreateManyArgs = {
    /**
     * The data used to create many NeedContents.
     */
    data: Enumerable<NeedContentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * NeedContent update
   */
  export type NeedContentUpdateArgs = {
    /**
     * Select specific fields to fetch from the NeedContent
     */
    select?: NeedContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NeedContentInclude | null
    /**
     * The data needed to update a NeedContent.
     */
    data: XOR<NeedContentUpdateInput, NeedContentUncheckedUpdateInput>
    /**
     * Choose, which NeedContent to update.
     */
    where: NeedContentWhereUniqueInput
  }


  /**
   * NeedContent updateMany
   */
  export type NeedContentUpdateManyArgs = {
    /**
     * The data used to update NeedContents.
     */
    data: XOR<NeedContentUpdateManyMutationInput, NeedContentUncheckedUpdateManyInput>
    /**
     * Filter which NeedContents to update
     */
    where?: NeedContentWhereInput
  }


  /**
   * NeedContent upsert
   */
  export type NeedContentUpsertArgs = {
    /**
     * Select specific fields to fetch from the NeedContent
     */
    select?: NeedContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NeedContentInclude | null
    /**
     * The filter to search for the NeedContent to update in case it exists.
     */
    where: NeedContentWhereUniqueInput
    /**
     * In case the NeedContent found by the `where` argument doesn't exist, create a new NeedContent with this data.
     */
    create: XOR<NeedContentCreateInput, NeedContentUncheckedCreateInput>
    /**
     * In case the NeedContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NeedContentUpdateInput, NeedContentUncheckedUpdateInput>
  }


  /**
   * NeedContent delete
   */
  export type NeedContentDeleteArgs = {
    /**
     * Select specific fields to fetch from the NeedContent
     */
    select?: NeedContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NeedContentInclude | null
    /**
     * Filter which NeedContent to delete.
     */
    where: NeedContentWhereUniqueInput
  }


  /**
   * NeedContent deleteMany
   */
  export type NeedContentDeleteManyArgs = {
    /**
     * Filter which NeedContents to delete
     */
    where?: NeedContentWhereInput
  }


  /**
   * NeedContent without action
   */
  export type NeedContentArgs = {
    /**
     * Select specific fields to fetch from the NeedContent
     */
    select?: NeedContentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NeedContentInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const NeedContentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    authorId: 'authorId',
    createdAt: 'createdAt'
  };

  export type NeedContentScalarFieldEnum = (typeof NeedContentScalarFieldEnum)[keyof typeof NeedContentScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    priority: 'priority',
    content: 'content',
    getContent: 'getContent',
    createdAt: 'createdAt',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TechScalarFieldEnum: {
    id: 'id',
    title: 'title',
    priority: 'priority',
    whyWant: 'whyWant',
    createdAt: 'createdAt',
    authorId: 'authorId'
  };

  export type TechScalarFieldEnum = (typeof TechScalarFieldEnum)[keyof typeof TechScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    password?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    posts?: PostListRelationFilter
    techs?: TechListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    techs?: TechOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    priority?: IntFilter | number
    content?: StringFilter | string
    getContent?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    authorId?: IntFilter | number
    author?: XOR<UserRelationFilter, UserWhereInput>
    techs?: TechListRelationFilter
    needContent?: NeedContentListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    content?: SortOrder
    getContent?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
    techs?: TechOrderByRelationAggregateInput
    needContent?: NeedContentOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = {
    id?: number
  }

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    content?: SortOrder
    getContent?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    priority?: IntWithAggregatesFilter | number
    content?: StringWithAggregatesFilter | string
    getContent?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    authorId?: IntWithAggregatesFilter | number
  }

  export type TechWhereInput = {
    AND?: Enumerable<TechWhereInput>
    OR?: Enumerable<TechWhereInput>
    NOT?: Enumerable<TechWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    priority?: IntFilter | number
    whyWant?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    authorId?: IntFilter | number
    author?: XOR<UserRelationFilter, UserWhereInput>
    posts?: PostListRelationFilter
  }

  export type TechOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    whyWant?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
  }

  export type TechWhereUniqueInput = {
    id?: number
  }

  export type TechOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    whyWant?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    _count?: TechCountOrderByAggregateInput
    _avg?: TechAvgOrderByAggregateInput
    _max?: TechMaxOrderByAggregateInput
    _min?: TechMinOrderByAggregateInput
    _sum?: TechSumOrderByAggregateInput
  }

  export type TechScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TechScalarWhereWithAggregatesInput>
    OR?: Enumerable<TechScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TechScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    priority?: IntWithAggregatesFilter | number
    whyWant?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    authorId?: IntWithAggregatesFilter | number
  }

  export type NeedContentWhereInput = {
    AND?: Enumerable<NeedContentWhereInput>
    OR?: Enumerable<NeedContentWhereInput>
    NOT?: Enumerable<NeedContentWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    authorId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    author?: XOR<PostRelationFilter, PostWhereInput>
  }

  export type NeedContentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    author?: PostOrderByWithRelationInput
  }

  export type NeedContentWhereUniqueInput = {
    id?: number
  }

  export type NeedContentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    _count?: NeedContentCountOrderByAggregateInput
    _avg?: NeedContentAvgOrderByAggregateInput
    _max?: NeedContentMaxOrderByAggregateInput
    _min?: NeedContentMinOrderByAggregateInput
    _sum?: NeedContentSumOrderByAggregateInput
  }

  export type NeedContentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NeedContentScalarWhereWithAggregatesInput>
    OR?: Enumerable<NeedContentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NeedContentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    authorId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutAuthorInput
    techs?: TechCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    techs?: TechUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAuthorNestedInput
    techs?: TechUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    techs?: TechUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    title: string
    priority: number
    content: string
    getContent: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    techs?: TechCreateNestedManyWithoutPostsInput
    needContent?: NeedContentCreateNestedManyWithoutAuthorInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    priority: number
    content: string
    getContent: string
    createdAt?: Date | string
    authorId: number
    techs?: TechUncheckedCreateNestedManyWithoutPostsInput
    needContent?: NeedContentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    getContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    techs?: TechUpdateManyWithoutPostsNestedInput
    needContent?: NeedContentUpdateManyWithoutAuthorNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    getContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    techs?: TechUncheckedUpdateManyWithoutPostsNestedInput
    needContent?: NeedContentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    priority: number
    content: string
    getContent: string
    createdAt?: Date | string
    authorId: number
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    getContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    getContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type TechCreateInput = {
    title: string
    priority: number
    whyWant: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutTechsInput
    posts?: PostCreateNestedManyWithoutTechsInput
  }

  export type TechUncheckedCreateInput = {
    id?: number
    title: string
    priority: number
    whyWant: string
    createdAt?: Date | string
    authorId: number
    posts?: PostUncheckedCreateNestedManyWithoutTechsInput
  }

  export type TechUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    whyWant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTechsNestedInput
    posts?: PostUpdateManyWithoutTechsNestedInput
  }

  export type TechUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    whyWant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    posts?: PostUncheckedUpdateManyWithoutTechsNestedInput
  }

  export type TechCreateManyInput = {
    id?: number
    title: string
    priority: number
    whyWant: string
    createdAt?: Date | string
    authorId: number
  }

  export type TechUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    whyWant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    whyWant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type NeedContentCreateInput = {
    title: string
    createdAt?: Date | string
    author: PostCreateNestedOneWithoutNeedContentInput
  }

  export type NeedContentUncheckedCreateInput = {
    id?: number
    title: string
    authorId: number
    createdAt?: Date | string
  }

  export type NeedContentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: PostUpdateOneRequiredWithoutNeedContentNestedInput
  }

  export type NeedContentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NeedContentCreateManyInput = {
    id?: number
    title: string
    authorId: number
    createdAt?: Date | string
  }

  export type NeedContentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NeedContentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type TechListRelationFilter = {
    every?: TechWhereInput
    some?: TechWhereInput
    none?: TechWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TechOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NeedContentListRelationFilter = {
    every?: NeedContentWhereInput
    some?: NeedContentWhereInput
    none?: NeedContentWhereInput
  }

  export type NeedContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    content?: SortOrder
    getContent?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    content?: SortOrder
    getContent?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    content?: SortOrder
    getContent?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    authorId?: SortOrder
  }

  export type TechCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    whyWant?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type TechAvgOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    authorId?: SortOrder
  }

  export type TechMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    whyWant?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type TechMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    whyWant?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
  }

  export type TechSumOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    authorId?: SortOrder
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type NeedContentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
  }

  export type NeedContentAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type NeedContentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
  }

  export type NeedContentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
  }

  export type NeedContentSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type TechCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<TechCreateWithoutAuthorInput>, Enumerable<TechUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<TechCreateOrConnectWithoutAuthorInput>
    createMany?: TechCreateManyAuthorInputEnvelope
    connect?: Enumerable<TechWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type TechUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<TechCreateWithoutAuthorInput>, Enumerable<TechUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<TechCreateOrConnectWithoutAuthorInput>
    createMany?: TechCreateManyAuthorInputEnvelope
    connect?: Enumerable<TechWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type TechUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<TechCreateWithoutAuthorInput>, Enumerable<TechUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<TechCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<TechUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: TechCreateManyAuthorInputEnvelope
    set?: Enumerable<TechWhereUniqueInput>
    disconnect?: Enumerable<TechWhereUniqueInput>
    delete?: Enumerable<TechWhereUniqueInput>
    connect?: Enumerable<TechWhereUniqueInput>
    update?: Enumerable<TechUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<TechUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<TechScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type TechUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<TechCreateWithoutAuthorInput>, Enumerable<TechUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<TechCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<TechUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: TechCreateManyAuthorInputEnvelope
    set?: Enumerable<TechWhereUniqueInput>
    disconnect?: Enumerable<TechWhereUniqueInput>
    delete?: Enumerable<TechWhereUniqueInput>
    connect?: Enumerable<TechWhereUniqueInput>
    update?: Enumerable<TechUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<TechUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<TechScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type TechCreateNestedManyWithoutPostsInput = {
    create?: XOR<Enumerable<TechCreateWithoutPostsInput>, Enumerable<TechUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<TechCreateOrConnectWithoutPostsInput>
    connect?: Enumerable<TechWhereUniqueInput>
  }

  export type NeedContentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<NeedContentCreateWithoutAuthorInput>, Enumerable<NeedContentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<NeedContentCreateOrConnectWithoutAuthorInput>
    createMany?: NeedContentCreateManyAuthorInputEnvelope
    connect?: Enumerable<NeedContentWhereUniqueInput>
  }

  export type TechUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<Enumerable<TechCreateWithoutPostsInput>, Enumerable<TechUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<TechCreateOrConnectWithoutPostsInput>
    connect?: Enumerable<TechWhereUniqueInput>
  }

  export type NeedContentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<NeedContentCreateWithoutAuthorInput>, Enumerable<NeedContentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<NeedContentCreateOrConnectWithoutAuthorInput>
    createMany?: NeedContentCreateManyAuthorInputEnvelope
    connect?: Enumerable<NeedContentWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type TechUpdateManyWithoutPostsNestedInput = {
    create?: XOR<Enumerable<TechCreateWithoutPostsInput>, Enumerable<TechUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<TechCreateOrConnectWithoutPostsInput>
    upsert?: Enumerable<TechUpsertWithWhereUniqueWithoutPostsInput>
    set?: Enumerable<TechWhereUniqueInput>
    disconnect?: Enumerable<TechWhereUniqueInput>
    delete?: Enumerable<TechWhereUniqueInput>
    connect?: Enumerable<TechWhereUniqueInput>
    update?: Enumerable<TechUpdateWithWhereUniqueWithoutPostsInput>
    updateMany?: Enumerable<TechUpdateManyWithWhereWithoutPostsInput>
    deleteMany?: Enumerable<TechScalarWhereInput>
  }

  export type NeedContentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<NeedContentCreateWithoutAuthorInput>, Enumerable<NeedContentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<NeedContentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<NeedContentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: NeedContentCreateManyAuthorInputEnvelope
    set?: Enumerable<NeedContentWhereUniqueInput>
    disconnect?: Enumerable<NeedContentWhereUniqueInput>
    delete?: Enumerable<NeedContentWhereUniqueInput>
    connect?: Enumerable<NeedContentWhereUniqueInput>
    update?: Enumerable<NeedContentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<NeedContentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<NeedContentScalarWhereInput>
  }

  export type TechUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<Enumerable<TechCreateWithoutPostsInput>, Enumerable<TechUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<TechCreateOrConnectWithoutPostsInput>
    upsert?: Enumerable<TechUpsertWithWhereUniqueWithoutPostsInput>
    set?: Enumerable<TechWhereUniqueInput>
    disconnect?: Enumerable<TechWhereUniqueInput>
    delete?: Enumerable<TechWhereUniqueInput>
    connect?: Enumerable<TechWhereUniqueInput>
    update?: Enumerable<TechUpdateWithWhereUniqueWithoutPostsInput>
    updateMany?: Enumerable<TechUpdateManyWithWhereWithoutPostsInput>
    deleteMany?: Enumerable<TechScalarWhereInput>
  }

  export type NeedContentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<NeedContentCreateWithoutAuthorInput>, Enumerable<NeedContentUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<NeedContentCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<NeedContentUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: NeedContentCreateManyAuthorInputEnvelope
    set?: Enumerable<NeedContentWhereUniqueInput>
    disconnect?: Enumerable<NeedContentWhereUniqueInput>
    delete?: Enumerable<NeedContentWhereUniqueInput>
    connect?: Enumerable<NeedContentWhereUniqueInput>
    update?: Enumerable<NeedContentUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<NeedContentUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<NeedContentScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutTechsInput = {
    create?: XOR<UserCreateWithoutTechsInput, UserUncheckedCreateWithoutTechsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTechsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutTechsInput = {
    create?: XOR<Enumerable<PostCreateWithoutTechsInput>, Enumerable<PostUncheckedCreateWithoutTechsInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutTechsInput>
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutTechsInput = {
    create?: XOR<Enumerable<PostCreateWithoutTechsInput>, Enumerable<PostUncheckedCreateWithoutTechsInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutTechsInput>
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutTechsNestedInput = {
    create?: XOR<UserCreateWithoutTechsInput, UserUncheckedCreateWithoutTechsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTechsInput
    upsert?: UserUpsertWithoutTechsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTechsInput, UserUncheckedUpdateWithoutTechsInput>
  }

  export type PostUpdateManyWithoutTechsNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutTechsInput>, Enumerable<PostUncheckedCreateWithoutTechsInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutTechsInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutTechsInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutTechsInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutTechsInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutTechsNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutTechsInput>, Enumerable<PostUncheckedCreateWithoutTechsInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutTechsInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutTechsInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutTechsInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutTechsInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type PostCreateNestedOneWithoutNeedContentInput = {
    create?: XOR<PostCreateWithoutNeedContentInput, PostUncheckedCreateWithoutNeedContentInput>
    connectOrCreate?: PostCreateOrConnectWithoutNeedContentInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutNeedContentNestedInput = {
    create?: XOR<PostCreateWithoutNeedContentInput, PostUncheckedCreateWithoutNeedContentInput>
    connectOrCreate?: PostCreateOrConnectWithoutNeedContentInput
    upsert?: PostUpsertWithoutNeedContentInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutNeedContentInput, PostUncheckedUpdateWithoutNeedContentInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type PostCreateWithoutAuthorInput = {
    title: string
    priority: number
    content: string
    getContent: string
    createdAt?: Date | string
    techs?: TechCreateNestedManyWithoutPostsInput
    needContent?: NeedContentCreateNestedManyWithoutAuthorInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    priority: number
    content: string
    getContent: string
    createdAt?: Date | string
    techs?: TechUncheckedCreateNestedManyWithoutPostsInput
    needContent?: NeedContentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: Enumerable<PostCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type TechCreateWithoutAuthorInput = {
    title: string
    priority: number
    whyWant: string
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutTechsInput
  }

  export type TechUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    priority: number
    whyWant: string
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutTechsInput
  }

  export type TechCreateOrConnectWithoutAuthorInput = {
    where: TechWhereUniqueInput
    create: XOR<TechCreateWithoutAuthorInput, TechUncheckedCreateWithoutAuthorInput>
  }

  export type TechCreateManyAuthorInputEnvelope = {
    data: Enumerable<TechCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    priority?: IntFilter | number
    content?: StringFilter | string
    getContent?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    authorId?: IntFilter | number
  }

  export type TechUpsertWithWhereUniqueWithoutAuthorInput = {
    where: TechWhereUniqueInput
    update: XOR<TechUpdateWithoutAuthorInput, TechUncheckedUpdateWithoutAuthorInput>
    create: XOR<TechCreateWithoutAuthorInput, TechUncheckedCreateWithoutAuthorInput>
  }

  export type TechUpdateWithWhereUniqueWithoutAuthorInput = {
    where: TechWhereUniqueInput
    data: XOR<TechUpdateWithoutAuthorInput, TechUncheckedUpdateWithoutAuthorInput>
  }

  export type TechUpdateManyWithWhereWithoutAuthorInput = {
    where: TechScalarWhereInput
    data: XOR<TechUpdateManyMutationInput, TechUncheckedUpdateManyWithoutTechsInput>
  }

  export type TechScalarWhereInput = {
    AND?: Enumerable<TechScalarWhereInput>
    OR?: Enumerable<TechScalarWhereInput>
    NOT?: Enumerable<TechScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    priority?: IntFilter | number
    whyWant?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    authorId?: IntFilter | number
  }

  export type UserCreateWithoutPostsInput = {
    email: string
    password: string
    createdAt?: Date | string
    techs?: TechCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    techs?: TechUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type TechCreateWithoutPostsInput = {
    title: string
    priority: number
    whyWant: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutTechsInput
  }

  export type TechUncheckedCreateWithoutPostsInput = {
    id?: number
    title: string
    priority: number
    whyWant: string
    createdAt?: Date | string
    authorId: number
  }

  export type TechCreateOrConnectWithoutPostsInput = {
    where: TechWhereUniqueInput
    create: XOR<TechCreateWithoutPostsInput, TechUncheckedCreateWithoutPostsInput>
  }

  export type NeedContentCreateWithoutAuthorInput = {
    title: string
    createdAt?: Date | string
  }

  export type NeedContentUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    createdAt?: Date | string
  }

  export type NeedContentCreateOrConnectWithoutAuthorInput = {
    where: NeedContentWhereUniqueInput
    create: XOR<NeedContentCreateWithoutAuthorInput, NeedContentUncheckedCreateWithoutAuthorInput>
  }

  export type NeedContentCreateManyAuthorInputEnvelope = {
    data: Enumerable<NeedContentCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techs?: TechUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techs?: TechUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type TechUpsertWithWhereUniqueWithoutPostsInput = {
    where: TechWhereUniqueInput
    update: XOR<TechUpdateWithoutPostsInput, TechUncheckedUpdateWithoutPostsInput>
    create: XOR<TechCreateWithoutPostsInput, TechUncheckedCreateWithoutPostsInput>
  }

  export type TechUpdateWithWhereUniqueWithoutPostsInput = {
    where: TechWhereUniqueInput
    data: XOR<TechUpdateWithoutPostsInput, TechUncheckedUpdateWithoutPostsInput>
  }

  export type TechUpdateManyWithWhereWithoutPostsInput = {
    where: TechScalarWhereInput
    data: XOR<TechUpdateManyMutationInput, TechUncheckedUpdateManyWithoutTechsInput>
  }

  export type NeedContentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: NeedContentWhereUniqueInput
    update: XOR<NeedContentUpdateWithoutAuthorInput, NeedContentUncheckedUpdateWithoutAuthorInput>
    create: XOR<NeedContentCreateWithoutAuthorInput, NeedContentUncheckedCreateWithoutAuthorInput>
  }

  export type NeedContentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: NeedContentWhereUniqueInput
    data: XOR<NeedContentUpdateWithoutAuthorInput, NeedContentUncheckedUpdateWithoutAuthorInput>
  }

  export type NeedContentUpdateManyWithWhereWithoutAuthorInput = {
    where: NeedContentScalarWhereInput
    data: XOR<NeedContentUpdateManyMutationInput, NeedContentUncheckedUpdateManyWithoutNeedContentInput>
  }

  export type NeedContentScalarWhereInput = {
    AND?: Enumerable<NeedContentScalarWhereInput>
    OR?: Enumerable<NeedContentScalarWhereInput>
    NOT?: Enumerable<NeedContentScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    authorId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutTechsInput = {
    email: string
    password: string
    createdAt?: Date | string
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutTechsInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutTechsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTechsInput, UserUncheckedCreateWithoutTechsInput>
  }

  export type PostCreateWithoutTechsInput = {
    title: string
    priority: number
    content: string
    getContent: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    needContent?: NeedContentCreateNestedManyWithoutAuthorInput
  }

  export type PostUncheckedCreateWithoutTechsInput = {
    id?: number
    title: string
    priority: number
    content: string
    getContent: string
    createdAt?: Date | string
    authorId: number
    needContent?: NeedContentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type PostCreateOrConnectWithoutTechsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTechsInput, PostUncheckedCreateWithoutTechsInput>
  }

  export type UserUpsertWithoutTechsInput = {
    update: XOR<UserUpdateWithoutTechsInput, UserUncheckedUpdateWithoutTechsInput>
    create: XOR<UserCreateWithoutTechsInput, UserUncheckedCreateWithoutTechsInput>
  }

  export type UserUpdateWithoutTechsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutTechsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutTechsInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutTechsInput, PostUncheckedUpdateWithoutTechsInput>
    create: XOR<PostCreateWithoutTechsInput, PostUncheckedCreateWithoutTechsInput>
  }

  export type PostUpdateWithWhereUniqueWithoutTechsInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutTechsInput, PostUncheckedUpdateWithoutTechsInput>
  }

  export type PostUpdateManyWithWhereWithoutTechsInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type PostCreateWithoutNeedContentInput = {
    title: string
    priority: number
    content: string
    getContent: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    techs?: TechCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutNeedContentInput = {
    id?: number
    title: string
    priority: number
    content: string
    getContent: string
    createdAt?: Date | string
    authorId: number
    techs?: TechUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutNeedContentInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutNeedContentInput, PostUncheckedCreateWithoutNeedContentInput>
  }

  export type PostUpsertWithoutNeedContentInput = {
    update: XOR<PostUpdateWithoutNeedContentInput, PostUncheckedUpdateWithoutNeedContentInput>
    create: XOR<PostCreateWithoutNeedContentInput, PostUncheckedCreateWithoutNeedContentInput>
  }

  export type PostUpdateWithoutNeedContentInput = {
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    getContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    techs?: TechUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutNeedContentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    getContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    techs?: TechUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    title: string
    priority: number
    content: string
    getContent: string
    createdAt?: Date | string
  }

  export type TechCreateManyAuthorInput = {
    id?: number
    title: string
    priority: number
    whyWant: string
    createdAt?: Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    getContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techs?: TechUpdateManyWithoutPostsNestedInput
    needContent?: NeedContentUpdateManyWithoutAuthorNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    getContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    techs?: TechUncheckedUpdateManyWithoutPostsNestedInput
    needContent?: NeedContentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    getContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    whyWant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutTechsNestedInput
  }

  export type TechUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    whyWant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutTechsNestedInput
  }

  export type TechUncheckedUpdateManyWithoutTechsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    whyWant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NeedContentCreateManyAuthorInput = {
    id?: number
    title: string
    createdAt?: Date | string
  }

  export type TechUpdateWithoutPostsInput = {
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    whyWant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutTechsNestedInput
  }

  export type TechUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    whyWant?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type NeedContentUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NeedContentUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NeedContentUncheckedUpdateManyWithoutNeedContentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutTechsInput = {
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    getContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    needContent?: NeedContentUpdateManyWithoutAuthorNestedInput
  }

  export type PostUncheckedUpdateWithoutTechsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    getContent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    needContent?: NeedContentUncheckedUpdateManyWithoutAuthorNestedInput
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