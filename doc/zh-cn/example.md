## 入门指南

### 安装

NutsDB的安装很简单，首先保证 [Golang](https://golang.org/dl/) 已经安装好 (版本要求1.11以上). 然后在终端执行命令:

```
go get -u github.com/xujiajun/nutsdb
```

### 开启数据库

要打开数据库需要使用` nutsdb.Open()`这个方法。其中用到的选项(options)包括 `Dir` , `EntryIdxMode`和 `SegmentSize`，在调用的时候这些参数必须设置。官方提供了`DefaultOptions`的选项，直接使用`nutsdb.DefaultOptions`即可。当然你也可以根据需要自己定义。

例子： 

```golang
package main

import (
	"log"

	"github.com/xujiajun/nutsdb"
)

func main() {
	opt := nutsdb.DefaultOptions
	opt.Dir = "/tmp/nutsdb" //这边数据库会自动创建这个目录文件
	db, err := nutsdb.Open(opt)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	...
}
```