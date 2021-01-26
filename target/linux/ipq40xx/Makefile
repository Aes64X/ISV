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
	kmod-usb-dwc3-qcom \
	kmod-leds-gpio kmod-gpio-button-hotplug swconfig exfat-fsck exfat-mkfs luci-app-nps \
	kmod-ath10k-ct wpad-openssl kmod-usb-storage-extras fdisk e2fsprogs luci-app-zerotier \
	kmod-usb3 kmod-usb-dwc3 ath10k-firmware-qca4019-ct luci-app-ttyd nano htop \
	kmod-fs-exfat luci-app-cifsd luci-app-oaf luci-app-autoreboot luci-app-qbittorrent \
	htop ethtool

$(eval $(call BuildTarget))
