代码上游为Lean

高度个人化，不建议使用。如强行使用，请慎重考虑。

不再支持任何的老旧架构单核处理器，如 QCA9563 等...... 或内核空间小于2M的设备

定向支持 Kernel_5.4 x86、R3G(HWNAT)、R2100(HWNAT)、Newifi D1(HWNAT)、XiaoYu C3(HWNAT)、IPQ40xx(挂QCA9984)、K3(不支持屏幕)、Aeroive AP330

Aerohive AP121(Kernel_4.14)

即将支持 Kernel_5.4 IPQ806x(No NSS)

建议使用 Ubuntu 18.04               (Ubuntu 20.04也可)

sudo apt-get -y install build-essential asciidoc binutils bzip2 gawk gettext git libncurses5-dev libz-dev patch python3.5 python2.7 unzip zlib1g-dev lib32gcc1 libc6-dev-i386 subversion flex uglifyjs git-core gcc-multilib p7zip p7zip-full msmtp libssl-dev texinfo libglib2.0-dev xmlto qemu-utils upx libelf-dev autoconf automake libtool autopoint device-tree-compiler g++-multilib antlr3 gperf wget swig rsync

./scripts/feeds update -a && ./scripts/feeds install -a
