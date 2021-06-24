export const uploadToServer = ($vm, file, fileName) => {
  $vm.loaderFlag = true
  // const item = {
  //   name: file.name,
  //   uploadPercentage: 0
  // }
  // $vm.files.push(item)
  const fd = new FormData()
  fd.append('file', file)
  const xhr = new XMLHttpRequest()
  xhr.open('POST', $vm.config.imageUploader.url + '?name=' + fileName, true)
  // xhr.upload.addEventListener('progress', function (e) {
  //   item.uploadPercentage = Math.round((e.loaded * 100) / e.total)
  // }, false)
  xhr.send(fd)
  // 返回
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let result = JSON.parse(xhr.responseText.toString())
      if (result.code === 0) {
        $vm.insertImg(`${$vm.config.imageUploader.imagePrefix}/${fileName}`, fileName)
      } else {
        alert(result.msg)
      }
      $vm.loaderFlag = false
    } else {
      if ($vm.loaderFlag) {
        $vm.loaderFlag = false
        console.log(xhr.statusText)
      }
    }
  }
}

export const uploadToGithub = ($vm, file, fileName) => {
  $vm.loaderFlag = true
  const data = {
    message: fileName,
    content: file.substring(file.indexOf(',') + 1)
  }
  return window.fetch(`https://api.github.com/repos/${$vm.config.imageUploader.username}/${$vm.config.imageUploader.repo}/contents/${fileName}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'token ' + $vm.config.imageUploader.token
    },
    body: JSON.stringify(data) || null,
    mode: 'cors'
  }).then(async res => {
    if (res.status >= 200 && res.status < 400) {
      let result = {
        status: res.status,
        data: await res.json()
      }
      if (result.status === 201) {
        $vm.insertImg(`${$vm.config.imageUploader.imagePrefix}${$vm.config.imageUploader.username}/${$vm.config.imageUploader.repo}/${fileName}`, fileName)
      }
      $vm.loaderFlag = false
      return result
    } else {
      $vm.loaderFlag = false
      alert(res.statusText)
      return {
        status: res.status,
        data: null
      }
    }
  })
    .catch(e => e)
}

export const uploadImg = ({ url = "http://localhost", data, header, accept, onChange, onreadystatechange }, callBack) => {
  let input = document.createElement("input");
  input.type = "file";
  input.accept = accept ? accept : 'image/*';
  input.click();
  input.onchange = () => {
    let file = input.files[0];
    let form = new FormData();
    form.append("file", file); //第一个参数是后台读取的请求key值
    if (data && (JSON.stringify(data) !== '{}')) {
      form.append("data", JSON.stringify(data));
    }
    // form.append("other", "666666"); //实际业务的其他请求参数
    let xhr = new XMLHttpRequest();
    // let action = "http://localhost:8080/upload.do"; //上传服务的接口地址
    // 设置请求头
    // xhr.setRequestHeader('Content-Type', 'application/json');

    if (header && (JSON.stringify(header) !== '{}')) {
      for (const key in header) {
        xhr.setRequestHeader(key, header[key]);
      }
    }

    xhr.open("POST", url);
    xhr.send(form); //发送表单数据

    xhr.onreadystatechange = (e) => {
      if (onreadystatechange) {
        onreadystatechange(xhr, e)
      }

      let resultObj = xhr.responseText ? JSON.parse(xhr.responseText) : "上传失败！";
      if (xhr.readyState == 4) {
        if (onChange) {
          onChange({ code: xhr.status, result: resultObj })
        }
        callBack({ code: xhr.status, result: resultObj })
      }

      input.remove()
    }

    return input
  }
}