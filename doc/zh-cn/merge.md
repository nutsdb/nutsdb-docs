### 合并操作

随着数据越来越多，特别是一些删除或者过期的数据占据着磁盘，清理这些NutsDB提供了`db.Merge()`方法，这个方法需要自己根据实际情况编写合并策略。
一旦执行会影响到正常的写请求，所以最好避开高峰期，比如半夜定时执行等。

```golang
err := db.Merge()
if err != nil {
    ...
}
```

注意：当前版本不支持`HintBPTSparseIdxMode`模式的合并操作