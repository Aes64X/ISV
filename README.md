代码上游为Lean

高度个人化，不建议使用。如强行使用，请慎重考虑。

不再支持任何的老旧架构单核处理器，如 QCA9563 等...... 或内核空间小于2M的设备及存储器小于32M的设备

定向支持 Kernel_5.4 x86、R3G(HWNAT)、R2100(HWNAT)、Newifi D1(HWNAT)、XiaoYu C3(HWNAT)、IPQ40xx(挂QCA9984)、K3(不支持屏幕)、Aeroive AP330(挂QCA9880\9882)

Aerohive AP121(Kernel_4.14)

感谢 1715173329 现已支持NanoPi R4S

随着个人设备更替，K3即将放弃支持。由于x86机箱到位组装完成，路由将完全交于x86和NanoPi R4S

Xiaoyu C3变更为交换机，R3G、R2100变更为纯AP

建议使用 Ubuntu 18.04               (请勿使用 Ubuntu 20.04)

sudo apt-get -y install build-essential asciidoc binutils bzip2 gawk gettext git libncurses5-dev libz-dev patch python3.5 python2.7 unzip zlib1g-dev lib32gcc1 libc6-dev-i386 subversion flex uglifyjs git-core gcc-multilib p7zip p7zip-full msmtp libssl-dev texinfo libglib2.0-dev xmlto qemu-utils upx libelf-dev autoconf automake libtool autopoint device-tree-compiler g++-multilib antlr3 gperf wget swig rsync

./scripts/feeds update -a && ./scripts/feeds install -a
