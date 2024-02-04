export type CustomUser = {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;

  image: string;
  role: string;
  bio: string;
  theme: string;
};

export type ServerData = {
  name: string;
  status: string;
  cpu: number;
  cpus: number;
  mem: number;
  maxmem: number;
  uptime: number;
  vmid: number;
};

export type HostData = {
  loadavg: string[];
  cpu: number;
  wait: number;
  swap: {
    total: number;
    used: number;
    free: number;
  };
  kversion: string;
  idle: number;
  memory: {
    total: number;
    used: number;
    free: number;
  };
  uptime: number;
  ksm: {
    shared: number;
  };
  cpuinfo: {
    user_hz: number;
    cores: number;
    mhz: string;
    model: string;
    cpus: number;
    flags: string;
    hvm: string;
    sockets: number;
  };
  pveversion: string;
  rootfs: {
    used: number;
    total: number;
    avail: number;
    free: number;
  };
};

export type serverType = "lxc" | "qemu";
