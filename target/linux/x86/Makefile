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
FEATURES:=squashfs vdi pcmcia fpu boot-part rootfs-part
SUBTARGETS:=64 generic legacy geode

KERNEL_PATCHVER:=4.19
KERNEL_TESTING_PATCHVER:=5.4

KERNELNAME:=bzImage

include $(INCLUDE_DIR)/target.mk

DEFAULT_PACKAGES += partx-utils mkf2fs fdisk e4crypt kmod-mmc-spi kmod-sdhci luci-app-docker intel-microcode \
kmod-bnxt kmod-fs-f2fs kmod-igc luci-app-autotimeset luci-app-cifsd luci-app-dnsfilter exfat-fsck luci-app-flowoffload \
htop lm-sensors autocore-x86 luci-proto-bonding luci-app-zerotier ca-certificates nano exfat-mkfs \
kmod-mlx5-core luci-app-nps luci-app-oaf luci-app-ssr-plus luci-app-ttyd kmod-fs-exfat f2fs-tools \

$(eval $(call BuildTarget))

$(eval $(call $(if $(CONFIG_ISO_IMAGES),SetupHostCommand,Ignore),mkisofs, \
	Please install mkisofs. , \
	mkisofs -v 2>&1 , \
	genisoimage -v 2>&1 | grep genisoimage, \
	xorrisofs -v 2>&1 | grep xorriso \
))
