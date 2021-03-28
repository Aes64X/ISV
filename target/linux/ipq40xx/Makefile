include $(TOPDIR)/rules.mk

ARCH:=arm
BOARD:=ipq40xx
BOARDNAME:=Qualcomm Atheros IPQ40XX
FEATURES:=squashfs fpu ramdisk nand
CPU_TYPE:=cortex-a7
CPU_SUBTYPE:=neon-vfpv4
SUBTARGETS:=generic

KERNEL_PATCHVER:=5.4

KERNELNAME:=zImage Image dtbs

include $(INCLUDE_DIR)/target.mk
DEFAULT_PACKAGES += \
	kmod-leds-gpio kmod-gpio-button-hotplug swconfig luci-app-autotimeset luci-app-dnsfilter \
	luci-app-zerotier luci-app-nps luci-app-oaf luci-app-ttyd lm-sensors luci-app-ssr-plus \
	htop ethtool nano autocore-arm

$(eval $(call BuildTarget))
