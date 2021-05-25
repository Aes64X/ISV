# Copyright (c) 2013 The Linux Foundation. All rights reserved.
#
include $(TOPDIR)/rules.mk

ARCH:=arm
BOARD:=ipq806x
BOARDNAME:=Qualcomm Atheros IPQ806X
FEATURES:=squashfs nand fpu ramdisk
CPU_TYPE:=cortex-a15
CPU_SUBTYPE:=neon-vfpv4
SUBTARGETS:=generic

KERNEL_PATCHVER:=5.4

KERNELNAME:=zImage Image dtbs

include $(INCLUDE_DIR)/target.mk
DEFAULT_PACKAGES += \
	kmod-leds-gpio kmod-gpio-button-hotplug swconfig luci-app-zerotier luci-app-frpc luci-app-frps luci-app-oaf luci-app-ttyd luci-app-ssr-plus \
	uboot-envtools luci-app-wol nano luci-app-n2n_v2 luci-app-arpbind htop ethtool luci-app-dnsfilter

$(eval $(call BuildTarget))
