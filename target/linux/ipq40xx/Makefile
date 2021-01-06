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
	kmod-leds-gpio kmod-gpio-button-hotplug swconfig opkg exfat-fsck exfat-mkfs \
	kmod-ath10k-ct wpad-openssl kmod-usb-storage-extras fdisk e2fsprogs \
	kmod-usb3 kmod-usb-dwc3 ath10k-firmware-qca4019-ct luci-app-ttyd \
	kmod-fs-exfat luci-app-cifsd luci-app-oaf luci-app-autoreboot luci-app-zerotier \
	htop ethtool

$(eval $(call BuildTarget))
