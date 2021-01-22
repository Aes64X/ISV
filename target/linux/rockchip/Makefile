#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#
include $(TOPDIR)/rules.mk

BOARD:=rockchip
BOARDNAME:=Rockchip
FEATURES:=ext4 audio usb usbgadget display gpio fpu pci pcie rootfs-part boot-part squashfs
SUBTARGETS:=armv8

KERNEL_PATCHVER=5.4

define Target/Description
	Build firmware image for Rockchip SoC devices.
endef

include $(INCLUDE_DIR)/target.mk

DEFAULT_PACKAGES += uboot-envtools partx-utils exfat-mkfs e2fsprogs mkf2fs nano kmod-gpio-button-hotplug exfat-fsck luci-app-cifsd \
		    automount autocore-arm fdisk kmod-fs-f2fs kmod-fs-exfat opkg luci-app-oaf ethtool haveged htop lm-sensors \
		    luci-app-zerotier luci-app-qbittorrent luci-app-ttyd luci-app-autoreboot

KERNELNAME:=Image dtbs

$(eval $(call BuildTarget))
