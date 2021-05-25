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
	kmod-leds-gpio kmod-gpio-button-hotplug swconfig luci-app-dnsfilter \
	luci-app-zerotier luci-app-frpc luci-app-frps luci-app-oaf luci-app-ttyd luci-app-ssr-plus \
	htop ethtool nano luci-app-arpbind luci-app-cpufreq luci-app-wol

$(eval $(call BuildTarget))
