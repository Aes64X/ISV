代码上游为Lean

高度个人化，不建议使用。如强行使用，请慎重考虑。

不再支持任何的老旧架构单核处理器，如 QCA9563 等...... 或内核空间小于2M的设备及存储器小于32M的设备

定向支持 Kernel_4.19 x86、Kernel_5.4 IPQ40xx(仅有线)、Kernel_5.4 IPQ806X、Kernel_5.4 Aeroive AP330(挂QCA9880\9882)

Kernel_5.4 NanoPi R4S （4GB限定）

x86支持25GbE光纤网络

建议使用 Ubuntu 18.04               (请勿使用 Ubuntu 20.04)

sudo apt-get -y install build-essential asciidoc binutils bzip2 gawk gettext git libncurses5-dev libz-dev patch python3.5 python2.7 unzip zlib1g-dev lib32gcc1 libc6-dev-i386 subversion flex uglifyjs git-core gcc-multilib p7zip p7zip-full msmtp libssl-dev texinfo libglib2.0-dev xmlto qemu-utils upx libelf-dev autoconf automake libtool autopoint device-tree-compiler g++-multilib antlr3 gperf wget swig rsync

./scripts/feeds update -a && ./scripts/feeds install -a
