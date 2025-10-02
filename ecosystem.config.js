module.exports = {
  apps: [{
    name: 'huxley',
    cwd: '/var/www/huxley/out',
    script: 'dotnet',
    args: 'Huxley2.dll',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    autorestart: true,
    min_uptime: '15s',
    max_restarts: 3,
    restart_delay: 5000,
    kill_timeout: 10000,
    env: {
      DOTNET_ENVIRONMENT: 'Production',
      ASPNETCORE_URLS: 'http://127.0.0.1:5055',
      ASPNETCORE_CONTENTROOT: '/var/www/huxley/out',
      StationCodesCsvUrl: 'https://raw.githubusercontent.com/jpsingleton/Huxley2/master/station_codes.csv',
      DOTNET_HOSTBUILDER__RELOADCONFIGONCHANGE: 'false'
    }
  }]
}
