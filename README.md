|--------------------------------------------------------------------------
| DNS Workaround for MongoDB Atlas
|--------------------------------------------------------------------------
|
| This machine has an environment-specific DNS issue where Node.js defaults
| to using the localhost DNS server (127.0.0.1) instead of the system's
| configured DNS servers.
|
| As a result, SRV DNS lookups (used by MongoDB Atlas connection strings
| starting with "mongodb+srv://") fail with:
|
|   Error: querySrv ECONNREFUSED
|   _mongodb._tcp.<cluster-name>.mongodb.net
|
| Even though:
|   - Windows DNS is configured correctly.
|   - nslookup resolves the SRV records successfully.
|   - MongoDB Atlas is reachable.
|   - The Mongoose connection code is correct.
|
| Explicitly setting Node's DNS servers to Google's and Cloudflare's public
| DNS servers forces Node to bypass the incorrect localhost resolver,
| allowing MongoDB Atlas SRV records to resolve correctly.
|
| This workaround only affects the current Node.js process and is safe to use.
| It does NOT modify the operating system's DNS settings.
|
| If this project is moved to another machine or deployed to a cloud service,
| test the connection without this workaround first. It may no longer be
| necessary if the environment's DNS configuration is correct.

# Used the following code for development phase only (on index.js in /db):

import dns from 'node:dns'; (at the top of the page)
dns.setServers(["8.8.8.8","1.1.1.1"]);

|--------------------------------------------------------------------------
