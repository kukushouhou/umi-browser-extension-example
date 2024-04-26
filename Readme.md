# umi-browser-extension-example

## Introduction

This is a template for developing browser extensions based on Umijs with the [umi-plugin-browser-extension](https://github.com/kukushouhou/umi-plugin-browser-extension) plugin.

这是一个基于 Umijs 配合 [umi-plugin-browser-extension](https://github.com/kukushouhou/umi-plugin-browser-extension) 插件开发浏览器扩展的模板。

## Getting Started

### Installation

Clone this repository to your local machine:

```
git clone https://github.com/kukushouhou/umi-browser-extension-example.git
```

安装依赖：

```bash
cd umi-browser-extension-example
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

This will launch the extension in development mode.

## Usage

### Load Extension

1. Open the Extension Management page by navigating to `chrome://extensions`.
2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
3. Click the `Load unpacked` button and select the `dist` directory of this project.

### Test Extension

After loading the extension, you can test it by opening a new tab and checking the extension's functionality.

## Build

To build the extension for production, run:

```bash
npm run build
```

This will generate a `dist` directory containing the production-ready extension files.

## Contribution

Contributions are welcome! Feel free to open issues and pull requests.

## License

MIT
