### 对keys的扫描操作

key在一个bucket里面按照byte-sorted有序排序的，所以对于keys的扫描操作，在NutsDB里是很高效的。
 

#### 前缀扫描

对于前缀的扫描，我们可以用`PrefixScan` 方法, 使用参数 `offSet`和`limitNum` 来限制返回的结果的数量，比方下面例子限制100个entries:

```golang

if err := db.View(
	func(tx *nutsdb.Tx) error {
		prefix := []byte("user_")
		bucket := "user_list"
		// 从offset=0开始 ，限制 100 entries 返回 
		if entries, err := tx.PrefixScan(bucket, prefix, 0, 100); err != nil {
			return err
		} else {
			for _, entry := range entries {
				fmt.Println(string(entry.Key), string(entry.Value))
			}
		}
		return nil
	}); err != nil {
		log.Fatal(err)
}

```
#### 前缀后的正则扫描

对于前缀后的扫描，可以通过正则表达式对键的第二部分进行搜索来遍历一个键前缀，我们可以使用`PrefixSearchScan`方法，用参数`reg`来编写正则表达式，使用参数`offsetNum`、`limitNum` 来约束返回的条目的数量:

```go

if err := db.View(
	func(tx *nutsdb.Tx) error {
		prefix := []byte("user_") // 定义前缀
		reg := "99"  // 定义正则表达式
		bucket := "user_list"
		// 从offset=25开始，限制 100 entries 返回 
		if entries, _, err := tx.PrefixSearchScan(bucket, prefix, reg, 25, 100); err != nil {
			return err
		} else {
			for _, entry := range entries {
				fmt.Println(string(entry.Key), string(entry.Value))
			}
		}
		return nil
	}); err != nil {
		log.Fatal(err)
}
```

#### 范围扫描

对于范围的扫描，我们可以用 `RangeScan` 方法。

例子：

```golang
if err := db.View(
	func(tx *nutsdb.Tx) error {
		// 假设用户key从 user_0000000 to user_9999999.
		// 执行区间扫描类似这样一个start和end作为主要参数.
		start := []byte("user_0010001")
		end := []byte("user_0010010")
		bucket := "user_list"
		if entries, err := tx.RangeScan(bucket, start, end); err != nil {
			return err
		} else {
			for _, entry := range entries {
				fmt.Println(string(entry.Key), string(entry.Value))
			}
		}
		return nil
	}); err != nil {
	log.Fatal(err)
}
```