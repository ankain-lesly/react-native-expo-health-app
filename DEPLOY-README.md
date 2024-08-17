# Build Process

## Step 1: Installing EAS CLI

```shell
npm install -g eas-cli
```

## Step 2: Expo account Login

```shell
eas login
```

Run command _eas whoami_ to check you are logged in or not.

## Step 3: Create a build

```shell
eas build --platform android
```

## Step 4: Open Expo account

Go to your expo account online and monitor the build process

## Step 5: Convert .aab file to .apk

- Download the Build Artifact
- Create a new folder on your desktop name as output.
- In this folder we have to put two things

1. bundletool.jar file
2. .aab file

- For bundle file click on this link https://github.com/google/bundletool/releases

- Download bundletool-all-1.15.6.jar.

## Step 6 : Open command prompt.

- Goto output folder.
- Paste below code

```shell
java -jar bundletool.jar build-apks --bundle=filename.aab --output=newfilename.apks --mode=universal
```

- Check that output.apks is created in the output folder or not. You can use this .apk file .
