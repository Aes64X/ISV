#
# Copyright (C) 2006-2011 OpenWrt.org
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#
include $(TOPDIR)/rules.mk

ARCH:=i386
BOARD:=x86
BOARDNAME:=x86
FEATURES:=ext4 vdi pcmcia fpu boot-part rootfs-part
SUBTARGETS:=64 generic legacy geode

KERNEL_PATCHVER:=5.4

KERNELNAME:=bzImage

include $(INCLUDE_DIR)/target.mk

DEFAULT_PACKAGES += partx-utils fdisk e2fsprogs kmod-mmc-spi luci-app-oaf ethtool htop kmod-fs-exfat amd64-microcode f2fs-tools e4crypt \
luci-app-ttyd luci-app-autotimeset luci-app-nps luci-app-zerotier luci-app-ssr-plus luci-app-cifsd intel-microcode kmod-fs-f2fs \
autocore luci-proto-bonding ca-certificates nano luci-app-dnsfilter luci-app-qbittorrent exfat-fsck exfat-mkfs luci-app-docker autocore-x86 \

$(eval $(call BuildTarget))

$(eval $(call $(if $(CONFIG_ISO_IMAGES),SetupHostCommand,Ignore),mkisofs, \
	Please install mkisofs. , \
	mkisofs -v 2>&1 , \
	genisoimage -v 2>&1 | grep genisoimage, \
	xorrisofs -v 2>&1 | grep xorriso \
))
