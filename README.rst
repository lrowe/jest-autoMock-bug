jest.autoMockOff() bug with config.rootDir
------------------------------------------

These tests all pass when the `rootDir` setting in package.json is removed. With the rootDir setting:

* npm modules are not mocked with only::

    jest.autoMockOff()

* npm modules are unexpectedly mocked with both::

    jest.autoMockOff()
    jest.mock('some-npm-module')

* npm modules are not mocked with all three::

    jest.autoMockOff()
    jest.mock('some-npm-module')
    jest.dontMock('some-other-npm-module')
