# Appium Trial

This project is focused on discovering how to use Appium to test mobile and web apps, directed through a Flutter framework lenses.

## Motivation

Flutter is becoming more and more common in the industry because it is sold as a "write once, use anywhere" framework.
In practice, this is more nuanced, but we can leave that for a later discussion.
However, one of the requirements of any (quality) piece of software is testing.
Web testing is a solved problem with many technologies and tutorials.
Native testing is more challenging.
Using emulators helps when a developer does not have a real device, but we still need a harness to test multiple devices and multiple OSes.
Enter Appium.

### why use appium instead of flutter builtin tests

Can be applied to other technologies like react native or Svelte. 

Flutter tests do not support interacting with Webviews (which is the new login standard)

## Project Components

### Local setup

Part of this project is to explain how to bootstrap appium testing on a new device locally.

This includes installing required dependencies, writing the first automated test, and running your first automation grid.

### CI/CD

A test framework is not complete without an integration with a CI/CD platform.

For this project, I use Github Actions to run an automation grid for each releease.

Bonus: Include screenshots for each test in the release.

### Troubleshooting

Every technology has edge cases. Below are a few I discovered when learning Appium
