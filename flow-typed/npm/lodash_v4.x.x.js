// flow-typed signature: 213ae107c05372e2489e50a054136496
// flow-typed version: 08e518e6e8/lodash_v4.x.x/flow_>=v0.63.x

declare module "lodash" {
  declare type __CurriedFunction1<A, R, AA: A> = (...r: [AA]) => R;
  declare type CurriedFunction1<A, R> = __CurriedFunction1<A, R, *>;

  declare type __CurriedFunction2<A, B, R, AA: A, BB: B> = ((
    ...r: [AA]
  ) => CurriedFunction1<BB, R>) &
    ((...r: [AA, BB]) => R);
  declare type CurriedFunction2<A, B, R> = __CurriedFunction2<A, B, R, *, *>;

  declare type __CurriedFunction3<A, B, C, R, AA: A, BB: B, CC: C> = ((
    ...r: [AA]
  ) => CurriedFunction2<BB, CC, R>) &
    ((...r: [AA, BB]) => CurriedFunction1<CC, R>) &
    ((...r: [AA, BB, CC]) => R);
  declare type CurriedFunction3<A, B, C, R> = __CurriedFunction3<
    A,
    B,
    C,
    R,
    *,
    *,
    *
  >;

  declare type __CurriedFunction4<
    A,
    B,
    C,
    D,
    R,
    AA: A,
    BB: B,
    CC: C,
    DD: D
  > = ((...r: [AA]) => CurriedFunction3<BB, CC, DD, R>) &
    ((...r: [AA, BB]) => CurriedFunction2<CC, DD, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction1<DD, R>) &
    ((...r: [AA, BB, CC, DD]) => R);
  declare type CurriedFunction4<A, B, C, D, R> = __CurriedFunction4<
    A,
    B,
    C,
    D,
    R,
    *,
    *,
    *,
    *
  >;

  declare type __CurriedFunction5<
    A,
    B,
    C,
    D,
    E,
    R,
    AA: A,
    BB: B,
    CC: C,
    DD: D,
    EE: E
  > = ((...r: [AA]) => CurriedFunction4<BB, CC, DD, EE, R>) &
    ((...r: [AA, BB]) => CurriedFunction3<CC, DD, EE, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction2<DD, EE, R>) &
    ((...r: [AA, BB, CC, DD]) => CurriedFunction1<EE, R>) &
    ((...r: [AA, BB, CC, DD, EE]) => R);
  declare type CurriedFunction5<A, B, C, D, E, R> = __CurriedFunction5<
    A,
    B,
    C,
    D,
    E,
    R,
    *,
    *,
    *,
    *,
    *
  >;

  declare type __CurriedFunction6<
    A,
    B,
    C,
    D,
    E,
    F,
    R,
    AA: A,
    BB: B,
    CC: C,
    DD: D,
    EE: E,
    FF: F
  > = ((...r: [AA]) => CurriedFunction5<BB, CC, DD, EE, FF, R>) &
    ((...r: [AA, BB]) => CurriedFunction4<CC, DD, EE, FF, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction3<DD, EE, FF, R>) &
    ((...r: [AA, BB, CC, DD]) => CurriedFunction2<EE, FF, R>) &
    ((...r: [AA, BB, CC, DD, EE]) => CurriedFunction1<FF, R>) &
    ((...r: [AA, BB, CC, DD, EE, FF]) => R);
  declare type CurriedFunction6<A, B, C, D, E, F, R> = __CurriedFunction6<
    A,
    B,
    C,
    D,
    E,
    F,
    R,
    *,
    *,
    *,
    *,
    *,
    *
  >;

  declare type Curry = (<A, R>((...r: [A]) => R) => CurriedFunction1<A, R>) &
    (<A, B, R>((...r: [A, B]) => R) => CurriedFunction2<A, B, R>) &
    (<A, B, C, R>((...r: [A, B, C]) => R) => CurriedFunction3<A, B, C, R>) &
    (<A, B, C, D, R>(
      (...r: [A, B, C, D]) => R
    ) => CurriedFunction4<A, B, C, D, R>) &
    (<A, B, C, D, E, R>(
      (...r: [A, B, C, D, E]) => R
    ) => CurriedFunction5<A, B, C, D, E, R>) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R
    ) => CurriedFunction6<A, B, C, D, E, F, R>);

  declare type UnaryFn<A, R> = (a: A) => R;

  declare type TemplateSettings = {
    escape?: RegExp,
    evaluate?: RegExp,
    imports?: Object,
    interpolate?: RegExp,
    variable?: string
  };

  declare type TruncateOptions = {
    length?: number,
    omission?: string,
    separator?: RegExp | string
  };

  declare type DebounceOptions = {
    leading?: boolean,
    maxWait?: number,
    trailing?: boolean
  };

  declare type ThrottleOptions = {
    leading?: boolean,
    trailing?: boolean
  };

  declare type NestedArray<T> = Array<Array<T>>;

  declare type matchesIterateeShorthand = Object;
  declare type matchesPropertyIterateeShorthand = [string, any];
  declare type propertyIterateeShorthand = string;

  declare type OPredicate<A, O> =
    | ((value: A, key: string, object: O) => any)
    | matchesIterateeShorthand
    | matchesPropertyIterateeShorthand
    | propertyIterateeShorthand;

  declare type OIterateeWithResult<V, O, R> =
    | Object
    | string
    | ((value: V, key: string, object: O) => R);
  declare type OIteratee<O> = OIterateeWithResult<any, O, any>;
  declare type OFlatMapIteratee<T, U> = OIterateeWithResult<any, T, Array<U>>;

  declare type Predicate<T> =
    | ((value: T, index: number, array: Array<T>) => any)
    | matchesIterateeShorthand
    | matchesPropertyIterateeShorthand
    | propertyIterateeShorthand;

  declare type _ValueOnlyIteratee<T> = (value: T) => mixed;
  declare type ValueOnlyIteratee<T> = _ValueOnlyIteratee<T> | string;
  declare type _Iteratee<T> = (
    item: T,
    index: number,
    array: ?Array<T>
  ) => mixed;
  declare type Iteratee<T> = _Iteratee<T> | Object | string;
  declare type FlatMapIteratee<T, U> =
    | ((item: T, index: number, array: ?$ReadOnlyArray<T>) => Array<U>)
    | ((item: T, index: number, array: ?$ReadOnlyArray<T>) => ?U)
    | Object
    | string;
  declare type Comparator<T> = (item: T, item2: T) => boolean;

  declare type MapIterator<T, U> =
    | ((item: T, index: number, array: Array<T>) => U)
    | propertyIterateeShorthand;

  declare type ReadOnlyMapIterator<T, U> =
    | ((item: T, index: number, array: $ReadOnlyArray<T>) => U)
    | propertyIterateeShorthand;

  declare type OMapIterator<T, O, U> =
    | ((item: T, key: string, object: O) => U)
    | propertyIterateeShorthand;

  declare class Lodash {
    // Array
    chunk<T>(array?: ?Array<T>, size?: ?number): Array<Array<T>>;
    compact<T, N: ?T>(array?: ?Array<N>): Array<T>;
    concat<T>(base?: ?Array<T>, ...elements: Array<any>): Array<T | any>;
    difference<T>(array?: ?$ReadOnlyArray<T>, values?: ?$ReadOnlyArray<T>): Array<T>;
    differenceBy<T>(
      array?: ?$ReadOnlyArray<T>,
      values?: ?$ReadOnlyArray<T>,
      iteratee?: ?ValueOnlyIteratee<T>
    ): T[];
    differenceWith<T>(array?: ?$ReadOnlyArray<T>, values?: ?$ReadOnlyArray<T>, comparator?: ?Comparator<T>): T[];
    drop<T>(array?: ?Array<T>, n?: ?number): Array<T>;
    dropRight<T>(array?: ?Array<T>, n?: ?number): Array<T>;
    dropRightWhile<T>(array?: ?Array<T>, predicate?: ?Predicate<T>): Array<T>;
    dropWhile<T>(array?: ?Array<T>, predicate?: ?Predicate<T>): Array<T>;
    fill<T, U>(
      array?: ?Array<T>,
      value?: ?U,
      start?: ?number,
      end?: ?number
    ): Array<T | U>;
    findIndex<T>(
      array: $ReadOnlyArray<T>,
      predicate?: ?Predicate<T>,
      fromIndex?: ?number
    ): number;
    findIndex<String>(
      array: String,
      predicate?: ?Predicate<String>,
      fromIndex?: ?number
    ): number;
    findIndex<T>(
      array: void | null,
      predicate?: ?Predicate<T>,
      fromIndex?: ?number
    ): -1;
    findLastIndex<T>(
      array: $ReadOnlyArray<T>,
      predicate?: ?Predicate<T>,
      fromIndex?: ?number
    ): number;
    findLastIndex<T>(
      array: void | null,
      predicate?: ?Predicate<T>,
      fromIndex?: ?number
    ): -1;
    // alias of _.head
    first<T>(array: ?Array<T>): T;
    flatten<T, X>(array?: ?Array<Array<T> | X>): Array<T | X>;
    flattenDeep<T>(array?: ?any[]): Array<T>;
    flattenDepth(array?: ?any[], depth?: ?number): any[];
    fromPairs<A, B>(pairs?: ?Array<[A, B]>): { [key: A]: B };
    head<T>(array: ?Array<T>): T;
    indexOf<T>(array: Array<T>, value: T, fromIndex?: number): number;
    indexOf<T>(array: void | null, value?: ?T, fromIndex?: ?number): -1;
    initial<T>(array: ?Array<T>): Array<T>;
    intersection<T>(...arrays?: Array<Array<T>>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    intersectionBy<T>(a1?: ?Array<T>, iteratee?: ?ValueOnlyIteratee<T>): Array<T>;
    intersectionBy<T>(
      a1?: ?Array<T>,
      a2?: ?Array<T>,
      iteratee?: ?ValueOnlyIteratee<T>
    ): Array<T>;
    intersectionBy<T>(
      a1?: ?Array<T>,
      a2?: ?Array<T>,
      a3?: ?Array<T>,
      iteratee?: ?ValueOnlyIteratee<T>
    ): Array<T>;
    intersectionBy<T>(
      a1?: ?Array<T>,
      a2?: ?Array<T>,
      a3?: ?Array<T>,
      a4?: ?Array<T>,
      iteratee?: ?ValueOnlyIteratee<T>
    ): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    intersectionWith<T>(a1?: ?Array<T>, comparator?: ?Comparator<T>): Array<T>;
    intersectionWith<T>(
      a1?: ?Array<T>,
      a2?: ?Array<T>,
      comparator?: ?Comparator<T>
    ): Array<T>;
    intersectionWith<T>(
      a1?: ?Array<T>,
      a2?: ?Array<T>,
      a3?: ?Array<T>,
      comparator?: ?Comparator<T>
    ): Array<T>;
    intersectionWith<T>(
      a1?: ?Array<T>,
      a2?: ?Array<T>,
      a3?: ?Array<T>,
      a4?: ?Array<T>,
      comparator?: ?Comparator<T>
    ): Array<T>;
    join<T>(array: Array<T>, separator?: ?string): string;
    join<T>(array: void | null, separator?: ?string): '';
    last<T>(array: ?Array<T>): T;
    lastIndexOf<T>(array: Array<T>, value?: ?T, fromIndex?: ?number): number;
    lastIndexOf<T>(array: void | null, value?: ?T, fromIndex?: ?number): -1;
    nth<T>(array: T[], n?: ?number): T;
    nth(array: void | null, n?: ?number): void;
    pull<T>(array: Array<T>, ...values?: Array<?T>): Array<T>;
    pull<T: void | null>(array: T, ...values?: Array<?any>): T;
    pullAll<T>(array: Array<T>, values?: ?Array<T>): Array<T>;
    pullAll<T: void | null>(array: T, values?: ?Array<any>): T;
    pullAllBy<T>(
      array: Array<T>,
      values?: ?Array<T>,
      iteratee?: ?ValueOnlyIteratee<T>
    ): Array<T>;
    pullAllBy<T: void | null>(
      array: T,
      values?: ?Array<any>,
      iteratee?: ?ValueOnlyIteratee<any>
    ): T;
    pullAllWith<T>(array: T[], values?: ?T[], comparator?: ?Function): T[];
    pullAllWith<T: void | null>(array: T, values?: ?Array<any>, comparator?: ?Function): T;
    pullAt<T>(array?: ?Array<T>, ...indexed?: Array<?number>): Array<T>;
    pullAt<T>(array?: ?Array<T>, indexed?: ?Array<number>): Array<T>;
    remove<T>(array?: ?Array<T>, predicate?: ?Predicate<T>): Array<T>;
    reverse<T>(array: Array<T>): Array<T>;
    reverse<T: void | null>(array: T): T;
    slice<T>(array?: ?Array<T>, start?: ?number, end?: ?number): Array<T>;
    sortedIndex<T>(array: Array<T>, value: T): number;
    sortedIndex<T>(array: void | null, value: ?T): 0;
    sortedIndexBy<T>(
      array: Array<T>,
      value?: ?T,
      iteratee?: ?ValueOnlyIteratee<T>
    ): number;
    sortedIndexBy<T>(
      array: void | null,
      value?: ?T,
      iteratee?: ?ValueOnlyIteratee<T>
    ): 0;
    sortedIndexOf<T>(array: Array<T>, value: T): number;
    sortedIndexOf<T>(array: void | null, value?: ?T): -1;
    sortedLastIndex<T>(array: Array<T>, value: T): number;
    sortedLastIndex<T>(array: void | null, value?: ?T): 0;
    sortedLastIndexBy<T>(
      array: Array<T>,
      value: T,
      iteratee?: ValueOnlyIteratee<T>
    ): number;
    sortedLastIndexBy<T>(
      array: void | null,
      value?: ?T,
      iteratee?: ?ValueOnlyIteratee<T>
    ): 0;
    sortedLastIndexOf<T>(array: Array<T>, value: T): number;
    sortedLastIndexOf<T>(array: void | null, value?: ?T): -1;
    sortedUniq<T>(array?: ?Array<T>): Array<T>;
    sortedUniqBy<T>(array?: ?Array<T>, iteratee?: ?(value: T) => mixed): Array<T>;
    tail<T>(array?: ?Array<T>): Array<T>;
    take<T>(array?: ?Array<T>, n?: ?number): Array<T>;
    takeRight<T>(array?: ?Array<T>, n?: ?number): Array<T>;
    takeRightWhile<T>(array?: ?Array<T>, predicate?: ?Predicate<T>): Array<T>;
    takeWhile<T>(array?: ?Array<T>, predicate?: ?Predicate<T>): Array<T>;
    union<T>(...arrays?: Array<Array<T>>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    unionBy<T>(a1?: ?Array<T>, iteratee?: ?ValueOnlyIteratee<T>): Array<T>;
    unionBy<T>(
      a1?: ?Array<T>,
      a2: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    unionBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    unionBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      a4: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    unionWith<T>(a1?: ?Array<T>, comparator?: ?Comparator<T>): Array<T>;
    unionWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
    unionWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
    unionWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      a4: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
    uniq<T>(array?: ?Array<T>): Array<T>;
    uniqBy<T>(array?: ?Array<T>, iteratee?: ?ValueOnlyIteratee<T>): Array<T>;
    uniqWith<T>(array?: ?Array<T>, comparator?: ?Comparator<T>): Array<T>;
    unzip<T>(array?: ?Array<T>): Array<T>;
    unzipWith<T>(array: ?Array<T>, iteratee?: ?Iteratee<T>): Array<T>;
    without<T>(array?: ?Array<T>, ...values?: Array<?T>): Array<T>;
    xor<T>(...array: Array<Array<T>>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    xorBy<T>(a1?: ?Array<T>, iteratee?: ?ValueOnlyIteratee<T>): Array<T>;
    xorBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    xorBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    xorBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      a4: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    xorWith<T>(a1?: ?Array<T>, comparator?: ?Comparator<T>): Array<T>;
    xorWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
    xorWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
    xorWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      a4: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
    zip<A, B>(a1?: ?A[], a2?: ?B[]): Array<[A, B]>;
    zip<A, B, C>(a1: A[], a2: B[], a3: C[]): Array<[A, B, C]>;
    zip<A, B, C, D>(a1: A[], a2: B[], a3: C[], a4: D[]): Array<[A, B, C, D]>;
    zip<A, B, C, D, E>(
      a1: A[],
      a2: B[],
      a3: C[],
      a4: D[],
      a5: E[]
    ): Array<[A, B, C, D, E]>;

    zipObject<K, V>(props: Array<K>, values?: ?Array<V>): { [key: K]: V };
    zipObject<K, V>(props: void | null, values?: ?Array<V>): {};
    zipObjectDeep(props: any[], values?: ?any): Object;
    zipObjectDeep(props: void | null, values?: ?any): {};

    zipWith<A>(a1?: ?Array<A>): Array<[A]>;
    zipWith<T, A>(a1: Array<A>, iteratee: (A) => T): Array<T>;

    zipWith<A, B>(a1: Array<A>, a2: Array<B>): Array<[A, B]>;
    zipWith<T, A, B>(
      a1: Array<A>,
      a2: Array<B>,
      iteratee: (A, B) => T
    ): Array<T>;

    zipWith<A, B, C>(
      a1: Array<A>,
      a2: Array<B>,
      a3: Array<C>
    ): Array<[A, B, C]>;
    zipWith<T, A, B, C>(
      a1: Array<A>,
      a2: Array<B>,
      a3: Array<C>,
      iteratee: (A, B, C) => T
    ): Array<T>;

    zipWith<A, B, C, D>(
      a1: Array<A>,
      a2: Array<B>,
      a3: Array<C>,
      a4: Array<D>
    ): Array<[A, B, C, D]>;
    zipWith<T, A, B, C, D>(
      a1: Array<A>,
      a2: Array<B>,
      a3: Array<C>,
      a4: Array<D>,
      iteratee: (A, B, C, D) => T
    ): Array<T>;

    // Collection
    countBy<T>(array: Array<T>, iteratee?: ?ValueOnlyIteratee<T>): Object;
    countBy<T>(array: void | null, iteratee?: ?ValueOnlyIteratee<T>): {};
    countBy<T: Object>(object: T, iteratee?: ?ValueOnlyIteratee<T>): Object;
    // alias of _.forEach
    each<T>(array: Array<T>, iteratee?: ?Iteratee<T>): Array<T>;
    each<T: void | null>(array: T, iteratee?: ?Iteratee<any>): T;
    each<T: Object>(object: T, iteratee?: ?OIteratee<T>): T;
    // alias of _.forEachRight
    eachRight<T>(array: Array<T>, iteratee?: ?Iteratee<T>): Array<T>;
    eachRight<T: void | null>(array: T, iteratee?: ?Iteratee<any>): T;
    eachRight<T: Object>(object: T, iteratee?: OIteratee<T>): T;
    every<T>(array?: ?$ReadOnlyArray<T>, iteratee?: ?Iteratee<T>): boolean;
    every<T: Object>(object: T, iteratee?: OIteratee<T>): boolean;
    filter<T>(array: Array<?T|false|0>): Array<T>;
    filter<T>(array?: ?Array<T>, predicate: Predicate<T>): Array<T>;
    filter<A, T: { [id: string]: A }>(
      object: T,
      predicate?: OPredicate<A, T>
    ): Array<A>;
    filter(
      str: ?string,
      predicate?: ?Predicate<string>
    ): Array<string>;
    find<T>(
      array: $ReadOnlyArray<T>,
      predicate?: ?Predicate<T>,
      fromIndex?: ?number
    ): T | void;
    find<T>(
      array: void | null,
      predicate?: ?Predicate<T>,
      fromIndex?: ?number
    ): void;
    find<V, A, T: { [id: string]: A }>(
      object: T,
      predicate?: OPredicate<A, T>,
      fromIndex?: number
    ): V;
    findLast<T>(
      array: ?$ReadOnlyArray<T>,
      predicate?: ?Predicate<T>,
      fromIndex?: ?number
    ): T | void;
    findLast<V, A, T: { [id: string]: A }>(
      object: T,
      predicate?: ?OPredicate<A, T>
    ): V;
    flatMap<T, U>(
      array?: ?$ReadOnlyArray<T>,
      iteratee?: ?FlatMapIteratee<T, U>
    ): Array<U>;
    //flatMap<T: Object, U>(
    //  object: T,
    //  iteratee?: OFlatMapIteratee<T, U>
    //): Array<U>;
    flatMapDeep<T, U>(
      array?: ?$ReadOnlyArray<T>,
      iteratee?: ?FlatMapIteratee<T, U>
    ): Array<U>;
    flatMapDeep<T: Object, U>(
      object: T,
      iteratee?: ?OFlatMapIteratee<T, U>
    ): Array<U>;
    flatMapDepth<T, U>(
      array?: ?Array<T>,
      iteratee?: ?FlatMapIteratee<T, U>,
      depth?: ?number
    ): Array<U>;
    flatMapDepth<T: Object, U>(
      object: T,
      iteratee?: OFlatMapIteratee<T, U>,
      depth?: number
    ): Array<U>;
    forEach<T>(array: Array<T>, iteratee?: ?Iteratee<T>): Array<T>;
    forEach<T: void | null>(array: T, iteratee?: ?Iteratee<any>): T;
    forEach<T: Object>(object: T, iteratee?: ?OIteratee<T>): T;
    forEachRight<T>(array: Array<T>, iteratee?: ?Iteratee<T>): Array<T>;
    forEachRight<T: void | null>(array: T, iteratee?: ?Iteratee<any>): T;
    forEachRight<T: Object>(object: T, iteratee?: ?OIteratee<T>): T;
    groupBy<V, T>(
      array: $ReadOnlyArray<T>,
      iteratee?: ?ValueOnlyIteratee<T>
    ): { [key: V]: Array<T> };
    groupBy(
      array: void | null,
      iteratee?: ?ValueOnlyIteratee<any>
    ): {};
    groupBy<V, A, T: { [id: string]: A }>(
      object: T,
      iteratee?: ValueOnlyIteratee<A>
    ): { [key: V]: Array<A> };
    includes<T>(array: Array<T>, value: T, fromIndex?: ?number): boolean;
    includes<T>(array: void | null, value?: ?T, fromIndex?: ?number): false;
    includes<T: Object>(object: T, value: any, fromIndex?: number): boolean;
    includes(str: string, value: string, fromIndex?: number): boolean;
    invokeMap<T>(
      array?: ?Array<T>,
      path?: ?((value: T) => Array<string> | string) | Array<string> | string,
      ...args?: Array<any>
    ): Array<any>;
    invokeMap<T: Object>(
      object: T,
      path: ((value: any) => Array<string> | string) | Array<string> | string,
      ...args?: Array<any>
    ): Array<any>;
    keyBy<T, V>(
      array: $ReadOnlyArray<T>,
      iteratee?: ?ValueOnlyIteratee<T>
    ): { [key: V]: ?T };
    keyBy(
      array: void | null,
      iteratee?: ?ValueOnlyIteratee<*>
    ): {};
    keyBy<V, A, I, T: { [id: I]: A }>(
      object: T,
      iteratee?: ?ValueOnlyIteratee<A>
    ): { [key: V]: ?A };
    map<T, U>(array?: ?Array<T>, iteratee?: ?MapIterator<T, U>): Array<U>;
    map<T, U>(
      array: ?$ReadOnlyArray<T>,
      iteratee?: ReadOnlyMapIterator<T, U>
    ): Array<U>,
    map<V, T: Object, U>(
      object: ?T,
      iteratee?: OMapIterator<V, T, U>
    ): Array<U>;
    map<T>(
      str: ?string,
      iteratee?: (char: string, index: number, str: string) => T
    ): Array<T>;
    orderBy<T>(
      array: $ReadOnlyArray<T>,
      iteratees?: ?$ReadOnlyArray<Iteratee<T>> | ?string,
      orders?: ?$ReadOnlyArray<"asc" | "desc"> | ?string
    ): Array<T>;
    orderBy<T>(
      array: null | void,
      iteratees?: ?$ReadOnlyArray<Iteratee<T>> | ?string,
      orders?: ?$ReadOnlyArray<"asc" | "desc"> | ?string
    ): Array<T>;
    orderBy<V, T: Object>(
      object: T,
      iteratees?: $ReadOnlyArray<OIteratee<*>> | string,
      orders?: $ReadOnlyArray<"asc" | "desc"> | string
    ): Array<V>;
    partition<T>(
      array?: ?Array<T>,
      predicate?: ?Predicate<T>
    ): [Array<T>, Array<T>];
    partition<V, A, T: { [id: string]: A }>(
      object: T,
      predicate?: OPredicate<A, T>
    ): [Array<V>, Array<V>];
    reduce<T, U>(
      array: Array<T>,
      iteratee?: (
        accumulator: U,
        value: T,
        index: number,
        array: ?Array<T>
      ) => U,
      accumulator?: U
    ): U;
    reduce<T, U>(
      array: void | null,
      iteratee?: ?(
        accumulator: U,
        value: T,
        index: number,
        array: ?Array<T>
      ) => U,
      accumulator?: ?U
    ): void | null;
    reduce<T: Object, U>(
      object: T,
      iteratee?: (accumulator: U, value: any, key: string, object: T) => U,
      accumulator?: U
    ): U;
    reduceRight<T, U>(
      array: void | null,
      iteratee?: ?(
        accumulator: U,
        value: T,
        index: number,
        array: ?Array<T>
      ) => U,
      accumulator?: ?U
    ): void | null;
    reduceRight<T, U>(
      array: Array<T>,
      iteratee?: ?(
        accumulator: U,
        value: T,
        index: number,
        array: ?Array<T>
      ) => U,
      accumulator?: ?U
    ): U;
    reduceRight<T: Object, U>(
      object: T,
      iteratee?: ?(accumulator: U, value: any, key: string, object: T) => U,
      accumulator?: ?U
    ): U;
    reject<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
    reject<V: Object, A, T: { [id: string]: A }>(
      object?: ?T,
      predicate?: ?OPredicate<A, T>
    ): Array<V>;
    sample<T>(array: ?Array<T>): T;
    sample<V, T: Object>(object: T): V;
    sampleSize<T>(array?: ?Array<T>, n?: ?number): Array<T>;
    sampleSize<V, T: Object>(object: T, n?: number): Array<V>;
    shuffle<T>(array: ?Array<T>): Array<T>;
    shuffle<V, T: Object>(object: T): Array<V>;
    size(collection: Array<any> | Object | string): number;
    some<T>(array: ?Array<T>, predicate?: Predicate<T>): boolean;
    some<T>(array: void | null, predicate?: ?Predicate<T>): false;
    some<A, T: { [id: string]: A }>(
      object?: ?T,
      predicate?: OPredicate<A, T>
    ): boolean;
    sortBy<T>(
      array: ?$ReadOnlyArray<T>,
      ...iteratees?: $ReadOnlyArray<Iteratee<T>>
    ): Array<T>;
    sortBy<T>(
      array: ?$ReadOnlyArray<T>,
      iteratees?: $ReadOnlyArray<Iteratee<T>>
    ): Array<T>;
    sortBy<V, T: Object>(
      object: T,
      ...iteratees?: Array<OIteratee<T>>
    ): Array<V>;
    sortBy<V, T: Object>(
      object: T,
      iteratees?: $ReadOnlyArray<OIteratee<T>>
    ): Array<V>;

    // Date
    now(): number;

    // Function
    after(n: number, fn: Function): Function;
    ary(func: Function, n?: number): Function;
    before(n: number, fn: Function): Function;
    bind(func: Function, thisArg: any, ...partials: Array<any>): Function;
    bindKey(obj?: ?Object, key?: ?string, ...partials?: Array<?any>): Function;
    curry: Curry;
    curry(func: Function, arity?: number): Function;
    curryRight(func: Function, arity?: number): Function;
    debounce<F: Function>(func: F, wait?: number, options?: DebounceOptions): F;
    defer(func: Function, ...args?: Array<any>): TimeoutID;
    delay(func: Function, wait: number, ...args?: Array<any>): TimeoutID;
    flip(func: Function): Function;
    memoize<F: Function>(func: F, resolver?: Function): F;
    negate(predicate: Function): Function;
    once(func: Function): Function;
    overArgs(func?: ?Function, ...transforms?: Array<Function>): Function;
    overArgs(func?: ?Function, transforms?: ?Array<Function>): Function;
    partial(func: Function, ...partials: any[]): Function;
    partialRight(func: Function, ...partials: Array<any>): Function;
    partialRight(func: Function, partials: Array<any>): Function;
    rearg(func: Function, ...indexes: Array<number>): Function;
    rearg(func: Function, indexes: Array<number>): Function;
    rest(func: Function, start?: number): Function;
    spread(func: Function): Function;
    throttle(
      func: Function,
      wait?: number,
      options?: ThrottleOptions
    ): Function;
    unary(func: Function): Function;
    wrap(value?: any, wrapper?: ?Function): Function;

    // Lang
    castArray(value: *): any[];
    clone<T>(value: T): T;
    cloneDeep<T>(value: T): T;
    cloneDeepWith<T, U>(
      value: T,
      customizer?: ?(value: T, key: number | string, object: T, stack: any) => U
    ): U;
    cloneWith<T, U>(
      value: T,
      customizer?: ?(value: T, key: number | string, object: T, stack: any) => U
    ): U;
    conformsTo<T: { [key: string]: mixed }>(
      source: T,
      predicates: T & { [key: string]: (x: any) => boolean }
    ): boolean;
    eq(value: any, other: any): boolean;
    gt(value: any, other: any): boolean;
    gte(value: any, other: any): boolean;
    isArguments(value: void | null): false;
    isArguments(value: any): boolean;
    isArray(value: Array<any>): true;
    isArray(value: any): false;
    isArrayBuffer(value: ArrayBuffer): true;
    isArrayBuffer(value: any): false;
    isArrayLike(value: Array<any> | string | {length: number}): true;
    isArrayLike(value: any): false;
    isArrayLikeObject(value: {length: number} | Array<any>): true;
    isArrayLikeObject(value: any): false;
    isBoolean(value: boolean): true;
    isBoolean(value: any): false;
    isBuffer(value: void | null): false;
    isBuffer(value: any): boolean;
    isDate(value: Date): true;
    isDate(value: any): false;
    isElement(value: Element): true;
    isElement(value: any): false;
    isEmpty(value: void | null | '' | {} | [] | number | boolean): true;
    isEmpty(value: any): boolean;
    isEqual(value: any, other: any): boolean;
    isEqualWith<T, U>(
      value?: ?T,
      other?: ?U,
      customizer?: ?(
        objValue: any,
        otherValue: any,
        key: number | string,
        object: T,
        other: U,
        stack: any
      ) => boolean | void
    ): boolean;
    isError(value: Error): true;
    isError(value: any): false;
    isFinite(value: number): boolean;
    isFinite(value: any): false;
    isFunction(value: Function): true;
    isFunction(value: any): false;
    isInteger(value: number): boolean;
    isInteger(value: any): false;
    isLength(value: void | null): false;
    isLength(value: any): boolean;
    isMap(value: Map<any, any>): true;
    isMap(value: any): false;
    isMatch(object?: ?Object, source?: ?Object): boolean;
    isMatchWith<T: Object, U: Object>(
      object?: ?T,
      source?: ?U,
      customizer?: ?(
        objValue: any,
        srcValue: any,
        key: number | string,
        object: T,
        source: U
      ) => boolean | void
    ): boolean;
    isNaN(value: Function | string | void | null | Object): false;
    isNaN(value: number): boolean;
    isNative(value: number | string | void | null | Object): false;
    isNative(value: any): boolean;
    isNil(value: void | null): true;
    isNil(value: any): false;
    isNull(value: null): true;
    isNull(value: any): false;
    isNumber(value: number): true;
    isNumber(value: any): false;
    isObject(value: Object): true;
    isObject(value: any): false;
    isObjectLike(value: void | null): false;
    isObjectLike(value: any): boolean;
    isPlainObject(value: Object): true;
    isPlainObject(value: any): false;
    isRegExp(value: RegExp): true;
    isRegExp(value: any): false;
    isSafeInteger(value: number): boolean;
    isSafeInteger(value: any): false;
    isSet(value: Set<any>): true;
    isSet(value: any): false;
    isString(value: string): true;
    isString(
      value: number | boolean | Function | void | null | Object | Array<any>
    ): false;
    isSymbol(value: Symbol): true;
    isSymbol(value: any): false;
    isTypedArray(value: $TypedArray): true;
    isTypedArray(value: any): false;
    isUndefined(value: void): true;
    isUndefined(value: any): false;
    isWeakMap(value: WeakMap<any, any>): true;
    isWeakMap(value: any): false;
    isWeakSet(value: WeakSet<any>): true;
    isWeakSet(value: any): false;
    lt(value: any, other: any): boolean;
    lte(value: any, other: any): boolean;
    toArray(value: any): Array<any>;
    toFinite(value: void | null): 0;
    toFinite(value: any): number;
    toInteger(value: void | null): 0;
    toInteger(value: any): number;
    toLength(value: void | null): 0;
    toLength(value: any): number;
    toNumber(value: void | null): 0;
    toNumber(value: any): number;
    toPlainObject(value: any): Object;
    toSafeInteger(value: void | null): 0;
    toSafeInteger(value: any): number;
    toString(value: void | null): '';
    toString(value: any): string;

    // Math
    add(augend: number, addend: number): number;
    ceil(number: number, precision?: number): number;
    divide(dividend: number, divisor: number): number;
    floor(number: number, precision?: number): number;
    max<T>(array: ?Array<T>): T;
    maxBy<T>(array: ?Array<T>, iteratee?: Iteratee<T>): T;
    mean(array: Array<*>): number;
    meanBy<T>(array: Array<T>, iteratee?: Iteratee<T>): number;
    min<T>(array: ?Array<T>): T;
    minBy<T>(array: ?Array<T>, iteratee?: Iteratee<T>): T;
    multiply(multiplier: number, multiplicand: number): number;
    round(number: number, precision?: number): number;
    subtract(minuend: number, subtrahend: number): number;
    sum(array: Array<*>): number;
    sumBy<T>(array: Array<T>, iteratee?: Iteratee<T>): number;

    // number
    clamp(number?: number, lower?: ?number, upper?: ?number): number;
    clamp(number: ?number, lower?: ?number, upper?: ?number): 0;
    inRange(number: number, start?: number, end: number): boolean;
    random(lower?: number, upper?: number, floating?: boolean): number;

    // Object
    assign(object?: ?Object, ...sources?: Array<Object>): Object;
    assignIn(): {};
    assignIn<A, B>(a: A, b: B): A & B;
    assignIn<A, B, C>(a: A, b: B, c: C): A & B & C;
    assignIn<A, B, C, D>(a: A, b: B, c: C, d: D): A & B & C & D;
    assignIn<A, B, C, D, E>(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;
    assignInWith(): {};
    assignInWith<T: Object, A: Object>(
      object: T,
      s1: A,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void
    ): Object;
    assignInWith<T: Object, A: Object, B: Object>(
      object: T,
      s1: A,
      s2: B,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B
      ) => any | void
    ): Object;
    assignInWith<T: Object, A: Object, B: Object, C: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C
      ) => any | void
    ): Object;
    assignInWith<T: Object, A: Object, B: Object, C: Object, D: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      s4: D,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C | D
      ) => any | void
    ): Object;
    assignWith(): {};
    assignWith<T: Object, A: Object>(
      object: T,
      s1: A,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void
    ): Object;
    assignWith<T: Object, A: Object, B: Object>(
      object: T,
      s1: A,
      s2: B,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B
      ) => any | void
    ): Object;
    assignWith<T: Object, A: Object, B: Object, C: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C
      ) => any | void
    ): Object;
    assignWith<T: Object, A: Object, B: Object, C: Object, D: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      s4: D,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C | D
      ) => any | void
    ): Object;
    at(object?: ?Object, ...paths: Array<string>): Array<any>;
    at(object?: ?Object, paths: Array<string>): Array<any>;
    create<T>(prototype: T, properties: Object): $Supertype<T>;
    create(prototype: any, properties: void | null): {};
    defaults(object?: ?Object, ...sources?: Array<Object>): Object;
    defaultsDeep(object?: ?Object, ...sources?: Array<Object>): Object;
    // alias for _.toPairs
    entries(object?: ?Object): Array<[string, any]>;
    // alias for _.toPairsIn
    entriesIn(object?: ?Object): Array<[string, any]>;
    // alias for _.assignIn
    extend<A, B>(a?: ?A, b?: ?B): A & B;
    extend<A, B, C>(a: A, b: B, c: C): A & B & C;
    extend<A, B, C, D>(a: A, b: B, c: C, d: D): A & B & C & D;
    extend<A, B, C, D, E>(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;
    // alias for _.assignInWith
    extendWith<T: Object, A: Object>(
      object?: ?T,
      s1?: ?A,
      customizer?: ?(
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void
    ): Object;
    extendWith<T: Object, A: Object, B: Object>(
      object: T,
      s1: A,
      s2: B,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B
      ) => any | void
    ): Object;
    extendWith<T: Object, A: Object, B: Object, C: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C
      ) => any | void
    ): Object;
    extendWith<T: Object, A: Object, B: Object, C: Object, D: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      s4: D,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C | D
      ) => any | void
    ): Object;
    findKey<A, T: { [id: string]: A }>(
      object: T,
      predicate?: ?OPredicate<A, T>
    ): string | void;
    findKey<A, T: { [id: string]: A }>(
      object: void | null,
      predicate?: ?OPredicate<A, T>
    ): void;
    findLastKey<A, T: { [id: string]: A }>(
      object: T,
      predicate?: ?OPredicate<A, T>
    ): string | void;
    findLastKey<A, T: { [id: string]: A }>(
      object: void | null,
      predicate?: ?OPredicate<A, T>
    ): void;
    forIn(object: Object, iteratee?: ?OIteratee<*>): Object;
    forIn(object: void | null, iteratee?: ?OIteratee<*>): null;
    forInRight(object: Object, iteratee?: ?OIteratee<*>): Object;
    forInRight(object: void | null, iteratee?: ?OIteratee<*>): null;
    forOwn(object: Object, iteratee?: ?OIteratee<*>): Object;
    forOwn(object: void | null, iteratee?: ?OIteratee<*>): null;
    forOwnRight(object: Object, iteratee?: ?OIteratee<*>): Object;
    forOwnRight(object: void | null, iteratee?: ?OIteratee<*>): null;
    functions(object?: ?Object): Array<string>;
    functionsIn(object?: ?Object): Array<string>;
    get(
      object?: ?Object | ?Array<any>,
      path?: ?Array<string> | string,
      defaultValue?: any
    ): any;
    has(object: Object, path: Array<string> | string): boolean;
    has(object: Object, path: void | null): false;
    has(object: void | null, path?: ?Array<string> | ?string): false;
    hasIn(object: Object, path: Array<string> | string): boolean;
    hasIn(object: Object, path: void | null): false;
    hasIn(object: void | null, path?: ?Array<string> | ?string): false;
    invert(object: Object, multiVal?: ?boolean): Object;
    invert(object: void | null, multiVal?: ?boolean): {};
    invertBy(object: Object, iteratee?: ?Function): Object;
    invertBy(object: void | null, iteratee?: ?Function): {};
    invoke(
      object?: ?Object,
      path?: ?Array<string> | string,
      ...args?: Array<any>
    ): any;
    keys<K>(object?: ?{ [key: K]: any }): Array<K>;
    keys(object?: ?Object): Array<string>;
    keysIn(object?: ?Object): Array<string>;
    mapKeys(object: Object, iteratee?: ?OIteratee<*>): Object;
    mapKeys(object: void | null, iteratee?: ?OIteratee<*>): {};
    mapValues(object: Object, iteratee?: ?OIteratee<*>): Object;
    mapValues(object: void | null, iteratee?: ?OIteratee<*>): {};
    merge(object?: ?Object, ...sources?: Array<?Object>): Object;
    mergeWith(): {};
    mergeWith<T: Object, A: Object>(
      object: T,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void
    ): Object;
    mergeWith<T: Object, A: Object, B: Object>(
      object: T,
      s1: A,
      s2: B,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B
      ) => any | void
    ): Object;
    mergeWith<T: Object, A: Object, B: Object, C: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C
      ) => any | void
    ): Object;
    mergeWith<T: Object, A: Object, B: Object, C: Object, D: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      s4: D,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C | D
      ) => any | void
    ): Object;
    omit(object?: ?Object, ...props: Array<string>): Object;
    omit(object?: ?Object, props: Array<string>): Object;
    omitBy<A, T: { [id: string]: A }>(
      object: T,
      predicate?: ?OPredicate<A, T>
    ): Object;
    omitBy<A, T: void | null>(
      object: T,
      predicate?: ?OPredicate<A, T>
    ): {};
    pick(object?: ?Object, ...props: Array<string>): Object;
    pick(object?: ?Object, props: Array<string>): Object;
    pickBy<A, T: { [id: string]: A }>(
      object: T,
      predicate?: ?OPredicate<A, T>
    ): Object;
    pickBy<A, T: void | null>(
      object: T,
      predicate?: ?OPredicate<A, T>
    ): {};
    result(
      object?: ?Object,
      path?: ?Array<string> | string,
      defaultValue?: any
    ): any;
    set(object: Object, path?: ?Array<string> | string, value: any): Object;
    set<T: void | null>(
      object: T,
      path?: ?Array<string> | string,
      value?: ?any): T;
    setWith<T>(
      object: T,
      path?: ?Array<string> | string,
      value: any,
      customizer?: (nsValue: any, key: string, nsObject: T) => any
    ): Object;
    setWith<T: void | null>(
      object: T,
      path?: ?Array<string> | string,
      value?: ?any,
      customizer?: ?(nsValue: any, key: string, nsObject: T) => any
    ): T;
    toPairs(object?: ?Object | Array<*>): Array<[string, any]>;
    toPairsIn(object?: ?Object): Array<[string, any]>;
    transform(
      collection: Object | $ReadOnlyArray<any>,
      iteratee?: ?OIteratee<*>,
      accumulator?: any
    ): any;
    transform(
      collection: void | null,
      iteratee?: ?OIteratee<*>,
      accumulator?: ?any
    ): {};
    unset(object: Object, path?: ?Array<string> | ?string): boolean;
    unset(object: void | null, path?: ?Array<string> | ?string): true;
    update(object: Object, path: string[] | string, updater: Function): Object;
    update<T: void | null>(
      object: T,
      path?: ?string[] | ?string,
      updater?: ?Function): T;
    updateWith(
      object: Object,
      path?: ?string[] | ?string,
      updater?: ?Function,
      customizer?: ?Function
    ): Object;
    updateWith<T: void | null>(
      object: T,
      path?: ?string[] | ?string,
      updater?: ?Function,
      customizer?: ?Function
    ): T;
    values(object?: ?Object): Array<any>;
    valuesIn(object?: ?Object): Array<any>;

    // Seq
    // harder to read, but this is _()
    (value: any): any;
    chain<T>(value: T): any;
    tap<T>(value: T, interceptor: (value: T) => any): T;
    thru<T1, T2>(value: T1, interceptor: (value: T1) => T2): T2;
    // TODO: _.prototype.*

    // String
    camelCase(string: string): string;
    camelCase(string: void | null): '';
    capitalize(string: string): string;
    capitalize(string: void | null): '';
    deburr(string: string): string;
    deburr(string: void | null): '';
    endsWith(string: string, target?: string, position?: ?number): boolean;
    endsWith(string: void | null, target?: ?string, position?: ?number): false;
    escape(string: string): string;
    escape(string: void | null): '';
    escapeRegExp(string: string): string;
    escapeRegExp(string: void | null): '';
    kebabCase(string: string): string;
    kebabCase(string: void | null): '';
    lowerCase(string: string): string;
    lowerCase(string: void | null): '';
    lowerFirst(string: string): string;
    lowerFirst(string: void | null): '';
    pad(string?: ?string, length?: ?number, chars?: ?string): string;
    padEnd(string?: ?string, length?: ?number, chars?: ?string): string;
    padStart(string?: ?string, length?: ?number, chars?: ?string): string;
    parseInt(string: string, radix?: ?number): number;
    repeat(string: string, n?: ?number): string;
    repeat(string: void | null, n?: ?number): '';
    replace(
      string: string,
      pattern: RegExp | string,
      replacement: ((string: string) => string) | string
    ): string;
    replace(
      string: void | null,
      pattern?: ?RegExp | ?string,
      replacement: ?((string: string) => string) | ?string
    ): '';
    snakeCase(string: string): string;
    snakeCase(string: void | null): '';
    split(
      string?: ?string,
      separator?: ?RegExp | ?string,
      limit?: ?number
    ): Array<string>;
    startCase(string: string): string;
    startCase(string: void | null): '';
    startsWith(string: string, target?: string, position?: number): boolean;
    startsWith(string: void | null, target?: ?string, position?: ?number): false;
    template(string?: ?string, options?: ?TemplateSettings): Function;
    toLower(string: string): string;
    toLower(string: void | null): '';
    toUpper(string: string): string;
    toUpper(string: void | null): '';
    trim(string: string, chars?: string): string;
    trim(string: void | null, chars?: ?string): '';
    trimEnd(string: string, chars?: ?string): string;
    trimEnd(string: void | null, chars?: ?string): '';
    trimStart(string: string, chars?: ?string): string;
    trimStart(string: void | null, chars?: ?string): '';
    truncate(string: string, options?: TruncateOptions): string;
    truncate(string: void | null, options?: ?TruncateOptions): '';
    unescape(string: string): string;
    unescape(string: void | null): '';
    upperCase(string: string): string;
    upperCase(string: void | null): '';
    upperFirst(string: string): string;
    upperFirst(string: void | null): '';
    words(string?: ?string, pattern?: ?RegExp | ?string): Array<string>;

    // Util
    attempt(func: Function, ...args: Array<any>): any;
    bindAll(object: Object, methodNames?: ?Array<string>): Object;
    bindAll<T: void | null>(object: T, methodNames?: ?Array<string>): T;
    bindAll(object: Object, ...methodNames: Array<string>): Object;
    cond(pairs?: ?NestedArray<Function>): Function;
    conforms(source?: ?Object): Function;
    constant<T>(value: T): () => T;
    defaultTo<T1: string | boolean | Object, T2>(
      value: T1,
      defaultValue: T2
    ): T1;
    // NaN is a number instead of its own type, otherwise it would behave like null/void
    defaultTo<T1: number, T2>(value: T1, defaultValue: T2): T1 | T2;
    defaultTo<T1: void | null, T2>(value: T1, defaultValue: T2): T2;
    flow: ($ComposeReverse & (funcs: Array<Function>) => Function);
    flowRight: ($Compose & (funcs: Array<Function>) => Function);
    identity<T>(value: T): T;
    iteratee(func?: any): Function;
    matches(source?: ?Object): Function;
    matchesProperty(path?: ?Array<string> | string, srcValue: any): Function;
    method(path?: ?Array<string> | string, ...args?: Array<any>): Function;
    methodOf(object?: ?Object, ...args?: Array<any>): Function;
    mixin<T: Function | Object>(
      object?: T,
      source: Object,
      options?: { chain: boolean }
    ): T;
    noConflict(): Lodash;
    noop(...args: Array<mixed>): void;
    nthArg(n?: ?number): Function;
    over(...iteratees: Array<Function>): Function;
    over(iteratees: Array<Function>): Function;
    overEvery(...predicates: Array<Function>): Function;
    overEvery(predicates: Array<Function>): Function;
    overSome(...predicates: Array<Function>): Function;
    overSome(predicates: Array<Function>): Function;
    property(path?: ?Array<string> | string): Function;
    propertyOf(object?: ?Object): Function;
    range(start: number, end: number, step?: number): Array<number>;
    range(end: number, step?: number): Array<number>;
    rangeRight(start?: ?number, end?: ?number, step?: ?number): Array<number>;
    rangeRight(end?: ?number, step?: ?number): Array<number>;
    runInContext(context?: ?Object): Function;

    stubArray(): Array<*>;
    stubFalse(): false;
    stubObject(): {};
    stubString(): "";
    stubTrue(): true;
    times(n?: ?number, ...rest?: Array<void | null>): Array<number>;
    times<T>(n: number, iteratee: (i: number) => T): Array<T>;
    toPath(value: any): Array<string>;
    uniqueId(prefix?: ?string): string;

    // Properties
    VERSION: string;
    templateSettings: TemplateSettings;
  }

  declare module.exports: Lodash;
}

declare module "lodash/fp" {
  declare type __CurriedFunction1<A, R, AA: A> = (...r: [AA]) => R;
  declare type CurriedFunction1<A, R> = __CurriedFunction1<A, R, *>;

  declare type __CurriedFunction2<A, B, R, AA: A, BB: B> = ((
    ...r: [AA]
  ) => CurriedFunction1<BB, R>) &
    ((...r: [AA, BB]) => R);
  declare type CurriedFunction2<A, B, R> = __CurriedFunction2<A, B, R, *, *>;

  declare type __CurriedFunction3<A, B, C, R, AA: A, BB: B, CC: C> = ((
    ...r: [AA]
  ) => CurriedFunction2<BB, CC, R>) &
    ((...r: [AA, BB]) => CurriedFunction1<CC, R>) &
    ((...r: [AA, BB, CC]) => R);
  declare type CurriedFunction3<A, B, C, R> = __CurriedFunction3<
    A,
    B,
    C,
    R,
    *,
    *,
    *
  >;

  declare type __CurriedFunction4<
    A,
    B,
    C,
    D,
    R,
    AA: A,
    BB: B,
    CC: C,
    DD: D
  > = ((...r: [AA]) => CurriedFunction3<BB, CC, DD, R>) &
    ((...r: [AA, BB]) => CurriedFunction2<CC, DD, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction1<DD, R>) &
    ((...r: [AA, BB, CC, DD]) => R);
  declare type CurriedFunction4<A, B, C, D, R> = __CurriedFunction4<
    A,
    B,
    C,
    D,
    R,
    *,
    *,
    *,
    *
  >;

  declare type __CurriedFunction5<
    A,
    B,
    C,
    D,
    E,
    R,
    AA: A,
    BB: B,
    CC: C,
    DD: D,
    EE: E
  > = ((...r: [AA]) => CurriedFunction4<BB, CC, DD, EE, R>) &
    ((...r: [AA, BB]) => CurriedFunction3<CC, DD, EE, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction2<DD, EE, R>) &
    ((...r: [AA, BB, CC, DD]) => CurriedFunction1<EE, R>) &
    ((...r: [AA, BB, CC, DD, EE]) => R);
  declare type CurriedFunction5<A, B, C, D, E, R> = __CurriedFunction5<
    A,
    B,
    C,
    D,
    E,
    R,
    *,
    *,
    *,
    *,
    *
  >;

  declare type __CurriedFunction6<
    A,
    B,
    C,
    D,
    E,
    F,
    R,
    AA: A,
    BB: B,
    CC: C,
    DD: D,
    EE: E,
    FF: F
  > = ((...r: [AA]) => CurriedFunction5<BB, CC, DD, EE, FF, R>) &
    ((...r: [AA, BB]) => CurriedFunction4<CC, DD, EE, FF, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction3<DD, EE, FF, R>) &
    ((...r: [AA, BB, CC, DD]) => CurriedFunction2<EE, FF, R>) &
    ((...r: [AA, BB, CC, DD, EE]) => CurriedFunction1<FF, R>) &
    ((...r: [AA, BB, CC, DD, EE, FF]) => R);
  declare type CurriedFunction6<A, B, C, D, E, F, R> = __CurriedFunction6<
    A,
    B,
    C,
    D,
    E,
    F,
    R,
    *,
    *,
    *,
    *,
    *,
    *
  >;

  declare type Curry = (<A, R>((...r: [A]) => R) => CurriedFunction1<A, R>) &
    (<A, B, R>((...r: [A, B]) => R) => CurriedFunction2<A, B, R>) &
    (<A, B, C, R>((...r: [A, B, C]) => R) => CurriedFunction3<A, B, C, R>) &
    (<A, B, C, D, R>(
      (...r: [A, B, C, D]) => R
    ) => CurriedFunction4<A, B, C, D, R>) &
    (<A, B, C, D, E, R>(
      (...r: [A, B, C, D, E]) => R
    ) => CurriedFunction5<A, B, C, D, E, R>) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R
    ) => CurriedFunction6<A, B, C, D, E, F, R>);

  declare type UnaryFn<A, R> = (a: A) => R;

  declare type TemplateSettings = {
    escape?: RegExp,
    evaluate?: RegExp,
    imports?: Object,
    interpolate?: RegExp,
    variable?: string
  };

  declare type TruncateOptions = {
    length?: number,
    omission?: string,
    separator?: RegExp | string
  };

  declare type DebounceOptions = {
    leading?: boolean,
    maxWait?: number,
    trailing?: boolean
  };

  declare type ThrottleOptions = {
    leading?: boolean,
    trailing?: boolean
  };

  declare type NestedArray<T> = Array<Array<T>>;

  declare type matchesIterateeShorthand = Object;
  declare type matchesPropertyIterateeShorthand = [string, any];
  declare type propertyIterateeShorthand = string;

  declare type OPredicate<A> =
    | ((value: A) => any)
    | matchesIterateeShorthand
    | matchesPropertyIterateeShorthand
    | propertyIterateeShorthand;

  declare type OIterateeWithResult<V, R> = Object | string | ((value: V) => R);
  declare type OIteratee<O> = OIterateeWithResult<any, any>;
  declare type OFlatMapIteratee<T, U> = OIterateeWithResult<any, Array<U>>;

  declare type Predicate<T> =
    | ((value: T) => any)
    | matchesIterateeShorthand
    | matchesPropertyIterateeShorthand
    | propertyIterateeShorthand;

  declare type _ValueOnlyIteratee<T> = (value: T) => mixed;
  declare type ValueOnlyIteratee<T> = _ValueOnlyIteratee<T> | string;
  declare type _Iteratee<T> = (item: T) => mixed;
  declare type Iteratee<T> = _Iteratee<T> | Object | string;
  declare type FlatMapIteratee<T, U> =
    | ((item: T) => Array<U>)
    | Object
    | string;
  declare type Comparator<T> = (item: T, item2: T) => boolean;

  declare type MapIterator<T, U> = ((item: T) => U) | propertyIterateeShorthand;

  declare type OMapIterator<T, U> =
    | ((item: T) => U)
    | propertyIterateeShorthand;

  declare class Lodash {
    // Array
    chunk<T>(size: number): (array: Array<T>) => Array<Array<T>>;
    chunk<T>(size: number, array: Array<T>): Array<Array<T>>;
    compact<T, N: ?T>(array?: ?$ReadOnlyArray<N>): Array<T>;
    concat<T, U, A: Array<T> | T, B: Array<U> | U>(
      base: A
    ): (elements: B) => Array<T | U>;
    concat<T, U, A: Array<T> | T, B: Array<U> | U>(
      base: A,
      elements: B
    ): Array<T | U>;
    difference<T>(values: $ReadOnlyArray<T>): (array: $ReadOnlyArray<T>) => T[];
    difference<T>(values: $ReadOnlyArray<T>, array: $ReadOnlyArray<T>): T[];
    differenceBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((values: $ReadOnlyArray<T>) => (array: $ReadOnlyArray<T>) => T[]) &
      ((values: $ReadOnlyArray<T>, array: $ReadOnlyArray<T>) => T[]);
    differenceBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      values: $ReadOnlyArray<T>
    ): (array: $ReadOnlyArray<T>) => T[];
    differenceBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      values: $ReadOnlyArray<T>,
      array: $ReadOnlyArray<T>
    ): T[];
    differenceWith<T>(
      values: $ReadOnlyArray<T>
    ): ((comparator: Comparator<T>) => (array: $ReadOnlyArray<T>) => T[]) &
      ((comparator: Comparator<T>, array: $ReadOnlyArray<T>) => T[]);
    differenceWith<T>(
      values: $ReadOnlyArray<T>,
      comparator: Comparator<T>
    ): (array: $ReadOnlyArray<T>) => T[];
    differenceWith<T>(values: $ReadOnlyArray<T>, comparator: Comparator<T>, array: $ReadOnlyArray<T>): T[];
    drop<T>(n: number): (array: Array<T>) => Array<T>;
    drop<T>(n: number, array: Array<T>): Array<T>;
    dropLast<T>(n: number): (array: Array<T>) => Array<T>;
    dropLast<T>(n: number, array: Array<T>): Array<T>;
    dropRight<T>(n: number): (array: Array<T>) => Array<T>;
    dropRight<T>(n: number, array: Array<T>): Array<T>;
    dropRightWhile<T>(predicate: Predicate<T>): (array: Array<T>) => Array<T>;
    dropRightWhile<T>(predicate: Predicate<T>, array: Array<T>): Array<T>;
    dropWhile<T>(predicate: Predicate<T>): (array: Array<T>) => Array<T>;
    dropWhile<T>(predicate: Predicate<T>, array: Array<T>): Array<T>;
    dropLastWhile<T>(predicate: Predicate<T>): (array: Array<T>) => Array<T>;
    dropLastWhile<T>(predicate: Predicate<T>, array: Array<T>): Array<T>;
    fill<T, U>(
      start: number
    ): ((
      end: number
    ) => ((value: U) => (array: Array<T>) => Array<T | U>) &
      ((value: U, array: Array<T>) => Array<T | U>)) &
      ((end: number, value: U) => (array: Array<T>) => Array<T | U>) &
      ((end: number, value: U, array: Array<T>) => Array<T | U>);
    fill<T, U>(
      start: number,
      end: number
    ): ((value: U) => (array: Array<T>) => Array<T | U>) &
      ((value: U, array: Array<T>) => Array<T | U>);
    fill<T, U>(
      start: number,
      end: number,
      value: U
    ): (array: Array<T>) => Array<T | U>;
    fill<T, U>(
      start: number,
      end: number,
      value: U,
      array: Array<T>
    ): Array<T | U>;
    findIndex<T>(predicate: Predicate<T>): (array: $ReadOnlyArray<T>) => number;
    findIndex<T>(predicate: Predicate<T>, array: $ReadOnlyArray<T>): number;
    findIndexFrom<T>(
      predicate: Predicate<T>
    ): ((fromIndex: number) => (array: $ReadOnlyArray<T>) => number) &
      ((fromIndex: number, array: $ReadOnlyArray<T>) => number);
    findIndexFrom<T>(
      predicate: Predicate<T>,
      fromIndex: number
    ): (array: $ReadOnlyArray<T>) => number;
    findIndexFrom<T>(
      predicate: Predicate<T>,
      fromIndex: number,
      array: $ReadOnlyArray<T>
    ): number;
    findLastIndex<T>(
      predicate: Predicate<T>
    ): (array: $ReadOnlyArray<T>) => number;
    findLastIndex<T>(predicate: Predicate<T>, array: $ReadOnlyArray<T>): number;
    findLastIndexFrom<T>(
      predicate: Predicate<T>
    ): ((fromIndex: number) => (array: $ReadOnlyArray<T>) => number) &
      ((fromIndex: number, array: $ReadOnlyArray<T>) => number);
    findLastIndexFrom<T>(
      predicate: Predicate<T>,
      fromIndex: number
    ): (array: $ReadOnlyArray<T>) => number;
    findLastIndexFrom<T>(
      predicate: Predicate<T>,
      fromIndex: number,
      array: $ReadOnlyArray<T>
    ): number;
    // alias of _.head
    first<T>(array: Array<T>): T;
    flatten<T, X>(array: Array<Array<T> | X>): Array<T | X>;
    unnest<T, X>(array: Array<Array<T> | X>): Array<T | X>;
    flattenDeep<T>(array: any[]): Array<T>;
    flattenDepth(depth: number): (array: any[]) => any[];
    flattenDepth(depth: number, array: any[]): any[];
    fromPairs<A, B>(pairs: Array<[A, B]>): { [key: A]: B };
    head<T>(array: Array<T>): T;
    indexOf<T>(value: T): (array: Array<T>) => number;
    indexOf<T>(value: T, array: Array<T>): number;
    indexOfFrom<T>(
      value: T
    ): ((fromIndex: number) => (array: Array<T>) => number) &
      ((fromIndex: number, array: Array<T>) => number);
    indexOfFrom<T>(value: T, fromIndex: number): (array: Array<T>) => number;
    indexOfFrom<T>(value: T, fromIndex: number, array: Array<T>): number;
    initial<T>(array: Array<T>): Array<T>;
    init<T>(array: Array<T>): Array<T>;
    intersection<T>(a1: Array<T>): (a2: Array<T>) => Array<T>;
    intersection<T>(a1: Array<T>, a2: Array<T>): Array<T>;
    intersectionBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
    intersectionBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
    intersectionBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>;
    intersectionWith<T>(
      comparator: Comparator<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
    intersectionWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
    intersectionWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>;
    join<T>(separator: string): (array: Array<T>) => string;
    join<T>(separator: string, array: Array<T>): string;
    last<T>(array: Array<T>): T;
    lastIndexOf<T>(value: T): (array: Array<T>) => number;
    lastIndexOf<T>(value: T, array: Array<T>): number;
    lastIndexOfFrom<T>(
      value: T
    ): ((fromIndex: number) => (array: Array<T>) => number) &
      ((fromIndex: number, array: Array<T>) => number);
    lastIndexOfFrom<T>(
      value: T,
      fromIndex: number
    ): (array: Array<T>) => number;
    lastIndexOfFrom<T>(value: T, fromIndex: number, array: Array<T>): number;
    nth<T>(n: number): (array: T[]) => T;
    nth<T>(n: number, array: T[]): T;
    pull<T>(value: T): (array: Array<T>) => Array<T>;
    pull<T>(value: T, array: Array<T>): Array<T>;
    pullAll<T>(values: Array<T>): (array: Array<T>) => Array<T>;
    pullAll<T>(values: Array<T>, array: Array<T>): Array<T>;
    pullAllBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((values: Array<T>) => (array: Array<T>) => Array<T>) &
      ((values: Array<T>, array: Array<T>) => Array<T>);
    pullAllBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      values: Array<T>
    ): (array: Array<T>) => Array<T>;
    pullAllBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      values: Array<T>,
      array: Array<T>
    ): Array<T>;
    pullAllWith<T>(
      comparator: Function
    ): ((values: T[]) => (array: T[]) => T[]) &
      ((values: T[], array: T[]) => T[]);
    pullAllWith<T>(comparator: Function, values: T[]): (array: T[]) => T[];
    pullAllWith<T>(comparator: Function, values: T[], array: T[]): T[];
    pullAt<T>(indexed: Array<number>): (array: Array<T>) => Array<T>;
    pullAt<T>(indexed: Array<number>, array: Array<T>): Array<T>;
    remove<T>(predicate: Predicate<T>): (array: Array<T>) => Array<T>;
    remove<T>(predicate: Predicate<T>, array: Array<T>): Array<T>;
    reverse<T>(array: Array<T>): Array<T>;
    slice<T>(
      start: number
    ): ((end: number) => (array: Array<T>) => Array<T>) &
      ((end: number, array: Array<T>) => Array<T>);
    slice<T>(start: number, end: number): (array: Array<T>) => Array<T>;
    slice<T>(start: number, end: number, array: Array<T>): Array<T>;
    sortedIndex<T>(value: T): (array: Array<T>) => number;
    sortedIndex<T>(value: T, array: Array<T>): number;
    sortedIndexBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((value: T) => (array: Array<T>) => number) &
      ((value: T, array: Array<T>) => number);
    sortedIndexBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      value: T
    ): (array: Array<T>) => number;
    sortedIndexBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      value: T,
      array: Array<T>
    ): number;
    sortedIndexOf<T>(value: T): (array: Array<T>) => number;
    sortedIndexOf<T>(value: T, array: Array<T>): number;
    sortedLastIndex<T>(value: T): (array: Array<T>) => number;
    sortedLastIndex<T>(value: T, array: Array<T>): number;
    sortedLastIndexBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((value: T) => (array: Array<T>) => number) &
      ((value: T, array: Array<T>) => number);
    sortedLastIndexBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      value: T
    ): (array: Array<T>) => number;
    sortedLastIndexBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      value: T,
      array: Array<T>
    ): number;
    sortedLastIndexOf<T>(value: T): (array: Array<T>) => number;
    sortedLastIndexOf<T>(value: T, array: Array<T>): number;
    sortedUniq<T>(array: Array<T>): Array<T>;
    sortedUniqBy<T>(
      iteratee: (value: T) => mixed
    ): (array: Array<T>) => Array<T>;
    sortedUniqBy<T>(iteratee: (value: T) => mixed, array: Array<T>): Array<T>;
    tail<T>(array: Array<T>): Array<T>;
    take<T>(n: number): (array: Array<T>) => Array<T>;
    take<T>(n: number, array: Array<T>): Array<T>;
    takeRight<T>(n: number): (array: Array<T>) => Array<T>;
    takeRight<T>(n: number, array: Array<T>): Array<T>;
    takeLast<T>(n: number): (array: Array<T>) => Array<T>;
    takeLast<T>(n: number, array: Array<T>): Array<T>;
    takeRightWhile<T>(predicate: Predicate<T>): (array: Array<T>) => Array<T>;
    takeRightWhile<T>(predicate: Predicate<T>, array: Array<T>): Array<T>;
    takeLastWhile<T>(predicate: Predicate<T>): (array: Array<T>) => Array<T>;
    takeLastWhile<T>(predicate: Predicate<T>, array: Array<T>): Array<T>;
    takeWhile<T>(predicate: Predicate<T>): (array: Array<T>) => Array<T>;
    takeWhile<T>(predicate: Predicate<T>, array: Array<T>): Array<T>;
    union<T>(a1: Array<T>): (a2: Array<T>) => Array<T>;
    union<T>(a1: Array<T>, a2: Array<T>): Array<T>;
    unionBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
    unionBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
    unionBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>;
    unionWith<T>(
      comparator: Comparator<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
    unionWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
    unionWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>;
    uniq<T>(array: Array<T>): Array<T>;
    uniqBy<T>(iteratee: ValueOnlyIteratee<T>): (array: Array<T>) => Array<T>;
    uniqBy<T>(iteratee: ValueOnlyIteratee<T>, array: Array<T>): Array<T>;
    uniqWith<T>(comparator: Comparator<T>): (array: Array<T>) => Array<T>;
    uniqWith<T>(comparator: Comparator<T>, array: Array<T>): Array<T>;
    unzip<T>(array: Array<T>): Array<T>;
    unzipWith<T>(iteratee: Iteratee<T>): (array: Array<T>) => Array<T>;
    unzipWith<T>(iteratee: Iteratee<T>, array: Array<T>): Array<T>;
    without<T>(values: Array<T>): (array: Array<T>) => Array<T>;
    without<T>(values: Array<T>, array: Array<T>): Array<T>;
    xor<T>(a1: Array<T>): (a2: Array<T>) => Array<T>;
    xor<T>(a1: Array<T>, a2: Array<T>): Array<T>;
    symmetricDifference<T>(a1: Array<T>): (a2: Array<T>) => Array<T>;
    symmetricDifference<T>(a1: Array<T>, a2: Array<T>): Array<T>;
    xorBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
    xorBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
    xorBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>;
    symmetricDifferenceBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
    symmetricDifferenceBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
    symmetricDifferenceBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>;
    xorWith<T>(
      comparator: Comparator<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
    xorWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
    xorWith<T>(comparator: Comparator<T>, a1: Array<T>, a2: Array<T>): Array<T>;
    symmetricDifferenceWith<T>(
      comparator: Comparator<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
    symmetricDifferenceWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
    symmetricDifferenceWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>;
    zip<A, B>(a1: A[]): (a2: B[]) => Array<[A, B]>;
    zip<A, B>(a1: A[], a2: B[]): Array<[A, B]>;
    zipAll(arrays: Array<Array<any>>): Array<any>;
    zipObject<K, V>(props?: Array<K>): (values?: Array<V>) => { [key: K]: V };
    zipObject<K, V>(props?: Array<K>, values?: Array<V>): { [key: K]: V };
    zipObj(props: Array<any>): (values: Array<any>) => Object;
    zipObj(props: Array<any>, values: Array<any>): Object;
    zipObjectDeep(props: any[]): (values: any) => Object;
    zipObjectDeep(props: any[], values: any): Object;
    zipWith<T>(
      iteratee: Iteratee<T>
    ): ((a1: NestedArray<T>) => (a2: NestedArray<T>) => Array<T>) &
      ((a1: NestedArray<T>, a2: NestedArray<T>) => Array<T>);
    zipWith<T>(
      iteratee: Iteratee<T>,
      a1: NestedArray<T>
    ): (a2: NestedArray<T>) => Array<T>;
    zipWith<T>(
      iteratee: Iteratee<T>,
      a1: NestedArray<T>,
      a2: NestedArray<T>
    ): Array<T>;
    // Collection
    countBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => { [string]: number };
    countBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): { [string]: number };
    // alias of _.forEach
    each<T>(
      iteratee: Iteratee<T> | OIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
    each<T>(
      iteratee: Iteratee<T> | OIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): Array<T>;
    // alias of _.forEachRight
    eachRight<T>(
      iteratee: Iteratee<T> | OIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
    eachRight<T>(
      iteratee: Iteratee<T> | OIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): Array<T>;
    every<T>(
      iteratee: Iteratee<T> | OIteratee<T>
    ): (collection: $ReadOnlyArray<T> | { [id: any]: T }) => boolean;
    every<T>(
      iteratee: Iteratee<T> | OIteratee<T>,
      collection: $ReadOnlyArray<T> | { [id: any]: T }
    ): boolean;
    all<T>(
      iteratee: Iteratee<T> | OIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => boolean;
    all<T>(
      iteratee: Iteratee<T> | OIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): boolean;
    filter<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
    filter<T>(
      predicate: Predicate<T> | OPredicate<T>,
      collection: Array<T> | { [id: any]: T }
    ): Array<T>;
    find<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): (collection: $ReadOnlyArray<T> | { [id: any]: T }) => T | void;
    find<T>(
      predicate: Predicate<T> | OPredicate<T>,
      collection: $ReadOnlyArray<T> | { [id: any]: T }
    ): T | void;
    findFrom<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): ((
      fromIndex: number
    ) => (collection: $ReadOnlyArray<T> | { [id: any]: T }) => T | void) &
      ((
        fromIndex: number,
        collection: $ReadOnlyArray<T> | { [id: any]: T }
      ) => T | void);
    findFrom<T>(
      predicate: Predicate<T> | OPredicate<T>,
      fromIndex: number
    ): (collection: Array<T> | { [id: any]: T }) => T | void;
    findFrom<T>(
      predicate: Predicate<T> | OPredicate<T>,
      fromIndex: number,
      collection: $ReadOnlyArray<T> | { [id: any]: T }
    ): T | void;
    findLast<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): (collection: $ReadOnlyArray<T> | { [id: any]: T }) => T | void;
    findLast<T>(
      predicate: Predicate<T> | OPredicate<T>,
      collection: $ReadOnlyArray<T> | { [id: any]: T }
    ): T | void;
    findLastFrom<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): ((
      fromIndex: number
    ) => (collection: $ReadOnlyArray<T> | { [id: any]: T }) => T | void) &
      ((
        fromIndex: number,
        collection: $ReadOnlyArray<T> | { [id: any]: T }
      ) => T | void);
    findLastFrom<T>(
      predicate: Predicate<T> | OPredicate<T>,
      fromIndex: number
    ): (collection: $ReadOnlyArray<T> | { [id: any]: T }) => T | void;
    findLastFrom<T>(
      predicate: Predicate<T> | OPredicate<T>,
      fromIndex: number,
      collection: $ReadOnlyArray<T> | { [id: any]: T }
    ): T | void;
    flatMap<T, U>(
      iteratee: FlatMapIteratee<T, U> | OFlatMapIteratee<T, U>
    ): (collection: Array<T> | { [id: any]: T }) => Array<U>;
    flatMap<T, U>(
      iteratee: FlatMapIteratee<T, U> | OFlatMapIteratee<T, U>,
      collection: Array<T> | { [id: any]: T }
    ): Array<U>;
    flatMapDeep<T, U>(
      iteratee: FlatMapIteratee<T, U> | OFlatMapIteratee<T, U>
    ): (collection: Array<T> | { [id: any]: T }) => Array<U>;
    flatMapDeep<T, U>(
      iteratee: FlatMapIteratee<T, U> | OFlatMapIteratee<T, U>,
      collection: Array<T> | { [id: any]: T }
    ): Array<U>;
    flatMapDepth<T, U>(
      iteratee: FlatMapIteratee<T, U> | OFlatMapIteratee<T, U>
    ): ((
      depth: number
    ) => (collection: Array<T> | { [id: any]: T }) => Array<U>) &
      ((depth: number, collection: Array<T> | { [id: any]: T }) => Array<U>);
    flatMapDepth<T, U>(
      iteratee: FlatMapIteratee<T, U> | OFlatMapIteratee<T, U>,
      depth: number
    ): (collection: Array<T> | { [id: any]: T }) => Array<U>;
    flatMapDepth<T, U>(
      iteratee: FlatMapIteratee<T, U> | OFlatMapIteratee<T, U>,
      depth: number,
      collection: Array<T> | { [id: any]: T }
    ): Array<U>;
    forEach<T>(
      iteratee: Iteratee<T> | OIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
    forEach<T>(
      iteratee: Iteratee<T> | OIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): Array<T>;
    forEachRight<T>(
      iteratee: Iteratee<T> | OIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
    forEachRight<T>(
      iteratee: Iteratee<T> | OIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): Array<T>;
    groupBy<V, T>(
      iteratee: ValueOnlyIteratee<T>
    ): (
      collection: $ReadOnlyArray<T> | { [id: any]: T }
    ) => { [key: V]: Array<T> };
    groupBy<V, T>(
      iteratee: ValueOnlyIteratee<T>,
      collection: $ReadOnlyArray<T> | { [id: any]: T }
    ): { [key: V]: Array<T> };
    includes<T>(value: T): (collection: Array<T> | { [id: any]: T }) => boolean;
    includes<T>(value: T, collection: Array<T> | { [id: any]: T }): boolean;
    includes(value: string): (str: string) => boolean;
    includes(value: string, str: string): boolean;
    contains(value: string): (str: string) => boolean;
    contains(value: string, str: string): boolean;
    contains<T>(value: T): (collection: Array<T> | { [id: any]: T }) => boolean;
    contains<T>(value: T, collection: Array<T> | { [id: any]: T }): boolean;
    includesFrom(
      value: string
    ): ((fromIndex: number) => (str: string) => boolean) &
      ((fromIndex: number, str: string) => boolean);
    includesFrom(value: string, fromIndex: number): (str: string) => boolean;
    includesFrom(value: string, fromIndex: number, str: string): boolean;
    includesFrom<T>(
      value: T
    ): ((fromIndex: number) => (collection: Array<T>) => boolean) &
      ((fromIndex: number, collection: Array<T>) => boolean);
    includesFrom<T>(
      value: T,
      fromIndex: number
    ): (collection: Array<T>) => boolean;
    includesFrom<T>(value: T, fromIndex: number, collection: Array<T>): boolean;
    invokeMap<T>(
      path: ((value: T) => Array<string> | string) | Array<string> | string
    ): (collection: Array<T> | { [id: any]: T }) => Array<any>;
    invokeMap<T>(
      path: ((value: T) => Array<string> | string) | Array<string> | string,
      collection: Array<T> | { [id: any]: T }
    ): Array<any>;
    invokeArgsMap<T>(
      path: ((value: T) => Array<string> | string) | Array<string> | string
    ): ((
      collection: Array<T> | { [id: any]: T }
    ) => (args: Array<any>) => Array<any>) &
      ((
        collection: Array<T> | { [id: any]: T },
        args: Array<any>
      ) => Array<any>);
    invokeArgsMap<T>(
      path: ((value: T) => Array<string> | string) | Array<string> | string,
      collection: Array<T> | { [id: any]: T }
    ): (args: Array<any>) => Array<any>;
    invokeArgsMap<T>(
      path: ((value: T) => Array<string> | string) | Array<string> | string,
      collection: Array<T> | { [id: any]: T },
      args: Array<any>
    ): Array<any>;
    keyBy<T, V>(
      iteratee: ValueOnlyIteratee<T>
    ): (collection: $ReadOnlyArray<T> | { [id: any]: T }) => { [key: V]: T };
    keyBy<T, V>(
      iteratee: ValueOnlyIteratee<T>,
      collection: $ReadOnlyArray<T> | { [id: any]: T }
    ): { [key: V]: T };
    indexBy<T, V>(
      iteratee: ValueOnlyIteratee<T>
    ): (collection: $ReadOnlyArray<T> | { [id: any]: T }) => { [key: V]: T };
    indexBy<T, V>(
      iteratee: ValueOnlyIteratee<T>,
      collection: $ReadOnlyArray<T> | { [id: any]: T }
    ): { [key: V]: T };
    map<T, U>(
      iteratee: MapIterator<T, U> | OMapIterator<T, U>
    ): (collection: Array<T> | { [id: any]: T }) => Array<U>;
    map<T, U>(
      iteratee: MapIterator<T, U> | OMapIterator<T, U>,
      collection: Array<T> | { [id: any]: T }
    ): Array<U>;
    map(iteratee: (char: string) => any): (str: string) => string;
    map(iteratee: (char: string) => any, str: string): string;
    pluck<T, U>(
      iteratee: MapIterator<T, U> | OMapIterator<T, U>
    ): (collection: Array<T> | { [id: any]: T }) => Array<U>;
    pluck<T, U>(
      iteratee: MapIterator<T, U> | OMapIterator<T, U>,
      collection: Array<T> | { [id: any]: T }
    ): Array<U>;
    pluck(iteratee: (char: string) => any): (str: string) => string;
    pluck(iteratee: (char: string) => any, str: string): string;
    orderBy<T>(
      iteratees: $ReadOnlyArray<Iteratee<T> | OIteratee<*>> | string
    ): ((
      orders: $ReadOnlyArray<"asc" | "desc"> | string
    ) => (collection: $ReadOnlyArray<T> | { [id: any]: T }) => Array<T>) &
      ((
        orders: $ReadOnlyArray<"asc" | "desc"> | string,
        collection: $ReadOnlyArray<T> | { [id: any]: T }
      ) => Array<T>);
    orderBy<T>(
      iteratees: $ReadOnlyArray<Iteratee<T> | OIteratee<*>> | string,
      orders: $ReadOnlyArray<"asc" | "desc"> | string
    ): (collection: $ReadOnlyArray<T> | { [id: any]: T }) => Array<T>;
    orderBy<T>(
      iteratees: $ReadOnlyArray<Iteratee<T> | OIteratee<*>> | string,
      orders: $ReadOnlyArray<"asc" | "desc"> | string,
      collection: $ReadOnlyArray<T> | { [id: any]: T }
    ): Array<T>;
    partition<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): (collection: Array<T> | { [id: any]: T }) => [Array<T>, Array<T>];
    partition<T>(
      predicate: Predicate<T> | OPredicate<T>,
      collection: Array<T> | { [id: any]: T }
    ): [Array<T>, Array<T>];
    reduce<T, U>(
      iteratee: (accumulator: U, value: T) => U
    ): ((accumulator: U) => (collection: Array<T> | { [id: any]: T }) => U) &
      ((accumulator: U, collection: Array<T> | { [id: any]: T }) => U);
    reduce<T, U>(
      iteratee: (accumulator: U, value: T) => U,
      accumulator: U
    ): (collection: Array<T> | { [id: any]: T }) => U;
    reduce<T, U>(
      iteratee: (accumulator: U, value: T) => U,
      accumulator: U,
      collection: Array<T> | { [id: any]: T }
    ): U;
    reduceRight<T, U>(
      iteratee: (value: T, accumulator: U) => U
    ): ((accumulator: U) => (collection: Array<T> | { [id: any]: T }) => U) &
      ((accumulator: U, collection: Array<T> | { [id: any]: T }) => U);
    reduceRight<T, U>(
      iteratee: (value: T, accumulator: U) => U,
      accumulator: U
    ): (collection: Array<T> | { [id: any]: T }) => U;
    reduceRight<T, U>(
      iteratee: (value: T, accumulator: U) => U,
      accumulator: U,
      collection: Array<T> | { [id: any]: T }
    ): U;
    reject<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
    reject<T>(
      predicate: Predicate<T> | OPredicate<T>,
      collection: Array<T> | { [id: any]: T }
    ): Array<T>;
    sample<T>(collection: Array<T> | { [id: any]: T }): T;
    sampleSize<T>(
      n: number
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
    sampleSize<T>(n: number, collection: Array<T> | { [id: any]: T }): Array<T>;
    shuffle<T>(collection: Array<T> | { [id: any]: T }): Array<T>;
    size(collection: Array<any> | Object | string): number;
    some<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): (collection: Array<T> | { [id: any]: T }) => boolean;
    some<T>(
      predicate: Predicate<T> | OPredicate<T>,
      collection: Array<T> | { [id: any]: T }
    ): boolean;
    any<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): (collection: Array<T> | { [id: any]: T }) => boolean;
    any<T>(
      predicate: Predicate<T> | OPredicate<T>,
      collection: Array<T> | { [id: any]: T }
    ): boolean;
    sortBy<T>(
      iteratees: | $ReadOnlyArray<Iteratee<T> | OIteratee<T>>
      | Iteratee<T>
      | OIteratee<T>
    ): (collection: $ReadOnlyArray<T> | { [id: any]: T }) => Array<T>;
    sortBy<T>(
      iteratees: | $ReadOnlyArray<Iteratee<T> | OIteratee<T>>
      | Iteratee<T>
      | OIteratee<T>,
      collection: $ReadOnlyArray<T> | { [id: any]: T },
    ): Array<T>;

    // Date
    now(): number;

    // Function
    after(fn: Function): (n: number) => Function;
    after(fn: Function, n: number): Function;
    ary(func: Function): Function;
    nAry(n: number): (func: Function) => Function;
    nAry(n: number, func: Function): Function;
    before(fn: Function): (n: number) => Function;
    before(fn: Function, n: number): Function;
    bind(func: Function): (thisArg: any) => Function;
    bind(func: Function, thisArg: any): Function;
    bindKey(obj: Object): (key: string) => Function;
    bindKey(obj: Object, key: string): Function;
    curry: Curry;
    curryN(arity: number): (func: Function) => Function;
    curryN(arity: number, func: Function): Function;
    curryRight(func: Function): Function;
    curryRightN(arity: number): (func: Function) => Function;
    curryRightN(arity: number, func: Function): Function;
    debounce(wait: number): <F: Function>(func: F) => F;
    debounce<F: Function>(wait: number, func: F): F;
    defer(func: Function): TimeoutID;
    delay(wait: number): (func: Function) => TimeoutID;
    delay(wait: number, func: Function): TimeoutID;
    flip(func: Function): Function;
    memoize<F: Function>(func: F): F;
    negate(predicate: Function): Function;
    complement(predicate: Function): Function;
    once(func: Function): Function;
    overArgs(func: Function): (transforms: Array<Function>) => Function;
    overArgs(func: Function, transforms: Array<Function>): Function;
    useWith(func: Function): (transforms: Array<Function>) => Function;
    useWith(func: Function, transforms: Array<Function>): Function;
    partial(func: Function): (partials: any[]) => Function;
    partial(func: Function, partials: any[]): Function;
    partialRight(func: Function): (partials: Array<any>) => Function;
    partialRight(func: Function, partials: Array<any>): Function;
    rearg(indexes: Array<number>): (func: Function) => Function;
    rearg(indexes: Array<number>, func: Function): Function;
    rest(func: Function): Function;
    unapply(func: Function): Function;
    restFrom(start: number): (func: Function) => Function;
    restFrom(start: number, func: Function): Function;
    spread(func: Function): Function;
    apply(func: Function): Function;
    spreadFrom(start: number): (func: Function) => Function;
    spreadFrom(start: number, func: Function): Function;
    throttle(wait: number): (func: Function) => Function;
    throttle(wait: number, func: Function): Function;
    unary(func: Function): Function;
    wrap(wrapper: Function): (value: any) => Function;
    wrap(wrapper: Function, value: any): Function;

    // Lang
    castArray(value: *): any[];
    clone<T>(value: T): T;
    cloneDeep<T>(value: T): T;
    cloneDeepWith<T, U>(
      customizer: (value: T, key: number | string, object: T, stack: any) => U
    ): (value: T) => U;
    cloneDeepWith<T, U>(
      customizer: (value: T, key: number | string, object: T, stack: any) => U,
      value: T
    ): U;
    cloneWith<T, U>(
      customizer: (value: T, key: number | string, object: T, stack: any) => U
    ): (value: T) => U;
    cloneWith<T, U>(
      customizer: (value: T, key: number | string, object: T, stack: any) => U,
      value: T
    ): U;
    conformsTo<T: { [key: string]: mixed }>(
      predicates: T & { [key: string]: (x: any) => boolean }
    ): (source: T) => boolean;
    conformsTo<T: { [key: string]: mixed }>(
      predicates: T & { [key: string]: (x: any) => boolean },
      source: T
    ): boolean;
    where<T: { [key: string]: mixed }>(
      predicates: T & { [key: string]: (x: any) => boolean }
    ): (source: T) => boolean;
    where<T: { [key: string]: mixed }>(
      predicates: T & { [key: string]: (x: any) => boolean },
      source: T
    ): boolean;
    conforms<T: { [key: string]: mixed }>(
      predicates: T & { [key: string]: (x: any) => boolean }
    ): (source: T) => boolean;
    conforms<T: { [key: string]: mixed }>(
      predicates: T & { [key: string]: (x: any) => boolean },
      source: T
    ): boolean;
    eq(value: any): (other: any) => boolean;
    eq(value: any, other: any): boolean;
    identical(value: any): (other: any) => boolean;
    identical(value: any, other: any): boolean;
    gt(value: any): (other: any) => boolean;
    gt(value: any, other: any): boolean;
    gte(value: any): (other: any) => boolean;
    gte(value: any, other: any): boolean;
    isArguments(value: any): boolean;
    isArray(value: any): boolean;
    isArrayBuffer(value: any): boolean;
    isArrayLike(value: any): boolean;
    isArrayLikeObject(value: any): boolean;
    isBoolean(value: any): boolean;
    isBuffer(value: any): boolean;
    isDate(value: any): boolean;
    isElement(value: any): boolean;
    isEmpty(value: any): boolean;
    isEqual(value: any): (other: any) => boolean;
    isEqual(value: any, other: any): boolean;
    equals(value: any): (other: any) => boolean;
    equals(value: any, other: any): boolean;
    isEqualWith<T, U>(
      customizer: (
        objValue: any,
        otherValue: any,
        key: number | string,
        object: T,
        other: U,
        stack: any
      ) => boolean | void
    ): ((value: T) => (other: U) => boolean) &
      ((value: T, other: U) => boolean);
    isEqualWith<T, U>(
      customizer: (
        objValue: any,
        otherValue: any,
        key: number | string,
        object: T,
        other: U,
        stack: any
      ) => boolean | void,
      value: T
    ): (other: U) => boolean;
    isEqualWith<T, U>(
      customizer: (
        objValue: any,
        otherValue: any,
        key: number | string,
        object: T,
        other: U,
        stack: any
      ) => boolean | void,
      value: T,
      other: U
    ): boolean;
    isError(value: any): boolean;
    isFinite(value: any): boolean;
    isFunction(value: Function): true;
    isFunction(value: number | string | void | null | Object): false;
    isInteger(value: any): boolean;
    isLength(value: any): boolean;
    isMap(value: any): boolean;
    isMatch(source: Object): (object: Object) => boolean;
    isMatch(source: Object, object: Object): boolean;
    whereEq(source: Object): (object: Object) => boolean;
    whereEq(source: Object, object: Object): boolean;
    isMatchWith<T: Object, U: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: number | string,
        object: T,
        source: U
      ) => boolean | void
    ): ((source: U) => (object: T) => boolean) &
      ((source: U, object: T) => boolean);
    isMatchWith<T: Object, U: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: number | string,
        object: T,
        source: U
      ) => boolean | void,
      source: U
    ): (object: T) => boolean;
    isMatchWith<T: Object, U: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: number | string,
        object: T,
        source: U
      ) => boolean | void,
      source: U,
      object: T
    ): boolean;
    isNaN(value: any): boolean;
    isNative(value: any): boolean;
    isNil(value: any): boolean;
    isNull(value: any): boolean;
    isNumber(value: any): boolean;
    isObject(value: any): boolean;
    isObjectLike(value: any): boolean;
    isPlainObject(value: any): boolean;
    isRegExp(value: any): boolean;
    isSafeInteger(value: any): boolean;
    isSet(value: any): boolean;
    isString(value: string): true;
    isString(
      value: number | boolean | Function | void | null | Object | Array<any>
    ): false;
    isSymbol(value: any): boolean;
    isTypedArray(value: any): boolean;
    isUndefined(value: any): boolean;
    isWeakMap(value: any): boolean;
    isWeakSet(value: any): boolean;
    lt(value: any): (other: any) => boolean;
    lt(value: any, other: any): boolean;
    lte(value: any): (other: any) => boolean;
    lte(value: any, other: any): boolean;
    toArray(value: any): Array<any>;
    toFinite(value: any): number;
    toInteger(value: any): number;
    toLength(value: any): number;
    toNumber(value: any): number;
    toPlainObject(value: any): Object;
    toSafeInteger(value: any): number;
    toString(value: any): string;

    // Math
    add(augend: number): (addend: number) => number;
    add(augend: number, addend: number): number;
    ceil(number: number): number;
    divide(dividend: number): (divisor: number) => number;
    divide(dividend: number, divisor: number): number;
    floor(number: number): number;
    max<T>(array: Array<T>): T;
    maxBy<T>(iteratee: Iteratee<T>): (array: Array<T>) => T;
    maxBy<T>(iteratee: Iteratee<T>, array: Array<T>): T;
    mean(array: Array<*>): number;
    meanBy<T>(iteratee: Iteratee<T>): (array: Array<T>) => number;
    meanBy<T>(iteratee: Iteratee<T>, array: Array<T>): number;
    min<T>(array: Array<T>): T;
    minBy<T>(iteratee: Iteratee<T>): (array: Array<T>) => T;
    minBy<T>(iteratee: Iteratee<T>, array: Array<T>): T;
    multiply(multiplier: number): (multiplicand: number) => number;
    multiply(multiplier: number, multiplicand: number): number;
    round(number: number): number;
    subtract(minuend: number): (subtrahend: number) => number;
    subtract(minuend: number, subtrahend: number): number;
    sum(array: Array<*>): number;
    sumBy<T>(iteratee: Iteratee<T>): (array: Array<T>) => number;
    sumBy<T>(iteratee: Iteratee<T>, array: Array<T>): number;

    // number
    clamp(
      lower: number
    ): ((upper: number) => (number: number) => number) &
      ((upper: number, number: number) => number);
    clamp(lower: number, upper: number): (number: number) => number;
    clamp(lower: number, upper: number, number: number): number;
    inRange(
      start: number
    ): ((end: number) => (number: number) => boolean) &
      ((end: number, number: number) => boolean);
    inRange(start: number, end: number): (number: number) => boolean;
    inRange(start: number, end: number, number: number): boolean;
    random(lower: number): (upper: number) => number;
    random(lower: number, upper: number): number;

    // Object
    assign(object: Object): (source: Object) => Object;
    assign(object: Object, source: Object): Object;
    assignAll(objects: Array<Object>): Object;
    assignInAll(objects: Array<Object>): Object;
    extendAll(objects: Array<Object>): Object;
    assignIn<A, B>(a: A): (b: B) => A & B;
    assignIn<A, B>(a: A, b: B): A & B;
    assignInWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void
    ): ((object: T) => (s1: A) => Object) & ((object: T, s1: A) => Object);
    assignInWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void,
      object: T
    ): (s1: A) => Object;
    assignInWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void,
      object: T,
      s1: A
    ): Object;
    assignWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void
    ): ((object: T) => (s1: A) => Object) & ((object: T, s1: A) => Object);
    assignWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void,
      object: T
    ): (s1: A) => Object;
    assignWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void,
      object: T,
      s1: A
    ): Object;
    assignInAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void
    ): (objects: Array<Object>) => Object;
    assignInAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void,
      objects: Array<Object>
    ): Object;
    extendAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void
    ): (objects: Array<Object>) => Object;
    extendAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void,
      objects: Array<Object>
    ): Object;
    assignAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void
    ): (objects: Array<Object>) => Object;
    assignAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void,
      objects: Array<Object>
    ): Object;
    at(paths: Array<string>): (object: Object) => Array<any>;
    at(paths: Array<string>, object: Object): Array<any>;
    props(paths: Array<string>): (object: Object) => Array<any>;
    props(paths: Array<string>, object: Object): Array<any>;
    paths(paths: Array<string>): (object: Object) => Array<any>;
    paths(paths: Array<string>, object: Object): Array<any>;
    create<T>(prototype: T): $Supertype<T>;
    defaults(source: Object): (object: Object) => Object;
    defaults(source: Object, object: Object): Object;
    defaultsAll(objects: Array<Object>): Object;
    defaultsDeep(source: Object): (object: Object) => Object;
    defaultsDeep(source: Object, object: Object): Object;
    defaultsDeepAll(objects: Array<Object>): Object;
    // alias for _.toPairs
    entries(object: Object): Array<[string, any]>;
    // alias for _.toPairsIn
    entriesIn(object: Object): Array<[string, any]>;
    // alias for _.assignIn
    extend<A, B>(a: A): (b: B) => A & B;
    extend<A, B>(a: A, b: B): A & B;
    // alias for _.assignInWith
    extendWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void
    ): ((object: T) => (s1: A) => Object) & ((object: T, s1: A) => Object);
    extendWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void,
      object: T
    ): (s1: A) => Object;
    extendWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void,
      object: T,
      s1: A
    ): Object;
    findKey<A, T: { [id: any]: A }>(
      predicate: OPredicate<A>
    ): (object: T) => string | void;
    findKey<A, T: { [id: any]: A }>(
      predicate: OPredicate<A>,
      object: T
    ): string | void;
    findLastKey<A, T: { [id: any]: A }>(
      predicate: OPredicate<A>
    ): (object: T) => string | void;
    findLastKey<A, T: { [id: any]: A }>(
      predicate: OPredicate<A>,
      object: T
    ): string | void;
    forIn(iteratee: OIteratee<*>): (object: Object) => Object;
    forIn(iteratee: OIteratee<*>, object: Object): Object;
    forInRight(iteratee: OIteratee<*>): (object: Object) => Object;
    forInRight(iteratee: OIteratee<*>, object: Object): Object;
    forOwn(iteratee: OIteratee<*>): (object: Object) => Object;
    forOwn(iteratee: OIteratee<*>, object: Object): Object;
    forOwnRight(iteratee: OIteratee<*>): (object: Object) => Object;
    forOwnRight(iteratee: OIteratee<*>, object: Object): Object;
    functions(object: Object): Array<string>;
    functionsIn(object: Object): Array<string>;
    get(path: Array<string> | string): (object: Object | Array<any>) => any;
    get(path: Array<string> | string, object: Object | Array<any>): any;
    prop(path: Array<string> | string): (object: Object | Array<any>) => any;
    prop(path: Array<string> | string, object: Object | Array<any>): any;
    path(path: Array<string> | string): (object: Object | Array<any>) => any;
    path(path: Array<string> | string, object: Object | Array<any>): any;
    getOr(
      defaultValue: any
    ): ((
      path: Array<string> | string
    ) => (object: Object | Array<any>) => any) &
      ((path: Array<string> | string, object: Object | Array<any>) => any);
    getOr(
      defaultValue: any,
      path: Array<string> | string
    ): (object: Object | Array<any>) => any;
    getOr(
      defaultValue: any,
      path: Array<string> | string,
      object: Object | Array<any>
    ): any;
    propOr(
      defaultValue: any
    ): ((
      path: Array<string> | string
    ) => (object: Object | Array<any>) => any) &
      ((path: Array<string> | string, object: Object | Array<any>) => any);
    propOr(
      defaultValue: any,
      path: Array<string> | string
    ): (object: Object | Array<any>) => any;
    propOr(
      defaultValue: any,
      path: Array<string> | string,
      object: Object | Array<any>
    ): any;
    pathOr(
      defaultValue: any
    ): ((
      path: Array<string> | string
    ) => (object: Object | Array<any>) => any) &
      ((path: Array<string> | string, object: Object | Array<any>) => any);
    pathOr(
      defaultValue: any,
      path: Array<string> | string
    ): (object: Object | Array<any>) => any;
    pathOr(
      defaultValue: any,
      path: Array<string> | string,
      object: Object | Array<any>
    ): any;
    has(path: Array<string> | string): (object: Object) => boolean;
    has(path: Array<string> | string, object: Object): boolean;
    hasIn(path: Array<string> | string): (object: Object) => boolean;
    hasIn(path: Array<string> | string, object: Object): boolean;
    invert(object: Object): Object;
    invertObj(object: Object): Object;
    invertBy(iteratee: Function): (object: Object) => Object;
    invertBy(iteratee: Function, object: Object): Object;
    invoke(path: Array<string> | string): (object: Object) => any;
    invoke(path: Array<string> | string, object: Object): any;
    invokeArgs(
      path: Array<string> | string
    ): ((object: Object) => (args: Array<any>) => any) &
      ((object: Object, args: Array<any>) => any);
    invokeArgs(
      path: Array<string> | string,
      object: Object
    ): (args: Array<any>) => any;
    invokeArgs(
      path: Array<string> | string,
      object: Object,
      args: Array<any>
    ): any;
    keys<K>(object: { [key: K]: any }): Array<K>;
    keys(object: Object): Array<string>;
    keysIn(object: Object): Array<string>;
    mapKeys(iteratee: OIteratee<*>): (object: Object) => Object;
    mapKeys(iteratee: OIteratee<*>, object: Object): Object;
    mapValues(iteratee: OIteratee<*>): (object: Object) => Object;
    mapValues(iteratee: OIteratee<*>, object: Object): Object;
    merge(object: Object): (source: Object) => Object;
    merge(object: Object, source: Object): Object;
    mergeAll(objects: Array<Object>): Object;
    mergeWith<T: Object, A: Object, B: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B
      ) => any | void
    ): ((object: T) => (s1: A) => Object) & ((object: T, s1: A) => Object);
    mergeWith<T: Object, A: Object, B: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B
      ) => any | void,
      object: T
    ): (s1: A) => Object;
    mergeWith<T: Object, A: Object, B: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B
      ) => any | void,
      object: T,
      s1: A
    ): Object;
    mergeAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void
    ): (objects: Array<Object>) => Object;
    mergeAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void,
      objects: Array<Object>
    ): Object;
    omit(props: Array<string>): (object: Object) => Object;
    omit(props: Array<string>, object: Object): Object;
    omitAll(props: Array<string>): (object: Object) => Object;
    omitAll(props: Array<string>, object: Object): Object;
    omitBy<A, T: { [id: any]: A }>(
      predicate: OPredicate<A>
    ): (object: T) => Object;
    omitBy<A, T: { [id: any]: A }>(predicate: OPredicate<A>, object: T): Object;
    pick(props: Array<string>): (object: Object) => Object;
    pick(props: Array<string>, object: Object): Object;
    pickAll(props: Array<string>): (object: Object) => Object;
    pickAll(props: Array<string>, object: Object): Object;
    pickBy<A, T: { [id: any]: A }>(
      predicate: OPredicate<A>
    ): (object: T) => Object;
    pickBy<A, T: { [id: any]: A }>(predicate: OPredicate<A>, object: T): Object;
    result(path: Array<string> | string): (object: Object) => any;
    result(path: Array<string> | string, object: Object): any;
    set(
      path: Array<string> | string
    ): ((value: any) => (object: Object) => Object) &
      ((value: any, object: Object) => Object);
    set(path: Array<string> | string, value: any): (object: Object) => Object;
    set(path: Array<string> | string, value: any, object: Object): Object;
    assoc(
      path: Array<string> | string
    ): ((value: any) => (object: Object) => Object) &
      ((value: any, object: Object) => Object);
    assoc(path: Array<string> | string, value: any): (object: Object) => Object;
    assoc(path: Array<string> | string, value: any, object: Object): Object;
    assocPath(
      path: Array<string> | string
    ): ((value: any) => (object: Object) => Object) &
      ((value: any, object: Object) => Object);
    assocPath(
      path: Array<string> | string,
      value: any
    ): (object: Object) => Object;
    assocPath(path: Array<string> | string, value: any, object: Object): Object;
    setWith<T>(
      customizer: (nsValue: any, key: string, nsObject: T) => any
    ): ((
      path: Array<string> | string
    ) => ((value: any) => (object: T) => Object) &
      ((value: any, object: T) => Object)) &
      ((path: Array<string> | string, value: any) => (object: T) => Object) &
      ((path: Array<string> | string, value: any, object: T) => Object);
    setWith<T>(
      customizer: (nsValue: any, key: string, nsObject: T) => any,
      path: Array<string> | string
    ): ((value: any) => (object: T) => Object) &
      ((value: any, object: T) => Object);
    setWith<T>(
      customizer: (nsValue: any, key: string, nsObject: T) => any,
      path: Array<string> | string,
      value: any
    ): (object: T) => Object;
    setWith<T>(
      customizer: (nsValue: any, key: string, nsObject: T) => any,
      path: Array<string> | string,
      value: any,
      object: T
    ): Object;
    toPairs(object: Object | Array<*>): Array<[string, any]>;
    toPairsIn(object: Object): Array<[string, any]>;
    transform(
      iteratee: OIteratee<*>
    ): ((
      accumulator: any
    ) => (collection: Object | $ReadOnlyArray<any>) => any) &
      ((accumulator: any, collection: Object | $ReadOnlyArray<any>) => any);
    transform(
      iteratee: OIteratee<*>,
      accumulator: any
    ): (collection: Object | $ReadOnlyArray<any>) => any;
    transform(
      iteratee: OIteratee<*>,
      accumulator: any,
      collection: Object | $ReadOnlyArray<any>
    ): any;
    unset(path: Array<string> | string): (object: Object) => Object;
    unset(path: Array<string> | string, object: Object): Object;
    dissoc(path: Array<string> | string): (object: Object) => Object;
    dissoc(path: Array<string> | string, object: Object): Object;
    dissocPath(path: Array<string> | string): (object: Object) => Object;
    dissocPath(path: Array<string> | string, object: Object): Object;
    update(
      path: string[] | string
    ): ((updater: Function) => (object: Object) => Object) &
      ((updater: Function, object: Object) => Object);
    update(
      path: string[] | string,
      updater: Function
    ): (object: Object) => Object;
    update(path: string[] | string, updater: Function, object: Object): Object;
    updateWith(
      customizer: Function
    ): ((
      path: string[] | string
    ) => ((updater: Function) => (object: Object) => Object) &
      ((updater: Function, object: Object) => Object)) &
      ((
        path: string[] | string,
        updater: Function
      ) => (object: Object) => Object) &
      ((path: string[] | string, updater: Function, object: Object) => Object);
    updateWith(
      customizer: Function,
      path: string[] | string
    ): ((updater: Function) => (object: Object) => Object) &
      ((updater: Function, object: Object) => Object);
    updateWith(
      customizer: Function,
      path: string[] | string,
      updater: Function
    ): (object: Object) => Object;
    updateWith(
      customizer: Function,
      path: string[] | string,
      updater: Function,
      object: Object
    ): Object;
    values(object: Object): Array<any>;
    valuesIn(object: Object): Array<any>;

    tap<T>(interceptor: (value: T) => any): (value: T) => T;
    tap<T>(interceptor: (value: T) => any, value: T): T;
    thru<T1, T2>(interceptor: (value: T1) => T2): (value: T1) => T2;
    thru<T1, T2>(interceptor: (value: T1) => T2, value: T1): T2;

    // String
    camelCase(string: string): string;
    capitalize(string: string): string;
    deburr(string: string): string;
    endsWith(target: string): (string: string) => boolean;
    endsWith(target: string, string: string): boolean;
    escape(string: string): string;
    escapeRegExp(string: string): string;
    kebabCase(string: string): string;
    lowerCase(string: string): string;
    lowerFirst(string: string): string;
    pad(length: number): (string: string) => string;
    pad(length: number, string: string): string;
    padChars(
      chars: string
    ): ((length: number) => (string: string) => string) &
      ((length: number, string: string) => string);
    padChars(chars: string, length: number): (string: string) => string;
    padChars(chars: string, length: number, string: string): string;
    padEnd(length: number): (string: string) => string;
    padEnd(length: number, string: string): string;
    padCharsEnd(
      chars: string
    ): ((length: number) => (string: string) => string) &
      ((length: number, string: string) => string);
    padCharsEnd(chars: string, length: number): (string: string) => string;
    padCharsEnd(chars: string, length: number, string: string): string;
    padStart(length: number): (string: string) => string;
    padStart(length: number, string: string): string;
    padCharsStart(
      chars: string
    ): ((length: number) => (string: string) => string) &
      ((length: number, string: string) => string);
    padCharsStart(chars: string, length: number): (string: string) => string;
    padCharsStart(chars: string, length: number, string: string): string;
    parseInt(radix: number): (string: string) => number;
    parseInt(radix: number, string: string): number;
    repeat(n: number): (string: string) => string;
    repeat(n: number, string: string): string;
    replace(
      pattern: RegExp | string
    ): ((
      replacement: ((string: string) => string) | string
    ) => (string: string) => string) &
      ((
        replacement: ((string: string) => string) | string,
        string: string
      ) => string);
    replace(
      pattern: RegExp | string,
      replacement: ((string: string) => string) | string
    ): (string: string) => string;
    replace(
      pattern: RegExp | string,
      replacement: ((string: string) => string) | string,
      string: string
    ): string;
    snakeCase(string: string): string;
    split(separator: RegExp | string): (string: string) => Array<string>;
    split(separator: RegExp | string, string: string): Array<string>;
    startCase(string: string): string;
    startsWith(target: string): (string: string) => boolean;
    startsWith(target: string, string: string): boolean;
    template(string: string): Function;
    toLower(string: string): string;
    toUpper(string: string): string;
    trim(string: string): string;
    trimChars(chars: string): (string: string) => string;
    trimChars(chars: string, string: string): string;
    trimEnd(string: string): string;
    trimCharsEnd(chars: string): (string: string) => string;
    trimCharsEnd(chars: string, string: string): string;
    trimStart(string: string): string;
    trimCharsStart(chars: string): (string: string) => string;
    trimCharsStart(chars: string, string: string): string;
    truncate(options: TruncateOptions): (string: string) => string;
    truncate(options: TruncateOptions, string: string): string;
    unescape(string: string): string;
    upperCase(string: string): string;
    upperFirst(string: string): string;
    words(string: string): Array<string>;

    // Util
    attempt(func: Function): any;
    bindAll(methodNames: Array<string>): (object: Object) => Object;
    bindAll(methodNames: Array<string>, object: Object): Object;
    cond(pairs: NestedArray<Function>): Function;
    constant<T>(value: T): () => T;
    always<T>(value: T): () => T;
    defaultTo<T1: string | boolean | Object, T2>(
      defaultValue: T2
    ): (value: T1) => T1;
    defaultTo<T1: string | boolean | Object, T2>(
      defaultValue: T2,
      value: T1
    ): T1;
    // NaN is a number instead of its own type, otherwise it would behave like null/void
    defaultTo<T1: number, T2>(defaultValue: T2): (value: T1) => T1 | T2;
    defaultTo<T1: number, T2>(defaultValue: T2, value: T1): T1 | T2;
    defaultTo<T1: void | null, T2>(defaultValue: T2): (value: T1) => T2;
    defaultTo<T1: void | null, T2>(defaultValue: T2, value: T1): T2;
    flow: ($ComposeReverse & (funcs: Array<Function>) => Function);
    pipe: ($ComposeReverse & (funcs: Array<Function>) => Function);
    flowRight: ($Compose & (funcs: Array<Function>) => Function);
    compose: ($Compose & (funcs: Array<Function>) => Function);
    compose(funcs: Array<Function>): Function;
    identity<T>(value: T): T;
    iteratee(func: any): Function;
    matches(source: Object): (object: Object) => boolean;
    matches(source: Object, object: Object): boolean;
    matchesProperty(path: Array<string> | string): (srcValue: any) => Function;
    matchesProperty(path: Array<string> | string, srcValue: any): Function;
    propEq(path: Array<string> | string): (srcValue: any) => Function;
    propEq(path: Array<string> | string, srcValue: any): Function;
    pathEq(path: Array<string> | string): (srcValue: any) => Function;
    pathEq(path: Array<string> | string, srcValue: any): Function;
    method(path: Array<string> | string): Function;
    methodOf(object: Object): Function;
    mixin<T: Function | Object>(
      object: T
    ): ((source: Object) => (options: { chain: boolean }) => T) &
      ((source: Object, options: { chain: boolean }) => T);
    mixin<T: Function | Object>(
      object: T,
      source: Object
    ): (options: { chain: boolean }) => T;
    mixin<T: Function | Object>(
      object: T,
      source: Object,
      options: { chain: boolean }
    ): T;
    noConflict(): Lodash;
    noop(...args: Array<mixed>): void;
    nthArg(n: number): Function;
    over(iteratees: Array<Function>): Function;
    juxt(iteratees: Array<Function>): Function;
    overEvery(predicates: Array<Function>): Function;
    allPass(predicates: Array<Function>): Function;
    overSome(predicates: Array<Function>): Function;
    anyPass(predicates: Array<Function>): Function;
    property(
      path: Array<string> | string
    ): (object: Object | Array<any>) => any;
    property(path: Array<string> | string, object: Object | Array<any>): any;
    propertyOf(object: Object): (path: Array<string> | string) => Function;
    propertyOf(object: Object, path: Array<string> | string): Function;
    range(start: number): (end: number) => Array<number>;
    range(start: number, end: number): Array<number>;
    rangeStep(
      step: number
    ): ((start: number) => (end: number) => Array<number>) &
      ((start: number, end: number) => Array<number>);
    rangeStep(step: number, start: number): (end: number) => Array<number>;
    rangeStep(step: number, start: number, end: number): Array<number>;
    rangeRight(start: number): (end: number) => Array<number>;
    rangeRight(start: number, end: number): Array<number>;
    rangeStepRight(
      step: number
    ): ((start: number) => (end: number) => Array<number>) &
      ((start: number, end: number) => Array<number>);
    rangeStepRight(step: number, start: number): (end: number) => Array<number>;
    rangeStepRight(step: number, start: number, end: number): Array<number>;
    runInContext(context: Object): Function;

    stubArray(): Array<*>;
    stubFalse(): false;
    F(): false;
    stubObject(): {};
    stubString(): "";
    stubTrue(): true;
    T(): true;
    times<T>(iteratee: (i: number) => T): (n: number) => Array<T>;
    times<T>(iteratee: (i: number) => T, n: number): Array<T>;
    toPath(value: any): Array<string>;
    uniqueId(prefix: string): string;

    __: any;
    placeholder: any;

    convert(options: {
      cap?: boolean,
      curry?: boolean,
      fixed?: boolean,
      immutable?: boolean,
      rearg?: boolean
    }): void;

    // Properties
    VERSION: string;
    templateSettings: TemplateSettings;
  }

  declare module.exports: Lodash;
}
