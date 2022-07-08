<style >
@import "./index.css";
</style>
<template>
  <div class="mk-editor-toolbar">
    <div class="tools-inner">
      <ul class="mk-editor-tools">
        <li v-if="toolbar.undo">
          <a
            href="javascript:;"
            title="撤销（Ctrl+Z）"
            @click.stop="toolbarClick('undo')"
          >
            <i class="fa fa-undo" name="undo"></i>
          </a>
        </li>
        <li v-if="toolbar.redo">
          <a
            href="
               javascript:;"
            title="重做（Ctrl+Y）"
            @click.stop="toolbarClick('redo')"
          >
            <i class="fa fa-repeat" name="redo"></i>
          </a>
        </li>
        <li v-if="dividers[0]" class="divider"></li>
         <li v-if="toolbar.h1" class="le-head-tools">
          <a href="javascript:;" title="标题" @click.stop="isTitleShow = true">
            <i class="fa fa-text-width" name="h1"></i>
            <i class="fa fa-caret-down"></i>
          </a>
          <ol v-if="isTitleShow">
            <li v-if="toolbar.h1">
              <a
                href="javascript:;"
                title="标题1（Ctrl+1）"
                @click.stop="toolbarClick('h1')"
              >
                标题 1
              </a>
            </li>
            <li v-if="toolbar.h2">
              <a
                href="javascript:;"
                title="标题2（Ctrl+2）"
                @click.stop="toolbarClick('h2')"
              >
                标题 2
              </a>
            </li>
            <li v-if="toolbar.h3">
              <a
                href="javascript:;"
                title="标题3（Ctrl+3）"
                @click.stop="toolbarClick('h3')"
              >
                标题 3
              </a>
            </li>
            <li v-if="toolbar.h4">
              <a
                href="javascript:;"
                title="标题4（Ctrl+4）"
                @click.stop="toolbarClick('h4')"
              >
                标题 4
              </a>
            </li>
            <li v-if="toolbar.h5">
              <a
                href="javascript:;"
                title="标题5（Ctrl+5）"
                @click.stop="toolbarClick('h5')"
              >
                标题 5
              </a>
            </li>
            <li v-if="toolbar.h6">
              <a
                href="javascript:;"
                title="标题6（Ctrl+6）"
                @click.stop="toolbarClick('h6')"
              >
                标题 6
              </a>
            </li>
          </ol>
        </li>
        <li v-if="toolbar.bold">
          <a
            href="javascript:;"
            title="粗体(Ctrl+B)"
            @click.stop="toolbarClick('bold')"
          >
            <i class="fa fa-bold" name="bold"></i>
          </a>
        </li>
        <li v-if="toolbar.del">
          <a
            href="javascript:;"
            title="删除线（Ctrl+D）"
            @click.stop="toolbarClick('del')"
          >
            <i class="fa fa-strikethrough" name="del"></i>
          </a>
        </li>
        <li v-if="toolbar.underline">
          <a
            href="javascript:;"
            title="下划线（Ctrl+U）"
            @click.stop="toolbarClick('underline')"
          >
            <i class="fa fa-underline" name="underline"></i>
          </a>
        </li>
        <li class="divider"></li>
        <li v-if="toolbar.italic">
          <a
            href="javascript:;"
            title="斜体（Ctrl+I）"
            @click.stop="toolbarClick('italic')"
          >
            <i class="fa fa-italic" name="italic"></i>
          </a>
        </li>
        <li v-if="toolbar.quote">
          <a
            href="javascript:;"
            title="引用（Ctrl+Q）"
            @click.stop="toolbarClick('quote')"
          >
            <i class="fa fa-quote-left" name="quote"></i>
          </a>
        </li>
        <li v-if="toolbar.bookmark">
          <a
            href="javascript:;"
            title="标记（Ctrl+M）"
            @click.stop="toolbarClick('bookmark')"
          >
            <i class="fa fa-bookmark" name="bookmark"></i>
          </a>
        </li>
        <li v-if="toolbar.superscript">
          <a
            href="javascript:;"
            title="上角标（Ctrl+Alt+S）"
            @click.stop="toolbarClick('superscript')"
          >
            <i class="fa fa-superscript" name="superscript"></i>
          </a>
        </li>
        <li v-if="toolbar.subscript">
          <a
            href="javascript:;"
            title="下角标（Ctrl+Alt+B）"
            @click.stop="toolbarClick('subscript')"
          >
            <i class="fa fa-subscript" name="subscript"></i>
          </a>
        </li>
        <!-- <li class="divider" v-if="dividers[0]"></li> -->

       
        <!-- <li v-if="toolbar.fontSize">
          <a
            href="javascript:;"
            title="字体大小"
            @click.stop="isFontSize = true"
          >
            <i class="fa fa-font" name="字体大小"></i>
            <i class="fa fa-caret-down"></i>
          </a>
          <ol v-if="isFontSize">
            <li
              v-for="(item, i) in fontSize"
              :key="'w' + i"
              :class="[{ active: item === editorFontSize }]"
              @click.stop="handleFontSize(item)"
            >
              <a href="javascript:;" :title="item"> {{ item }} px </a>
            </li>
          </ol>
        </li> -->
        <li class="divider le-align-tools" v-if="dividers[1]"></li>
        <li v-if="toolbar.alignLeft" class="le-align-tools">
          <a
            href="javascript:;"
            title="居左（Ctrl+Alt+L）"
            @click.stop="toolbarClick('alignLeft')"
          >
            <i class="fa fa-align-left" name="align-left"></i>
          </a>
        </li>
        <li v-if="toolbar.alignCenter" class="le-align-tools">
          <a
            href="javascript:;"
            title="居中（Ctrl+Alt+C）"
            @click.stop="toolbarClick('alignCenter')"
          >
            <i class="fa fa-align-center" name="align-center"></i>
          </a>
        </li>
        <li v-if="toolbar.alignRight" class="le-align-tools">
          <a
            href="javascript:;"
            title="居右（Ctrl+Alt+R）"
            @click.stop="toolbarClick('alignRight')"
          >
            <i class="fa fa-align-right" name="align-right"></i>
          </a>
        </li>
        <li v-if="toolbar.ol">
          <a
            href="javascript:;"
            title="有序列表（Ctrl+Alt+O）"
            @click.stop="toolbarClick('ol')"
          >
            <i class="fa fa-list-ol" name="list-ol"></i>
          </a>
        </li>
        <li v-if="toolbar.ul">
          <a
            href="javascript:;"
            title="无序列表（Ctrl+Alt+U）"
            @click.stop="toolbarClick('ul')"
          >
            <i class="fa fa-list-ul" name="list-ul"></i>
          </a>
        </li>
        <li v-if="toolbar.hr">
          <a
            href="javascript:;"
            title="分割线（Ctrl+Alt+H）"
            @click.stop="toolbarClick('hr')"
          >
            <i class="fa fa-minus" name="hr"></i>
          </a>
        </li>
        <li class="divider" v-if="dividers[2]"></li>
        <li v-if="toolbar.link">
          <a
            href="javascript:;"
            title="链接（Ctrl+L）"
            @click.stop="toolbarClick('link')"
          >
            <i class="fa fa-link" name="link"></i>
          </a>
        </li>
        <li v-if="toolbar.inlineCode">
          <a
            href="javascript:;"
            title="行内代码（Ctrl+Alt+I）"
            @click.stop="toolbarClick('inlineCode')"
          >
            <i class="fa fa-code" name="code"></i>
          </a>
        </li>
        <li v-if="toolbar.code">
          <a
            href="javascript:;"
            title="代码块（Ctrl+Alt+D）"
            @click.stop="toolbarClick('code')"
          >
            <i class="fa fa-file-code-o" name="preformatted-text"></i>
          </a>
        </li>
        <li v-if="toolbar.image">
          <a
            href="javascript:;"
            title="添加图片"
            @click.stop="isImgShow = true"
          >
            <i class="fa fa-picture-o" name="image"></i>
          </a>
          <ol v-if="isImgShow">
            <li>
              <a
                href="javascript:;"
                title="添加图片"
                @click.stop="
                  insertImgFlag = true;
                  handleCloseMarkBox();
                "
              >
                图片链接
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                title="添加图片"
                @click.stop="updateInsertImg"
              >
                上传图片
              </a>
            </li>
          </ol>
        </li>
        <li v-if="toolbar.table">
          <a href="javascript:;" title="添加表格">
            <i
              class="fa fa-table"
              name="table"
              @click.stop="insertTableFlag = true"
            ></i>
          </a>
        </li>
        <li v-if="toolbar.time">
          <a href="javascript:;" title="日期时间">
            <i class="fa fa-clock-o" name="datetime"></i>
          </a>
        </li>
        <li class="divider"></li>

       
        <li v-if="toolbar.upload">
          <a href="javascript:;" title="导入" @click.stop="importFile">
            <i class="fa fa-upload" name="clear"></i>
          </a>
        </li>
        <li v-if="toolbar.download">
          <a href="javascript:;" title="导出" @click.stop="downloadFile">
            <i class="fa fa-download" name="clear"></i>
          </a>
        </li>
        <li class="divider"></li>

        <li v-if="toolbar.clear">
          <a href="javascript:;" title="清空" @click.stop="clear">
            <i class="fa fa-trash-o" name="clear"></i>
          </a>
        </li>
        <li v-if="toolbar.save">
          <a href="javascript:;" title="保存" @click.stop="save">
            <i class="fa fa-save" name="save"></i>
          </a>
        </li>
      </ul>
      <ul class="mk-editor-tools">
        <!-- <li class="divider"  v-if="dividers[3]"></li> -->
         <li v-if="toolbar.skin" class="skin">
          <a href="javascript:;" title="皮肤" @click.stop="selectSkin">
            <i class="fa fa-magic" name="skin"></i>
            <i class="fa fa-caret-down"></i>
          </a>
          <ol v-if="isSkinFlag" class="theme-list">
            <li
              v-for="(item, index) in themes"
              :class="{ active: item === currentSkin }"
              v-bind:key="'d' + index"
              @click="selectTheme(item)"
            >
              <a href="javascript:;" :title="item"> {{ item }}</a>
            </li>
          </ol>
          <!-- <div class="dropdown-content" v-if="skinFlag"></div> -->
        </li>
        <!-- <li class="divider"></li> -->
        <li v-if="toolbar.preview">
          <a
            href="javascript:;"
            :title="
              previewFlag
                ? '关闭实时预览（Ctrl+Alt+P）'
                : '打开实时预览（Ctrl+Alt+P）'
            "
            @click.stop="preview"
          >
            <i
              :class="{
                'fa fa-eye-slash': previewFlag,
                'fa fa-eye': !previewFlag,
              }"
              name="preview"
            ></i>
          </a>
        </li>
        <li v-if="toolbar.toc && isToc">
          <a
            href="javascript:;"
            :title="isTocFlag ? '关闭目录' : '打开目录'"
            @click.stop="handleToc"
          >
            <i
              :class="{
                'fa fa-outdent': isTocFlag,
                'fa fa-indent': !isTocFlag,
              }"
              name="toc"
            ></i>
          </a>
        </li>
        <!-- <li v-if="toolbar.fullScreen">
          <a href="javascript:;" title="全窗口预览（Ctrl+Alt+F）">
            <i class="fa fa-desktop" name="fullScreen" @click.stop="fullScreen()"></i>
          </a>
        </li> -->
        <li v-if="toolbar.fullScreenEdit">
          <a
            href="javascript:;"
            :title="
              fullScreenEditFlag
                ? '打开全屏编辑（Ctrl+Alt+E)'
                : '关闭实时预览（Ctrl+Alt+E）'
            "
            @click.stop="fullScreenEdit()"
          >
            <i
              :class="{
                'fa fa-arrows-alt': fullScreenEditFlag,
                'fa fa-compress': !fullScreenEditFlag,
              }"
              name="fullScreenEdit"
            ></i>
          </a>
        </li>
      </ul>
    </div>
    <!-- 添加网络图片 -->
    <!-- <transition name="slide-fade"> -->
    <div
      class="modal"
      v-if="insertImgFlag"
      @touchmove.prevent.stop
      @mousewheel.prevent
    >
      <div class="dropbox image-box">
        <div class="dialog-header" style="cursor: move">
          <strong class="dialog-title">添加图片</strong>
        </div>
        <a
          href="javascript:;"
          class="fa fa-close dialog-close"
          @click="insertImgFlag = false"
        ></a>
        <div class="dialog-container">
          <div class="dialog-form">
            <label>图片描述</label>
            <input type="text" v-model="imageInfo.title" data-alt />
            <br />
            <br />
            <label>图片链接</label>
            <input type="text" v-model="imageInfo.url" data-link />
          </div>
          <div class="dialog-footer">
            <button class="dialog-btn" @click="insertImg(imageInfo)">
              确定
            </button>
            <button class="dialog-btn" @click="insertImgFlag = false">
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- </transition> -->
    <!-- 添加表格 -->
    <!-- <transition name="slide-fade"> -->
    <div
      class="modal"
      v-if="insertTableFlag"
      @touchmove.prevent.stop
      @mousewheel.prevent
    >
      <div class="dropbox table-box">
        <div class="dialog-header" style="cursor: move">
          <strong class="dialog-title">添加表格</strong>
        </div>
        <a
          href="javascript:;"
          class="fa fa-close dialog-close"
          @click="insertTableFlag = false"
        ></a>
        <div class="dialog-container">
          <div class="dialog-form">
            <div>
              <label>单元格数</label>
              <span>行数</span>
              <input
                type="number"
                v-model="tableInfo.rows"
                class="number-input"
                max="100"
                min="2"
                data-rows
              />&nbsp;&nbsp;
              <span>列数</span>
              <input
                type="number"
                v-model="tableInfo.cols"
                class="number-input"
                max="100"
                min="1"
                data-cols
              />
            </div>
            <div>
              <label>对齐方式</label>
              <div class="fa-btns">
                <a href="javascript:;">
                  <label title="默认">
                    <input
                      type="radio"
                      v-model="tableInfo.type"
                      name="table-align"
                      value="justify"
                      checked="checked"
                    />&nbsp;
                    <i class="fa fa-align-justify"></i>
                  </label>
                </a>
                <a href="javascript:;">
                  <label title="左对齐">
                    <input
                      type="radio"
                      v-model="tableInfo.type"
                      name="table-align"
                      value="left"
                    />&nbsp;
                    <i class="fa fa-align-left"></i>
                  </label>
                </a>
                <a href="javascript:;">
                  <label title="居中对齐">
                    <input
                      type="radio"
                      v-model="tableInfo.type"
                      name="table-align"
                      value="center"
                    />&nbsp;
                    <i class="fa fa-align-center"></i>
                  </label>
                </a>
                <a href="javascript:;">
                  <label title="右对齐">
                    <input
                      type="radio"
                      v-model="tableInfo.type"
                      name="table-align"
                      value="right"
                    />&nbsp;
                    <i class="fa fa-align-right"></i>
                  </label>
                </a>
              </div>
            </div>
          </div>
          <div class="dialog-footer">
            <button class="dialog-btn dialog-enter-btn" @click="insertTable()">
              确定
            </button>
            <button
              class="dialog-btn dialog-cancel-btn"
              @click="insertTableFlag = false"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mark-box"
      v-if="isTitleShow || isImgShow || isFontSize || isSkinFlag"
      @click.stop="handleCloseMarkBox"
    ></div>

    <!-- 导入文件 -->
    <input
      type="file"
      name="upload"
      ref="upload"
      accept=".md"
      style="display: none"
    />
    <!-- </transition> -->
  </div>
</template>
<script>
import { keydownListener } from "../../lib/core/keydown-listener";
import { uploadImg } from "../../lib/utils/upload";

export default {
  name: "mk-toolbar",
  props: ["toolbar", "themes", "imageUploader", "fontSize", "editorFontSize"],
  data() {
    return {
      modalStyle: {},
      isTitleShow: false,
      isImgShow: false,
      isFontSize: false,
      isSkinFlag: false,
      isTocFlag: false,
      isToc: false,

      insertImgFlag: false,
      insertTableFlag: false,

      // editorFontSize: this.editorFontSize,
      imageInfo: {
        title: "",
        url: "http://",
      },
      tableInfo: {
        rows: 3,
        cols: 2,
        type: "justify",
      },
      previewFlag: true,
      fullScreenEditFlag: true,
      currentSkin: "",
      dividers: [false, false, false, false],
    };
  },
  watch: {
    isTocFlag: {
      handler(val, oldVal) {
        this.tocActive(val);
      },
      immediate: true,
    },
    insertImgFlag: function (val) {
      if (val) {
        document.body.style.overflow = "hidden";
        document.addEventListener(
          "touchmove",
          (e) => {
            e.preventDefault();
            e.stopPropagation();
          },
          { passive: false }
        );
      } else {
        document.body.style.overflow = "";
        document.addEventListener(
          "touchmove",
          (e) => {
            e.preventDefault();
            e.stopPropagation();
          },
          { passive: true }
        );
      }
    },
    insertTableFlag: function (val) {
      if (val) {
        document.body.style.overflow = "hidden";
        document.addEventListener(
          "touchmove",
          (e) => {
            e.preventDefault();
            e.stopPropagation();
          },
          { passive: false }
        );
      } else {
        document.body.style.overflow = "";
        document.addEventListener(
          "touchmove",
          (e) => {
            e.preventDefault();
            e.stopPropagation();
          },
          { passive: true }
        );
      }
    },
  },
  methods: {
    handleCloseMarkBox() {
      this.isTitleShow = false;
      this.isImgShow = false;
      this.isFontSize = false;
      this.isSkinFlag = false;
    },
    // 皮肤选择
    selectSkin() {
      this.isSkinFlag = true;
      this.currentSkin = localStorage.getItem("theme");
    },
    // 工具栏点击事件
    toolbarClick(type) {
      this.handleCloseMarkBox();
      if (this.toolbar[`${type}`]) {
        this.$emit("operate", type);
      }
    },
    //插入图片
    insertImg(data) {
      if (this.toolbar.image) {
        this.$emit("insertImg", data.url, data.title);
        this.insertImgFlag = false;
      }
    },
    //插入上传图片
    updateInsertImg() {
      // console.log(this.imageUploader);
      this.handleCloseMarkBox();
      uploadImg(this.imageUploader, (res) => {
        // console.log(res);
        if (res.code === 200) {
          this.insertImg(res.result);
        }
      });
    },
    // 插入表格
    insertTable() {
      if (this.toolbar.table) {
        this.$emit("insertTable", this.tableInfo);
        this.insertTableFlag = false;
      }
    },
    //预览
    preview() {
      if (this.toolbar.preview) {
        this.previewFlag = !this.previewFlag;
        this.$emit("preview", this.previewFlag);
      }
    },
    //目录
    handleToc() {
      if (this.toolbar.toc) {
        this.isTocFlag = !this.isTocFlag;
        // this.$emit("tocFlag", this.isTocFlag);
      }
    },
    tocActive(val) {
      val = val ? val : this.isTocFlag;
      this.$nextTick(() => {
        let markdownBody = document.querySelector(".markdown-body");
        let tocBox = document.querySelector(".toc-box");
        if (markdownBody)
          markdownBody.style.paddingRight = val ? "290px" : "30px";
        if (tocBox) tocBox.style.display = val ? "block" : "none";
      });
    },

    //全屏预览
    fullScreen() {
      if (this.toolbar.fullScreen) {
        // 全屏
        this.$emit("fullScreen");
      }
    },
    // 全屏编辑
    fullScreenEdit() {
      if (this.toolbar.fullScreenEdit) {
        // 全屏编辑
        this.fullScreenEditFlag = !this.fullScreenEditFlag;
        this.$emit("fullScreenEdit");
      }
    },
    save() {
      if (this.toolbar.save) {
        // 保存
        this.$emit("save");
      }
    },
    clear() {
      if (this.toolbar.clear) {
        // 清除
        this.$emit("clear");
      }
    },
    // 导入
    importFile() {
      let input = this.$refs.upload;
      // console.log(input);
      input.click();
      input.onchange = () => {
        if (input.files && input.files.length > 0 && input.files[0].size > 0) {
          //支持chrome IE10
          if (window.FileReader) {
            let file = input.files[0];
            // let filename = file.name.split(".")[0];
            let reader = new FileReader();
            reader.onloadend = (evt) => {
              // if (evt.target.readyState == FileReader.DONE) {
              // console.log(evt.target.result);
              this.$emit("on-upload-file", evt.target.result);
              // } else {
              //   console.log("error");
              // }
            };
            // 包含中文内容用gbk编码
            reader.readAsText(file, "UTF-8");
          }
          //支持IE 7 8 9 10
          else if (typeof window.ActiveXObject != "undefined") {
            let xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = false;
            xmlDoc.load(input.value);
            // console.log(xmlDoc.xml);
            this.$emit("on-upload-file", xmlDoc.xml);
          }
          //支持FF
          else if (
            document.implementation &&
            document.implementation.createDocument
          ) {
            let xmlDoc = document.implementation.createDocument("", "", null);
            xmlDoc.async = false;
            xmlDoc.load(input.value);
            // console.log(xmlDoc.xml);
            this.$emit("on-upload-file", xmlDoc.xml);
          } else {
            this.$emit("on-upload-file", "该浏览器暂不支持导入文件！");
            console.log("error");
          }
        }
      };
    },
    // 导出文件
    downloadFile() {
      this.$emit("on-download-file");
    },
    // 选择主题
    selectTheme(theme) {
      this.handleCloseMarkBox();
      this.$emit("setTheme", theme);
    },
    // 选择设置编辑器字体大小
    handleFontSize(size) {
      // this.editorFontSize = size;
     
      document.querySelector(".CodeMirror-sizer").style.fontSize = size + "px";
      this.handleCloseMarkBox();
    },
    checkArea(toolNames, index) {
      toolNames.some((item) => {
        if (this.toolbar[`${item}`]) {
          this.dividers[index] = true;
          return true;
        }
      });
    },
  },
  created() {
    this.checkArea(["h1", "h2", "h3", "h4", "h5", "h6"], 0);
    this.checkArea(
      ["alignLeft", "alignCenter", "alignRight", "ol", "ul", "hr"],
      1
    );
    this.checkArea(["link", "inlineCode", "code", "image", "table"], 2);
    this.checkArea(
      ["fullScreen", "preview", "fullScreenEdit", "skin", "download"],
      3
    );
  },
  mounted() {
    keydownListener(this);
  },
};
</script>
