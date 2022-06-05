# Components

## Maybe

It will take any value in the `val` property and only if calling it with `Boolean()` evaluates to `true` its children are rendered.

```
/* these will render "Hey" */
<Maybe val={true}>Hey</Maybe>
<Maybe val={[]}>Hey</Maybe>
<Maybe val={{}}>Hey</Maybe>
<Maybe val={1}>Hey</Maybe>
<Maybe val="hello">Hey</Maybe>

/* these will return `null` */
<Maybe val={undefined}>Hey</Maybe>
<Maybe val={null}>Hey</Maybe>
<Maybe val={false}>Hey</Maybe>
<Maybe val={0}>Hey</Maybe>
<Maybe val="">Hey</Maybe>
```

## Either

It will take any value in the `val` property and if calling it with `Boolean()` evaluates to `true` its first child is rendered, if it evaluates to `false` its second child is rendered.

```
/* these will render "Hey" */
<Either val={true}><>Hey</><>There</></Either>
<Either val={[]}><>Hey</><>There</></Either>
<Either val={{}}><>Hey</><>There</></Either>
<Either val={1}><>Hey</><>There</></Either>
<Either val="hello"><>Hey</><>There</></Either>

/* these will render "There" */
<Either val={undefined}><>Hey</><>There</></Either>
<Either val={null}><>Hey</><>There</></Either>
<Either val={false}><>Hey</><>There</></Either>
<Either val={0}><>Hey</><>There</></Either>
<Either val=""><>Hey</><>There</></Either>
```
